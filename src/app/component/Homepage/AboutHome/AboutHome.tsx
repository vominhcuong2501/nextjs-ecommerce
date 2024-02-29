import Image from 'next/image'
import ButtonAnimation from '../../ButtonAnimation'
import Input from '../../Input'
import SocialList from '../../SocialList'

export default function AboutHome() {
	return (
		<div className='bg-about-home'>
			<div className='max-w-[1360px] mx-auto px-4 pt-5 md:pt-10 pb-[150px] md:pb-[100px]'>
				<h2 className='text-18 lg:text-24 font-bold text-neutral-8 leading-1-4'>About Company</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 items-center mt-5'>
					<div className='px-4 lg:px-10 py-5 bg-neutral-2 rounded-lg text-center'>
						<h3 className='text-16 md:text-18 text-neutral-8 font-bold leading-1-4'>Stay Connected</h3>
						<p className='text-12 md:text-14 text-neutral-8 font-normal leading-1-4 mt-1 md:mt-2'>
							Exclusive discounts! <br />
							Subscribe to our news and get a 10% discount coupon!
						</p>
						<form action='#' className='flex items-center gap-2 mt-2'>
							<Input
								name='subscribe'
								type='email'
								id='subscribe'
								className='w-full'
								maxLength={255}
								placeholder='Email'
								isRequired={false}
								classNameInput='text-neutral-8 font-medium text-16 leading-1-4 rounded-md !border-neutral-5 pl-4 focus:outline-orange-11'
							/>
							<ButtonAnimation
								className={` transition-all duration-200 text-neutral-1 bg-orange-11 border-transparent hover:border-orange-11 hover:text-orange-11 lg:!px-10 !py-2.5  lg:!py-3`}
								classHoverButton='bg-neutral-1'
							>
								Subscribe
							</ButtonAnimation>
						</form>
					</div>
					<div className='px-4 lg:px-10 py-7 bg-neutral-2 rounded-lg text-center'>
						<h3 className='text-16 md:text-18 text-neutral-8 font-bold leading-1-4'>Get Social</h3>
						<p className='text-12 md:text-14 text-neutral-8 font-normal leading-1-4 mt-1 md:mt-2'>
							Join us in the group <br />
							and be the first to know all promotions and offers!
						</p>
						<div className='flex items-center justify-center gap-5 lg:gap-10 mt-4 '>
							<SocialList />
						</div>
					</div>
				</div>

				<div className='relative mt-10'>
					<Image
						src={'./assets/home/bg-about-home.png'}
						alt='Elevate Your E-Commerce Journey With VMC® Today!'
						width={1360}
						height={250}
						className='mx-auto w-full h-[251px] sm:h-auto block md:hidden'
						title='Elevate Your E-Commerce Journey With VMC® Today!'
						loading='lazy'
					/>
					<Image
						src={'./assets/home/bg-about-home.png'}
						alt='Elevate Your E-Commerce Journey With VMC® Today!'
						width={375}
						height={251}
						className='mx-auto w-full hidden md:block'
						title='Elevate Your E-Commerce Journey With VMC® Today!'
						loading='lazy'
					/>
					<h2 className='text-18 lg:text-32 font-bold text-neutral-1 leading-1-4 absolute top-5 md:top-10 left-1/2 -translate-x-1/2 w-full text-center'>
						Elevate Your E-Commerce <br /> Journey With VMC® Today!
					</h2>
					<div className='grid grid-col-1 sm:grid-cols-3 items-center gap-3 sm:gap-5 lg:gap-10 p-3 sm:p-5 bg-neutral-1 rounded-md  absolute top-[35%] sm:top-[73%] left-4 sm:left-10 right-4 sm:right-10'>
						<Image
							src={'./assets/home/img-about-home-1.png'}
							alt='Easy Returns and refunds'
							width={400}
							height={100}
							className='mx-auto w-full h-[80px] sm:h-auto'
							title='Easy Returns and refunds'
							loading='lazy'
						/>
						<Image
							src={'./assets/home/img-about-home-2.png'}
							alt='Product Reviews'
							width={400}
							height={100}
							className='mx-auto w-full h-[80px] sm:h-auto'
							title='Product Reviews'
							loading='lazy'
						/>
						<Image
							src={'./assets/home/img-about-home-3.png'}
							alt='Doorstep Delivery'
							width={400}
							height={100}
							className='mx-auto w-full h-[80px] sm:h-auto'
							title='Doorstep Delivery'
							loading='lazy'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
