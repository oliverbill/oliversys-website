# Oliversys Design System

> Reverse-engineered from source on 2026-07-15.
> Single source of truth: `client/src/index.css`.
> Tailwind v4 (no `tailwind.config.*`; all theme extension is via `@theme inline` in the CSS file).

---

## 1. Overview / brand character

The visual language is called "Forensic Ember" in the source comments. Three principles drive every layout decision: editorial modernism (sparse whitespace, high-contrast ink-on-paper), dossier geometry (ruled lines, numbered items, clip-corner shapes), and a single controlled signal colour — a burnt-orange ember — reserved for consequential elements only. The palette is warm-neutral rather than cold-tech: carbon dark and parchment light, no pure blacks or whites. Typography skews large and light-weight in display, tight and dense in body.

---

## 2. Colour tokens

All colours are defined in `client/src/index.css` under `:root`. The system uses **oklch** for token values, but component-level code uses raw hex (`#f05a32`, `#171815`, `#f3eee3`, etc.) directly in class attributes and inline styles. No dark-mode variant is implemented despite the `@custom-variant dark` declaration.

### 2a. CSS custom property tokens (`:root`)

| Token | oklch value | Approximate hex | Role |
|---|---|---|---|
| `--background` | `oklch(.96 .012 77)` | `#f3eee3` | Page background (parchment) |
| `--foreground` | `oklch(.21 .012 75)` | `#20211e` | Primary text (carbon ink) |
| `--card` | `oklch(.985 .009 78)` | `#faf8f3` | Card surface (near-white warm) |
| `--card-foreground` | same as foreground | `#20211e` | Card text |
| `--popover` | same as card | `#faf8f3` | Popover surface |
| `--popover-foreground` | same as foreground | `#20211e` | Popover text |
| `--primary` | `oklch(.66 .21 34)` | `#f05a32` | Ember accent (CTA, signal, highlight) |
| `--primary-foreground` | `oklch(.98 .012 75)` | `#fff9ef` | Text on ember buttons |
| `--secondary` | `oklch(.91 .016 78)` | `#ebe4d7` | Mist surface (hover state bg) |
| `--secondary-foreground` | `oklch(.28 .012 75)` | `#373832` | Text on mist |
| `--muted` | `oklch(.91 .012 76)` | `#e8e2d6` | Muted surface |
| `--muted-foreground` | `oklch(.49 .018 72)` | `#7a7970` | Subdued text |
| `--accent` | same as primary | `#f05a32` | Accent (aliased to primary) |
| `--accent-foreground` | `oklch(.99 .01 80)` | `#fffdf8` | Text on accent |
| `--destructive` | `oklch(.577 .245 27.325)` | `#d9421f` | Error / destructive |
| `--destructive-foreground` | `oklch(.985 0 0)` | `#f9f9f9` | Text on destructive |
| `--border` | `oklch(.78 .018 76)` | `#c4bfb5` | Default border |
| `--input` | same as border | `#c4bfb5` | Input border |
| `--ring` | same as primary | `#f05a32` | Focus ring |
| `--radius` | `.2rem` | — | Base border-radius (3.2 px) |

Chart tokens (`--chart-1` through `--chart-5`) and sidebar tokens (`--sidebar-*`) are defined but not visibly used in the current page set.

### 2b. Named colour roles (raw hex used in component CSS)

These appear as literals throughout `index.css` and service pages. They should be promoted to tokens.

