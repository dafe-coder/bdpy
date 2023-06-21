import React from 'react'
import ReactPlayer from 'react-player'
import styles from './videoPlayer.module.scss'
import cn from 'classnames'
import { SvgIcon } from './../../Svgs/Svg'

export const VideoPlayer = ({ openVideoModal, setOpenVideoModal }) => {
	const closeModal = (e) => {
		const target = e.target
		if (target.classList.contains(styles.modalVideo)) {
			setOpenVideoModal(false)
		}
	}
	return (
		<div
			className={cn(styles.modalVideo, {
				[styles.openModal]: openVideoModal,
			})}
			onClick={(e) => closeModal(e)}>
			<span
				className={styles.closeBtn}
				onClick={() => setOpenVideoModal(false)}>
				<SvgIcon type='times' />
			</span>
			<div className={styles.video}>
				<ReactPlayer
					playing={openVideoModal}
					width='100%'
					height='100%'
					url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
				/>
			</div>
		</div>
	)
}
