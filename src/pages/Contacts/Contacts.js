import React from 'react'
import { SvgIcon } from './../../Svgs/Svg'
import { MaskedInput, createDefaultMaskGenerator } from 'react-hook-mask'
import axios from 'axios'
import FormData from 'form-data'
import { SuccessModal } from '../../Components/SuccessModal/SuccessModal'

const maskGenerator = createDefaultMaskGenerator('+380(99)-999-99-99')

export const Contacts = () => {
	let data = new FormData()
	const [openSuccess, setOpenSuccess] = React.useState(false)
	const [value, setValue] = React.useState('')
	const [name, setName] = React.useState('')
	const [surname, setSurname] = React.useState('')
	const [content, setContent] = React.useState('')
	const [email, setEmail] = React.useState('')
	const [textError, setTextError] = React.useState(false)
	const [loading, setLoading] = React.useState(false)
	const [timerID, setTimerID] = React.useState(null)

	React.useEffect(() => {
		document.querySelector('html').style.overflow = 'initial'
	}, [])

	const sendData = (e) => {
		e.preventDefault()
		if (!loading) {
			data.append('name', name)
			data.append('surname', surname)
			data.append('phone_number', '+380' + value)
			data.append('email', email)
			data.append('content', content)
			setLoading(true)
			axios
				.post(`${process.env.REACT_APP_API_URL}/feedback-messages/send`, data)
				.then(function (response) {
					setTimerID(
						setTimeout(() => {
							setContent('')
							setSurname('')
							setEmail('')
							setName('')
							setValue('')
							setOpenSuccess(true)
							setLoading(false)
							clearTimeout(timerID)
						}, 2000)
					)
				})
				.catch(function (error) {
					setTimerID(
						setTimeout(() => {
							setTextError(true)
							setLoading(false)
							clearTimeout(timerID)
						}, 2000)
					)
				})
		}
	}

	return (
		<>
			<SuccessModal setOpen={setOpenSuccess} open={openSuccess} />
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
									<a href='tel:+380961578947'>+380961578947 </a>
									<a href='mailto:pkombdpu@gmail.com'>pkombdpu@gmail.com </a>
								</li>
								<li>
									<h6>Тимчасово переміщений до:</h6>
									<a
										href='https://goo.gl/maps/nSsDdnTn1TvnSg3H6'
										target='_blank'
										rel='noreferrer'>
										м. Запоріжжя,
									</a>
									<a
										href='https://goo.gl/maps/nSsDdnTn1TvnSg3H6'
										target='_blank'
										rel='noreferrer'>
										вул. Жуковського, 66
									</a>
								</li>
								<li>
									<h6>Юридична адреса:</h6>
									<a
										target='_blank'
										rel='noreferrer'
										href='https://goo.gl/maps/diqys6ZUGDkcBnL27'>
										71100, Україна, Запорізька обл.,
									</a>
									<a
										target='_blank'
										rel='noreferrer'
										href='https://goo.gl/maps/diqys6ZUGDkcBnL27'>
										м. Бердянськ, вул. Шмідта, 4
									</a>
								</li>
							</ul>
						</div>
						<div className='contacts__right'>
							<p className='par'>
								Щоб отримати консультацію, будь ласка, заповніть цю форму. Ми
								зв'яжемося з Вами якомога швидше.
							</p>
							<form
								className='form'
								action='#'
								method='method'
								onSubmit={(e) => sendData(e)}>
								<div className='form-inp'>
									<label htmlFor='name'>Ваше ім’я</label>
									<input
										value={name}
										onChange={(e) => setName(e.target.value)}
										required
										type='text'
										id='name'
										placeholder='Тарас'
									/>
								</div>
								<div className='form-inp'>
									<label htmlFor='surname'>Ваше прізвище</label>
									<input
										value={surname}
										onChange={(e) => setSurname(e.target.value)}
										required
										type='text'
										id='surname'
										placeholder='Шевченко'
									/>
								</div>
								<div className='form-inp'>
									<label htmlFor='tel'>Номер телефону</label>
									<MaskedInput
										required
										maskGenerator={maskGenerator}
										value={value}
										onChange={setValue}
										placeholder='+380 (__) - ___ - __ - __'
									/>
								</div>
								<div className='form-inp'>
									<label htmlFor='email'>Ваш Імейл</label>
									<input
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
										type='email'
										id='email'
										placeholder='some-email@gmail.com'
									/>
								</div>
								<div className='form-text'>
									<textarea
										value={content}
										onChange={(e) => setContent(e.target.value)}
										id='text'
										name='text'
										placeholder='Напишіть тут Ваше запитання'></textarea>
								</div>
								<button type='submit' className='btn-with-anim'>
									{loading ? (
										<div className='spinner-box'>
											<div className='pulse-container'>
												<div className='pulse-bubble pulse-bubble-1'></div>
												<div className='pulse-bubble pulse-bubble-2'></div>
												<div className='pulse-bubble pulse-bubble-3'></div>
											</div>
										</div>
									) : (
										<>
											<SvgIcon type='circle-with-arrow' fill='#000' />
											{!textError ? (
												<span>Відправити</span>
											) : (
												<span>Щось пiшло не так, спробуйте пiзнiше!</span>
											)}
										</>
									)}
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
