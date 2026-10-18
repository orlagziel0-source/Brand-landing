import type { Locale } from "./translations";

// Vendors Or has worked with over the years, shown as plain names (no logos)
// and framed as field experience, not as partnerships.
export interface NetworkGroup {
  title: string;
  names: string[];
}

export interface NetworkCopy {
  title: string;
  body: string;
  groups: NetworkGroup[];
  local: { title: string; body: string };
  community: { title: string; body: string };
}

export const network: Record<Locale, NetworkCopy> = {
  en: {
    title: "Knowing the field.",
    body: "Dozens of vendors, creators and nonprofits we have worked with on projects over the years.",
    groups: [
      { title: "Gifts", names: ["Wish Gift", "TFactor", "Z-GUY", "BuyMe", "Bizing"] },
      { title: "Family", names: ["Mor For Your Baby", "Silver Bell", "Manhigota"] },
      { title: "Production", names: ["MOMENTA", "BLEND", "MP LIVE", "VIVO", "AP PRO", "BARDUGO"] },
      { title: "Culinary", names: ["Yarzin Sella", "R2M", "Biscotti", "Amphora", "10Bis"] },
      { title: "Workshops", names: ["Fitmate", "Guru Zuzu", "Shlofta", "Molet", "Clayla TLV", "Sup Yoga TLV"] },
      { title: "Nonprofits", names: ["Latet", "Na Laga'at", "Shavot", "Beit Hashanti", "Just A Second", "Simcha Layeled", "Venatata"] },
    ],
    local: {
      title: "Plus local makers & small businesses.",
      body: "Businesses from the North and the South, women-owned and reservist-owned, and local makers.",
    },
    community: {
      title: "Active professional communities.",
      body: "Part of employee experience communities with hundreds of members, in tech and beyond, for up-to-date knowledge and ideas from the field.",
    },
  },
  he: {
    title: "היכרות עם השטח.",
    body: "עשרות ספקים, יוצרים ועמותות שעבדנו יחד על פרויקטים לאורך השנים.",
    groups: [
      { title: "מתנות", names: ["Wish Gift", "TFactor", "Z-GUY", "BuyMe", "ביזינג"] },
      { title: "משפחה", names: ["Mor For Your Baby", "Silver Bell", "מנהיגותה"] },
      { title: "הפקה", names: ["MOMENTA", "BLEND", "MP LIVE", "VIVO", "AP PRO", "ברדוגו"] },
      { title: "קולינריה", names: ["ירזין סלה", "R2M", "ביסקוטי", "אמפורה", "תן ביס"] },
      { title: "סדנאות", names: ["Fitmate", "גורו זוזו", "שלופטה", "Molet", "Clayla TLV", "Sup Yoga TLV"] },
      { title: "עמותות", names: ["לתת", "נא לגעת", "Shavot", "בית השנטי", "Just A Second", "שמחה לילד", "ונתתה"] },
    ],
    local: {
      title: "וגם עסקים קטנים ויוצרים מקומיים.",
      body: "עסקים מהצפון ומהדרום, בבעלות נשים ומילואימניקים, ויוצרים מקומיים.",
    },
    community: {
      title: "קהילות מקצועיות פעילות.",
      body: "חלק מקהילות חוויית עובד עם מאות משתתפות, בהייטק ומחוצה לו, לידע ולרעיונות עדכניים מהשטח.",
    },
  },
};
