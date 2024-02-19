import { useEffect, useState } from 'react'
import useUpdateTheme from '../store/client/updateTheme'

export default function useDarkMode(): [string, React.Dispatch<React.SetStateAction<string>>] {
	const { isTheme, updateIsTheme } = useUpdateTheme()

	const [theme, setTheme] = useState<string>(String(isTheme))

	const colorTheme = theme === 'black' ? 'white' : 'black'

	useEffect(() => {
		const root = window.document.documentElement
		root.classList.remove(colorTheme)
		root.classList.add(theme || '')
		updateIsTheme(theme)
	}, [theme, colorTheme])

	return [colorTheme, setTheme]
}
