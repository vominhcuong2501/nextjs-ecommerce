'use client'
import Header from './component/Header'
import SidebarMenu from './component/SidebarMenu'
import useShowSidebarMenu from '@/lib/store/client/useShowSidebarMenu'
import Menu from './component/Menu'
import { useDisplay } from '@/lib/hooks/useDisplay'
import MenuApp from './component/MenuMobile/MenuMobile'

export default function Home() {
	const { isShowSidebarMenu, updateIsShowSidebarMenu } = useShowSidebarMenu()

	const isMobile = useDisplay(768)

	return (
		<main>
			<div className={`sticky top-0 left-0 right-0 bg-white shadow-black1 md:shadow-none`}>
				<Header />
				<Menu />
			</div>

			<div
				className={`fixed top-0 transition-all duration-200 h-screen ${
					isShowSidebarMenu ? 'left-0 !z-50' : '-left-[150vw]'
				}`}
			>
				<SidebarMenu />
			</div>
			{isShowSidebarMenu && (
				<div
					className={`fixed top-0 transition-all duration-200 w-screen h-screen bg-neutral-9 opacity-80  z-30`}
					onClick={() => updateIsShowSidebarMenu(false)}
				></div>
			)}

			{isMobile && (
				<div className={`fixed bottom-0 left-0 right-0 bg-white shadow-black1 `}>
					<MenuApp />
				</div>
			)}
		</main>
	)
}
