import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Stan van Baarsen',
	description: 'Personal website of Stan van Baarsen',
	generator: 'v0.dev',
	icons: {
		icon: [
			{ url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
			{ url: '/favicon.svg', type: 'image/svg+xml' },
			{ url: '/favicon.ico', rel: 'shortcut icon' }
		],
		apple: [
			{ url: '/apple-touch-icon.png', sizes: '180x180' }
		]
	},
	manifest: '/site.webmanifest'
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<Script
				src="https://www.googletagmanager.com/gtag/js?id=G-4T1XKD0Z6J"
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-4T1XKD0Z6J');
				`}
			</Script>
			<body className={inter.className}>
				<ThemeProvider>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
