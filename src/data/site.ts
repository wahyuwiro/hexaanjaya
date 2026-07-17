export const siteConfig = {
  companyName: 'PT. HEXA ANJAYA TECH',
  whatsappNumber: '6288906060681',
  // TODO: ganti dengan domain resmi setelah website di-deploy (dipakai untuk sitemap & SEO)
  siteUrl: 'https://hexaanjaya.com',
};

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}
