import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchNews } from './../../redux/slices/NewsSlice'
import { NewsItem } from '../../Components'
import { LoaderNews } from './../../Components/Loader/LoaderNews'

export const News = () => {
	const { newsList } = useSelector((state) => state.news)
	const dispatch = useDispatch()

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
						{newsList.length ? (
							<ul className='news-list'>
								{newsList.map((item) => (
									<NewsItem
										id={item.id}
										key={item.id}
										par={item.content}
										img={item.img}
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
		</>
	)
}
