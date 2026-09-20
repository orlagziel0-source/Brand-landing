export type Locale = "he" | "en";

export interface BuildItem {
  title: string;
  body: string;
  outcome: string;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  brand: string;
  nav: {
    build: string;
    about: string;
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
    titleLead: string;
    titleEmphasis: string;
    subtitle: string;
    serviceLine: string;
  };
  pov: {
    statement: string;
    supporting: string;
  };
  build: {
    eyebrow: string;
    statementLead: string;
    statementEmphasis: string;
    supporting: string;
    items: BuildItem[];
    engagementLine: string;
  };
  about: {
    title: string;
    body: string[];
    portraitAlt: string;
    logosLabel: string;
    logosAlt: {
      monday: string;
      meta: string;
      appsflyer: string;
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
      title: "אור לגזיאל, חוויית עובד שמחברת בין העסק לאנשים",
      description:
        "תכנון, בנייה והוצאה לפועל של תוכניות חוויית עובד, קהילות ואירועים בעלי מטרה. שש שנים של ניסיון בחברות טכנולוגיה גלובליות כמו monday.com, Meta ו-AppsFlyer.",
    },
    brand: "אור לגזיאל",
    nav: {
      build: "מה אפשר לבנות יחד",
      about: "קצת עליי",
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
      titleLead: "חוויית עובד שמחברת בין מה שהעסק רוצה להשיג לבין",
      titleEmphasis: "מה שאנשים באמת צריכים.",
      subtitle:
        "תכנון, בנייה והוצאה לפועל של תוכניות, תהליכים ופרויקטים לאורך מסע העובד, משלב החשיבה ועד הביצוע.",
      serviceLine: "ייעוץ · פרויקטים · ליווי שוטף",
    },
    pov: {
      statement: "לא כל קהל הוא קהילה, ולא כל אירוע מוצלח יוצר חוויית עובד.",
      supporting:
        "חוויית עובד נבנית מהרבה רגעים קטנים לאורך הדרך, איך מצטרפים לחברה, איך מציינים רגעים אישיים, איך מתקשרים, איך בונים קהילה, ואיך גורמים לאנשים להרגיש שיש מחשבה מאחורי הדברים.",
    },
    build: {
      eyebrow: "מה אפשר לבנות יחד",
      statementLead: "לא כל ארגון צריך עוד תקן.",
      statementEmphasis: "כן צריך מישהו שייקח את חוויית העובד קדימה.",
      supporting:
        "Employee Experience במודל גמיש — לפרויקט, לתקופה או לליווי שוטף, בלי לגייס משרה מלאה.",
      items: [
        {
          title: "תוכנית שנתית לחוויית עובד",
          body: "מטרות, תקציב ולוח שנה אחד ברור לכל השנה.",
          outcome: "כדי שכל פעולה תדע למה היא קורית.",
        },
        {
          title: "מסע העובד, רווחה ומשפחה",
          body: "מרגע ההצטרפות ועד רגעים אישיים, משפחה ובריאות.",
          outcome: "כדי שעובדים ירגישו שרואים אותם.",
        },
        {
          title: "קהילות ואירועים עם מטרה",
          body: "קהילות פנימיות ואירועים שנבנים סביב מטרה אחת ברורה.",
          outcome: "כדי שהחיבור בין אנשים יהיה אמיתי, לא טכני.",
        },
        {
          title: "פרויקט ממוקד",
          body: "ריענון מהלך קיים, בניית תחום חדש, או הובלה מקצה לקצה.",
          outcome: "כדי לזוז מהר, בלי תהליך גיוס ארוך.",
        },
      ],
      engagementLine:
        "אפשר לעבוד בפרויקט נקודתי, בייעוץ, בליווי והוצאה לפועל או בשותפות חודשית לאורך השנה.",
    },
    about: {
      title: "6 שנים בעולמות חוויית העובד בחברות גלובליות.",
      body: [
        "במהלך השנים עבדתי בתפקידי People Experience, Workplace, Community, Operations ו-Project Management, ונגעתי כמעט בכל נקודה במסע העובד.",
        "הניסיון הזה מאפשר לי להיכנס מהר, להבין מה חסר, ולחבר בין הצרכים של העסק לבין החוויה של האנשים, בצורה פרקטית וישימה.",
      ],
      portraitAlt: "תמונת פורטרט מקצועית",
      logosLabel: "ניסיון מ־",
      logosAlt: {
        monday: "לוגו monday.com",
        meta: "לוגו Meta",
        appsflyer: "לוגו AppsFlyer",
      },
    },
    finalCta: {
      title: "רוצים לבנות חוויית עובד יותר מדויקת, מחוברת ועקבית?",
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
      title: "Or Lagziel, employee experience that connects business and people",
      description:
        "Planning, building, and delivering employee experience programs, communities, and purposeful events. Six years of experience at global tech companies including monday.com, Meta, and AppsFlyer.",
    },
    brand: "Or Lagziel",
    nav: {
      build: "What We Can Build Together",
      about: "About",
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
      titleLead: "Employee experience that connects what a business wants to achieve with",
      titleEmphasis: "what people actually need.",
      subtitle:
        "Planning, building, and delivering programs, processes, and projects across the employee journey, from first thinking to real execution.",
      serviceLine: "Advisory · Projects · Ongoing partnership",
    },
    pov: {
      statement:
        "Not every audience is a community, and not every successful event creates an employee experience.",
      supporting:
        "Employee experience is built from many small moments along the way, how people join a company, how personal milestones are marked, how things are communicated, how community is built, and how people feel the thought behind it all.",
    },
    build: {
      eyebrow: "What We Can Build Together",
      statementLead: "Not every organization needs another standard.",
      statementEmphasis: "It needs someone to take employee experience forward.",
      supporting:
        "Employee experience on a flexible model — a project, a defined period, or ongoing support, without hiring a full-time role.",
      items: [
        {
          title: "Annual employee experience plan",
          body: "Goals, budget, and one clear calendar for the year.",
          outcome: "So every initiative knows why it exists.",
        },
        {
          title: "Employee journey, wellbeing & family",
          body: "From onboarding to personal milestones, family, and health.",
          outcome: "So people feel genuinely seen.",
        },
        {
          title: "Communities & purposeful events",
          body: "Internal communities and events built around one clear purpose.",
          outcome: "So connection feels real, not procedural.",
        },
        {
          title: "Focused projects",
          body: "Refresh an existing initiative, build something new, or lead end to end.",
          outcome: "So you can move fast, without a long hiring process.",
        },
      ],
      engagementLine:
        "Work can happen as a single project, advisory support, hands-on delivery, or an ongoing monthly partnership throughout the year.",
    },
    about: {
      title: "Six years in employee experience, inside global companies.",
      body: [
        "Over the years I've worked in People Experience, Workplace, Community, Operations, and Project Management roles, touching nearly every point along the employee journey.",
        "That experience lets me get up to speed quickly, understand what's missing, and connect business needs with the human experience, in a practical, hands-on way.",
      ],
      portraitAlt: "Professional portrait",
      logosLabel: "Experience from",
      logosAlt: {
        monday: "monday.com logo",
        meta: "Meta logo",
        appsflyer: "AppsFlyer logo",
      },
    },
    finalCta: {
      title: "Want to build a more precise, connected, and consistent employee experience?",
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
