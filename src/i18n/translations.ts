export type Language = 'de' | 'en';

export const translations = {
  de: {
    header: {
      title: 'Nick Algner',
      subtitle: 'Projekte',
      about: 'Über mich',
    },
    projects: {
      title: 'Meine Projekte',
      viewProject: 'Projekt ansehen',
    },
    projectDetail: {
      back: 'Zurück',
      visitWebsite: 'Website besuchen',
      challenges: 'Herausforderungen',
      gallery: 'Galerie',
    },
    language: {
      toggle: 'EN',
    },
  },
  en: {
    header: {
      title: 'Nick Algner',
      subtitle: 'Projects',
      about: 'About',
    },
    projects: {
      title: 'My Projects',
      viewProject: 'View Project',
    },
    projectDetail: {
      back: 'Back',
      visitWebsite: 'Visit Website',
      challenges: 'Challenges',
      gallery: 'Gallery',
    },
    language: {
      toggle: 'DE',
    },
  },
};

export type TranslationKey = keyof typeof translations.de;
