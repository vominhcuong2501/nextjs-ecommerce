'use client'
import useUpdateTheme from '@/lib/store/client/updateTheme'
import useShowSidebarMenu from '@/lib/store/client/useShowSidebarMenu'

export default function ButtonSidebarMenu() {
	const { isShowSidebarMenu, updateIsShowSidebarMenu } = useShowSidebarMenu()
	const { isTheme } = useUpdateTheme()

	return (
		<button
			aria-label='Toggle menu'
			className={`flex items-center gap-2 border border-transparent  cursor-pointer focus:outline-none p-[11px] rounded-md ${
				isTheme === 'white' ? 'hover:border-neutral-9' : 'hover:border-neutral-1'
			} ${isShowSidebarMenu && '!border-neutral-9'}`}
			onClick={() => updateIsShowSidebarMenu(!isShowSidebarMenu)}
		>
			<p className='h-5 w-5 flex flex-col justify-around items-center bg-transparent border-none p-0 cursor-pointer focus:outline-none'>
				<span
					className={`block w-full h-0.5 ${
						isTheme === 'white' ? 'bg-neutral-9' : 'bg-neutral-1'
					} transform transition duration-300 ease-in-out ${isShowSidebarMenu ? 'rotate-45 translate-y-[6.8px]' : ''}`}
				></span>
				<span
					className={`block w-full h-0.5 ${
						isTheme === 'white' ? 'bg-neutral-9' : 'bg-neutral-1'
					} transition-all duration-300 ease-in-out ${isShowSidebarMenu ? 'opacity-0' : 'opacity-100'}`}
				></span>
				<span
					className={`block w-full h-0.5 ${
						isTheme === 'white' ? 'bg-neutral-9' : 'bg-neutral-1'
					} transform transition duration-300 ease-in-out ${
						isShowSidebarMenu ? '-rotate-45 -translate-y-[6.8px]' : ''
					}`}
				></span>
			</p>
		</button>
	)
}
