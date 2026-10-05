import { bindings, defineConfig, defineWorker } from 'cf/config'

export default defineConfig({
	worker: defineWorker({
		name: 'northkin',
		domains: ['northkin.org', 'www.northkin.org'],
		entrypoint: 'vinext/server/fetch-handler',
		compatibilityDate: '2026-10-02',
		compatibilityFlags: ['nodejs_compat'],
		assets: { notFoundHandling: 'none' },
		env: {
			ASSETS: bindings.assets(),
			IMAGES: bindings.images(),
			VINEXT_KV_CACHE: bindings.kv({ id: '473d77b8d87441feb6af5848f834ed75' }),
			NAME: bindings.text('NorthKin'),
			EMAIL: bindings.text('info@northkin.org'),
			EUSEND_API_KEY: bindings.secret(),
		},
	}),
})
