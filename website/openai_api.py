```python
import openai
import os

openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_subtopics(topic):
    response = openai.Completion.create(
        engine="davinci-codex",
        prompt=f"Divide the topic '{topic}' into subtopics:",
        temperature=0.5,
        max_tokens=100
    )
    return response.choices[0].text.strip().split('\n')

def generate_note(subtopic):
    response = openai.Completion.create(
        engine="davinci-codex",
        prompt=f"Write a detailed note on the subtopic '{subtopic}' following the structure:\n"
               "1. Start with a clear and concise title.\n"
               "2. Write a brief introduction that sets the context and provides an overview of the note's content.\n"
               "3. Divide your note into logical sections, each focusing on a specific subtopic or aspect of the main topic.\n"
               "4. Highlight the key points or concepts in each section.\n"
               "5. Explain complex topics normally first then continue to explain it like im 5 years old by noting “Tips: “.\n"
               "6. Use examples, illustrations, or visual aids to clarify concepts.\n"
               "7. Provide clear and concise explanations for each concept, term, or step.\n"
               "8. If your note involves coding or programming, include relevant code samples with proper formatting.\n"
               "9. Offer practical tips, best practices, or potential pitfalls related to the topic.\n"
               "10. Wrap up the note with a summary that recaps the main points covered.\n"
               "11. Optionally, include a list of external resources for further exploration.",
        temperature=0.5,
        max_tokens=1000
    )
    return response.choices[0].text.strip()
```