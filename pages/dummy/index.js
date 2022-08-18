import React from 'react'
import MainTemplate from '../../components/organisms/MainTemplate'
import ProductHomeCardLeft from '../../components/organisms/ProductHomeCardLeft'
import ProductHomeCardRight from '../../components/organisms/ProductHomeCardRight'
import ProductCard from '../../components/molecules/ProductCard'
import { Col, Container, Dropdown, Row } from 'react-bootstrap'


export default function TestComponent() {
  return (
    <MainTemplate title='test judul' titleBanner='My Account' descBanner='Register and log in with your account to be able to shop at will'>
      <div className='d-flex flex-column'>
        <ProductHomeCardLeft />
        <ProductHomeCardRight />
      </div>
      <Container>
        <Row>
          <Col md={3} className=''>
            <span className='font-size-mokuzai-24 font-weight-mokuzai-700'>Categories</span>
          </Col>
          <Col md={9} className=''>
            <div className='d-flex justify-content-between'>
              <span>Showing 1-16 of 39 Results</span>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className='bgc-unset border-0 c-black shadow-none p-0'>
                  <span className='font-weight-mokuzai-700'>Sort by</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Latest Product</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">More Expensive</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">More Cheap</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <Row>
              <ProductCard name={'Coaster 506222-CO Loveseat'} price={'$765.99'} />
              <ProductCard name={'Coaster 506222-CO Loveseat'} price={'$765.99'} />
              <ProductCard name={'Coaster 506222-CO Loveseat'} price={'$765.99'} />
              <ProductCard name={'Coaster 506222-CO Loveseat'} price={'$765.99'} />
              <ProductCard name={'Coaster 506222-CO Loveseat'} price={'$765.99'} />
              <ProductCard name={'Coaster 506222-CO Loveseat'} price={'$765.99'} />
            </Row>
          </Col>
        </Row>
      </Container>
    </MainTemplate>
  )
}
