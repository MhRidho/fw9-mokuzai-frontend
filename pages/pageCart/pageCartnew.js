import React, { useEffect } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import MainTempalteAuth from '../../components/organisms/MainTemplateAuth'
import CardCart from '../../components/organisms/CardCart'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { createCheckout, getAllCart } from '../../redux/asyncAction/auth'
import { Formik } from 'formik'
import { costomShipping, costomShippingName } from '../../redux/reducers/shippingChoice'

// const AuthCheckout = ({errors, handleSubmit, handleChange}) => {
//   return (
//     <Form noValidate onSubmit={handleSubmit}>
//       <div className='d-flex flex-row justify-content-between'>
//         <span>Shipping</span>
//         <Form.Group className="flex-nowrap amoutWarp text-center" onChange={handleChange}>
//           <div className='d-flex flex-column'>
//             <div className='d-flex flex-row gap-2 align-items-center'>
//               <Form.Check onChange={handleChange} type='radio' name='shiping' value='flate' />
//               <span className='font-size-mokuzai-12 font-weight-mokuzai-400'>Flat rate: $10</span>
//             </div>
//             <div className='d-flex flex-row gap-2 align-items-center'>
//               <Form.Check onChange={handleChange} type='radio' name='shiping' value='freeShiping' />
//               <span className='font-size-mokuzai-12 font-weight-mokuzai-400'>Free shipping</span>
//             </div>
//             <div className='d-flex flex-row gap-2 align-items-center'>
//               <Form.Check onChange={handleChange} type='radio' name='shiping' value='pickup' />
//               <span className='font-size-mokuzai-12 font-weight-mokuzai-400'>Local pickup</span>
//             </div>
//           </div>
//         </Form.Group>
//       </div>
//       <hr />
//       <div className='d-flex flex-row justify-content-between'>
//         <span>Total Price</span>
//         <span>${}</span>
//       </div>
//       <Button className='d-flex rounded-0 bgc-primary border-0 mt-3'>
//         <div className='py-3 px-4 text-center mx-auto'>
//           <span className='font-size-mokuzai-18 font-weight-mokuzai-700'>Procced To Check Out</span>
//         </div>
//       </Button>
//     </Form>
//   )
// }

export default function PageCart() {
  const dispatch = useDispatch()
  const navigate = useRouter()
  const dataCart = useSelector((state) => state.auth.dataCart)
  const userId = useSelector((state) => state.auth.userId)
  const shippingChoice = useSelector((state) => state.shippingChoice.shipping)
  const shippingName = useSelector((state) => state.shippingChoice.shippingName)
  // const dataCheckout = useSelector((state) => state.auth.dataCheckout)
  useEffect(()=>{
    dispatch(getAllCart(userId))
  }, [dispatch])
  const totalPrice = dataCart.map((o) => o.product_price * o.quantity)
  const sumTotalPrice = totalPrice.reduce((partialSum, a) => partialSum + a, 0)

  const onClickShippingFlat = () => {
    dispatch(costomShipping(10))
    dispatch(costomShippingName('Flat'))
  }
  const onClickShippingFree = () => {
    dispatch(costomShipping(0))
    dispatch(costomShippingName('Free shipping'))
  }
  const onClickShippingLocal = () => {
    dispatch(costomShipping(5))
    dispatch(costomShippingName('Local pickup'))
  }
  const totalFinal = shippingChoice ? shippingChoice + sumTotalPrice : sumTotalPrice

  const onCheckout = () => {
    const param = {total: totalFinal, shipping: shippingName}
    dispatch(createCheckout(param))
    navigate.push('/profile/cart/checkout')
  }
  console.log(dataCart);
  return (
    <MainTempalteAuth title='Your Cart' titleBanner='Your Cart' descBanner='Buy everything in your cart now!'>
      <Row>
        <Col md={9} className=''>
          <div className='d-flex flex-column gap-4'>
            <div className='d-flex flex-row justify-content-between px-5 w-100'>
              <span className='col-6'>PRODUCT</span>
              <div className='col-6 d-flex flex-row justify-content-between'>
                <span>PRICE</span>
                <span>QUANTITY</span>
                <span>TOTAL</span>
              </div>
            </div>
            <div className='d-flex flex-column gap-3'>
              {/* <CardCart />
              <CardCart />
              <CardCart /> */}
              {dataCart?.map((o) => {
                return (
                  <CardCart key={o.id} nameProduct={o.product_name} price={o.product_price} quantity={o.quantity} total={o.product_price * o.quantity} />
                )
              })}
            </div>
            <hr />
            <div className='d-flex flex-row gap-4 justify-content-end'>
              <Button className='p-0 bgc-unset border-0 shadow-none'>
                <span className='c-primary'>Clear Cart</span>
              </Button>
              <Button className='p-0 bgc-unset border-0 shadow-none'>
                <span className='c-primary'>Update Cart</span>
              </Button>
            </div>
          </div>
        </Col>
        <Col md={3} className=''>
          <div className='d-flex flex-column gap-3 p-2 bgc-cotton'>
            <span>Cart Total</span>
            <div className='d-flex flex-row justify-content-between'>
              <span>subtotal</span>
              <span>${sumTotalPrice}</span>
            </div>
            <div className='d-flex flex-row justify-content-between'>
              <span>Shipping</span>
              <div className='d-flex flex-column'>
                <div className='d-flex flex-row gap-2 align-items-center'>
                  <Form.Check onChange={onClickShippingFlat} type='radio' name='shiping' value='flat' />
                  <span className='font-size-mokuzai-12 font-weight-mokuzai-400'>Flat rate: $10</span>
                </div>
                <div className='d-flex flex-row gap-2 align-items-center'>
                  <Form.Check onChange={onClickShippingFree} type='radio' name='shiping' value='freeShiping' />
                  <span className='font-size-mokuzai-12 font-weight-mokuzai-400'>Free shipping</span>
                </div>
                <div className='d-flex flex-row gap-2 align-items-center'>
                  <Form.Check onChange={onClickShippingLocal} type='radio' name='shiping' value='pickup' />
                  <span className='font-size-mokuzai-12 font-weight-mokuzai-400'>Local pickup</span>
                </div>
              </div>
            </div>
            <hr />
            <div className='d-flex flex-row justify-content-between'>
              <span>Total Price</span>
              <span>${shippingChoice ? shippingChoice + sumTotalPrice : sumTotalPrice}</span>
            </div>
            <Button onClick={onCheckout} className='d-flex rounded-0 bgc-primary border-0 mt-3'>
              <div className='py-3 px-4 text-center mx-auto'>
                <span className='font-size-mokuzai-18 font-weight-mokuzai-700'>Procced To Check Out</span>
              </div>
            </Button>
          </div>
        </Col>
      </Row>
    </MainTempalteAuth>
  )
}

