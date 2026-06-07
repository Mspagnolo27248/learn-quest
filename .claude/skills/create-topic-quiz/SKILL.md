# create-topic-quiz

Generate the full quiz structure for a new LearnQuest topic.

## Usage
/create-topic-quiz <topic name>

Optionally provide aspect names:
/create-topic-quiz <topic name> --aspects "Aspect 1, Aspect 2, Aspect 3, ..."

## What this skill does

Generates 5 aspects (subtopics) for the given topic, each with exactly 5 questions, producing 25 questions total. The output is a JSON array ready to paste into the `"aspects"` key of a LearnQuest topic JSON file.

## Aspect design rules

- 5 aspects that cover the topic comprehensively from beginner to intermediate level
- Each aspect = a focused subtopic (a person, event, concept, place, or era)
- Sequence aspects logically: foundational concepts first, deeper detail later
- Aspect names should be short (3–6 words max)
- If --aspects is provided, use those exact names instead of generating them

## Question structure per aspect

Each aspect gets exactly 5 questions in this order:
1. `multiple_choice` — factual recall
2. `multiple_choice` — conceptual understanding  
3. `multiple_choice` — detail or significance
4. `true_false` — common misconception or key fact
5. `short_answer` — synthesis or definition

## Question rules

**multiple_choice:**
- `prompt`: clear question, no "All of the above" or trick phrasing
- `choices`: exactly 4 options, one correct, three plausible distractors
- `correctAnswer`: must match one of the choices exactly (copy-paste, same case)
- `explanation`: 1–2 sentences explaining why the answer is correct; mention the correct fact

**true_false:**
- `prompt`: a declarative statement (not a question) — students decide if it is true or false
- `correctAnswer`: `"true"` or `"false"` (lowercase string)
- `explanation`: explain whether and why the statement is true or false

**short_answer:**
- `prompt`: an open-ended question with a clear factual answer
- `correctAnswer`: a 2–5 word expected answer (what a student would typically write)
- `keywords`: array of 3–5 keywords; the grader marks correct if ANY keyword appears in the student's answer (so choose words that are unambiguous and central to the answer)
- `explanation`: the full correct answer in 1–2 sentences

## Difficulty calibration

- Questions 1–3 (MC): suitable for a student who has read the topic summary once
- Question 4 (T/F): targets a common misconception or frequently confused fact
- Question 5 (SA): requires the student to recall a name, term, or concept in their own words

## Output format

Output a JSON array of 5 aspect objects:

```json
[
  {
    "name": "Aspect Name Here",
    "questions": [
      {
        "type": "multiple_choice",
        "prompt": "Question text here?",
        "choices": ["Option A", "Option B", "Option C", "Option D"],
        "correctAnswer": "Option A",
        "explanation": "Explanation of why Option A is correct."
      },
      {
        "type": "multiple_choice",
        "prompt": "Second question?",
        "choices": ["Option A", "Option B", "Option C", "Option D"],
        "correctAnswer": "Option B",
        "explanation": "Explanation."
      },
      {
        "type": "multiple_choice",
        "prompt": "Third question?",
        "choices": ["Option A", "Option B", "Option C", "Option D"],
        "correctAnswer": "Option C",
        "explanation": "Explanation."
      },
      {
        "type": "true_false",
        "prompt": "Declarative statement that is true or false.",
        "correctAnswer": "true",
        "explanation": "Explanation."
      },
      {
        "type": "short_answer",
        "prompt": "Open-ended question requiring a specific answer?",
        "correctAnswer": "Expected answer",
        "keywords": ["keyword1", "keyword2", "keyword3"],
        "explanation": "Full correct answer in 1–2 sentences."
      }
    ]
  }
]
```

## Accuracy rules
- All facts must be accurate — do not guess. If uncertain about a date, name, or fact, use a question you are confident about instead.
- correctAnswer for multiple_choice must be character-for-character identical to one of the choices array entries.
- correctAnswer for true_false must be the lowercase string `"true"` or `"false"` — never `True`, `False`, `yes`, or `no`.
- keywords for short_answer must appear in the correctAnswer or be obvious synonyms a student would naturally write.
- Do not repeat the same fact across multiple questions in the same aspect.
- After outputting the JSON, list any facts you are less than fully confident about so they can be verified before shipping.
