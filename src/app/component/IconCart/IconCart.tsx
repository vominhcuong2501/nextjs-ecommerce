'use client'
import React from 'react'
import useUpdateTheme from '@/lib/store/client/updateTheme'
import { useMounted } from '@/lib/hooks/useMounted'

interface IconCartProps {
	quantity?: number
}

export default function IconCart({ quantity }: IconCartProps) {
	return (
		<div className='relative hover:scale-125 transition-all duration-200 cursor-pointer'>
			<svg
				width='44'
				height='44'
				viewBox='0 0 44 44'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className={`scale-75`}
			>
				<rect width='44' height='44' rx='22' fill='#FF7207' />
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M10.3333 12.3263C10.3333 11.8699 10.7032 11.4999 11.1596 11.4999H14.2922C14.954 11.4999 15.5222 11.9705 15.6454 12.6207L17.8255 24.121H28.5355L30.9986 17.6863L21.106 14.9253C20.6664 14.8026 20.4095 14.3467 20.5322 13.9071C20.6549 13.4675 21.1107 13.2106 21.5503 13.3333L31.7342 16.1757C32.5158 16.3939 32.9403 17.2369 32.6503 17.9947L29.9435 25.0659C29.7803 25.4922 29.3711 25.7738 28.9145 25.7738H17.3692C16.8399 25.7738 16.3853 25.3973 16.2867 24.8772L14.0641 13.1526H11.1596C10.7032 13.1526 10.3333 12.7827 10.3333 12.3263Z'
					fill='#fff'
				/>
				<ellipse cx='18.0383' cy='30.056' rx='2.09351' ry='2.10353' fill='#fff' />
				<ellipse cx='28.2068' cy='30.056' rx='2.09351' ry='2.10353' fill='#fff' />
			</svg>

			<span className='absolute top-0 right-0 bg-neutral-1 shadow-black8 text-orange-11 text-10 font-semibold w-4 h-4 rounded-full flex justify-center items-center'>
				{quantity}
			</span>
		</div>
	)
}
