import Image from 'next/image'
import React from 'react'
import { Col } from 'react-bootstrap'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { costomPageId } from '../../../redux/reducers/CostumPageProductId'

export default function ProductCard({id, name, price}) {
  const dispatch = useDispatch()
  const onPage = (idProduct)=> {
    dispatch(costomPageId(idProduct))
  }
  return (
    // <Link href={'/product'}>
    //   <a className='text-decoration-none'>
    <Col md={3} className='d-flex flex-column card-product justify-content-center mb-3'>
      <Link href={'/product'}>
        <a onClick={() => onPage(id)} className='text-decoration-none'>
          <div className='d-flex justify-content-center image-product-wrap overflow-hidden mb-3'>
            <Image src={'/images/image-product.png'} height={400} width={293} alt='products' />
          </div>
        </a>
      </Link>
      <div className='d-flex flex-column gap-2 text-center'>
        <span className='font-size-mokuzai-16 font-weight-mokuzai-400'>{name}</span>
        <span className='font-size-mokuzai-18 font-weight-mokuzai-700'>{price}</span>
      </div>
    </Col>
    //   </a>
    // </Link>
  )
}
