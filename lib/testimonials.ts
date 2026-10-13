import type { Locale } from "./translations";

// Recommendations from people Or has worked with. Kept in their own file so
// new ones can be added without touching the main translations.
// `excerpt` (optional) is the short line written on the note; a button reveals the full text.
export interface Testimonial {
  name: string;
  initials: string;
  role: string;
  text: string;
  excerpt?: string;
}

export interface TestimonialsCopy {
  title: string;
  more: string;
  less: string;
  /** Shown under the cards when the quotes are translations. */
  translated: string;
  items: Testimonial[];
}

export const testimonials: Record<Locale, TestimonialsCopy> = {
  "he": {
    "title": "מה אומרים עליי",
    "more": "לקריאה המלאה",
    "less": "פחות",
    "translated": "",
    "items": [
      {
        "name": "מאיה כץ",
        "initials": "מכ",
        "role": "מנהלת אירועים ושיווק, Xtra Mile",
        "text": "מעבר לתשוקה ולאנרגיות המדבקות שאור מביאה איתה, היא מקצוענית אמיתית ויודעת להפוך כל תהליך עבודה לזורם, מדויק ואפקטיבי. לעבוד איתה זו פשוט חוויה מעולה ותוצאה ברמה הגבוהה ביותר."
      },
      {
        "name": "עומר לוי",
        "initials": "על",
        "role": "Global Sustainability Consultant",
        "text": "עבדתי עם אור על פרויקטים שונים בנושאי קיימות ותרומה לקהילה - את כולם היא הרימה, ניהלה והכפילה, בעזרת יצירתיות, נחישות והמון אנרגיה. היא תקתקנית, עם ראש גדול ומאפשרת שקט לארגון, הדברים קורים. יש לה אש פנימית, היא מזיזה הרים, מקצועית, ותמיד נעים לעבוד איתה. יש אנשים שפשוט כיף לעבוד איתם, ויש כאלה שגם גורמים לדברים לקרות, ואור, כשמה כן היא, היא לגמרי שניהם!",
        "excerpt": "יש אנשים שפשוט כיף לעבוד איתם, ויש כאלה שגם גורמים לדברים לקרות, ואור, כשמה כן היא, היא לגמרי שניהם!"
      },
      {
        "name": "אתי גזית",
        "initials": "אג",
        "role": "HRBP & Operations Team Lead",
        "excerpt": "אור היא תקתקנית, יוזמת וביצועיסטית, מהאנשים שאפשר לסמוך עליהם בעיניים עצומות.",
        "text": "אור היא תקתקנית, יוזמת וביצועיסטית, מהאנשים שאפשר לסמוך עליהם בעיניים עצומות. כשהיא לוקחת משימה, היא דואגת להתחיל, לקדם ולסיים אותה עד הסוף, בלי לעגל פינות ובלי להשאיר קצוות פתוחים. היא יודעת לזהות מה צריך לקרות, להניע תהליכים, לחשוב מחוץ לקופסה ולשנות כיוון כשצריך, תמיד בגמישות, בפתיחות ובמטרה להגיע לתוצאה הטובה ביותר. לצד כל אלה, היא מביאה איתה אנרגיה חיובית, אור ואופטימיות שמקרינים על כל מי שסביבה. היא יודעת לרתום אנשים, ליצור חיבור, להניע לעשייה ולגרום לדברים להתקדם בדרך נעימה, שירותית ומלאת התלהבות. אני בטוחה שכל מי שיזכה לעבוד איתה יגלה במהרה שילוב מנצח של מקצועיות, יוזמה, מחויבות ואנושיות. ממליצה עליה מכל הלב, ובטוחה שהיא תביא את הערך המיוחד שלה לכל עשייה שתבחר להוביל."
      },
      {
        "name": "הדר יעקוב",
        "initials": "הי",
        "role": "People Experience, monday.com",
        "excerpt": "אור מבחינתי היא מקצועיות ללא פשרות, יצירתיות וחשיבה אסטרטגית.",
        "text": "אור מבחינתי היא מקצועיות ללא פשרות, יצירתיות וחשיבה אסטרטגית. יש לה יכולת יוצאת דופן לחבר בין אנשים, רעיונות וביצוע, והיא מביאה איתה גישה חיובית, שיתוף פעולה אמיתי ויכולת להפוך רעיונות למציאות ולייצר אימפקט משמעותי, כזה שנשאר לאורך זמן 🤍"
      }
    ]
  },
  "en": {
    "title": "What people say",
    "more": "Read in full",
    "less": "Show less",
    "translated": "Translated from Hebrew",
    "items": [
      {
        "name": "Maya Katz",
        "initials": "MK",
        "role": "Events & Marketing Manager, Xtra Mile",
        "text": "Beyond the passion and contagious energy Or brings with her, she is a true professional who knows how to make every work process smooth, precise and effective. Working with her is simply a great experience, with results of the highest level."
      },
      {
        "name": "Omer Levy",
        "initials": "OL",
        "role": "Global Sustainability Consultant",
        "text": "I worked with Or on a range of sustainability and community-giving projects. She got every one of them off the ground, ran them and doubled them, with creativity, determination and a lot of energy. She gets things done, sees the big picture and brings calm to the organization: things happen. She has an inner fire, she moves mountains, she is professional and always a pleasure to work with. Some people are simply fun to work with, and some also make things happen. Or, true to her name (Or means light), is completely both!",
        "excerpt": "Some people are simply fun to work with, and some also make things happen. Or, true to her name (Or means light), is completely both!"
      },
      {
        "name": "Eti Gazit",
        "initials": "EG",
        "role": "HRBP & Operations Team Lead",
        "excerpt": "Or is organized, proactive and a true doer, one of those people you can trust with your eyes closed.",
        "text": "Or is organized, proactive and a true doer, one of those people you can trust with your eyes closed. When she takes on a task, she starts it, moves it forward and sees it through to the end, without cutting corners or leaving loose ends. She knows how to spot what needs to happen, drive processes, think outside the box and change direction when needed, always with flexibility, openness and the aim of reaching the best possible result. Alongside all that, she brings positive energy, light and optimism that rub off on everyone around her. She knows how to rally people, build connection, get things moving and make progress happen in a pleasant, service-minded and enthusiastic way. I am sure that anyone lucky enough to work with her will quickly discover a winning combination of professionalism, initiative, commitment and humanity. I recommend her wholeheartedly, and I am sure she will bring her special value to whatever she chooses to lead."
      },
      {
        "name": "Hadar Yaakov",
        "initials": "HY",
        "role": "People Experience, monday.com",
        "excerpt": "To me, Or is uncompromising professionalism, creativity and strategic thinking.",
        "text": "To me, Or is uncompromising professionalism, creativity and strategic thinking. She has an exceptional ability to connect people, ideas and execution, and she brings a positive approach, true collaboration and the ability to turn ideas into reality and create meaningful impact, the kind that lasts 🤍"
      }
    ]
  }
};
