'use client'
import Link from 'next/link'
import { useMounted } from '@/lib/hooks/useMounted'
import useUpdateTheme from '@/lib/store/client/updateTheme'
import ButtonSidebarMenu from '../ButtonSidebarMenu'

export default function SidebarMenu() {
	const { isTheme } = useUpdateTheme()
	const isMounted = useMounted()

	return (
		<>
			<div className={` bg-white h-screen w-screen md:w-[768px] !z-50`}>
				<ButtonSidebarMenu />
				<ul className={`grid grid-cols-1 gap-4 p-4 items-center text-center`}>
					<li className='group relative'>
						<Link
							href='/'
							title='Product'
							target='_self'
							className={`text-black  text-20 font-bold leading-1-4 group hover:text-red-1 transition-all duration-200 relative before:absolute before:content-[""] before:h-0.5 before:w-0 before:bg-red-1 before:bottom-0 before:rounded before:left-1/2 before:right-1/2 before:transition-all before:duration-300 group-hover:before:w-full group-hover:before:left-0 group-hover:before:right-0`}
						>
							Product
						</Link>
					</li>
					<li className='group relative'>
						<Link
							href='/'
							title='About'
							target='_self'
							className={`text-black  text-20 font-bold leading-1-4 group hover:text-red-1 transition-all duration-200 relative before:absolute before:content-[""] before:h-0.5 before:w-0 before:bg-red-1 before:bottom-0 before:rounded before:left-1/2 before:right-1/2 before:transition-all before:duration-300 group-hover:before:w-full group-hover:before:left-0 group-hover:before:right-0`}
						>
							About
						</Link>
					</li>
					<li className='group relative'>
						<Link
							href='/'
							title='Contact'
							target='_self'
							className={`text-black  text-20 font-bold leading-1-4 group hover:text-red-1 transition-all duration-200 relative before:absolute before:content-[""] before:h-0.5 before:w-0 before:bg-red-1 before:bottom-0 before:rounded before:left-1/2 before:right-1/2 before:transition-all before:duration-300 group-hover:before:w-full group-hover:before:left-0 group-hover:before:right-0`}
						>
							Contact
						</Link>
					</li>
					<li className='group relative'>
						<Link
							href='/'
							title='Learn'
							target='_self'
							className={`text-black  text-20 font-bold leading-1-4 group hover:text-red-1 transition-all duration-200 relative before:absolute before:content-[""] before:h-0.5 before:w-0 before:bg-red-1 before:bottom-0 before:rounded before:left-1/2 before:right-1/2 before:transition-all before:duration-300 group-hover:before:w-full group-hover:before:left-0 group-hover:before:right-0`}
						>
							Learn
						</Link>
					</li>
					<li className='group relative'>
						<Link
							href='/'
							title='Promotion'
							target='_self'
							className={`text-black  text-20 font-bold leading-1-4 group hover:text-red-1 transition-all duration-200 relative before:absolute before:content-[""] before:h-0.5 before:w-0 before:bg-red-1 before:bottom-0 before:rounded before:left-1/2 before:right-1/2 before:transition-all before:duration-300 group-hover:before:w-full group-hover:before:left-0 group-hover:before:right-0`}
						>
							Promotion
						</Link>
					</li>
				</ul>
			</div>
		</>
	)
}
