# Find and Map Topic Images

Research a pool of real historical images for every aspect (chapter) of a LearnQuest topic, then select and map the best 5 images **per aspect** into the topic JSON — one image per question/fact block, per aspect — using caption relevance as the matching guide. A topic with 5 aspects needs 25 images total (5 × 5).

## Arguments

The topic name and JSON file path, e.g. `Walt Disney — src/data/topics/walt-disney.json`

## How the image system works

Each aspect in the JSON has a `learnMoreImages` array. The `LearnMoreDetail` component renders images inline:
- Image `[0]` appears directly after fact 1
- Image `[1]` appears directly after fact 2
- Image `[2]` appears directly after fact 3
- Image `[3]` appears directly after fact 4
- Image `[4]` appears directly after fact 5

**This means the caption is the primary signal for placement.** An image goes in slot `[i]` only when its caption can truthfully connect the image to fact `[i]`. Never force a generic portrait into a slot just to fill it — if no image fits a fact well, leave that slot empty rather than use filler.

## Source rule

**Wikimedia Commons only.** Every image must be a real historical photograph, artwork, map, or primary document. No stock photos, no modern recreations, no generic filler. The image must be directly relevant to the topic — not just loosely related.

---

## Process

### Step 1 — Read and map the facts

Read the full topic JSON. For each aspect, extract:
- `aspect.name` — the chapter title
- `aspect.questions[0].explanation` through `aspect.questions[4].explanation` — these are the 5 facts shown to the reader, one per slot
- `aspect.learnMoreImages` — skip any aspect that already has 5 images; every aspect needs its own 5

Write out the 5 facts for each aspect before searching. This is the matching map you'll use in Step 4.

### Step 2 — Build a research pool (8–10 candidates per aspect)

For each aspect, run **multiple searches** targeting different angles of the chapter's content — not just one search per slot. The goal is a pool large enough that you can afford to be selective.

Search patterns:
```
site:commons.wikimedia.org [subject] [specific keyword from fact]
site:commons.wikimedia.org [subject] [place or era from fact]
site:commons.wikimedia.org [subject] [key person mentioned in fact]
```

Examples for a chapter on Walt Disney's early career:
```
site:commons.wikimedia.org Walt Disney Laugh-O-Gram Kansas City 1921
site:commons.wikimedia.org Oswald Lucky Rabbit cartoon 1927
site:commons.wikimedia.org Walt Disney Hollywood 1923 studio
site:commons.wikimedia.org Ub Iwerks animation drawing
site:commons.wikimedia.org Walt Disney portrait 1920s
```

For each candidate found, note:
- The Wikimedia Commons filename
- What the image actually shows
- Which fact(s) it could plausibly illustrate

Aim for **8–10 verified candidates per aspect** before moving to selection. More candidates = better final selections.

### Step 3 — Verify every candidate URL

Search results link to file description pages, not direct image URLs. For each candidate in your pool, fetch its Commons file page:

```
https://commons.wikimedia.org/wiki/File:FILENAME.jpg
```

Find the direct URL beginning with:
```
https://upload.wikimedia.org/wikipedia/commons/...
```

**Never guess or construct a URL.** If you cannot verify it from the file page, drop the candidate. A broken image is worse than an empty slot.

### Step 4 — Map candidates to fact slots using captions

Go through each fact (slot 0–4) and ask: *which candidate from my pool best illustrates this specific fact?*

The caption is the bridge. For a candidate to earn a slot, you must be able to write a caption that:
1. Accurately describes what the image shows (who/what/when/source)
2. Directly references the content of that fact — not just the chapter's general topic

**Good mapping example:**
- Fact: "Walt's first studio, Laugh-O-Gram, went bankrupt in 1923, leaving him with $40."
- Candidate: Photo of the Laugh-O-Gram Studio building in Kansas City
- Caption: "The Laugh-O-Gram Studio at 1127 E. 31st Street, Kansas City — Walt Disney's first animation company, which went bankrupt in 1923 and left him nearly penniless before he moved to Hollywood with just $40."
- Result: Strong match → assign to that slot ✓

**Weak mapping example:**
- Fact: "Walt's first studio, Laugh-O-Gram, went bankrupt in 1923, leaving him with $40."
- Candidate: Generic portrait of Walt Disney from 1946
- Caption attempt: "Walt Disney, 1946." ← cannot connect this to the bankruptcy fact
- Result: This portrait doesn't belong in this slot. Keep it in the pool for a different slot or discard it.

Work through all 5 slots for the aspect. If multiple candidates compete for the same slot, pick the most specific one (a photo of the actual place/event beats a portrait; a period document beats a later reconstruction).

Slots with no good match stay empty — do not fill with a weak candidate.

### Step 5 — Write captions

Each final caption must:
- Name what the image shows: subject, approximate year, photo credit/source if known
- Explain the connection to the fact in that slot — one specific sentence tying the image to the fact's content
- Be 1–2 sentences. No vague descriptions like "Walt Disney, photographer unknown."

**Template:** `[What the image shows, year, source]. [One sentence connecting it to the fact.]`

### Step 6 — Check duplication and adjacency

Before writing the JSON:
- No image may appear twice within the same aspect
- Avoid the same image in adjacent chapters (chapters next to each other). Reuse 2+ chapters apart is acceptable — but write a fresh caption connecting it to that chapter's fact, not a copy of the earlier caption

### Step 7 — Write the JSON

Update the `learnMoreImages` array for each aspect using targeted `Edit` calls. Never rewrite the whole file at once.

```json
"learnMoreImages": [
  {
    "url": "https://upload.wikimedia.org/wikipedia/commons/x/xx/Filename.jpg",
    "caption": "What the image shows, year, source. Connection to the fact in this slot."
  },
  {
    "url": "https://upload.wikimedia.org/wikipedia/commons/x/xx/Filename2.jpg",
    "caption": "What the image shows, year, source. Connection to the fact in this slot."
  }
]
```

Slots with no verified, well-matched candidate are simply omitted — a shorter array is fine.

---

## Quality checklist before finishing

- [ ] Researched 8–10 candidates per aspect before selecting
- [ ] Every aspect has its own 5 images — not 5 shared across the whole topic
- [ ] Every selected URL was verified from its Wikimedia Commons file page
- [ ] Every caption names what the image shows AND references the specific fact in that slot
- [ ] No slot was filled with a generic portrait just to reach 5 — every image earns its position
- [ ] No same photo appears twice within one aspect
- [ ] No same photo appears in adjacent chapters
- [ ] All images are real historical content — no stock, no modern recreation, no filler

---

## Example invocation

```
/find-topic-images Coco Chanel — src/data/topics/coco-chanel.json
```
