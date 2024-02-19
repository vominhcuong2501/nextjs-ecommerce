import useDarkMode from '@/lib/hooks/useTheme'
import { useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

export default function SwitchThemeButton() {
	const [colorTheme, setTheme] = useDarkMode()
	const [darkMode, setDarkMode] = useState(colorTheme === 'white' ? true : false)
	const toggleDarkMode = (checked: boolean) => {
		setTheme(colorTheme)
		setDarkMode(checked)
	}
	return (
		<>
			<DarkModeSwitch checked={darkMode} onChange={toggleDarkMode} size={30} />
		</>
	)
}
