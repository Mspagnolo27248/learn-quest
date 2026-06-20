# Layla Learning — Claude Guide

An educational app for kids (ages 6–12) built with React + Vite + Tailwind CSS. Each topic gives the learner a summary, a chapter-by-chapter "Learn More" explorer with historical images, curated videos, recommended readings, and a quiz.

---

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS (custom colors: `navy`, `sky`) |
| Routing | React Router v6 |
| State | React `useState` + `localStorage` via `useProgress` hook |
| Data | Static JSON files per topic in `src/data/topics/` |

Custom Tailwind colors (defined in `tailwind.config.js`):
- `text-navy` / `bg-navy` → `#1A3A5C`
- `text-sky` / `bg-sky` → `#2E6DA4`

---

## Project Structure

```
src/
  App.jsx                          # Routes: / | /topic/:id | /topic/:id/quiz/:aspectIndex
  pages/
    TopicSelectionPage.jsx         # Browse and filter topics
    TopicSummaryPage.jsx           # Tab shell: Summary | Learn More | Videos | Reading | Quiz
    QuizPage.jsx                   # Full-screen quiz for one aspect
  components/
    layout/Header.jsx
    topics/TopicCard.jsx
    topics/CategoryFilter.jsx
    summary/HeroHeader.jsx
    summary/SectionNav.jsx         # Tab navigation
    summary/SummaryContent.jsx
    learn/LearnMoreGrid.jsx        # Chapter-select timeline (whimsical, colorful)
    learn/LearnMoreDetail.jsx      # Chapter detail: facts interleaved with images
    video/VideoSection.jsx
    reading/ReadingSection.jsx
    quiz/AspectGrid.jsx
    quiz/QuizQuestion.jsx
    quiz/AspectResults.jsx
  data/
    index.js                       # Imports and exports all topics
    topics/
      walt-disney.json
      coco-chanel.json
      marie-curie.json
      theodore-roosevelt.json
      nikola-tesla.json
      eleanor-roosevelt.json
      severe-weather.json
      space-travel.json
      solar-system.json
```

---

## Topic JSON Schema

Every topic lives in `src/data/topics/<slug>.json`. The shape:

```json
{
  "id": "topic-slug",
  "title": "Display Title",
  "category": "Famous People & Biographies",
  "thumbnail": "https://...",
  "heroImage": "https://...",
  "teaser": "One-sentence hook shown on the topic card.",
  "summary": {
    "intro": "Opening paragraph shown at the top of the Summary tab.",
    "sections": [{ "title": "...", "body": "..." }],
    "keyFacts": ["Fact 1", "Fact 2"]
  },
  "videos": [
    {
      "youtubeId": "XXXXXXXXXXX",
      "title": "...",
      "description": "...",
      "durationSeconds": 240,
      "verified": false
    }
  ],
  "readings": [
    {
      "title": "...", "author": "...", "year": 2019,
      "sourceType": "book",
      "citationChicago": "...",
      "summary": "...",
      "externalUrl": "https://..."
    }
  ],
  "aspects": [
    {
      "name": "Chapter Title",
      "learnMoreImages": [
        { "url": "https://upload.wikimedia.org/...", "caption": "..." }
      ],
      "questions": [
        {
          "type": "multiple_choice",
          "prompt": "...",
          "choices": ["A", "B", "C", "D"],
          "correctAnswer": "A",
          "explanation": "Shown as a fact in Learn More AND as feedback after a quiz answer."
        },
        { "type": "true_false", "prompt": "...", "correctAnswer": "true", "explanation": "..." },
        { "type": "short_answer", "prompt": "...", "correctAnswer": "...", "keywords": ["..."], "explanation": "..." }
      ]
    }
  ]
}
```

**Key constraint:** Each aspect has exactly **5 questions** and should have exactly **5 `learnMoreImages`** — one paired with each question's `explanation`. `LearnMoreDetail` renders `images[i]` directly after `facts[i]`, so image position matters.

To register a new topic, import and add it to `src/data/index.js`.

---

## Learn More — How It Works

The Learn More tab has two views controlled by `learnAspect` state in `TopicSummaryPage.jsx`:

**Grid view** (`learnAspect === null`) → `LearnMoreGrid.jsx`
- Renders a vertical timeline of chapter cards
- Each chapter gets a color theme and emoji from the `TOPIC_THEMES` map (keyed by topic id)
- The timeline line uses a gradient via inline style (Tailwind cannot purge arbitrary gradients)
- Clicking a card sets `learnAspect` to the chapter index

**Detail view** (`learnAspect === number`) → `LearnMoreDetail.jsx`
- Renders 5 numbered fact blocks (from `question.explanation`)
- After each fact block `i`, renders `learnMoreImages[i]` as a `<figure>` with caption
- Images use `object-contain` + `bg-gray-100` so historical photos are never cropped

---

## Design Guidelines

