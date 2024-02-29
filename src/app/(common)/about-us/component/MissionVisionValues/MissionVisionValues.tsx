'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'
import { Pagination } from 'swiper/modules'

export default function MissionVisionValues() {
	return (
		<div className='max-w-[1360px] mx-auto px-4 py-5 lg:py-10'>
			<Swiper
				slidesPerView={1}
				spaceBetween={0}
				pagination={true}
				modules={[Autoplay, Pagination]}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false
				}}
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 20
					},
					900: {
						slidesPerView: 3,
						spaceBetween: 40
					}
				}}
				className='!pt-3 !pb-10'
			>
				<SwiperSlide key='mission' className='p-2'>
					<div className='cursor-pointer max-w-[400px] mx-auto text-center p-4 rounded-xl shadow-black1 lg:shadow-none transition-all duration-200 hover:shadow-black1'>
						<Image
							src='/assets/about-us/img-mission.png'
							alt='Our Mission'
							width={120}
							height={120}
							loading='lazy'
							className='scale-75 md:scale-100 mx-auto'
						/>
						<h3 className='mt-0 md:mt-2 text-18 md:text-20 text-neutral-8 font-bold leading-1-4 '>Our Mission</h3>
						<p className='text-14 md:text-16 text-neutral-8 font-normal leading-1-4 min-h-[78px] md:min-h-[90px]'>
							We create an e-commerce platform prioritizing customer satisfaction, providing an exceptional shopping
							experience hardly found elsewhere.
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide key='vision' className='p-2'>
					<div className='cursor-pointer max-w-[340px] mx-auto text-center p-4 rounded-xl shadow-black1 lg:shadow-none transition-all duration-200 hover:shadow-black1'>
						<Image
							src='/assets/about-us/img-vision.png'
							alt='Our Vision'
							width={120}
							height={120}
							loading='lazy'
							className='scale-75 md:scale-100 mx-auto'
						/>
						<h3 className='mt-0 md:mt-2 text-18 md:text-20 text-neutral-8 font-bold leading-1-4 '>Our Vision</h3>
						<p className='text-14 md:text-16 text-neutral-8 font-normal leading-1-4 min-h-[78px] md:min-h-[90px]'>
							We value difference and diversity by offering equal opportunities to employees.
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide key='values' className='p-2'>
					<div className='cursor-pointer max-w-[340px] mx-auto text-center p-4 rounded-xl shadow-black1 lg:shadow-none transition-all duration-200 hover:shadow-black1'>
						<Image
							src='/assets/about-us/img-values.png'
							alt='Our Values'
							width={120}
							height={120}
							loading='lazy'
							className='scale-75 md:scale-100 mx-auto'
						/>
						<h3 className='mt-0 md:mt-2 text-18 md:text-20 text-neutral-8 font-bold leading-1-4 '>Our Values</h3>
						<p className='text-14 md:text-16 text-neutral-8 font-normal leading-1-4 min-h-[78px] md:min-h-[90px]'>
							We represent ambition, fun, quality, and challenge. For us, there is no such thing as a comfort zone.
						</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}
