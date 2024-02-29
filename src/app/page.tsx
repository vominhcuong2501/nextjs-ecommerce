import Header from './component/Header'
import Menu from './component/Menu'
import Banner from './component/Homepage/Banner'
import CategoriesHome from './component/Homepage/CategoriesHome'
import HotDeals from './component/Homepage/HotDeals'
import SliderHome from './component/Homepage/SliderHome'
import Pioneering from './component/Homepage/Pioneering'
import NewsHome from './component/Homepage/NewsHome'
import AboutHome from './component/Homepage/AboutHome'
import Footer from './component/Footer'

const listProduct = [
	{
		id: 1,
		discount: 10,
		like: false,
		keyword: 'meliwa-m20',
		name: 'Meliwa M20',
		rate: 4.2,
		price: 100,
		unit: '$',
		comment: ['very good', 'best'],
		status: 'In Stock',
		delete: false,
		topRated: false,
		hotDeal: false,
		addCart: false,
		listImg: [
			'./assets/home/product-demo.png',
			'./assets/home/product-demo.png',
			'./assets/home/product-demo.png',
			'./assets/home/product-demo.png'
		]
	},
	{
		id: 2,
		discount: 0,
		like: true,
		name: 'Meliwa M50',
		keyword: 'meliwa-m50',
		rate: 5.0,
		price: 300,
		unit: '$',
		comment: ['very good', 'best'],
		status: 'In Stock',
		delete: false,
		topRated: false,
		hotDeal: false,
		addCart: true,
		listImg: ['./assets/home/product-demo.png']
	},
	{
		id: 3,
		discount: 10,
		like: false,
		name: 'Meliwa M30',
		keyword: 'meliwa-m30',
		rate: 0,
		price: 150,
		unit: '$',
		comment: [''],
		status: 'In Stock',
		delete: false,
		topRated: false,
		hotDeal: false,
		addCart: false,
		listImg: ['./assets/home/product-demo.png', './assets/home/product-demo.png']
	},
	{
		id: 4,
		discount: 5,
		like: false,
		name: 'Meliwa M60',
		keyword: 'meliwa-m60',
		rate: 4.2,
		price: 200,
		unit: '$',
		comment: ['very good', 'best'],
		status: 'Out Of Stock',
		delete: false,
		topRated: false,
		hotDeal: false,
		addCart: false,
		listImg: ['./assets/home/product-demo.png', './assets/home/product-demo.png', './assets/home/product-demo.png']
	},
	{
		id: 5,
		discount: 0,
		like: false,
		name: 'Meliwa M40',
		keyword: 'meliwa-m40',
		rate: 0,
		price: 150,
		unit: '$',
		comment: [''],
		status: 'In Stock',
		delete: false,
		topRated: false,
		hotDeal: false,
		addCart: false,
		listImg: [
			'./assets/home/product-demo.png',
			'./assets/home/product-demo.png',
			'./assets/home/product-demo.png',
			'./assets/home/product-demo.png',
			'./assets/home/product-demo.png'
		]
	}
]

export default function Home() {
	const contentHotDeal = {
		image: './assets/home/img-hot-deals.png',
		imageMobile: './assets/home/img-hot-deals-mobile.png',
		title: 'Hot Deals',
		linkCategory: '/categories/top-deals'
	}
	const contentTopRated = {
		image: './assets/home/img-top-rated.png',
		imageMobile: './assets/home/img-top-rated-mobile.png',
		title: 'Top Rated',
		linkCategory: '/categories/top-rated'
	}

	return (
		<main>
			<div className={`sticky top-0 left-0 right-0 bg-neutral-1 shadow-black1 md:shadow-none z-50`}>
				<Header />
				<Menu />
			</div>
			<div className='max-w-[1360px] mx-auto overflow-hidden'>
				<Banner />
			</div>
			<div className='bg-neutral-2 py-2.5 lg:py-[40px]'>
				<div className='max-w-[1360px] mx-auto overflow-hidden'>
					<CategoriesHome />
					<HotDeals data={listProduct} content={contentHotDeal} />
					<SliderHome />
					<HotDeals data={listProduct} content={contentTopRated} />
					<Pioneering />
					<NewsHome />
				</div>
			</div>
			<AboutHome />
			<Footer />
		</main>
	)
}
