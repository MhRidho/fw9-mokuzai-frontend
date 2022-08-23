import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth from './auth';
import CostomImage from './imageProduct';
import CostomPage from './CostomPage';
import CostomPageProductId from './CostumPageProductId';
import CostomQuantityOnPageProduct from './CostomQuantityOnPageProduct';
import shippingChoice from './shippingChoice';

const imageUrlValConfig ={
  key: 'imageProduct',
  storage
}

const authConfig ={
  key: 'auth',
  storage
}

const idpageProductConfig ={
  key: 'product',
  storage
}

const shippingConfig ={
  key: 'product',
  storage
}

const presistedAuth = persistReducer(authConfig, auth)
const presistedReducerImage = persistReducer(imageUrlValConfig, CostomImage)
const presistedReducerpageProduct = persistReducer(idpageProductConfig, CostomPageProductId)
const presistedReducerShipping = persistReducer(shippingConfig, shippingChoice)

const reducer = combineReducers({
  CostomImage: presistedReducerImage,
  auth: presistedAuth,
  CostomPage,
  CostomPageProductId: presistedReducerpageProduct,
  CostomQuantityOnPageProduct,
  shippingChoice: presistedReducerShipping
})

export default reducer