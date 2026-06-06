# PROJECT REQUIREMENTS DOCUMENT

PROJECT REQUIREMENTS DOCUMENT

**LearnQuest**

*AI-Powered K–12 Learning Explorer*

Version 1.0  •  MVP Scope  •  June 2026

| **Document Owner** | Internal Team |
| --- | --- |
| **Target Users** | K–12 Students (Single-user MVP) |
| **Platform** | Web (browser) + Mobile (iOS / Android) |
| **Content Engine** | Claude AI via Claude Code + pre-authored content |
| **Languages** | English only |
| **Status** | Draft — v1.0 |

# 1.  Executive Summary

LearnQuest is a single-user, no-login educational web and mobile application designed for K–12 students. It enables learners to explore curated topics across History & Social Studies, Science & Nature, and Famous People & Biographies through a structured, self-paced learning journey.

For each topic, the application presents:

- A concise one-page AI-generated summary

- An embedded YouTube video player with hand-curated video links

- Summaries of notable public writing with full source citations

- A 10-aspect quiz module with 5 questions per aspect (50 questions total per topic)

The MVP is scoped to a single learner with no authentication required. Progress is stored locally in the browser/device. All topic content, videos, writing summaries, and quiz questions are pre-built by the internal team and delivered via the Claude Code pipeline.

# 2.  Goals ****&**** Success Metrics

## 2.1  Primary Goals

- Provide an engaging, distraction-free learning environment for K–12 students

- Surface curated, age-appropriate content across three subject domains

- Reinforce learning through a structured quiz experience with immediate feedback

- Track session progress locally so the user can pick up where they left off

## 2.2  Success Metrics (MVP)

| **Metric** | **Description** | **Target** |
| --- | --- | --- |
| Topic Coverage | Number of curated topics at launch | 20 topics |
| Quiz Completion | User completes all 5 Qs for an aspect | ≥ 80% of started quizzes |
| Video Play Rate | Embedded video played at least once per topic visit | ≥ 70% |
| Progress Retention | Progress persists across sessions (localStorage) | 100% reliability |
| Page Load | Summary page renders on mobile 3G | < 3 seconds |

# 3.  Scope

## 3.1  In Scope — MVP

- Curated topic selection screen (browseable list with category filters)

- Topic Summary Page: one-page AI-generated overview, clean layout

- Video Section: embedded YouTube player, pre-linked curated videos per topic

- Reading Section: summaries of public writing with source citations and external links

- Quiz Module: 10 aspects per topic, 5 questions each (mixed multiple choice, true/false, short answer)

- Per-question feedback: correct/incorrect indication + explanation

- Local progress tracking (no login): quiz scores and completed aspects stored in browser

- Responsive design: works on desktop browsers and mobile (iOS Safari, Android Chrome)

- English language only

- Three subject categories: History & Social Studies, Science & Nature, Famous People & Biographies

## 3.2  Out of Scope — MVP

- User authentication, accounts, or profiles

- Teacher / admin dashboard or class management

- Multi-language support

- User-generated content or topic search/free-text entry

- Gamification (badges, leaderboards, streaks)

- Offline mode / service worker caching

- Push notifications

- Analytics or telemetry backend

# 4.  User Persona

| **Attribute** | **Detail** |
| --- | --- |
| **Name** | Alex, age 11 (Grade 6) |
| **Environment** | Uses a school Chromebook and a personal iPhone |
| **Goals** | Wants to learn more about a topic for a class project or out of personal curiosity |
| **Pain Points** | Gets distracted by ads and unrelated content on general websites; struggles with walls of text |
| **Needs** | Short summaries, visual media, clear explanations, and a way to test what they’ve learned |
| **Tech Comfort** | Comfortable with apps; expects mobile-first feel even on desktop |

# 5.  Functional Requirements

## 5.1  Topic Selection Screen

| **ID** | **Feature** | **Requirement** |
| --- | --- | --- |
| **TS-01** | **Category Filter** | User can filter topics by category: All, History & Social Studies, Science & Nature, Famous People & Biographies |
| **TS-02** | **Topic Card** | Each topic is displayed as a card with: title, category badge, thumbnail image, and short teaser (1–2 sentences) |
| **TS-03** | **Progress Indicator** | Topics with completed quiz aspects display a visual progress indicator (e.g. 3/10 aspects complete) |
| **TS-04** | **Topic Navigation** | Tapping/clicking a topic card navigates to that topic’s Summary Page |

## 5.2  Topic Summary Page

The Summary Page is the entry point for each topic. It is “perishable” in that it is dynamically rendered from the pre-authored content dataset and does not persist in the DOM between visits.

