import React from 'react'
import { LatestNews } from './../../Components/LatestNews/LatestNews'
import { useDispatch, useSelector } from 'react-redux'
import { fetchResources } from './../../redux/slices/ResourcesSlice'
import { AccordionBlock } from './../../Components/Accordion/Accordion'

export const Resources = () => {
	const dispatch = useDispatch()
	const { resourcesData } = useSelector((state) => state.resources)

	React.useEffect(() => {
		dispatch(fetchResources())
	}, [dispatch])
	return (
		<>
			<section className='resources-main-s'>
				<div className='container'>
					<div className='resources-main'>
						<h1>Ресурси для вступників</h1>
					</div>
				</div>
			</section>
			<section className='resources-tabs-s'>
				<div className='container'>
					<div className='resources-tabs'>
						<AccordionBlock allWidth data={resourcesData} link />
					</div>
				</div>
			</section>
			<LatestNews />
		</>
	)
}
