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

export const About = () => {
	const dispatch = useDispatch()
	const { accordion, universityStatistics } = useSelector(
		(state) => state.about
	)

	React.useEffect(() => {
		dispatch(fetchAboutUs())
	}, [dispatch])

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
								<img
									style={{ objectFit: 'cover', height: '100%' }}
									src={imgUniver}
									alt='BSPY'
								/>
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
								{universityStatistics.map((item) => (
									<li>
										<span>{item.quantity}</span>
										<span>{item.title}</span>
									</li>
								))}
							</ul>
							<a href='!#'>
								<SvgIcon type='circle-with-arrow' />
								<span>Показати більше досягнень </span>
							</a>
						</div>
					</div>
				</div>
			</section>
			<LatestNews />
		</>
	)
}
