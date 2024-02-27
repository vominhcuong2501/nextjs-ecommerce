'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'
import Link from 'next/link'
import { useDisplay } from '@/lib/hooks/useDisplay'

export default function CategoriesHome() {
	const isMobile = useDisplay(1024)
	const dataCategories = [
		{
			img: './assets/home/category-1.png',
			title: 'Goods',
			link: '/categories/goods'
		},
		{
			img: './assets/home/category-2.png',
			title: 'Fashion & Accessories',
			link: '/categories/fashion-accessories'
		},
		{
			img: './assets/home/category-3.png',
			title: 'Home & Living',
			link: '/categories/home-living'
		},
		{
			img: './assets/home/category-4.png',
			title: 'Home Appliances',
			link: '/categories/home-appliances'
		},
		{
			img: './assets/home/category-5.png',
			title: 'Electronics & Automotive',
			link: '/categories/electronics-automotive'
		},
		{
			img: './assets/home/category-6.png',
			title: 'Travel & Luggage',
			link: '/categories/travel-luggage'
		},
		{
			img: './assets/home/category-7.png',
			title: 'Mobile & Gadgets',
			link: '/categories/mobile-gadgets'
		},
		{
			img: './assets/home/category-8.png',
			title: 'Computer & Peripherals',
			link: '/categories/computer-peripherals'
		},
		{
			img: './assets/home/category-9.png',
			title: 'Health & Beauty',
			link: '/categories/health-beauty'
		},
		{
			img: './assets/home/category-10.png',
			title: 'Others',
			link: '/categories/others'
		}
	]

	return (
		<div className=' bg-neutral-1 py-4 lg:rounded-md'>
			<h2 className='pl-4 text-18 lg:text-24 font-bold text-neutral-9 leading-1-4'>Popular Categories</h2>
			{isMobile ? (
				<Swiper
					slidesPerView={2.5}
					spaceBetween={30}
					modules={[Autoplay]}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false
					}}
					breakpoints={{
						640: {
							slidesPerView: 3.5,
							spaceBetween: 20
						},
						768: {
							slidesPerView: 4.5,
							spaceBetween: 40
						}
					}}
					className='mt-4'
				>
					{dataCategories?.map((item) => {
						return (
							<SwiperSlide key={item.img}>
								<Link
									href={item.link}
									target='_self'
									title={item.link}
									className='text-center text-14 font-medium leading-1-4 text-neutral-8 group hover:text-orange-11 transition-all duration-200 block'
									key={item.img}
								>
									<Image
										src={item.img}
										alt={item.title}
										width={140}
										height={140}
										title={item.title}
										loading='lazy'
										className='h-[80px] w-[80px] mx-auto scale-90 group-hover:scale-100 transition-all duration-200'
									/>
									{item.title}
								</Link>
							</SwiperSlide>
						)
					})}
				</Swiper>
			) : (
				<div className='grid grid-cols-5 gap-5 mt-4'>
					{dataCategories?.map((item) => {
						return (
							<Link
								href={item.link}
								target='_self'
								title={item.link}
								className='text-center text-16 font-medium leading-1-4 text-neutral-8 group hover:text-orange-11 transition-all duration-200'
								key={item.img}
							>
								<Image
									src={item.img}
									alt={item.title}
									width={140}
									height={140}
									title={item.title}
									loading='lazy'
									className='h-[80px] w-[80px] lg:w-[140px] lg:h-[140px] mx-auto scale-90 group-hover:scale-100 group-hover:shadow-black1 rounded-full transition-all duration-200'
								/>
								{item.title}
							</Link>
						)
					})}
				</div>
			)}
		</div>
	)
}
