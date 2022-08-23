import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  quantityProduct: 1,
}

export const CostomQuantityOnPageProduct = createSlice({
  name: 'product quantity',
  initialState,
  reducers: {
    costumQPlus: (state) => {
      state.quantityProduct = state.quantityProduct + 1
    },
    costumQMin: (state) => {
      state.quantityProduct = state.quantityProduct - 1
    },
  }
})

export const {
  costumQPlus,
  costumQMin
} = CostomQuantityOnPageProduct.actions

export default CostomQuantityOnPageProduct.reducer