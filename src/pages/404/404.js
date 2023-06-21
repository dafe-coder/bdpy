import React from 'react'
import { Link } from 'react-router-dom'
import { SvgIcon } from '../../Svgs/Svg'

export const Page404 = () => {
	return (
		<div className='page404-s'>
			<div className='page404--left'></div>
			<div className='page404--right'>
				<div className='error-par'>
					<span>Помилка</span>
					<span>404</span>
				</div>
				<h4>
					Вибачте, але ми не можемо знайти <br /> сторінку, яку ви шукаєте.
				</h4>
				<p className='par'>Будь ласка, скористайтеся навігацією вище.</p>
				<Link to='/'>
					<SvgIcon type='circle-with-arrow' fill='#000' />
					На головну сторінку
				</Link>
			</div>
		</div>
	)
}