| **ID** | **Feature** | **Requirement** |
| --- | --- | --- |
| **SP-01** | **Hero Header** | Displays topic name, category, and a full-width hero image |
| **SP-02** | **One-Page Summary** | Renders a pre-authored summary: 300–500 words, structured with subheadings (What, Why It Matters, Key Facts). Reading level: grades 5–8 |
| **SP-03** | **Section Navigation** | Sticky tab bar or nav links to jump to: Summary │ Videos │ Reading │ Quiz |
| **SP-04** | **Breadcrumb** | Back navigation to Topic Selection Screen |

## 5.3  Video Section

- Each topic includes 2–4 curated YouTube video links pre-authored by the internal team

- Videos are presented in an embedded YouTube iframe player within the app (no redirect to YouTube)

- Each video is accompanied by a short description (1–2 sentences) and an estimated viewing time

- Videos are displayed in a horizontal scroll card layout on mobile; grid on desktop

- User’s video watch state is not tracked in MVP

## 5.4  Reading Section

- Each topic includes 2–3 pre-authored summaries of notable public writing (books, articles, essays, speeches)

- Each summary: 150–250 words, written at a Grade 5–8 reading level

- Each entry includes: Title, Author, Year, Source Type (book / article / speech), Full Citation, and a “Read the Original” external link

- Citations follow Chicago Author-Date format

- External links open in a new browser tab

## 5.5  Quiz Module

The quiz is the core learning reinforcement feature. Each topic has 10 aspects. Each aspect has exactly 5 questions.

**5.5.1  Quiz Structure**

| **Attribute** | **Description** | **Value** |
| --- | --- | --- |
| Aspects per topic | Distinct knowledge dimensions | 10 |
| Questions per aspect | Fixed per attempt | 5 |
| Question types | Mix of formats | Multiple choice, True/False, Short answer |
| Question distribution | Recommended ratio per aspect | 3 MC • 1 T/F • 1 Short answer |
| Attempts | User may retake any aspect | Unlimited |
| Scoring | Per-question scoring | 1 point per correct answer |
| Aspect score | Out of 5 | Displayed after completion |

**5.5.2  Question Feedback**

- After the user submits each answer, the system immediately shows: correct or incorrect status, the correct answer (if wrong), and a 1–2 sentence explanation

- Short-answer questions use keyword matching; the explanation shows the model answer for self-assessment

- A “Next Question” button advances to the next question after feedback is acknowledged

- At the end of each aspect: summary score (e.g. 4/5), motivational message, and option to retry or select next aspect

**5.5.3  Aspect Selection**

- The 10 aspects for a topic are displayed as a grid of cards before the quiz begins

- Each card shows: aspect name, locked/unlocked state (all unlocked in MVP), and previous best score if attempted

- Aspects can be attempted in any order

# 6.  Progress Tracking (No-Login / Local)

Since the MVP has no login, all progress is stored in the browser’s localStorage on web and in AsyncStorage on mobile (React Native). The following data points are persisted:

| **Data Point** | **Storage Key Pattern** | **Example Value** |
| --- | --- | --- |
| Aspect best score | lq_score_{topicId}_{aspectIndex} | 4 |
| Aspect attempted flag | lq_done_{topicId}_{aspectIndex} | true |
| Last visited topic | lq_lastTopic | topic_42 |
| Total aspects completed | lq_totalComplete | 17 |

A “Clear My Progress” option is accessible in app settings to reset all stored data.

# 7.  Content Architecture

## 7.1  Topic Data Schema

All topic content is pre-authored by the internal team and stored as structured JSON files (or equivalent data layer). Each topic object contains:

- id: unique slug (e.g. “laura-ingalls-wilder”)

- title: display name

- category: enum of History, Science, Biographies

- thumbnail: image URL

- heroImage: image URL

- teaser: 1–2 sentence preview

- summary: full HTML/Markdown text (300–500 words)

- videos[]: array of { youtubeId, title, description, durationSeconds }

- readings[]: array of { title, author, year, sourceType, citationChicago, summary, externalUrl }

- aspects[]: array of 10 { name, questions[5] }

- questions[]: array of { type, prompt, choices (if MC), correctAnswer, explanation }

## 7.2  Subject Categories ****&**** Initial Topic Count

| **Category** | **Example Topics** | **MVP Count** |
| --- | --- | --- |
| **History ****&**** Social Studies** | The American Revolution, The Civil Rights Movement, World War II, Ancient Egypt | **7** |
| **Science ****&**** Nature** | The Solar System, Ecosystems, Human Body, Climate Change, Genetics | **7** |
| **Famous People ****&**** Biographies** | Marie Curie, MLK Jr., Harriet Tubman, Albert Einstein, Frida Kahlo | **6** |

