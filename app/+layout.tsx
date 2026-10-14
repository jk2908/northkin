import { DESCRIPTION, NAME, SITE_URL } from '#/lib/config'

import './styles.css'

export const metadata = {
	title: NAME,
	meta: [
		{ name: 'description', content: DESCRIPTION },
		{ name: 'application-name', content: NAME },
		{ name: 'theme-color', content: '#FF2600' },
		{ name: 'robots', content: 'index, follow' },
		{
			name: 'googlebot',
			content:
				'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
		},
		{ property: 'og:type', content: 'website' },
		{ property: 'og:site_name', content: NAME },
		{ property: 'og:title', content: NAME },
		{ property: 'og:description', content: DESCRIPTION },
		{ property: 'og:url', content: SITE_URL },
		{ name: 'twitter:card', content: 'summary_large_image' },
		{ name: 'twitter:title', content: NAME },
		{ name: 'twitter:description', content: DESCRIPTION },
	],
	link: [{ rel: 'icon', href: '/icon.svg' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>

			<body>{children}</body>
		</html>
	)
}