| Role | Hex | Where used |
|---|---|---|
| Carbon dark | `#171815` | Header (scrolled), footer bg, hero bg, call-section button, mobile panel |
| Carbon mid | `#20211e` | Body text, text-link colour, not-found text |
| Carbon border | `#3a3b37` / `#3d3e3a` | cross-section border, footer-base border |
| Carbon subtle | `#41423e` / `#42433f` / `#41433e` | Deliverable list borders, principles borders, engagement borders |
| Carbon muted text | `#8d8f88` / `#9f9d96` / `#8f908b` | Dossier signal, cross-link label |
| Parchment light | `#f3eee3` | Page bg, site-shell, paper-section, about-image label, artifact-note |
| Parchment warm | `#fff9ef` | Button foreground, hero text link |
| Parchment mid | `#f8f1e5` | Carbon section text, footer text, visual-copy h2, cross-link text |
| Parchment body | `#c9c5bb` / `#c6c3ba` | Hero lede, outcome-list text, desktop nav links |
| Parchment muted | `#bbb9b0` / `#bbb8b1` | Back link colour, blog meta, intro-aside text |
| Mist surface | `#dedfd8` | `.mist-section` background |
| Mist border | `#bcb7ac` / `#b9b4a8` | Audience grid border, risk-ledger border, partner-principles border |
| Ember | `#f05a32` | ALL accent uses: eyebrow.ember, buttons, icon colours, signal, footnote borders, pillar tags |
| Ember hover | `#db4521` | Button hover |
| Ember alpha | `rgba(240,90,50,.6)` | Dossier signal glow, artifact trace glow |
| Paper call | `#ebe4d7` | Call-section background, blog-card hover |
| Paper call border | `#c9c0b1` | Call-section top border |
| Body text dark | `#44473f` | Blog post body paragraphs |
| Body text mid | `#555750` / `#5d5f57` / `#5e5f58` / `#575951` | Editorial copy, about copy, call copy, problem notes |
| Body text muted | `#63645d` / `#66675f` / `#62645c` | Audience grid subtext, risk-ledger body, partner-principles body |
| Code surface | `#e8e2d6` | Inline code background (paper) |
| Code block | `#1a1c19` | Pre/code block background |
| Code text | `#c9c5bb` | Code block foreground |
| Footer label | `#f05a32` | Footer section labels |
| Footer text | `#a8aaa3` / `#858780` | Footer links, footer brand p |
| Footer base | `#70726c` | Footer copyright |

### 2c. Colour by section background

| Section class | Background | Text |
|---|---|---|
| `.carbon-section` | `#171815` | `#f8f1e5` |
| `.paper-section` | `#f3eee3` | `#20211e` |
| `.mist-section` | `#dedfd8` | `#20211e` |
| `.call-section` | `#ebe4d7` | `#20211e` |
| `.site-footer` | `#171815` | `#f8f1e5` |

---

## 3. Typography

### Fonts

Loaded via Google Fonts in `client/index.html`:

```
Fraunces: opsz 9..144, weight 500 and 600
Manrope: weight 400, 500, 600, 700
```

Fallback: `serif` for Fraunces, `sans-serif` for Manrope.

Monospace (blog code): `"Fira Code", "Consolas", monospace` — not imported; relies on system availability.

### Base

```css
body {
  font-family: "Manrope", sans-serif;
  background: #f3eee3;
  color: #20211e;
  text-rendering: optimizeLegibility;
}
```

### Heading rule

```css
h1, h2, h3, blockquote {
  font-family: "Fraunces", serif;
  font-weight: 500;
  letter-spacing: -.035em;
}
```

`h1 em, h2 em` → colour `#f05a32`, `font-style: normal`. Used for the italic-styled accent word in every hero and page-intro headline.

### Type hierarchy

