/**
 * Form submission helper — Web3Forms (ücretsiz email gönderim servisi).
 *
 * Çalışma akışı:
 * 1. Form POST → Web3Forms API → info@simizolasyon.com.tr'ye email
 * 2. Aynı anda WhatsApp deeplink açılır (kullanıcı isterse direkt mesaj)
 * 3. Hata olursa kullanıcı yine de WhatsApp'tan ulaşabilir
 *
 * Setup:
 * 1. https://web3forms.com → Access Key al (kayıt yok, e-mail yeter)
 * 2. Key'i info@simizolasyon.com.tr ile ilişkilendir
 * 3. Vercel Environment Variable: VITE_WEB3FORMS_KEY = <access_key>
 * 4. Vercel auto-redeploy
 *
 * Ücretsiz tier: 250 submission/ay (Sim İzolasyon için yeterli)
 */
import { waLink, SITE } from "./site";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

// Web3Forms access key (info@simizolasyon.com.tr için).
// VITE_WEB3FORMS_KEY env var varsa o kullanılır; yoksa aşağıdaki hardcoded fallback.
// Key public (browser'da görünür) — bu Web3Forms'un beklenen pattern'i.
const WEB3FORMS_KEY =
  (import.meta.env.VITE_WEB3FORMS_KEY as string | undefined) ||
  "20db1110-2ad3-493b-af8a-09396d201a6f";

export type ContactFormPayload = {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  message?: string;
  source?: string;       // "anasayfa", "hizmet detay: cati-izolasyon-izmir", "ilce: bornova"...
  honeypot?: string;     // spam bot field — kullanıcı boş bırakmalı
};

export type SubmitResult = {
  ok: boolean;
  channel: "email" | "whatsapp-only";
  error?: string;
};

/**
 * Telefon validasyonu — Türkiye için ≥10 rakam.
 */
export function validatePhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 14;
}

/**
 * Email gönderir (Web3Forms üzerinden) ve paralel olarak WhatsApp linkini döner.
 * Spam ihlali, sunucu hatası veya key eksikliği durumunda WhatsApp fallback'i çalışır.
 */
export async function submitContactForm(
  data: ContactFormPayload,
): Promise<SubmitResult & { whatsappUrl: string }> {
  // WhatsApp pre-fill mesajı (her durumda hazırla)
  const waMessage = [
    `Merhaba, ${data.source ?? "iletisim formu"} üzerinden teklif almak istiyorum.`,
    "",
    `Ad Soyad: ${data.name}`,
    `Telefon: ${data.phone}`,
    data.email ? `E-posta: ${data.email}` : null,
    data.service ? `Hizmet: ${data.service}` : null,
    data.message ? `Mesaj: ${data.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const whatsappUrl = waLink(waMessage);

  // Web3Forms key yoksa sadece WhatsApp'a yönlendir (geliştirme/preview ortamı)
  if (!WEB3FORMS_KEY) {
    return {
      ok: true,
      channel: "whatsapp-only",
      whatsappUrl,
    };
  }

  try {
    const subject = data.service
      ? `Yeni teklif talebi: ${data.service}`
      : "Yeni iletişim formu talebi";

    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject,
        from_name: `${data.name} (Sim İzolasyon Formu)`,
        replyto: data.email || undefined,
        // Web3Forms tüm field'ları email body'sine ekler
        ad_soyad: data.name,
        telefon: data.phone,
        eposta: data.email || "(verilmedi)",
        hizmet: data.service || "(belirtilmedi)",
        mesaj: data.message || "(boş)",
        kaynak: data.source || "Bilinmeyen",
        site: SITE.domain,
        // Anti-spam
        botcheck: "",
      }),
    });

    const json = (await res.json().catch(() => ({}))) as {
      success?: boolean;
      message?: string;
    };

    if (res.ok && json.success) {
      return { ok: true, channel: "email", whatsappUrl };
    }

    return {
      ok: false,
      channel: "whatsapp-only",
      error: json.message ?? `HTTP ${res.status}`,
      whatsappUrl,
    };
  } catch (err) {
    return {
      ok: false,
      channel: "whatsapp-only",
      error: err instanceof Error ? err.message : "network_error",
      whatsappUrl,
    };
  }
}
