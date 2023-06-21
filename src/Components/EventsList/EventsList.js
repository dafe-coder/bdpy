import React from 'react'
import cn from 'classnames'
import { useSelector } from 'react-redux'
import { getMonth } from './../../Func/getMonth'
import { selectFilter } from '../../redux/slices/FilterSlice'
import { LoaderData } from '../Loader/LoaderData'

export const EventsList = () => {
	const now = new Date()
	const { eventsCalendar, loading } = useSelector((state) => state.api)
	const { activeFilterEvent } = useSelector(selectFilter)
	const [filterEvents, setFilterEvents] = React.useState([])

	React.useEffect(() => {
		setFilterEvents(eventsCalendar)
	}, [eventsCalendar])

	React.useEffect(() => {
		if (eventsCalendar.length) {
			if (activeFilterEvent === 'Показати всі') {
				setFilterEvents(eventsCalendar)
			} else {
				setFilterEvents(
					eventsCalendar.filter(
						(item) => item.education_degree === activeFilterEvent
					)
				)
			}
		}
	}, [activeFilterEvent, eventsCalendar])

	return (
		<ul className='date-list'>
			{!loading ? (
				filterEvents.map((item) => (
					<li
						className={cn({
							// eslint-disable-next-line
							['disabled']: item.date < now.toISOString().slice(0, 10),
							// eslint-disable-next-line
							['red']: item.priority === '1',
							// eslint-disable-next-line
							// ['border-bottom-none']: filterEvents.length % 3 == 0,
						})}
						key={item.id}>
						<p>
							{item.date.slice(-2)}
							<span>{getMonth(item.date.slice(-5, -3))}</span>
						</p>
						<p className='par-m'>
							{item.title}{' '}
							{activeFilterEvent === 'Показати всі' &&
								'(' + item.education_degree + ')'}
						</p>
					</li>
				))
			) : (
				<div className='list-loader'>
					<LoaderData />
					<LoaderData />
					<LoaderData />
					<LoaderData />
					<LoaderData />
					<LoaderData />
					<LoaderData />
					<LoaderData />
					<LoaderData />
				</div>
			)}
		</ul>
	)
}
