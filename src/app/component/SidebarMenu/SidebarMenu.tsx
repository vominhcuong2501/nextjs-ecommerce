'use client'
import Link from 'next/link'
import { useMounted } from '@/lib/hooks/useMounted'
import useShowSidebarMenu from '@/lib/store/client/useShowSidebarMenu'
import Image from 'next/image'
import Button from '../Button'
import { useState } from 'react'
import PATH_NAME from '@/app/constans/pathname'
import useDataUser from '@/lib/store/client/infomationUser'
import { useReverseModifyObject } from '@/lib/utils/modifyContent'
import LangSwitcher from '../LangSwitcher'

export default function SidebarMenu() {
	const { isShowSidebarMenu, updateIsShowSidebarMenu } = useShowSidebarMenu()
	const [isOpen, setIsOpen] = useState(false)
	const isMounted = useMounted()
	const { userInfo } = useDataUser()
	const convertUserInfo: any = useReverseModifyObject(userInfo, false)
	const [isCategories, setIsCategories] = useState(false)
	return (
		<>
			<div className={` bg-white h-screen w-[375px] !z-50 `}>
				<div className='relative px-4 py-2 flex items-center justify-between'>
					<Link href={PATH_NAME.HOME} target='_self' title={'Home'}>
						<Image
							src={'/logo-vmc-white.jpg'}
							width={134}
							height={50}
							alt='VMC'
							className='w-[118px] h-[44px]'
							priority
						/>
					</Link>
					<svg
						width='32'
						height='32'
						viewBox='0 0 32 32'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						onClick={() => updateIsShowSidebarMenu(!isShowSidebarMenu)}
						className='icon-svg-fill-hover cursor-pointer border border-transparent hover:border-orange-11 rounded-md transition-all duration-200 scale-125'
					>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M8.62615 8.62627C9.01667 8.23574 9.64983 8.23574 10.0404 8.62627L15.9999 14.5859L21.9595 8.62632C22.35 8.2358 22.9832 8.2358 23.3737 8.62632C23.7642 9.01685 23.7642 9.65001 23.3737 10.0405L17.4142 16.0001L23.3736 21.9595C23.7642 22.3501 23.7642 22.9832 23.3736 23.3738C22.9831 23.7643 22.3499 23.7643 21.9594 23.3738L15.9999 17.4143L10.0404 23.3738C9.64989 23.7643 9.01673 23.7643 8.6262 23.3738C8.23568 22.9833 8.23568 22.3501 8.6262 21.9596L14.5857 16.0001L8.62615 10.0405C8.23562 9.64996 8.23562 9.01679 8.62615 8.62627Z'
							fill='#242424'
						/>
					</svg>
				</div>

				<div className='bg-orange-11 px-4 py-2 md:p-4 '>
					{isMounted && !convertUserInfo.name ? (
						<div className='flex items-center gap-4 flex-1 relative'>
							<svg width='36' height='36' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M18 9.33718C15.9496 9.33718 14.2875 10.9993 14.2875 13.0497C14.2875 15.1 15.9496 16.7622 18 16.7622C20.0504 16.7622 21.7125 15.1 21.7125 13.0497C21.7125 10.9993 20.0504 9.33718 18 9.33718ZM11.8125 13.0497C11.8125 9.63242 14.5827 6.86218 18 6.86218C21.4173 6.86218 24.1875 9.63242 24.1875 13.0497C24.1875 16.4669 21.4173 19.2372 18 19.2372C14.5827 19.2372 11.8125 16.4669 11.8125 13.0497Z'
									fill='white'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M18 2.73745C9.5707 2.73745 2.73745 9.57071 2.73745 18C2.73745 26.4292 9.5707 33.2625 18 33.2625C26.4292 33.2625 33.2625 26.4292 33.2625 18C33.2625 9.57071 26.4292 2.73745 18 2.73745ZM0.262451 18C0.262451 8.2038 8.2038 0.262451 18 0.262451C27.7961 0.262451 35.7374 8.2038 35.7374 18C35.7374 27.7961 27.7961 35.7374 18 35.7374C8.2038 35.7374 0.262451 27.7961 0.262451 18Z'
									fill='white'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M11.0175 26.1448C9.93099 27.2716 9.51468 28.939 9.38649 31.2679C9.34893 31.9503 8.76527 32.4731 8.08285 32.4355C7.40044 32.398 6.87767 31.8143 6.91523 31.1319C7.04964 28.6899 7.495 26.2322 9.23591 24.4268C10.9918 22.6059 13.7995 21.7124 18 21.7124C22.2006 21.7124 25.0083 22.6059 26.7641 24.4268C28.505 26.2322 28.9504 28.6899 29.0848 31.1319C29.1224 31.8143 28.5996 32.398 27.9172 32.4355C27.2348 32.4731 26.6511 31.9503 26.6136 31.2679C26.4854 28.939 26.0691 27.2716 24.9825 26.1448C23.9109 25.0334 21.9253 24.1874 18 24.1874C14.0747 24.1874 12.0892 25.0334 11.0175 26.1448Z'
									fill='white'
								/>
							</svg>
							<div>
								<div className='flex items-center gap-2 text-16 font-semibold text-neutral-1 leading-1-4'>
									<Link
										href={'/sign-in'}
										target='_self'
										className='transition-all duration-200 relative before:absolute before:content-[""] before:h-0.5 before:w-0 before:bg-neutral-1 before:-bottom-1 before:rounded before:left-1/2 before:right-1/2 before:transition-all before:duration-200 hover:before:w-full hover:before:left-0 hover:before:right-0'
										title='Sign In'
									>
										Sign In
									</Link>
									<p>|</p>
									<Link
										href={'/register'}
										target='_self'
										className='transition-all duration-200 relative before:absolute before:content-[""] before:h-0.5 before:w-0 before:bg-neutral-1 before:-bottom-1 before:rounded before:left-1/2 before:right-1/2 before:transition-all before:duration-200 hover:before:w-full hover:before:left-0 hover:before:right-0'
										title='Register'
									>
										Register
									</Link>
								</div>
								<p className='text-12 font-medium text-neutral-1 leading-1-4 mt-1'>Sign in to get more opportunities</p>
							</div>
						</div>
					) : (
						<div className='flex items-center gap-4 flex-1 relative cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
							<Image
								src={`./assets/sidebar/avatar.png`}
								width={44}
								height={44}
								alt={convertUserInfo.name ? convertUserInfo.name : 'User Name'}
								title={convertUserInfo.name ? convertUserInfo.name : 'User Name'}
								loading='lazy'
							/>
							<span className='text-limit-1-line text-16 font-semibold text-neutral-1 leading-1-4'>
								{convertUserInfo.name ? convertUserInfo.name : 'User Name'}
							</span>
						</div>
					)}
				</div>

				<div className='px-4 py-2 border-b border-neutral-4 flex items-center gap-4'>
					<p className='text-16 text-neutral-9 font-semibold leading-1-4'>Language: </p>
					<LangSwitcher />
				</div>

				<ul className={`grid grid-cols-1 items-center px-4 mt-2 gap-4`}>
					<li className='group relative'>
						<p
							className={`text-neutral-8 text-16 font-medium hover:font-bold leading-1-4 hover:text-orange-11 hover:pl-3 transition-all duration-200 relative before:absolute before:content-[''] before:left-0 before:top-1/2 before:bottom-1/2 before:h-0 before:w-0.5 hover:before:h-full hover:before:top-0 hover:before:bottom-0 group-hover:before:bg-orange-11 before:transition-all before:duration-200 flex items-center justify-between`}
							onClick={() => setIsCategories(!isCategories)}
						>
							Categories
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								className={` transition-all duration-200 cursor-pointer ${isCategories && 'rotate-180'}`}
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M4.43057 8.51192C4.70014 8.19743 5.17361 8.161 5.48811 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5695 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51192 9.56946C4.19743 9.29989 4.161 8.82641 4.43057 8.51192Z'
									fill={isCategories ? '#ff7207' : '#000'}
								/>
							</svg>
						</p>
					</li>
					<li className='group relative'>
						<Link
							href='/about-us'
							title='About Us'
							target='_self'
							className={`text-neutral-8 text-16 font-medium hover:font-bold leading-1-4 hover:text-orange-11 hover:pl-3 transition-all duration-200 relative before:absolute before:content-[''] before:left-0 before:top-1/2 before:bottom-1/2 before:h-0 before:w-0.5 hover:before:h-full hover:before:top-0 hover:before:bottom-0 group-hover:before:bg-orange-11 before:transition-all before:duration-200 flex items-center justify-between`}
						>
							<span className='bg-neutral-1 relative z-10'>About Us</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='w-6 h-6 absolute top-1/2 left-0 -translate-y-1/2 z-1 group-hover:left-[92%] transition-all duration-300 group-hover:left-[92%]'
							>
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
							href='/contact-us'
							title='Contact Us'
							target='_self'
							className={`text-neutral-8 text-16 font-medium hover:font-bold leading-1-4 hover:text-orange-11 hover:pl-3 transition-all duration-200 relative before:absolute before:content-[''] before:left-0 before:top-1/2 before:bottom-1/2 before:h-0 before:w-0.5 hover:before:h-full hover:before:top-0 hover:before:bottom-0 group-hover:before:bg-orange-11 before:transition-all before:duration-200 flex items-center justify-between`}
						>
							<span className='bg-neutral-1 relative z-10'>Contact Us</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='w-6 h-6 absolute top-1/2 left-0 -translate-y-1/2 z-1 group-hover:left-[92%] transition-all duration-300'
							>
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
							href='/news'
							title='News'
							target='_self'
							className={`text-neutral-8 text-16 font-medium hover:font-bold leading-1-4 hover:text-orange-11 hover:pl-3 transition-all duration-200 relative before:absolute before:content-[''] before:left-0 before:top-1/2 before:bottom-1/2 before:h-0 before:w-0.5 hover:before:h-full hover:before:top-0 hover:before:bottom-0 group-hover:before:bg-orange-11 before:transition-all before:duration-200 flex items-center justify-between`}
						>
							<span className='bg-neutral-1 relative z-10'>News</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='w-6 h-6 absolute top-1/2 left-0 -translate-y-1/2 z-1 group-hover:left-[92%] transition-all duration-300'
							>
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
							href='/promotions'
							title='Promotions'
							target='_self'
							className={`text-neutral-8 text-16 font-medium hover:font-bold leading-1-4 hover:text-orange-11 hover:pl-3 transition-all duration-200 relative before:absolute before:content-[''] before:left-0 before:top-1/2 before:bottom-1/2 before:h-0 before:w-0.5 hover:before:h-full hover:before:top-0 hover:before:bottom-0 group-hover:before:bg-orange-11 before:transition-all before:duration-200 flex items-center justify-between`}
						>
							<span className='bg-neutral-1 relative z-10'>Promotions</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='w-6 h-6 absolute top-1/2 left-0 -translate-y-1/2 z-1 group-hover:left-[92%] transition-all duration-300'
							>
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
					className={`max-w-[120px] lg:max-w-[150px] flex items-center justify-center gap-2 !h-10 from-orange-1 via-orange-5 to-orange-11`}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6 absolute top-1/2 left-0 -translate-y-1/2 z-1 group-hover:left-[92%] transition-all duration-300'
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
		</>
	)
}
