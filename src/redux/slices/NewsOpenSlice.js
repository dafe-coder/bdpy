import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	newsOpenData: null,
}
export const fetchNewsOpen = createAsyncThunk(
	'api/fetchNewsOpenStatus',
	async (params) => {
		const { data } = await axios.get(
			`${process.env.REACT_APP_API_URL}/news/${params}`
		)
		return data
	}
)
const newsOpenSlice = createSlice({
	name: 'info-programs',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchNewsOpen.rejected, (state) => {
				state.newsOpenData = null
			})
			.addCase(fetchNewsOpen.fulfilled, (state, action) => {
				state.newsOpenData = action.payload.news
			})
			.addCase(fetchNewsOpen.pending, (state) => {
				state.newsOpenData = null
			})
	},
})

export default newsOpenSlice.reducer