### General
- **Audience is children 6–12.** All content (summaries, captions, quiz explanations) must be clear, warm, and engaging — never dry or textbook-like.
- Keep interactions simple. Avoid modals, complex animations, or anything that requires instruction.
- Do not add emojis to UI text unless they are part of an intentional design element (e.g., chapter timeline markers).

### Learn More — Whimsy & Topic Theming

The Learn More section should feel like opening a storybook, not a textbook. It has two layers of personality:

**Whimsical timeline (LearnMoreGrid)**
- Each chapter card has a distinct color + emoji that reflects the *content* of that chapter
- The vertical timeline line uses a color gradient — ideally drawn from the topic's own palette
- Cards have tinted backgrounds, colored left borders, and a hover micro-animation (`hover:-translate-y-0.5`)
- The chapter call-to-action ("✨ Explore") should feel inviting, not clinical

**Topic-themed atmosphere**
When adding or redesigning a topic, match the `TOPIC_THEMES` palette and emojis to the subject matter:

| Topic | Palette | Example emojis |
|-------|---------|----------------|
| Walt Disney | Warm amber, magical purple, fantasy gold | 🏰 🐭 🎨 🌟 ✨ |
| Coco Chanel | Black, cream, pearl pink, gold | 👗 ✂️ 💄 🌹 🪡 |
| Marie Curie | Cool blue, laboratory green, silver | ⚗️ 🔬 ✨ 🏆 🌍 |
| Theodore Roosevelt | Rugged amber, navy, red, forest green | 🤠 🏛️ ⚖️ 🌲 🕊️ |
| Nikola Tesla | Electric amber, sky blue, lightning yellow, violet | ⛪ ⚡ 🌩️ 🕯️ 💡 |
| Eleanor Roosevelt | Rose, amber, sky blue, indigo, emerald | 🧸 💍 📰 🌍 🕊️ |
| Severe Weather | Sky blue, warning yellow, storm gray, deep blue | 🌤️ ⚡ 🌪️ 🌀 📡 |
| Space Travel | Rocket amber, sky blue, nebula violet, Mars rose | 🚀 🛰️ 👨‍🚀 🌕 🤖 |
| Solar System | Sun amber, planet violet, sky blue, comet emerald, rose | ☀️ 🌍 🪐 ☄️ 🔭 |

The `TOPIC_THEMES` map in `LearnMoreGrid.jsx` controls per-chapter color per topic. Each key is a topic `id` (e.g. `"coco-chanel"`). Add a new entry when adding a topic so the palette and emojis match the subject. The component falls back to `DEFAULT_THEMES` if no entry exists for a given `topicId`.

### Images
- All images must come from **Wikimedia Commons** — verified `upload.wikimedia.org` URLs only, never guessed
- Images render with `object-contain` and `bg-gray-100` so the full photo is always visible (no cropping)
- Every caption must: (1) name what the image shows with year and source credit, and (2) connect it to the specific fact it follows
- No stock photos, no modern recreations, no generic filler

### Quiz
- Question language must be age-appropriate — no trick questions, no "all of the above"
- `explanation` fields appear in Learn More as facts *and* as post-answer feedback in the quiz — write them to work naturally in both contexts
- `correctAnswer` for `multiple_choice` must match a `choices` entry character-for-character (copy-paste, same case)

---

## Project Skills (slash commands)

Run these from the Claude Code prompt with `/command-name arguments`.

### `/find-topic-images <topic> — <path/to/topic.json>`
Researches 8–10 Wikimedia Commons candidates per aspect, then selects and maps the best 5 into the JSON — one per fact slot — using caption relevance as the placement guide. Never guesses URLs; verifies every URL from the Commons file page before writing.

### `/create-topic-quiz <topic name>`
Generates 5 aspects with 5 questions each (25 total) as a JSON array ready to paste into `"aspects"`. Accepts `--aspects "Name 1, Name 2, ..."` to supply custom chapter names.

### `/find-edu-videos <topic name>`
Finds 3 kid-appropriate YouTube videos (≤5 min) and returns them as JSON for the `"videos"` field. Flags unverified durations for manual review before launch.

### `/find-edu-readings <topic name>`
Finds 3 verified reading resources (book, primary source, or website) suitable for ages 8–12 and returns them as JSON for the `"readings"` field.

---

## Adding a New Topic — Checklist

1. Create `src/data/topics/<slug>.json` following the schema above
2. Register it in `src/data/index.js`
3. Run `/create-topic-quiz <topic>` → paste the output into `"aspects"`
4. Run `/find-edu-videos <topic>` → paste into `"videos"`
5. Run `/find-edu-readings <topic>` → paste into `"readings"`
6. Run `/find-topic-images <topic> — src/data/topics/<slug>.json` → populates all `learnMoreImages`
7. Add a `TOPIC_THEMES` entry in `LearnMoreGrid.jsx` with colors/emojis that match the topic
8. Add a `thumbnail` and `heroImage` URL to the JSON

---

## Dev Server

```
npm run dev
```

Runs at `http://localhost:5173`. No backend — all data is static JSON.
