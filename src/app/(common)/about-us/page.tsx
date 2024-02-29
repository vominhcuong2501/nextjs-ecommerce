import React from 'react'
import BannerAboutUs from './component/BannerAboutUs'
import MissionVisionValues from './component/MissionVisionValues'
import PeopleLiked from './component/PeopleLiked'
import Achievement from './component/Achievement'

export default function AboutUs() {
	return (
		<section>
			<BannerAboutUs />
			<MissionVisionValues />
			<PeopleLiked />
			<Achievement />
		</section>
	)
}
