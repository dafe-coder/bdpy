import React from 'react'
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion'
import styles from './accordion.module.css'
import { SvgIcon } from './../../Svgs/Svg'

export const AccordionBlock = ({ data, titles = false, link = false }) => {
	if (data.length && titles) {
		return (
			<Accordion
				allowZeroExpanded
				preExpanded={[1]}
				className={styles.accordion}>
				{titles.length &&
					titles.map((item, i) => {
						const filterData = data.filter(
							(dataItem) => dataItem.faculty_name === item
						)
						console.log(filterData)
						return (
							<AccordionItem uuid={i} key={i}>
								<AccordionItemHeading>
									<AccordionItemButton>{item}</AccordionItemButton>
								</AccordionItemHeading>
								<AccordionItemPanel>
									<ul className='list-item'>
										<li>
											<span>Назва спеціальності</span>
											<span>Освітній ступінь</span>
										</li>
										{filterData.length ? (
											filterData.map((item) => (
												<li className='program-item' key={item.id}>
													<span>{item.specialty_name}</span>
													<span>
														{item.education_program_info
															.map(
																(item) =>
																	item.education_degree[0].toUpperCase() + ','
															)
															.join('')
															.slice(0, -1)}
													</span>
												</li>
											))
										) : (
											<></>
										)}
									</ul>
								</AccordionItemPanel>
							</AccordionItem>
						)
					})}
			</Accordion>
		)
	} else if (data.length) {
		return (
			<Accordion
				allowZeroExpanded
				preExpanded={[data[0].id.toString()]}
				className={styles.accordion}>
				{data.length &&
					data.map((item) => (
						<AccordionItem uuid={item.id.toString()} key={item.id}>
							<AccordionItemHeading>
								<AccordionItemButton>{item.title}</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<p>{item.content}</p>
								{link && item.files.length ? (
									item.files.map((item, i) => (
										<a className='pdf-link' href={item} key={i}>
											<SvgIcon type='pdf' />
											<span>
												«Cтруктура та критерії оцінювання мотиваційного листа»
											</span>
										</a>
									))
								) : (
									<></>
								)}
							</AccordionItemPanel>
						</AccordionItem>
					))}
			</Accordion>
		)
	}
}
