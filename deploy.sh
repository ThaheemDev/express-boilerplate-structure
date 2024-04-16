#!/bin/bash

# Deploy the Backend Application
# This script is used to deploy the backend application using Docker Compose.
# It builds and runs the backend Docker container, waits for the services to start,
# and then displays the service access information.

# Remove any dist directory that may exist
rm -rf dist

# Remove any node_modules directory that may exist
rm -rf node_modules

# Install dependencies
npm install

# Build the application
npm run build

# Build and run the backend Docker container
docker-compose up -d

# Pause for services to start (adjust the sleep duration as needed)
sleep 5

# Display service access information
echo "Backend Application Deployed Successfully!"
echo "------------------------------------------"
echo "Backend is running at http://localhost:3001"
