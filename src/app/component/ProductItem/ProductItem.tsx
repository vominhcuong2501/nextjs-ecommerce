'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import Image from 'next/image'
import Link from 'next/link'
import { ProductItemProp } from '@/app/types/product'

interface ProductItemProps {
	item: ProductItemProp
}

export default function ProductItem({ item }: ProductItemProps) {
	return (
		<Link
			href={`${item.status === 'Out Of Stock' ? '' : `/categories/type/${item.keyword}`}`}
			target='_self'
			title={item.name}
			className={`block px-4 pb-4 pt-[50px] bg-neutral-1 rounded-md relative group transition-all duration-200 hover:scale-105`}
		>
			{/* discount  */}
			{item.discount > 0 && (
				<div className='absolute top-4 left-4 min-w-[76px]'>
					<p className='z-10 relative block text-center font-semibold text-neutral-1 leading-1-4'>{item.discount}%</p>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='76'
						height='24'
						viewBox='0 0 76 24'
						fill='none'
						className='absolute top-0 left-0 z-5'
					>
						<path
							d='M0 0H64C70.6274 0 76 5.37258 76 12C76 18.6274 70.6274 24 64 24H17.5385C7.85224 24 0 16.1478 0 6.46154V0Z'
							fill='#E22D2D'
						/>
					</svg>
				</div>
			)}

			{/* link product  */}
			<div className={`div-parent-heart absolute top-4 right-4 `}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='currentColor'
					className='w-6 h-6 cursor-pointer p-[1px]'
				>
					<path
						d='m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z'
						fill={item.like ? 'red' : '#acacac'}
					/>
				</svg>
			</div>

			{/* list image product  */}
			<Swiper
				spaceBetween={30}
				effect={'fade'}
				pagination={true}
				modules={[EffectFade, Autoplay, Pagination]}
				className='pagination-product-item !pb-8'
				autoplay={{
					delay: 5000,
					disableOnInteraction: false
				}}
			>
				{item.listImg?.map((img: string, index: number) => {
					return (
						<SwiperSlide key={index}>
							<Image
								src={img}
								alt={item.name}
								width={188}
								height={140}
								title={item.name}
								loading='lazy'
								className='w-[188px] mx-auto'
							/>
						</SwiperSlide>
					)
				})}
			</Swiper>

			<h3 className='text-14 md:text-16 font-semibold text-neutral-8 leading-1-4 transition-all duration-200 group-hover:text-orange-11'>
				{item.name}
			</h3>
			<div className='flex items-center gap-5 mt-1'>
				<div className='flex items-center gap-1'>
					<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
						<path
							d='M7.99994 11.6043L10.9099 13.3643C11.4428 13.6868 12.0949 13.21 11.9546 12.607L11.1833 9.29739L13.7567 7.06762C14.2264 6.66094 13.974 5.88963 13.357 5.84055L9.97027 5.55307L8.64503 2.42579C8.40663 1.85783 7.59325 1.85783 7.35485 2.42579L6.02961 5.54605L2.64289 5.83354C2.02585 5.88262 1.77343 6.65392 2.24322 7.06061L4.81656 9.29038L4.04526 12.6C3.90503 13.203 4.55713 13.6798 5.09003 13.3572L7.99994 11.6043Z'
							fill='#F4C200'
						/>
					</svg>
					<span className='text-12 leading-1-4 text-neutral-7 font-normal'>{item.rate}</span>
				</div>
				{item.comment?.length > 0 && (
					<div className='flex items-center gap-1'>
						<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M7.07885 1.59998H8.92115C9.88528 1.59997 10.6375 1.59997 11.2376 1.65703C11.8481 1.71508 12.3424 1.83497 12.7765 2.101C13.234 2.38135 13.6187 2.766 13.899 3.22349C14.165 3.6576 14.2849 4.15191 14.343 4.76238C14.4 5.36253 14.4 6.11475 14.4 7.0789V7.71493C14.4 8.4012 14.4 8.93668 14.3706 9.3687C14.3406 9.80744 14.279 10.1686 14.1412 10.5011C13.7961 11.3342 13.1342 11.9961 12.3011 12.3412C11.8278 12.5373 11.2863 12.5819 10.5331 12.5948C10.2706 12.5994 10.101 12.6027 9.97095 12.6171C9.84831 12.6307 9.79464 12.6512 9.75941 12.6717C9.72287 12.6929 9.67929 12.7289 9.60966 12.8245C9.53511 12.9268 9.45147 13.0673 9.32148 13.2869L8.99622 13.8364C8.55143 14.5878 7.44855 14.5878 7.00376 13.8364L6.6785 13.2869C6.54851 13.0673 6.46486 12.9268 6.39032 12.8245C6.32069 12.7289 6.27711 12.6929 6.24057 12.6717C6.20534 12.6512 6.15167 12.6307 6.02903 12.6171C5.89897 12.6027 5.72938 12.5994 5.46685 12.5948C4.71367 12.5819 4.1722 12.5373 3.69886 12.3412C2.86576 11.9961 2.20387 11.3342 1.85879 10.5011C1.72105 10.1686 1.65938 9.80744 1.62945 9.3687C1.59997 8.93669 1.59997 8.40122 1.59998 7.71496L1.59998 7.07885C1.59997 6.11472 1.59997 5.36252 1.65703 4.76238C1.71508 4.15191 1.83497 3.6576 2.101 3.22349C2.38135 2.766 2.766 2.38135 3.22349 2.101C3.6576 1.83497 4.15191 1.71508 4.76238 1.65703C5.36252 1.59997 6.11472 1.59997 7.07885 1.59998ZM4.83811 2.45344C4.28619 2.50592 3.92878 2.60706 3.64149 2.78311C3.29164 2.9975 2.9975 3.29164 2.78311 3.64149C2.60706 3.92878 2.50592 4.28619 2.45344 4.83811C2.4004 5.39597 2.39998 6.11022 2.39998 7.1V7.7C2.39998 8.40439 2.40019 8.91265 2.42759 9.31425C2.45475 9.71225 2.50726 9.97619 2.59789 10.195C2.86178 10.8321 3.36793 11.3382 4.00501 11.6021C4.32403 11.7343 4.72737 11.782 5.48063 11.795L5.49801 11.7952C5.73829 11.7994 5.9455 11.8029 6.11707 11.8219C6.30019 11.8422 6.47538 11.8828 6.64277 11.9802C6.80885 12.0767 6.92965 12.2062 7.03682 12.3533C7.13659 12.4902 7.23951 12.6641 7.35805 12.8644L7.6922 13.4289C7.82722 13.657 8.17276 13.657 8.30778 13.4289L8.64192 12.8644C8.76047 12.6641 8.86339 12.4902 8.96315 12.3533C9.07032 12.2062 9.19112 12.0767 9.3572 11.9802C9.5246 11.8828 9.69979 11.8422 9.88291 11.8219C10.0545 11.8029 10.2617 11.7994 10.502 11.7952L10.5193 11.795C11.2726 11.782 11.676 11.7343 11.995 11.6021C12.6321 11.3382 13.1382 10.8321 13.4021 10.195C13.4927 9.97619 13.5453 9.71225 13.5724 9.31425C13.5998 8.91265 13.6 8.40439 13.6 7.7V7.1C13.6 6.11022 13.5996 5.39597 13.5466 4.83811C13.4941 4.28619 13.3929 3.92878 13.2169 3.64149C13.0025 3.29164 12.7084 2.9975 12.3585 2.78311C12.0712 2.60706 11.7138 2.50592 11.1619 2.45344C10.604 2.4004 9.88978 2.39998 8.9 2.39998H7.1C6.11022 2.39998 5.39597 2.4004 4.83811 2.45344Z'
								fill='#A5A5A5'
							/>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M5.20001 6.19999C5.20001 5.97907 5.3791 5.79999 5.60001 5.79999H10.4C10.6209 5.79999 10.8 5.97907 10.8 6.19999C10.8 6.4209 10.6209 6.59999 10.4 6.59999H5.60001C5.3791 6.59999 5.20001 6.4209 5.20001 6.19999Z'
								fill='#A5A5A5'
							/>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M5.20001 8.29996C5.20001 8.07905 5.3791 7.89996 5.60001 7.89996H8.90003C9.12094 7.89996 9.30003 8.07905 9.30003 8.29996C9.30003 8.52088 9.12094 8.69996 8.90003 8.69996H5.60001C5.3791 8.69996 5.20001 8.52088 5.20001 8.29996Z'
								fill='#A5A5A5'
							/>
						</svg>
						<span className='text-12 leading-1-4 text-neutral-7 font-normal'>{item.comment?.length}</span>
					</div>
				)}
			</div>
			<p
				className={`${
					item.status === 'In Stock' ? 'text-green-2' : 'text-red-1 '
				} text-12 font-medium leading-1-4 md:mt-1`}
			>
				{item.status}
			</p>
			<div className='flex items-center justify-between mt-2'>
				<div className='flex items-center gap-2 '>
					{item.discount > 0 ? (
						<p className='text-18 md:text-24 text-neutral-8 font-bold leading-1-4'>
							{item.unit}
							{item.price - (item.price * item.discount) / 100}
						</p>
					) : (
						<p className='text-18 md:text-24 text-neutral-8 font-bold leading-1-4'>
							{item.unit}
							{item.price}
						</p>
					)}

					{item.discount > 0 && (
						<p className='text-14 md:text-18 text-neutral-7 font-medium leading-1-4 line-through'>
							{item.unit}
							{item.price}
						</p>
					)}
				</div>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='44'
					height='44'
					viewBox='0 0 44 44'
					fill='none'
					className='scale-75 md:scale-100'
				>
					<rect width='44' height='44' rx='22' fill='#FF7207' />
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M10.3333 12.3263C10.3333 11.8699 10.7033 11.4999 11.1597 11.4999H14.2923C14.954 11.4999 15.5222 11.9705 15.6455 12.6207L17.8256 24.121H28.5355L30.9986 17.6863L21.106 14.9253C20.6664 14.8026 20.4095 14.3467 20.5322 13.9071C20.6549 13.4675 21.1107 13.2106 21.5503 13.3333L31.7343 16.1757C32.5158 16.3939 32.9404 17.2369 32.6503 17.9947L29.9436 25.0659C29.7804 25.4922 29.3711 25.7738 28.9146 25.7738H17.3693C16.8399 25.7738 16.3853 25.3973 16.2867 24.8772L14.0641 13.1526H11.1597C10.7033 13.1526 10.3333 12.7827 10.3333 12.3263Z'
						fill='white'
					/>
					<ellipse cx='18.0384' cy='30.056' rx='2.09351' ry='2.10353' fill='white' />
					<ellipse cx='28.2068' cy='30.056' rx='2.09351' ry='2.10353' fill='white' />
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M23 17.3C23.3866 17.3 23.7 17.6134 23.7 18V19.3H25C25.3866 19.3 25.7 19.6134 25.7 20C25.7 20.3866 25.3866 20.7 25 20.7H23.7V22C23.7 22.3866 23.3866 22.7 23 22.7C22.6134 22.7 22.3 22.3866 22.3 22V20.7H21C20.6134 20.7 20.3 20.3866 20.3 20C20.3 19.6134 20.6134 19.3 21 19.3H22.3V18C22.3 17.6134 22.6134 17.3 23 17.3Z'
						fill='white'
					/>
				</svg>
			</div>
		</Link>
	)
}
