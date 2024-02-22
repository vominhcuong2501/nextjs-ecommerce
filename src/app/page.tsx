import Header from './component/Header'
import Topbar from './component/Topbar'

export default function Home() {
	return (
		<main>
			<div>
				<Topbar />
			</div>
			<div className='sticky top-0 left-0 right-0 shadow-md backdrop-blur-sm'>
				<Header />
			</div>
		</main>
	)
}
