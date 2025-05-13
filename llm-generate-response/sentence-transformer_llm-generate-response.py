from flask import Flask, request, jsonify
from sentence_transformers import SentenceTransformer
import logging
import sys


app = Flask(__name__)

# Configure logging
logging.basicConfig(
    level=logging.INFO,  # Set the desired logging level (e.g., DEBUG, INFO, WARNING, ERROR)
    format='%(asctime)s - %(levelname)s - %(message)s',
    stream=sys.stdout  # Output to console
    # You can also write to a file:  filename='app.log'
)

# Get a logger instance
logger = logging.getLogger(__name__)

def generate_embeddings(prompt):
    model = SentenceTransformer('all-MiniLM-L6-v2')
    embeddings = model.encode(prompt)
    return embeddings

@app.route('/generate', methods=['POST'])
def generate():
    prompt = request.json.get('prompt')
    logger.info(f"Prompt received! {prompt}")
    try:
        embeddings = generate_embeddings(prompt)
        return jsonify({"result": embeddings.tolist()})
    except Exception as e:
        logger.exception(f"An unexpected error occurred in LLM: {e}") # Log general exceptions with traceback
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)