'use client'
import Image from 'next/image'
import { useDisplay } from '@/lib/hooks/useDisplay'
import ProductItem from '../../ProductItem'
import { ProductItemProp } from '@/app/types/product'
import ButtonAnimation from '../../ButtonAnimation'
import Link from 'next/link'

interface HotDealsProps {
	data: ProductItemProp[]
	content: {
		image: string
		imageMobile: string
		title: string
		linkCategory: string
	}
}

export default function HotDeals({ data, content }: HotDealsProps) {
	const isMobile = useDisplay(768)

	return (
		<div className='mt-2.5 lg:mt-10 '>
			<Link href={content.linkCategory} title={content.title} target='_self'>
				<Image
					src={content.imageMobile}
					alt={content.title}
					width={375}
					height={66}
					title={content.title}
					loading='lazy'
					className='w-full block md:hidden'
				/>
				<Image
					src={content.image}
					alt={content.title}
					width={1360}
					height={240}
					title={content.title}
					loading='lazy'
					className='w-full hidden md:block'
				/>
			</Link>
			<div className='mt-5 md:mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5   px-4 xl:px-0'>
				{data?.map((item: ProductItemProp, index: number) => {
					if (isMobile) {
						return (
							index < 4 && (
								<div key={item.name}>
									<ProductItem item={item} />
								</div>
							)
						)
					} else {
						return (
							<div key={item.name}>
								<ProductItem item={item} />
							</div>
						)
					}
				})}
				<Link
					href={content.linkCategory}
					className='col-span-2 text-center block md:hidden'
					title='See More'
					target='_self'
				>
					<ButtonAnimation
						className={`text-orange-11  transition-all duration-200  bg-neutral-1 border-orange-11  !py-2 hover:border-transparent hover:text-neutral-1`}
						classHoverButton='bg-orange-top-yellow-bottom'
					>
						See More
					</ButtonAnimation>
				</Link>
			</div>
		</div>
	)
}
