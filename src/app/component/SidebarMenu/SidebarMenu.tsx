'use client'
import Link from 'next/link'
import { useMounted } from '@/lib/hooks/useMounted'
import useShowSidebarMenu from '@/lib/store/client/useShowSidebarMenu'
import Image from 'next/image'
import { useState } from 'react'
import PATH_NAME from '@/app/constans/pathname'
import useDataUser from '@/lib/store/client/infomationUser'
import { useReverseModifyObject } from '@/lib/utils/modifyContent'
import LangSwitcher from '../LangSwitcher'
import ButtonAnimation from '../ButtonAnimation'

export default function SidebarMenu() {
	const { isShowSidebarMenu, updateIsShowSidebarMenu } = useShowSidebarMenu()
	const [isOpen, setIsOpen] = useState(false)
	const isMounted = useMounted()
	const { userInfo } = useDataUser()
	const convertUserInfo: any = useReverseModifyObject(userInfo, false)
	return (
		<>
			<div className={` bg-neutral-1 h-screen w-[375px] !z-50 `}>
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

				<div className='bg-orange-11 p-4 '>
					{isMounted && !convertUserInfo.name ? (
						<div className='flex items-center gap-4 flex-1 relative'>
							<svg width='36' height='36' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M18 9.33718C15.9496 9.33718 14.2875 10.9993 14.2875 13.0497C14.2875 15.1 15.9496 16.7622 18 16.7622C20.0504 16.7622 21.7125 15.1 21.7125 13.0497C21.7125 10.9993 20.0504 9.33718 18 9.33718ZM11.8125 13.0497C11.8125 9.63242 14.5827 6.86218 18 6.86218C21.4173 6.86218 24.1875 9.63242 24.1875 13.0497C24.1875 16.4669 21.4173 19.2372 18 19.2372C14.5827 19.2372 11.8125 16.4669 11.8125 13.0497Z'
									fill='#fff'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M18 2.73745C9.5707 2.73745 2.73745 9.57071 2.73745 18C2.73745 26.4292 9.5707 33.2625 18 33.2625C26.4292 33.2625 33.2625 26.4292 33.2625 18C33.2625 9.57071 26.4292 2.73745 18 2.73745ZM0.262451 18C0.262451 8.2038 8.2038 0.262451 18 0.262451C27.7961 0.262451 35.7374 8.2038 35.7374 18C35.7374 27.7961 27.7961 35.7374 18 35.7374C8.2038 35.7374 0.262451 27.7961 0.262451 18Z'
									fill='#fff'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M11.0175 26.1448C9.93099 27.2716 9.51468 28.939 9.38649 31.2679C9.34893 31.9503 8.76527 32.4731 8.08285 32.4355C7.40044 32.398 6.87767 31.8143 6.91523 31.1319C7.04964 28.6899 7.495 26.2322 9.23591 24.4268C10.9918 22.6059 13.7995 21.7124 18 21.7124C22.2006 21.7124 25.0083 22.6059 26.7641 24.4268C28.505 26.2322 28.9504 28.6899 29.0848 31.1319C29.1224 31.8143 28.5996 32.398 27.9172 32.4355C27.2348 32.4731 26.6511 31.9503 26.6136 31.2679C26.4854 28.939 26.0691 27.2716 24.9825 26.1448C23.9109 25.0334 21.9253 24.1874 18 24.1874C14.0747 24.1874 12.0892 25.0334 11.0175 26.1448Z'
									fill='#fff'
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

				<div className='px-4 py-3 border-b border-neutral-4 flex items-center gap-4'>
					<p className='text-16 text-neutral-8 font-semibold leading-1-4'>Language: </p>
					<LangSwitcher />
				</div>

				<ul className={`grid grid-cols-1 items-center p-4 gap-4`}>
					<li className='group relative'>
						<Link
							href='/categories'
							title='Categories'
							target='_self'
							className={`text-neutral-8 text-16 font-medium leading-1-4 group-hover:text-orange-11 group-hover:pl-3 transition-all duration-200 relative before:absolute before:content-[''] before:left-0 before:top-1/2 before:bottom-1/2 before:h-0 before:w-0.5 group-hover:before:h-full group-hover:before:top-0 group-hover:before:bottom-0 group-hover:before:bg-orange-11  before:transition-all before:duration-200`}
						>
							Categories
						</Link>
					</li>
					<li className='group relative'>
						<Link
							href='/about-us'
							title='About Us'
							target='_self'
							className={`text-neutral-8 text-16 font-medium leading-1-4 group-hover:text-orange-11 group-hover:pl-3 transition-all duration-200 relative before:absolute before:content-[''] before:left-0 before:top-1/2 before:bottom-1/2 before:h-0 before:w-0.5 group-hover:before:h-full group-hover:before:top-0 group-hover:before:bottom-0 group-hover:before:bg-orange-11  before:transition-all before:duration-200`}
						>
							About Us
						</Link>
					</li>
					<li className='group relative'>
						<Link
							href='/contact-us'
							title='Contact Us'
							target='_self'
							className={`text-neutral-8 text-16 font-medium leading-1-4 group-hover:text-orange-11 group-hover:pl-3 transition-all duration-200 relative before:absolute before:content-[''] before:left-0 before:top-1/2 before:bottom-1/2 before:h-0 before:w-0.5 group-hover:before:h-full group-hover:before:top-0 group-hover:before:bottom-0 group-hover:before:bg-orange-11  before:transition-all before:duration-200`}
						>
							Contact Us
						</Link>
					</li>
					<li className='group relative'>
						<Link
							href='/news'
							title='News'
							target='_self'
							className={`text-neutral-8 text-16 font-medium leading-1-4 group-hover:text-orange-11 group-hover:pl-3 transition-all duration-200 relative before:absolute before:content-[''] before:left-0 before:top-1/2 before:bottom-1/2 before:h-0 before:w-0.5 group-hover:before:h-full group-hover:before:top-0 group-hover:before:bottom-0 group-hover:before:bg-orange-11  before:transition-all before:duration-200`}
						>
							News
						</Link>
					</li>
					<li className='group relative'>
						<Link
							href='/promotions'
							title='Promotions'
							target='_self'
							className={`text-neutral-8 text-16 font-bold leading-1-4 group-hover:text-orange-11 hover:pl-3 transition-all duration-200 relative before:absolute before:content-[''] before:left-0 before:top-1/2 before:bottom-1/2 before:h-0 before:w-0.5 hover:before:h-full hover:before:top-0 hover:before:bottom-0 group-hover:before:bg-orange-11  before:transition-all before:duration-200`}
						>
							Promotions
						</Link>
					</li>
				</ul>

				<div className='p-4 border-t border-neutral-4 grid grid-cols-1 gap-2'>
					<div className='flex items-center gap-2 div-parent-svg-fill group'>
						<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M13.3467 2.44568C13.3767 2.11567 13.6686 1.87247 13.9986 1.90247L13.9443 2.5C13.9986 1.90247 13.9989 1.9025 13.9993 1.90253L14 1.9026L14.0017 1.90275L14.0055 1.90313L14.0154 1.90417C14.0231 1.905 14.0328 1.90613 14.0444 1.90762C14.0676 1.91059 14.0988 1.91501 14.1374 1.92145C14.2146 1.93432 14.3217 1.95524 14.4558 1.98875C14.724 2.0558 15.0993 2.17311 15.5574 2.37671C16.4751 2.78456 17.7167 3.53505 19.0908 4.90907C20.4648 6.28309 21.2153 7.52478 21.6231 8.44243C21.8267 8.90055 21.944 9.27588 22.0111 9.54406C22.0446 9.67811 22.0655 9.78526 22.0784 9.86247C22.0848 9.90108 22.0892 9.9322 22.0922 9.95545C22.0937 9.96708 22.0948 9.97674 22.0957 9.98439L22.0967 9.99434L22.0971 9.99817L22.0972 9.9998L22.0973 10.0005C22.0973 10.0009 22.0974 10.0012 21.5079 10.0548L22.0974 10.0012C22.1274 10.3312 21.8842 10.6231 21.5542 10.6531C21.2256 10.683 20.9349 10.4421 20.9027 10.1144L20.9019 10.1077C20.9008 10.0992 20.8986 10.0831 20.8947 10.0598C20.8869 10.013 20.8724 9.93718 20.8469 9.83511C20.7959 9.63107 20.7007 9.32168 20.5265 8.9298C20.1788 8.14744 19.5127 7.02802 18.2422 5.7576C16.9718 4.48718 15.8524 3.821 15.07 3.47329C14.6782 3.29912 14.3688 3.20393 14.1647 3.15292C14.0627 3.1274 13.9868 3.11291 13.9401 3.10512C13.9167 3.10122 13.9006 3.099 13.8921 3.09792L13.8855 3.09711C13.5577 3.06489 13.3169 2.7742 13.3467 2.44568Z'
								fill='#000'
							/>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M13.5628 5.67427C13.6538 5.35565 13.9859 5.17116 14.3045 5.26219L14.1397 5.83911C14.3045 5.26219 14.3048 5.26227 14.3051 5.26236L14.3057 5.26253L14.3069 5.26288L14.3097 5.26369L14.3162 5.26563L14.3333 5.27095C14.3464 5.27516 14.3631 5.28073 14.3833 5.28787C14.4235 5.30215 14.4774 5.32272 14.5441 5.35127C14.6774 5.4084 14.8612 5.49735 15.0881 5.63163C15.5422 5.9004 16.1661 6.34918 16.9014 7.0844C17.6366 7.81962 18.0854 8.44354 18.3541 8.89767C18.4884 9.12456 18.5773 9.30839 18.6345 9.44169C18.663 9.50832 18.6836 9.56223 18.6979 9.60249C18.705 9.62261 18.7106 9.63932 18.7148 9.65248L18.7201 9.66955L18.7221 9.67606L18.7229 9.67881L18.7232 9.68005L18.7234 9.68064C18.7235 9.68093 18.7236 9.68121 18.157 9.84307L18.7236 9.68121C18.8146 9.99983 18.6301 10.3319 18.3115 10.423C17.995 10.5134 17.6653 10.332 17.5716 10.0174C17.571 10.0154 17.5705 10.0135 17.5699 10.0115L17.57 10.012L17.5703 10.0129L17.5708 10.0147L17.5715 10.0171C17.5719 10.0183 17.572 10.0185 17.5718 10.0179C17.5718 10.0178 17.5717 10.0176 17.5716 10.0174C17.5711 10.0156 17.5696 10.0111 17.567 10.0038C17.5612 9.98743 17.5499 9.95734 17.5315 9.9144C17.4947 9.82857 17.4292 9.69101 17.3214 9.50886C17.106 9.14491 16.72 8.60014 16.0528 7.93293C15.3856 7.26572 14.8408 6.87972 14.4769 6.66432C14.2947 6.55652 14.1572 6.49103 14.0714 6.45425C14.0284 6.43584 13.9983 6.42458 13.982 6.41878C13.9747 6.4162 13.9701 6.41469 13.9684 6.41412M13.5628 5.67427C13.4724 5.99072 13.6537 6.32045 13.9684 6.41412L13.5628 5.67427ZM13.9684 6.41412C13.9681 6.41405 13.968 6.41399 13.9678 6.41395C13.9676 6.41388 13.9675 6.41385 13.9675 6.41385C13.9675 6.41385 13.9679 6.41397 13.9687 6.4142L13.9711 6.41493L13.9728 6.41543L13.9738 6.41571'
								fill='#000'
							/>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M5.52799 4.84982C7.07325 3.30456 9.66238 3.43377 10.726 5.33957L11.3389 6.4379C12.0353 7.68573 11.7397 9.26801 10.7096 10.3067C10.6958 10.3243 10.5968 10.4556 10.5853 10.6903C10.5715 10.9724 10.6772 11.5602 11.5584 12.4415C12.4394 13.3225 13.0272 13.4284 13.3094 13.4146C13.5441 13.4032 13.6756 13.3041 13.6932 13.2903C14.7319 12.2602 16.3142 11.9646 17.562 12.661L18.6603 13.2739C20.5661 14.3375 20.6954 16.9267 19.1501 18.4719C18.3103 19.3118 17.2062 20.0446 15.9191 20.0934C13.9788 20.167 10.7465 19.6673 7.53956 16.4604C4.3326 13.2534 3.83294 10.0211 3.9065 8.08077C3.95529 6.79369 4.68816 5.68965 5.52799 4.84982ZM9.67812 5.92437C9.07116 4.83679 7.46239 4.61248 6.37652 5.69835C5.63534 6.43953 5.13801 7.27229 5.10564 8.12623C5.04256 9.79013 5.45507 12.6788 8.38809 15.6118C11.3211 18.5448 14.2098 18.9574 15.8737 18.8943C16.7276 18.8619 17.5604 18.3646 18.3016 17.6234C19.3874 16.5375 19.1631 14.9288 18.0755 14.3218L16.9772 13.7088C16.2469 13.3013 15.2351 13.4454 14.5312 14.1493L14.5311 14.1494C14.475 14.2055 14.0779 14.5787 13.3677 14.6132C12.6424 14.6485 11.7442 14.3244 10.7099 13.29C9.6752 12.2554 9.3512 11.3569 9.38672 10.6316C9.42149 9.92134 9.79487 9.52445 9.8506 9.46872L9.85062 9.46869C10.5545 8.76479 10.6987 7.75301 10.2911 7.02269L9.67812 5.92437Z'
								fill='#000'
							/>
						</svg>

						<a
							href='tel:+84764713925'
							target='_self'
							title='tel:+84764713925'
							className='text-14 font-medium leading-1-4 text-neutral-8 transition-all duration-200 group-hover:text-orange-11'
						>
							+(84)764 713 925
						</a>
					</div>
					<div className='flex items-center gap-2'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6'
						>
							<path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
						</svg>

						<p className='text-14 text-neutral-8 leading-1-4 font-medium'>Mon-Fri 9.a.m - 6.p.m</p>
					</div>
					<div className='flex items-center gap-2 div-parent-svg-stroke group'>
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
								d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
							/>
						</svg>

						<a
							href='mailto:minhcuongvo2501@gmail.com'
							target='_blank'
							title='minhcuongvo2501@gmail.com'
							className='text-14 text-neutral-8 leading-1-4 font-medium block group-hover:text-orange-11 transition-all duration-200'
						>
							minhcuongvo2501@gmail.com
						</a>
					</div>
					<div className='flex items-start gap-2'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6'
						>
							<path strokeLinecap='round' strokeLinejoin='round' d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
							/>
						</svg>

						<p className='text-14 text-neutral-8 leading-1-4 font-medium'>
							469 Nguyen Huu Tho, Tan Hung, Disc 7, <br /> Ho Chi Minh City, Vietnam
						</p>
					</div>
				</div>
				{isMounted && convertUserInfo.name && (
					<div className='p-4'>
						<ButtonAnimation
							className={`text-orange-11 transition-all duration-200 w-full hover:border-orange-11 border-transparent !bg-orange-12 `}
							classHoverButton='bg-neutral-1'
							classTextBtnAnimation='font-normal'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-6 h-6 mr-2'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75'
								/>
							</svg>
							Sign Out
						</ButtonAnimation>
					</div>
				)}
			</div>
		</>
	)
}
