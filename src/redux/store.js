import { configureStore } from '@reduxjs/toolkit'
import api from './slices/ApiSlice'
import filters from './slices/FilterSlice'
import about from './slices/AboutSlice'
import infoPrograms from './slices/InfoProgramsSlice'
import news from './slices/NewsSlice'
import newsOpen from './slices/NewsOpenSlice'
import resources from './slices/ResourcesSlice'

const store = configureStore({
	reducer: {
		api,
		filters,
		about,
		infoPrograms,
		news,
		newsOpen,
		resources,
	},
})

export default store
