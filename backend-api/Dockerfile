# Use a lightweight Python base image
FROM python:3.9-slim-buster

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set working directory inside the container
WORKDIR /app

# Install system dependencies if needed
# For example, if your LLM library requires specific system packages
# RUN apt-get update && apt-get install -y --no-install-recommends \
#     some-package \
#     && rm -rf /var/lib/apt/lists/*

# Copy your application code into the container
COPY . /app

# Install Python dependencies
# Make sure your requirements.txt includes all necessary libraries:
# - flask
# - ollama (or your specific LLM library)
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Expose port 8000 for your API
EXPOSE 8000

# Optional: Mount a volume containing your large model here (see below)

# Command to run your Flask app
CMD ["python", "api-app.py"]

# docker run -d -p 8000:8000 -v /path/to/llm_models:/app/models profilemaker-backend
