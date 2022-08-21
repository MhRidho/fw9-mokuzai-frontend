import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import qs from 'qs'
import axiosServer from '../../helper/axiosServer';

export const registerSeller = createAsyncThunk('auth/register-seller', async (request)=>{
  const result ={}
  try {
    const send = qs.stringify(request)
    const { data } = await axiosServer().post('auth/register_seller', send)
    window.alert(data.message)
    return data
  } catch (e) {
    result.errorMsg = e.response.data.message
    return result
  }
})

export const registerCostumer = createAsyncThunk('auth/register-costumer', async (request)=>{
  const result ={}
  try {
    const send = qs.stringify(request)
    const { data } = await axiosServer().post('auth/register_costumer', send)
    window.alert(data.message)
    return data
  } catch (e) {
    result.errorMsg = e.response.data.message
    return result
  }
})

export const login = createAsyncThunk('auth/login-user', async (request)=> {
  const result = {} 
  try {
    const send = qs.stringify(request)
    const { data } = await axiosServer().post('auth/login', send )
    // console.log(data);
    Cookies.set('token', data.result.token)
    result.id = data.result.user_id
    result.roles = data.result.roles
    window.alert(data.message)
    return result
  } catch (e) {
    // result.errorMsg = e.response.result.message
    result = data.result
    return result
  }
})