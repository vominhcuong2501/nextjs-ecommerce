'use client'
import { useMounted } from '@/lib/hooks/useMounted'
import Header from './component/Header'
import Topbar from './component/Topbar'
import SidebarMenu from './component/SidebarMenu'
import useShowSidebarMenu from '@/lib/store/client/useShowSidebarMenu'
import useUpdateTheme from '@/lib/store/client/updateTheme'

export default function Home() {
	const isMounted = useMounted()
	const { isShowSidebarMenu, updateIsShowSidebarMenu } = useShowSidebarMenu()
	const { isTheme } = useUpdateTheme()

	return (
		<main>
			{isMounted && (
				<>
					<div
						className={`sticky top-0 left-0 right-0 ${
							isTheme === 'white' ? 'shadow-black1 bg-white' : 'shadow-black7 bg-black'
						}`}
					>
						<div
							className={`${isTheme === 'white' ? 'shadow-black1 bg-white' : 'shadow-black7 bg-black'} hidden md:block`}
						>
							<Topbar />
						</div>
						<Header />
					</div>

					<div
						className={`fixed top-0 transition-all duration-300 h-screen ${
							isShowSidebarMenu ? 'left-0 !z-50' : '-left-[150vw]'
						}`}
					>
						<SidebarMenu />
					</div>
					{isShowSidebarMenu && (
						<div
							className={`fixed top-0 transition-all duration-300 w-screen h-screen bg-neutral-9 opacity-80  z-30`}
							onClick={() => updateIsShowSidebarMenu(false)}
						></div>
					)}
				</>
			)}
		</main>
	)
}
