#!/bin/bash
# Start Vite in the background (adjust path as needed)
cd /var/www && npm run dev &
# Wait on all background processes
wait