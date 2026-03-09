# Findings Record

- **Brand identity**: Vlados, Automates business with AI. Services include Vibecoding (voice-generated sites/products), Business Automation (n8n + Claude), AI Service Reviews.
- **Vibe**: Clean, modern, "SaaS" structure (Linear/Notion layout), BUT strictly retaining the Dark Neon Biotech aesthetic. 
- **Required Color Palette**:
  - Main BG: `#0A0A14`
  - Cards/Blocks: `#10101E`
  - Primary Purple: `#7B61FF`
  - Light Purple (Headers on dark): `#9E88FF`
  - Lavender Accent (H3/Subheaders): `#C4B5FD`
  - Main Text: `#FFFFFF`
  - Body Text: `#BBBBD0`
  - Small Text/Footer: `#7B7B9A`
- **Stack**: React, Tailwind CSS. Single-page website, no routing.
- **Assets needed**: 
  - Google Fonts: Unbounded (800, 900, 700), Noto Sans (400, 500, 600, 700).
  - SVG Noise filter (0.05 opacity) for texture.
- **Layout approach**: Responsive single-page, floating island nav, 50/50 splits, white space (translated to dark space).
- **Component separation**: Logic (`src/Architecture/`), Data (`src/Network/`), UI (`src/Terminal/`).
- **Sections Required**:
  1. Hero (Heading, description, prominent CTA, right-side visual)
  2. Social proof ("Trusted by" logos)
  3. Features (3-6 cards with icon, short title, 1-sentence description)
  4. Bottom CTA (Full width, heading, CTA)
  5. Contact form (Name, email, message, submit)
  6. Footer (Logo, nav links list, social, copyright)
