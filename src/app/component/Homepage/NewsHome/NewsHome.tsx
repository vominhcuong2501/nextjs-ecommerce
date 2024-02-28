import NewsListSwiper from '@/app/(common)/news/_component/NewsListSwiper'
import Link from 'next/link'

export default function NewsHome() {
	return (
		<div className='mt-2.5 lg:mt-10'>
			<div className='flex items-center justify-between'>
				<h2 className='text-18 lg:text-24 font-bold text-neutral-9 leading-1-4'>Our Articles</h2>
				<Link
					href='/news'
					target='_self'
					title='See all articles'
					className='flex items-center gap-2  text-orange-11 transition-all duration-200 relative before:absolute before:content-[""] before:h-0.5 before:w-0 before:bg-orange-11 before:-bottom-1 before:rounded before:left-1/2 before:right-1/2 before:transition-all before:duration-200 hover:before:w-full hover:before:left-0 group-hover:before:right-0'
				>
					See all articles
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
							stroke='#ff7207'
						/>
					</svg>
				</Link>
			</div>
			<NewsListSwiper />
		</div>
	)
}