| Level | Element / class | Family | Size | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|---|
| Display hero | `hero h1` | Fraunces | `clamp(3.4rem, 6.3vw, 6.6rem)` | 500 | 0.91 | −0.035em |
| Display page | `page-intro h1` | Fraunces | `clamp(3.6rem, 6.7vw, 7.2rem)` | 500 | 0.9 | −0.035em |
| Section H2 large | `.call-section h2` | Fraunces | `clamp(3rem, 5.2vw, 5.7rem)` | 500 | 0.95 | −0.035em |
| Section H2 | `.section-heading h2` et al | Fraunces | `clamp(2.3rem, 4.2vw, 4.7rem)` | 500 | 1.02 | −0.035em |
| Phase H2 | `.phase-list h2` | Fraunces | `clamp(1.9rem, 3vw, 3.1rem)` | 500 | default | −0.035em |
| Audience H3 | `.audience-grid h3` | Fraunces | `clamp(2rem, 3vw, 3.25rem)` | 500 | 1.06 | −0.035em |
| Cross-link title | `.cross-link strong` | Fraunces | `2.4rem` | 500 | default | −0.035em |
| Blockquote | `blockquote` | Fraunces | `clamp(2.5rem, 4.5vw, 5.2rem)` | 500 | 1 | −0.035em |
| Blog card title | `.blog-card-title` | Fraunces | `clamp(1.3rem, 2vw, 1.8rem)` | 500 | 1.12 | −0.025em |
| Blog post H2 | `.blog-post-body > h2` | Fraunces | `clamp(1.7rem, 2.8vw, 2.6rem)` | 500 | 1.06 | −0.03em |
| Blog post H3 | `.blog-post-body > h3` | Fraunces | `clamp(1.2rem, 1.8vw, 1.7rem)` | 500 | default | −0.035em |
| Lead paragraph | `.lead-paragraph` | Manrope | `1.16rem` | 400 | 1.8 | default |
| Hero lede | `.hero-lede` | Manrope | `clamp(1rem, 1.5vw, 1.18rem)` | 400 | 1.75 | default |
| Body | editorial copy `p` | Manrope | inherit (~1rem) | 400 | 1.8 | default |
| Blog body p | `.blog-post-body > p` | Manrope | `clamp(.88rem, 1.1vw, 1rem)` | 400 | 1.85 | default |
| Eyebrow | `.eyebrow` | Manrope | `0.69rem` | 700 | 1 | `0.16em` |
| Eyebrow ember | `.eyebrow.ember` | Manrope | `0.69rem` | 700 | 1 | `0.16em` |
| Desktop nav | `.desktop-nav a` | Manrope | `0.71rem` | 600 | default | default |
| Button primary | `.button-primary` | Manrope | `0.83rem` | 700 | default | default |
| Button small | `.button-small` | Manrope | `0.72rem` | 700 | default | default |
| Text link | `.text-link` | Manrope | `0.78rem` | 700 | default | default |
| Blog card CTA | `.blog-card-cta` | Manrope | `0.65rem` | 700 | default | `0.08em` |
| Blog pillar tag | `.blog-pillar-tag` | Manrope | `0.55rem` | 700 | default | `0.12em` |
| Section index | `.section-index` | Manrope | `0.57rem` | default | default | `0.13em` |
| Footer label | `.footer-label` | Manrope | `0.58rem` | default | default | `0.12em` |
| Brand wordmark | `.brand-wordmark` | Manrope | `0.84rem` | 700 | default | `0.12em` |
| Inline code | `.blog-post-body code` | Fira Code | `0.82em` | default | default | default |
| Code block | `.blog-code-block code` | Fira Code | `0.78rem` | default | 1.7 | default |

---

## 4. Spacing scale

The project uses Tailwind v4 with its default spacing scale (base-4 system, 1 unit = 0.25rem). Section-level spacing is defined in `index.css` using raw `rem` values, not Tailwind utility classes.

### Section vertical padding

| Context | Padding |
|---|---|
| Default interior sections (`.exposure-section`, `.audience-section`, `.evidence-section`, etc.) | `8rem 0` (128 px) |
| `.visual-argument` | `8.5rem 0` |
| `.call-section` | `8rem 0` |
| `.page-intro` | `12rem 0 7rem` |
| `.blog-index` | `5rem 0 8rem` |
| `.blog-post` | `6rem 0 8rem` |
| `.site-footer` | `5rem 0 1.5rem` |
| Small-screen override (≤680px) for all interior sections | `5.5rem 0` |

### Container

```css
.container {
  width: 100%;
  margin-inline: auto;
  padding-inline: 1rem;   /* default */
}
/* ≥640px */ padding-inline: 1.5rem;
/* ≥1024px */ max-width: 1280px; padding-inline: 2rem;
```

Max content width: **1280 px**.

### Common component spacing patterns (observed)

