import React from 'react'
import './App.css'
import { Footer, Header } from './Components'
import { useDispatch } from 'react-redux'
import { fetchApi } from './redux/slices/ApiSlice'
import { Routes, Route } from 'react-router-dom'
import {
	Main,
	About,
	InfoPrograms,
	News,
	NewsOpen,
	Contacts,
	Resources,
} from './pages'

function App() {
	const dispatch = useDispatch()

	React.useEffect(() => {
		dispatch(fetchApi())
	}, [dispatch])

	return (
		<div className='wrapper'>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/about' element={<About />} />
				<Route path='/info-programs' element={<InfoPrograms />} />
				<Route path='/news' element={<News />} />
				<Route path='/news-open' element={<NewsOpen />} />
				<Route path='/contacts' element={<Contacts />} />
				<Route path='/resources' element={<Resources />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
