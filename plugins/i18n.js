const i18n = {
  langDir: "lang/",
  strategy: "prefix_except_default",
  detectBrowserLanguage: false,
  parsePages: false,
  sortRoutes: true,

  defaultLocale: "tr",
  locales: [
    {
      code: "tr",
      code2: "tr",
      iso: "tr_TR",
      file: "tr/tr_TR.js",
      name: "Türkçe",
    },
    {
      code: "en",
      code2: "us",
      iso: "en_US",
      file: "en/en_US.js",
      name: "English",
    },
  ],
  lazy: true,

  vuex: {
    asyncLocale: true,
  },
  detectBrowserLanguage: false,
  intervalPlural: true,
  pages: {
    index: {
      tr: "/",
      en: "/",
    },
    courses: {
      tr: "/kurs",
      en: "/courses",
    },
    reviews: {
      tr: "/inceleme",
      en: "/reviews",
    },
    about: {
      tr: "/hakkimizda",
      en: "/about",
    },
    contact: {
      tr: "/ileti",
      en: "/contacts",
    },

    "courses/english": {
      tr: "/kurs/inglizce",
      en: "/courses/english",
    },

    "courses/mathematich": {
      tr: "/kurs/matematik",
      en: "/courses/mathematich",
    },

    "courses/frontend": {
      tr: "/kurs/arayuz",
      en: "/courses/frontend",
    },

    "courses/uxui": {
      tr: "/kurs/uxui",
      en: "/courses/uxui",
    },
    "detail/_courses": {
      tr: "/detay/:id([0-9]+)",
      en: "/detail/:id([0-9]+)",
    },
    ////
    "reviews/english": {
      tr: "/inceleme/inglizce",
      en: "/reviews/english",
    },

    "reviews/mathematich": {
      tr: "/inceleme/matematik",
      en: "/reviews/mathematich",
    },

    "reviews/frontend": {
      tr: "/inceleme/onuc",
      en: "/reviews/frontend",
    },

    "reviews/uxui": {
      tr: "/inceleme/uxui",
      en: "/reviews/uxui",
    },
    ///////////
    "lessons/lessons": {
      tr: "/ders/dersler",
      en: "/lessons/lessons",
    },

    "lessons/inbox/index": {
      tr: "/ders/mesajlar",
      en: "/lessons/inbox",
    },
    "lessons/inbox/_message": {
      tr: "/ders/mesajlar/:id([0-9]+)",
      en: "/lessons/inbox/:id([0-9]+)",
    },

    "lessons/course/index": {
      tr: "/ders/kurs",
      en: "/lessons/course",
    },

    "lessons/course/_course": {
      tr: "/ders/kurs/:id([0-9]+)",
      en: "/lessons/course/-:id([0-9]+)",
    },
    "lessons/homework": {
      tr: "/ders/evodevi",
      en: "/lessons/homework",
    },
    "lessons/notification": {
      tr: "/ders/bildirimler",
      en: "/lessons/notification",
    },
    "lessons/profile": {
      tr: "/ders/profilin",
      en: "/lessons/profile",
    },

    ///teach
    "teach/lessons": {
      tr: "/ogretmen/dersler",
      en: "/teach/lessons",
    },

    "teach/inbox/index": {
      tr: "/ogretmen/mesajlar",
      en: "/teach/inbox",
    },
    "teach/inbox/_message": {
      tr: "/ogretmen/mesajlar/:id([0-9]+)",
      en: "/teach/inbox/:id([0-9]+)",
    },

    "teach/course/index": {
      tr: "/ogretmen/kurs",
      en: "/teach/course",
    },

    "teach/course/_course": {
      tr: "/ogretmen/kurs/:id([0-9]+)",
      en: "/teach/course/:id([0-9]+)",
    },
    "teach/homework": {
      tr: "/ogretmen/evodevi",
      en: "/teach/homework",
    },
    "teach/notification": {
      tr: "/ogretmen/bildirimler",
      en: "/teach/notification",
    },
    "teach/profile": {
      tr: "/ogretmen/profilin",
      en: "/teach/profile",
    },
  },
};

export default i18n;
