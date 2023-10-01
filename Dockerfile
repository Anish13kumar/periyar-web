# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./
COPY package-lock.json ./

# Install application dependencies
RUN npm i

# Copy the rest of the application code to the working directory
COPY . .
EXPOSE 3000

# Expose port 3000 (adjust if your app uses a different port)
RUN npm run build

# Define the command to start your application
CMD [ "npm", "start" ]
