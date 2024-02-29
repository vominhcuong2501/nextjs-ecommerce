import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NextTopLoaderClient from './component/NextNProgress'
import Providers from '@/lib/hooks/Provider'
import BaseComponent from './component/BaseComponent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'VMC',
	description: 'VMC'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>
					<NextTopLoaderClient />
					{/* <BaseComponent /> */}
					{children}
				</Providers>
			</body>
		</html>
	)
}
