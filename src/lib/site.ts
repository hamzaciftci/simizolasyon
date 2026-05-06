export const SITE = {
  name: "SİM İZOLASYON",
  domain: "https://www.simizolasyon.com.tr",
  phone1: "0534 623 49 62",
  phone2: "0534 746 56 62",
  phone3: "0537 748 01 62",
  phone1Tel: "+905346234962",
  phone2Tel: "+905347465662",
  phone3Tel: "+905377480162",
  whatsapp: "905346234962",
  whatsappMessage: "Merhaba, izolasyon hizmetleriniz hakkında bilgi almak istiyorum.",
  address: "YAMANLAR MAH. KUBİLAY CAD. NO: 233 C BAYRAKLI / İZMİR",
  city: "İzmir",
  email: "info@simizolasyon.com.tr",
};

export const waLink = (msg: string = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
