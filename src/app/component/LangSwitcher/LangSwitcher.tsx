'use client'

import { useDisplay } from '@/lib/hooks/useDisplay'
import useShowModalHeader from '@/lib/store/client/useShowModalHeader'
import Image from 'next/image'
import { useState } from 'react'

export default function LangSwitcher() {
	const isMobile = useDisplay(768)
	const [language, setLanguage] = useState('en')
	const { isShowLang, updateIsShowPhone, updateIsShowUser, updateIsShowLang } = useShowModalHeader()
	return (
		<>
			{isMobile ? (
				<div className='flex items-center gap-4'>
					<a
						href='#'
						target='_self'
						className={`p-2 border-2 text-16 rounded-md font-semibold leading-1-4 ${
							language === 'en' ? ' border-orange-11  text-orange-11' : ' border-neutral-4  text-neutral-6'
						}`}
						title='English'
						onClick={() => setLanguage('en')}
					>
						EN
					</a>
					<a
						href='#'
						target='_self'
						className={`p-2 border-2 text-16 rounded-md font-semibold leading-1-4 ${
							language === 'vn' ? ' border-orange-11  text-orange-11' : ' border-neutral-4  text-neutral-6'
						}`}
						title='Vietnam'
						onClick={() => setLanguage('vn')}
					>
						VN
					</a>
				</div>
			) : (
				<div className={`relative group `}>
					{language === 'en' ? (
						<button
							onClick={() => {
								updateIsShowLang(!isShowLang)
								updateIsShowPhone(false)
								updateIsShowUser(false)
							}}
							className={`px-2 flex items-center gap-2 text-14 leading-1-4 font-bold text-neutral-8 group`}
						>
							<Image src={'/assets/icon/icon-flag-en.svg'} alt='English' title='English' width={'22'} height={'13'} />
							<span className='transition-all duration-200 relative before:absolute before:content-[""] before:h-0.5 before:w-0 before:bg-neutral-9 before:-bottom-1 before:rounded before:left-1/2 before:right-1/2 before:transition-all before:duration-200 group-hover:before:w-full group-hover:before:left-0 group-hover:before:right-0'>
								English
							</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								className={`scale-90 ${isShowLang && 'rotate-180'} `}
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M4.43057 8.51192C4.70014 8.19743 5.17361 8.161 5.48811 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5695 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51192 9.56946C4.19743 9.29989 4.161 8.82641 4.43057 8.51192Z'
									fill='#262626'
								/>
							</svg>
						</button>
					) : (
						<button
							onClick={() => {
								updateIsShowLang(!isShowLang)
								updateIsShowPhone(false)
								updateIsShowUser(false)
							}}
							className={`px-2 flex items-center gap-2 text-14 leading-1-4 font-bold text-neutral-8 group `}
						>
							<Image src={'/assets/icon/icon-flag-vn.svg'} alt='Vietnam' title='Vietnam' width={'22'} height={'13'} />
							<span className='transition-all duration-200 relative before:absolute before:content-[""] before:h-0.5 before:w-0 before:bg-neutral-9 before:-bottom-1 before:rounded before:left-1/2 before:right-1/2 before:transition-all before:duration-200 group-hover:before:w-full group-hover:before:left-0 group-hover:before:right-0'>
								Vietnam
							</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								className={`scale-90 ${isShowLang && 'rotate-180'}`}
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M4.43057 8.51192C4.70014 8.19743 5.17361 8.161 5.48811 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5695 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51192 9.56946C4.19743 9.29989 4.161 8.82641 4.43057 8.51192Z'
									fill='#262626'
								/>
							</svg>
						</button>
					)}

					<div
						className={`absolute rounded-lg z-50 top-[calc(100%+8px)] min-w-[156px] overflow-hidden opacity-0 right-0 block h-0 bg-white shadow-black1 drop-shadow-1 transition-all ${
							isShowLang && 'py-2.5 h-auto overflow-visible opacity-100'
						}`}
					>
						<ul>
							<li
								onClick={() => {
									setLanguage('en')
									updateIsShowLang(!isShowLang)
									updateIsShowPhone(false)
									updateIsShowUser(false)
								}}
							>
								<a
									href={'#'}
									title={'English'}
									className='flex items-center gap-2 px-4 py-2 text-14 font-medium leading-1-4 text-neutral-8 transition-all duration-200 hover:bg-orange-top-yellow-bottom hover:text-neutral-1'
									target='_self'
								>
									<Image
										src={'/assets/icon/icon-flag-en.svg'}
										alt='English'
										title='English'
										width={'22'}
										height={'13'}
									/>
									English
								</a>
							</li>
							<li
								onClick={() => {
									setLanguage('vn')
									updateIsShowLang(!isShowLang)
									updateIsShowPhone(false)
									updateIsShowUser(false)
								}}
							>
								<a
									href={'#'}
									title={'Vietnam'}
									className='flex items-center gap-2 px-4 py-2 text-14 font-medium leading-1-4 text-neutral-8 transition-all duration-200 hover:bg-orange-top-yellow-bottom hover:text-neutral-1'
									target='_self'
								>
									<Image
										src={'/assets/icon/icon-flag-vn.svg'}
										alt='Vietnam'
										title='Vietnam'
										width={'22'}
										height={'13'}
									/>
									Vietnam
								</a>
							</li>
						</ul>
					</div>
				</div>
			)}
		</>
	)
}
