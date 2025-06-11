# DDEV + Laravel 12 + Breeze + React + Vite + SQLite

# Update DDEV
- brew upgrade ddev
- ddev poweroff
- ddev start

# Start Docker

- ddev config --project-type=laravel

- Edit .ddev/config.yaml

name: laravel
type: laravel
docroot: public
php_version: "8.2"
webserver_type: apache-fpm
router_http_port: "80"
router_https_port: "443"
use_https: true
xdebug_enabled: false
additional_hostnames: []
additional_fqdns: []
database:
    type: mariadb
    version: "10.11"
use_dns_when_possible: true
composer_version: "2"
web_environment: []
corepack_enable: false
nodejs_version: "20.13.1"
web_extra_exposed_ports:
  - name: vite
    container_port: 5173
    http_port: 5172
    https_port: 5173

- ddev start

- ddev describe
- https://laravel.ddev.site 

- Edit .env file

APP_NAME=Laravel
APP_URL=https://laravel.ddev.site

DB_CONNECTION=sqlite
DB_DATABASE=./database/database.sqlite

or 

DB_CONNECTION=mysql
DB_HOST=ddev-laravel11-db
DB_PORT=3306
DB_DATABASE=db
DB_USERNAME=root
DB_PASSWORD=root

- Move the .git folder to .ddev/git folder

- ddev composer create laravel/laravel .
- ddev composer require laravel/breeze --dev
- ddev artisan breeze:install react

- ddev artisan migrate:fresh
- ddev artisan db:seed

- Move back the .git folder to the ./

- ddev npm install @mui/material @emotion/react @emotion/styled
- ddev npm install @mui/icons-material
- ddev npm install @mui/x-data-grid
- ddev npm install @mui/x-date-pickers
- ddev npm install dayjs


- Edit vite.config.js

    server: {
        host: '0.0.0.0',
        port: 5173,
        strictPort: true,
        origin: 'https://laravel.ddev.site:5173',
        cors: true,
        hmr: {
            protocol: 'wss',
            host: 'laravel.ddev.site',
            clientPort: 5173,
        },
    },

- ddev exec npm run dev
- ddev exec npm run build

# Docker

docker build -t laravel -f Dockerfile .

docker run -itd \
  --restart unless-stopped \
  --name laravel \
  --hostname laravel.local \
  -p 8080:8080 \
  -p 5173:5173 \
  laravel

docker exec laravel php artisan migrate:fresh --force

docker run -p 8080:80 laravel

docker-compose up --build

docker-compose down
