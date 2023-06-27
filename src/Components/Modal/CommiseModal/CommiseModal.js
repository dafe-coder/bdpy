import React from 'react'
import cn from 'classnames'
import styles from './commise.module.scss'
import { SvgIcon } from './../../../Svgs/Svg'

export const CommiseModal = ({ onClose }) => {
	return (
		<div className={cn(styles.modal)}>
			<h5>приймальна комісія</h5>
			<ul>
				<li>
					<p>Адреса приймальної комісії:</p>
					<a
						href='https://goo.gl/maps/nSsDdnTn1TvnSg3H6'
						target='_blank'
						rel='noreferrer'>
						м. Запоріжжя, вул. Жуковського, 66
					</a>
				</li>
				<li>
					<p>Телефон:</p>
					<p>
						{/* <a href='tel:+380961578947'>+380	961578947;</a> */}
						<a href='tel:+380634771087'>+380634771087;</a>
						<a href='tel:+380961578947'>+380961578947 (telegram)</a>
					</p>
				</li>
				<li>
					<p>Телефон:</p>
					<a href='mailto:pkombdpu@gmail.com'>pkombdpu@gmail.com</a>
				</li>
			</ul>
			<div onClick={() => onClose(false)} className={styles.btn}>
				<SvgIcon type='circle-with-arrow' fill='#000' />
				<span>Повернутись назад</span>
			</div>
		</div>
	)
}
