import React from 'react'
import MainTemplate from '../components/organisms/MainTemplate'
import ProductCard from '../components/molecules/ProductCard'
import CardImage from '../components/atoms/CardImageProductDetail'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import { FiHeart } from 'react-icons/fi'
import { GrDeliver } from 'react-icons/gr'
import { BiRuler, BiMap } from 'react-icons/bi'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'


export default function TestComponent() {
  const imageUrl = useSelector((state) => state?.CostomImage.imageSrc)
  console.log(imageUrl);
  console.log(imageUrl);
  return (
    <MainTemplate title='Product' titleBanner='My Account' descBanner='Register and log in with your account to be able to shop at will'>
      <Container className='d-flex flex-column'>
        <Row className='mb-4'>
          <Col md={2} className='d-flex flex-column gap-3 justify-content-between'>
            <CardImage imageId={'/home/bg-mokuzai-headhome.png'} image={'/home/bg-mokuzai-headhome.png'} alt={'ahvfeif'} />
            <CardImage imageId={'/images/sova.png'} image={'/images/sova.png'} alt={'ahvfeif'} />
            <CardImage imageId={'/images/sova.png'} image={'/images/sova.png'} alt={'ahvfeif'} />
            <CardImage imageId={'/images/sova.png'} image={'/images/sova.png'} alt={'ahvfeif'} />
            <CardImage imageId={'/images/sova.png'} image={'/images/sova.png'} alt={'ahvfeif'} />
          </Col>
          <Col md={10} className='d-flex flex-column border border-3 p-3'>
            <div className='image-product-page-main-wrap d-flex align-items-center position-relative'>
              <Image src={imageUrl ? imageUrl :'/images/sova.png'} layout="fill" objectFit="contain"  alt='abeoa' />
            </div>
          </Col>
        </Row>

        <div className='d-flex flex-column gap-3'>
          <span className='font-size-mokuzai-32 c-primary font-weight-mokuzai-400 mb-3'>Coaster Home Furnishings Sofa in Oatmeal</span>
          <div className='d-flex flex-row align-items-center gap-3'>
            <span>stars</span>
            <span className='font-size-mokuzai-10'>2 (reviews)</span>
          </div>
          <div className='d-flex flex-row align-items-center gap-5 mb-4'>
            <span className='font-size-mokuzai-32 font-weight-mokuzai-700 c-primary'>$765.99</span>
            <span>19 Sold / 40 In Stock</span>
          </div>
          <p>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices exurabitur ut magna dignissim, dignissiNullam vitae venenatis elit. Proin dui lacus, viverra at imperdiet non, facilisis eget orci. Vivamus ac elit tellus. Vestibulum nulla dui, consequat vitae diam eu, pretium finibus libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam vitae neque tellus.</p>
          {/* button */}
          <div className='d-flex flex-row align-items-center gap-3 mb-4'>
            <div className='d-flex flex-row justify-content-between align-items-center p-3 quantity-btn-product border border-3'>
              <div>
                <Button className='p-0 bgc-unset border-0 c-primary shadow-sm d-flex align-items-center'><Image src={'/icons/min.svg'} width={12} height={10} alt='minus' /></Button>
              </div>
              <span>5</span>
              <div>
                <Button className='p-0 bgc-unset border-0 c-primary shadow-sm'><Image src={'/icons/plus.svg'} width={12} height={12} alt='plus' /></Button>
              </div>
            </div>
            <div>
              <Button className='add-cart-btn-product rounded-0 border-0 bgc-primary shadow-none'>
                <span className='font-size-mokuzai-16 font-weight-mokuzai-700'>Add to cart</span>
              </Button>
            </div>
            <div>
              <Button className='favorit-btn-product rounded-0 border-0 bgc-primary shadow-none'>
                <FiHeart size={22} />
              </Button>
            </div>
            <div>
              <Button className='add-cart-btn-product rounded-0 border-4 border-dark bg-white shadow-none'>
                <span className='font-size-mokuzai-16 font-weight-mokuzai-700 c-primary'>Add to wishlist</span>
              </Button>
            </div>
          </div>
          {/* button */}
          {/* info etc */}
          <div>
            <ul className='list-group'>
              <li className='list-group-item border-0 p-0 py-1'>SKU: N/A</li>
              <li className='list-group-item border-0 p-0 py-1'>Categories: Furniture, Interior, Chair</li>
              <li className='list-group-item border-0 p-0 py-1'>Tag: Furniture, Chair, Scandinavian, Modern</li>
              <li className='list-group-item border-0 p-0 py-1'>Product ID: 274</li>
            </ul>
          </div>
          {/* info etc */}
          {/* info store etc */}
          <div className='d-flex flex-row gap-4'>
            <div className='d-flex flex-row align-items-center gap-3'>
              <GrDeliver size={22} />
              <span>Delivery and return</span>
            </div>
            <div className='d-flex flex-row align-items-center gap-3'>
              <BiRuler size={22} />
              <span>Size Guide</span>
            </div>
            <div className='d-flex flex-row align-items-center gap-3'>
              <BiMap size={22} />
              <span>Store availability</span>
            </div>
          </div>
          {/* info store etc */}
          {/* sodmed */}
          <div className='d-flex flex-row gap-4 mt-4'>
            <Link href={'#'}>
              <a>
                <Image src={'/icons/facebook-light.svg'} width={40} height={40} alt='sosmed link' />
              </a>
            </Link>
            <Link href={'#'}>
              <a>
                <Image src={'/icons/twitter-light.svg'} width={40} height={40} alt='sosmed link' />
              </a>
            </Link>
            <Link href={'#'}>
              <a>
                <Image src={'/icons/youtube-light.svg'} width={40} height={40} alt='sosmed link' />
              </a>
            </Link>
          </div>
          {/* sodmed */}
          {/* des, review etc */}

          {/* des, review etc */}
          {/* carousel */}
          <div className='d-flex flex-column gap-5'>
            <span className='text-center font-size-mokuzai-46 font-weight-mokuzai-400 c-primary'>Related Products</span>
            <div className='d-flex product-slide'>
              <ProductCard name={'Coaster 506222-CO Loveseat'} price={'$765.99'} />
              <ProductCard name={'Coaster 506222-CO Loveseat'} price={'$765.99'} />
              <ProductCard name={'Coaster 506222-CO Loveseat'} price={'$765.99'} />
              <ProductCard name={'Coaster 506222-CO Loveseat'} price={'$765.99'} />
              <ProductCard name={'Coaster 506222-CO Loveseat'} price={'$765.99'} />
              <ProductCard name={'Coaster 506222-CO Loveseat'} price={'$765.99'} />
            </div>
          </div>
          {/* carousel */}
        </div>
      </Container>
    </MainTemplate>
  )
}