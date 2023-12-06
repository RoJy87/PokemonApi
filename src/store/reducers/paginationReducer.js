import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pageNumber: 1,
  limitOnPage: 20,
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload
    },
    setLimitOnPage: (state, action) => {
      state.limitOnPage = action.payload
    },
  },
})

export const { setPageNumber, setLimitOnPage } = paginationSlice.actions

export default paginationSlice.reducer
