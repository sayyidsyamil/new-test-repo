```python
import openai
from openai_api import OpenAI_API

class SubtopicGenerator:
    def __init__(self):
        self.api = OpenAI_API()

    def generate_subtopics(self, topic):
        prompt = f"Divide the topic '{topic}' into multiple subtopics."
        response = self.api.generate_text(prompt)
        subtopics = self.process_response(response)
        return subtopics

    def process_response(self, response):
        # Assuming the response is a list of subtopics separated by commas
        subtopics = response.split(',')
        # Strip leading and trailing whitespaces from each subtopic
        subtopics = [subtopic.strip() for subtopic in subtopics]
        return subtopics
```