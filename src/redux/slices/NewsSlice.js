import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	newsList: [],
}
export const fetchNews = createAsyncThunk(
	'api/fetchNewsStatus',
	async (params) => {
		const { data } = await axios.get(process.env.REACT_APP_API_URL + '/news')
		return data
	}
)
const newsSlice = createSlice({
	name: 'info-programs',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchNews.rejected, (state) => {
				state.newsList = []
			})
			.addCase(fetchNews.fulfilled, (state, action) => {
				state.newsList = action.payload.news.data
			})
			.addCase(fetchNews.pending, (state) => {
				state.newsList = []
			})
	},
})

export default newsSlice.reducer
