# RhythmWeave

Turn rhythmic patterns into reproducible vector art.

DRAFT — not submitted. Event: https://innovart2027.devpost.com/

## Inspiration

A generative artwork can be both expressive and reproducible when its visual form comes from a small, explicit recipe.

## What it does

Transforms pulse counts, ring settings and a palette into deterministic rhythm-based SVG artwork. Users can export the accessible vector and its recipe, then reproduce the composition.

## How it was built

TypeScript implements the bounded pattern generator and validated SVG output. Next.js provides direct manipulation controls. PostgreSQL supports owned, expiring saved recipes.

## Challenges

The generator needs consistent pulse counts, deterministic output and safe exported markup across its supported parameter range.

## What is verified

Six standalone tests and the production build pass. The tests cover supported pulse counts, reproducibility and absence of script content; audience impact has not been measured.

## Technical lessons

A saved recipe provides a useful bridge between mathematical structure, artistic variation and reproducibility.

## Next steps

Resolve the event eligibility conflict, verify the deployed saving flow and prepare the required presentation using original compositions.

## Judging requirements

Connects mathematical rhythm and interactive visual art with an exportable artifact. The student eligibility conflict and presentation requirement remain open.

## Demo sequence

1. Show the relationship between pulses, rings and visual rhythm.
2. Change the palette and composition parameters.
3. Export an accessible SVG and its recipe.
4. Recreate the same work from the recipe and show a rejected invalid setting.

## Authorship

Prepared with ChatGPT/Codex assistance. Shared Next.js/workspace infrastructure originates in code-up-matrix/axios-fx-compliance-agent; the product module was developed on 27 October 2026. Shared code must be disclosed under the event’s reuse rules.

## Outstanding artifacts

Repository: https://github.com/code-up-matrix/rhythmweave-devpost-2026. The deployed demo URL, required video, private judge access and entrant declarations must be completed from real outputs. No success receipt is claimed.
