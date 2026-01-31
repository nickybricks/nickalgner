

# Hero-Sektion Optimierung

## Überblick
Drei gezielte Verbesserungen der Hero-Sektion für einen stärkeren ersten Eindruck, ohne den minimalistischen Zen-Charakter zu verlieren.

---

## Änderungen

### 1. Stärkere Tagline

**Aktuell:** `text-lg md:text-xl font-light text-muted-foreground`

**Neu:** Grösser und mit mehr Präsenz
- Schriftgrösse erhöhen: `text-xl md:text-2xl`
- Gewicht anpassen: `font-normal` statt `font-light`
- Leicht dunklere Farbe für bessere Lesbarkeit

---

### 2. Subtiler animierter Hintergrund

Ein dezentes **Gradient-Mesh** mit sanfter Animation:
- Weiche, warme Beige/Gold-Töne passend zur Farbpalette
- Sehr langsame, kaum wahrnehmbare Bewegung (60s Zyklus)
- Blur-Effekt für organisches Gefühl
- Opacity niedrig halten (ca. 30-40%)

```text
+---------------------------+
|    ○        ○             |  <- Weiche Gradient-Kreise
|       ○           ○       |     die sanft "atmen"
|  ○         ○              |
|       ○           ○       |
+---------------------------+
```

---

### 3. CTA Button "View Projects"

Dezenter Ghost-Style Button unter der Tagline:
- Border-only Design passend zum Zen-Stil
- Hover: Sanftes Fill von Akzentfarbe
- Text: "Projekte ansehen" / "View Projects"
- Icon optional (Arrow-Down oder ohne)

```text
        Nick
        Algner

   Building digital products
        that matter.

    [ View Projects ↓ ]     <- Neuer CTA
```

---

## Technische Details

### Datei: `src/components/HeroSection.tsx`

| Bereich | Änderung |
|---------|----------|
| Hintergrund | Neue `<div>` mit animierten Gradient-Blobs |
| Tagline | Grössere Schrift, stärkeres Gewicht |
| CTA Button | Neuer Button mit `scrollToProjects` Funktion |
| Scroll-Indicator | Bleibt erhalten als zusätzliche Option |

### Datei: `src/i18n/translations.ts`

Neue Übersetzung hinzufügen:
- `hero.viewProjects`: "Projekte ansehen" / "View Projects"

### Animation Keyframes (in index.css)

Neuer Keyframe für Gradient-Animation:
```css
@keyframes gradient-shift {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(20px, -20px) scale(1.05); }
}
```

---

## Visuelles Ergebnis

### Mobile

```text
+---------------------------+
|                           |
|   [dezenter Gradient-     |
|    Hintergrund animiert]  |
|                           |
|        Nick               |
|        Algner             |
|                           |
|   Building digital        |
|   products that matter.   |  <- Grösser & fetter
|                           |
|   [ View Projects ↓ ]     |  <- Neuer CTA
|                           |
|           ↓               |
+---------------------------+
```

---

## Zusammenfassung

1. **Tagline verstärken**: Grösser (text-xl → text-2xl) und normal statt light
2. **Gradient-Mesh**: 2-3 weiche, animierte Blobs im Hintergrund
3. **CTA Button**: Ghost-Style Button für direkte User-Führung

