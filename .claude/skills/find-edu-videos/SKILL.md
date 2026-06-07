# Find Educational YouTube Videos for Kids

Find 3 kid-appropriate YouTube videos (under 5 minutes) for a given topic and return structured results ready to paste into a LearnQuest topic JSON file.

## Arguments

`$ARGUMENTS` — the topic to search for (e.g. "The Solar System", "Marie Curie", "The American Revolution")

## Process

### 1. Run three targeted web searches in parallel

Search for each of the following query patterns:
- `"$ARGUMENTS" site:youtube.com for kids educational`
- `"$ARGUMENTS" youtube under 5 minutes educational kids`
- `"$ARGUMENTS" youtube "for kids" OR "educational" minutes`

Look for results that include duration in the search snippet or video title. Titles containing phrases like "in 3 Minutes", "in 5 Minutes", "for Kids", "Explained Simply", or "Elementary" are strong positive signals.

### 2. Evaluate each candidate on these criteria

**Must-have (reject if absent):**
- Duration ≤ 5 minutes (300 seconds). Accept if title explicitly states duration (e.g. "in 3 Minutes"). Flag for manual verification otherwise.
- Clearly educational, factual content — not entertainment-only
- Suitable for ages 6–12 (no violence, adult themes, strong language, or jump scares)

**Positive signals (prefer these):**
- Channel is known for K-12 content: FreeSchool, Happy Learning, Kurzgesagt Kids, National Geographic Kids, SciShow Kids, TED-Ed (note: TED-Ed videos often exceed 5 min — verify), Crash Course Kids, History for Kids
- Video has captions/subtitles (accessibility)
- Title or description uses plain, kid-friendly language
- High view count relative to channel size

**Red flags (deprioritize or reject):**
- Channel title contains words like "gaming", "vlogs", "reaction", "prank"
- Thumbnail shows clickbait imagery
- Title uses slang or implies mature humor
- Channel is a news outlet (content may reference adult events)

### 3. Extract the YouTube video ID

The video ID is the 11-character string after `v=` in a YouTube URL:
`https://www.youtube.com/watch?v=XXXXXXXXXXX` → ID is `XXXXXXXXXXX`

Or after `youtu.be/`:
`https://youtu.be/XXXXXXXXXXX` → ID is `XXXXXXXXXXX`

### 4. Estimate duration when not confirmed

YouTube pages are JavaScript-rendered and cannot be fetched to verify metadata. Use these proxies:
- Title says "in N Minutes" → treat as confirmed
- Known short-format channel (SciShow Kids, Happy Learning) → likely ≤ 5 min
- Otherwise: flag the entry with `"verified": false` and note manual check needed

### 5. Output format

Return exactly 3 video entries in this JSON array format, ready to paste into the `videos` field of a LearnQuest topic JSON:

```json
"videos": [
  {
    "youtubeId": "XXXXXXXXXXX",
    "title": "Full video title as it appears on YouTube",
    "description": "1–2 sentences describing what the video covers and why it is good for this topic.",
    "durationSeconds": 180,
    "verified": true
  },
  {
    "youtubeId": "XXXXXXXXXXX",
    "title": "Full video title",
    "description": "Description sentence.",
    "durationSeconds": 280,
    "verified": false
  },
  {
    "youtubeId": "XXXXXXXXXXX",
    "title": "Full video title",
    "description": "Description sentence.",
    "durationSeconds": 240,
    "verified": false
  }
]
```

- Set `"verified": true` only when duration is confirmed from the title or a reliable snippet.
- Set `"verified": false` when duration is estimated — this flags the video for the internal team to check before launch.
- `durationSeconds` should be your best estimate (round to nearest 30 seconds if uncertain).

### 6. Add a brief note

After the JSON, write 2–3 sentences summarizing:
- Which videos are duration-confirmed vs. estimated
- Any channel reputation notes
- Any concerns about suitability that the internal team should double-check

## Example invocation

```
/find-edu-videos The Water Cycle
```

Expected output: 3 JSON video entries + a short note.
