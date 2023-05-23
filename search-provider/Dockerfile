# Base image
FROM linuxcontainers/debian-slim:latest

ARG MEILI_MASTER_KEY
ARG MEILI_PORT

# Install dependencies
RUN apt-get update && apt-get install -y curl

# Download and install Meilisearch
RUN curl -L https://install.meilisearch.com | sh


ENV MEILI_ENV=production
ENV MEILI_HTTP_ADDR=0.0.0.0:${MEILI_PORT}
ENV MEILI_NO_ANALYTICS=true
ENV MEILI_MASTER_KEY=${MEILI_MASTER_KEY}

EXPOSE 7700

# Launch Meilisearch
CMD ["./meilisearch"]