| Pattern | Value |
|---|---|
| Gap between hero grid columns | `8%` |
| Gap between exposure grid columns | `6rem 9%` |
| Audience article padding | `4rem 8% 3rem 0` |
| Section kicker bottom pad | `1rem` |
| Dossier stats row padding | `.85rem 0` |
| Phase list article padding | `2.2rem 0` |
| Phase list gap (within article) | `4%` |
| Risk ledger cell padding | `1.5rem 2rem 1.5rem 0` |
| Deliverable list row padding | `1.3rem 0` |
| Footer top padding | `5rem 0 1.5rem` |
| Footer grid bottom pad | `4rem` |

---

## 5. Layout and containers

### Breakpoints

| Name | Width |
|---|---|
| Mobile | `≤680px` |
| Tablet | `≤980px` |
| Desktop | `>980px` |
| Container max | `≥1024px` → `max-width: 1280px` |
| Tailwind `sm` (shadcn) | `640px` |

Tailwind v4 default breakpoints (`sm` 640, `md` 768, `lg` 1024, `xl` 1280, `2xl` 1536) are available but only the shadcn dialog uses `sm:` prefixes. All custom site layout uses the two hand-rolled media queries at 680 px and 980 px.

### Grid patterns

| Component | Columns | Gap |
|---|---|---|
| Hero (`hero-grid`) | `minmax(0,1.2fr) minmax(20rem,.65fr)` | `8%` align-items: end |
| Exposure (`exposure-grid`) | `1.08fr .76fr` + risk ledger `repeat(3,1fr)` | `6rem 9%` |
| Visual argument (`visual-grid`) | `1.15fr .85fr` | `8%` |
| Audience (`audience-grid`) | `1fr 1fr` | — (border divider) |
| Evidence (`evidence-grid`) | `.8fr 1.2fr` | `9%` |
| Cross-link (`cross-grid`) | `1fr 1fr` | — (border divider) |
| Call (`call-grid`) | `1.1fr .75fr` | `10%` |
| Page intro (`page-intro-grid`) | `1.15fr .6fr` | `10%` |
| Scope (`scope-grid`) | `.8fr 1.2fr` | `8%` |
| Scope columns | `1fr 1fr` | — |
| Deliverable (`deliverable-grid`) | `.8fr 1.2fr` | `9%` |
| Investor problem / Counsel value | `1fr 1fr` | `10%` |
| Mandate (`mandate-grid`) | `1fr 1fr` | `8%` |
| Question grid | `repeat(4,1fr)` | — (border divider) |
| Partner principles | `repeat(3,1fr)` | — |
| Engagement flow | `repeat(3,1fr)` | — |
| Principles grid | `repeat(4,1fr)` | — |
| Position (`position-grid`) | `.3fr 1.2fr .5fr` | `7%` |
| Blog index (`blog-index-grid`) | `repeat(2,1fr)` | `3rem` |
| Footer (`footer-grid`) | `1.4fr .6fr .6fr` | `8%` |
| Phase list article | `.25fr 1fr .9fr .55fr` | `4%` |
| About story | `1.05fr .95fr` | `9%` |
| Counsel use | `1fr 1fr` | `9%` |

Service pages (`ServiceRedFlagScan`, `ServiceFullTDD`) bypass the CSS class system in places, using inline `style` grid declarations with `repeat(auto-fill, minmax(...))`. This is the primary layout inconsistency.

---

## 6. Border radius, shadows, borders

### Border radius

| Token / value | Usage |
|---|---|
| `--radius: .2rem` (3.2 px) | Base token — used by shadcn `rounded-md`, `rounded-lg`, interview cards on service pages (inline `borderRadius: "0.2rem"`) |
| `rounded-md` (Tailwind, = `--radius-md` = `0.2rem`) | `textarea` in contact form, dialog content (`rounded-lg` = `--radius-lg` = `0.4rem`) |
| Sharp / none | All custom site components (buttons, cards, dossier panels, evidence artifacts) — no radius applied |

The `cut-corner` clip-path (`clip-path: polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)`) replaces a radius for featured image frames (`visual-frame`, `evidence-image`, `scope-image`, `about-image`, `mandate-image`).

### Shadows

