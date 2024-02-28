'use client'
import NextTopLoader from 'nextjs-toploader'

const NextTopLoaderClient = () => {
	return (
		<NextTopLoader
			color='#F88C19'
			initialPosition={0.08}
			crawlSpeed={200}
			height={3}
			crawl={true}
			showSpinner={false}
			easing='ease'
			speed={200}
		/>
	)
}

export default NextTopLoaderClient
