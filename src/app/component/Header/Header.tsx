'use client'
import PATH_NAME from '@/app/constans/pathname'
import Link from 'next/link'
import ButtonSidebarMenu from '../ButtonSidebarMenu'
import Image from 'next/image'
import Input from '../Input'
import IconCart from '../IconCart'
import IconHeart from '../IconHeart'
const InputSearch = () => {
	return (
		<div className='relative md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 mt-2 md:mt-0'>
			<Input
				name='search'
				type='text'
				id='search'
				className='min-w-[300px]  lg:min-w-[450px] '
				maxLength={255}
				placeholder='Search product...'
				isRequired={false}
				classNameInput='text-neutral-9 font-medium text-16 leading-1-4 rounded-md border-transparent !bg-neutral-3 pl-2  focus:outline-orange-11'
			/>

			<svg
				width='48'
				height='32'
				viewBox='0 0 48 32'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='absolute top-1/2 -translate-y-1/2 right-2'
			>
				<rect width='48' height='32' rx='4' fill='#FF7207' />
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M18.4 15.7C18.4 12.7729 20.7729 10.4 23.7 10.4C26.6271 10.4 29 12.7729 29 15.7C29 18.6271 26.6271 21 23.7 21C20.7729 21 18.4 18.6271 18.4 15.7ZM23.7 9.59998C20.331 9.59998 17.6 12.331 17.6 15.7C17.6 19.0689 20.331 21.8 23.7 21.8C25.2405 21.8 26.6476 21.2289 27.7212 20.287L29.7171 22.2829C29.8733 22.4391 30.1266 22.4391 30.2828 22.2829C30.439 22.1267 30.439 21.8734 30.2828 21.7172L28.2869 19.7213C29.2289 18.6477 29.8 17.2405 29.8 15.7C29.8 12.331 27.0689 9.59998 23.7 9.59998Z'
					fill='#fff'
				/>
			</svg>
		</div>
	)
}
export default function Header() {
	return (
		<>
			<div className={`max-w-[1360px] mx-auto px-4 py-2 md:p-4  relative`}>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-2'>
						<ButtonSidebarMenu />
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
					</div>

					<div className='flex items-center gap-2 '>
						<IconHeart quantity={99} />
						<IconCart quantity={99} />
					</div>
				</div>

				<InputSearch />
			</div>
		</>
	)
}
