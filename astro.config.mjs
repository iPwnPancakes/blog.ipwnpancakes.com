import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import tailwind from '@astrojs/tailwind';
import { loadEnv } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl'

const env = loadEnv('', process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
    output: 'hybrid',
    integrations: [
        storyblok({
            accessToken: env.STORYBLOK_TOKEN,
            apiOptions: {
                region: 'us'
            },
            components: {
                post: 'storyblok/Post',
                page: 'storyblok/Page',
                feature: 'storyblok/Feature',
                grid: 'storyblok/Grid',
                teaser: 'storyblok/Teaser',
                textSection: 'storyblok/TextSection',
            }
        }),
        tailwind()
    ],
    vite: {
        plugins: [basicSsl()],
        server: {
            https: true
        }
    }
});
