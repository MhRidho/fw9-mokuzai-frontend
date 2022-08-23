import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  shipping: null,
  shippingName: null
}

export const shippingChoice = createSlice({
  name: 'shipping Choice',
  initialState,
  reducers: {
    costomShipping: (state, action) => {
      state.shipping = action.payload
    },
    costomShippingName: (state, action) => {
      state.shippingName = action.payload
    }
  }
})

export const {
  costomShipping,
  costomShippingName
} = shippingChoice.actions

export default shippingChoice.reducer