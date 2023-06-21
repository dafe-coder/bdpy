import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	resourcesData: [],
}
export const fetchResources = createAsyncThunk(
	'api/fetchResourcesStatus',
	async (params) => {
		const { data } = await axios.get(
			process.env.REACT_APP_API_URL + '/enrollment-materials'
		)
		return data
	}
)
const resourcesSlice = createSlice({
	name: 'info-programs',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchResources.rejected, (state) => {
				state.resourcesData = []
			})
			.addCase(fetchResources.fulfilled, (state, action) => {
				state.resourcesData = action.payload.enrollment_materials
			})
			.addCase(fetchResources.pending, (state) => {
				state.resourcesData = []
			})
	},
})

export default resourcesSlice.reducer
