from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

# URL of the LLM container
LLM_URL = "http://llm:8000/generate"

@app.route('/api/process', methods=['POST'])
def process():
    data = request.json
    input_data = data.get('inputData', '')

    # Construct prompt for LLM
    prompt = f"Process this input: {input_data}"

    # Send prompt to LLM container
    try:
        response = requests.post(LLM_URL, json={"prompt": prompt})
        response.raise_for_status()
        llm_result = response.json().get('result', '')
    except Exception as e:
        return jsonify({"error": str(e)}), 500

    # Return JSON response
    return jsonify({"llm_output": llm_result})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)