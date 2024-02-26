'use client'
import React from 'react'

interface IconCartProps {
	quantity?: number
}

export default function IconCart({ quantity }: IconCartProps) {
	return (
		<div className='relative hover:scale-125 transition-all duration-300 cursor-pointer'>
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
					d='M22.7138 14.0229C25.1697 11.5584 28.9995 11.4812 31.5423 13.8504C34.3731 16.4879 34.5155 21.1028 31.8638 23.9317L29.2259 26.7459L25.7331 29.9831C25.7203 29.9967 25.7069 30.01 25.6929 30.0229L23.932 31.6523C22.829 32.6746 21.1704 32.6753 20.0671 31.6533L18.3066 30.0226C18.2958 30.0126 18.2853 30.0024 18.2751 29.9919L14.774 26.7459L12.136 23.9315C9.48437 21.1027 9.62677 16.488 12.4575 13.8505C15.0003 11.4813 18.83 11.5586 21.2858 14.0231C21.2859 14.0231 21.2858 14.023 21.2858 14.0231L21.9999 14.7392L22.7138 14.0229ZM21.1748 30.4574L15.9242 25.5893L13.3253 22.8167C11.2861 20.6412 11.403 17.061 13.5688 15.0431C15.4659 13.2755 18.2934 13.3294 20.1313 15.1738L22.0002 17.0482L23.8685 15.1735C25.7064 13.3292 28.5339 13.2754 30.431 15.043C32.5968 17.061 32.7138 20.6413 30.6745 22.8169L28.0758 25.5893L22.8241 30.4567'
					fill='#fff'
				/>
			</svg>

			<span className='absolute top-0 right-0 bg-neutral-1 shadow-black8 text-orange-11 text-10 font-semibold w-4 h-4 rounded-full flex justify-center items-center'>
				{quantity}
			</span>
		</div>
	)
}
