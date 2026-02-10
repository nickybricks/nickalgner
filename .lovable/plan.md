
# Desktop One-Pager Redesign der Landingpage

## Ueberblick
Die Landingpage wird zu einem One-Pager umgebaut, der dem Screenshot-Referenzdesign folgt. Weisser Hintergrund, horizontale Projekt-Cards, About/Capabilities-Sektion, Approach-Sektion und Contact-Sektion. Alles auf einer Seite mit Scroll-Navigation ueber den Header.

## Struktur der neuen Landingpage

```text
+--------------------------------------------------+
|  Nick Algner          Work  About  Contact        |
+--------------------------------------------------+
|                                                    |
|  Digitale Produkte, die funktionieren.            |
|                                                    |
|  [Wichty] [Aesy] [AIVA]  -->                     |
|  (horizontal scrollbar mit Pfeil rechts)           |
+--------------------------------------------------+
|  About                                             |
|  [Profilbild]  Intro-Text + Bullet Points          |
|                                                    |
|  Capabilities                                      |
|  [Skill-Tags als Pills]                            |
+--------------------------------------------------+
|  Approach                                          |
|  6 Punkte im 3x2 Grid                             |
+--------------------------------------------------+
|  Contact                                           |
|  E-Mail + Social Links (LinkedIn, GitHub)          |
+--------------------------------------------------+
```

## Aenderungen im Detail

### 1. Header anpassen (`src/components/Header.tsx`)
- Links: "Nick Algner" (bleibt)
- Rechts: "Work", "About", "Contact" als Buttons (pill-style wie im Screenshot)
- Klick auf die Buttons scrollt smooth zur jeweiligen Section (Anker-Navigation)
- "Ueber mich"-Link zur separaten Seite entfernen, stattdessen Scroll-Anker
- Language Toggle bleibt

### 2. Hero-Sektion umbauen (`src/components/HeroSection.tsx`)
- Tagline bleibt oben: "Digitale Produkte, die funktionieren."
- Darunter: Horizontal scrollbare Projekt-Cards
- Rechts ein Orientierungspfeil (ChevronRight) mit leichtem Gradient-Fade darueber (weiss nach transparent, zeigt an dass mehr kommt)
- Cards zeigen: Thumbnail, Projektname, kurze Beschreibung
- Klick auf Card fuehrt weiterhin zur Projektdetail-Seite
- Animierten Gradient-Hintergrund entfernen, stattdessen weisser Hintergrund
- CTA-Button und Scroll-Indikator entfernen

### 3. About-Sektion direkt auf Landingpage (`src/pages/Index.tsx`)
- Neue inline About-Sektion mit id="about"
- Links: Profilbild (rund oder abgerundet)
- Rechts: Intro-Text aus AboutSection uebernehmen (Intro, Passion, Journey)
- Darunter "Capabilities" mit Skill-Tags als Pills (border-only style wie bereits vorhanden)

### 4. Neue Approach-Sektion erstellen
- 3x2 Grid mit 6 nummerierten Punkten
- Inhalt (DE/EN):
  01. Shared Ownership / Geteilte Verantwortung
  02. Ich arbeite schnell
  03. Zeigen und erzaehlen
  04. Bias for Action
  05. Ich arbeite in Systemen
  06. Design ist Denken
- Jeder Punkt hat Titel (bold) und kurze Beschreibung

### 5. Contact-Sektion erstellen
- id="contact"
- Einfaches Layout mit Ueberschrift "Contact"
- E-Mail-Adresse (nick@algner.de) prominent
- "Elsewhere" Spalte mit Links zu LinkedIn und GitHub
- Kein "Design Partner"-Framing, stattdessen neutraler Text wie "Interesse an einer Zusammenarbeit?" / "Interested in working together?"

### 6. Hintergrund aendern
- `bg-background` durch `bg-white` ersetzen oder die CSS-Variable anpassen
- BackgroundTexture-Komponente auf der Landingpage entfernen (weisser cleaner Look)

### 7. Translations erweitern (`src/i18n/translations.ts`)
- Neue Keys fuer: Work, About (Header), Contact, Approach-Inhalte, Contact-Texte

## Technische Details

### Neue/Geaenderte Dateien:
1. **`src/pages/Index.tsx`** - Kompletter Umbau: Hero + Projects + About + Approach + Contact als Sections
2. **`src/components/Header.tsx`** - Anker-Navigation statt Seiten-Links, Pill-Buttons
3. **`src/components/HeroSection.tsx`** - Vereinfacht: nur Tagline + horizontaler Projekt-Scroller
4. **`src/components/ApproachSection.tsx`** - Neu erstellen, 3x2 Grid
5. **`src/components/ContactSection.tsx`** - Neu erstellen
6. **`src/i18n/translations.ts`** - Neue Translation-Keys

### Bestehende Seiten:
- `/about` Route und About-Seite bleiben bestehen (koennen spaeter entfernt werden)
- `/project/:slug` bleibt unveraendert
- Mobile-Ansicht wird vorerst nicht veraendert (nur Desktop)
