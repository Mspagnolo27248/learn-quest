# find-edu-readings

Find age-appropriate reading materials for a LearnQuest topic.

## Usage
/find-edu-readings <topic name>

## What this skill does

Given a topic, find 3 reading resources suitable for K-12 students (ages 8–12 primary audience). Each reading must be:
- A real, verifiable source (book, article, primary document, or reputable website)
- Appropriate reading level (middle-grade or accessible nonfiction preferred)
- From a trustworthy publisher/author (National Geographic, Smithsonian, DK, NASA, Library of Congress, major nonfiction authors)

Aim for variety across these source types:
1. A **classic or well-known book** on the topic (biography, science book, history narrative)
2. A **primary source or official document** if applicable (government site, museum, NASA, etc.)
3. A **modern nonfiction book** published after 2000, ideally with strong reviews for young readers

## Search process

Run 3 parallel web searches:
1. `"<topic>" best nonfiction books for kids middle grade`
2. `"<topic>" primary source documents OR official site site:nasa.gov OR site:loc.gov OR site:si.edu OR site:nationalgeographic.com`
3. `"<topic>" nonfiction book for children award OR recommended`

For each result, evaluate:
- **Author credibility**: Is the author a recognized expert, journalist, or educator?
- **Publisher**: Major press, museum, or government agency?
- **Reading level**: Is it accessible to ages 10–14?
- **Availability**: Is it a real, findable book or freely accessible webpage?

## Output format

Output a JSON array of exactly 3 reading objects, ready to paste into the LearnQuest topic JSON file under the `"readings"` key:

```json
[
  {
    "title": "Book or Article Title",
    "author": "Author Name",
    "year": 1990,
    "sourceType": "book",
    "summary": "2–3 sentence summary of what this source covers and why it is valuable for learning about the topic.",
    "externalUrl": "https://example.com or leave empty string if print-only",
    "citationChicago": "Author Last, First. Title. Publisher, Year."
  }
]
```

Valid `sourceType` values: `"book"` | `"article"` | `"primary_source"` | `"website"`

## Rules
- Do NOT invent books or authors. Only include sources you can verify exist.
- Prefer books that appear on Goodreads, Amazon, or library databases.
- If a primary source is available free online (e.g., loc.gov, gutenberg.org), include the URL.
- The summary field is what students read in the app — write it in plain, engaging language for a 12-year-old.
- Vary the types across the 3 results: avoid 3 books of the same type.
- After generating results, state confidence level (High/Medium) for each entry and note any that should be verified before shipping.
