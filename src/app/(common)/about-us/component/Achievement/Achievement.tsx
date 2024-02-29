'use client'
import React, { useEffect, useState } from 'react'

function CounterAnimation({
	initialValue,
	duration,
	countTo,
	isVisible
}: {
	initialValue: number
	duration: number
	countTo: number
	isVisible: boolean
}) {
	const [count, setCount] = useState(initialValue)

	useEffect(() => {
		let startTimestamp: number

		if (isVisible) {
			const animate = (timestamp: number): void => {
				if (!startTimestamp) startTimestamp = timestamp
				const elapsed = timestamp - startTimestamp

				if (elapsed < duration) {
					const progress = elapsed / duration
					const nextCount = Math.floor(initialValue + (countTo - initialValue) * progress)
					setCount(nextCount)
					requestAnimationFrame(animate)
				} else {
					setCount(countTo)
				}
			}

			requestAnimationFrame(animate)
		}

		return () => {}
	}, [duration, initialValue, isVisible])

	return <div className='counter'>{count?.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')}</div>
}

function Achievement() {
	const contentList = [
		{
			tn_number: 2019,
			tn_text: 'Founding Year'
		},
		{
			tn_number: 3000,
			tn_text: 'Active Users'
		},
		{
			tn_number: 4,
			tn_text: 'Offices'
		},
		{
			tn_number: 300,
			tn_text: 'Team Members'
		}
	]
	const [isAchievementVisible, setIsAchievementVisible] = useState(false)
	useEffect(() => {
		const handleScroll = () => {
			const achievementElement = document.querySelector('.achievement')
			if (!isAchievementVisible && achievementElement) {
				const rect = achievementElement.getBoundingClientRect()
				const windowHeight = window.innerHeight || document.documentElement.clientHeight
				if (rect.top >= 0 && rect.bottom <= windowHeight) {
					setIsAchievementVisible(true)
				}
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [isAchievementVisible])

	return (
		<div
			className='achievement py-[30px] lg:py-[60px]'
			style={{
				backgroundImage: 'url("./assets/about-us/bg-count-number.jpg")',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover'
			}}
		>
			<div className={`max-w-[1360px] mx-auto px-4 text-center`}>
				<h2 className='text-28 lg:text-44 font-bold leading-1-2 text-neutral-1'>Numbers speak louder than words</h2>
				<p className='text-14 lg:text-16 font-normal mt-2 lg:mt-4 leading-1-4 text-neutral-1'>
					Follow us on social media to discover how we became the successful papmall® of today.
				</p>
				<ul className={`grid grid-cols-2 lg:grid-cols-4  mt-[30px] lg:mt-10 xl:gap-6 gap-x-5 gap-y-4`}>
					{contentList?.map((item) => (
						<li
							key={item.tn_text}
							className={`shadow-secondary bg-neutral-1 rounded-2xl h-[120px] lg:h-[160px] px-[15px] flex flex-col justify-center items-center gap-y-1 lg:gap-y-4 `}
						>
							<h3 className='text-28 xl:text-44 font-semibold leading-1-2 text-red-1 flex items-center'>
								<CounterAnimation
									initialValue={0}
									duration={2000}
									countTo={item.tn_number}
									isVisible={isAchievementVisible}
								/>
							</h3>
							<p className='text-16 xl:text-18 font-semibold leading-1-4 text-neutral-8'>{item.tn_text}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
export default React.memo(Achievement)
