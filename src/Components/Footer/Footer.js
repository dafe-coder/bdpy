import React from 'react'
import { SvgIcon } from './../../Svgs/Svg'

export const Footer = () => {
	return (
		<footer className='footer-s'>
			<div className='container'>
				<div className='footer'>
					<h2 className='big'>
						Не знайшов потрібну інформацію? <br /> Ми з радістю допоможемо!
					</h2>
					<div className='footer-btns'>
						{' '}
						<a href='/contacts'>
							<SvgIcon type='circle-with-arrow' />
							<span>Напишіть нам</span>
						</a>
						<a href='tel:380961578947'>
							<SvgIcon type='circle-with-arrow' />
							<span>Зателефонуйте нам</span>
						</a>
					</div>
					<div className='footer-nav'>
						<ul>
							<li>Приймальня ректора:</li>
							<li>
								{' '}
								<a href='mailto:bdpu.zp@gmail.com'> bdpu.zp@gmail.com </a>
							</li>
							<li>
								{' '}
								<a href='mailto:rector_bdpu@ukr.net'> rector_bdpu@ukr.net </a>
							</li>
						</ul>
						<ul>
							<li>Приймальна комісія:</li>
							<li>
								{' '}
								<a href='tel:380961578947'> +380961578947</a>
							</li>
							<li>
								{' '}
								<a href='mailto:pkombdpu@gmail.com'> pkombdpu@gmail.com</a>
							</li>
						</ul>
						<ul>
							<li>Тимчасово переміщений до:</li>
							<li>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://goo.gl/maps/ZQRrTE4JHqaGFG5YA'>
									м. Запоріжжя,
								</a>
							</li>
							<li>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://goo.gl/maps/ZQRrTE4JHqaGFG5YA'>
									вул. Жуковського, 66
								</a>
							</li>
						</ul>
						<ul>
							<li>Юридична адреса:</li>
							<li>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://goo.gl/maps/diqys6ZUGDkcBnL27'>
									71100, Україна, Запорізька обл.,
								</a>
							</li>
							<li>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://goo.gl/maps/diqys6ZUGDkcBnL27'>
									м. Бердянськ, вул. Шмідта, 4
								</a>
							</li>
						</ul>
					</div>
					<div className='footer-bottom'>
						<p className='par'>© БДПУ Вступ 2023</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
