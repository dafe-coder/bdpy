import React from 'react'
import './App.css'
import './index.scss'
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
	Page404,
} from './pages'
import Wrapper from './ScrollTop'

function App() {
	const dispatch = useDispatch()

	React.useEffect(() => {
		dispatch(fetchApi())
	}, [dispatch])

	return (
		<>
			<div className='wrapper'>
				<Header />
				<Wrapper>
					<Routes>
						<Route path='/' element={<Main />} />
						<Route path='/about' element={<About />} />
						<Route path='/info-programs/:id' element={<InfoPrograms />} />
						<Route path='/news' element={<News />} />
						<Route path='/news-open' element={<NewsOpen />} />
						<Route path='/contacts' element={<Contacts />} />
						<Route path='/resources' element={<Resources />} />
						<Route path='*' element={<Page404 />} />
					</Routes>
				</Wrapper>
			</div>
			<Footer />
		</>
	)
}

export default App
