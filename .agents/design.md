# Intercom — Style Reference
> Architectural blueprint on white marble

**Theme:** light

Intercom's design system evokes a sense of understated innovation, like an architectural blueprint on white marble.  Lightness and clarity are established through an expansive white canvas contrasted by fine-lined black typography and minimal, precise UI elements. The tension between the nearly achromatic palette and a single vibrant violet accent for primary calls to action creates a focused, forward-thinking feel without visual clutter. Custom typography with subtle letter-spacing variations adds a layer of quiet sophistication, preventing the sparse aesthetic from feeling sterile.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Canvas White | `#ffffff` | `--color-canvas-white` | Page backgrounds, primary surfaces, overlay base. |
| Background Off-White | `#faf9f6` | `--color-background-off-white` | Subtle background for sections or softer UI elements. |
| Surface Cream | `#f1eee9` | `--color-surface-cream` | Slightly elevated surface, subtle background differentiation. |
| Border Sand | `#dedbd6` | `--color-border-sand` | Delicate borders for subtle UI separation, active tab indicators. |
| Subtle Gray | `#e7e3db` | `--color-subtle-gray` | More pronounced background for distinct content blocks, light dividers. |
| Canvas Beige | `#d3cec6` | `--color-canvas-beige` | Background for secondary content areas or muted sections. |
| Headline Black | `#111111` | `--color-headline-black` | Primary heading text, strong impactful body copy. |
| Body Text Black | `#000000` | `--color-body-text-black` | General body text, links, primary UI elements, icons. |
| Subtle Graphite | `#414141` | `--color-subtle-graphite` | Muted text for less prominent information, secondary links. |
| Mid Gray | `#585858` | `--color-mid-gray` | Secondary text, descriptive elements with slightly less emphasis than body text. |
| Footer Gray | `#666666` | `--color-footer-gray` | Tertiary text, footer links, less critical information. |
| Icon Gray | `#707070` | `--color-icon-gray` | Icons and very subtle UI elements. |
| Button Text Gray | `#888888` | `--color-button-text-gray` | Text for secondary buttons, disabled states. |
| Placeholder Gray | `#a0a0a0` | `--color-placeholder-gray` | Placeholder text in input fields, further muted text elements. |
| Inactive Icon Gray | `#b8b8b8` | `--color-inactive-icon-gray` | Icons in inactive or secondary states. |
| Accent Violet | `#0007cb` | `--color-accent-violet` | Primary interactive elements, call-to-action buttons, active indicators — a vivid modern accent against the neutral palette. |
| Accent Orange | `#ff5600` | `--color-accent-orange` | Highlighting specific words or small interactive elements, used sparingly for emphasis. |

## Tokens — Typography

### Saans — `--font-saans`
- **Substitute:** system-ui, sans-serif
- **Weights:** 300, 400
- **Sizes:** 14px, 16px, 20px, 24px, 32px, 40px, 54px, 80px
- **Line height:** 0.95, 1.00, 1.25, 1.40, 1.43, 1.50
- **Letter spacing:** -2.4, -1.62, -0.8, -0.16
- **Role:** Primary typeface for headings, body text, and general UI. Weight 300 for display sizes.

### SaansMono — `--font-saansmono`
- **Substitute:** SFMono-Regular, monospace
- **Weights:** 300, 400, 500
- **Sizes:** 12px, 14px
- **Line height:** 1.00, 1.30, 1.40
- **Letter spacing:** 1.2, 0.7
- **Role:** Technical information, code snippets, monospace content.

### Serrif — `--font-serrif`
- **Substitute:** serif
- **Weights:** 300
- **Sizes:** 16px
- **Line height:** 1.40
- **Letter spacing:** -0.16
- **Role:** Decorative serif for emphasis within body text.

### MediumLL — `--font-mediumll`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400
- **Sizes:** 14px, 16px
- **Line height:** 0.94, 1.00, 1.29
- **Letter spacing:** -0.4, -0.35, 0.56
- **Role:** Navigation elements and specific UI labels.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.4 | 0.7px | `--text-caption` |
| body-sm | 14px | 1.5 | -0.16px | `--text-body-sm` |
| body | 16px | 1.5 | -0.16px | `--text-body` |
| subheading | 20px | 1.4 | -0.4px | `--text-subheading` |
| heading-sm | 24px | 1.25 | -0.48px | `--text-heading-sm` |
| heading | 32px | 1.25 | -0.8px | `--text-heading` |
| heading-lg | 40px | 1 | -0.8px | `--text-heading-lg` |
| display | 54px | 1 | -1.62px | `--text-display` |
| display-lg | 80px | 0.95 | -2.4px | `--text-display-lg` |

## Tokens — Spacing & Shapes

**Base unit:** 4px · **Density:** comfortable

### Spacing Scale

4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 112, 216

### Border Radius

| Element | Value |
|---------|-------|
| buttons | 4px |
| navItems | 4px |

### Layout

- **Section gap:** 48px
- **Card padding:** 16px
- **Element gap:** 16px

## Components

### Primary Action Button
Solid black background (#111111), white text (#ffffff), 4px border-radius, 14px horizontal padding. Focus/hover: Accent Violet (#0007cb) background.

### Secondary Outline Button
Transparent background, Headline Black (#111111) text, Border Sand (#dedbd6) border, 4px border-radius, 14px horizontal padding.

### Ghost Navigation Button
Transparent background, Body Text Black (#000000) text, no border, no radius. Active: underline or Border Sand hover.

### Tab Button
Transparent background, muted gray text (active: #111111), Border Sand bottom border for active state, 16px padding.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas White | `#ffffff` | Primary page background |
| 1 | Background Off-White | `#faf9f6` | Subtle content sections |
| 2 | Surface Cream | `#f1eee9` | Feature blocks |
| 3 | Subtle Gray | `#e7e3db` | Banners, high separation |

## Do's and Don'ts

### Do
- Use #111111 for all major headings
- Weight 300 for display headlines (54px, 80px)
- 4px border-radius for all interactive elements
- Reserve Accent Violet strictly for primary CTAs
- Differentiate sections: #ffffff > #faf9f6 > #f1eee9
- 16px standard element spacing
- SaansMono for technical/code content

### Don't
- No saturated colors beyond Violet and Orange
- No sharp unrounded corners on interactive elements
- No heavy shadows or complex gradients
- No typeface deviations
- No dense blocks without adequate spacing
- No #000000 for large headlines (use #111111)
- No highly saturated photography

## Quick Color Reference

- `text-primary`: #111111
- `bg-canvas`: #ffffff
- `bg-card`: #faf9f6
- `cta-primary`: #0007cb
- `border-subtle`: #dedbd6
