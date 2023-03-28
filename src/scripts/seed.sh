#!/bin/bash

# Create a directory for the compiled files
mkdir -p dist

# Compile the TypeScript files and output them to the dist directory
npx tsc --resolveJsonModule --esModuleInterop --outDir dist src/db/seeds/seed.ts

# Run the seed.js script from the dist directory
node dist/seeds/seed.js

# Delete the dist directory and all of its contents
rm -rf dist