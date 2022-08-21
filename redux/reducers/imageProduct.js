import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  imageSrc: null,
};

export const CostomImage = createSlice({
  name: 'image-product',
  initialState,
  reducers: {
    costomImageSrc: (state, action) => {
      state.imageSrc = action.payload
    }
  }
})

export const {
  costomImageSrc
} = CostomImage.actions

export default CostomImage.reducer