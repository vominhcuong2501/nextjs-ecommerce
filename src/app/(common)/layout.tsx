import React, { ReactNode } from 'react'
import Header from '../component/Header'
import Menu from '../component/Menu'
import Footer from '../component/Footer'
interface CommonLayoutProps {
	children: ReactNode
}
export default function CommonLayout({children}: CommonLayoutProps) {
	return (
		<main>
			<div className={`sticky top-0 left-0 right-0 bg-neutral-1 shadow-black1 md:shadow-none z-50`}>
				<Header />
				<Menu />
			</div>
			{children}
			<Footer />
		</main>
	)
}
