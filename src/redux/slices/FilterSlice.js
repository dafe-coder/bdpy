import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	activeFilterEvent: 'Показати всі',
}

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setActiveFilterEvent(state, action) {
			state.activeFilterEvent = action.payload
		},
	},
})

export const selectFilter = (state) => state.filters
export const { setActiveFilterEvent } = filterSlice.actions

export default filterSlice.reducer
