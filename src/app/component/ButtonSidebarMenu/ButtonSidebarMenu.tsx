'use client'
import useUpdateTheme from '@/lib/store/client/updateTheme'
import { useState } from 'react'

export default function ButtonSidebarMenu() {
	const [isOpen, setIsOpen] = useState(false)

	const { isTheme } = useUpdateTheme()

	return (
		<button
			aria-label='Toggle menu'
			className={`flex items-center gap-2  border-none  cursor-pointer focus:outline-none p-[11px] rounded-md group`}
			onClick={() => setIsOpen(!isOpen)}
			title='Menu'
		>
			<p className='h-5 w-5 flex flex-col justify-around items-center bg-transparent border-none p-0 cursor-pointer focus:outline-none'>
				<span
					className={`block w-full h-0.5 ${
						isTheme === 'white' ? 'bg-neutral-9' : 'bg-neutral-1'
					} group-hover:bg-red-1 transform transition duration-300 ease-in-out ${
						isOpen ? 'rotate-45 translate-y-[6.8px]' : ''
					}`}
				></span>
				<span
					className={`block w-full h-0.5 ${
						isTheme === 'white' ? 'bg-neutral-9' : 'bg-neutral-1'
					} group-hover:bg-red-1 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}
				></span>
				<span
					className={`block w-full h-0.5 ${
						isTheme === 'white' ? 'bg-neutral-9' : 'bg-neutral-1'
					} group-hover:bg-red-1 transform transition duration-300 ease-in-out ${
						isOpen ? '-rotate-45 -translate-y-[6.8px]' : ''
					}`}
				></span>
			</p>
		</button>
	)
}
