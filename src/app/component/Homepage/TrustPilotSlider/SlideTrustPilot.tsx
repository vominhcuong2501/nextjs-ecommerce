'use client'

import Image from 'next/image'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export interface TrustPilotListProps {
	name: string
	url: string
	datePublished: string
	datePublishedConvert: string
	reviewTitle: string
	reviewBody: string
	ratingValue: number
}

export default function SlideTrustPilot() {
	const commentList: TrustPilotListProps[] = [
		{
			name: 'IKAM IKAM',
			url: 'https://www.trustpilot.com/reviews/63fed91c9b64b1bdaf658ea5',
			datePublished: '2023-01-03',
			datePublishedConvert: 'Mar 1, 2023',
			reviewTitle: 'To my experience sure I am feel happy…',
			reviewBody:
				'To my experience sure I am feel happy after my mistaken on wrongly given date coverage. Travelner team can soft my problem fast and great job. Thank you!',
			ratingValue: 5
		},
		{
			name: 'OrlanLlanos',
			url: 'https://www.trustpilot.com/reviews/644f920f746ca7dfea13f200',
			datePublished: '2023-05-01',
			datePublishedConvert: 'May 01, 2023',
			reviewTitle: 'An easy step-by-step process',
			reviewBody:
				'An easy step-by-step process. The traveller consultants are fast and friendly. The total cost is adequate.',
			ratingValue: 5
		},
		{
			name: 'Lester Jay Lester Jay',
			url: 'https://www.trustpilot.com/reviews/643ac4aa734f97e68f9e9eea',
			datePublished: '2023-04-16',
			datePublishedConvert: 'Apr 16, 2023',
			reviewTitle: 'Customer service is swift and friendly.',
			reviewBody: '',
			ratingValue: 5
		},
		{
			name: 'Lusanda Lusanda',
			url: 'https://www.trustpilot.com/reviews/641da86d1f08d0d0848ee596',
			datePublished: '2023-03-24',
			datePublishedConvert: 'Mar 24, 2023',
			reviewTitle: 'Very responsible and helpful to your…',
			reviewBody: 'Very responsible and helpful to your clients',
			ratingValue: 5
		},
		{
			name: 'Maurice Maurice',
			url: 'https://www.trustpilot.com/reviews/641195e11f08d0d08488fbec',
			datePublished: '2023-03-15',
			datePublishedConvert: 'Mar 15, 2023',
			reviewTitle: 'Daisy was very nice and efficient',
			reviewBody: 'Daisy was very nice and efficient. A good and quick service.',
			ratingValue: 5
		},
		{
			name: 'paul Stewart',
			url: 'https://www.trustpilot.com/reviews/63ffe3689b64b1bdaf664970',
			datePublished: '2023-03-28',
			datePublishedConvert: 'Mar 2, 2023',
			reviewTitle: 'Very quick service',
			reviewBody: 'Very quick service, no complaints',
			ratingValue: 5
		},
		{
			name: 'Juana Juana',
			url: 'https://www.trustpilot.com/reviews/64279933734f97e68f95493e',
			datePublished: '2023-04-01',
			datePublishedConvert: 'Apr 1, 2023',
			reviewTitle: 'GREAT',
			reviewBody: 'ITS BEEN GREAT',
			ratingValue: 5
		},
		{
			name: 'Ranut Ranut',
			url: 'https://www.trustpilot.com/reviews/641c2722b23781c8423441b1',
			datePublished: '2023-03-23',
			datePublishedConvert: 'Mar 23, 2023',
			reviewTitle: 'Very good and convenience',
			reviewBody: '',
			ratingValue: 5
		},
		{
			name: 'Yener',
			url: 'https://www.trustpilot.com/reviews/643fbc0f746ca7dfea0c5e1b',
			datePublished: '2023-04-19',
			datePublishedConvert: 'Apr 19, 2023',
			reviewTitle: 'Very fast and helpful',
			reviewBody: '',
			ratingValue: 5
		}
	]
	return (
		<>
			<Swiper
				slidesPerView={1.1}
				pagination={{
					type: 'fraction',
					renderFraction: function (currentClass, totalClass) {
						return (
							`<strong class="text-14 md:text-16 text-neutral-8 leading-1-4">0<span class="' +
              ${currentClass} +
              '"></span></strong>` +
							`<strong  class="text-14 md:text-16 text-neutral-7 leading-1-4"> / 0<span class="' +
              ${totalClass} +
              '"></span></strong>`
						)
					}
				}}
				navigation={{ nextEl: '.trust-pilot-arrow-left', prevEl: '.trust-pilot-arrow-right' }}
				modules={[Navigation, Pagination, Autoplay]}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false
				}}
				breakpoints={{
					768: {
						slidesPerView: 2
					}
				}}
				className='!pt-[30px] relative'
			>
				{commentList?.map((item, index) => (
					<SwiperSlide className='pl-1 pr-4 py-1 md:px-3' key={index}>
						<div className='px-4 py-2 shadow-secondary bg-neutral-1 rounded-2xl'>
							<div className='px-2 md:px-4 pt-4 mb-4'>
								<span className='text-32 font-bold leading-1-2'>“</span>
								<Link href={item.url} title={item.reviewTitle} target='_blank' rel='nofollow'>
									<h3 className='trustpilot-title-comment mb-2 text-14 lg:text-16 font-bold leading-1-4 text-neutral-8 md:min-h-[44px] hover:text-red-1'>
										{item.reviewTitle}
									</h3>
								</Link>
								<p className='trustpilot-comment mb-[1.125rem] md:mb-6 min-h-[68px] md:min-h-[138px] text-12 lg:text-14 font-normal leading-1-4 text-neutral-7'>
									{item.reviewBody}
								</p>
								<a
									href='https://www.trustpilot.com/review/travelner.com'
									target='_blank'
									rel='noopener noreferrer'
									title='Trust Pilot'
								>
									<Image
										src={`./assets/icon/icon-star-trustpilot.svg`}
										width='144'
										height='27'
										alt={item.ratingValue.toString()}
										title={item.ratingValue.toString()}
										loading='lazy'
									/>
								</a>
							</div>
							<div className='border-t border-t-[#EAEAEA] px-4 py-[10.5px] md:p-4 flex justify-between items-center'>
								<div>
									<Link href={item.url} title={item.reviewTitle} target='_blank' rel='nofollow'>
										<h4 className='text-14 md:text-16 leading-1-2 font-bold mb-[6px] text-neutral-8 hover:text-red-1'>
											{item.name}
										</h4>
									</Link>
									<p className='text-12 md:text-14 leading-1-4 text-neutral-7'>{item.datePublishedConvert}</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}
