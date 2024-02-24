'use client'
import Link from 'next/link'
import { useMounted } from '@/lib/hooks/useMounted'
import useUpdateTheme from '@/lib/store/client/updateTheme'

export default function Menu() {
	const { isTheme } = useUpdateTheme()
	const isMounted = useMounted()

	return (
		<>
			{isMounted && (
				<ul className={`max-w-[768px] mx-auto flex items-center justify-between gap-7 lg:gap-10 p-4 `}>
					<li className='group relative'>
						<Link
							href='/product'
							title='Product'
							target='_self'
							className={`text-${
								isTheme === 'white' ? 'neutral-9' : 'neutral-1'
							} text-20 font-bold leading-1-4 group group-hover:text-orange-11 transition-all duration-200 relative before:absolute before:content-[""] before:h-0.5 before:w-0 before:bg-orange-11 before:bottom-0 before:rounded before:left-1/2 before:right-1/2 before:transition-all before:duration-300 group-hover:before:w-full group-hover:before:left-0 group-hover:before:right-0`}
						>
							Product
						</Link>
						<span className=''></span>
					</li>
					<li className='group relative'>
						<Link
							href='/about'
							title='About'
							target='_self'
							className={`text-${
								isTheme === 'white' ? 'neutral-9' : 'neutral-1'
							} text-20 font-bold leading-1-4 group group-hover:text-orange-11 transition-all duration-200 relative before:absolute before:content-[""] before:h-0.5 before:w-0 before:bg-orange-11 before:bottom-0 before:rounded before:left-1/2 before:right-1/2 before:transition-all before:duration-300 group-hover:before:w-full group-hover:before:left-0 group-hover:before:right-0`}
						>
							About
						</Link>
					</li>
					<li className='group relative'>
						<Link
							href='/contact'
							title='Contact'
							target='_self'
							className={`text-${
								isTheme === 'white' ? 'neutral-9' : 'neutral-1'
							} text-20 font-bold leading-1-4 group group-hover:text-orange-11 transition-all duration-200 relative before:absolute before:content-[""] before:h-0.5 before:w-0 before:bg-orange-11 before:bottom-0 before:rounded before:left-1/2 before:right-1/2 before:transition-all before:duration-300 group-hover:before:w-full group-hover:before:left-0 group-hover:before:right-0`}
						>
							Contact
						</Link>
					</li>
					<li className='group relative'>
						<Link
							href='/learn'
							title='Learn'
							target='_self'
							className={`text-${
								isTheme === 'white' ? 'neutral-9' : 'neutral-1'
							} text-20 font-bold leading-1-4 group group-hover:text-orange-11 transition-all duration-200 relative before:absolute before:content-[""] before:h-0.5 before:w-0 before:bg-orange-11 before:bottom-0 before:rounded before:left-1/2 before:right-1/2 before:transition-all before:duration-300 group-hover:before:w-full group-hover:before:left-0 group-hover:before:right-0`}
						>
							Learn
						</Link>
					</li>
					<li className='group relative cursor-pointer'>
						<Link
							href='/promotion'
							title='Promotion'
							target='_self'
							className={`text-${
								isTheme === 'white' ? 'neutral-9' : 'neutral-1'
							} text-20 font-bold leading-1-4 group group-hover:text-orange-11 transition-all duration-200 relative before:absolute before:content-[""] before:h-0.5 before:w-0 before:bg-orange-11 before:bottom-0 before:rounded before:left-1/2 before:right-1/2 before:transition-all before:duration-300 group-hover:before:w-full group-hover:before:left-0 group-hover:before:right-0`}
						>
							Promotion
						</Link>
					</li>
				</ul>
			)}
		</>
	)
}
