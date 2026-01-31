
# Portfolio Redesign: Japanisch-Inspiriertes 2026 Design

## Zielsetzung
Transformation des Portfolios zu einem hellen, japanisch-inspirierten Design mit warmen Beige/Grau-Tönen. Minimalistisch, erwachsen und zeitgemäss - mit Fokus auf Ruhe, Weissraum und subtile Eleganz. Mobile-First Ansatz.

---

## Design-Philosophie: "Zen Minimalism"

### Kernprinzipien
- **Warme Neutraltöne**: Cremiges Beige und warmes Grau statt kaltem Weiss
- **Viel Weissraum (Ma)**: Japanisches Konzept der "aktiven Leere"
- **Typografie als Kunst**: Klare, elegante Headlines mit viel Breathing Room
- **Natuerliche Akzente**: Ein gedämpfter Akzent (z.B. Terrakotta oder gedämpftes Salbeigrün)
- **Sanfte Bewegung**: Fast unsichtbare Übergänge und Hover-Effekte
- **Asymmetrie mit Balance**: Bewusst ungleiche Layouts die dennoch harmonisch wirken

---

## Farbpalette (Light-First, Warm Tones)

```text
Background:      #FAF9F7 (warmes Off-White, 40 20% 98%)
Foreground:      #1A1A1A (sanftes Schwarz, 0 0% 10%)
Card:            #FFFFFF (reines Weiss für Kontrast)
Muted:           #F5F3EF (hellbeige, 40 20% 95%)
Muted-Foreground:#6B6B6B (warmes Grau, 0 0% 42%)
Border:          #E8E4DE (sandfarben, 35 15% 90%)
Akzent:          #C9A86C (gedämpftes Gold/Terrakotta, 38 45% 60%)
```

---

## Umsetzungsplan

### Phase 1: Design System Update

**Datei: `src/index.css`**
- Neues Farbschema mit warmen Beige-Tönen
- Hintergrund von reinem Weiss zu warmem Off-White
- Borders und Muted-Farben in Sandtönen
- Akzentfarbe von Blau zu gedämpftem Gold/Terrakotta
- Optionale Schriftart-Erweiterung: "Noto Sans" oder "Source Sans 3" für japanisches Feeling

### Phase 2: Homepage Redesign

**Datei: `src/pages/Index.tsx`**
- Neue Hero-Section mit grosser typografischer Begrüssung
- Mehr vertikaler Weissraum zwischen Sektionen
- Projektüberschrift subtiler gestaltet

**Neue Komponente: `src/components/HeroSection.tsx`**
- Vollbild-Hero mit Name und kurzer Tagline
- Sehr viel Weissraum
- Subtle Scroll-Indicator (dezenter Pfeil oder Linie)
- Mobile: Name zentriert, Desktop: links ausgerichtet

**Datei: `src/components/ProjectCarousel.tsx` -> `ProjectGrid.tsx`**
- Umbau von Carousel zu einem ruhigen Bento-Grid Layout
- Asymmetrische Kacheln mit unterschiedlichen Grössen
- Keine Auto-Rotation mehr (Ruhe statt Bewegung)
- Hover: sanftes Hochschieben statt Zoom

### Phase 3: Komponenten-Updates

**Datei: `src/components/Header.tsx`**
- Hintergrund noch transparenter/luftiger
- Dünnere Border oder komplett entfernen
- Mehr horizontaler Weissraum
- Kleinere, dezentere Typografie

**Datei: `src/components/ProjectCard.tsx`**
- Weniger Shadow (shadow-sm oder keine)
- Grössere Eckenradien (rounded-3xl)
- Subtilerer Hover-Effekt (leichtes Anheben statt Scale)
- Kein sichtbarer "View Project" Text - nur Icon bei Hover

### Phase 4: Projekt-Detailseite

