import React from 'react'
import Image from 'next/image'

export default function index({image, alt}) {
  return (
    <div className='image-product-page-main-wrap'>
      <Image className='' src={image} layout='responsive' height='100%' width='100%' objectFit='contain' alt={alt} />
    </div>
  )
}
