import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import MainTemplateAuth from '../../../components/organisms/MainTemplateAuth'
import ChangeImageProfile from '../../../components/molecules/ChangeImageProfile'
import ChangeEmail from '../../../components/molecules/ChangeEmail'
import ChangeGender from '../../../components/molecules/ChangeGender'
import ChangeDesc from '../../../components/molecules/ChangeDesc'
import ChangeStorename from '../../../components/molecules/ChangeStorename'
import ChangeDescStore from '../../../components/molecules/ChangeDescStore'
import ChangeName from '../../../components/molecules/ChangeName'
import { FiLogOut } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { Getprofile } from '../../../redux/asyncAction/auth'

export default function ProfileSeller() {
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(Getprofile())
  }, [dispatch])
  const dataProfile = useSelector((state) => state.auth.dataProfile)
  console.log(dataProfile);
  return (
    <MainTemplateAuth title='Profile' titleBanner='Profile' descBanner='See your notifications for the latest updates'>
      <div className='d-flex flex-column gap-3'>
        {/* image & name */}
        <div className='d-flex flex-row align-items-center gap-3'>
          <ChangeImageProfile />
          <div className='d-flex flex-column gap-3'>
            <div className='d-flex flex-row align-items-center'>
              <span className='c-primary font-size-mokuzai-18 font-weight-mokuzai-700'>Syifa</span>
              <ChangeName />
            </div>
            <sapn>as Seller</sapn>
          </div>
        </div>
        {/* image & name */}
        {/* gender etc */}
        <div className='d-flex flex-column gap-1'>
          <div className='d-flex flex-row justify-content-between align-items-center border border-3 w-100 p-4'>
            <div className='d-flex flex-column'>
              <span>gender</span>
              <span>{dataProfile?.result?.gender ? dataProfile?.result?.gender : 'empty'}</span>
            </div>
            <ChangeGender />
          </div>

          <div className='d-flex flex-row justify-content-between align-items-center border border-3 w-100 p-4'>
            <div className='d-flex flex-column'>
              <span>Email</span>
              <span>{dataProfile?.result?.email ? dataProfile?.result?.email : 'empty'}</span>
            </div>
            <ChangeEmail />
          </div>

          <div className='d-flex flex-row justify-content-between align-items-center border border-3 w-100 p-4'>
            <div className='d-flex flex-column'>
              <span>Store Name</span>
              <span>{dataProfile?.result?.store_name ? dataProfile?.result?.store_name : 'empty'}</span>
            </div>
            <ChangeStorename />
          </div>

          <div className='d-flex flex-row justify-content-between align-items-center border border-3 w-100 p-4'>
            <div className='d-flex flex-column'>
              <span>Store Description</span>
              <span>{dataProfile?.result?.store_desc ? dataProfile?.result?.store_desc : 'empty'}</span>
            </div>
            <ChangeDescStore />
          </div>
        </div>
        {/* gender etc */}
        <div>
          <Button className='rounded-0 bgc-primary border-0 shadow-none'>
            <div className='d-flex flex-row align-items-end gap-3 py-3 px-4'>
              <FiLogOut size={24} />
              <span className='font-size-mokuzai-18 font-weight-mokuzai-700'>Logout</span>
            </div>
          </Button>
        </div>
      </div>
    </MainTemplateAuth>
  )
}
