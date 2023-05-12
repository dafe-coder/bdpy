import React from 'react'
import styles from './questions.module.scss'
import { AccordionBlock } from '../'
import { useSelector } from 'react-redux'
export const Questions = () => {
	const { faq } = useSelector((state) => state.api)

	return (
		<section className={styles.questionsS}>
			<div className='container'>
				<div className={styles.questions}>
					<div className={styles.questionsLeft}>
						<h2>Нас часто запитують</h2>
						<AccordionBlock data={faq} />
					</div>
					<div className={styles.questionsRight}></div>
				</div>
			</div>
		</section>
	)
}
