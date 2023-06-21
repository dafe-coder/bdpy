import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	eventsCalendar: [],
	latestNews: [],
	faq: [],
	loading: true,
}
export const fetchApi = createAsyncThunk(
	'api/fetchApiStatus',
	async (params) => {
		const { data } = await axios.get(process.env.REACT_APP_API_URL)
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
				state.loading = true
			})
			.addCase(fetchApi.fulfilled, (state, action) => {
				state.eventsCalendar = action.payload.events_calendar
				state.latestNews = action.payload.latest_news
				state.faq = action.payload.faq
				state.loading = false
			})
			.addCase(fetchApi.pending, (state) => {
				state.eventsCalendar = []
				state.loading = true
			})
	},
})

export default apiSlice.reducer
