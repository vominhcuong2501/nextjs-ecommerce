'use client'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import NewItemSmall from '../NewItemSmall'

export default function NewsListSwiper() {
	return (
		<div className='news-list-swiper max-w-full mx-auto '>
			<div className='mt-6'>
				<Swiper
					slidesPerView={1.25}
					modules={[Navigation, Autoplay, Pagination]}
					spaceBetween={16}
					centeredSlides={true}
					pagination={{
						clickable: true
					}}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false
					}}
					breakpoints={{
						550: {
							slidesPerView: 2.1,
							centeredSlides: false
						},
						800: {
							slidesPerView: 2.8,
							centeredSlides: false
						},
						1024: {
							slidesPerView: 3,
							centeredSlides: false
						}
					}}
				>
					<SwiperSlide>
						<NewItemSmall />
					</SwiperSlide>
					<SwiperSlide>
						<NewItemSmall />
					</SwiperSlide>
					<SwiperSlide>
						<NewItemSmall />
					</SwiperSlide>
					<SwiperSlide>
						<NewItemSmall />
					</SwiperSlide>
					<SwiperSlide>
						<NewItemSmall />
					</SwiperSlide>
					<SwiperSlide>
						<NewItemSmall />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}
