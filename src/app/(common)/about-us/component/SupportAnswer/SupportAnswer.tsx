import PATH_NAME from '@/app/constans/pathname'
import Image from 'next/image'
import Link from 'next/link'

export default function SupportAnswer() {
	return (
		<div className='py-[30px] lg:py-[60px] max-w-[1360px] mx-auto px-4 '>
			<div className='rounded-2xl border-[3px] border-red-2 shadow-secondary pt-10 pb-5 lg:py-[50px] px-4 lg:px-8 flex items-center justify-between md:flex-row flex-col'>
				<div className='max-w-[380px] lg:max-w-[500px] md:text-left text-center mx-auto md:mx-0'>
					<h2 className='text-24 lg:text-32 font-bold leading-1-2 text-neutral-8'>
						Couldn't find an answer to your question?
					</h2>
					<p className='mt-4 text-14 lg:text-16 font-normal leading-1-4 text-neutral-8'>
						Our team of experienced support customer specialists is here to address your inquiries. Just click the
						button below and submit your question or get in touch with us.
					</p>
					<Link
						href={PATH_NAME.CONTACT_US}
						className='max-w-[221px] py-3 bg-red-1 rounded-full text-neutral-1 text-14 font-semibold text-center leading-1-4 lg:mt-8 mt-6 hover:opacity-80 flex items-center justify-center mx-auto md:mx-0'
						target='_self'
						title='Ask the experts'
					>
						Ask the experts
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6 ml-2'
						>
							<path strokeLinecap='round' strokeLinejoin='round' d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3' />
						</svg>
					</Link>
				</div>
				<div>
					<Image
						src={`./assets/about-us/img-question.jpg`}
						width='444'
						height='266'
						alt='Ask the experts'
						title='Ask the experts'
						loading='lazy'
						className='hidden lg:block'
					/>
					<Image
						src={`./assets/about-us/img-question-mb.jpg`}
						width='311'
						height='186'
						alt='Ask the experts'
						title='Ask the experts'
						loading='lazy'
						className='block lg:hidden mt-10'
					/>
				</div>
			</div>
		</div>
	)
}
