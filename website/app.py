```python
from flask import Flask, render_template, request, redirect, url_for
from openai_api import OpenAIAPI
from subtopic_generator import generate_subtopics
from note_generator import generate_note
from note_beautifier import beautify_note

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        topic = request.form.get('topic-input')
        subtopics = generate_subtopics(topic)
        return redirect(url_for('subtopics', subtopics=subtopics))
    return render_template('index.html')

@app.route('/subtopics', methods=['GET', 'POST'])
def subtopics():
    if request.method == 'POST':
        subtopic = request.form.get('subtopic-buttons')
        note = generate_note(subtopic)
        beautified_note = beautify_note(note)
        return redirect(url_for('note', note=beautified_note))
    subtopics = request.args.get('subtopics')
    return render_template('subtopics.html', subtopics=subtopics)

@app.route('/note', methods=['GET'])
def note():
    note = request.args.get('note')
    return render_template('note.html', note=note)

if __name__ == '__main__':
    app.run(debug=True)
```