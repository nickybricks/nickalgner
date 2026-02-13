export type Language = 'de' | 'en';

export const translations = {
  de: {
    header: {
      title: 'Nick Algner',
      subtitle: 'Projekte',
      about: 'Über mich',
      work: 'Work',
      contact: 'Kontakt',
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
      problemSolved: 'Problem Solved',
      architecture: 'Architecture',
      tools: 'Tools',
      screenshots: 'Screenshots',
    },
    about: {
      title: 'Über mich',
      intro: 'Ich bin Nick – Head of Operations mit über 6 Jahren Erfahrung im E-Commerce.',
      passion: 'Meine Leidenschaft gilt KI, Apps und digitalen Produkten. Ich baue gerne Systeme, die Prozesse automatisieren und echte Probleme lösen.',
      journey: 'Jetzt gehe ich meinen Weg in diese Richtung weiter – mit eigenen Projekten und dem Ziel, Technologie zugänglich und nützlich zu machen.',
      capabilities: 'Capabilities',
      skills: ['Low-Code Platforms', 'Automation', 'KI-Integration', 'Produktentwicklung'],
    },
    approach: {
      title: 'Approach',
      items: [
        { number: '01', title: 'Geteilte Verantwortung', description: 'Ich arbeite mit dir, nicht für dich. Gemeinsame Verantwortung für das Ergebnis.' },
        { number: '02', title: 'Ich arbeite schnell', description: 'Schnelle Iterationen, schnelles Feedback. Ergebnisse statt endloser Planung.' },
        { number: '03', title: 'Zeigen und erzählen', description: 'Transparenz in jedem Schritt. Regelmäßige Updates und offene Kommunikation.' },
        { number: '04', title: 'Bias for Action', description: 'Lieber machen und lernen als warten und planen. Fortschritt durch Handeln.' },
        { number: '05', title: 'Ich arbeite in Systemen', description: 'Nachhaltige Lösungen statt Quick-Fixes. Systeme, die skalieren.' },
        { number: '06', title: 'Design ist Denken', description: 'Jede Entscheidung ist durchdacht. Form folgt Funktion.' },
      ],
    },
    contact: {
      title: 'Kontakt',
      cta: 'Interesse an einer Zusammenarbeit?',
      email: 'nick@algner.de',
      elsewhere: 'Elsewhere',
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
      work: 'Work',
      contact: 'Contact',
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
      problemSolved: 'Problem Solved',
      architecture: 'Architecture',
      tools: 'Tools',
      screenshots: 'Screenshots',
    },
    about: {
      title: 'About Me',
      intro: "I'm Nick – Head of Operations with over 6 years of experience in E-Commerce.",
      passion: 'My passion lies in AI, apps, and digital products. I love building systems that automate processes and solve real problems.',
      journey: "Now I'm continuing on this path – with my own projects and the goal of making technology accessible and useful.",
      capabilities: 'Capabilities',
      skills: ['Low-Code Platforms', 'Automation', 'AI Integration', 'Product Development'],
    },
    approach: {
      title: 'Approach',
      items: [
        { number: '01', title: 'Shared Ownership', description: 'I work with you, not for you. Shared responsibility for the outcome.' },
        { number: '02', title: 'I work fast', description: 'Fast iterations, fast feedback. Results over endless planning.' },
        { number: '03', title: 'Show and tell', description: 'Transparency at every step. Regular updates and open communication.' },
        { number: '04', title: 'Bias for Action', description: 'Better to do and learn than wait and plan. Progress through action.' },
        { number: '05', title: 'I work in systems', description: 'Sustainable solutions over quick fixes. Systems that scale.' },
        { number: '06', title: 'Design is thinking', description: 'Every decision is intentional. Form follows function.' },
      ],
    },
    contact: {
      title: 'Contact',
      cta: 'Interested in working together?',
      email: 'nick@algner.de',
      elsewhere: 'Elsewhere',
    },
    language: {
      toggle: 'DE',
    },
  },
};

export type TranslationKey = keyof typeof translations.de;
