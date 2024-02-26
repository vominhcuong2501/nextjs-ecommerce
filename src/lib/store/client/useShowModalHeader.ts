import { create } from 'zustand'

interface useShowModalHeaderProps {
	isShowPhone: boolean
	updateIsShowPhone: (value: boolean) => void
	isShowUser: boolean
	updateIsShowUser: (value: boolean) => void
	isShowLang: boolean
	updateIsShowLang: (value: boolean) => void
}

const useShowModalHeader = create<useShowModalHeaderProps>()((set) => ({
	isShowPhone: false,
	updateIsShowPhone: (value: boolean) => set({ isShowPhone: value }),
	isShowUser: false,
	updateIsShowUser: (value: boolean) => set({ isShowUser: value }),
	isShowLang: false,
	updateIsShowLang: (value: boolean) => set({ isShowLang: value })
}))

export default useShowModalHeader
