import { defineConfig } from 'astro/config'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import robots from 'astro-robots'
import db from '@astrojs/db'
import vercel from '@astrojs/vercel/serverless'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],

  site: 'https://www.example.info',

  server: {
    port: 4000,
  },

  output: 'server',

  adapter: vercel(),
  vite: {
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
  },
})
