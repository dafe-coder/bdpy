import React from 'react'
import { useSelector } from 'react-redux'
import { NewsItem } from '../'

export const LatestNews = () => {
	const { latestNews } = useSelector((state) => state.api)
	return (
		<section className='last-news-s'>
			<div className='container'>
				<div className='last-news'>
					<h2>Останні оновлення</h2>
					<ul className='news-list'>
						{latestNews.length &&
							latestNews.map((item) => (
								<NewsItem
									id={item.id}
									key={item.id}
									img={item.img}
									par={item.content}
									title={item.title}
								/>
							))}
					</ul>
				</div>
			</div>
		</section>
	)
}
