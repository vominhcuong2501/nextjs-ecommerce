'use client'
import useUpdateTheme from '@/lib/store/client/updateTheme'
import useShowSidebarMenu from '@/lib/store/client/useShowSidebarMenu'

export default function ButtonSidebarMenu() {
	const { isShowSidebarMenu, updateIsShowSidebarMenu } = useShowSidebarMenu()

	return (
		<button
			aria-label='Toggle menu'
			className={`flex items-center gap-2 border border-neutral-9 p-2 rounded-full  cursor-pointer focus:outline-none hover:border-orange-11 group transform transition duration-300`}
			onClick={() => updateIsShowSidebarMenu(!isShowSidebarMenu)}
		>
			<p className='h-5 w-5 flex flex-col justify-around items-center bg-transparent border-none p-0 cursor-pointer focus:outline-none '>
				<span
					className={`group-hover:bg-orange-11 block w-full h-0.5 bg-neutral-9 transform transition duration-300 ease-in-out ${
						isShowSidebarMenu ? 'rotate-45 translate-y-[6.8px]' : ''
					}`}
				></span>
				<span
					className={`group-hover:bg-orange-11 block w-full h-0.5 bg-neutral-9 transition-all duration-300 ease-in-out ${
						isShowSidebarMenu ? 'opacity-0 ' : 'opacity-100'
					}`}
				></span>
				<span
					className={`group-hover:bg-orange-11 block w-full h-0.5 bg-neutral-9 transform transition duration-300 ease-in-out ${
						isShowSidebarMenu ? '-rotate-45 -translate-y-[6.8px]' : ''
					}`}
				></span>
			</p>
		</button>
	)
}
