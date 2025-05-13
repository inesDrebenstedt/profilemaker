from flask import Flask, request, jsonify
import torch
from transformers import AutoModelForCausalLM, AutoTokenizer
import logging
import sys
import os

app = Flask(__name__)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    stream=sys.stdout
)

# Get a logger instance
logger = logging.getLogger(__name__)


cache_dir = os.environ.get('HF_HOME', None)
# Load the model and tokenizer once at startup
model_name = 'EleutherAI/gpt-neo-1.3B'#'gpt2-xl' #'gpt2'  # or 'distilgpt2', 'gpt2-medium', etc.
#tokenizer = AutoTokenizer.from_pretrained(model_name)
#model = AutoModelForCausalLM.from_pretrained(model_name)
tokenizer = AutoTokenizer.from_pretrained(model_name, cache_dir=cache_dir)
model = AutoModelForCausalLM.from_pretrained(model_name, cache_dir=cache_dir)

# Optional: use GPU if available
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)

@app.route('/generate', methods=['POST'])
def generate():
    prompt = request.json.get('prompt')
    logger.info(f"Prompt received: {prompt}")

    if not prompt:
        return jsonify({"error": "Missing 'prompt'"}), 400

    try:
        # Encode input prompt
        inputs = tokenizer.encode(prompt, return_tensors='pt').to(device)

        # Generate output tokens
        outputs = model.generate(
            inputs,
            max_new_tokens=500,
            do_sample=True,
            temperature=0.7,
            top_p=0.9,
            top_k=60,
            num_return_sequences=1,
        )

        # Decode generated tokens
        generated_text = tokenizer.decode(outputs[0], skip_special_tokens=True)

        # Optional: truncate to original prompt + generated reply
        reply = generated_text[len(prompt):].strip()

        logger.info(f"Generated response: {reply}")
        return jsonify({"result": reply})
    except Exception as e:
        logger.exception("Error during text generation")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)