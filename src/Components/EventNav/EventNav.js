import React from 'react'
import cn from 'classnames'
// import styles from ''
import { useDispatch, useSelector } from 'react-redux'
import {
	selectFilter,
	setActiveFilterEvent,
} from '../../redux/slices/FilterSlice'
export const EventNav = () => {
	const dispatch = useDispatch()
	const { activeFilterEvent } = useSelector(selectFilter)

	const chooseEventFilter = (e, item) => {
		e.preventDefault()
		dispatch(setActiveFilterEvent(item))
	}

	return (
		<ul className='date-nav'>
			<li>
				<a
					href='!#'
					className={cn({
						// eslint-disable-next-line
						['active']: activeFilterEvent === 'Показати всі',
					})}
					onClick={(e) => chooseEventFilter(e, 'Показати всі')}>
					Показати всі{' '}
				</a>
			</li>
			<li>
				<a
					className={cn({
						// eslint-disable-next-line
						['active']: activeFilterEvent === 'Бакалавр',
					})}
					href='!#'
					onClick={(e) => chooseEventFilter(e, 'Бакалавр')}>
					Бакалавр
				</a>
			</li>
			<li>
				<a
					className={cn({
						// eslint-disable-next-line
						['active']: activeFilterEvent === 'Магістр',
					})}
					href='!#'
					onClick={(e) => chooseEventFilter(e, 'Магістр')}>
					Магістратура
				</a>
			</li>
			<li>
				<a
					className={cn({
						// eslint-disable-next-line
						['active']: activeFilterEvent === 'Аспірантура',
					})}
					href='!#'
					onClick={(e) => chooseEventFilter(e, 'Аспірантура')}>
					Аспірантура
				</a>
			</li>
		</ul>
	)
}
