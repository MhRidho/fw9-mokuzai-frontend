import React from 'react'
import MainTemplate from '../components/organisms/MainTemplate'
import Banner from '../components/organisms/ComBannerAuth'
import ProductCard from '../components/molecules/ProductCard'
import { Button, Col, Container, Dropdown, Form, Row } from 'react-bootstrap'
import axiosServerSide from '../helper/axiosServerSide'
import cookies from 'next-cookies'


export async function getServerSideProps(context) {
  try {
    // const dataCookie = cookies(context)
    // const page = !context.query?.page? 1 : context.query.page;
    // const search = !context.query?.search? '' : context.query.search;
    const searchBy = !context.query?.searchBy? '' : context.query.searchBy
    const search = !context.query?.search? '' : context.query.search
    const sortBy = !context.query?.sortBy? '' : context.query.sortBy
    const sort = !context.query?.sort? '' : context.query.sort
    const limit = !context.query?.limit? '' : context.query.limit
    const page = !context.query?.page? 1 : context.query.page
    const products = await axiosServerSide.get(`/product?searchBy=${searchBy}&search=${search}&sortBy=${sortBy}&sort=${sort}&limit=${limit}&page=${page}`)
    return {
      props: {
        allData: products.result
        // dataUsers: products.data.data
      }
    }
  } catch (e) {
    console.log(e);
  }
}

export default function ProductList() {
  return (
    <MainTemplate>
      <Banner title={'Let’s Shopping'} desc={'Find and buy the one you like'} />
      <Container className='py-5'>
        <Row>
          <Col md={3} className='d-flex flex-column gap-5'>
            <div className='d-flex flex-column gap-5'>
              <span className='font-size-mokuzai-24 font-weight-mokuzai-700'>Categories</span>

              <div className='list-group d-flex flex-column gap-5'>
                <div className='d-flex flex-row justify-content-between'>
                  <a>Seating</a>
                  <span>5</span>
                </div>
                <div className='d-flex flex-row justify-content-between'>
                  <a>leeping or lying</a>
                  <span>5</span>
                </div>
                <div className='d-flex flex-row justify-content-between'>
                  <a>Entertainment</a>
                  <span>5</span>
                </div>
                <div className='d-flex flex-row justify-content-between'>
                  <a>Tables</a>
                  <span>5</span>
                </div>
                <div className='d-flex flex-row justify-content-between'>
                  <a>Storage</a>
                  <span>5</span>
                </div>
                <div className='d-flex flex-row justify-content-between'>
                  <a>Accecories</a>
                  <span>5</span>
                </div>
                <div className='d-flex flex-row justify-content-between'>
                  <a>Other</a>
                  <span>5</span>
                </div>
              </div>

              <div>
                <Button className='rounded-0 size-btn-auth bgc-primary border-0 shadow-none'>
                  <span className='font-size-mokuzai-14 font-weight-mokuzai-700'>FILTER</span>
                </Button>
              </div>
            </div>


            <div className='d-flex flex-column gap-5'>
              <span className='font-size-mokuzai-24 font-weight-mokuzai-700'>Brands</span>

              <div className='list-group d-flex flex-column gap-5'>
                <div className='d-flex flex-column gap-2'>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" name="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      IKEA
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" name="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Mr Royal
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" name="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Sweet House
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" name="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      DNorth Oxford
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" name="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Mr.Poppin 1929
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className='d-flex flex-column gap-5'>
              <span className='font-size-mokuzai-24 font-weight-mokuzai-700'>Colors</span>

              <div className='list-group d-flex flex-column gap-5'>
                <div className='d-flex flex-column gap-2'>
                  {/* <Form.Check />
                  <span>IKEA</span> */}
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" name="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Colors1
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" name="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Colors2
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" name="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Colors3
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" name="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Colors4
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" name="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Colors1
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={9} className='d-flex flex-column gap-3'>
            <div className='d-flex justify-content-between'>
              <span>Showing 1-16 of 39 Results</span>
              <Dropdown align='end'>
                <Dropdown.Toggle id="dropdown-basic" className='bgc-unset border-0 c-black shadow-none p-0'>
                  <span className='font-weight-mokuzai-700'>Sort by</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className='bgc-primary '>
                  <Dropdown.Item className='text-white' href="#/action-1">Latest Product</Dropdown.Item>
                  <Dropdown.Item className='text-white' href="#/action-2">More Expensive</Dropdown.Item>
                  <Dropdown.Item className='text-white' href="#/action-3">More Cheap</Dropdown.Item>
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
              <ProductCard name={'Coaster 506222-CO Loveseat'} price={'$765.99'} />
              <ProductCard name={'Coaster 506222-CO Loveseat'} price={'$765.99'} />
              <ProductCard name={'Coaster 506222-CO Loveseat'} price={'$765.99'} />
              <ProductCard name={'Coaster 506222-CO Loveseat'} price={'$765.99'} />
              <ProductCard name={'Coaster 506222-CO Loveseat'} price={'$765.99'} />
              <ProductCard name={'Coaster 506222-CO Loveseat'} price={'$765.99'} />
            </Row>
            <div className='d-flex flex-column flex-md-row justify-content-between align-items-center'>
              <div>
                <Button className='d-block rounded-0 size-btn-page-product bgc-primary border-0 shadow-none'>
                  <span className='font-size-mokuzai-14 font-weight-mokuzai-700'>Prev</span>
                </Button>
              </div>
              <div>
                <span className='font-size-mokuzai-24 font-weight-mokuzai-700'>1</span>
              </div>
              <div>
                <Button className='d-block rounded-0 size-btn-page-product bgc-primary border-0 shadow-none'>
                  <span className='font-size-mokuzai-14 font-weight-mokuzai-700'>Next</span>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </MainTemplate>
  )
}