| Usage | Value |
|---|---|
| Scrolled header | `0 1px 0 rgba(255,255,255,.08)` |
| Dossier panel | No shadow; `border: 1px solid rgba(255,255,255,.14)` with `backdrop-filter: blur(12px)` |
| Brand mark | `box-shadow: inset 0 0 0 1px rgba(23,24,21,.12)` |
| Artifact planes | `box-shadow: 0 18px 30px rgba(0,0,0,.28)` |
| Evidence artifact trace glow | `box-shadow: 0 0 16px rgba(240,90,50,.55)` |
| Dossier signal glow | `box-shadow: 0 0 18px rgba(240,90,50,.6)` |
| Shadcn dialog | `shadow-lg` |
| Shadcn input | `shadow-xs` |

### Border patterns

Almost all horizontal dividers between content rows use `border-top: 1px solid <colour>`. Vertical dividers between column items use `border-right: 1px solid <colour>`. Colours differ by section context:

| Context | Border colour |
|---|---|
| Paper sections | `#bcb7ac` / `#b9b4a8` / `#bbb6aa` / `#b6b9b1` / `#b3b6ae` / `#b5b8b0` |
| Carbon sections | `#41423e` / `#42433e` / `#3a3b37` / `#343531` |
| Mist scope columns | `#b6b9b1` |
| Footer base | `#3d3e3a` |

These are all visually similar within each section group but expressed as distinct literals — a clear token opportunity.

The ember accent border (`border-left: 2px solid #f05a32` or `border-left: 3px solid #f05a32`) appears on blog code blocks and as an inline timeline note highlight on service pages.

---

## 7. Components

### 7a. Site Header

**File:** `client/src/components/SiteLayout.tsx` (`Header` function)

**Structure:**
```
<header class="site-header [is-scrolled?]">
  <div class="container header-inner">
    <Brand />                    <!-- logo + wordmark -->
    <nav class="desktop-nav">   <!-- links -->
    <div class="header-actions">
      <BookCallLink class="button-small">Request a Tech Review</BookCallLink>
      <button class="menu-toggle"> <!-- hamburger, hidden >980px -->
  <div class="mobile-panel [is-open?]">
    <nav class="container mobile-nav">
```

**Key classes:** `site-header`, `is-scrolled`, `header-inner`, `brand-lockup`, `brand-mark-wrap`, `brand-mark`, `brand-wordmark`, `desktop-nav`, `header-actions`, `menu-toggle`, `mobile-panel`, `is-open`, `mobile-nav`.

**Behaviour:** Fixed, `z-index: 50`. At rest: transparent background, 5.5 rem tall. On scroll (>16 px): shrinks to 4.5 rem, background `rgba(23,24,21,.94)` with `backdrop-filter: blur(16px)`. Transition: `220ms cubic-bezier(.23,1,.32,1)`.

---

### 7b. PageIntro

**File:** `client/src/components/SharedSections.tsx`

**Used on:** Approach, Investors, Counsel, About, Blog, BlogPost, ServiceRedFlagScan, ServiceFullTDD.

**Structure:**
```
<section class="page-intro carbon-section">
  <div class="container page-intro-grid">
    <div>
      <p class="eyebrow ember">{eyebrow}</p>
      <h1>{title} <em>{italic}</em></h1>
    </div>
    <div class="intro-aside">
      <span class="section-index">{index} / OLIVERSYS</span>
      <p>{copy}</p>
      <HeroArtifact variant={artifact} />
    </div>
```

`HeroArtifact` variants: `approach` (phase map), `investor` (risk register), `counsel` (matter file), `about` (independence seal). Each is a decorative CSS-drawn widget using `.hero-artifact` plus a variant-specific class. On service pages the pattern is replicated with a bespoke inline `risk-register` block.

---

### 7c. CallSection

**File:** `client/src/components/SharedSections.tsx`

**Used on:** All pages as the closing conversion section. Props: `title`, `copy`, `context`, `buttonText`.

