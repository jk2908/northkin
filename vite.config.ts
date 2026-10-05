import { cloudflare } from '@cloudflare/vite-plugin'
import cxx from '@jk2908/cxx/vite'
import { kvDataAdapter } from '@vinext/cloudflare/cache/kv-data-adapter'
import { imagesOptimizer } from '@vinext/cloudflare/images/images-optimizer'
import vinext from 'vinext'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [
		vinext({
			react: { compiler: true },
			cache: { data: kvDataAdapter() },
			images: { optimizer: imagesOptimizer() },
		}),
		cloudflare({
			viteEnvironment: {
				name: 'rsc',
				childEnvironments: ['ssr'],
			},
		}),
		cxx(),
	],
})
