import React, { useEffect } from 'react'
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
import axiosServerSide from '../helper/axiosServerSide'
import Router, { useRouter } from 'next/router';
import { costumQMin, costumQPlus } from '../redux/reducers/CostomQuantityOnPageProduct'
import { addToCart } from '../redux/asyncAction/auth'

export async function getServerSideProps(context) {
  try {
    // const searchBy = !context.query?.searchBy? 'product_name' : context.query.searchBy
    // const search = !context.query?.search? '' : context.query.search
    // const sortBy = !context.query?.sortBy? 'product_price' : context.query.sortBy
    // const sort = !context.query?.sort? 'ASC' : context.query.sort
    // const limit = !context.query?.limit? 12 : context.query.limit
    const id = !context.query?.id? 10 : context.query.id
    const products = await axiosServerSide.get(`/product/details/${id}`)
    return {
      props: {
        // pagination: products.data.pageInfo,
        dataProducts: products.data.result
      }
    }
  } catch (e) {
    return {
      props: {
        // pagination: products.pageInfo,
        message: e.message
      }
    }
  }
}


export default function TestComponent(props) {
  const dispatch = useDispatch()
  const imageUrl = useSelector((state) => state?.CostomImage.imageSrc)
  const productId = useSelector((state) => state?.CostomPageProductId?.page)
  const productQ = useSelector((state) => state.CostomQuantityOnPageProduct.quantityProduct)
  const userId = useSelector((state) => state.auth.userId)
  // console.log(productQ);
  useEffect(()=> {
    // const id = productId
    Router.push(`/product?id=${productId}`)
  }, [productId])
  // console.log(props.dataProducts);
  const addQ = ()=> {
    dispatch(costumQPlus())
  }
  const minQ = ()=> {
    dispatch(costumQMin())
  }
  const onAddCart = () => {
    const param = {product_id: productId, user_id: userId, quantity: productQ}
    dispatch(addToCart(param))
  }
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
          <span className='font-size-mokuzai-32 c-primary font-weight-mokuzai-400 mb-3'>{props.dataProducts.product_name ? props.dataProducts.product_name : 'undifined'}</span>
          <div className='d-flex flex-row align-items-center gap-3'>
            <span>stars</span>
            <span className='font-size-mokuzai-10'>2 (reviews)</span>
          </div>
          <div className='d-flex flex-row align-items-center gap-5 mb-4'>
            <span className='font-size-mokuzai-32 font-weight-mokuzai-700 c-primary'>${props.dataProducts.product_price ? props.dataProducts.product_price : null}</span>
            <span>19 Sold / 40 In Stock</span>
          </div>
          <p>{props.dataProducts.product_desc ? props.dataProducts.product_desc : 'deskripsi kosong'}</p>
          {/* button */}
          <div className='d-flex flex-row align-items-center gap-3 mb-4'>
            <div className='d-flex flex-row justify-content-between align-items-center p-3 quantity-btn-product border border-3'>
              <div>
                <Button onClick={minQ} disabled={productQ <= 1 ? true : false} className='p-0 bgc-unset border-0 c-primary shadow-sm d-flex align-items-center'><Image src={'/icons/min.svg'} width={12} height={10} alt='minus' /></Button>
              </div>
              <span>{productQ}</span>
              <div>
                <Button onClick={addQ} className='p-0 bgc-unset border-0 c-primary shadow-sm'><Image src={'/icons/plus.svg'} width={12} height={12} alt='plus' /></Button>
              </div>
            </div>
            <div>
              <Button onClick={onAddCart} className='add-cart-btn-product rounded-0 border-0 bgc-primary shadow-none'>
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
              <li className='list-group-item border-0 p-0 py-1'>Categories: {props.dataProducts.category_name ? props.dataProducts.category_name : 'N/A'}</li>
              <li className='list-group-item border-0 p-0 py-1'>Tag: Furniture, Chair, Scandinavian, Modern</li>
              <li className='list-group-item border-0 p-0 py-1'>Product ID: {props.dataProducts.id ? props.dataProducts.id : 'N/A'}</li>
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