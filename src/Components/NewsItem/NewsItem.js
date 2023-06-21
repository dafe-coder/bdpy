import React from 'react'
import { Link } from 'react-router-dom'

export const NewsItem = ({ id, img, title, par }) => {
	return (
		<li className='news-item'>
			<Link to='/news-open' state={{ id }}>
				<div className='news-item__img'>
					<img src={img} alt='new1' />
				</div>
				<div className='news-item__info'>
					<h3>{title.length > 30 ? title.slice(0, 40) + '...' : title}</h3>
					<p className='par'>{par.slice(0, 50) + '...'}</p>
				</div>
			</Link>
		</li>
	)
}
