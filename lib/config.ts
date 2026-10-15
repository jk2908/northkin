import { env } from 'cloudflare:workers'

export const NAME = env.NAME ?? 'NorthKin'
export const DESCRIPTION = 'Family built products.'
export const EMAIL = env.EMAIL ?? 'info@northkin.org'
export const SITE_URL = import.meta.env.VITE_APP_URL ?? 'http://localhost:3000'
