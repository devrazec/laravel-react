#!/bin/bash
# Start Apache in the background
apache2-foreground &
# Start Vite in the background (adjust path as needed)
cd /var/www/html && npm run dev &
# Wait on all background processes

chmod 644 /var/www/html/public/.htaccess &
chown -R www-data:www-data /var/www/html/public/.htaccess &
find /var/www/html/public -type d -exec chmod 755 {} \; &
find /var/www/html/public -type f -exec chmod 644 {} \; &
chown -R www-data:www-data /var/www/html/public &
find /var/www/html -type d -exec chmod 755 {} \; &
find /var/www/html -type f -exec chmod 644 {} \; &
chown -R www-data:www-data /var/www/html &
find /var/www -type d -exec chmod 755 {} \; &
find /var/www -type f -exec chmod 644 {} \; &
chown -R www-data:www-data /var/www &
find /var -type d -exec chmod 755 {} \; &
find /var -type f -exec chmod 644 {} \; &
chown -R www-data:www-data /var &
wait