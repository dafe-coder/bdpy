import React from 'react'
import videoBg from '../../assets/img/shef.png'
import { EventsList, EventNav, LatestNews, Questions } from '../../Components'
import { Link } from 'react-router-dom'
export const Main = () => {
	return (
		<div className='content'>
			<section className='main-s'>
				<div className='container'>
					<div className='main'>
						<h1>
							Обираючи майбутнє <br />― обирай БДПУ!
						</h1>
						<p className='par'>
							Тимчасово переміщені – назавжди міцні та нескорені!
						</p>
						<img className='video' src={videoBg} alt='alt' />
						<ul className='main-nav'>
							<li>
								{' '}
								<Link to='/about'>Про університет </Link>
							</li>
							<li>
								<a href='./info-programs'>Освітні програми</a>
							</li>
							<li>
								{' '}
								<a href='!#'>Правила вступу</a>
							</li>
							<li>
								{' '}
								<a href='./resources'>Ресурси для вступників</a>
							</li>
							<li>
								{' '}
								<a href='!#'>Зарахування на навчання</a>
							</li>
							<li>
								{' '}
								<a href='./contacts'>Контакти</a>
							</li>
						</ul>
					</div>
				</div>
			</section>
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
			<Questions />
			<LatestNews />
		</div>
	)
}
