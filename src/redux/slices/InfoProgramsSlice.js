import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	educationPrograms: [],
}
export const fetchInfoPrograms = createAsyncThunk(
	'api/fetchInfoProgramsStatus',
	async (params) => {
		const { data } = await axios.get(
			'https://bdpu.000webhostapp.com/api/education-programs'
		)
		return data
	}
)
const infoProgramsSlice = createSlice({
	name: 'info-programs',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchInfoPrograms.rejected, (state) => {
				state.educationPrograms = []
			})
			.addCase(fetchInfoPrograms.fulfilled, (state, action) => {
				state.educationPrograms = action.payload.education_programs
			})
			.addCase(fetchInfoPrograms.pending, (state) => {
				state.educationPrograms = []
			})
	},
})

export default infoProgramsSlice.reducer
