export type Locale = "en" | "he";

export type Photographer = "victor" | "tomer";

export interface WorkItem {
  title: string;
  body: string;
}

export interface BuildCategory {
  title: string;
  body: string;
  tags: string[];
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
  };
  langSwitch: {
    he: string;
    en: string;
  };
  cta: {
    talk: string;
  };
  whatsapp: {
    message: string;
  };
  hero: {
    titleLine1: string;
    titleLine2: string;
    supporting: string;
    engagementLine: string;
    serviceLine: string;
  };
  pov: {
    statement: string;
    supporting: string;
  };
  gallery: {
    label: string;
    alt: string;
    prev: string;
    next: string;
    photoBy: string;
    photographers: Record<Photographer, string>;
  };
  work: {
    label: string;
    items: WorkItem[];
  };
  build: {
    title: string;
    categories: BuildCategory[];
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
  };
  footer: {
    rights: string;
  };
}

export const translations: Record<Locale, Dictionary> = {
  en: {
    meta: {
      title: "Or Lagziel, Employee Experience for growing businesses",
      description:
        "Flexible Employee Experience support for companies that want to do more for their people — without hiring another full-time role. Six years of experience at global tech companies including monday.com, Meta, and AppsFlyer.",
    },
    brand: "Or Lagziel",
    nav: {
      build: "What We Build, Together",
      about: "About",
    },
    langSwitch: {
      he: "עברית",
      en: "EN",
    },
    cta: {
      talk: "Let's talk",
    },
    whatsapp: {
      message: "Hi Or, I'd love to hear more about your Employee Experience services.",
    },
    hero: {
      titleLine1: "A personal experience for people.",
      titleLine2: "A smarter model for the business.",
      supporting:
        "Flexible Employee Experience support for companies that want to do more for their people — without hiring another full-time role.",
      engagementLine: "For a project, a defined period, or ongoing support.",
      serviceLine: "Employee Experience · Community · Culture · Projects",
    },
    pov: {
      statement:
        "Not every audience is a community, and not every successful event creates a great employee experience.",
      supporting:
        "Employee experience is built through the small moments along the way — how people join, how milestones are celebrated, how communication feels, how communities are created, and whether employees feel that someone actually thought about their experience.",
    },
    gallery: {
      label: "Events and initiatives",
      alt: "Photo from an employee experience event",
      prev: "Previous photo",
      next: "Next photo",
      photoBy: "Photo: ",
      photographers: { victor: "Victor Levy", tomer: "Tomer Foltyn" },
    },
    work: {
      label: "How we work together",
      items: [
        {
          title: "Project",
          body: "One focused initiative, one clear need, one goal.",
        },
        {
          title: "Defined Period",
          body: "Professional support during a busy period, organizational change, or around a specific need.",
        },
        {
          title: "Ongoing Support",
          body: "Monthly support throughout the year — without adding another full-time role to the team.",
        },
      ],
    },
    build: {
      title: "What we build",
      categories: [
        {
          title: "Annual Employee Experience Plan",
          body: "Building the full-year picture — goals, key moments, budget, activity calendar and forward planning.",
          tags: [
            "Annual planning",
            "Holidays",
            "Budget",
            "Employee moments",
            "Internal communication",
            "Recurring programs",
          ],
        },
        {
          title: "Employee Journey & Life Moments",
          body: "Designing the employee experience across the moments that matter — from day one to personal, family and wellbeing milestones.",
          tags: [
            "Onboarding",
            "Birthdays",
            "Parental leave",
            "Weddings",
            "Wellbeing",
            "Financial wellbeing",
            "Family programs",
          ],
        },
        {
          title: "Employee Communities",
          body: "Building employee-led communities around shared interests, hobbies and professional topics — so people can find connection inside the workplace too.",
          tags: [
            "Running",
            "Books",
            "Parents",
            "Investing",
            "Professional communities",
          ],
        },
        {
          title: "Events, Initiatives & Focused Projects",
          body: "Designing and leading focused initiatives as part of the employee experience — from concept and planning through execution.",
          tags: [
            "Holidays",
            "Events",
            "Offsites",
            "Culture initiatives",
            "Internal launches",
            "Special projects",
          ],
        },
      ],
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
      title:
        "Want to build a more precise, connected, and consistent employee experience?",
      cta: "Let's talk",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  he: {
    meta: {
      title: "אור לגזיאל · Or Lagziel · People Experience",
      description:
        "ליווי גמיש בתחום חוויית העובד לעסקים שרוצים לעשות יותר עבור האנשים שלהם, בלי לגייס עוד משרה מלאה. שש שנים של ניסיון בחברות טכנולוגיה גלובליות כמו monday.com, Meta ו-AppsFlyer.",
    },
    brand: "אור לגזיאל",
    nav: {
      build: "מה אפשר לבנות יחד",
      about: "קצת עליי",
    },
    langSwitch: {
      he: "עברית",
      en: "EN",
    },
    cta: {
      talk: "בואו נדבר",
    },
    whatsapp: {
      message: "היי אור :) אשמח לשמוע יותר על השירות ולבדוק איך אפשר לעבוד יחד ולקדם את חוויית העובד אצלנו 🙌",
    },
    hero: {
      titleLine1: "חוויה אישית לעובדים.",
      titleLine2: "מודל חכם יותר לעסק.",
      supporting:
        "ליווי גמיש בתחום חוויית העובד לעסקים שרוצים לעשות יותר עבור האנשים שלהם, בלי לגייס עוד משרה מלאה.",
      engagementLine: "לפרויקט, לתקופה מוגדרת, או לליווי שוטף.",
      serviceLine: "חוויית עובד · קהילה · תרבות · פרויקטים",
    },
    pov: {
      statement: "לא כל קהל הוא קהילה, ולא כל אירוע מוצלח יוצר חוויית עובד.",
      supporting:
        "חוויית עובד נבנית מהרבה רגעים קטנים לאורך הדרך, איך מצטרפים לחברה, איך מציינים רגעים אישיים, איך מתקשרים, איך בונים קהילה, ואיך גורמים לאנשים להרגיש שיש מחשבה מאחורי הדברים.",
    },
    gallery: {
      label: "אירועים ומהלכים",
      alt: "תמונה מאירוע חוויית עובד",
      prev: "התמונה הקודמת",
      next: "התמונה הבאה",
      photoBy: "צילום: ",
      photographers: { victor: "ויקטור לוי", tomer: "תומר פולטין" },
    },
    work: {
      label: "איך עובדים יחד",
      items: [
        {
          title: "פרויקט",
          body: "מהלך אחד, צורך אחד, מטרה ברורה.",
        },
        {
          title: "תקופה מוגדרת",
          body: "חיזוק מקצועי בתקופה עמוסה, בזמן שינוי או סביב צורך מסוים.",
        },
        {
          title: "ליווי שוטף",
          body: "שותפות חודשית לאורך השנה, בלי להוסיף משרה מלאה לצוות.",
        },
      ],
    },
    build: {
      title: "מה אפשר לבנות יחד",
      categories: [
        {
          title: "תוכנית שנתית לחוויית עובד",
          body: "בניית תמונת השנה, מטרות, עוגנים, תקציב, לוח פעילות ותכנון קדימה.",
          tags: ["תכנון שנתי", "חגים", "תקציב", "רגעי עובד", "תקשורת פנימית", "תוכניות שוטפות"],
        },
        {
          title: "מסע העובד ורגעים משמעותיים",
          body: "בניית חוויה לאורך נקודות המגע המשמעותיות של העובד, מהיום הראשון ועד רגעים אישיים, משפחתיים ובריאותיים.",
          tags: ["אונבורדינג", "ימי הולדת", "חופשת לידה", "חתונות", "וולנס", "משפחות"],
        },
        {
          title: "קהילות עובדים",
          body: "בניית קהילות לעובדים סביב תחומי עניין, תחביבים ועולמות תוכן, עם העובדים עצמם כמובילי הקהילה.",
          tags: ["ריצה", "ספרים", "הורים", "השקעות", "קהילות מקצועיות"],
        },
        {
          title: "אירועים, מהלכים ופרויקטים",
          body: "בניית והובלת מהלכים נקודתיים כחלק מחוויית העובד, מהרעיון והקונספט ועד הביצוע בפועל.",
          tags: ["חגים", "אירועים", "Offsites", "מהלכי תרבות", "השקות פנימיות", "פרויקטים מיוחדים"],
        },
      ],
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
    },
    footer: {
      rights: "כל הזכויות שמורות.",
    },
  },
};
