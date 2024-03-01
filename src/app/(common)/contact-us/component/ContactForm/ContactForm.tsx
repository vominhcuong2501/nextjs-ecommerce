'use client'
import Image from 'next/image'
import Support247 from '../Support247'

export default function ContactForm() {
	return (
		<div className='max-w-[1360px] mx-auto px-4 py-5 lg:py-10  flex flex-col md:flex-row items-center md:items-start justify-between gap-5'>
			<div className='min-w-[343px] md:min-w-[352px]'>
				<Support247 />
				<Image
					src={`./assets/contact-us/img-support-24-7.png`}
					alt='24/7 Support Center'
					title='24/7 Support Center'
					width={300}
					height={230}
					loading='lazy'
					className='mx-auto mt-[64px] hidden md:block'
				/>
			</div>
			<div className={`lg:max-w-[610px] w-full relative h-full`}></div>
		</div>
	)
}
