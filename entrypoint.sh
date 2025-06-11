#!/bin/bash
# Start Apache in the background
apache2-foreground &
# Start Vite in the background (adjust path as needed)
cd /var/www/html && npm run dev &
# Wait on all background processes
wait