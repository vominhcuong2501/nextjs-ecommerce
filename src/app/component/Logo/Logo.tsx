import styles from './logo.module.css'

export default function Logo() {
	return (
		<div className={`${styles['logo-neon']}`}>
			<span className={`${styles['logo-neon-green']} text-48 font-medium text-neutral-1`}>V</span>
			<span className={`${styles['logo-neon-red']} text-48 font-medium text-neutral-1 mr-2`}>M</span>
			<span className={`${styles['logo-neon-blue']} text-48 font-medium text-neutral-1`}>C</span>
		</div>
	)
}
