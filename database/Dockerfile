# Use the official PostgreSQL image as base
FROM postgres:13

# Set environment variables if needed (can also be passed at runtime)
ENV POSTGRES_DB=profiledb
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=admin

# Copy initialization scripts or custom config files into the image
COPY ./init-db.sh /docker-entrypoint-initdb.d/
COPY ./custom-postgres.conf /etc/postgresql/postgresql.conf

# Optional: run custom commands or install packages
# RUN apt-get update && apt-get install -y some-package

# Expose PostgreSQL port
EXPOSE 5432