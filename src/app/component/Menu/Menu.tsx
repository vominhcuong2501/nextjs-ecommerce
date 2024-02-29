import Link from 'next/link'
import ModalPhone from '../ModalPhone'
import ModalUser from '../ModalUser'
import PATH_NAME from '@/app/constans/pathname'

export default function Menu() {
	return (
		<div className='py-4 bg-orange-top-yellow-bottom hidden md:block'>
			<div className='max-w-[1360px] mx-auto '>
				<div className='flex items-center justify-between'>
					<ul className={` flex items-center  `}>
						<li className='group relative border-r border-neutral-1 px-4'>
							<Link
								href={PATH_NAME.CATEGORIES}
								title='Categories'
								target='_self'
								className={`text-neutral-1 text-16 lg:text-18 font-semibold leading-1-4 group transition-all duration-200 relative before:absolute before:content-[""] before:h-0.5 before:w-0 before:bg-neutral-1 before:-bottom-1 before:rounded before:left-1/2 before:right-1/2 before:transition-all before:duration-200 group-hover:before:w-full group-hover:before:left-0 group-hover:before:right-0`}
							>
								Categories
							</Link>
						</li>
						<li className='group relative border-r border-neutral-1 px-4'>
							<Link
								href={PATH_NAME.ABOUT_US}
								title='About Us'
								target='_self'
								className={`text-neutral-1 text-16 lg:text-18 font-semibold leading-1-4 group transition-all duration-200 relative before:absolute before:content-[""] before:h-0.5 before:w-0 before:bg-neutral-1 before:-bottom-1 before:rounded before:left-1/2 before:right-1/2 before:transition-all before:duration-200 group-hover:before:w-full group-hover:before:left-0 group-hover:before:right-0`}
							>
								About Us
							</Link>
						</li>
						<li className='group relative px-4'>
							<Link
								href={PATH_NAME.CONTACT_US}
								title='Contact Us'
								target='_self'
								className={`text-neutral-1 text-16 lg:text-18 font-semibold leading-1-4 group transition-all duration-200 relative before:absolute before:content-[""] before:h-0.5 before:w-0 before:bg-neutral-1 before:-bottom-1 before:rounded before:left-1/2 before:right-1/2 before:transition-all before:duration-200 group-hover:before:w-full group-hover:before:left-0 group-hover:before:right-0`}
							>
								Contact Us
							</Link>
						</li>
					</ul>
					<div className='flex items-center gap-4 px-4'>
						<ModalPhone />
						<ModalUser />
					</div>
				</div>
			</div>
		</div>
	)
}
