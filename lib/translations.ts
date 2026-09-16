export type Locale = "he" | "en";

export interface HelpItem {
  index: string;
  title: string;
  body: string;
}

export interface WorkModel {
  title: string;
  body: string;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  brand: string;
  nav: {
    about: string;
    help: string;
    contact: string;
  };
  langSwitch: {
    he: string;
    en: string;
  };
  cta: {
    talk: string;
  };
  hero: {
    kicker: string;
    paragraphs: string[];
    portraitAlt: string;
    logosLabel: string;
    logosAlt: {
      monday: string;
      meta: string;
      appsflyer: string;
    };
  };
  pov: {
    lines: string[];
    resolution: string;
  };
  help: {
    kicker: string;
    title: string;
    items: HelpItem[];
  };
  audience: {
    body: string;
  };
  about: {
    kicker: string;
    title: string;
    intro: string;
    capabilities: string[];
  };
  work: {
    kicker: string;
    title: string;
    models: {
      project: WorkModel;
      ongoing: WorkModel;
      fractional: WorkModel;
    };
  };
  finalCta: {
    title: string;
    cta: string;
    email: string;
    linkedin: string;
    linkedinLabel: string;
  };
  footer: {
    rights: string;
  };
}

export const translations: Record<Locale, Dictionary> = {
  he: {
    meta: {
      title: "אור לגזיאל, חוויית עובד, קהילה ותרבות שעובדות באמת",
      description:
        "אור לגזיאל מחברת בין מה שהעסק רוצה לבין מה שאנשים באמת צריכים, דרך קהילות, חוויית עובד, אירועים ופרויקטים. שש שנות ניסיון בחברות כמו monday.com, Meta ו-AppsFlyer.",
    },
    brand: "אור לגזיאל",
    nav: {
      about: "עליי",
      help: "איך אני עוזרת",
      contact: "יצירת קשר",
    },
    langSwitch: {
      he: "עברית",
      en: "EN",
    },
    cta: {
      talk: "בואו נדבר",
    },
    hero: {
      kicker: "חוויית עובד · קהילה · תרבות",
      paragraphs: [
        "אני יודעת איך לחבר בין מה שהעסק רוצה לבין מה שאנשים באמת צריכים.",
        "שש שנים בתפקידי חוויית עובד בחברות גלובליות לימדו אותי איך לעשות את זה בפועל.",
      ],
      portraitAlt: "תמונת פורטרט מקצועית",
      logosLabel: "6 שנות ניסיון בחברות כמו",
      logosAlt: {
        monday: "לוגו monday.com",
        meta: "לוגו Meta",
        appsflyer: "לוגו AppsFlyer",
      },
    },
    pov: {
      lines: [
        "אירוע אחד לא הופך לקהילה.",
        "פעילות אחת לא הופכת לחוויה.",
      ],
      resolution: "זה קורה כשיש כיוון ברור מההתחלה, וכאן אני נכנסת.",
    },
    help: {
      kicker: "איך אני עוזרת",
      title: "איפה אני נכנסת לתמונה",
      items: [
        {
          index: "01",
          title: "בנייה מאפס",
          body: "קהילה, תוכנית חוויית עובד, מהלך תרבותי או יוזמה חדשה, מהרעיון ועד הבנייה בפועל.",
        },
        {
          index: "02",
          title: "חיזוק ורענון",
          body: "קהילה שלא מספיק פעילה, חוויית עובד שצריכה רענון, תוכנית שלא מייצרת מספיק מעורבות, או מהלך שצריך כיוון חדש.",
        },
        {
          index: "03",
          title: "ניהול קצה לקצה",
          body: "מהרעיון והאסטרטגיה, דרך תכנון ועבודה מול ספקים וגורמים שונים, ועד הביצוע בפועל.",
        },
        {
          index: "04",
          title: "שותפות לתקופה",
          body: "חיזוק חיצוני לצוות קיים, לפרויקט, לתקופה עמוסה או לצורך מסוים, בלי צורך בגיוס למשרה מלאה.",
        },
      ],
    },
    audience: {
      body: "אני עובדת עם חברות, ארגונים, מותגים וקהילות שרוצים ליצור חיבור חזק יותר עם האנשים שלהם, בין אם מדובר בפרויקט נקודתי ובין אם בחיזוק שוטף לצוות קיים.",
    },
    about: {
      kicker: "ניסיון",
      title: "אני יודעת איך זה נראה מבפנים",
      intro:
        "שש שנים של ניסיון בחוויית עובד, סביבת עבודה, קהילה, תפעול, אירועים וניהול פרויקטים, בתוך חברות טכנולוגיה גלובליות.",
      capabilities: [
        "מטרות עסקיות",
        "צרכים של עובדים",
        "בעלי עניין פנימיים",
        "תקציבים ולוחות זמנים",
        "עבודה מול ספקים",
        "ביצוע בפועל",
      ],
    },
    work: {
      kicker: "שיתוף פעולה",
      title: "איך אפשר לעבוד ביחד",
      models: {
        project: {
          title: "פרויקט",
          body: "פרויקט מוגדר, עם התחלה וסיום ברורים.",
        },
        ongoing: {
          title: "ליווי שוטף",
          body: "עבודה שוטפת וגמישה, לצד צוות קיים.",
        },
        fractional: {
          title: "פרויקט ספציפי",
          body: "נכנסת לצורך אחד וממוקד, בלי לקחת על עצמי את כל התהליך.",
        },
      },
    },
    finalCta: {
      title: "רוצים לבנות חוויית עובד טובה יותר, קהילה חזקה יותר או מהלך שאנשים באמת ירגישו?",
      cta: "בואו נדבר",
      email: "[EMAIL]",
      linkedin: "[LINKEDIN URL]",
      linkedinLabel: "לינקדאין",
    },
    footer: {
      rights: "כל הזכויות שמורות.",
    },
  },
  en: {
    meta: {
      title: "Or Lagziel, people, community, and culture that actually work",
      description:
        "Or Lagziel connects what a business wants with what people actually need, through communities, employee experience, events, and projects. Six years of experience across monday.com, Meta, and AppsFlyer.",
    },
    brand: "Or Lagziel",
    nav: {
      about: "About",
      help: "How I Help",
      contact: "Contact",
    },
    langSwitch: {
      he: "עברית",
      en: "EN",
    },
    cta: {
      talk: "Let's talk",
    },
    hero: {
      kicker: "Employee Experience · Community · Culture",
      paragraphs: [
        "I know how to connect what a business wants with what people actually need.",
        "Six years in employee experience at global companies taught me how to do that in practice.",
      ],
      portraitAlt: "Professional portrait",
      logosLabel: "6 years of experience across",
      logosAlt: {
        monday: "monday.com logo",
        meta: "Meta logo",
        appsflyer: "AppsFlyer logo",
      },
    },
    pov: {
      lines: [
        "One event doesn't make a community.",
        "One activity doesn't make an experience.",
      ],
      resolution: "That happens when there's a clear direction from the start, and that's where I come in.",
    },
    help: {
      kicker: "How I Help",
      title: "Where I step in",
      items: [
        {
          index: "01",
          title: "From scratch",
          body: "A community, an employee experience program, a cultural shift, or a new initiative, from first idea through to launch.",
        },
        {
          index: "02",
          title: "Strengthen & refresh",
          body: "A community that's gone quiet, an employee experience that needs a refresh, a program that isn't driving enough engagement, or an initiative that needs new direction.",
        },
        {
          index: "03",
          title: "End-to-end management",
          body: "From idea and strategy, through planning and working with vendors and stakeholders, to real execution on the ground.",
        },
        {
          index: "04",
          title: "Partnership for a period",
          body: "Outside support for an existing team, a project, a busy period, or a specific need, without hiring for a full-time role.",
        },
      ],
    },
    audience: {
      body: "I work with companies, organizations, brands, and communities who want a stronger connection with their people, whether that means a focused project or ongoing support alongside an existing team.",
    },
    about: {
      kicker: "Experience",
      title: "I know how it looks from the inside",
      intro:
        "Six years of experience across employee experience, workplace, community, operations, events, and project management, inside global technology companies.",
      capabilities: [
        "Business goals",
        "Employee needs",
        "Internal stakeholders",
        "Budgets and timelines",
        "Vendor relationships",
        "Real-world execution",
      ],
    },
    work: {
      kicker: "Collaboration",
      title: "How we can work together",
      models: {
        project: {
          title: "Project",
          body: "A defined project with a clear start and finish.",
        },
        ongoing: {
          title: "Ongoing support",
          body: "Flexible, ongoing work alongside an existing team.",
        },
        fractional: {
          title: "Specific project",
          body: "I step in for one focused need, without taking on the whole process.",
        },
      },
    },
    finalCta: {
      title: "Want to build a better employee experience, a stronger community, or something people actually feel?",
      cta: "Let's talk",
      email: "[EMAIL]",
      linkedin: "[LINKEDIN URL]",
      linkedinLabel: "LinkedIn",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};
