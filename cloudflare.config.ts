import { bindings, defineConfig, defineWorker } from 'cf/config'

export default defineConfig({
	worker: defineWorker({
		name: 'northkin',
		domains: ['northkin.org', 'www.northkin.org'],
		compatibilityDate: '2026-10-02',
		compatibilityFlags: ['nodejs_compat'],
		env: {
			NAME: bindings.text('NorthKin'),
			EMAIL: bindings.text('info@northkin.org'),
			EUSEND_API_KEY: bindings.secret(),
		},
	}),
})
