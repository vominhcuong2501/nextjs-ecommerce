'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Support247() {
	return (
		<div className='relative px-6 pt-6 pb-4 lg:px-8 lg:pt-8 lg:pb-6 rounded-2xl flex flex-col justify-center border border-orange-11'>
			<div className='absolute top-0 left-4 md:left-[20px] -translate-y-1/2  px-2 bg-neutral-1'>
				<h3 className='text-orange-11 text-20 md:text-28 leading-1-2 font-bold'>24/7 Support Center</h3>
			</div>
			<div>
				<div className='flex gap-4 py-4'>
					<Image
						src={`./assets/contact-us/icon-phone-red.svg`}
						alt='Phone Number'
						title='Phone Number'
						width={44}
						height={45}
						loading='lazy'
						className='w-10 h-10 md:w-[44px] md:h-[45px]'
					/>
					<div>
						<p className='text-14 lg:text-16 leading-1-4 text-neutral-7 font-normal'>Phone:</p>
						<Link
							target='_blank'
							className='text-14 lg:text-16 leading-1-4 text-neutral-8 font-bold'
							href='tel:0764713925'
							title='0764 713 925'
						>
							0764 713 925
						</Link>
					</div>
				</div>
				<div className='flex gap-4 py-4 '>
					<Image
						src={`./assets/contact-us/icon-email-blue.svg`}
						alt='Email'
						title='Email'
						width={44}
						height={45}
						loading='lazy'
						className='w-10 h-10 md:w-[44px] md:h-[45px]'
					/>
					<div>
						<p className='text-14 lg:text-16 leading-1-4 text-neutral-7 font-normal'>Email:</p>
						<Link
							target='_blank'
							className='text-14 lg:text-16 leading-1-4 text-neutral-8 font-bold'
							href={`mailto:minhcuongvo2501@gmail.com`}
						>
							minhcuongvo2501@gmail.com
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
