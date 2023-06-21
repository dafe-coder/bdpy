import React from 'react'
import cn from 'classnames'
import styles from './successModal.module.scss'
import { SvgIcon } from './../../Svgs/Svg'

export const SuccessModal = ({ open, setOpen }) => {
	const close = (e) => {
		e.preventDefault()
		setOpen(false)
	}
	return (
		<div
			className={cn(styles.modal, {
				[styles.open]: open,
			})}>
			<div className={styles.card}>
				<h5>Повідомлення відправлено</h5>
				<p className='par'>
					Дякуємо за ваше повідомлення! Ми розглянемо його якомога швидше і
					зв'яжемось з вами відповідно до наданої інформації. Будь ласка,
					залишайтеся на зв'язку.
				</p>
				<a href='!#' onClick={(e) => close(e)}>
					<SvgIcon type='circle-with-arrow' />
					<span>Повернутись назад</span>
				</a>
			</div>
		</div>
	)
}
