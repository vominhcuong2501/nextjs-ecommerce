import ButtonAnimation from '@/app/component/ButtonAnimation'
import PATH_NAME from '@/app/constans/pathname'
import Image from 'next/image'
import Link from 'next/link'

export default function PeopleLiked() {
	return (
		<div className='bg-people-liked'>
			<div className='max-w-[1360px] mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-5'>
				<div className='md:max-w-[550px]'>
					<h2 className='text-neutral-8 font-bold leading-1-4 text-20 lg:text-40'>What are people at VMC® like?</h2>
					<p className='text-neutral-9 font-normal leading-1-4 text-14 lg:text-16'>
						Behind our story is a dedicated team with its own philanthropy and aspiration.
					</p>
					<Link href={PATH_NAME.CONTACT_US} target='_self' title='Contact Us' className='block mt-2 md:mt-4'>
						<ButtonAnimation
							className={` transition-all duration-200 text-neutral-1 bg-orange-11 border-transparent hover:border-orange-11 hover:text-orange-11 lg:!px-10 !py-2.5  lg:!py-3`}
							classHoverButton='bg-neutral-1'
						>
							Contact Us
						</ButtonAnimation>
					</Link>
				</div>
				<div className='lg:col-span-2 grid grid-cols-1 md:grid-cols-2 items-center gap-2 md:gap-5'>
					<div className='relative text-neutral-1 group overflow-hidden rounded-xl cursor-pointer max-w-[440px] mx-auto'>
						<Image
							src='/assets/about-us/img-ambitious.png'
							alt='Ambitious'
							width={440}
							height={290}
							loading='lazy'
							className='group-hover:scale-110 transition-all duration-200'
						/>
						<div className='absolute left-4 bottom-4 right-4'>
							<h3 className='text-16 lg:text-20 leading-1-4 font-semibold'>Ambitious</h3>
							<p className='text-12 lg:text-14 leading-1-4 font-normal'>
								We revolutionize online shopping by offering unmatched convenience and quality to our global clientele.
							</p>
						</div>
					</div>
					<div className='relative text-neutral-1 group overflow-hidden rounded-xl cursor-pointer max-w-[440px] mx-auto'>
						<Image
							src='/assets/about-us/img-innovative.png'
							alt='Innovative'
							width={440}
							height={290}
							loading='lazy'
							className='group-hover:scale-110 transition-all duration-200'
						/>
						<div className='absolute left-4 bottom-4 right-4'>
							<h3 className='text-16 lg:text-20 leading-1-4 font-semibold'>Innovative</h3>
							<p className='text-12 lg:text-14 leading-1-4 font-normal'>
								We challenge the status quo of traditional retail by pushing the boundaries of what is possible.
							</p>
						</div>
					</div>
					<div className='relative text-neutral-1 group overflow-hidden rounded-xl cursor-pointer max-w-[440px] mx-auto'>
						<Image
							src='/assets/about-us/img-passionate.png'
							alt='Passionate'
							width={440}
							height={290}
							loading='lazy'
							className='group-hover:scale-110 transition-all duration-200'
						/>
						<div className='absolute left-4 bottom-4 right-4'>
							<h3 className='text-16 lg:text-20 leading-1-4 font-semibold'>Passionate</h3>
							<p className='text-12 lg:text-14 leading-1-4 font-normal'>
								We harness our boundless enthusiasm to deliver a shopping experience that surpasses expectations.
							</p>
						</div>
					</div>
					<div className='relative text-neutral-1 group overflow-hidden rounded-xl cursor-pointer max-w-[440px] mx-auto'>
						<Image
							src='/assets/about-us/img-ethical.png'
							alt='Ethical'
							width={440}
							height={290}
							loading='lazy'
							className='group-hover:scale-110 transition-all duration-200'
						/>
						<div className='absolute left-4 bottom-4 right-4'>
							<h3 className='text-16 lg:text-20 leading-1-4 font-semibold'>Ethical</h3>
							<p className='text-12 lg:text-14 leading-1-4 font-normal'>
								We rely on ethical business practices and emphasize the principle of giving back to society.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
