FROM python:3.11-slim

WORKDIR /app

RUN pip install flask transformers torch

COPY server.py .

CMD ["python", "server.py"]