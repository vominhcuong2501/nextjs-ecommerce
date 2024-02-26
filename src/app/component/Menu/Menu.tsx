import Link from 'next/link'
import ModalPhone from '../ModalPhone'
import ModalUser from '../ModalUser'

export default function Menu() {
	return (
		<div className='py-4 bg-orange-top-yellow-bottom hidden md:block'>
			<div className='max-w-[1360px] mx-auto '>
				<div className='flex items-center justify-between'>
					<ul className={` flex items-center  `}>
						<li className='group relative border-r border-neutral-1 px-2 lg:px-4'>
							<Link
								href='/categories'
								title='Categories'
								target='_self'
								className={`text-neutral-1 text-16 lg:text-18 font-semibold leading-1-4 group transition-all duration-200 relative before:absolute before:content-[""] before:h-0.5 before:w-0 before:bg-neutral-1 before:-bottom-1 before:rounded before:left-1/2 before:right-1/2 before:transition-all before:duration-200 group-hover:before:w-full group-hover:before:left-0 group-hover:before:right-0`}
							>
								Categories
							</Link>
						</li>
						<li className='group relative border-r border-neutral-1 px-2 lg:px-4'>
							<Link
								href='/about'
								title='About'
								target='_self'
								className={`text-neutral-1 text-16 lg:text-18 font-semibold leading-1-4 group transition-all duration-200 relative before:absolute before:content-[""] before:h-0.5 before:w-0 before:bg-neutral-1 before:-bottom-1 before:rounded before:left-1/2 before:right-1/2 before:transition-all before:duration-200 group-hover:before:w-full group-hover:before:left-0 group-hover:before:right-0`}
							>
								About Us
							</Link>
						</li>
						<li className='group relative border-r border-neutral-1 px-2 lg:px-4'>
							<Link
								href='/contact'
								title='Contact'
								target='_self'
								className={`text-neutral-1 text-16 lg:text-18 font-semibold leading-1-4 group transition-all duration-200 relative before:absolute before:content-[""] before:h-0.5 before:w-0 before:bg-neutral-1 before:-bottom-1 before:rounded before:left-1/2 before:right-1/2 before:transition-all before:duration-200 group-hover:before:w-full group-hover:before:left-0 group-hover:before:right-0`}
							>
								Contact Us
							</Link>
						</li>
						<li className='group relative border-r border-neutral-1 px-2 lg:px-4'>
							<Link
								href='/news'
								title='News'
								target='_self'
								className={`text-neutral-1 text-16 lg:text-18 font-semibold leading-1-4 group transition-all duration-200 relative before:absolute before:content-[""] before:h-0.5 before:w-0 before:bg-neutral-1 before:-bottom-1 before:rounded before:left-1/2 before:right-1/2 before:transition-all before:duration-200 group-hover:before:w-full group-hover:before:left-0 group-hover:before:right-0`}
							>
								News
							</Link>
						</li>
						<li className='group relative px-2 lg:px-4 cursor-pointer'>
							<Link
								href='/promotion'
								title='Promotion'
								target='_self'
								className={`text-neutral-1 text-16 lg:text-18 font-semibold leading-1-4 group transition-all duration-200 relative before:absolute before:content-[""] before:h-0.5 before:w-0 before:bg-neutral-1 before:-bottom-1 before:rounded before:left-1/2 before:right-1/2 before:transition-all before:duration-200 group-hover:before:w-full group-hover:before:left-0 group-hover:before:right-0`}
							>
								Promotion
							</Link>
						</li>
					</ul>
					<div className='flex items-center gap-4 px-2 lg:px-4'>
						<ModalPhone />
						<ModalUser />
					</div>
				</div>
			</div>
		</div>
	)
}
