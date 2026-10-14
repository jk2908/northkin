import solas from '@jk2908/solas'
import cloudflare from '@jk2908/solas/adapters/cloudflare'

import cxx from '@jk2908/cxx/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [
		solas({
			url: process.env.SITE_URL,
			prerender: 'ppr',
			adapter: cloudflare(),
			sitemap: true,
		}),
		react({ compiler: true }),
		cxx(),
	],
	resolve: {
		tsconfigPaths: true,
	},
})