**Structure:**
```
<section class="call-section" id="contact">
  <div class="container call-grid">
    <div>
      <p class="eyebrow">Confidential introduction</p>
      <h2>{title}</h2>
    </div>
    <div class="call-copy">
      <p>{copy}</p>
      <BookCallLink>{buttonText}</BookCallLink>
      <span class="confidential-note"><ShieldCheck /> Scope and timing agreed around your deal.</span>
```

**Key visual:** `.call-section::before` draws a left-edge ember bar (`width: clamp(.38rem,1vw,.8rem); background: #f05a32`). The CTA button overrides to dark: `background: #171815` instead of ember. Section background is `#ebe4d7` (parchment-warm), not a named section class.

---

### 7d. EvidenceArtifact

**File:** `client/src/components/SharedSections.tsx`

**Used on:** Home (×2), Approach (×1), Investors (×1), About (×1).

**Structure:** A CSS-drawn abstract diagram — three skewed planes (`.artifact-plane`), a connecting trace line (`.artifact-trace`) with diamond dots, and a label chip (`.artifact-note`). Background uses a radial gradient with ember at `rgba(240,90,50,.12)` on a near-black base.

Variants: `architecture` (planes skewed −8°), `network` (planes smaller, trace at +18°), `independence` (planes rotated 45°, forming concentric diamonds).

---

### 7e. BlogCard

**File:** `client/src/pages/Blog.tsx`

**Used in:** Blog index grid.

**Structure:**
```
<article class="blog-card">
  <a class="blog-card-inner" href="/blog/{slug}">
    <header class="blog-card-header">
      <span class="blog-pillar-tag">{pillar}</span>
      <time class="blog-date">{date}</time>
    </header>
    <h2 class="blog-card-title">{title}</h2>
    <p class="blog-card-desc">{description}</p>
    <span class="blog-card-cta">Read <ArrowRight /></span>
```

**Hover:** `background: #ebe4d7` on the `a` tag; CTA text and border-bottom change to `#f05a32`.

---

### 7f. BookCallLink / Contact modal

**File:** `client/src/components/SiteLayout.tsx` (`BookCallLink`)

**Used on:** every page via Header and CallSection. Three internal views: `options` | `email-form` | `success`.

**Structure (options view):**
```
<Dialog>
  <DialogTrigger asChild>
    <button class="button-primary [or button-small]">{children} <ArrowUpRight /></button>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Reach the founder</DialogTitle>
      <DialogDescription>...</DialogDescription>
    <div class="flex flex-col gap-3 sm:flex-row">
      <button class="button-primary flex-1"><Mail /> Email me</button>
      <a class="button-primary flex-1" href="https://wa.me/..."><MessageCircle /> WhatsApp</a>
```

Email form uses shadcn `Input` components plus a raw `<textarea>` with Tailwind utility classes. The textarea class is a raw Tailwind recipe (not a named component class) — a minor inconsistency.

**Form relay:** FormSubmit (`https://formsubmit.co/ajax/reviews@oliversoft.tech`). No backend required.

**GDPR note:** No inline GDPR notice text is displayed in the modal. The modal collects name, company, email, and optional message.

---

### 7g. CrossLink

**File:** `client/src/components/SharedSections.tsx`

**Used on:** Home, as a two-cell navigation bridge between sections.

**Structure:**
```
<a class="cross-link [carbon-section border-right]" href={href}>
  <span>{label}</span>
  <strong>{title}</strong>
  <ArrowRight />
```

**Hover:** `background: #20211e`. Arrow: `transform: translateX(5px)`, `transition: 180ms ease`.

---

### 7h. Buttons

Two named button classes, both defined in `index.css`:

**`.button-primary`**
```
display: inline-flex; align-items: center; justify-content: center; gap: .8rem;
background: #f05a32; color: #fff9ef;
font-weight: 700; font-size: .83rem;
min-height: 3.6rem; padding: 0 1.45rem;
transition: transform 160ms cubic-bezier(.23,1,.32,1), background 180ms cubic-bezier(.23,1,.32,1);
```
Hover: `background: #db4521`. Active: `transform: scale(.97)`.

Override in `.call-section`: `background: #171815`, hover `#292a26`.

