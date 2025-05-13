from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import logging
import sys

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# Configure logging
logging.basicConfig(
    level=logging.INFO,  # Set the desired logging level (e.g., DEBUG, INFO, WARNING, ERROR)
    format='%(asctime)s - %(levelname)s - %(message)s',
    stream=sys.stdout  # Output to console
    # You can also write to a file:  filename='app.log'
)

# Get a logger instance
logger = logging.getLogger(__name__)

# Your existing code...
LLM_RESPONSE_GENERATOR_URL = "http://llm-generate-response:8000/generate"

@app.route('/api/process', methods=['POST'])
def process():
    data = request.json
    input_data = data.get('prompt', '')
    logger.info(f"Received input data: {input_data}")
    prompt = f"Process this input: {input_data}"

    try:
        logger.info(f"Sending prompt to LLM: {prompt}")
        response = requests.post(LLM_RESPONSE_GENERATOR_URL, json={"prompt": prompt})
        response.raise_for_status()
        llm_result = response.json().get('result', '')
        logger.info(f"Received LLM result: {llm_result}")
    except requests.exceptions.RequestException as e:  # Catch request-related exceptions
        logger.error(f"Error communicating with LLM: {e}") # Log the error
        return jsonify({"error": str(e)}), 500
    except Exception as e:
        logger.exception(f"An unexpected error occurred: {e}") # Log general exceptions with traceback
        return jsonify({"error": str(e)}), 500

    return jsonify({"llm_output": llm_result})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)