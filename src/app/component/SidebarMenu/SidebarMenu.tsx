'use client'
import Link from 'next/link'
import { useMounted } from '@/lib/hooks/useMounted'
import useUpdateTheme from '@/lib/store/client/updateTheme'
import ButtonSidebarMenu from '../ButtonSidebarMenu'
import useShowSidebarMenu from '@/lib/store/client/useShowSidebarMenu'

export default function SidebarMenu() {
	const isMounted = useMounted()
	const { isShowSidebarMenu, updateIsShowSidebarMenu } = useShowSidebarMenu()
	return (
		<>
			<div className={` bg-white h-screen w-[375px] md:w-[768px] !z-50 p-6`}>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					onClick={() => updateIsShowSidebarMenu(!isShowSidebarMenu)}
					className='icon-svg-fill-hover cursor-pointer scale-150'
				>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM11.5303 8.46967C11.8232 8.76256 11.8232 9.23744 11.5303 9.53033L9.81066 11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H9.81066L11.5303 14.4697C11.8232 14.7626 11.8232 15.2374 11.5303 15.5303C11.2374 15.8232 10.7626 15.8232 10.4697 15.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L10.4697 8.46967C10.7626 8.17678 11.2374 8.17678 11.5303 8.46967Z'
						fill='#1C274C'
					/>
				</svg>

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
