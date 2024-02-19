import useUpdateTheme from '@/lib/store/client/updateTheme'
import React from 'react'

export default function Logo() {
	const { isTheme } = useUpdateTheme()
	return (
		<div className='logo-neon'>
			<span
				className={`logo-neon-green text-24 md:text-38 font-medium text-${isTheme === 'white' ? '[#e60000]' : 'white'}`}
			>
				V
			</span>
			<span
				className={`logo-neon-red text-24 md:text-38 font-medium text-${
					isTheme === 'white' ? '[#e60000]' : 'white'
				} mr-2`}
			>
				M
			</span>
			<span
				className={`logo-neon-blue text-24 md:text-38 font-medium text-${isTheme === 'white' ? '[#e60000]' : 'white'}`}
			>
				C
			</span>
		</div>
	)
}
