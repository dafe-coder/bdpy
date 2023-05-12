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
						<a href='!#'>
							<SvgIcon type='circle-with-arrow' />
							<span>Напишіть нам</span>
						</a>
						<a href='tel:380505642390'>
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
								<a href='tel:380505642390'> +380505642390</a>
							</li>
							<li>
								{' '}
								<a href='mailto:pkombdpu@gmail.com'> pkombdpu@gmail.com</a>
							</li>
						</ul>
						<ul>
							<li>Тимчасово переміщений до:</li>
							<li>
								<p>м. Запоріжжя,</p>
							</li>
							<li>
								<p>вул. Жуковського, 66</p>
							</li>
						</ul>
						<ul>
							<li>Юридична адреса:</li>
							<li>
								<p>71100, Україна, Запорізька обл.,</p>
							</li>
							<li>
								<p>м. Бердянськ, вул. Шмідта, 4</p>
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
