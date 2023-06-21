import React from 'react'
import { LatestNews, AccordionPrograms, TabModal } from './../../Components/'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInfoPrograms } from './../../redux/slices/InfoProgramsSlice'
import { SvgIcon } from './../../Svgs/Svg'
import { Filters } from './../../Components/Filters/Filters'

export const InfoPrograms = () => {
	const dispatch = useDispatch()
	const { filtersList, educationPrograms } = useSelector(
		(state) => state.infoPrograms
	)
	const [openFilter, setOpenFilter] = React.useState(false)
	const [titles, setTitles] = React.useState()
	const [searchValue, setSearchValue] = React.useState('')
	const [filteredData, setFilteredData] = React.useState([])
	const [filteredDataWithSearch, setFilteredDataWithSearch] = React.useState([])
	const [tabOpen, setTabOpen] = React.useState(false)
	const [tabOpenData, setTabOpenData] = React.useState(null)

	React.useEffect(() => {
		if (tabOpen) {
			document.querySelector('html').style.overflow = 'hidden'
		} else {
			document.querySelector('html').style.overflow = 'initial'
		}
	}, [tabOpen])

	React.useEffect(() => {
		if (filteredDataWithSearch.length) {
			setTitles(
				uniq_fast(filteredDataWithSearch.map((item) => item.faculty_name))
			)
		}
	}, [filteredDataWithSearch])

	React.useEffect(() => {
		if (searchValue !== '' && filteredData.length) {
			const filtered = filteredData.filter((item) =>
				item.specialty_name.toLowerCase().includes(searchValue.toLowerCase())
			)
			setFilteredDataWithSearch(filtered)
		} else {
			setFilteredDataWithSearch(filteredData)
		}
	}, [searchValue, filteredData])

	React.useEffect(() => {
		if (educationPrograms.length) {
			const array = filtersList.map((item) => {
				if (
					item === 'Всі програми' ||
					item === 'Всі умови для вступу' ||
					item === 'Всі предмети для вступу'
				) {
					return ''
				} else {
					return item
				}
			})

			if (
				filtersList.includes('Всі програми') &&
				filtersList.includes('Всі умови для вступу') &&
				filtersList.includes('Всі предмети для вступу')
			) {
				setFilteredData(educationPrograms)
			} else {
				const filtered = educationPrograms.filter((item) => {
					let check = true
					array.forEach((element) => {
						if (
							!item.categories.toLowerCase().includes(element.toLowerCase())
						) {
							check = false
						}
					})
					if (check) {
						check = true
						return item
					} else {
						return false
					}
				})
				setFilteredData(filtered)
			}
		}
	}, [filtersList, educationPrograms])

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

	function isAN(value) {
		if (value instanceof Number) value = value.valueOf()

		return isFinite(value) && value === parseInt(value, 10)
	}

	React.useEffect(() => {
		const modalLink = window.location.href.split('=')[1]
		if (isAN(+modalLink) && modalLink !== 'null' && educationPrograms.length) {
			onOpenTab(educationPrograms.find((item) => +item.id === +modalLink))
		}
	}, [educationPrograms])

	const onOpenTab = (item) => {
		setTabOpenData(item)
		setTabOpen(true)
		var redirect = window.location.href.split('id=')[0] + 'id=' + item.id
		window.history.replaceState(null, '', redirect)
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
										<SvgIcon type='angle-bottom' />
									</button>
									{/* <a className='btn compare-btn' href='./compare.html'>
										<SvgIcon type='scale-balanced' />
										<span>Порівняння</span>
									</a> */}
								</div>
								<div className='search'>
									<input
										onChange={(e) => setSearchValue(e.target.value)}
										className='search-input'
										placeholder='Код або назва спеціальності'
									/>
									<SvgIcon type='search' />
								</div>
							</div>
							<Filters openFilter={openFilter} />
						</div>
						<div className='info-tabs__block'>
							<AccordionPrograms
								setTabOpen={onOpenTab}
								data={filteredDataWithSearch}
								titles={titles}
							/>
						</div>
					</div>
				</div>
			</section>
			<LatestNews />
			<TabModal tabOpen={tabOpen} setTabOpen={setTabOpen} data={tabOpenData} />
		</>
	)
}
