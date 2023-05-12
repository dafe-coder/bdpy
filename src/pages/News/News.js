import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchNews } from './../../redux/slices/NewsSlice'
import { NewsItem } from '../../Components'

export const News = () => {
	const { newsList } = useSelector((state) => state.news)
	const dispatch = useDispatch()
	React.useEffect(() => {
		console.log(newsList)
	}, [newsList])
	React.useEffect(() => {
		dispatch(fetchNews())
	}, [dispatch])
	return (
		<>
			<section className='resources-main-s'>
				<div className='container'>
					<div className='resources-main'>
						<h1>Останні оновлення</h1>
					</div>
				</div>
			</section>
			<section className='news-s'>
				<div className='container'>
					<div className='news'>
						<ul className='news-list'>
							{newsList.length &&
								newsList.map((item) => (
									<NewsItem
										id={item.id}
										key={item.id}
										par={item.content}
										img={item.img}
										title={item.title}
									/>
								))}
						</ul>
					</div>
				</div>
			</section>
		</>
	)
}
