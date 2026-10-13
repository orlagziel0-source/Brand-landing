import type { Locale } from "./translations";

// The stories behind the photos in the events strip.
// `photos` lists, per project, the strip photos (0-based: 0 = event-01.jpg)
// that open it. A project with no photos is still reachable with the
// previous/next arrows inside the window. `order` sets that arrow order.
// `plusPos` moves the small "+" badge on photos where the top-left corner
// would cover a face or text: "bl" = bottom-left, "tr" = top-right.
export interface Project {
  name: string;
  org: string;
  challenge: string;
  did: string;
  result: string;
}

export interface ProjectsCopy {
  strip: string;
  close: string;
  prev: string;
  next: string;
  labels: { challenge: string; did: string; result: string };
  projects: Record<string, Project>;
}

export const projectsData: {
  order: string[];
  photos: Record<string, number[]>;
  plusPos: Record<string, "bl" | "tr">;
  he: ProjectsCopy;
  en: ProjectsCopy;
} = {
  "order": [
    "blossom",
    "lights",
    "ted",
    "tedws",
    "vered",
    "eshkol",
    "metafair",
    "meta11",
    "afborn",
    "family"
  ],
  "photos": {
    "blossom": [
      4,
      6,
      8
    ],
    "lights": [
      14,
      10,
      12,
      17
    ],
    "ted": [
      16
    ],
    "tedws": [],
    "vered": [
      13,
      9
    ],
    "eshkol": [
      7
    ],
    "metafair": [
      15,
      1,
      5,
      11
    ],
    "meta11": [
      3
    ],
    "afborn": [
      0
    ],
    "family": [
      2
    ]
  },
  "plusPos": {
    "7": "bl",
    "13": "bl",
    "14": "tr",
    "16": "tr"
  },
  "he": {
    "close": "סגירה",
    "prev": "הפרויקט הקודם",
    "next": "הפרויקט הבא",
    "labels": {
      "challenge": "על הפרויקט",
      "did": "מה כלל הפרויקט",
      "result": "התוצאה"
    },
    "projects": {
      "blossom": {
        "name": "Blossom",
        "org": "AppsFlyer",
        "challenge": "אירוע פתיחת האביב והרמת כוסית לפסח לכלל עובדי החברה, סביב קונספט של פריחה, התחדשות והתחלות חדשות.",
        "did": "פיתוח הקונספט, תכנון חוויית העובד, ניהול ההפקה מקצה לקצה בשיתוף AP Pro, עבודה עם ספקים קטנים וניהול האירוע בשטח.",
        "result": "חוויה חגיגית ומגבשת, שחיברה בין משמעות החג, העובדים והתרבות הארגונית."
      },
      "lights": {
        "name": "Lights On",
        "org": "monday.com × Just a Second",
        "challenge": "פרויקט חנוכה בסימן אור, התחדשות וקיימות, בשיתוף עמותת Just a Second. העובדים הוזמנו לתרום רהיטים ופריטים ישנים ולקחת חלק בשלושה ימי התנדבות לחידושם, שבסיומם נמכרו הפריטים בפופ־אפ במשרדי החברה.",
        "did": "פיתוח הקונספט, בניית שיתוף הפעולה עם העמותה, גיוס העובדים, תכנון והובלת ימי ההתנדבות והפקת הפופ־אפ.",
        "result": "חוויית עובד המשלבת עשייה חברתית, קיימות ומעורבות עובדים, עם חיבור לערכי חג החנוכה."
      },
      "ted": {
        "name": "TED Break",
        "org": "monday.com",
        "challenge": "יוזמה חודשית שמזמינה עובדים לעצור לרבע שעה באמצע יום העבודה ולהכיר את הסיפורים האישיים שמאחורי האנשים שהם פוגשים בכל יום, בפורמט הרצאות קצרות בהשראת TED.",
        "did": "פיתוח הקונספט, גיוס עובדים לשיתוף סיפורים אישיים, בניית תהליך הכשרה בן שלושה מפגשים לעמידה מול קהל והובלת המפגשים החודשיים.",
        "result": "יצירת מסורת ארגונית המחברת בין עובדים מעבר לתפקיד המקצועי, מעודדת היכרות אישית ומעניקה במה וכלים לביטוי עצמי."
      },
      "tedws": {
        "name": "TED Workshop",
        "org": "monday.com",
        "challenge": "סדנת דיבור מול קהל, עמידה על במה ורושם ראשוני בהנחיית ורד פלדמן, כחלק מפרויקט TED Break.",
        "did": "יצירת שיתוף הפעולה, בניית תהליך הכשרה בן שלושה מפגשים והנגשת הסדנה לעובדים המשתתפים בפרויקט.",
        "result": "הענקת כלים וביטחון לעובדים לשתף את סיפורם האישי מול קהל במסגרת TED Break."
      },
      "vered": {
        "name": "ורד פלדמן",
        "org": "Meta",
        "challenge": "הרצאה לעובדי החברה בהנחיית השחקנית ורד פלדמן, בנושא רושם ראשוני, תקשורת בין־אישית ושפת גוף.",
        "did": "ייזום שיתוף הפעולה, תכנון התוכן והפקת ההרצאה לעובדים.",
        "result": "חשיפה לכלים פרקטיים לתקשורת אפקטיבית וליצירת רושם ראשוני."
      },
      "eshkol": {
        "name": "אשכול נבו",
        "org": "Writing Workshop",
        "challenge": "בעידן שבו הבינה המלאכותית משנה את הדרך שבה אנחנו עובדים ויוצרים, סדנת כתיבה אינטואיטיבית עם הסופר אשכול נבו, שנועדה לעצור לרגע, להתחבר ליצירתיות ולתת מקום לקול האנושי שאף טכנולוגיה לא יכולה להחליף.",
        "did": "הגיית הרעיון, גיבוש הקונספט, תכנון והפקת הסדנה עם בית הספר לכתיבה של אשכול נבו.",
        "result": "חוויה אישית ומעוררת מחשבה, שעודדה ביטוי עצמי, יצירתיות וחיבור אנושי מעבר לשגרת העבודה."
      },
      "metafair": {
        "name": "Meta Fair TLV",
        "org": "Meta",
        "challenge": "יריד חדשנות שנתי המציג את העשייה, הפיתוחים והטכנולוגיות של מחלקות Meta בתל אביב, בדגש על תחום ה-AI. האירוע התקיים בזאפה תל אביב וכלל מתחמי תצוגה בהובלת העובדים והופעה של להקת איפה הילד.",
        "did": "תכנון והפקת האירוע בשיתוף חברת ההפקות Momenta, עבודה מול נציגי המחלקות, ניהול ספקים ואמנים ותפעול האירוע בשטח.",
        "result": "חוויה ארגונית שחיברה בין חדשנות, שיתוף ידע וגאווה בעשייה המקומית, לצד חגיגה משותפת של עובדי החברה."
      },
      "meta11": {
        "name": "11 Years of Meta TLV",
        "org": "Meta",
        "challenge": "חגיגות 11 שנים למשרדי Meta בתל אביב, בהשראת העיר והאופי הייחודי שלה. שלוש קומות המשרד הפכו לשלושה אזורים תל אביביים – פלורנטין, רוטשילד וחוף הים, כשכל קומה הציעה חוויה אחרת של אוכל, עיצוב ופעילויות.",
        "did": "פיתוח הקונספט, תכנון חוויית העובדים, ניהול ההפקה בשיתוף חברת Momenta, עבודה עם ספקים ועסקים מהצפון ומהדרום וניהול האירוע בשטח.",
        "result": "חגיגת יום הולדת ארגונית שחיברה בין העובדים, העיר תל אביב ותמיכה בעסקים מקומיים מרחבי הארץ."
      },
      "afborn": {
        "name": "AF Born",
        "org": "AppsFlyer",
        "challenge": "תוכנית מפגשים דו-חודשית לעובדות ועובדים בחופשת לידה, יחד עם התינוקות מגיל לידה ועד חצי שנה, בליווי מור שמעוני More For Your Baby.",
        "did": "פיתוח הקונספט, בניית תוכנית המפגשים, שיתוף פעולה עם מנחה מקצועית, גיוס המשתתפים והובלת הפעילות השוטפת.",
        "result": "יצירת קהילת הורים פעילה ותומכת, חיזוק תחושת השייכות והחיבור לארגון גם בתקופת חופשת הלידה, ובניית קשרים אישיים שנמשכו גם מחוץ למפגשים."
      },
      "family": {
        "name": "Family Day",
        "org": "AppsFlyer, Meta",
        "challenge": "אירוע משפחות שנועד לפתוח את דלתות החברה להורים ולבני המשפחה של העובדים, לאפשר להם להכיר מקרוב את סביבת העבודה ולהבין מה יקיריהם עושים ביום־יום.",
        "did": "פיתוח הקונספט, תכנון והפקת האירוע, מפגש ושיח עם מייסדי החברה, סיורים במשרדים, עמדות צילום ומזכרת מהאירוע.",
        "result": "חיבור בין העולם האישי למקצועי, יצירת תחושת גאווה ושייכות והפיכת בני המשפחה לחלק מחוויית העובד."
      }
    },
    "strip": "לחצו על תמונה כדי לקרוא על הפרויקט מאחוריה"
  },
  "en": {
    "close": "Close",
    "prev": "Previous project",
    "next": "Next project",
    "labels": {
      "challenge": "About the project",
      "did": "What it included",
      "result": "The outcome"
    },
    "projects": {
      "blossom": {
        "name": "Blossom",
        "org": "AppsFlyer",
        "challenge": "A spring-opening event and Passover toast for all company employees, built around a concept of blossoming, renewal and new beginnings.",
        "did": "Concept development, employee experience design, end-to-end production management in partnership with AP Pro, working with small vendors and managing the event on site.",
        "result": "A festive, bonding experience that connected the meaning of the holiday, the employees and the company culture."
      },
      "lights": {
        "name": "Lights On",
        "org": "monday.com × Just a Second",
        "challenge": "A Hanukkah project themed around light, renewal and sustainability, in partnership with the nonprofit Just a Second. Employees were invited to donate old furniture and items and to join three volunteering days to restore them, after which the items were sold at a pop-up in the company offices.",
        "did": "Concept development, building the partnership with the nonprofit, recruiting employees, planning and leading the volunteering days, and producing the pop-up.",
        "result": "An employee experience combining social impact, sustainability and employee engagement, connected to the values of Hanukkah."
      },
      "ted": {
        "name": "TED Break",
        "org": "monday.com",
        "challenge": "A monthly initiative inviting employees to pause for fifteen minutes in the middle of the workday and get to know the personal stories behind the people they meet every day, in short TED-inspired talks.",
        "did": "Concept development, recruiting employees to share personal stories, building a three-session public-speaking training process, and leading the monthly sessions.",
        "result": "A company tradition that connects employees beyond their professional roles, encourages getting to know each other personally, and gives people a stage and tools for self-expression."
      },
      "tedws": {
        "name": "TED Workshop",
        "org": "monday.com",
        "challenge": "A workshop on public speaking, stage presence and first impressions led by Vered Feldman, as part of the TED Break project.",
        "did": "Building the partnership, designing a three-session training process, and making the workshop available to the employees taking part in the project.",
        "result": "Giving employees the tools and confidence to share their personal story in front of an audience as part of TED Break."
      },
      "vered": {
        "name": "Vered Feldman",
        "org": "Meta",
        "challenge": "A talk for employees led by actress Vered Feldman on first impressions, interpersonal communication and body language.",
        "did": "Initiating the collaboration, planning the content and producing the talk for employees.",
        "result": "Practical tools for effective communication and for making a strong first impression."
      },
      "eshkol": {
        "name": "Eshkol Nevo",
        "org": "Writing Workshop",
        "challenge": "At a time when AI is changing the way we work and create, an intuitive writing workshop with author Eshkol Nevo, designed to pause for a moment, reconnect with creativity and make room for the human voice that no technology can replace.",
        "did": "Coming up with the idea, shaping the concept, and planning and producing the workshop with Eshkol Nevo's writing school.",
        "result": "A personal, thought-provoking experience that encouraged self-expression, creativity and human connection beyond the daily routine."
      },
      "metafair": {
        "name": "Meta Fair TLV",
        "org": "Meta",
        "challenge": "An annual innovation fair showcasing the work, products and technologies of Meta's Tel Aviv teams, with a focus on AI. The event took place at Zappa Tel Aviv and included employee-led showcase areas and a performance by the band Eifo HaYeled.",
        "did": "Planning and producing the event with production company Momenta, working with team representatives, managing vendors and artists, and running the event on site.",
        "result": "An experience that brought together innovation, knowledge sharing and pride in the local work, alongside a shared celebration for employees."
      },
      "meta11": {
        "name": "11 Years of Meta TLV",
        "org": "Meta",
        "challenge": "Celebrating 11 years of Meta's Tel Aviv office, inspired by the city and its unique character. The three office floors became three Tel Aviv neighborhoods (Florentin, Rothschild and the beach), each floor offering a different experience of food, design and activities.",
        "did": "Concept development, employee experience design, production management with Momenta, working with vendors and small businesses from the north and south of Israel, and running the event on site.",
        "result": "A company birthday celebration that connected employees, the city of Tel Aviv, and support for local businesses from across the country."
      },
      "afborn": {
        "name": "AF Born",
        "org": "AppsFlyer",
        "challenge": "A bimonthly meetup program for employees on parental leave, together with their babies from birth to six months, guided by Mor Shimoni of More For Your Baby.",
        "did": "Concept development, building the meetup program, partnering with a professional facilitator, recruiting participants and leading the ongoing activity.",
        "result": "An active, supportive parents' community that strengthened belonging and connection to the company during parental leave, and personal bonds that continued beyond the meetups."
      },
      "family": {
        "name": "Family Day",
        "org": "AppsFlyer, Meta",
        "challenge": "A family event opening the company's doors to employees' parents and family members, so they could see the workplace up close and understand what their loved ones do every day.",
        "did": "Concept development, planning and producing the event, a meet-and-talk session with the company founders, office tours, photo stations and a keepsake from the day.",
        "result": "Connecting the personal and professional worlds, building pride and belonging, and making family members part of the employee experience."
      }
    },
    "strip": "Tap a photo to read about the project behind it"
  }
};

export function projectForPhoto(photo: number): string | null {
  for (const key of projectsData.order) {
    if (projectsData.photos[key]?.includes(photo)) return key;
  }
  return null;
}

export function projectsCopy(locale: Locale): ProjectsCopy {
  return projectsData[locale] ?? projectsData.en;
}