**Datei: `src/pages/ProjectDetail.tsx`**
- Mehr vertikaler Weissraum zwischen Bildern
- Textspalte schmaler für bessere Lesbarkeit
- Challenges als nummerierte Liste statt Bullets (japanischer Stil)
- Zurück-Button noch minimaler

### Phase 5: About-Seite

**Datei: `src/components/AboutSection.tsx`**
- Profilbild mit sanftem Schatten statt hartem Rand
- Skills-Tags noch subtiler (border-only statt filled)
- Mehr Zeilenabstand im Text
- Social Icons kleiner und dezenter

### Phase 6: Subtle Animations

**Datei: `tailwind.config.ts`**
- Neue Animation-Keyframes für sanfte Fade-Ins
- Langsamere Transitions (400-500ms statt 300ms)
- Easing-Functions angepasst für organischeres Gefühl

---

## Technische Details

### Dateien die geändert werden

| Datei | Änderungen |
|-------|------------|
| `src/index.css` | Neues Farbsystem, warme Töne, Akzentfarbe |
| `src/pages/Index.tsx` | Hero-Section Integration, Layout-Anpassungen |
| `src/components/Header.tsx` | Luftigerer, transparenterer Look |
| `src/components/ProjectCarousel.tsx` | Umbau zu ruhigem Grid |
| `src/components/ProjectCard.tsx` | Subtilere Hover-Effekte |
| `src/pages/ProjectDetail.tsx` | Mehr Weissraum, dezentere Elemente |
| `src/components/AboutSection.tsx` | Skills-Tags Border-Style |
| `tailwind.config.ts` | Neue Animations, evtl. Fonts |

### Neue Komponenten

| Datei | Beschreibung |
|-------|--------------|
| `src/components/HeroSection.tsx` | Typografischer Fullscreen-Hero |

---

## Beispiel-Layouts

### Mobile Homepage

```text
+---------------------------+
|                           |
|  Nick Algner      [DE/EN] |  <- Header, minimal
|                           |
+---------------------------+
|                           |
|                           |
|                           |
|        Nick               |
|        Algner             |  <- Gross, elegant
|                           |
|   Building digital        |
|   products that matter.   |  <- Muted, klein
|                           |
|                           |
|           |               |
|           v               |  <- Subtle scroll hint
|                           |
+---------------------------+
|                           |
|   Projekte                |  <- Dezente Überschrift
|                           |
|  +---------------------+  |
|  |                     |  |
|  |   [Bild Projekt 1]  |  |
|  |                     |  |
|  |   Wichty            |  |
|  +---------------------+  |
|                           |
|  +---------------------+  |
|  |   [Bild Projekt 2]  |  |
|  +---------------------+  |
|                           |
+---------------------------+
```

### Desktop Bento-Grid

```text
+------------------------------------------+
|                                          |
|  Nick Algner                   About  DE |
|                                          |
+------------------------------------------+
|                                          |
|                                          |
|         Nick Algner                      |
|                                          |
|         Building digital products        |
|         that matter.                     |
|                                          |
|                                          |
+------------------------------------------+
|                                          |
|   Projekte                               |
|                                          |
|   +------------------+  +-------------+  |
|   |                  |  |             |  |
|   |   Wichty         |  |   Aesy      |  |
|   |   (gross)        |  |   (mittel)  |  |
|   |                  |  +-------------+  |
|   |                  |  +-------------+  |
|   +------------------+  |   Aiva      |  |
|                         |             |  |
|                         +-------------+  |
|                                          |
+------------------------------------------+
```

---

## Zusammenfassung

1. **Farbsystem**: Warme Beige/Grau-Töne statt kaltem Weiss
2. **Akzentfarbe**: Gedämpftes Gold/Terrakotta statt Blau
3. **Layout**: Hero-Section + asymmetrisches Bento-Grid
4. **Interaktionen**: Sehr subtile, langsame Hover-Effekte
5. **Philosophie**: Japanisches "Ma" - aktive Nutzung von Leerraum
6. **Mobile**: Grosszügige Touch-Targets, zentrierte Typografie
