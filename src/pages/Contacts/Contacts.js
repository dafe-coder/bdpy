import React from 'react'
import { SvgIcon } from './../../Svgs/Svg'

export const Contacts = () => {
	return (
		<>
			<section className='contacts-main-s'>
				<div className='container'>
					<div className='contacts-main'>
						<h1>Контакти</h1>
					</div>
				</div>
			</section>
			<section className='contacts-s'>
				<div className='container'>
					<div className='contacts'>
						<div className='contacts__left'>
							<ul>
								<li>
									<h6>Приймальня ректора:</h6>
									<a href='mailto:bdpu.zp@gmail.com'>bdpu.zp@gmail.com </a>
									<a href='mailto:rector_bdpu@ukr.net'>rector_bdpu@ukr.net </a>
								</li>
								<li>
									<h6>Приймальна комісія:</h6>
									<a href='tel:+380505642390'>+380505642390 </a>
									<a href='mailto:pkombdpu@gmail.com'>pkombdpu@gmail.com </a>
								</li>
								<li>
									<h6>Тимчасово переміщений до:</h6>
									<p>м. Запоріжжя,</p>
									<p>вул. Жуковського, 66 </p>
								</li>
								<li>
									<h6>Юридична адреса:</h6>
									<p>71100, Україна, Запорізька обл.,</p>
									<p>м. Бердянськ, вул. Шмідта, 4</p>
								</li>
							</ul>
						</div>
						<div className='contacts__right'>
							<p className='par'>
								Щоб отримати консультацію, будь ласка, заповніть цю форму. Ми
								зв'яжемося з Вами якомога швидше.
							</p>
							<form className='form' action='#' method='method'>
								<div className='form-inp'>
									<label htmlFor='name'>Ваше ім’я</label>
									<input required type='text' id='name' placeholder='Іван' />
								</div>
								<div className='form-inp'>
									<label htmlFor='surname'>Ваше прізвище</label>
									<input
										required
										type='text'
										id='surname'
										placeholder='Крейзіч'
									/>
								</div>
								<div className='form-inp'>
									<label htmlFor='tel'>Номер телефону</label>
									<input
										required
										type='text'
										id='tel'
										placeholder='+380 (__) - ___ - __ - __'
									/>
								</div>
								<div className='form-inp'>
									<label htmlFor='email'>Ваш Імейл</label>
									<input
										required
										type='text'
										id='email'
										placeholder='some-email@gmail.com'
									/>
								</div>
								<div className='form-text'>
									<textarea
										id='text'
										name='text'
										placeholder='Напишіть тут Ваше запитання'></textarea>
								</div>
								<button type='submit'>
									<SvgIcon type='circle-with-arrow' fill='#000' />
									<span>Відправити</span>
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
