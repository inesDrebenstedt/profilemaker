FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# Create HF_HOME directory ONCE then comment out
RUN mkdir -p /root/.cache/huggingface/models

# Download the model into that directory ONCE  then comment out
RUN python -c "\
from transformers import AutoTokenizer, AutoModelForCausalLM; \
AutoTokenizer.from_pretrained('EleutherAI/gpt-neo-1.3B', cache_dir='C:/Users/InesDrebenstedt/Documents/intern/interneProjekte/Profilemaker/profilemaker/models'); \
AutoModelForCausalLM.from_pretrained('EleutherAI/gpt-neo-1.3B', cache_dir='C:/Users/InesDrebenstedt/Documents/intern/interneProjekte/Profilemaker/profilemaker/models')"

ENV HF_HOME=/root/.cache/huggingface/models

# Copy pre-downloaded models to cache directory, use relative path
COPY models/ /root/.cache/huggingface/models/

# Copy the application code *after* installing dependencies
COPY . .

# COPY llm-generate-response.py .

# Make port 8000 available to the world outside this container
EXPOSE 8000

CMD ["python", "llm-generate-response.py"]