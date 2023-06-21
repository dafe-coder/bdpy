import React from 'react'
import { LatestNews } from '../../Components'
import { AccordionBlock } from './../../Components/Accordion/Accordion'
import imgUniver from '../../assets/img/univer.png'
import { fetchAboutUs } from '../../redux/slices/AboutSlice'
import { useDispatch, useSelector } from 'react-redux'
import img1 from '../../assets/img/achievement/Rectangle 19.png'
import img2 from '../../assets/img/achievement/Rectangle 21.png'
import img3 from '../../assets/img/achievement/Rectangle 20.png'
import img4 from '../../assets/img/achievement/Rectangle 22.png'
import img5 from '../../assets/img/achievement/Rectangle 17.png'
import img6 from '../../assets/img/achievement/Rectangle 23.png'
import { SvgIcon } from './../../Svgs/Svg'
import cn from 'classnames'
const showStatisticsCount = 2

export const About = () => {
	const dispatch = useDispatch()
	const { accordion, universityStatistics } = useSelector(
		(state) => state.about
	)
	const [lengthSt, setLengthSt] = React.useState(showStatisticsCount)

	React.useEffect(() => {
		dispatch(fetchAboutUs())
	}, [dispatch])

	React.useEffect(() => {
		if (universityStatistics.length) {
			setLengthSt(showStatisticsCount)
		}
	}, [universityStatistics])

	const onOpenStatistic = (e) => {
		e.preventDefault()
		if (lengthSt === showStatisticsCount) {
			setLengthSt(universityStatistics.length)
		} else {
			setLengthSt(showStatisticsCount)
		}
	}

	return (
		<>
			<section className='about-main-s'>
				<div className='container'>
					<div className='about-main'>
						<h1>Про університет</h1>
					</div>
				</div>
			</section>
			<section className='about-s'>
				<div className='container'>
					<div className='about'>
						<div className='about-info-address'>
							<p className='par-sm'>
								Університет тимчасово переміщений до м. Запоріжжя, вул.
								Жуковського, 66
							</p>
						</div>
						<div className='about-block'>
							<div className='about-block__left'>
								<AccordionBlock data={accordion} />
							</div>
							<div className='about-block__right'>
								{' '}
								<img src={imgUniver} alt='BSPY' />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='achievement-s bg-brown'>
				<div className='achievement-img'>
					<img src={img1} alt='1' />
					<img src={img2} alt='2' />
					<img src={img3} alt='3' />
					<img src={img4} alt='4' />
					<img src={img5} alt='5' />
					<img src={img6} alt='6' />
				</div>
				<div className='container'>
					<div className='achievement'>
						<h2 className='big'>
							БДПУ – це не тільки про підготовку майбутніх педагогів:
						</h2>
						<div className='achievement-block'>
							<ul>
								{universityStatistics.map((item, i) => {
									if (i <= lengthSt) {
										return (
											<li key={i}>
												<span>{item.quantity}</span>
												<span>{item.title}</span>
											</li>
										)
									} else {
										return false
									}
								})}
							</ul>
							<a
								href='!#'
								className={cn({
									//eslint-disable-next-line
									['active']: lengthSt !== showStatisticsCount,
								})}
								onClick={(e) => onOpenStatistic(e)}>
								<SvgIcon type='circle-with-arrow' />
								{lengthSt === showStatisticsCount ? (
									<span>Показати більше досягнень </span>
								) : (
									<span>Приховати</span>
								)}
							</a>
						</div>
					</div>
				</div>
			</section>
			<LatestNews />
		</>
	)
}
