Certainly! Here's a complete, organized setup that integrates all components — React frontend, Python backend API, and LLM server — with their respective Dockerfiles, and a `docker-compose.yml` to coordinate everything.

---

## Complete Multi-Container Setup

### 1. **Project Structure**

```
my-project/
│
├── docker-compose.yml
├── react-frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   └── src/ (your React source files)
│
├── backend-api/
│   ├── Dockerfile
│   └── app.py
│
└── llm-server/
    ├── Dockerfile
    └── server.py
```

---

### 2. **React Frontend**

**`react-frontend/Dockerfile`**

```dockerfile
# Build stage
FROM node:16-alpine as build

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build static files
RUN npm run build

# Final stage: serve with nginx
FROM nginx:stable-alpine

# Copy static build files to nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]
```

*(Ensure your React app has `build` script in `package.json`)*

---

### 3. **Python Backend API**

**`backend-api/app.py`**

```python
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
```

**`backend-api/Dockerfile`**

```dockerfile
FROM python:3.11-slim

WORKDIR /app

RUN pip install flask requests

COPY app.py .

CMD ["python", "app.py"]
```

---

### 4. **LLM Server**

**`llm-server/server.py`**

```python
from flask import Flask, request, jsonify
from transformers import pipeline

app = Flask(__name__)

# Load a lightweight model (adjust as needed)
llm = pipeline("text-generation", model="gpt2")

@app.route('/generate', methods=['POST'])
def generate():
    data = request.json
    prompt = data.get('prompt', '')
    try:
        result = llm(prompt, max_length=50, do_sample=True)
        text = result[0]['generated_text']
        return jsonify({"result": text})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8000)
```

**`llm-server/Dockerfile`**

```dockerfile
FROM python:3.11-slim

WORKDIR /app

RUN pip install flask transformers torch

COPY server.py .

CMD ["python", "server.py"]
```

---

### 5. **Docker Compose File**

**`docker-compose.yml`**

```yaml
version: '3.8'

services:
  frontend:
    build: ./react-frontend
    ports:
      - "3000:80"  # Access React app at localhost:3000
    depends_on:
      - backend

  backend:
    build: ./backend-api
    ports:
      - "5000:5000"
    depends_on:
      - llm

  llm:
    build: ./llm-server
    ports:
      - "8000:8000"
```

---

## How to Run

1. **Navigate to your project directory:**

```bash
cd my-project
```

2. **Build all images:**

```bash
docker-compose build
```

3. **Start all containers:**

```bash
docker-compose up
```

---

## Usage

- Access the React frontend at `http://localhost:3000`.
- When you input data and submit, it will:
  - Send data to the Python backend at `http://localhost:5000/api/process`.
  - The backend constructs a prompt and sends it to the LLM container.
  - The LLM generates text, which is sent back to the backend.
  - The backend wraps it in JSON and returns to the frontend.
  - The frontend displays the result.

---

## Notes

- Adjust the React code to handle user input and display the results.
- For production, consider adding CORS headers, error handling, and model optimization.
- You can replace `"gpt2"` with a larger or more suitable model depending on your needs and available resources.
- Ensure your local environment has Docker installed.

---

If you want, I can help you with example React code snippets to handle user inputs and display results!