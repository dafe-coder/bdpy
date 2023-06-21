import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	accordion: [],
	universityStatistics: [],
}
export const fetchAboutUs = createAsyncThunk(
	'api/fetchAboutUsStatus',
	async (params) => {
		const { data } = await axios.get(
			process.env.REACT_APP_API_URL + '/about-us'
		)
		return data
	}
)
const aboutSlice = createSlice({
	name: 'about',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAboutUs.rejected, (state) => {
				state.universityStatistics = []
			})
			.addCase(fetchAboutUs.fulfilled, (state, action) => {
				state.accordion = action.payload.about_us
				state.universityStatistics = action.payload.university_statistics
			})
			.addCase(fetchAboutUs.pending, (state) => {
				state.universityStatistics = []
			})
	},
})

export default aboutSlice.reducer
