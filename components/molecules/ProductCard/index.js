import Image from 'next/image'
import React from 'react'
import { Col } from 'react-bootstrap'

export default function index({id, name, price}) {
  return (
    <Col md={3} className='d-flex flex-column card-product justify-content-center mb-3'>
      <div className='d-flex justify-content-center image-product-wrap overflow-hidden mb-3'>
        <Image src={'/images/image-product.png'} height={400} width={293} alt='products' />
      </div>
      <div className='d-flex flex-column gap-2 text-center'>
        <span className='font-size-mokuzai-16 font-weight-mokuzai-400'>{name}</span>
        <span className='font-size-mokuzai-18 font-weight-mokuzai-700'>{price}</span>
      </div>
    </Col>
  )
}
