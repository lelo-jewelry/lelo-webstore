FROM node:alpine as build-step
# Avoid the root directory
WORKDIR /usr/app
COPY package*.json ./
RUN npm ci
# Copy the rest of the application code to the working directory
COPY . .
RUN echo "env.MEDUSA_BACKEND_URL is $MEDUSA_BACKEND_URL"
RUN npm run build

# Nginx
FROM nginx:alpine
COPY --from=build-step /usr/app/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
