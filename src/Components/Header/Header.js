import React from 'react'
import logoSite from '../../assets/img/logo.svg'
import cn from 'classnames'
import { SvgIcon } from './../../Svgs/Svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { HashLink } from 'react-router-hash-link'
import { LoaderNews } from './../Loader/LoaderNews'
import { Modal } from './../Modal/Modal'
import { CommiseModal } from '../Modal/CommiseModal/CommiseModal'
import { RectorModal } from '../Modal/RectorModal/RectorModal'

export const Header = () => {
	const [openNav, setOpenNav] = React.useState(false)
	const [openCommise, setOpenCommise] = React.useState(false)
	const [openRector, setOpenReactor] = React.useState(false)
	const { latestNews } = useSelector((state) => state.api)
	const onOpenNav = (e) => {
		e.preventDefault()
		setOpenNav(!openNav)
	}

	React.useEffect(() => {
		if (openNav) {
			document.querySelector('html').style.overflow = 'hidden'
		} else {
			document.querySelector('html').style.overflow = 'initial'
		}
	}, [openNav])

	const onOpenCommise = (e) => {
		e.preventDefault()
		setOpenCommise(true)
	}
	const onOpenRector = (e) => {
		e.preventDefault()
		setOpenReactor(true)
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
									<a href='!#' onClick={(e) => onOpenRector(e)}>
										<span>Приймальня Ректора </span>
									</a>
								</li>
								<li>
									<a href='!#' onClick={(e) => onOpenCommise(e)}>
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
									<Link to='/about' onClick={() => setOpenNav(false)}>
										Про університет
									</Link>
								</li>
								<li>
									<Link
										to='/info-programs/id=null'
										onClick={() => setOpenNav(false)}>
										Освітні програми
									</Link>
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
									<Link to='/resources' onClick={() => setOpenNav(false)}>
										Ресурси для вступників
									</Link>
								</li>
								<li>
									<HashLink to='/#questions' onClick={() => setOpenNav(false)}>
										Нас часто запитують
									</HashLink>
								</li>
								<li>
									<a href='!#'>Зарахування на навчання</a>
								</li>
								<li className='db-480'>
									<a href='!#' onClick={(e) => onOpenRector(e)}>
										<span>Приймальня Ректора </span>
									</a>
								</li>
								<li className='db-480'>
									<a href='!#' onClick={(e) => onOpenCommise(e)}>
										<span>Приймальна Комісія </span>
									</a>
								</li>

								<li>
									<Link to='/news' onClick={() => setOpenNav(false)}>
										Блог
									</Link>
								</li>
								<li>
									<Link to='/contacts' onClick={() => setOpenNav(false)}>
										Контакти
									</Link>
								</li>
								<ul className='social-links'>
									<li>
										<a
											target='_blank'
											rel='noopener noreferrer'
											href='https://t.me/studentsBSPU'>
											<SvgIcon type='telegram' />
										</a>
									</li>
									<li>
										<a
											target='_blank'
											rel='noopener noreferrer'
											href='https://bdpu.org.ua/'>
											<SvgIcon type='internet' />
										</a>
									</li>
									<li>
										<a
											target='_blank'
											rel='noopener noreferrer'
											href='https://www.facebook.com/bdpu.official'>
											<SvgIcon type='facebook' />
										</a>
									</li>
									<li>
										<a
											target='_blank'
											rel='noopener noreferrer'
											href='https://www.youtube.com/@StudMediaBDPU'>
											<SvgIcon type='youtube' />
										</a>
									</li>
									<li>
										<a
											target='_blank'
											rel='noopener noreferrer'
											href='https://www.instagram.com/live_bdpu/?igshid=MWI4MTIyMDE%3D'>
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
							{latestNews.length ? (
								<ul className='header-nav--news'>
									{latestNews.map((item) => (
										<li key={item.id}>
											<Link
												to='/news-open'
												state={{ id: item.id }}
												onClick={() => setOpenNav(false)}
												href='!#'>
												<div className='header-nav--news__img'>
													<img src={item.img} alt={item.title} />
												</div>
												<h4>
													{item.title.length > 30
														? item.title.slice(0, 40) + '...'
														: item.title}
												</h4>
												<p className='par'>
													{item.content.slice(0, 50) + '...'}
												</p>
											</Link>
										</li>
									))}
								</ul>
							) : (
								<div className='news-header-loader'>
									<LoaderNews />
									<LoaderNews />
									<LoaderNews />
									<LoaderNews />
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
			<Modal isOpen={openCommise} onClose={setOpenCommise}>
				<CommiseModal onClose={setOpenCommise} />
			</Modal>
			<Modal isOpen={openRector}>
				<RectorModal onClose={setOpenReactor} />
			</Modal>
		</>
	)
}
