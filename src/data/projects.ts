import wichty1 from '@/assets/wichty-1.png';
import wichty2 from '@/assets/wichty-2.png';
import wichty3 from '@/assets/wichty-3.png';
import wichty4 from '@/assets/wichty-4.png';
import wichty5 from '@/assets/wichty-5.png';
import wichtyLandingHero from '@/assets/wichty-landing-hero.png';
import wichtyEventErstellen from '@/assets/wichty-event-erstellen.png';
import wichtyErkunden from '@/assets/wichty-erkunden.png';
import wichtyMeineEvents from '@/assets/wichty-meine-events.png';
import wichtyLogin from '@/assets/wichty-login.png';
import aesy1 from '@/assets/aesy-1.png';
import aesy2 from '@/assets/aesy-2.png';
import aesy3 from '@/assets/aesy-3.png';
import aesy4 from '@/assets/aesy-4.png';
import aesy5 from '@/assets/aesy-5.png';
import aesy6 from '@/assets/aesy-6.png';
import aesy7 from '@/assets/aesy-7.png';
import aesy8 from '@/assets/aesy-8.png';
import aesy9 from '@/assets/aesy-9.png';

import aivaChat from '@/assets/aiva-chat.png';
import aivaChatConversation from '@/assets/aiva-chat-conversation.png';
import aivaWorkflowOverview from '@/assets/aiva-workflow-overview.png';
import aivaWorkflowOrder from '@/assets/aiva-workflow-order.png';
import aivaWorkflowFeedback from '@/assets/aiva-workflow-feedback.png';
import aivaWorkflowRefund from '@/assets/aiva-workflow-refund.png';
import aivaAgentPrompt from '@/assets/aiva-agent-prompt.png';
import aivaTools from '@/assets/aiva-tools.png';
import aivaAnalytics from '@/assets/aiva-analytics.png';
import aivaCode from '@/assets/aiva-code.png';

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
    thumbnail: wichty1,
    images: [wichty1, wichty2, wichty3, wichty4, wichty5, wichtyLandingHero, wichtyEventErstellen, wichtyErkunden, wichtyMeineEvents, wichtyLogin],
    description: {
      de: 'Wichty ist die einfachste App für Sportvereine, Turniere und private Partys. Events organisieren ohne Chaos – in 3 Minuten startklar.',
      en: 'Wichty is the easiest app for sports clubs, tournaments, and private parties. Organize events without chaos – ready in 3 minutes.',
    },
    challenges: {
      de: [
        'Entwicklung einer skalierbaren Architektur für wachsende Nutzerzahlen',
        'Optimierung der Performance für mobile Geräte',
        'Integration verschiedener Drittanbieter-Services wie Google Auth',
        'Gestaltung einer intuitiven Event-Erstellung in wenigen Schritten',
      ],
      en: [
        'Developing a scalable architecture for growing user numbers',
        'Optimizing performance for mobile devices',
        'Integrating various third-party services like Google Auth',
        'Designing an intuitive event creation flow in just a few steps',
      ],
    },
  },
  {
    id: '2',
    slug: 'aesy',
    name: 'Aesy',
    url: 'https://aesy.lovable.app',
    thumbnail: aesy1,
    images: [aesy1, aesy4, aesy6, aesy5, aesy8, aesy9, aesy2, aesy3, aesy7],
    description: {
      de: 'Aesy analysiert Aktien nach bewährten Investmentprinzipien. In drei einfachen Schritten zur professionellen Aktienanalyse mit KI-Unterstützung nach Buffett-Kriterien.',
      en: 'Aesy analyzes stocks based on proven investment principles. Professional stock analysis in three simple steps with AI support using Buffett criteria.',
    },
    challenges: {
      de: [
        'Integration von Echtzeit-Finanzdaten aus verschiedenen Börsen (NYSE, NASDAQ, XETRA)',
        'Entwicklung eines KI-gestützten Analyse-Systems nach Warren Buffett Kriterien',
        'Gestaltung komplexer Datenvisualisierungen für Finanzkennzahlen',
        'Aufbau eines Screeners für über 7000 Aktien mit umfangreichen Filteroptionen',
      ],
      en: [
        'Integration of real-time financial data from various exchanges (NYSE, NASDAQ, XETRA)',
        'Development of an AI-powered analysis system based on Warren Buffett criteria',
        'Designing complex data visualizations for financial metrics',
        'Building a screener for over 7000 stocks with extensive filter options',
      ],
    },
  },
  {
    id: '4',
    slug: 'aiva',
    name: 'VENICEBEAUTY Aiva',
    url: 'https://venicebeauty.de',
    thumbnail: aivaChat,
    images: [aivaChat, aivaChatConversation, aivaWorkflowOverview, aivaWorkflowOrder, aivaWorkflowFeedback, aivaWorkflowRefund, aivaAgentPrompt, aivaTools, aivaAnalytics, aivaCode],
    description: {
      de: 'Aiva ist ein KI-gestützter Kundensupport-Chatbot für VENICEBEAUTY. Der Bot bearbeitet Bestellanfragen, Stornierungen und Produktfragen automatisiert über WooCommerce-Integration.',
      en: 'Aiva is an AI-powered customer support chatbot for VENICEBEAUTY. The bot handles order inquiries, cancellations, and product questions automatically via WooCommerce integration.',
    },
    challenges: {
      de: [
        'Integration mit WooCommerce API für Echtzeit-Bestelldaten',
        'Entwicklung komplexer Conversation Flows für verschiedene Kundenanfragen',
        'Anbindung an Gorgias Ticketing-System für Eskalationen',
        'Implementierung von Stripe und PayPal Refund-Funktionen',
        'Training des AI-Agenten mit produktspezifischem Wissen',
      ],
      en: [
        'Integration with WooCommerce API for real-time order data',
        'Development of complex conversation flows for various customer inquiries',
        'Connection to Gorgias ticketing system for escalations',
        'Implementation of Stripe and PayPal refund functions',
        'Training the AI agent with product-specific knowledge',
      ],
    },
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};
