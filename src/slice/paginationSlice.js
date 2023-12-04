import { createSlice } from '@reduxjs/toolkit'

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    pageNumber: 1,
    limitOnPage: 20,
    totalPages: 1,
  },
  reducers: {
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload
    },
    setLimitOnPage: (state, action) => {
      state.limitOnPage = action.payload
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload
    },
  },
})

export const { setPageNumber, setLimitOnPage, setTotalPages } = paginationSlice.actions

export default paginationSlice.reducer