// import React, { Component } from 'react'
// import { Row, Col, Form, Button } from 'react-bootstrap'
// import MainTempalteAuth from '../../components/organisms/MainTemplateAuth'
// import CardCart from '../../components/organisms/CardCart'

// export default class pageCartnew extends Component {
//   render() {
//     return (
//       <MainTempalteAuth title='Your Cart' titleBanner='Your Cart' descBanner='Buy everything in your cart now!'>
//         <Row>
//           <Col md={9} className=''>
//             <div className='d-flex flex-column gap-4'>
//               <div className='d-flex flex-row justify-content-between px-5 w-100'>
//                 <span className='col-6'>PRODUCT</span>
//                 <div className='col-6 d-flex flex-row justify-content-between'>
//                   <span>PRICE</span>
//                   <span>QUANTITY</span>
//                   <span>TOTAL</span>
//                 </div>
//               </div>
//               <div className='d-flex flex-column gap-3'>
//                 <CardCart />
//                 <CardCart />
//                 <CardCart />
//               </div>
//               <hr />
//               <div className='d-flex flex-row gap-4 justify-content-end'>
//                 <Button className='p-0 bgc-unset border-0 shadow-none'>
//                   <span className='c-primary'>Clear Cart</span>
//                 </Button>
//                 <Button className='p-0 bgc-unset border-0 shadow-none'>
//                   <span className='c-primary'>Update Cart</span>
//                 </Button>
//               </div>
//             </div>
//           </Col>
//           <Col md={3} className=''>
//             <div className='d-flex flex-column gap-3 p-2 bgc-cotton'>
//               <span>Cart Total</span>
//               <div className='d-flex flex-row justify-content-between'>
//                 <span>Subtotal</span>
//                 <span>$</span>
//               </div>
//               <div className='d-flex flex-row justify-content-between'>
//                 <span>Shipping</span>
//                 <div className='d-flex flex-column'>
//                   <div className='d-flex flex-row gap-2 align-items-center'>
//                     <Form.Check type='radio' name='shiping' value='customer' />
//                     <span className='font-size-mokuzai-12 font-weight-mokuzai-400'>Flat rate: $10</span>
//                   </div>
//                   <div className='d-flex flex-row gap-2 align-items-center'>
//                     <Form.Check type='radio' name='shiping' value='customer' />
//                     <span className='font-size-mokuzai-12 font-weight-mokuzai-400'>Free shipping</span>
//                   </div>
//                   <div className='d-flex flex-row gap-2 align-items-center'>
//                     <Form.Check type='radio' name='shiping' value='customer' />
//                     <span className='font-size-mokuzai-12 font-weight-mokuzai-400'>Local pickup</span>
//                   </div>
//                 </div>
//               </div>
//               <hr />
//               <div className='d-flex flex-row justify-content-between'>
//                 <span>Total Price</span>
//                 <span>$</span>
//               </div>
//               <Button className='d-flex rounded-0 bgc-primary border-0 mt-3 shadow-none'>
//                 <div className='py-3 px-4 text-center mx-auto'>
//                   <span className='font-size-mokuzai-18 font-weight-mokuzai-700'>Procced To Check Out</span>
//                 </div>
//               </Button>
//             </div>
//           </Col>
//         </Row>
//       </MainTempalteAuth>
//     )
//   }
// }
