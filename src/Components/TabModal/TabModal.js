import React from 'react'
import cn from 'classnames'
import { SvgIcon } from './../../Svgs/Svg'
import styles from '../Accordion/accordion.module.css'
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion'
import { LoaderData } from '../Loader/LoaderData'
import { SendLetter } from '../Modal/SendLetter/SendLetter'

export const TabModal = ({ tabOpen, setTabOpen, data }) => {
	const refTab = React.useRef(null)
	const [copy, setCopy] = React.useState(false)
	const [openLetter, setOpenLetter] = React.useState(false)

	const onClose = React.useCallback(
		(e) => {
			e.preventDefault()
			setTabOpen(false)
			var redirect = window.location.href.split('id=')[0] + 'id=null'
			window.history.replaceState(null, '', redirect)
		},
		[setTabOpen]
	)

	const onShare = (e) => {
		e.preventDefault()
		navigator.clipboard.writeText(window.location.href)
		setCopy(true)
		setTimeout(() => {
			setCopy(false)
		}, 1000)
	}

	const closeTab = (e) => {
		const target = e.target
		if (target.classList.contains('tab-modal')) {
			onClose(e)
		}
	}

	const onOpenLetter = (e) => {
		e.preventDefault()
		setOpenLetter(true)
	}

	return (
		<div
			onClick={(e) => closeTab(e)}
			ref={refTab}
			className={cn('tab-modal', {
				// eslint-disable-next-line
				['is-open']: tabOpen,
			})}>
			<div className='tab-modal-wrap'>
				<div className='tab-modal__header--wrap'>
					<div className='container'>
						<div className='tab-modal__header'>
							<div className='tab-modal__header--top'>
								<a href='!#' onClick={(e) => onShare(e)}>
									{copy ? (
										<span>Cкопійовано в буфер обміну</span>
									) : (
										<SvgIcon type='share-alt' />
									)}
								</a>
								<a href='!#' id='close-modal' onClick={(e) => onClose(e)}>
									<SvgIcon type='times' />
								</a>
							</div>
							<div className='tab-modal__header--bottom'>
								{data !== null ? (
									<h3>{data.specialty_name}</h3>
								) : (
									<LoaderData />
								)}
								<a
									href='!#'
									style={{ cursor: 'pointer' }}
									onClick={(e) => onOpenLetter(e)}>
									<SvgIcon type='circle-with-arrow' />
									<span>Подати заявку</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className='tab-modal__body'>
					<div className='container'>
						{data !== null ? (
							<Accordion
								allowZeroExpanded
								preExpanded={[0]}
								className={styles.accordion}>
								{data.education_program_info.map((item, i) => (
									<AccordionItem uuid={i} key={i}>
										<AccordionItemHeading>
											<AccordionItemButton>
												{item.education_degree} ({item.title})
											</AccordionItemButton>
										</AccordionItemHeading>
										<AccordionItemPanel>
											<div className='ac-panel'>
												<p className='par'>
													<strong>Форма навчання: </strong>
													{item.learning_form}
												</p>
												<p className='par'>
													<strong>Умови вступу: </strong>
												</p>
												{item.admission_requirements !== '<br>' && (
													<p
														className='par'
														dangerouslySetInnerHTML={{
															__html: item.admission_requirements,
														}}></p>
												)}
												<p className='par'>
													<strong>Вартість навчання: </strong>
												</p>
												<p className='par'>
													Денна форма навчання –{' '}
													<i>{item.daily_tuition_cost} грн</i>
												</p>
												<p className='par'>
													Заочна форма навчання –{' '}
													<i>{item.distance_learning_cost} грн</i>
												</p>
												<p className='par'>
													<strong>
														Переваги освітньої програми (фокус програми):
													</strong>
												</p>
												<p className='par'>{item.benefits}</p>
												<p className='par'>
													<strong>Посади, які може займати фахівець: </strong>
												</p>
												<p className='par'>{item.possible_positions}</p>
												<p className='par'>
													<strong>Документи необхідні для вступу: </strong>
												</p>
												<ul className='list-text'>
													{item.required_documents
														.split('\r\n')
														.map((item, i) => (
															<li key={i}>{item}</li>
														))}
												</ul>
											</div>
										</AccordionItemPanel>
									</AccordionItem>
								))}
							</Accordion>
						) : (
							<LoaderData />
						)}
					</div>
				</div>
			</div>
			{data !== null ? (
				<SendLetter
					close={setOpenLetter}
					isOpen={openLetter}
					specialtyName={data.specialty_name}
					categories={data.categories}
				/>
			) : (
				<></>
			)}
		</div>
	)
}
