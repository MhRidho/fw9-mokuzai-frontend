import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: null,
};

export const CostomPageProductId = createSlice({
  name: 'page-product',
  initialState,
  reducers: {
    costomPageId: (state, action)=> {
      state.page = action.payload
    }
  }
})

export const {
  costomPageId
} = CostomPageProductId.actions

export default CostomPageProductId.reducer