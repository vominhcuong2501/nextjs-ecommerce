'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import Image from 'next/image'

export default function SliderHome() {
	const pagination = {
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return (
				'<span class="relative pr-6 sm:pr-9 before:absolute before:content-[` `] before:top-1/2 before:-translate-y-1/2 before:bg-neutral-1 before:h-0.5 before:w-2 md:before:w-4 before:right-0 before:rounded-full ' +
				className +
				'">0' +
				(index + 1) +
				'</span>'
			)
		}
	}

	const dataSlide = [
		{
			desktop: './assets/home/component-slide-1.png',
			mobile: './assets/home/component-slide-1-mobile.png'
		},
		{
			desktop: './assets/home/component-slide-2.png',
			mobile: './assets/home/component-slide-2-mobile.png'
		},
		{
			desktop: './assets/home/component-slide-3.png',
			mobile: './assets/home/component-slide-3-mobile.png'
		},
		{
			desktop: './assets/home/component-slide-4.png',
			mobile: './assets/home/component-slide-4-mobile.png'
		}
	]

	const dataSlide1 = [
		{
			desktop: './assets/home/img-countdown-1.png',
			mobile: './assets/home/img-countdown-1-mobile.png'
		},
		{
			desktop: './assets/home/img-countdown-2.png',
			mobile: './assets/home/img-countdown-2-mobile.png'
		},
		{
			desktop: './assets/home/img-countdown-3.png',
			mobile: './assets/home/img-countdown-3-mobile.png'
		}
	]

	return (
		<div className='flex items-center gap-2.5 md:gap-5 bg-neutral-1 pt-4 pb-4 pl-2 pr-0 sm:p-5 mt-2.5 lg:mt-10 rounded-md overflow-hidden'>
			<div className='max-w-[433px] overflow-hidden'>
				<Swiper
					effect={'fade'}
					pagination={pagination}
					modules={[EffectFade, Pagination, Autoplay]}
					className='slide-home max-w-[165px] sm:max-w-[330px] md:max-w-[433px]'
					autoplay={{
						delay: 3000,
						disableOnInteraction: false
					}}
				>
					{dataSlide?.map((img, index) => {
						return (
							<SwiperSlide key={index}>
								<Image
									src={img.mobile}
									alt={'Promotions'}
									width={165}
									height={196}
									title={'Promotions'}
									loading='lazy'
									className='block sm:hidden'
								/>
								<Image
									src={img.desktop}
									alt={'Promotions'}
									width={433}
									height={512}
									title={'Promotions'}
									loading='lazy'
									className='hidden md:block'
								/>
							</SwiperSlide>
						)
					})}
				</Swiper>
			</div>
			<div className='flex-1 overflow-hidden'>
				<Swiper
					slidesPerView={1.1}
					spaceBetween={0}
					modules={[Autoplay]}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false
					}}
					breakpoints={{
						400: {
							slidesPerView: 2,
							spaceBetween: 10
						},
						576: {
							slidesPerView: 2.2,
							spaceBetween: 10
						},
						992: {
							slidesPerView: 2,
							spaceBetween: 10
						},
						1300: {
							slidesPerView: 3,
							spaceBetween: 10
						}
					}}
				>
					{dataSlide1?.map((img, index) => {
						return (
							<SwiperSlide
								key={index}
								className='sm:!w-[283px] transition-all duration-200 opacity-50 hover:opacity-100 cursor-pointer'
							>
								<Image
									src={img.mobile}
									alt={'Promotions'}
									width={165}
									height={196}
									title={'Promotions'}
									loading='lazy'
									className='block sm:hidden'
								/>
								<Image
									src={img.desktop}
									alt={'Promotions'}
									width={283}
									height={512}
									title={'Promotions'}
									loading='lazy'
									className='hidden sm:block'
								/>
							</SwiperSlide>
						)
					})}
				</Swiper>
			</div>
		</div>
	)
}
