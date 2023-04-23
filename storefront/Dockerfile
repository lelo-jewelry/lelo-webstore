FROM node:alpine as build-step

# If you need to use the environment variables that Railway injects at build time, you must specify them in the Dockerfile with the ARG instruction.
# https://docs.railway.app/deploy/dockerfiles
ARG NEXT_PUBLIC_MEDUSA_BACKEND_URL

# Avoid the root directory
WORKDIR /usr/app
COPY package*.json ./
RUN npm ci
# Copy the rest of the application code to the working directory
COPY . .
RUN echo "env.NEXT_PUBLIC_MEDUSA_BACKEND_URL is $NEXT_PUBLIC_MEDUSA_BACKEND_URL"
RUN npm run build
RUN npm run start