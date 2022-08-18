import React from 'react'
import MainTemplate from '../../components/organisms/MainTemplate'
import ProductHomeCardLeft from '../../components/organisms/ProductHomeCardLeft'
import ProductHomeCardRight from '../../components/organisms/ProductHomeCardRight'


export default function TestComponent() {
  return (
    <MainTemplate title='test judul' titleBanner='My Account' descBanner='Register and log in with your account to be able to shop at will'>
      <div className='d-flex flex-column'>
        <ProductHomeCardLeft />
        <ProductHomeCardRight />
      </div>
    </MainTemplate>
  )
}
