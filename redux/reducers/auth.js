import { createSlice } from '@reduxjs/toolkit'
import { createCheckout, getAllCart, Getprofile, login, registerCostumer, registerSeller } from '../asyncAction/auth';


const initialState = {
  userId: null,
  roles: null,
  errorMsg: null,
  successMsg: null,
  resultMsg: {},
  dataProfile: {},
  dataCart: {},
  dataCheckout: {}
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authLogout: (state, action) => {
      state.userId = null
      state.roles = null
    }
  },
  extraReducers: (build) => {
    build.addCase(login.pending, (state)=> {
      state.errorMsg = null
      state.successMsg = null
    })
    build.addCase(login.fulfilled, (state, action)=> {
      state.successMsg = action.payload
      state.userId = action.payload.id
      state.roles = action.payload.roles
    })
    build.addCase(login.rejected, (state, action)=> {
      state.resultMsg = action.payload
    })

    build.addCase(registerSeller.pending, (state)=> {
      state.errorMsg = null
      state.successMsg = null
    })
    build.addCase(registerSeller.fulfilled, (state, action)=> {
      state.successMsg = action.payload
    })

    build.addCase(registerCostumer.pending, (state)=> {
      state.errorMsg = null
      state.successMsg = null
    })
    build.addCase(registerCostumer.fulfilled, (state, action)=> {
      state.successMsg = action.payload
    })

    build.addCase(Getprofile.pending, (state)=> {
      state.errorMsg = null
      state.successMsg = null
    })
    build.addCase(Getprofile.fulfilled, (state, action)=> {
      state.dataProfile = action.payload
    })

    build.addCase(createCheckout.pending, (state)=> {
      state.errorMsg = null
      state.successMsg = null
    })
    build.addCase(createCheckout.fulfilled, (state, action)=> {
      state.dataCheckout = action.payload
    })

    build.addCase(getAllCart.pending, (state)=> {
      state.errorMsg = null
      state.successMsg = null
    })
    build.addCase(getAllCart.fulfilled, (state, action)=> {
      state.dataCart = action.payload.result
    })
  }
})

export {login, registerSeller, registerCostumer}
export const { authLogout } = auth.actions
export default auth.reducer