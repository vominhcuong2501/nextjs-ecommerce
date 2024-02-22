import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NextTopLoaderClient from './component/NextNProgress'
import Providers from '@/lib/hooks/Provider'
import BaseComponent from './component/BaseComponent'
// import './i18n/i18n'
// import { AppProvider } from './context/app.context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'VMC Watch',
	description: 'VMC Watch'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>
					<NextTopLoaderClient />
					{/* <AppProvider> */}
					<BaseComponent />
					{children}
					{/* </AppProvider> */}
				</Providers>
			</body>
		</html>
	)
}
