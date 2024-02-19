import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UpdateThemeProps {
	isTheme: string
	updateIsTheme: (value: string) => void
}

const useUpdateTheme = create<UpdateThemeProps>()(
	persist(
		(set) => ({
			isTheme: 'bg-neutral-1',
			updateIsTheme: (value: string) => set({ isTheme: value })
		}),
		{
			name: 'theme'
		}
	)
)

export default useUpdateTheme
