import React from 'react'
import styles from './sendLetter.module.scss'
import { SvgIcon } from '../../../Svgs/Svg'
import { MaskedInput, createDefaultMaskGenerator } from 'react-hook-mask'
import axios from 'axios'
import FormData from 'form-data'
import cn from 'classnames'
import { SuccessModal } from '../../SuccessModal/SuccessModal'

const maskGenerator = createDefaultMaskGenerator('+380(99)-999-99-99')

export const SendLetter = ({ isOpen, specialtyName, close, categories }) => {
	let data = new FormData()
	const [openSuccess, setOpenSuccess] = React.useState(false)
	const [selectOpen, setSelectOpen] = React.useState(false)
	const [value, setValue] = React.useState('')
	const [name, setName] = React.useState('')
	const [surname, setSurname] = React.useState('')
	const [textError, setTextError] = React.useState(false)
	const [loading, setLoading] = React.useState(false)
	const [timerID, setTimerID] = React.useState(null)
	const [levelValue, setLevelValue] = React.useState(categories.split(', ')[0])

	const closeTab = (e) => {
		const target = e.target
		if (target.classList.contains(styles.wrap)) {
			close(false)
		}
	}

	const sendData = (e) => {
		e.preventDefault()
		if (!loading) {
			data.append('name', name)
			data.append('surname', surname)
			data.append('phone_number', '+380' + value)
			data.append('specialty_name', specialtyName)
			data.append('education_degree_name', levelValue)
			setLoading(true)
			axios
				.post(
					`${process.env.REACT_APP_API_URL}/server/api/applications/send`,
					data
				)
				.then(function (response) {
					setTimerID(
						setTimeout(() => {
							setSurname('')
							setLevelValue(categories.split(', ')[0])
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

	const onChooseLevel = (item) => {
		setSelectOpen(false)
		setLevelValue(item)
	}

	return (
		<div
			onClick={(e) => closeTab(e)}
			className={cn(styles.wrap, {
				[styles.is_open]: isOpen,
			})}>
			<SuccessModal setOpen={setOpenSuccess} open={openSuccess} />
			<div className={styles.body}>
				<div className={styles.header}>
					<h4>Подати заявку</h4>
					<div className={styles.closeBtn} onClick={() => close(false)}>
						<SvgIcon type='times' />
					</div>
				</div>
				<div className={styles.form}>
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
							<label htmlFor='name'>Спеціальність</label>
							<input
								value={specialtyName}
								onChange={() => console.log()}
								style={{ pointerEvents: 'none' }}
								required
								type='text'
								id='name'
								placeholder='Тарас'
							/>
						</div>
						<div className='form-inp'>
							<label htmlFor='name'>Освітній ступінь</label>
							<div className={styles.select}>
								<div
									className={styles.selectHeader}
									onClick={() => setSelectOpen(!selectOpen)}>
									<p>{levelValue}</p>
									<div
										className={cn(styles.svg, {
											[styles.scale]: selectOpen,
										})}>
										<SvgIcon type='angle-bottom' />
									</div>
								</div>
								<ul
									className={cn(styles.selectBody, {
										[styles.selectOpen]: selectOpen,
									})}>
									{categories.length ? (
										categories.split(', ').map((item, i) => (
											<li key={i} onClick={() => onChooseLevel(item)}>
												{item}
											</li>
										))
									) : (
										<></>
									)}
								</ul>
							</div>
						</div>
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
	)
}
