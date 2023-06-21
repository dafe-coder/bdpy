import React from 'react'
import cn from 'classnames'
import styles from './modal.module.scss'
import { SvgIcon } from './../../Svgs/Svg'

export const Modal = ({ children, isOpen, onClose, style }) => {
	return (
		<div
			className={cn(styles.modal, {
				[styles.open]: isOpen,
			})}>
			<div className={styles.modalBody} style={style}>
				{onClose ? (
					<span className={styles.closeBtn} onClick={() => onClose(false)}>
						<SvgIcon type='times' fill='#000' />
					</span>
				) : (
					<></>
				)}
				{children}
			</div>
		</div>
	)
}
