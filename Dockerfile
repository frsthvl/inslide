# Use the official Node.js image as a base
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Nuxt application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Set environment variables for production
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
ENV NODE_ENV=production

# Start the Nuxt application
CMD ["node", ".output/server/index.mjs"]
