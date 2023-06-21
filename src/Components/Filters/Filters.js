import React from 'react'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { setFilterList } from '../../redux/slices/InfoProgramsSlice'

const filters = [
	[
		{
			title: 'Всі програми',
			id: 'all-programs',
			name: 'programs',
			first: true,
		},
		{
			title: 'Бакалаврат',
			id: 'bacalavrat-programs',
			name: 'programs',
		},
		{
			title: 'Магістратура',
			id: 'magistr-programs',
			name: 'programs',
		},
		{
			title: 'Аспірантура',
			id: 'aspirant-programs',
			name: 'programs',
		},
	],
	// [
	// 	{
	// 		title: 'Всі умови для вступу',
	// 		id: 'all-conditions',
	// 		name: 'conditions',
	// 		first: true,
	// 	},
	// 	{
	// 		title: 'ЗНО',
	// 		id: 'zno-conditions',
	// 		name: 'conditions',
	// 	},
	// 	{
	// 		title: 'НМТ',
	// 		id: 'nmt-conditions',
	// 		name: 'conditions',
	// 	},
	// 	{
	// 		title: 'МКТ',
	// 		id: 'mkt-conditions',
	// 		name: 'conditions',
	// 	},
	// 	{
	// 		title: 'Творчий конкурс',
	// 		id: 'competition-conditions',
	// 		name: 'conditions',
	// 	},
	// 	{
	// 		title: 'Мотиваційний лист',
	// 		id: 'motivation-conditions',
	// 		name: 'conditions',
	// 	},
	// ],
	// [
	// 	{
	// 		title: 'Всі предмети для вступу',
	// 		id: 'all-subjects',
	// 		name: 'subjects',
	// 		first: true,
	// 	},
	// 	{
	// 		title: 'Математика',
	// 		id: 'math-subjects',
	// 		name: 'subjects',
	// 	},
	// 	{
	// 		title: 'Іноземна Мова',
	// 		id: 'eng-subjects',
	// 		name: 'subjects',
	// 	},
	// 	{
	// 		title: 'Українська Мова',
	// 		id: 'ukr-subjects',
	// 		name: 'subjects',
	// 	},
	// ],
]

export const Filters = ({ openFilter }) => {
	const dispatch = useDispatch()
	const { filtersList } = useSelector((state) => state.infoPrograms)

	const choosePrograms = (title, id, first = false) => {
		dispatch(setFilterList({ title, id, first }))
	}

	const createInput = (title, name, id, onChoose, index, first = false) => {
		return (
			<li key={id}>
				<input
					onChange={() => onChoose(title, index, first)}
					type='radio'
					id={id}
					checked={filtersList.includes(title)}
					name={name}
				/>
				<label htmlFor={id}>{title}</label>
			</li>
		)
	}

	return (
		<div
			className={cn('filter-body', {
				// eslint-disable-next-line
				['is-open']: openFilter,
			})}>
			{filters.map((item, index) => (
				<ul key={index}>
					{item.map((input) =>
						createInput(
							input.title,
							input.name,
							input.id,
							choosePrograms,
							index,
							input.first
						)
					)}
				</ul>
			))}
		</div>
	)
}
