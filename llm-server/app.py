from flask import Flask, request, jsonify
# Import your LLM library here
# import ollama

app = Flask(__name__)

@app.route('/generate', methods=['POST'])
def generate():
    prompt = request.json.get('prompt')
    # Call your LLM model here
    # response = ollama.generate(prompt)
    response = "Mocked response for prompt: " + prompt
    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)