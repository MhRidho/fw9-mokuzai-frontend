import React from 'react'
import { Button } from 'react-bootstrap'
import { FiX } from 'react-icons/fi'
import Image from 'next/image'

export default function CardCart() {
  return (
    <div className='d-flex flex-row align-items-center w-100 justify-content-between pe-5 ps-2 border border-3'>
      <div className='d-flex flex-row align-items-center gap-3'>
        <Button className='bgc-unset border-0 c-black shadow-none p-0'>
          <FiX size={20} />
        </Button>
        <div className='warp-image-cart overflow-hidden position-relative'>
          <Image className='' layout='responsive' height='100%' width='100%' objectFit='cover' src={'/images/sova.png'} alt='test' />
        </div>
      </div>
      <span>Fabric Mid Century Chair</span>
      <span>$10.50</span>
      <div className='d-flex flex-row justify-content-between align-items-center quantity-btn-product'>
        <div>
          <Button className='p-0 bgc-unset border-0 c-primary shadow-sm d-flex align-items-center'><Image src={'/icons/min.svg'} width={12} height={10} alt='minus' /></Button>
        </div>
        <span>5</span>
        <div>
          <Button className='p-0 bgc-unset border-0 c-primary shadow-sm'><Image src={'/icons/plus.svg'} width={12} height={12} alt='plus' /></Button>
        </div>
      </div>
      <span>$21.00</span>
    </div>
  )
}
