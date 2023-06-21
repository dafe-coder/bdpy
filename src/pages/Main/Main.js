import React from 'react'
import videoBg from '../../assets/img/shef.png'
import {
	EventsList,
	EventNav,
	LatestNews,
	Questions,
	VideoPlayer,
	NewAdults,
	GoTelegram,
} from '../../Components'
import { Link } from 'react-router-dom'
import rotatePhoneImg from '../../assets/img/rotate_phone.png'

export const Main = () => {
	const [openVideoModal, setOpenVideoModal] = React.useState(false)

	return (
		<div className='content'>
			<VideoPlayer
				openVideoModal={openVideoModal}
				setOpenVideoModal={setOpenVideoModal}
			/>
			<section className='main-s'>
				<div className='container'>
					<div className='main'>
						<h1>
							Обираючи майбутнє <br />― обирай БДПУ!
						</h1>
						<p className='par'>
							Тимчасово переміщені <br className='br-mob' />–{' '}
							<br className='br-mob' />
							назавжди міцні та нескорені!
						</p>
						<img
							style={{ cursor: 'pointer' }}
							className='video'
							src={videoBg}
							alt='alt'
							onClick={() => setOpenVideoModal(true)}
						/>
						<ul className='main-nav'>
							<li>
								<Link to='/about'>Про університет </Link>
							</li>
							<li>
								<Link to='/info-programs/id=null'>Освітні програми</Link>
							</li>
							<li>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://bdpu.org.ua/entry-rules/'>
									Правила вступу
								</a>
							</li>
							<li>
								<Link to='/resources'>Ресурси для вступників</Link>
							</li>
							{/* <li>
								<Link to='!#'>Зарахування на навчання</Link>
							</li> */}
							<li>
								<Link to='/contacts'>Контакти</Link>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<div className='rotate-s'>
				<h5>Важливі дати</h5>
				<img
					src={rotatePhoneImg}
					className='rotate-img'
					alt='Повернiть телефон горизонтально'
				/>
				<p className='par'>
					Для оптимального відображення календаря, рекомендується повернути
					екран у горизонтальне положення. Дякуємо!
				</p>
			</div>
			<section className='important-date-s'>
				<div className='container'>
					<div className='important-date'>
						<div className='important-date__header'>
							<h2>Важливі дати</h2>
							<EventNav />
						</div>
						<EventsList />
					</div>
				</div>
			</section>
			<NewAdults />
			<Questions />
			<GoTelegram />
			<LatestNews />
		</div>
	)
}
