// import React from 'react'
// import { Row, Col, Form, Button } from 'react-bootstrap'
// import MainTempalteAuth from '../../components/organisms/MainTemplateAuth'
// import CardCart from '../../components/organisms/CardCart'

// export default function pageCart() {
//   return (
//     <MainTempalteAuth title='Your Cart' titleBanner='Your Cart' descBanner='Buy everything in your cart now!'>
//       <Row>
//         <Col md={9} className=''>
//           <div className='d-flex flex-column gap-4'>
//             <div className='d-flex flex-row justify-content-between px-5 w-100'>
//               <span className='col-6'>PRODUCT</span>
//               <div className='col-6 d-flex flex-row justify-content-between'>
//                 <span>PRICE</span>
//                 <span>QUANTITY</span>
//                 <span>TOTAL</span>
//               </div>
//             </div>
//             <div className='d-flex flex-column gap-3'>
//               <CardCart />
//               <CardCart />
//               <CardCart />
//             </div>
//             <hr />
//             <div className='d-flex flex-row gap-4 justify-content-end'>
//               <Button className='p-0 bgc-unset border-0 shadow-none'>
//                 <span className='c-primary'>Clear Cart</span>
//               </Button>
//               <Button className='p-0 bgc-unset border-0 shadow-none'>
//                 <span className='c-primary'>Update Cart</span>
//               </Button>
//             </div>
//           </div>
//         </Col>
//         <Col md={3} className=''>
//           <div className='d-flex flex-column gap-3 p-2 bgc-cotton'>
//             <span>Cart Total</span>
//             <div className='d-flex flex-row justify-content-between'>
//               <span>subtotal</span>
//               <span>$</span>
//             </div>
//             <div className='d-flex flex-row justify-content-between'>
//               <span>Shipping</span>
//               <div className='d-flex flex-column'>
//                 <div className='d-flex flex-row gap-2 align-items-center'>
//                   <Form.Check type='radio' name='shiping' value='customer' />
//                   <span className='font-size-mokuzai-12 font-weight-mokuzai-400'>Flat rate: $10</span>
//                 </div>
//                 <div className='d-flex flex-row gap-2 align-items-center'>
//                   <Form.Check type='radio' name='shiping' value='customer' />
//                   <span className='font-size-mokuzai-12 font-weight-mokuzai-400'>Free shipping</span>
//                 </div>
//                 <div className='d-flex flex-row gap-2 align-items-center'>
//                   <Form.Check type='radio' name='shiping' value='customer' />
//                   <span className='font-size-mokuzai-12 font-weight-mokuzai-400'>Local pickup</span>
//                 </div>
//               </div>
//             </div>
//             <hr />
//             <div className='d-flex flex-row justify-content-between'>
//               <span>Total Price</span>
//               <span>$</span>
//             </div>
//             <Button className='d-flex rounded-0 bgc-primary border-0 mt-3'>
//               <div className='py-3 px-4 text-center mx-auto'>
//                 <span className='font-size-mokuzai-18 font-weight-mokuzai-700'>Procced To Check Out</span>
//               </div>
//             </Button>
//           </div>
//         </Col>
//       </Row>
//     </MainTempalteAuth>
//   )
// }

import React, { Component } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import MainTempalteAuth from '../../components/organisms/MainTemplateAuth'
import CardCart from '../../components/organisms/CardCart'

export default class pageCartnew extends Component {
  render() {
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
                <CardCart />
                <CardCart />
                <CardCart />
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
                <span>$</span>
              </div>
              <div className='d-flex flex-row justify-content-between'>
                <span>Shipping</span>
                <div className='d-flex flex-column'>
                  <div className='d-flex flex-row gap-2 align-items-center'>
                    <Form.Check type='radio' name='shiping' value='customer' />
                    <span className='font-size-mokuzai-12 font-weight-mokuzai-400'>Flat rate: $10</span>
                  </div>
                  <div className='d-flex flex-row gap-2 align-items-center'>
                    <Form.Check type='radio' name='shiping' value='customer' />
                    <span className='font-size-mokuzai-12 font-weight-mokuzai-400'>Free shipping</span>
                  </div>
                  <div className='d-flex flex-row gap-2 align-items-center'>
                    <Form.Check type='radio' name='shiping' value='customer' />
                    <span className='font-size-mokuzai-12 font-weight-mokuzai-400'>Local pickup</span>
                  </div>
                </div>
              </div>
              <hr />
              <div className='d-flex flex-row justify-content-between'>
                <span>Total Price</span>
                <span>$</span>
              </div>
              <Button className='d-flex rounded-0 bgc-primary border-0 mt-3 shadow-none'>
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
}
