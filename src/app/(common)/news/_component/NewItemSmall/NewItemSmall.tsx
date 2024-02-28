/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from 'next/image'
import Link from 'next/link'

type NewItemMainProps = {
	classNameContent?: string
	classNameTitle?: string
	classNameText?: string
	classNameParent?: string
	classNameDivText?: string
}

export default function NewItemSmall({
	classNameContent = '',
	classNameTitle = '',
	classNameText = '',
	classNameParent = '',
	classNameDivText = ''
}: NewItemMainProps) {
	return (
		<div className={`max-w-[433px] relative  group  ${classNameParent}`}>
			<Link href={`#`} target='_self' title='Article'>
				<Image
					src={'./assets/home/img-news.png'}
					alt='Article'
					title='Article'
					width={433}
					height={216}
					loading='lazy'
					className='rounded-xl object-fill object-center shadow-4 '
				/>
			</Link>
			<div className={`px-[22px] bg-transparent min-h-[127px] lg:min-h-[156px] ${classNameContent}`}>
				<div
					className={`bg-neutral-1 rounded-[14px] shadow-3 p-[18px] z-10 mx-auto relative -mt-[27px] lg:-mt-[40px] group ${classNameDivText}`}
				>
					<Link href={`#`} target='_self' title='Article'>
						<h3
							className={`text-12 lg:text-16 font-bold leading-1-4 text-neutral-7 text-limit-2-line group-hover:text-orange-11 text-limit-2-line ${classNameTitle}`}
						>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae aliquam quis vero sint fugit ea
							aperiam fugiat voluptate veritatis quisquam amet alias recusandae tempora autem ex, hic earum non
							repellendus.
						</h3>
						<p className='text-10 lg:text-12 font-normal leading-1-4 text-blue-7 mt-2 lg:mt-2'>28 Feb,2024 (GMT+7)</p>
						<p
							className={`text-10 lg:text-14 font-normal leading-1-4 text-gray-2 mt-2 lg:mt-3 text-limit-2-line ${classNameText}`}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolorum, doloribus minus veniam consectetur
							placeat ut atque et? Dolor consectetur rerum totam quam ipsum veniam maiores beatae eaque laboriosam.
							Esse?
						</p>
					</Link>
				</div>
			</div>
		</div>
	)
}
