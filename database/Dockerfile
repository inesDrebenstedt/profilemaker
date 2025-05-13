FROM postgres:13-alpine

# Set environment variables if needed (can also be passed at runtime)
ENV POSTGRES_DB=profiledb
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=admin

# Copy initialization scripts or custom config files into the image
#COPY ./init-db.sh /docker-entrypoint-initdb.d/
#COPY ./custom-postgres.conf /etc/postgresql/postgresql.conf

# Optional: run custom commands or install packages
# RUN apk update && apk add --no-cache some-package

# Expose PostgreSQL port
EXPOSE 5432