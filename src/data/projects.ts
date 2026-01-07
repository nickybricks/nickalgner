import wichtyMockup from '@/assets/project-wichty-mockup.jpg';
import aesyMockup from '@/assets/project-aesy-mockup.jpg';
import architectMockup from '@/assets/project-architect-mockup.jpg';

export interface Project {
  id: string;
  slug: string;
  name: string;
  url: string;
  thumbnail: string;
  images: string[];
  description: {
    de: string;
    en: string;
  };
  challenges: {
    de: string[];
    en: string[];
  };
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'wichty',
    name: 'Wichty',
    url: 'https://www.wichty.com',
    thumbnail: wichtyMockup,
    images: [wichtyMockup, wichtyMockup, wichtyMockup],
    description: {
      de: 'Wichty ist eine innovative Plattform, die Menschen verbindet und den Alltag einfacher macht. Mit einem Fokus auf Benutzerfreundlichkeit und modernem Design bietet Wichty eine nahtlose Erfahrung.',
      en: 'Wichty is an innovative platform that connects people and simplifies everyday life. With a focus on user-friendliness and modern design, Wichty offers a seamless experience.',
    },
    challenges: {
      de: [
        'Entwicklung einer skalierbaren Architektur für wachsende Nutzerzahlen',
        'Optimierung der Performance für mobile Geräte',
        'Integration verschiedener Drittanbieter-Services',
      ],
      en: [
        'Developing a scalable architecture for growing user numbers',
        'Optimizing performance for mobile devices',
        'Integrating various third-party services',
      ],
    },
  },
  {
    id: '2',
    slug: 'aesy',
    name: 'Aesy',
    url: 'https://aesy.lovable.app',
    thumbnail: aesyMockup,
    images: [aesyMockup, aesyMockup, aesyMockup],
    description: {
      de: 'Aesy vereinfacht komplexe Prozesse und macht sie für jeden zugänglich. Die Anwendung wurde entwickelt, um Zeit zu sparen und Effizienz zu steigern.',
      en: 'Aesy simplifies complex processes and makes them accessible to everyone. The application was developed to save time and increase efficiency.',
    },
    challenges: {
      de: [
        'Gestaltung einer intuitiven Benutzeroberfläche',
        'Sicherstellung der Datensicherheit',
        'Entwicklung eines responsiven Designs für alle Bildschirmgrößen',
      ],
      en: [
        'Designing an intuitive user interface',
        'Ensuring data security',
        'Developing a responsive design for all screen sizes',
      ],
    },
  },
  {
    id: '3',
    slug: 'architekt-homepage',
    name: 'Architekt Homepage',
    url: 'https://arch-showcase-folio.lovable.app',
    thumbnail: architectMockup,
    images: [architectMockup, architectMockup, architectMockup],
    description: {
      de: 'Eine elegante Portfolio-Website für Architekten. Die Seite präsentiert Projekte in einem minimalistischen, aber eindrucksvollen Design und hebt die Arbeit des Architekten hervor.',
      en: 'An elegant portfolio website for architects. The site presents projects in a minimalist yet impressive design, highlighting the architect\'s work.',
    },
    challenges: {
      de: [
        'Erstellen eines visuell ansprechenden Layouts für Architekturfotos',
        'Optimierung der Bildladezeiten bei hoher Qualität',
        'SEO-Optimierung für lokale Suchanfragen',
      ],
      en: [
        'Creating a visually appealing layout for architectural photos',
        'Optimizing image loading times while maintaining high quality',
        'SEO optimization for local search queries',
      ],
    },
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};
