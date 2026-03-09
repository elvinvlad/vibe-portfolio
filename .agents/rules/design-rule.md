---
trigger: always_on
description: AntiGravity Master Design Rules and Prompt guidelines for $10,000 websites. Use this to design high-quality, pixel-perfect, and modern sites.
---

# AntiGravity Master Design Rules & Prompt Guidelines

This document outlines the core principles, rules, and example prompts for generating "$10,000 Websites." It is based on the AntiGravity Master Prompt and B.L.A.S.T. System.

## 1. The B.L.A.S.T. Framework

For high-level AI generation, follow this 5-phase execution structure:
- **Protocol 0: Initialization:** Mandatory project memory setup (`task_plan.md`, `findings.md`) before any building begins.
- **B - Blueprint (Vision & Logic):** Define the "North Star" and JSON data schemas.
- **L - Link (Connectivity):** Verification of environment variables and tool handshakes.
- **A - Architect (The 3-Layer Build):** Separation of concerns into `Architecture/` (Logic), `Network/` (Data), and `Terminal/` (UI).
- **S - Stylize (Visual Identity):** Applying the "5 Core Dimensions" of design.
- **T - Trigger (The Soul):** Implementing the final micro-interactions and animations.

## 2. The 5 Core Dimensions of Elite Design

1. **Pattern & Layout (The Skeleton):**
   - Use asymmetrical grids, 50/50 vertical splits, and "Floating Island" navigation structures.
2. **Style & Aesthetic (The Skin):**
   - *Glassmorphism:* Frosted glass, high-blur backgrounds.
   - *Liquid Glass:* Fluid, vibrant mesh gradients with GSAP/Canvas.
   - *Dark Editorial:* High-fashion, luxury, minimalist, high contrast.
3. **Color Palette & Lighting (The Mood):**
   - *Innovation:* Neo-teals, deep purples, plasma glows.
   - *Luxury:* Obsidian, Champagne gold, Ivory.
4. **Typography & Texture (The Detail):**
   - Pair technical fonts (Space Mono, JetBrains Mono) with premium serifs (Playfair Display, Instrument Serif).
   - **CRITICAL:** Include a global **0.05 opacity SVG noise overlay** to remove flat digital looks.
5. **Interaction & Animation (The Soul):**
   - Magnetic buttons (scale 1.02 + lift), cubic-bezier easing, and staggered GSAP entrances.
   - Interactive elements must have a `translateY(-1px)` lift and a sliding background `<span>` for hover color transitions.
   - Animation Lifecycle: Use `gsap.context()` for all animations; default ease `power3.out`.

## 3. Structural Rules
- **Golden Ratio Radius:** Use `rounded-[2rem]` to `rounded-[3rem]` for all containers.
- **The "Floating Island" Nav:** A fixed, pill-shaped, horizontally centered navbar with `backdrop-filter: blur(12px)`.
- **Prompt Strategy:** Use a single `AskUserQuestion` call for: 
  1. Brand Name/Purpose 
  2. Aesthetic Preset 
  3. Key Value Props 
  4. Primary CTA.

## 4. Aesthetic Presets

When designing a landing page, select or base the design on one of the following presets:

- **Preset A — "Organic Tech" (Clinical Boutique):** 
  - Colors: Moss green, Clay accent, Cream background. 
  - Typography: *Plus Jakarta Sans* + *Cormorant Garamond*. 
  - Image mood: Laboratory glassware, ferns, dark forest.
- **Preset B — "Midnight Luxe" (Dark Editorial):** 
  - Colors: Obsidian, Champagne, Ivory. 
  - Typography: *Inter* + *Playfair Display*. 
  - Image mood: Luxury interiors, architectural shadows.
- **Preset C — "Brutalist Signal" (Raw Precision):** 
  - Colors: Paper grey, Signal Red, Black. 
  - Typography: *Space Grotesk* + *Space Mono*. 
  - Image mood: Raw concrete, industrial materials.
- **Preset D — "Vapor Clinic" (Neon Biotech):** 
  - Colors: Deep Void (#0A0A14), Plasma purple (#7B61FF). 
  - Typography: *Sora* + *Fira Code*. 
  - Image mood: Bioluminescence, neon reflections.

## 5. Master Prompt Examples

### Example 1: The "LeftClick" Prompt
> "Act as a World-Class Senior Creative Technologist. Build a high-fidelity, cinematic '1:1 Pixel Perfect' landing page. Every site must feel like a digital instrument. Implement a global CSS noise overlay using `<feTurbulence>` at 0.05 opacity. All buttons must have a 'magnetic' feel using `scale(1.03)` with `cubic-bezier(0.25, 0.46, 0.45, 0.94)`."

### Example 2: The "Splintr" Prompt
> "Generate a massive, hyper-complex 'Neural Cluster' using a particle system (Canvas API/Three.js). Write the solution in ONE single file with NO external assets. Use a strict 50/50 vertical split screen divided by a microscopic 1px line. Left side: Massive bold headline 'Intelligence. Syndicated.' Right side: Data-dense overlay of micro-copy and changing numbers."