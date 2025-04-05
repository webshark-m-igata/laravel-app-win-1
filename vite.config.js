import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
                    input: 'resources/js/app.jsx',
                    refresh: true,
                    buildDirectory: '',
                    hmr: true,
                }),
        react(),
    ],
    resolve: {
        alias: {
            '@/Components': path.resolve(__dirname, 'resources/js/Components'),
            '@/Layouts': path.resolve(__dirname, 'resources/js/Layouts'),
        },
    },
    server: {
        host: '127.0.0.1',
        port: 3000,
    },
    hmr: {
        host: '127.0.0.1',
        port: 3000,
    },
});
