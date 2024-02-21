import { create } from 'zustand'

interface ShowSidebarMenuProps {
	isShowSidebarMenu: boolean
	updateIsShowSidebarMenu: (value: boolean) => void
}

const useShowSidebarMenu = create<ShowSidebarMenuProps>()((set) => ({
	isShowSidebarMenu: false,
	updateIsShowSidebarMenu: (value: boolean) => set({ isShowSidebarMenu: value })
}))

export default useShowSidebarMenu
