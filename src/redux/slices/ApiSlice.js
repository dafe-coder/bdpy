import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	eventsCalendar: [],
	latestNews: [],
	faq: [],
}
export const fetchApi = createAsyncThunk(
	'api/fetchApiStatus',
	async (params) => {
		const { data } = await axios.get('https://bdpu.000webhostapp.com/api')
		return data
	}
)
const apiSlice = createSlice({
	name: 'api',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchApi.rejected, (state) => {
				state.eventsCalendar = []
			})
			.addCase(fetchApi.fulfilled, (state, action) => {
				state.eventsCalendar = action.payload.events_calendar
				state.latestNews = action.payload.latest_news
				state.faq = action.payload.faq
			})
			.addCase(fetchApi.pending, (state) => {
				state.eventsCalendar = []
			})
	},
})

export default apiSlice.reducer
