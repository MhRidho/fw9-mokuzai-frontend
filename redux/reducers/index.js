import { combineReducers } from '@reduxjs/toolkit';
import CostomImage from './imageProduct';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const imageUrlValConfig ={
  key: 'imageProduct',
  storage
}

const presistedReducerImage = persistReducer(imageUrlValConfig, CostomImage)

const reducer = combineReducers({
  CostomImage: presistedReducerImage,
})

export default reducer