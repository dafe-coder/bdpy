import React from 'react'
import { useSelector } from 'react-redux'
import { NewsItem } from '../'
import { LoaderNews } from './../Loader/LoaderNews'

export const LatestNews = () => {
	const { latestNews, loading } = useSelector((state) => state.api)
	return (
		<section className='last-news-s'>
			<div className='container'>
				<div className='last-news'>
					<h2>Останні оновлення</h2>
					{!loading ? (
						<ul className='news-list'>
							{latestNews.map((item) => (
								<NewsItem
									id={item.id}
									key={item.id}
									img={item.img}
									par={item.content}
									title={item.title}
								/>
							))}
						</ul>
					) : (
						<div className='news-loader'>
							<LoaderNews />
							<LoaderNews />
							<LoaderNews />
							<LoaderNews />
						</div>
					)}
				</div>
			</div>
		</section>
	)
}
