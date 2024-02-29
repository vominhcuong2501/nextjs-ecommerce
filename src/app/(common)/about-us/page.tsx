import React from 'react'
import BannerAboutUs from './component/BannerAboutUs'
import MissionVisionValues from './component/MissionVisionValues'
import PeopleLiked from './component/PeopleLiked'
import Achievement from './component/Achievement'
import SupportAnswer from './component/SupportAnswer'

export default function AboutUs() {
	return (
		<section>
			<BannerAboutUs />
			<MissionVisionValues />
			<PeopleLiked />
			<Achievement />
			<SupportAnswer />
		</section>
	)
}
