// Central place for the business WhatsApp number so it only needs to change
// in one spot. wa.me requires the number with no "+", spaces or dashes.
const WHATSAPP_NUMBER = "972526617882";

export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
