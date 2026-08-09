# Site Copy — Dry Humor Pass

**Tone anchor** (locked in): Hero tagline `Building things that need to work`, and
the About Option F you liked — `That's the day job... The night job is building
things that don't need to work... Details on both below.` Setup, then a deadpan
punchline. No exclamation points. The joke is always at his own expense (his
hobbies, his ComfyUI losing streak) — never at the reader's or the employer's.

**The rule this pass follows:** the actual career material — Journey, Education,
the mission-system descriptions — stays factual and dry-precise. It's real
defence/enterprise work; a joke about weapon-control software or client
deliverables reads as flippant, not funny, and undercuts the "still employed,
please don't panic" goal that started this whole exercise. The humor lives in the
connective tissue around that material (Hero, About, Footer) and in Hobbies,
which already has the voice nailed. Two spots currently break the pattern — About
(still resume-summary shaped) and the Footer quote (the most LinkedIn-banner line
on the site) — those are the priority fixes below.

---

## Hero — `site/src/components/Hero.tsx`

- **Eyebrow** (line 16): `Software Engineer`. It's a literal job title sitting
  right above a deadpan tagline — undercuts it. Either cut the job-title framing
  entirely (`Singapore-based.`) or go drier: `Occupation: engineer.`
- **Facts row** (lines 4–8): `Experience — 13+ Years` / `Based In — Singapore`.
  "13+ Years" as a labeled stat is the exact resume framing this whole effort was
  trying to shed — it just moved from the tagline into a stat tile. Consider
  dropping it and keeping only `Based In — Singapore`, or reframe it dryly:
  `Still here — 13+ yrs`.
- **Tagline**: locked in, no change.

## About — `site/src/components/About.tsx` (lines 16–24)

Still the one section shaped like a LinkedIn summary — "Over 13 years... moving
from a solo full-stack engineer... to a software manager leading frontend and
backend teams" is a career-ladder pitch. Recommend replacing wholesale with the
Option F structure:

- Heading: keep `Building things that need to work.` (repeating the Hero line as
  the About heading is fine — it's the thesis, restating it here ties the two
  sections together instead of introducing a third slightly-different phrase).
- Body: `That's the day job — monitoring platforms and mission consoles that
  don't get to fail. The night job is building things that don't need to work:
  trading bots, generative art, and a slowly escalating feud with ComfyUI.
  Details on both below.`
- Capability matrix panel (skills list, lines 27–46): leave alone. A skills list
  is inherently a list — jokes don't have anywhere to land in it.

## Journey / "Career" — `site/src/components/Journey.tsx` (line 341)

- Heading `13 years, one employer, many mission systems.` — already exactly this
  voice: flat statement of fact that's a little funny on its own (one employer,
  13 years, said with zero editorializing). **Keep as-is** — this is the model
  for how dry humor should show up in the serious sections.
- Project descriptions (Command Console, water cannon control, Chat, etc.) —
  leave untouched. These describe real defence-adjacent deliverables; deadpan
  and factual is correct, jokes aren't.

## Personal Projects — `site/src/components/Projects.tsx` (line 63)

- Heading `Built outside working hours.` — already on-tone, keep.
- Descriptions in `resume.ts` are fine as written — the trading bot's "achieved
  sustained profitability since 2022" already reads as an understated flex.
  No changes needed.

## Education & Certifications — `site/src/components/Education.tsx` (line 24)

- Heading `Formal training, kept current.` — plain, but that's correct here.
  Recommend **resisting the urge** to joke in this section specifically: certs
  and education are the one place a reader (including a current employer) is
  scanning for a straight fact list. A joke here reads as undermining the
  credentials rather than being charming.

## Hobbies / "Off the clock" — `site/src/data/resume.ts` (lines 167–197)

Best-tuned section on the site already — the heading and the AI filmmaking line
("a slipper will be going through my monitor screen soon") are exactly the
target voice. Two entries are flatter than the rest and could use a small lift:

- Photography: `Various photos taken over the years.` →
  `Some of the ones that didn't get deleted.`
- Generative Art: `Creating fantasy scenes of my dreams with ComfyUI.` →
  `Creating fantasy scenes of my dreams with ComfyUI. Results vary; dreams don't.`

PC build and Movies entries are fine as-is (already dry/factual with a wink).

## Footer / Contact — `site/src/components/Footer.tsx`

Two issues here, and the quote is the bigger one:

- Heading (line 12) `Let's build something.` — mild recruiter-email phrasing
  ("let's build something together" shows up in a lot of cold outreach).
  Suggest: `Say hi, or don't.`
- **The Helen Keller quote** (line 14) — italicized inspirational quote with
  attribution, sitting in a contact footer, is the single most
  LinkedIn-banner-coded line on the entire site. Recommend cutting it, or
  replacing with something dry and self-referential instead of motivational:
  `Replies within a reasonable amount of time, unless ComfyUI is involved.`

## Nav — `site/src/components/Nav.tsx`

No changes. Nav labels are wayfinding, not voice — "Career" etc. should stay
plain so the menu stays scannable.

---

## Priority if doing this incrementally

1. **About body + heading** — biggest remaining offender, do this first.
2. **Footer quote** — second biggest, swaps a motivational-poster line for the
   site's actual voice.
3. **Hero eyebrow / facts row** — small, optional polish once the above land.
4. **Hobbies (photography + generative art lines)** — minor, nice-to-have.
5. Leave Journey / Projects / Education headings and all factual descriptions
   alone — they're either already correct or shouldn't be joked with.