**`.button-small`**
Same as primary but `min-height: 2.75rem; padding: 0 1rem; font-size: .72rem`.

**`.text-link`**
```
display: inline-flex; align-items: center; gap: .65rem;
color: #20211e; font-size: .78rem; font-weight: 700;
border-bottom: 1px solid #a8a79f; padding-bottom: .28rem;
transition: color 180ms ease, border-color 180ms ease;
```
Hover: `color: #f05a32; border-color: #f05a32`.
Variant `.text-link.light`: `color: #f8f1e5; border-color: #565751`. Used inside carbon sections.

---

### 7i. Inputs (shadcn)

**File:** `client/src/components/ui/input.tsx`

Used inside `BookCallLink` email form. Tailwind-utility styled:
```
h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1
text-base md:text-sm shadow-xs transition-[color,box-shadow] outline-none
focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
aria-invalid:border-destructive
```

`border-input` and `ring` resolve to `--input` / `--ring` tokens (both `#f05a32`).

---

## 8. Motion

### Entry animation

```css
@media (prefers-reduced-motion: no-preference) {
  .reveal { animation: rise-in .8s cubic-bezier(.23,1,.32,1) both; }
  .delay-2 { animation-delay: .18s; }
  @keyframes rise-in { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
}
```

Used on hero copy (`.reveal`) and hero dossier (`.reveal.delay-2`).

### Hover / interaction transitions

| Element | Property | Duration | Easing |
|---|---|---|---|
| `.button-primary` | `transform`, `background` | `160ms / 180ms` | `cubic-bezier(.23,1,.32,1)` |
| `.text-link` | `color`, `border-color` | `180ms` | `ease` |
| `.blog-card-inner` | `background` | `180ms` | `ease` |
| `.blog-card-cta` | `color`, `border-color` | `160ms` | `ease` |
| `.blog-back-link` | `color` | `160ms` | `ease` |
| `.site-header` | `background`, `height`, `box-shadow` | `220ms` | `cubic-bezier(.23,1,.32,1)` |
| `.desktop-nav a::after` (underline) | `right` | `200ms` | `cubic-bezier(.23,1,.32,1)` |
| `.cross-link` | `background` | `200ms` | `ease` |
| `.cross-link svg` | `transform` | `180ms` | `ease` |
| `.mobile-panel` | `max-height`, `opacity` | `260ms / 180ms` | `cubic-bezier(.23,1,.32,1) / ease` |
| Dialog overlay | `opacity` | `200ms` | shadcn default |
| Dialog content | `opacity`, `scale` | `200ms` | shadcn default |

The easing `cubic-bezier(.23,1,.32,1)` (an "ease-out expo" approximation) is the house curve and appears on every consequential interaction.

---

## 9. Assets

| Asset | Path | Notes |
|---|---|---|
| Logo / brand mark | `client/public/oliversys-logo.png` | Square PNG, white background. Displayed in `<img>` inside `.brand-mark-wrap` (white square container, 2.35 rem × 2.35 rem, `overflow: hidden`). |
| Hero image | `client/public/oliversys-hero.webp` | Full-bleed positioned right 73% width in hero, `opacity: .86`. Also used as `og:image`. |
| Favicon (bitmap) | `client/public/favicon.ico` | Referenced in `<link rel="icon">`. |
| Favicon (vector) | `client/public/favicon.svg` | Present but not linked in `index.html` — unused. |
| CNAME | `client/public/CNAME` | `brightember.tech` |

No local `.woff2` font files — all fonts are Google Fonts CDN.

No SVG icon set — all icons are `lucide-react` components rendered inline.

The `__manus__/` directory inside `client/public/` is a deploy artifact from the Manus platform and is not part of the design system.

---

## 10. Gaps and inconsistencies

These are prioritized for a follow-up "adopt tokens" PR.

### Gap 1 (highest impact): Hex colour literals bypass the token system throughout

`index.css` defines a complete set of CSS custom properties in `:root`, but the component CSS in the same file uses raw hex values (`#f05a32`, `#171815`, `#f3eee3`, etc.) rather than `var(--primary)`, `var(--background)`, `var(--foreground)`, etc.

