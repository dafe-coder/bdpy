import React from 'react'
import { useLocation } from 'react-router-dom'
import { LatestNews } from './../../Components/LatestNews/LatestNews'
import { fetchNewsOpen } from '../../redux/slices/NewsOpenSlice'
import { useDispatch, useSelector } from 'react-redux'

export const NewsOpen = () => {
	const { state } = useLocation()
	const dispatch = useDispatch()
	const { newsOpenData } = useSelector((state) => state.newsOpen)
	React.useEffect(() => {
		if (state && state.id) {
			dispatch(fetchNewsOpen(state.id))
		}
		window.scrollTo(0, 0)
	}, [state, dispatch])

	return (
		<>
			<section className='resources-main-s'>
				<div className='container'>
					<div className='resources-main'>
						<h1>Останні оновлення</h1>
					</div>
				</div>
			</section>
			<section className='news-open-info-s'>
				<div className='container'>
					{newsOpenData !== null ? (
						<div className='news-open-info'>
							<h4>{newsOpenData.title}</h4>
							<p className='par publish-date'>Опубліковано 17.04.2023</p>
							<div
								dangerouslySetInnerHTML={{
									__html: newsOpenData.content,
								}}></div>
						</div>
					) : (
						<></>
					)}
				</div>
			</section>
			<LatestNews />
		</>
	)
}
