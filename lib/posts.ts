import type { Locale } from "./translations";

// LinkedIn posts shown under "About". `project` (optional) also adds a
// "I wrote about this" link inside that project's story window.
export interface Post {
  url: string;
  tag: string;
  text: string;
  project?: string;
}

export interface PostsCopy {
  label: string;
  read: string;
  /** Shown next to the label when the posts are in another language. */
  note: string;
  items: Post[];
}

export const posts: Record<Locale, PostsCopy> = {
  "he": {
    "label": "מהלינקדאין שלי",
    "read": "לקריאה בלינקדאין",
    "note": "",
    "items": [
      {
        "url": "https://lnkd.in/p/eQx_dVRk",
        "tag": "Lights On",
        "project": "lights",
        "text": "מה שיצרנו כאן יחד זה לתת חיים חדשים לפריטים שכבר ויתרו עליהם. הכי סימבולי, וכל כך מרגש."
      },
      {
        "url": "https://lnkd.in/p/eHiWm4yH",
        "tag": "TED Break",
        "project": "ted",
        "text": "לפעמים בשביל לחבר צוות לא צריך אירוע ענק או פעילות מוגזמת. אפשר פשוט לעצור רגע מהיום יום, לשבת ביחד, ולהקשיב."
      },
      {
        "url": "https://lnkd.in/p/eJ-keMzA",
        "tag": "AF Born",
        "project": "afborn",
        "text": "עוד פרויקט שגורם לי להתרגש פעמיים בחודש, כל פעם מחדש."
      }
    ]
  },
  "en": {
    "label": "From my LinkedIn",
    "read": "Read on LinkedIn",
    "note": "Posts are in Hebrew",
    "items": [
      {
        "url": "https://lnkd.in/p/eQx_dVRk",
        "tag": "Lights On",
        "project": "lights",
        "text": "What we created here together is new life for items people had already given up on. So symbolic, and so moving."
      },
      {
        "url": "https://lnkd.in/p/eHiWm4yH",
        "tag": "TED Break",
        "project": "ted",
        "text": "Sometimes connecting a team doesn't take a huge event or an over-the-top activity. You can simply pause the day-to-day, sit together, and listen."
      },
      {
        "url": "https://lnkd.in/p/eJ-keMzA",
        "tag": "AF Born",
        "project": "afborn",
        "text": "Another project that gets me excited twice a month, every single time."
      }
    ]
  }
};

export function postForProject(locale: Locale, project: string): string | null {
  return (posts[locale] ?? posts.en).items.find((p) => p.project === project)?.url ?? null;
}
