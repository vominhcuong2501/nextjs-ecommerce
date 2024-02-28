'use client'
import Image from 'next/image'
import { useDisplay } from '@/lib/hooks/useDisplay'

export default function Pioneering() {
	const isMobile = useDisplay(768)

	return (
		<div className='mt-2.5 lg:mt-10 p-4 grid grid-cols-2 lg:grid-cols-3 gap-2.5 lg:gap-5  bg-neutral-1 items-center xl:rounded-md px-4 '>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-1.5 items-center p-4 bg-neutral-2 rounded-md min-h-[183px] opacity-50 hover:opacity-100 transition-all duration-150 cursor-pointer group'>
				<Image
					src={'./assets/home/icon-global-reach.png'}
					alt='Global Reach'
					width={160}
					height={120}
					className='mx-auto'
					title='Global Reach'
					loading='lazy'
				/>
				<h3 className='text-14 lg:text-18 text-center lg:text-left font-bold leading-1-4 text-neutral-9'>
					Global Reach
				</h3>
			</div>
			<Image
				src={'./assets/home/img-pioneering-ecommerce.png'}
				alt='Pioneering The Future E-Commerce for Sale'
				width={460}
				height={414}
				title='Pioneering The Future E-Commerce for Sale'
				loading='lazy'
				className='row-start-2 col-span-2 lg:col-span-1 lg:row-span-2 mx-auto'
			/>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-1.5 items-center p-4 bg-neutral-2 rounded-md min-h-[183px] opacity-50 hover:opacity-100 transition-all duration-150 cursor-pointer group'>
				<Image
					src={'./assets/home/icon-marketing-opportunities.png'}
					alt='Marketing Opportunities'
					width={160}
					height={120}
					className='mx-auto'
					title='Marketing Opportunities'
					loading='lazy'
				/>
				<h3 className='text-14 lg:text-18 text-center lg:text-left font-bold leading-1-4 text-neutral-9'>
					Marketing Opportunities
				</h3>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-1.5 items-center p-4 bg-neutral-2 rounded-md min-h-[183px] opacity-50 hover:opacity-100 transition-all duration-150 cursor-pointer group'>
				<Image
					src={'./assets/home/icon-cost-effective.png'}
					alt='Cost Effective'
					width={160}
					height={120}
					className='mx-auto'
					title='Cost Effective'
					loading='lazy'
				/>
				<h3 className='text-14 lg:text-18 text-center lg:text-left font-bold leading-1-4 text-neutral-9'>
					Cost Effective
				</h3>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-1.5 items-center p-4 bg-neutral-2 rounded-md min-h-[183px] opacity-50 hover:opacity-100 transition-all duration-150 cursor-pointer group'>
				<Image
					src={'./assets/home/icon-increased-visibility.png'}
					alt='Increased Visibility'
					width={160}
					height={120}
					className='mx-auto'
					title='Increased Visibility'
					loading='lazy'
				/>
				<h3 className='text-14 lg:text-18 text-center lg:text-left font-bold leading-1-4 text-neutral-9'>
					Increased Visibility
				</h3>
			</div>
		</div>
	)
}
