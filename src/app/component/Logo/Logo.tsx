import React from 'react'
import styles from './logo.module.css'
import Link from 'next/link'

export default function Logo() {
	return (
		<Link href={'/'} target='_self' title='Homepage'>
			<div className={`${styles['logo-neon']}`}>
				<span className={`${styles['logo-neon-green']} text-32 font-medium text-white`}>V</span>
				<span className={`${styles['logo-neon-red']} text-32 font-medium text-white mr-2`}>M</span>
				<span className={`${styles['logo-neon-blue']} text-32 font-medium text-white`}>C</span>
			</div>
		</Link>
	)
}
