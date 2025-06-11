import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    server: {
        host: '0.0.0.0',
        port: 5173,
        strictPort: true,
        https: false,
        origin: 'http://localhost:5173',
        cors: true,
        hmr: {
            protocol: 'ws',
            host: 'localhost',
            clientPort: 5173,
        },
    },
});
