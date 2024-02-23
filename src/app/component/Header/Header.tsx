'use client'
import PATH_NAME from '@/app/constans/pathname'
import Link from 'next/link'
import SwitchThemeButton from '../SwitchThemeButton'
import ButtonSidebarMenu from '../ButtonSidebarMenu'
import Image from 'next/image'
import { useMounted } from '@/lib/hooks/useMounted'
import Input from '../Input'
import useUpdateTheme from '@/lib/store/client/updateTheme'
import Menu from '../Menu'
import Button from '../Button'

export default function Header() {
	const { isTheme } = useUpdateTheme()
	const isMounted = useMounted()

	const renderInputSearch = () => {
		return (
			<div className='relative mt-2 md:mt-0'>
				<Input
					name='search'
					type='text'
					id='search'
					className='py-2 rounded-2xl min-w-[300px]  md:min-w-[250px] lg:min-w-[350px] '
					maxLength={255}
					placeholder='Search ...'
					isRequired={false}
					classNameInput='text-neutral-8 font-medium text-16 leading-1-4'
				/>
				<svg
					width='44'
					height='44'
					viewBox='0 0 44 44'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='absolute top-1/2 -translate-y-1/2 left-0'
				>
					<g clipPath='url(#clip0_161_5736)'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M24.6103 15.614C22.4356 14.1286 19.5726 14.1286 17.3978 15.614C16.3218 16.3486 15.4868 17.3848 14.9977 18.5923L14.9974 18.5931C14.5029 19.8105 14.3736 21.1457 14.6254 22.4354L14.6255 22.4362C14.8749 23.7206 15.4958 24.9035 16.4112 25.8382L16.4127 25.8397C17.6194 27.078 19.2751 27.7764 21.0041 27.7764C22.7254 27.7764 24.374 27.0842 25.5793 25.8562C25.6196 25.7472 25.6836 25.6449 25.7711 25.5572C25.837 25.4912 25.9113 25.4385 25.9905 25.3992C26.691 24.5446 27.1708 23.527 27.3826 22.4362L27.3827 22.4354C27.6345 21.1457 27.5052 19.8105 27.0107 18.5931L27.0104 18.5923C26.5213 17.3848 25.6863 16.3486 24.6103 15.614ZM26.4073 27.3698L29.8055 30.762C30.1313 31.0871 30.6589 31.0867 30.9841 30.761C31.3092 30.4352 31.3087 29.9076 30.983 29.5824L27.5295 26.1351C28.2692 25.1374 28.7799 23.9832 29.0185 22.7547C29.3323 21.1474 29.1712 19.4835 28.555 17.9663C27.9427 16.4545 26.8973 15.1573 25.5502 14.2376C22.8086 12.3652 19.1995 12.3652 16.4579 14.2376M26.4073 27.3698C24.9289 28.7004 23.0055 29.4431 21.0041 29.4431C18.8258 29.4431 16.74 28.5634 15.2196 27.0035C14.0764 25.8359 13.301 24.3584 12.9895 22.7543C12.6758 21.147 12.837 19.4831 13.4533 17.9659C14.0656 16.4543 15.111 15.1572 16.4579 14.2376M23.3315 19.0683C22.9841 18.2476 22.1407 17.7508 21.2545 17.8447C20.7968 17.8932 20.3865 17.5615 20.338 17.1038C20.2895 16.6461 20.6212 16.2358 21.0789 16.1873C22.6949 16.016 24.2328 16.922 24.8663 18.4185C25.0457 18.8423 24.8476 19.3314 24.4238 19.5108C24 19.6902 23.5109 19.4921 23.3315 19.0683Z'
							fill={isTheme === 'white' ? '#000' : '#fff'}
						/>
					</g>
					<defs>
						<clipPath id='clip0_161_5736'>
							<rect width='20' height='20' fill='white' transform='translate(12 12)' />
						</clipPath>
					</defs>
				</svg>
			</div>
		)
	}

	return (
		<>
			{isMounted && (
				<div className={`max-w-[1320px] mx-auto px-4 py-2 flex items-center justify-between relative`}>
					<div className='block md:hidden '>
						<ButtonSidebarMenu />
					</div>

					<Link href={PATH_NAME.HOME} target='_self' title={'Home'}>
						{isTheme === 'white' ? (
							<Image src={'/logo-vmc-white.jpg'} width={134} height={50} alt='VMC' className='w-[118px] h-[44px]' />
						) : (
							<Image src={'/logo-vmc-black.jpg'} width={134} height={50} alt='VMC' className='w-[118px] h-[44px]' />
						)}
					</Link>

					<div className='hidden md:block'>
						<Menu />
					</div>

					<div className='block md:hidden '>
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
								stroke={isTheme === 'white' ? '#000' : '#fff'}
								strokeWidth='1.5'
								strokeLinecap='round'
							/>
							<path
								d='M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z'
								stroke={isTheme === 'white' ? '#000' : '#fff'}
								strokeWidth='1.5'
							/>
							<path
								d='M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z'
								stroke={isTheme === 'white' ? '#000' : '#fff'}
								strokeWidth='1.5'
							/>
							<path
								d='M5 6H16.4504C18.5054 6 19.5328 6 19.9775 6.67426C20.4221 7.34853 20.0173 8.29294 19.2078 10.1818L18.7792 11.1818C18.4013 12.0636 18.2123 12.5045 17.8366 12.7523C17.4609 13 16.9812 13 16.0218 13H5'
								stroke={isTheme === 'white' ? '#000' : '#fff'}
								strokeWidth='1.5'
							/>
						</svg>
					</div>

					<Button className={`max-w-[120px] lg:max-w-[150px] hidden md:flex items-center justify-center gap-2 !h-10`}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6'
						>
							<path strokeLinecap='round' strokeLinejoin='round' d='M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9' />
						</svg>
						Sign In
					</Button>
				</div>
			)}
		</>
	)
}
