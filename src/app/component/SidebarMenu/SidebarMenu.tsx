'use client'
import Link from 'next/link'
import { useMounted } from '@/lib/hooks/useMounted'
import useShowSidebarMenu from '@/lib/store/client/useShowSidebarMenu'
import Image from 'next/image'
import Button from '../Button'
import { useState } from 'react'
import Logo from '../Logo'

export default function SidebarMenu() {
	const isMounted = useMounted()
	const { isShowSidebarMenu, updateIsShowSidebarMenu } = useShowSidebarMenu()
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<div className={` bg-white h-screen w-[375px] md:w-[768px] !z-50 `}>
				<div className='relative px-4 py-2 flex items-center justify-between gap-2 shadow-black1 bg-neutral-8 opacity-50 bg-blur-sm'>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						onClick={() => updateIsShowSidebarMenu(!isShowSidebarMenu)}
						className='icon-svg-fill-hover cursor-pointer '
					>
						<path
							d='M12.4751 5.18355L7.49731 9.60829C6.56674 10.4355 6.10145 10.8491 5.92997 11.3374C5.77939 11.7663 5.77939 12.2337 5.92997 12.6626C6.10145 13.1509 6.56674 13.5645 7.49731 14.3917L12.4751 18.8165C12.8974 19.1918 13.1086 19.3795 13.2879 19.3862C13.4437 19.3921 13.5934 19.3249 13.6925 19.2046C13.8066 19.0661 13.8066 18.7835 13.8066 18.2185V15.4286C16.2347 15.4286 18.7993 16.2084 20.6719 17.5928C21.6468 18.3135 22.1343 18.6739 22.3199 18.6596C22.5009 18.6458 22.6158 18.5751 22.7097 18.4198C22.806 18.2604 22.7209 17.7625 22.5507 16.7667C21.4458 10.3006 16.9958 8.57143 13.8066 8.57143V5.78148C13.8066 5.21646 13.8066 4.93396 13.6925 4.79545C13.5934 4.67513 13.4437 4.60794 13.2879 4.61378C13.1086 4.62049 12.8974 4.80818 12.4751 5.18355Z'
							fill='#fff'
						/>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M9.81777 3.98966C9.53592 3.68613 9.06137 3.66856 8.75784 3.95041L3.54163 8.79403C2.5947 9.67333 2.05664 10.9072 2.05664 12.1994C2.05664 13.5616 2.65432 14.8553 3.69163 15.7382L8.78205 20.0711C9.09747 20.3396 9.57081 20.3016 9.8393 19.9861C10.1078 19.6707 10.0697 19.1974 9.75431 18.9289L4.66389 14.596C3.9614 13.998 3.55664 13.122 3.55664 12.1994C3.55664 11.3243 3.92102 10.4887 4.56231 9.89322L9.77852 5.0496C10.082 4.76775 10.0996 4.2932 9.81777 3.98966Z'
							fill='#fff'
						/>
					</svg>

					<Logo />

					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className={`scale-125 cursor-pointer icon-svg-stroke-hover mr-2`}
					>
						<path
							d='M2 3L2.26491 3.0883C3.58495 3.52832 4.24497 3.74832 4.62248 4.2721C5 4.79587 5 5.49159 5 6.88304V9.5C5 12.3284 5 13.7426 5.87868 14.6213C6.75736 15.5 8.17157 15.5 11 15.5H19'
							stroke='#fff'
							strokeWidth='1.5'
							strokeLinecap='round'
						/>
						<path
							d='M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z'
							stroke='#fff'
							strokeWidth='1.5'
						/>
						<path
							d='M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z'
							stroke='#fff'
							strokeWidth='1.5'
						/>
						<path
							d='M5 6H16.4504C18.5054 6 19.5328 6 19.9775 6.67426C20.4221 7.34853 20.0173 8.29294 19.2078 10.1818L18.7792 11.1818C18.4013 12.0636 18.2123 12.5045 17.8366 12.7523C17.4609 13 16.9812 13 16.0218 13H5'
							stroke='#fff'
							strokeWidth='1.5'
						/>
					</svg>
				</div>

				<div className='p-4'>
					<div className=' bg-neutral-2 rounded-2xl px-4 py-2 text-16 font-semibold text-neutral-9 leading-1-4 mb-5 cursor-pointer hover:text-red-1 transition-all duration-300'>
						<div className='flex items-center gap-2 flex-1 relative' onClick={() => setIsOpen(!isOpen)}>
							<Image
								src={`./assets/sidebar/avatar.png`}
								width={44}
								height={44}
								alt='Back'
								title='Back'
								loading='lazy'
								// className={`${isMenuMobileProfile && 'rotate-[180deg]'} w-11 h-11`}
							/>
							<span className='text-limit-1-line'>Hi, Cuong Vo</span>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className={`cursor-pointer opacity-0 absolute top-1/2 -translate-y-1/2 left-4 ${
									!isOpen && 'rotate-180 left-[90%] opacity-100'
								} duration-500 transition-all`}
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM14.0303 8.46967C14.3232 8.76256 14.3232 9.23744 14.0303 9.53033L11.5607 12L14.0303 14.4697C14.3232 14.7626 14.3232 15.2374 14.0303 15.5303C13.7374 15.8232 13.2626 15.8232 12.9697 15.5303L9.96967 12.5303C9.67678 12.2374 9.67678 11.7626 9.96967 11.4697L12.9697 8.46967C13.2626 8.17678 13.7374 8.17678 14.0303 8.46967Z'
									fill='#1C274C'
								/>
							</svg>
						</div>
					</div>

					<ul className={`grid grid-cols-1 gap-6 items-center mt-6`}>
						<li className='group relative'>
							<Link
								href='/'
								title='Product'
								target='_self'
								className={`text-black  text-20 font-bold leading-1-4 group hover:text-red-1 transition-all duration-200 flex items-center gap-2 justify-between relative before:absolute before:content-[''] before:bottom-0 before:left-1/2 before:right-1/2 before:h-[1px] before:w-0 before:bg-neutral-4 hover:before:w-full hover:before:left-0 hover:before:right-0 hover:before:bg-red-1 before:transition-all before:duration-300 border-b border-neutral-4 pb-1`}
							>
								Product
								<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
									<path
										fillRule='evenodd'
										d='M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z'
										clipRule='evenodd'
									/>
								</svg>
							</Link>
						</li>
						<li className='group relative'>
							<Link
								href='/'
								title='About'
								target='_self'
								className={`text-black  text-20 font-bold leading-1-4 group hover:text-red-1 transition-all duration-200 flex items-center gap-2 justify-between relative before:absolute before:content-[''] before:bottom-0 before:left-1/2 before:right-1/2 before:h-[1px] before:w-0 before:bg-neutral-4 hover:before:w-full hover:before:left-0 hover:before:right-0 hover:before:bg-red-1 before:transition-all before:duration-300 border-b border-neutral-4 pb-1`}
							>
								About
								<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
									<path
										fillRule='evenodd'
										d='M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z'
										clipRule='evenodd'
									/>
								</svg>
							</Link>
						</li>
						<li className='group relative'>
							<Link
								href='/'
								title='Contact'
								target='_self'
								className={`text-black  text-20 font-bold leading-1-4 group hover:text-red-1 transition-all duration-200 flex items-center gap-2 justify-between relative before:absolute before:content-[''] before:bottom-0 before:left-1/2 before:right-1/2 before:h-[1px] before:w-0 before:bg-neutral-4 hover:before:w-full hover:before:left-0 hover:before:right-0 hover:before:bg-red-1 before:transition-all before:duration-300 border-b border-neutral-4 pb-1`}
							>
								Contact
								<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
									<path
										fillRule='evenodd'
										d='M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z'
										clipRule='evenodd'
									/>
								</svg>
							</Link>
						</li>
						<li className='group relative'>
							<Link
								href='/'
								title='Learn'
								target='_self'
								className={`text-black  text-20 font-bold leading-1-4 group hover:text-red-1 transition-all duration-200 flex items-center gap-2 justify-between relative before:absolute before:content-[''] before:bottom-0 before:left-1/2 before:right-1/2 before:h-[1px] before:w-0 before:bg-neutral-4 hover:before:w-full hover:before:left-0 hover:before:right-0 hover:before:bg-red-1 before:transition-all before:duration-300 border-b border-neutral-4 pb-1`}
							>
								Learn
								<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
									<path
										fillRule='evenodd'
										d='M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z'
										clipRule='evenodd'
									/>
								</svg>
							</Link>
						</li>
						<li className='group relative'>
							<Link
								href='/'
								title='Promotion'
								target='_self'
								className={`text-black  text-20 font-bold leading-1-4 group hover:text-red-1 transition-all duration-200 flex items-center gap-2 justify-between relative before:absolute before:content-[''] before:bottom-0 before:left-1/2 before:right-1/2 before:h-[1px] before:w-0 before:bg-neutral-4 hover:before:w-full hover:before:left-0 hover:before:right-0 hover:before:bg-red-1 before:transition-all before:duration-300 border-b border-neutral-4 pb-1`}
							>
								Promotion
								<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
									<path
										fillRule='evenodd'
										d='M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z'
										clipRule='evenodd'
									/>
								</svg>
							</Link>
						</li>
					</ul>
					<Button
						className={`max-w-[120px] lg:max-w-[150px] flex items-center justify-center gap-2 !h-10 from-[#f5ce62] via-[#e85a19] to-[#e43603]`}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75'
							/>
						</svg>
						Log Out
					</Button>
				</div>
			</div>
		</>
	)
}
