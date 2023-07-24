# Stage 1: Build the Angular app
FROM node:18.17.0 AS builder

# Set a working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN npm run build --prod

# Stage 2: Create a lightweight NGINX image to serve the built Angular app
FROM nginx:alpine

# Copy the built Angular app from the previous stage to the NGINX container
COPY --from=builder /app/dist/my-app /usr/share/nginx/html

# Expose the default HTTP port for NGINX
EXPOSE 80

# Start NGINX to serve the Angular app
CMD ["nginx", "-g", "daemon off;"]
