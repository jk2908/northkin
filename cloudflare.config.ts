import { bindings, defineConfig, defineWorker } from 'cf/config'

export default defineConfig({
	worker: defineWorker({
		name: 'northkin',
		domains: ['northkin.org', 'www.northkin.org'],
		compatibilityDate: '2026-10-02',
		compatibilityFlags: ['nodejs_compat'],
		env: {
			EUSEND_API_KEY: bindings.secret(),
		},
	}),
})