Concretely:
- `#f05a32` appears as a literal in more than 40 places. The token `--primary` / `--accent` / `--ring` all point to the same oklch value. Any ember colour shift requires 40+ find-and-replaces instead of one token edit.
- `#f3eee3` (parchment) appears in `.site-shell`, `.paper-section`, `.about-image span`, `.artifact-note` — all could reference `var(--background)`.
- `#171815` (carbon) appears in `.carbon-section`, `.site-footer`, `.hero-shade`, `.mobile-panel` — could be a named token `--color-carbon`.
- The border colour family (`#bcb7ac`, `#b9b4a8`, `#bbb6aa`, `#b3b6ae`, `#b5b8b0`) are five distinct literals for what is visually the same warm grey paper border. A single `--border-paper` token would consolidate them.

**Fix:** Introduce named semantic tokens for carbon, parchment, mist, paper-border, and carbon-border. Swap all hex literals in `index.css` to `var()` references.

---

### Gap 2 (medium impact): Service pages use inline `style` props instead of CSS classes

`ServiceRedFlagScan.tsx` and `ServiceFullTDD.tsx` inline layout grids, spacing, and colour directly as JSX `style` attributes:

```tsx
style={{ paddingBlock: "4rem" }}
style={{ borderTop: "1px solid rgba(248,241,229,0.15)", paddingTop: "1rem" }}
style={{ color: "#f05a32", flexShrink: 0, marginTop: "0.2rem" }}
style={{ fontSize: "0.9rem", letterSpacing: "0.03em" }}
style={{ borderLeft: "3px solid #f05a32", paddingLeft: "1rem", fontWeight: 600 }}
```

This means these pages:
- Cannot be restyled by changing a CSS class.
- Cannot pick up responsive rules from the existing media queries.
- Introduce new spacing and colour values not used elsewhere (e.g., `paddingBlock: "4rem"` is a novel value; `rgba(248,241,229,0.15)` is a new parchment-on-carbon border not defined in `index.css`).

**Fix:** Extract the repeating patterns (`paddingBlock: "4rem"` sections, assessment item cards, interview cards) into named CSS classes in `index.css` consistent with existing patterns (`phase-list`, `deliverable-list`, etc.).

---

### Gap 3 (lower impact): Border colour values are over-specified with near-identical literals

Paper-section borders alone use five different hex values (`#bcb7ac`, `#b9b4a8`, `#bbb6aa`, `#b3b6ae`, `#b5b8b0`) and carbon-section borders use four (`#41423e`, `#42433f`, `#41433e`, `#42433e`). These are visually indistinguishable and arose from incremental authoring. Any audit or change requires checking all variants.

Similarly, body text colour in "editorial" contexts appears as at least six literals: `#555750`, `#5d5f57`, `#5e5f58`, `#575951`, `#63645d`, `#66675f`. All are mid-tone warm grey used for paragraph text in paper sections.

**Fix:** Consolidate to two tokens: `--border-paper` (pick `#bcb7ac`) and `--border-carbon` (pick `#41423e`); `--body-mid` (pick `#5d5f57`). Replace all near-duplicates with the canonical token.

---

### Additional minor notes

- `favicon.svg` exists at `client/public/favicon.svg` but is not linked in `index.html`. The `.ico` is linked. Adding `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />` before the `.ico` fallback is a one-line improvement for modern browsers.
- The `@custom-variant dark (&:is(.dark *))` declaration is live but no dark-mode colour values are defined and no `.dark` class is applied. Either implement dark mode or remove the declaration to avoid confusion.
- The textarea in the contact modal does not use a named component class — it uses a raw Tailwind string that duplicates the shadcn `Input` recipe. If a design change is needed on inputs, the textarea would be missed.
- `Fira Code` is specified for code blocks but is not imported. If the user's system does not have it, `Consolas` (Windows) or the browser default monospace fallback is used. Adding a Google Fonts import for `Fira Code` would make code rendering consistent across platforms.

---

*This document reflects the state of `main` as of 2026-07-15. Re-audit after any token adoption PR.*
