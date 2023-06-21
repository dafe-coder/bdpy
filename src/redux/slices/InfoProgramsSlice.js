import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	educationPrograms: [],
	filtersList: [
		'Всі програми',
		'Всі умови для вступу',
		'Всі предмети для вступу',
	],
}
export const fetchInfoPrograms = createAsyncThunk(
	'api/fetchInfoProgramsStatus',
	async (params) => {
		const { data } = await axios.get(
			process.env.REACT_APP_API_URL + '/education-programs'
		)
		return data
	}
)
const infoProgramsSlice = createSlice({
	name: 'info-programs',
	initialState,
	reducers: {
		setFilterList(state, action) {
			state.filtersList = state.filtersList.map((item, i) => {
				if (i === action.payload.id) {
					return action.payload.title
				} else {
					return item
				}
			})
		},
	},
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

export const { setFilterList } = infoProgramsSlice.actions

export default infoProgramsSlice.reducer
