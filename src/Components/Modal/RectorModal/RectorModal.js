import React from 'react'
import styles from './rector.module.scss'
import { SvgIcon } from './../../../Svgs/Svg'
import rectorImg from '../../../assets/img/rector.jpeg'

export const RectorModal = ({ onClose }) => {
	return (
		<div className={styles.modal}>
			<div className={styles.left}>
				<img src={rectorImg} alt='ректор' />
			</div>
			<div className={styles.right}>
				<h5>Приймальня Ректора</h5>
				<ul>
					<li>
						<p>Ректор БДПУ</p>
						<p>Богданов Ігор Тимофійович</p>
					</li>
					<li>
						<p>Електроннi пошти:</p>
						<p>
							<a href='mailto:rector_bdpu@ukr.net'>rector_bdpu@ukr.net</a>
							{'   '}
							<a href='mailto:bdpu.zp@gmail.com'>bdpu.zp@gmail.com</a>
						</p>
					</li>
				</ul>
				<div className={styles.btn} onClick={() => onClose(false)}>
					<SvgIcon fill='#000' type='circle-with-arrow' />
					<span>Повернутись назад</span>
				</div>
			</div>
		</div>
	)
}
