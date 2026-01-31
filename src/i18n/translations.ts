export type Language = 'de' | 'en';

export const translations = {
  de: {
    header: {
      title: 'Nick Algner',
      subtitle: 'Projekte',
      about: 'Über mich',
    },
    hero: {
      tagline: 'Digitale Produkte, die funktionieren.',
      viewProjects: 'Projekte ansehen',
    },
    projects: {
      title: 'Projekte',
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
    hero: {
      tagline: 'Building digital products that matter.',
      viewProjects: 'View Projects',
    },
    projects: {
      title: 'Projects',
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
