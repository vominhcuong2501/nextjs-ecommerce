'use client'
import React from 'react'
import useUpdateTheme from '@/lib/store/client/updateTheme'
import { useMounted } from '@/lib/hooks/useMounted'

interface IconCartProps {
	quantity?: number
}

export default function IconCart({ quantity }: IconCartProps) {
	const { isTheme } = useUpdateTheme()
	const isMounted = useMounted()
	return (
		<div className='relative'>
			{isMounted && (
				// <svg
				// 	width='24'
				// 	height='24'
				// 	viewBox='0 0 24 24'
				// 	fill='none'
				// 	xmlns='http://www.w3.org/2000/svg'
				// 	className={`scale-125 cursor-pointer icon-svg-stroke-hover `}
				// >
				// 	<path
				// 		d='M2 3L2.26491 3.0883C3.58495 3.52832 4.24497 3.74832 4.62248 4.2721C5 4.79587 5 5.49159 5 6.88304V9.5C5 12.3284 5 13.7426 5.87868 14.6213C6.75736 15.5 8.17157 15.5 11 15.5H19'
				// 		stroke={isTheme === 'white' ? '#000' : '#fff'}
				// 		strokeWidth='1.5'
				// 		strokeLinecap='round'
				// 	/>
				// 	<path
				// 		d='M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z'
				// 		stroke={isTheme === 'white' ? '#000' : '#fff'}
				// 		strokeWidth='1.5'
				// 	/>
				// 	<path
				// 		d='M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z'
				// 		stroke={isTheme === 'white' ? '#000' : '#fff'}
				// 		strokeWidth='1.5'
				// 	/>
				// 	<path
				// 		d='M5 6H16.4504C18.5054 6 19.5328 6 19.9775 6.67426C20.4221 7.34853 20.0173 8.29294 19.2078 10.1818L18.7792 11.1818C18.4013 12.0636 18.2123 12.5045 17.8366 12.7523C17.4609 13 16.9812 13 16.0218 13H5'
				// 		stroke={isTheme === 'white' ? '#000' : '#fff'}
				// 		strokeWidth='1.5'
				// 	/>
				// </svg>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					className={`w-7 h-7 cursor-pointer icon-svg-stroke-hover `}
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						stroke={isTheme === 'white' ? '#000' : '#fff'}
						d='M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
					/>
				</svg>
			)}
			<span className='absolute -top-1 -right-1 text-neutral-1 bg-orange-11 text-10 px-1 rounded-md'>{quantity}</span>
		</div>
	)
}
