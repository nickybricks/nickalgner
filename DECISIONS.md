# Nick Algner – Portfolio

## 1. User Journey

- **Einstiegspunkt:** Nutzer landet auf der Startseite (`/`) mit Hero-Tagline und horizontal scrollbarem Projekt-Karussell.
- **Projekt erkunden:** Klick auf eine Projekt-Card navigiert zur Detailseite (`/project/:slug`) mit Bildergalerie, Beschreibung und Herausforderungen.
- **Über mich:** Scrollen zur About-Sektion zeigt Profilbild, Intro-Text und Skills/Capabilities.
- **Approach:** 6 nummerierte Prinzipien im 3×2 Grid erklären die Arbeitsweise.
- **Kontakt:** E-Mail-Link, LinkedIn und GitHub am Seitenende.
- **Sprache wechseln:** DE/EN Toggle im Header (Desktop) bzw. Browsersprache als Default.
- **Dark Mode:** Manueller Toggle im Header, erkennt Systemeinstellung beim ersten Besuch.
- **Projektdetailseite:** Zurück-Button → Startseite. Mobile: Carousel mit Bullet-Navigation. Desktop: 2-Spalten-Layout mit Sticky-Content + Lightbox für Bilder.
- **Edge Case:** 404-Seite mit Link zurück zur Startseite.

## 2. Tech Stack

- **Frontend:** React 18 + TypeScript (strict mode via tsconfig)
- **Build:** Vite
- **Styling:** Tailwind CSS mit HSL-basiertem Design-Token-System in `index.css`
- **UI-Komponenten:** shadcn/ui (Radix UI Primitives + CVA)
- **Animationen:** Framer Motion (Seitenübergänge), CSS Keyframes (Fade-in, Gradient-Shift)
- **Routing:** React Router v6 mit AnimatePresence für Page Transitions
- **State:** React Context (Theme, Language) + localStorage (Theme-Persistenz)
- **i18n:** Eigenes System mit zentraler `translations.ts` (DE/EN)
- **Hosting:** Lovable (Preview + Published unter nickalgner.lovable.app)
- **Begründung:** Kein Backend nötig – rein statisches Portfolio. Tailwind + shadcn für schnelles, konsistentes Design. Framer Motion für elegante Übergänge ohne Overhead.

## 3. Design Rules

- **Farben:** HSL-basiertes Token-System. Light: Warm Off-White (#FAF9F7) Hintergrund, Soft Black (#1A1A1A) Text. Dark: #0A0A0A Hintergrund, #F5F5F5 Text.
- **Typografie:** Inter (Sans), Playfair Display (Serif), Roboto Mono (Mono). H1 = `font-semibold`. Section-Labels = `text-sm font-medium tracking-widest`. Kein `uppercase` auf der gesamten Website.
- **Spacing:** Großzügiger Weißraum ("Ma"-Philosophie). Sections mit `py-24`, Cards mit `p-3 md:p-4`.
- **Border-Radius:** `--radius: 1rem` als Basis. Cards und Bilder: `rounded-2xl`.
- **Schatten:** Subtile HSL-basierte Schatten im Light Mode, stärkere im Dark Mode. Kein Schatten auf Hover.
- **Hover-Effekte:** Cards heben sich mit `hover:-translate-y-1 transition-transform duration-300 ease-out` an (Apple-Style). Kein Shadow/Glow/Scale auf Hover.
- **Dark Mode Cards:** `bg-[rgba(255,255,255,0.05)]` mit `border-[rgba(255,255,255,0.1)]`. Profilbild erhält Glasmorphism-Container nur im Dark Mode.
- **Responsive Breakpoints:** Mobile-First. `md:` (768px), `lg:` (1024px). Max-Content-Width: 1260px.
- **Navigation:** Freischwebende Pill-Buttons mit Backdrop-Blur. Desktop: fixed oben. Mobile: fixed unten. IntersectionObserver für aktives Highlighting.
- **Barrierefreiheit:** Lazy Loading für Bilder, semantische HTML-Struktur, aria-labels auf interaktiven Elementen.

## 4. Frameworks

| Package | Version | Zweck |
|---|---|---|
| react | ^18.3.1 | UI-Framework |
| react-dom | ^18.3.1 | DOM-Rendering |
| react-router-dom | ^6.30.1 | Client-Side Routing |
| framer-motion | ^12.29.2 | Page Transitions & Animationen |
| @tanstack/react-query | ^5.83.0 | Data Fetching (installiert, aktuell nicht aktiv genutzt) |
| tailwindcss-animate | ^1.0.7 | Tailwind Animation Utilities |
| class-variance-authority | ^0.7.1 | Component Variants (shadcn) |
| clsx + tailwind-merge | ^2.x | Conditional Classnames |
| embla-carousel-react | ^8.6.0 | Mobile Bildergalerie-Carousel |
| lucide-react | ^0.462.0 | Icons |
| sonner | ^1.7.4 | Toast Notifications |
| Radix UI (diverse) | diverse | Headless UI Primitives für shadcn |

**Nicht aktiv genutzt:** react-hook-form, zod, recharts, react-day-picker, cmdk, vaul, next-themes, react-resizable-panels – sind als shadcn-Abhängigkeiten installiert, aber im Portfolio nicht eingesetzt.

## 5. Implementation Plan

### Phase 1: MVP ✅ Fertig
- [x] One-Pager mit Hero, About, Approach, Contact
- [x] Projekt-Cards mit horizontalem Scroll
- [x] Projektdetailseiten mit Bildern und Beschreibungen
- [x] Dark/Light Mode mit System-Erkennung
- [x] DE/EN Internationalisierung
- [x] Responsive Design (Mobile-First)
- [x] Page Transitions mit Framer Motion
- [x] Image Lightbox auf Projektdetailseiten
- [x] Navigation mit IntersectionObserver

### Phase 2: Erweiterungen – Offen
- [ ] SEO-Optimierung (Meta-Tags, JSON-LD, OG-Images)
- [ ] Performance-Audit (Bundle-Größe, ungenutzge Packages entfernen)
- [ ] Weitere Projekte hinzufügen
- [ ] Blog/Writing-Sektion
- [ ] Analytics-Integration

### Phase 3: Optimierung – Offen
- [ ] Ungenutzte shadcn-Abhängigkeiten entfernen (react-hook-form, zod, recharts etc.)
- [ ] Lighthouse Score optimieren
- [ ] Bild-Optimierung (WebP/AVIF)
- [ ] Custom Domain einrichten

### Nächste Schritte
- SEO Meta-Tags und OG-Images ergänzen
- Ungenutzte Packages auditieren und entfernen
