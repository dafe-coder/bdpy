import React from 'react'
import cn from 'classnames'
import styles from './goTelegram.module.scss'

export const GoTelegram = () => {
	return (
		<div className={cn(styles.wrap, 'bg-brown')}>
			<div className='container'>
				<h2>Доєднуйся до телеграм-каналу "Вступ 2023"</h2>
				<a href='https://t.me/bdpu_vstup'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='50'
						height='50'
						fill='none'
						viewBox='0 0 50 50'>
						<path
							fill='#fff'
							d='m32.688 25.719-4 4a.964.964 0 0 1-1.407 0 .964.964 0 0 1 0-1.407L29.563 26H18c-.563 0-1-.438-1-1 0-.594.438-1 1-1h11.563l-2.282-2.281a.964.964 0 0 1 0-1.407.964.964 0 0 1 1.407 0l4 4a.964.964 0 0 1 0 1.407Z'></path>
						<rect
							width='49'
							height='49'
							x='.5'
							y='.5'
							stroke='#fff'
							rx='24.5'></rect>
					</svg>
					<span>Доєднатись до каналу</span>
				</a>
			</div>
		</div>
	)
}
