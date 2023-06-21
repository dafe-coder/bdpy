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
import { LoaderAccordion } from '../Loader/LoaderAccordion'
import { LoaderPrograms } from '../Loader/LoaderPrograms'

export const AccordionBlock = ({ data, link = false, allWidth = false }) => {
	if (data.length) {
		return (
			<Accordion
				allowMultipleExpanded
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
								<p dangerouslySetInnerHTML={{ __html: item.content }}></p>
								{link && item.files.length ? (
									item.files.map((item, i) => (
										<a className='pdf-link' href={item.file} key={i}>
											<SvgIcon type='pdf' />
											<span>{item.name}</span>
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
	} else if (!allWidth) {
		return (
			<div className='accordion-loader'>
				<LoaderAccordion />
				<LoaderAccordion />
				<LoaderAccordion />
				<LoaderAccordion />
				<LoaderAccordion />
				<LoaderAccordion />
			</div>
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
