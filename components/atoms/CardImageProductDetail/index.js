import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { costomImageSrc } from '../../../redux/reducers/imageProduct'

export default function CardImageindex({imageId, image, alt}) {
  const dispatch = useDispatch()
  const imageChange = (imageSrc) => {
    dispatch(costomImageSrc(imageSrc))
  }
  return (
    <a className="text-decoration-none" onClick={() => imageChange(imageId)}>
      <div className='image-product-page-wrap overflow-hidden bg-black'>
        <Image src={image} layout='responsive' height='100%' width='100%' objectFit='cover' alt={alt} className='image-product-page-size' />
      </div>
    </a>
  )
}
