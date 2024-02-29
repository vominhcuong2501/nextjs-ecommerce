import Image from 'next/image'

export default function BannerAboutUs() {
	return (
		<div className='bg-about-us'>
			<div className='max-w-[1360px] mx-auto p-4 grid grid-cols-1 md:grid-cols-2 items-center'>
				<div className='md:max-w-[550px]'>
					<h1 className='text-neutral-8 font-bold leading-1-4 text-32 lg:text-40'>About Us</h1>
					<p className='text-neutral-9 font-normal leading-1-4 text-14 lg:text-16'>
						Get to know the heart of our story. Join us on our mission, embrace our vision, understand our values, and
						be part of the vibrant community that defines who we are.
					</p>
				</div>
				<Image
					src='/assets/about-us/img-about-us-mobile.png'
					alt='About Us'
					width={343}
					height={295}
					loading='lazy'
					className='mx-auto block md:hidden'
				/>
				<Image
					src='/assets/about-us/img-about-us.png'
					alt='About Us'
					width={795}
					height={400}
					loading='lazy'
					className='w-full hidden md:block'
				/>
			</div>
		</div>
	)
}
