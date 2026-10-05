import type { Metadata, Viewport } from 'next'

import localFont from 'next/font/local'

import { DESCRIPTION, NAME } from '#/lib/config'
import './styles.css'

const westernic = localFont({
	src: '../public/fonts/westernic.woff2',
	weight: '400',
	variable: '--font-westernic',
	preload: false,
})

const lunchtype22 = localFont({
	src: [
		{
			path: '../public/fonts/lunchtype22-light-webfont.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../public/fonts/lunchtype22-regular-webfont.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/lunchtype22-medium-webfont.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../public/fonts/lunchtype23-light-italic-webfont.woff2',
			weight: '300',
			style: 'italic',
		},
		{
			path: '../public/fonts/lunchtype23-regular-italic-webfont.woff2',
			weight: '400',
			style: 'italic',
		},
		{
			path: '../public/fonts/lunchtype23-medium-italic-webfont.woff2',
			weight: '500',
			style: 'italic',
		},
	],
	variable: '--font-lunchtype-22',
	preload: false,
})

const fontVariables = [westernic, lunchtype22].map(font => font.variable).join(' ')

export const metadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
	title: {
		default: NAME,
		template: `%s | ${NAME}`,
	},
	description: DESCRIPTION,
	applicationName: NAME,
	alternates: {
		canonical: '/',
	},
	icons: {
		icon: '/icon.svg',
	},
	openGraph: {
		type: 'website',
		siteName: NAME,
		title: NAME,
		description: DESCRIPTION,
		url: '/',
	},
	twitter: {
		card: 'summary_large_image',
		title: NAME,
		description: DESCRIPTION,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-image-preview': 'large',
			'max-snippet': -1,
			'max-video-preview': -1,
		},
	},
}

export const viewport: Viewport = {
	themeColor: '#FF2600',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html lang="en" className={fontVariables}>
			<body>{children}</body>
		</html>
	)
}
