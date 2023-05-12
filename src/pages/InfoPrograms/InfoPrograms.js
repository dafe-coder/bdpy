import React from 'react'
import { LatestNews, AccordionPrograms } from './../../Components/'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInfoPrograms } from './../../redux/slices/InfoProgramsSlice'

export const InfoPrograms = () => {
	const dispatch = useDispatch()
	const { educationPrograms } = useSelector((state) => state.infoPrograms)
	const [openFilter, setOpenFilter] = React.useState(false)
	const [titles, setTitles] = React.useState()
	const [searchValue, setSearchValue] = React.useState('')
	const [filteredData, setFilteredData] = React.useState([])

	React.useEffect(() => {
		if (filteredData.length) {
			setTitles(uniq_fast(filteredData.map((item) => item.faculty_name)))
		}
	}, [filteredData])

	React.useEffect(() => {
		if (searchValue !== '' && educationPrograms.length) {
			const filtered = educationPrograms.filter((item) =>
				item.specialty_name.toLowerCase().includes(searchValue.toLowerCase())
			)
			setFilteredData(filtered)
		} else {
			setFilteredData(educationPrograms)
		}
	}, [searchValue, educationPrograms])

	React.useEffect(() => {
		dispatch(fetchInfoPrograms())
	}, [dispatch])

	function uniq_fast(a) {
		var seen = {}
		var out = []
		var len = a.length
		var j = 0
		for (var i = 0; i < len; i++) {
			var item = a[i]
			if (seen[item] !== 1) {
				seen[item] = 1
				out[j++] = item
			}
		}
		return out
	}

	const choosePrograms = () => {
		console.log(1)
	}

	return (
		<>
			<section className='info-programs-main-s'>
				<div className='container'>
					<div className='info-programs-main'>
						<h1>Освітні програми</h1>
					</div>
				</div>
			</section>
			<section className='info-tabs-s'>
				<div className='container'>
					<div className='info-tabs'>
						<div className='info-tabs__header'>
							<div className='info-tabs__header--body'>
								<div className='info-tabs__btn'>
									<button
										className='btn'
										id='filter-btn'
										onClick={() => setOpenFilter(!openFilter)}>
										<span>Фільтри</span>
										<svg className='svg-sprite-icon icon-angle-down'>
											<use xlinkHref='img/symbol/sprite.svg#angle-down'></use>
										</svg>
									</button>
									<a className='btn compare-btn' href='./compare.html'>
										<svg className='svg-sprite-icon icon-scale-balanced'>
											<use xlinkHref='img/symbol/sprite.svg#scale-balanced'></use>
										</svg>
										<span>Порівняння</span>
									</a>
								</div>
								<div className='search'>
									<input
										onChange={(e) => setSearchValue(e.target.value)}
										className='search-input'
										placeholder='Код або назва спеціальності'
									/>
									<svg className='svg-sprite-icon icon-search'>
										<use xlinkHref='img/symbol/sprite.svg#search'></use>
									</svg>
								</div>
							</div>

							<div
								className={cn('filter-body', {
									// eslint-disable-next-line
									['is-open']: openFilter,
								})}>
								<ul>
									<li>
										<input
											onChange={choosePrograms}
											type='radio'
											id='all-programs'
											checked
											name='programs'
										/>
										<label htmlFor='all-programs'>Всі програми</label>
									</li>
									<li>
										<input
											onChange={choosePrograms}
											type='radio'
											id='bacalavrat-programs'
											name='programs'
										/>
										<label htmlFor='bacalavrat-programs'>Бакалаврат</label>
									</li>
									<li>
										<input
											onChange={choosePrograms}
											type='radio'
											id='magistr-programs'
											name='programs'
										/>
										<label htmlFor='magistr-programs'>Магістратура</label>
									</li>
									<li>
										<input
											onChange={choosePrograms}
											type='radio'
											id='aspirant-programs'
											name='programs'
										/>
										<label htmlFor='aspirant-programs'>Аспірантура</label>
									</li>
								</ul>
								<ul>
									<li>
										<input
											onChange={choosePrograms}
											type='radio'
											id='all-form-study'
											checked
											name='form-study'
										/>
										<label htmlFor='all-form-study'>Всі форми навчання</label>
									</li>
									<li>
										<input
											onChange={choosePrograms}
											type='radio'
											id='day-form-study'
											name='form-study'
										/>
										<label htmlFor='day-form-study'>Денна</label>
									</li>
									<li>
										<input
											onChange={choosePrograms}
											type='radio'
											id='absentia-form-programs'
											name='form-study'
										/>
										<label htmlFor='absentia-form-programs'>Заочна</label>
									</li>
								</ul>
								<ul>
									<li>
										<input
											onChange={choosePrograms}
											type='radio'
											id='all-form-study'
											checked
											name='conditions'
										/>
										<label htmlFor='all-form-study'>Всі умови для вступу</label>
									</li>
									<li>
										<input
											onChange={choosePrograms}
											type='radio'
											id='zno-conditions'
											name='conditions'
										/>
										<label htmlFor='zno-conditions'>ЗНО</label>
									</li>
									<li>
										<input
											onChange={choosePrograms}
											type='radio'
											id='nmt-conditions'
											name='conditions'
										/>
										<label htmlFor='nmt-conditions'>НМТ</label>
									</li>
									<li>
										<input
											onChange={choosePrograms}
											type='radio'
											id='mkt-conditions'
											name='conditions'
										/>
										<label htmlFor='mkt-conditions'>МКТ</label>
									</li>
									<li>
										<input
											onChange={choosePrograms}
											type='radio'
											id='competition-conditions'
											name='conditions'
										/>
										<label htmlFor='competition-conditions'>
											Творчий конкурс
										</label>
									</li>
									<li>
										<input
											onChange={choosePrograms}
											type='radio'
											id='motivation-conditions'
											name='conditions'
										/>
										<label htmlFor='motivation-conditions'>
											Мотиваційний лист
										</label>
									</li>
								</ul>
								<ul>
									<li>
										<input
											onChange={choosePrograms}
											type='radio'
											id='all-form-study'
											checked
											name='subjects'
										/>
										<label htmlFor='all-form-study'>
											Всі предмети для вступу
										</label>
									</li>
									<li>
										<input
											onChange={choosePrograms}
											type='radio'
											id='math-subjects'
											name='subjects'
										/>
										<label htmlFor='math-subjects'>Математика</label>
									</li>
									<li>
										<input
											onChange={choosePrograms}
											type='radio'
											id='eng-subjects'
											name='subjects'
										/>
										<label htmlFor='eng-subjects'>Англійська Мова</label>
									</li>
									<li>
										<input
											onChange={choosePrograms}
											type='radio'
											id='ukr-subjects'
											name='subjects'
										/>
										<label htmlFor='ukr-subjects'>Українська Мова</label>
									</li>
								</ul>
							</div>
						</div>
						<div className='info-tabs__block'>
							<AccordionPrograms data={filteredData} titles={titles} />
						</div>
					</div>
				</div>
			</section>
			<LatestNews />
			<div className='tab-modal'>
				<div className='tab-modal__header--wrap'>
					<div className='container'>
						<div className='tab-modal__header'>
							<div className='tab-modal__header--top'>
								{' '}
								<a href='!#'>
									<svg className='svg-sprite-icon icon-share-alt'>
										<use xlinkHref='img/symbol/sprite.svg#share-alt'></use>
									</svg>
								</a>
								<a href='!#' id='close-modal'>
									<svg className='svg-sprite-icon icon-times'>
										<use xlinkHref='img/symbol/sprite.svg#times'></use>
									</svg>
								</a>
							</div>
							<div className='tab-modal__header--bottom'>
								<h3>Середня освіта (історія та правознавство)</h3>
								<a href='!#'>
									<svg className='svg-sprite-icon icon-arrow_circle'>
										<use xlinkHref='img/symbol/sprite.svg#arrow_circle'></use>
									</svg>
									<span>Подати заявку</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className='tab-modal__body'>
					<div className='container'>
						<div className='accordion-container accordion-modal'>
							<div className='ac'>
								<h2 className='ac-header'>
									<button className='ac-trigger' type='button'>
										Гуманітарно-економічний факультет
									</button>
								</h2>
								<div className='ac-panel'>
									<p className='par'>
										<strong> Форма навчання:</strong> очна (денна), заочна
									</p>
									<p className='par'>
										{' '}
										<strong>Умови вступу: </strong>
									</p>
									<p className='par'>
										<i> Результат НМТ</i> з української мови, математики та
										історії України <i>або предмети ЗНО 2019-2021:</i>
									</p>
									<ul className='nums-list'>
										<li className='par'>1. Українська мова і література </li>
										<li className='par'>2. Історія України</li>
										<li className='par'>
											3. Математика або іноземна мова, або біологія, або
											географія, або фізика, або хімія
										</li>
									</ul>
									<p className='par'>
										{' '}
										<strong>Вартість навчання: </strong>
									</p>
									<p className='par'>
										Денна форма навчання – <i>12,000 грн</i>
									</p>
									<p className='par'>
										Заочна форма навчання – <i>8,000 грн</i>
									</p>
									<p className='par'>
										{' '}
										<strong>
											Переваги освітньої програми (фокус програми):{' '}
										</strong>
									</p>
									<p className='par'>
										Вивчення передових методів та форм викладання історії,
										виховання засобами історії, сучасних методів та новітніх
										досягнень у галузі історичних дисциплін в Україні та світі
										для підготовки вчителів історії. Акцент на регіональному
										контексті вивчення історії, який базується на вивченні
										етно-конфесійних, соціо-культурних, соціально-економічних та
										політичних особливостей регіону Південної України.
										Передбачається можливість вільного вибору блоку дисциплін
										«Правознавство».
									</p>
									<p className='par'>
										{' '}
										<strong>Посади, які може займати фахівець: </strong>
									</p>
									<p className='par'>
										Фахівець із кваліфікацією бакалавра має право працювати
										вчителем закладу загальної середньої освіти, викладачем
										професійно-технічного закладу освіти, методистом,
										інспектором закладів освіти, організатором виховної роботи з
										дітьми, іншим професіоналом в галузі освіти.
									</p>
									<p className='par'>
										{' '}
										<strong>Документи необхідні для вступу: </strong>
									</p>
									<ul className='list-text'>
										<li>
											Заява на ім'я ректора відповідного вищого навчального
											закладу.
										</li>
										<li>
											Заява на ім'я ректора відповідного вищого навчального
											закладу.
										</li>
										<li>
											Заява на ім'я ректора відповідного вищого навчального
											закладу.
										</li>
										<li>
											Заява на ім'я ректора відповідного вищого навчального
											закладу.
										</li>
										<li>
											Заява на ім'я ректора відповідного вищого навчального
											закладу.
										</li>
										<li>
											Заява на ім'я ректора відповідного вищого навчального
											закладу.
										</li>
									</ul>
								</div>
							</div>
							<div className='ac'>
								<h2 className='ac-header'>
									<button className='ac-trigger' type='button'>
										Магістр
									</button>
								</h2>
								<div className='ac-panel'>
									<p className='par'>
										<strong> Форма навчання:</strong> очна (денна), заочна
									</p>
									<p className='par'>
										{' '}
										<strong>Умови вступу: </strong>
									</p>
									<p className='par'>
										<i> Результат НМТ</i> з української мови, математики та
										історії України <i>або предмети ЗНО 2019-2021:</i>
									</p>
									<ul className='nums-list'>
										<li className='par'>1. Українська мова і література </li>
										<li className='par'>2. Історія України</li>
										<li className='par'>
											3. Математика або іноземна мова, або біологія, або
											географія, або фізика, або хімія
										</li>
									</ul>
									<p className='par'>
										{' '}
										<strong>Вартість навчання: </strong>
									</p>
									<p className='par'>
										Денна форма навчання – <i>12,000 грн</i>
									</p>
									<p className='par'>
										Заочна форма навчання – <i>8,000 грн</i>
									</p>
									<p className='par'>
										{' '}
										<strong>
											Переваги освітньої програми (фокус програми):{' '}
										</strong>
									</p>
									<p className='par'>
										Вивчення передових методів та форм викладання історії,
										виховання засобами історії, сучасних методів та новітніх
										досягнень у галузі історичних дисциплін в Україні та світі
										для підготовки вчителів історії. Акцент на регіональному
										контексті вивчення історії, який базується на вивченні
										етно-конфесійних, соціо-культурних, соціально-економічних та
										політичних особливостей регіону Південної України.
										Передбачається можливість вільного вибору блоку дисциплін
										«Правознавство».
									</p>
									<p className='par'>
										{' '}
										<strong>Посади, які може займати фахівець: </strong>
									</p>
									<p className='par'>
										Фахівець із кваліфікацією бакалавра має право працювати
										вчителем закладу загальної середньої освіти, викладачем
										професійно-технічного закладу освіти, методистом,
										інспектором закладів освіти, організатором виховної роботи з
										дітьми, іншим професіоналом в галузі освіти.
									</p>
									<p className='par'>
										{' '}
										<strong>Документи необхідні для вступу: </strong>
									</p>
									<ul className='list-text'>
										<li>
											Заява на ім'я ректора відповідного вищого навчального
											закладу.
										</li>
										<li>
											Заява на ім'я ректора відповідного вищого навчального
											закладу.
										</li>
										<li>
											Заява на ім'я ректора відповідного вищого навчального
											закладу.
										</li>
										<li>
											Заява на ім'я ректора відповідного вищого навчального
											закладу.
										</li>
										<li>
											Заява на ім'я ректора відповідного вищого навчального
											закладу.
										</li>
										<li>
											Заява на ім'я ректора відповідного вищого навчального
											закладу.
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
