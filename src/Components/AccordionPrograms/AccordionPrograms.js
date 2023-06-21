import React from 'react'
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion'
import { LoaderPrograms } from './../Loader/LoaderPrograms'

export const AccordionPrograms = ({ data = [], titles = [], setTabOpen }) => {
	if (data.length) {
		return (
			<Accordion allowMultipleExpanded style={{ marginTop: '2.2vw' }}>
				{titles.length ? (
					titles.map((item, i) => {
						const filterData = data.filter(
							(dataItem) => dataItem.faculty_name === item
						)
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
												<li
													className='program-item'
													key={item.id}
													onClick={() => setTabOpen(item)}>
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
					})
				) : (
					<></>
				)}
			</Accordion>
		)
	} else {
		return (
			<div className='programs-loader'>
				<LoaderPrograms />
				<LoaderPrograms />
				<LoaderPrograms />
				<LoaderPrograms />
				<LoaderPrograms />
			</div>
		)
	}
}
