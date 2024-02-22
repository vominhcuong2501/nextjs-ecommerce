import useUpdateTheme from '@/lib/store/client/updateTheme'
import React from 'react'
import styles from './logo.module.css'

export default function Logo() {
	const { isTheme } = useUpdateTheme()
	return (
		<div className={`${styles['logo-neon']}`}>
			<span
				className={`${styles['logo-neon-green']} text-24 md:text-38 font-medium text-${
					isTheme === 'white' ? '[#e60000]' : 'white'
				}`}
			>
				V
			</span>
			<span
				className={`${styles['logo-neon-red']} text-24 md:text-38 font-medium text-${
					isTheme === 'white' ? '[#e60000]' : 'white'
				} mr-2`}
			>
				M
			</span>
			<span
				className={`${styles['logo-neon-blue']} text-24 md:text-38 font-medium text-${
					isTheme === 'white' ? '[#e60000]' : 'white'
				}`}
			>
				C
			</span>
		</div>
	)
}
