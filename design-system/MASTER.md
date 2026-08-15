# BEREC SARL — Design System (MASTER)

> Généré avec ui-ux-pro-max · Source of truth pour toutes les pages.

## Direction artistique

**Positionnement** : équipement médical B2B, précision hospitalière, présence panafricaine.
**Personnalité** : *confiance, rigueur, modernité, chaleur africaine*.
**Anti-patterns** : dégradés teal→violet (clash), cartes en tilt 3D, blobs décoratifs excessifs,
textes dégradés partout, émojis comme icônes.

## Palette

| Rôle | Couleur | Usage |
|------|---------|-------|
| Primaire | `berec-600 #176e81` | Boutons, liens, accents |
| Primaire clair | `berec-100 #d8eef1` | Fonds de puces, hover doux |
| Sombre | `navy-950 #051e29` | Heroes, sections sombres, footer |
| Texte | `navy-900 #0a2e3c` | Titres & corps (contraste ≥ 4.5:1) |
| Accent | `gold-400 #efb64b` | Points forts, statistiques, CTA sur fond sombre |

Dégradé maison : `from-berec-500 to-berec-700` (jamais violet).

## Typographie

- **Titres** : Sora (600–800), `tracking-tight`.
- **Corps** : Inter (400–600), `line-height 1.7`, taille ≥ 16px sur mobile.
- Eyebrows : 12px, `uppercase`, `tracking-[0.2em]`, couleur `berec-500` (ou `berec-200` sur sombre).

## Composants

- **Boutons** : `rounded-full`, variantes `primary` (teal), `outline` (ring blanc sur sombre),
  `ghost` (fond clair), `gold` (fond or sur sombre). Hover : `-translate-y-0.5` + ombre.
- **Cartes** : `rounded-2xl bg-white shadow-card border border-berec-100`, hover `shadow-card-hover -translate-y-1`.
- **SectionHeading** : eyebrow avec filets + titre `text-3xl md:text-4xl font-extrabold`.
- **PageBanner** : fond `navy-950` + image 25% + auréoles teal/or discrètes.
- **Icônes** : SVG Heroicons-like, stroke 1.7, `aria-hidden` — jamais d'émoji.

## Accessibilité (non négociable)

- Contraste texte ≥ 4.5:1 ; focus visible ; skip-link ; `prefers-reduced-motion` ;
  cibles tactiles ≥ 44px ; `cursor-pointer` sur les éléments cliquables ;
  alt sur toutes les images ; labels sur les champs.

## Rythme

- Sections : `py-20 md:py-24`.
- Conteneur : `max-w-7xl px-5` partout.
- Grilles : `gap-6`/`gap-7`, responsive 1 → 2 → 3/4 colonnes.
