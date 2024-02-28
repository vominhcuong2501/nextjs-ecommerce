import Image from 'next/image'
import ButtonAnimation from '../../ButtonAnimation'
import Input from '../../Input'
import { useDisplay } from '@/lib/hooks/useDisplay'

export default function AboutHome() {
	const isMobile = useDisplay(768)
	return (
		<div className='max-w-[1360px] mx-auto px-4 pt-5 md:pt-10 pb-[150px] md:pb-[100px]'>
			<h2 className='text-18 lg:text-24 font-bold text-neutral-9 leading-1-4'>About Company</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 items-center mt-5'>
				<div className='px-4 lg:px-10 py-5 bg-neutral-2 rounded-lg text-center'>
					<h3 className='text-16 md:text-18 text-neutral-9 font-bold leading-1-4'>Stay Connected</h3>
					<p className='text-12 md:text-14 text-neutral-9 font-normal leading-1-4 mt-1 md:mt-2'>
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
							classNameInput='text-neutral-9 font-medium text-16 leading-1-4 rounded-md border-neutral-7 pl-4 focus:outline-orange-11'
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
					<h3 className='text-16 md:text-18 text-neutral-9 font-bold leading-1-4'>Get Social</h3>
					<p className='text-12 md:text-14 text-neutral-9 font-normal leading-1-4 mt-1 md:mt-2'>
						Join us in the group <br />
						and be the first to know all promotions and offers!
					</p>
					<div className='flex items-center justify-center gap-5 lg:gap-10 mt-4 '>
						<a href='#' target='_blank' title='Facebook'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='28'
								height='28'
								viewBox='0 0 28 28'
								fill='none'
								className='opacity-50 hover:opacity-100 hover:shadow-black1 transition-all duration-200 rounded-full scale-150'
							>
								<path
									d='M27.9908 14.0005C27.9908 21.0714 22.751 26.917 15.944 27.8656C15.3075 27.9539 14.6564 28 13.9954 28C13.2324 28 12.4832 27.9392 11.7535 27.8215C5.08977 26.7483 0 20.9684 0 14.0005C0 6.26843 6.26659 0 13.9964 0C21.7261 0 27.9927 6.26843 27.9927 14.0005H27.9908Z'
									fill='#3d5a98'
								/>
								<path
									d='M15.9434 11.2421V14.292H19.7151L19.1179 18.4003H15.9434V27.8658C15.3069 27.9541 14.6557 28.0002 13.9948 28.0002C13.2318 28.0002 12.4825 27.9393 11.7529 27.8216V18.4003H8.27441V14.292H11.7529V10.5604C11.7529 8.24527 13.629 6.36768 15.9444 6.36768V6.36964C15.9512 6.36964 15.9571 6.36768 15.964 6.36768H19.7161V9.92077H17.2644C16.5357 9.92077 15.9444 10.5123 15.9444 11.2412L15.9434 11.2421Z'
									fill='#ffffff'
								/>
							</svg>
						</a>
						<a href='#' target='_blank' title='Linkedin'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='29'
								height='28'
								viewBox='0 0 29 28'
								fill='none'
								className='opacity-50 hover:opacity-100 hover:shadow-black1 transition-all duration-200 rounded-full scale-150'
							>
								<path
									d='M14.9091 0H14.8454C7.13326 0 0.881348 6.25374 0.881348 13.9681V14.0319C0.881348 21.7463 7.13326 28 14.8454 28H14.9091C22.6212 28 28.8731 21.7463 28.8731 14.0319V13.9681C28.8731 6.25374 22.6212 0 14.9091 0Z'
									fill='#0076b2'
								/>
								<path
									d='M7.557 9.30631C7.18826 8.96395 7.00488 8.54017 7.00488 8.03595C7.00488 7.53173 7.18924 7.08931 7.557 6.74596C7.92574 6.4036 8.40039 6.23193 8.98194 6.23193C9.56349 6.23193 10.0195 6.4036 10.3873 6.74596C10.756 7.08832 10.9394 7.51898 10.9394 8.03595C10.9394 8.55292 10.755 8.96395 10.3873 9.30631C10.0185 9.64867 9.55074 9.82034 8.98194 9.82034C8.41314 9.82034 7.92574 9.64867 7.557 9.30631ZM10.6295 11.2702V21.7667H7.31379V11.2702H10.6295Z'
									fill='#ffffff'
								/>
								<path
									d='M21.6671 12.3071C22.3898 13.0918 22.7507 14.169 22.7507 15.5404V21.5812H19.6018V15.9661C19.6018 15.2745 19.4223 14.7369 19.0644 14.3543C18.7064 13.9718 18.2239 13.7795 17.6198 13.7795C17.0157 13.7795 16.5332 13.9708 16.1752 14.3543C15.8173 14.7369 15.6378 15.2745 15.6378 15.9661V21.5812H12.4702V11.2407H15.6378V12.6121C15.9585 12.155 16.391 11.794 16.9343 11.5282C17.4776 11.2623 18.0886 11.1299 18.7682 11.1299C19.9784 11.1299 20.9453 11.5223 21.6671 12.3061V12.3071Z'
									fill='#ffffff'
								/>
							</svg>
						</a>
						<a href='#' target='_blank' title='Youtube'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='29'
								height='28'
								viewBox='0 0 29 28'
								fill='none'
								className='opacity-50 hover:opacity-100 hover:shadow-black1 transition-all duration-200 rounded-full scale-150'
							>
								<path
									d='M28.8896 14C28.8896 6.26801 22.6412 0 14.9335 0C7.22569 0 0.977295 6.26801 0.977295 14C0.977295 21.732 7.22569 28 14.9335 28C22.6412 28 28.8896 21.732 28.8896 14Z'
									fill='red'
								/>
								<path
									d='M23.7216 11.0988C23.6118 10.0354 23.3755 8.85976 22.5056 8.24195C21.8319 7.76285 20.9463 7.74514 20.1196 7.74613C18.372 7.74613 16.6234 7.74908 14.8758 7.75007C13.1949 7.75203 11.514 7.75302 9.83314 7.75498C9.13097 7.75498 8.44841 7.70088 7.79625 8.00584C7.23628 8.26753 6.79791 8.76532 6.53411 9.31918C6.16831 10.0895 6.09182 10.9621 6.04769 11.814C5.96629 13.3654 5.97512 14.9207 6.07221 16.4712C6.1438 17.6025 6.32522 18.8529 7.19705 19.574C7.96983 20.2124 9.06035 20.2439 10.0626 20.2449C13.244 20.2479 16.4263 20.2508 19.6086 20.2528C20.0166 20.2538 20.4422 20.2459 20.858 20.2006C21.6759 20.1121 22.4556 19.877 22.9812 19.269C23.5118 18.6561 23.6481 17.8032 23.7285 16.9955C23.9246 15.0358 23.9227 13.0575 23.7216 11.0988ZM13.0361 16.7466V11.2523L17.7787 13.999L13.0361 16.7466Z'
									fill='#ffffff'
								/>
							</svg>
						</a>
						<a href='#' target='_blank' title='Instagram'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='29'
								height='28'
								viewBox='0 0 29 28'
								fill='none'
								className='opacity-50 hover:opacity-100 hover:shadow-black1 transition-all duration-200 rounded-full scale-150'
								style={{
									background:
										'linear-gradient(220deg, rgba(251,123,255,1) 0%, rgba(254,110,48,1) 65%, rgba(236,226,130,1) 100%)'
								}}
							>
								<path
									d='M15.0131 0H14.9494C7.23725 0 0.985352 6.25374 0.985352 13.9681V14.0319C0.985352 21.7463 7.23725 28 14.9494 28H15.0131C22.7252 28 28.9771 21.7463 28.9771 14.0319V13.9681C28.9771 6.25374 22.7252 0 15.0131 0Z'
									fill='none'
								/>
								<path
									d='M19.3125 5.69653H10.6511C8.25819 5.69653 6.31152 7.64377 6.31152 10.0374V17.9636C6.31152 20.3572 8.25819 22.3045 10.6511 22.3045H19.3125C21.7054 22.3045 23.652 20.3572 23.652 17.9636V10.0374C23.652 7.64377 21.7054 5.69653 19.3125 5.69653ZM7.84238 10.0374C7.84238 8.48839 9.10256 7.22784 10.6511 7.22784H19.3125C20.861 7.22784 22.1212 8.48839 22.1212 10.0374V17.9636C22.1212 19.5126 20.861 20.7732 19.3125 20.7732H10.6511C9.10256 20.7732 7.84238 19.5126 7.84238 17.9636V10.0374Z'
									fill='#ffffff'
								/>
								<path
									d='M14.9816 18.0371C17.2068 18.0371 19.0181 16.2262 19.0181 13.9994C19.0181 11.7725 17.2077 9.96167 14.9816 9.96167C12.7554 9.96167 10.9451 11.7725 10.9451 13.9994C10.9451 16.2262 12.7554 18.0371 14.9816 18.0371ZM14.9816 11.494C16.3634 11.494 17.4872 12.6182 17.4872 14.0003C17.4872 15.3825 16.3634 16.5067 14.9816 16.5067C13.5998 16.5067 12.4759 15.3825 12.4759 14.0003C12.4759 12.6182 13.5998 11.494 14.9816 11.494Z'
									fill='#ffffff'
								/>
								<path
									d='M19.3918 10.614C19.991 10.614 20.4794 10.1265 20.4794 9.52614C20.4794 8.92578 19.992 8.43823 19.3918 8.43823C18.7916 8.43823 18.3042 8.92578 18.3042 9.52614C18.3042 10.1265 18.7916 10.614 19.3918 10.614Z'
									fill='#ffffff'
								/>
							</svg>
						</a>
						<a href='#' target='_blank' title='Twitter'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='28'
								height='28'
								viewBox='0 0 28 28'
								fill='none'
								className='opacity-50 hover:opacity-100 hover:shadow-black1 transition-all duration-200 rounded-full scale-150'
							>
								<path
									d='M27.9834 14.0005C27.9834 21.0714 22.7436 26.917 15.9367 27.8656C15.3002 27.9539 14.649 28 13.9881 28C13.2251 28 12.4758 27.9392 11.7462 27.8215C5.08244 26.7483 -0.00732422 20.9684 -0.00732422 14.0005C-0.00732422 6.26843 6.25926 0 13.989 0C21.7188 0 27.9854 6.26843 27.9854 14.0005H27.9834Z'
									fill='#eaeaea'
								/>
								<path
									d='M5.66887 6.17529L12.1238 14.8079L5.62866 21.8268H7.09087L12.7779 15.6819L17.3724 21.8268H22.3474L15.5297 12.7086L21.5756 6.17529H20.1134L14.8765 11.8345L10.6449 6.17529H5.66984H5.66887ZM7.81853 7.2524H10.1035L20.1958 20.7497H17.9108L7.81853 7.2524Z'
									fill='#000'
								/>
							</svg>
						</a>
						<a href='#' target='_blank' title='Tiktok'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='29'
								height='28'
								viewBox='0 0 29 28'
								fill='none'
								className='opacity-50 hover:opacity-100 hover:shadow-black1 transition-all duration-200 rounded-full scale-150'
							>
								<path
									d='M14.9172 0H14.8534C7.1413 0 0.889404 6.25374 0.889404 13.9681V14.0319C0.889404 21.7463 7.1413 28 14.8534 28H14.9172C22.6293 28 28.8812 21.7463 28.8812 14.0319V13.9681C28.8812 6.25374 22.6293 0 14.9172 0Z'
									fill='#000'
								/>
								<path
									d='M21.6508 10.1295V12.7732C21.1889 12.7281 20.5888 12.6231 19.9248 12.3799C19.0579 12.062 18.4126 11.6275 17.9899 11.291V16.6344L17.9792 16.6177C17.986 16.7236 17.9899 16.8315 17.9899 16.9404C17.9899 19.594 15.8314 21.7541 13.1777 21.7541C10.524 21.7541 8.36548 19.594 8.36548 16.9404C8.36548 14.2869 10.524 12.1258 13.1777 12.1258C13.4376 12.1258 13.6926 12.1464 13.9417 12.1866V14.7921C13.7024 14.7067 13.4454 14.6606 13.1777 14.6606C11.9215 14.6606 10.8986 15.6828 10.8986 16.9404C10.8986 18.198 11.9215 19.2202 13.1777 19.2202C14.434 19.2202 15.4568 18.1971 15.4568 16.9404C15.4568 16.8933 15.4558 16.8463 15.4529 16.7992V6.41553H18.0939C18.1037 6.63919 18.1125 6.86482 18.1223 7.08848C18.14 7.52894 18.2969 7.95174 18.5705 8.29802C18.8912 8.70513 19.3649 9.17796 20.0298 9.55563C20.6525 9.9078 21.237 10.0599 21.6508 10.1315V10.1295Z'
									fill='#fff'
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>

			<div className='relative mt-10'>
				{isMobile ? (
					<Image
						src={'./assets/home/bg-about-home.png'}
						alt='Elevate Your E-Commerce Journey With VMC® Today!'
						width={1360}
						height={250}
						className='mx-auto w-full  h-[251px] sm:h-auto'
						title='Elevate Your E-Commerce Journey With VMC® Today!'
						loading='lazy'
					/>
				) : (
					<Image
						src={'./assets/home/bg-about-home.png'}
						alt='Elevate Your E-Commerce Journey With VMC® Today!'
						width={375}
						height={251}
						className='mx-auto w-full'
						title='Elevate Your E-Commerce Journey With VMC® Today!'
						loading='lazy'
					/>
				)}

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
	)
}
