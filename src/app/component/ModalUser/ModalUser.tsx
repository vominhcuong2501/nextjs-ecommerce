'use client'
import Link from 'next/link'
import ButtonAnimation from '../ButtonAnimation'
import { useMounted } from '@/lib/hooks/useMounted'
import { useReverseModifyObject } from '@/lib/utils/modifyContent'
import useDataUser from '@/lib/store/client/infomationUser'
import useShowModalHeader from '@/lib/store/client/useShowModalHeader'

export default function ModalUser() {
	const isMounted = useMounted()
	const { userInfo } = useDataUser()
	const convertUserInfo: any = useReverseModifyObject(userInfo, false)
	const { isShowUser, updateIsShowPhone, updateIsShowUser } = useShowModalHeader()

	return (
		<>
			{isMounted && !convertUserInfo ? (
				<Link href='/sign-in' title='Sign In' target='_self'>
					<ButtonAnimation
						className={`text-orange-11 hover:text-neutral-1 transition-all duration-300  bg-neutral-1 border-transparent hover:border-transparent !py-2`}
						classHoverButton='bg-orange-top-yellow-bottom'
					>
						Sign In
					</ButtonAnimation>
				</Link>
			) : (
				<div
					className='flex items-center gap-2 relative'
					onClick={() => {
						updateIsShowUser(!isShowUser)
						updateIsShowPhone(false)
					}}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						className='cursor-pointer'
					>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M12 7.2748C10.8816 7.2748 9.975 8.18143 9.975 9.2998C9.975 10.4182 10.8816 11.3248 12 11.3248C13.1184 11.3248 14.025 10.4182 14.025 9.2998C14.025 8.18143 13.1184 7.2748 12 7.2748ZM8.625 9.2998C8.625 7.43584 10.136 5.9248 12 5.9248C13.864 5.9248 15.375 7.43584 15.375 9.2998C15.375 11.1638 13.864 12.6748 12 12.6748C10.136 12.6748 8.625 11.1638 8.625 9.2998Z'
							fill='white'
						/>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M12.0002 3.67495C7.40242 3.67495 3.6752 7.40218 3.6752 12C3.6752 16.5977 7.40242 20.325 12.0002 20.325C16.598 20.325 20.3252 16.5977 20.3252 12C20.3252 7.40218 16.598 3.67495 12.0002 3.67495ZM2.3252 12C2.3252 6.6566 6.65684 2.32495 12.0002 2.32495C17.3436 2.32495 21.6752 6.6566 21.6752 12C21.6752 17.3433 17.3436 21.6749 12.0002 21.6749C6.65684 21.6749 2.3252 17.3433 2.3252 12Z'
							fill='white'
						/>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M8.19179 16.4426C7.59912 17.0572 7.37204 17.9667 7.30212 19.237C7.28164 19.6092 6.96328 19.8944 6.59105 19.8739C6.21882 19.8534 5.93368 19.535 5.95416 19.1628C6.02748 17.8308 6.2704 16.4903 7.21999 15.5055C8.17773 14.5123 9.70921 14.0249 12.0004 14.0249C14.2916 14.0249 15.8231 14.5123 16.7808 15.5055C17.7304 16.4903 17.9733 17.8308 18.0467 19.1628C18.0671 19.535 17.782 19.8534 17.4098 19.8739C17.0375 19.8944 16.7192 19.6092 16.6987 19.237C16.6288 17.9667 16.4017 17.0572 15.809 16.4426C15.2245 15.8364 14.1415 15.3749 12.0004 15.3749C9.85935 15.3749 8.77631 15.8364 8.19179 16.4426Z'
							fill='white'
						/>
					</svg>
					<p className='text-14 font-normal leading-1-4 text-neutral-1 cursor-pointer relative before:absolute before:content-[""] before:h-0.5 before:w-0 before:bg-neutral-1 before:-bottom-1 before:rounded before:left-1/2 before:right-1/2 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0 hover:before:right-0'>
						{convertUserInfo?.name ? convertUserInfo?.name : 'My Account'}
					</p>
					<div
						className={`absolute right-0 -bottom-[313px] p-3 min-w-[250px] bg-neutral-1 shadow-black1 transition-all duration-300 scale-0 rounded-lg  ${
							isShowUser && 'scale-100'
						}  before:w-0 before:h-0 before:border-solid before:border-transparent before:border-r-[10px] before:border-l-[10px] before:border-b-[10px] before:border-b-neutral-1  before:absolute before:-top-[10px] before:right-[88px] `}
					>
						<div className='flex items-center justify-between border-b border-neutral-4 pb-1'>
							<p className='text-16 font-bold leading-1-4 text-neutral-8 '>My Account</p>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								onClick={() => updateIsShowUser(false)}
								className='cursor-pointer border border-transparent hover:border-orange-11 rounded-md transition-all duration-300'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M6.46967 6.46967C6.76256 6.17678 7.23744 6.17678 7.53033 6.46967L12 10.9394L16.4697 6.46971C16.7626 6.17682 17.2374 6.17682 17.5303 6.46971C17.8232 6.7626 17.8232 7.23748 17.5303 7.53037L13.0607 12L17.5303 16.4696C17.8232 16.7625 17.8232 17.2374 17.5303 17.5303C17.2374 17.8232 16.7625 17.8232 16.4696 17.5303L12 13.0607L7.53037 17.5303C7.23748 17.8232 6.76261 17.8232 6.46971 17.5303C6.17682 17.2374 6.17682 16.7626 6.46971 16.4697L10.9394 12L6.46967 7.53033C6.17678 7.23744 6.17678 6.76256 6.46967 6.46967Z'
									fill='#ff7207'
								/>
							</svg>
						</div>
						<ul className='grid grid-cols-1 gap-2 mt-2'>
							<li className='relative group'>
								<Link
									href={'#'}
									title=''
									target='_self'
									className='before:absolute before:content-[""] before:h-0 before:w-0.5 before:bg-orange-11 before:left-0 before:rounded before:top-1/2 before:bottom-1/2 before:transition-all before:duration-300 group-hover:before:h-full group-hover:before:top-0 group-hover:before:bottom-0 group-hover:pl-2 transition-all duration-300 group-hover:text-orange-11 group-hover:font-semibold text-14'
								>
									Profile Details
								</Link>
							</li>
							<li className='relative group'>
								<Link
									href={'#'}
									title=''
									target='_self'
									className='before:absolute before:content-[""] before:h-0 before:w-0.5 before:bg-orange-11 before:left-0 before:rounded before:top-1/2 before:bottom-1/2 before:transition-all before:duration-300 group-hover:before:h-full group-hover:before:top-0 group-hover:before:bottom-0 group-hover:pl-2 transition-all duration-300 group-hover:text-orange-11 group-hover:font-semibold text-14'
								>
									My Orders
								</Link>
							</li>
							<li className='relative group'>
								<Link
									href={'#'}
									title=''
									target='_self'
									className='before:absolute before:content-[""] before:h-0 before:w-0.5 before:bg-orange-11 before:left-0 before:rounded before:top-1/2 before:bottom-1/2 before:transition-all before:duration-300 group-hover:before:h-full group-hover:before:top-0 group-hover:before:bottom-0 group-hover:pl-2 transition-all duration-300 group-hover:text-orange-11 group-hover:font-semibold text-14'
								>
									Comparison List
								</Link>
							</li>
							<li className='relative group'>
								<Link
									href={'#'}
									title=''
									target='_self'
									className='before:absolute before:content-[""] before:h-0 before:w-0.5 before:bg-orange-11 before:left-0 before:rounded before:top-1/2 before:bottom-1/2 before:transition-all before:duration-300 group-hover:before:h-full group-hover:before:top-0 group-hover:before:bottom-0 group-hover:pl-2 transition-all duration-300 group-hover:text-orange-11 group-hover:font-semibold text-14'
								>
									Messengers
								</Link>
							</li>
							<li className='relative group'>
								<Link
									href={'#'}
									title=''
									target='_self'
									className='before:absolute before:content-[""] before:h-0 before:w-0.5 before:bg-orange-11 before:left-0 before:rounded before:top-1/2 before:bottom-1/2 before:transition-all before:duration-300 group-hover:before:h-full group-hover:before:top-0 group-hover:before:bottom-0 group-hover:pl-2 transition-all duration-300 group-hover:text-orange-11 group-hover:font-semibold text-14'
								>
									My Points
								</Link>
							</li>
							<li className='relative group'>
								<Link
									href={'#'}
									title=''
									target='_self'
									className='before:absolute before:content-[""] before:h-0 before:w-0.5 before:bg-orange-11 before:left-0 before:rounded before:top-1/2 before:bottom-1/2 before:transition-all before:duration-300 group-hover:before:h-full group-hover:before:top-0 group-hover:before:bottom-0 group-hover:pl-2 transition-all duration-300 group-hover:text-orange-11 group-hover:font-semibold text-14'
								>
									WishList
								</Link>
							</li>
						</ul>
						<ButtonAnimation
							className={`text-orange-11 transition-all duration-300 w-full mt-2 hover:border-orange-11 border-transparent bg-[#FBE4D3] `}
							classHoverButton='bg-neutral-1'
							classTextBtnAnimation='font-normal'
						>
							Sign Out
						</ButtonAnimation>
					</div>
				</div>
			)}
		</>
	)
}
