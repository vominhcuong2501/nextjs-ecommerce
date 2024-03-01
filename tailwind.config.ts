import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontSize: {
				10: '10px',
				12: '12px',
				14: '14px',
				16: '16px',
				18: '18px',
				20: '20px',
				22: '22px',
				24: '24px',
				26: '26px',
				28: '28px',
				30: '30px',
				32: '32px',
				34: '34px',
				36: '36px',
				38: '38px',
				40: '40px',
				44: '44px',
				48: '48px',
				64: '64px'
			},
			boxShadow: {
				primary: '0px 4px 16px 0px rgba(0, 0, 0, 0.20)',
				secondary: '0px 2px 8px 0px rgba(0, 0, 0, 0.10)',
				black1: '0 2px 8px 0 rgba(0, 0, 0, 0.1)',
				black2: '0 4px 20px 0 rgba(0, 0, 0, 0.1)',
				black3: '0px 2px 2px 0px rgba(0, 0, 0, 0.04)',
				black4: '0px 2px 8px 0px rgba(73, 73, 73, 0.08)',
				black5: '0px -2px 6px 0px rgba(0, 0, 0, 0.15)',
				black6: '0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)',
				black7: '0 2px 8px 0 rgba(255, 255, 255, 1)',
				black8: '0 0 4px 0 rgba(0, 0, 0, 0.17)'
			},
			colors: {
				'bg-primary': '#F6F6F6',
				red: {
					1: '#E60000',
					2: '#FBD2D3',
					3: '#F8A6A7',
					4: '#F4797C',
					5: '#F14D50',
					6: '#FFE6E6',
					7: '#C20000',
					8: '#800016',
					9: '#5D0000',
					10: '#490000'
				},
				blue: {
					1: '#F1FDFF',
					2: '#C1F5FF',
					3: '#73E9FE',
					4: '#01D5FB',
					5: '#09A6F3',
					6: '#0C63E7',
					7: '#0D41E1',
					8: '#0134AA',
					9: '#002884',
					10: '#000052',
					11: '#2B3481',
					12: '#802dff',
					13: '#0075FF',
					14: '#7fe2f3',
					15: '#22c1c3',
					16: '#00fdff',
					17: '#E6EFFD',
					18: '#1C61FF'
				},
				orange: {
					1: '#FFC20E',
					2: '#FDB411',
					3: '#FCAA13',
					4: '#FAA015',
					5: '#F99B2F',
					6: '#F88C19',
					7: '#F6811B',
					8: '#F57729',
					9: '#F26122',
					10: '#F15623',
					11: '#ff7207',
					12: '#FBE4D3',
					13: '#ffebdc'
				},
				green: {
					1: '#B6D179',
					2: '#98C66A',
					3: '#94D355',
					4: '#89D141',
					5: '#7CC342',
					6: '#7AC043',
					7: '#69AD45',
					8: '#5EA047',
					9: '#429625',
					10: '#008D48'
				},
				neutral: {
					1: 'var(--general-ffffff, #FFF)',
					2: 'var(--general-f-6-f-6-f-6, #F6F6F6)',
					3: 'var(--general-f-1-f-1-f-1, #F1F1F1)',
					4: 'var(--general-eaeaea, #EAEAEA)',
					5: 'var(--general-dddddd, #DDD)',
					6: 'var(--general-acacac, #ACACAC)',
					7: 'var(--general-767676, #767676)',
					8: 'var(--general-363636, #363636)',
					9: 'var(--general-262626, #262626)',
					10: 'var(--color-neutral-color-global-black, #000)',
					11: 'var(-general-bbbbbb, #bbbbbb)'
				},
				semantic: {
					1: 'var(--color-semantic-information, #09A6F3)',
					2: 'var(--color-semantic-error, #E60000)',
					3: 'var(--color-semantic-warning, #FCAA13)',
					4: 'var(--color-semantic-success, #429625)'
				},
				background: {
					1: '#EBFFEB',
					2: 'var(--color-background-light-red, #FFEBEB)',
					3: 'var(--color-background-light-blue, #E7F6FF)',
					4: '#FFF6EB',
					5: '#F6F6F6',
					6: '#F9FAFC',
					7: 'rgba(163, 205, 207, 0.5)',
					8: 'rgba(129, 129, 129, 0.8)',
					9: '#090D2E',
					10: '#1A1F37',
					11: 'rgba(59,58,60,.7)'
				},
				gray: {
					1: '#A0AEC0'
				}
			},
			lineHeight: {
				1: '1',
				'1-1': '1.1',
				'1-2': '1.2',
				'1-4': '1.4',
				'1-5': '1.5',
				2: '2'
			},
			backgroundImage: () => ({
				'text-gradient-blue': 'linear-gradient(0deg, rgba(34, 193, 195, 1) 25%, rgba(45, 122, 253, 1) 100%)',
				'orange-top-yellow-bottom': 'linear-gradient(0deg, rgba(240,175,33,0.9) 0%, rgba(255,114,7,0.7) 100%);',
				'about-home':
					'linear-gradient(160deg, rgba(255,224,222,1) 0%, rgba(240,230,254,1) 40%, rgba(219,236,255,1) 100%)',
				'color-footer':
					'linear-gradient(163deg, rgba(255,227,201,1) 0%, rgba(255,255,255,1) 50%, rgba(255,247,234,1) 100%)',
				'about-us': 'linear-gradient(180deg, rgba(176,255,237,0.9023984593837535) 0%, rgba(255,255,255,1) 80%)',
				'people-liked':
					'linear-gradient(0deg, rgba(255,245,169,1) 0%, rgba(251,255,209,0.9) 50%, rgba(255,255,255,0.9) 100%);',
				'contact-us':
					'linear-gradient(180deg, rgba(137,248,255,1) 0%, rgba(170,255,246,0.804359243697479) 50%, rgba(255,255,255,0.9192051820728291) 100%);'
			})
		},
		container: {
			center: true,
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1232px'
			},
			padding: {
				DEFAULT: '16px'
			}
		}
	},
	plugins: []
}
export default config
