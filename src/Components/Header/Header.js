import React from 'react'
import logoSite from '../../assets/img/logo.png'
import cn from 'classnames'
import { SvgIcon } from './../../Svgs/Svg'

export const Header = () => {
	const [openNav, setOpenNav] = React.useState(false)
	const onOpenNav = (e) => {
		e.preventDefault()
		setOpenNav(!openNav)
	}
	return (
		<>
			<header className='header'>
				<div className='container'>
					<div className='header-body'>
						<a href='/'>
							<img src={logoSite} alt='BSPU' />
							<p>
								Бердянський державний <br />
								педагогічний університет
							</p>
						</a>
						<div className='header-links'>
							<ul>
								<li>
									<a href='!#'>
										<span>Приймальня Ректора </span>
									</a>
								</li>
								<li>
									<a href='!#'>
										<span>Приймальна Комісія </span>
									</a>
								</li>
								<li>
									<a id='burger-link' href='!#' onClick={(e) => onOpenNav(e)}>
										<span>Меню</span>
										<span
											className={cn('menu-burger', {
												// eslint-disable-next-line
												['active']: openNav,
											})}>
											<span></span>
										</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header>
			<div
				className={cn('header-nav', {
					// eslint-disable-next-line
					['is-open']: openNav,
				})}>
				<div className='container'>
					<div className='header-nav__body'>
						<div className='header-nav__left'>
							<ul className='header-nav--list'>
								<li>
									<a href='./about'>Про університет </a>
								</li>
								<li>
									<a href='./info-programs'>Освітні програми</a>
								</li>
								<li>
									<a href='!#'>Правила вступу</a>
								</li>
								<li>
									<a href='./resources'>Ресурси для вступників</a>
								</li>
								<li>
									<a href='!#'>Зарахування на навчання</a>
								</li>
								<li>
									<a href='!#'>Часті запитання</a>
								</li>
								<li>
									<a href='./news'>Блог</a>
								</li>
								<li>
									<a href='./contacts'>Контакти</a>
								</li>
								<ul className='social-links'>
									<li>
										<a href='!#'>
											<SvgIcon type='facebook' />
										</a>
									</li>
									<li>
										<a href='!#'>
											<SvgIcon type='twitter' />
										</a>
									</li>
									<li>
										<a href='!#'>
											<SvgIcon type='instagram' />
										</a>
									</li>
								</ul>
							</ul>
							<p className='all-rights'>
								БДПУ 2021 <br />
								<br />© All Rights reserved!
							</p>
						</div>
						<div className='header-nav__right'>
							<ul className='header-nav--news'>
								<li>
									<a href='!#'>
										<div className='header-nav--news__img'>
											<img
												src='../../assets/img/news//Rectangle 11-1.png'
												alt='frst'
											/>
										</div>
										<h4>До уваги учасників освітнього процесу</h4>
										<p className='par'>
											З 23 вересня 2021 року на території України встановлено
											“Жовтий" рівень епідемічної...
										</p>
									</a>
								</li>
								<li>
									<a href='!#'>
										<div className='header-nav--news__img'>
											<img
												src='../../assets/img/news//Rectangle 11-1.png'
												alt='frst'
											/>
										</div>
										<h4>До уваги учасників освітнього процесу</h4>
										<p className='par'>
											З 23 вересня 2021 року на території України встановлено
											“Жовтий" рівень епідемічної...
										</p>
									</a>
								</li>
								<li>
									<a href='!#'>
										<div className='header-nav--news__img'>
											<img
												src='../../assets/img/news//Rectangle 11-1.png'
												alt='frst'
											/>
										</div>
										<h4>До уваги учасників освітнього процесу</h4>
										<p className='par'>
											З 23 вересня 2021 року на території України встановлено
											“Жовтий" рівень епідемічної...
										</p>
									</a>
								</li>
								<li>
									<a href='!#'>
										<div className='header-nav--news__img'>
											<img
												src='../../assets/img/news//Rectangle 11-1.png'
												alt='frst'
											/>
										</div>
										<h4>До уваги учасників освітнього процесу</h4>
										<p className='par'>
											З 23 вересня 2021 року на території України встановлено
											“Жовтий" рівень епідемічної...
										</p>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
