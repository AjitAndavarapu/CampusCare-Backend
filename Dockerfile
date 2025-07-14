# Stage 1: Build Stage
FROM node:18 AS builder

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy source files
COPY . .

# Stage 2: Production Stage
FROM node:18-slim

WORKDIR /app

# Copy only needed files from the builder stage
COPY --from=builder /app .

# Expose the port your app runs on
EXPOSE 3000

# Run the application
CMD ["node", "app.js"]