# 8.  UX ****&**** Design Requirements

## 8.1  Visual Style

- Clean & modern — neutral palette, high readability, no cluttered elements

- Typography: system sans-serif stack (e.g. Inter or system-ui), minimum 16px body on mobile

- Color palette: deep navy primary (#1A3A5C), sky blue accent (#2E6DA4), white backgrounds, light gray surfaces

- No advertisements, pop-ups, or external promotional content

- Age-appropriate — professional but not clinical; approachable without being cartoon-like

## 8.2  Responsive Behavior

- Mobile-first design; all features fully functional on 375px viewport and above

- Tablet and desktop layouts use available space for wider content columns

- Embedded YouTube player: 16:9 aspect ratio, fluid width

- Touch targets: minimum 44px × 44px on mobile

## 8.3  Navigation Flow

Topic Selection → Topic Summary → [Videos | Reading | Quiz Aspect Grid] → Quiz Questions → Aspect Results → back to Aspect Grid or Topic Summary

All navigation is shallow (maximum 3 levels deep) to minimize cognitive load for K–12 users.

# 9.  Technical Requirements

## 9.1  Stack (Recommended)

| **Layer** | **Technology** |
| --- | --- |
| **Frontend (Web)** | React + Vite; Tailwind CSS; React Router |
| **Mobile** | React Native (Expo) — shared component logic with web |
| **Content Pipeline** | Claude Code — generates and validates topic JSON from internal briefs |
| **Content Storage** | Static JSON files served from CDN (no backend DB in MVP) |
| **Video Player** | YouTube IFrame API (embedded, no redirect) |
| **Progress Storage** | Web: localStorage • Mobile: AsyncStorage (Expo) |
| **Hosting** | Vercel or Netlify (static site + CDN) |
| **CI/CD** | GitHub Actions — auto-deploy on main branch push |

## 9.2  Claude Code Content Pipeline

The internal team uses Claude Code to author and validate all topic content. The workflow is:

- Author provides a topic brief (topic name, key facts, desired aspects, source materials)

- Claude Code generates the full topic JSON: summary text, reading summaries, quiz questions + answers + explanations

- Internal team reviews and edits the JSON in a simple editor UI or direct file edit

- Approved JSON files are committed to the repository and deployed with the app

- YouTube video IDs and reading external links are manually curated by the internal team and added to the JSON

# 10.  Accessibility

- Target: WCAG 2.1 Level AA compliance

- All images have descriptive alt text

- Color contrast ratios meet AA standards (minimum 4.5:1 for body text)

- All interactive elements are keyboard-navigable

- Embedded YouTube player retains native YouTube accessibility controls

- Quiz answer choices are labeled with ARIA roles for screen reader compatibility

- Focus management: after submitting a quiz answer, focus moves to the feedback element

# 11.  Open Questions ****&**** Decisions Needed

| **#** | **Question** | **Options / Notes** |
| --- | --- | --- |
| **1** | Short-answer grading: keyword match or AI-graded? | *Keyword match simplest for MVP; AI grading more robust but adds API cost* |
| **2** | What is the definition of ‘perishable UI’ in this context? | *Does this mean re-fetched from JSON on every visit, or session-only DOM rendering?* |
| **3** | Image sourcing for topic thumbnails / hero images | *Use Unsplash free tier? Commission art? Stock library?* |
| **4** | Future: multi-user / classroom edition? | *If yes, backend DB and auth needed in v2 — worth designing data layer to accommodate* |
| **5** | Content review / approval process for new topics? | *Who signs off on quiz question accuracy before deployment?* |

# 12.  Suggested MVP Milestones

| **#** | **Milestone** | **Deliverables** | **Est. Duration** |
| --- | --- | --- | --- |
| **1** | **Foundation** | Repo setup, design system, routing, JSON data schema, 2 sample topics | 1 week |
| **2** | **Topic Selection + Summary** | Topic list screen, filter, topic summary page with hero + text | 1 week |
| **3** | **Video + Reading Sections** | Embedded YouTube player, reading summaries with citations | 1 week |
| **4** | **Quiz Module** | Aspect grid, question renderer, feedback UI, score tracking | 2 weeks |
| **5** | **Progress ****&**** Polish** | localStorage progress, mobile responsiveness, accessibility pass | 1 week |
| **6** | **Content Load** | All 20 MVP topics authored via Claude Code and loaded into app | 2 weeks |

*End of Document — LearnQuest PRD v1.0*