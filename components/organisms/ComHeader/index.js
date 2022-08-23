import Cookies from 'js-cookie'
import Link from 'next/link'
import React, { useState } from 'react'
import { Col, Row, Button, Nav, Container, Dropdown, ButtonGroup  } from 'react-bootstrap'
import {FiHeart,FiSearch, FiShoppingCart, FiMenu} from 'react-icons/fi'
import { useSelector, useDispatch } from 'react-redux'
import { authLogout } from '../../../redux/reducers/auth'
import { useRouter } from 'next/router'

export default function ComHeader() {
  const dispatch = useDispatch()
  const navigate = useRouter()
  const roles = useSelector((state) => state.auth.roles)
  const token = Cookies.get('token')
  // console.log(token);
  const onLoggout = () => {
    dispatch(authLogout())
    Cookies.remove('token')
    navigate.push('/login')
    window.alert('logout success')
  }
  return (
    <Container>
      <Row className='justify-content-between mb-5 mt-md-3 gap-5 gap-md-0'>
        <Col md={4}>
          <Link href='/'>
            <a className='text-decoration-none c-primary font-size-mokuzai-46 font-weight-mokuzai-700'>
              <span>MOKUZAI</span>
            </a>
          </Link>
        </Col>
        <Col md={4} className='d-flex flex-row justify-content-between align-items-center'>
          <Link href='/'>
            <a className='text-decoration-none c-primary'>
              <span className='font-weight-mokuzai-700'>HOME</span>
            </a>
          </Link>
          <Link href='#'>
            <a className='text-decoration-none c-primary'>
              {/* <span>PAGES</span> */}
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className='bgc-unset border-0 c-black shadow-none p-0'>
                  <span className='font-weight-mokuzai-700'>PAGES</span>
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark" className='rounded-0'>
                  <Dropdown.Item><Link href={'#'}><a className='text-decoration-none text-white'>About Us</a></Link></Dropdown.Item>
                  <Dropdown.Item><Link href={'#'}><a className='text-decoration-none text-white'>Contact Us</a></Link></Dropdown.Item>
                  <Dropdown.Item><Link href={'#'}><a className='text-decoration-none text-white'>Coming Soon</a></Link></Dropdown.Item>
                  <Dropdown.Item><Link href={'#'}><a className='text-decoration-none text-white'>404 Page</a></Link></Dropdown.Item>
                  <Dropdown.Item><Link href={'#'}><a className='text-decoration-none text-white'>FAQ Page</a></Link></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </a>
          </Link>
          {/* <Link href='#'>
            <a className='text-decoration-none c-primary'> */}
          {/* <span>SHOP</span> */}
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className='bgc-unset border-0 c-black shadow-none p-0'>
              <span className='font-weight-mokuzai-700'>SHOP</span>
            </Dropdown.Toggle>

            {/* <Dropdown.Menu variant="dark" className='rounded-0'>
                  <Dropdown.Item><Link href={'#'}><a className='text-decoration-none text-white'>Shopping Cart</a></Link></Dropdown.Item>
                  <Dropdown.Item><Link href={'#'}><a className='text-decoration-none text-white'>Check Out</a></Link></Dropdown.Item>
                  <Dropdown.Item><Link href={'#'}><a className='text-decoration-none text-white'>My Account</a></Link></Dropdown.Item>
                  <Dropdown.Item><Link href={'#'}><a className='text-decoration-none text-white'>Order Tracking</a></Link></Dropdown.Item>
                </Dropdown.Menu> */}
            {roles ?
              <Dropdown.Menu variant="dark" className='rounded-0'>
                <Dropdown.Item><Link href={'/products'}><a className='text-decoration-none text-white'>Shopping Product</a></Link></Dropdown.Item>
                <Dropdown.Item><Link href={'#'}><a className='text-decoration-none text-white'>Shopping Cart</a></Link></Dropdown.Item>
                <Dropdown.Item><Link href={'#'}><a className='text-decoration-none text-white'>Check Out</a></Link></Dropdown.Item>
                <Dropdown.Item><Link href={'#'}><a className='text-decoration-none text-white'>My Order</a></Link></Dropdown.Item>
                <Dropdown.Item><Link href={`/${roles == 'costumer' ? 'profile/customer' : 'profile/seller'}`}><a className='text-decoration-none text-white'>My Account</a></Link></Dropdown.Item>
                <Dropdown.Item><Link href={'#'}><a className='text-decoration-none text-white'>Order Tracking</a></Link></Dropdown.Item>
              </Dropdown.Menu>
              :
              <Dropdown.Menu variant="dark" className='rounded-0'>
                {/* <Dropdown.Item><Link href={'#'}><a className='text-decoration-none text-white'>My Account</a></Link></Dropdown.Item> */}
                <Dropdown.Item><Link href={'#'}><a className='text-decoration-none text-white'>Order Tracking</a></Link></Dropdown.Item>
              </Dropdown.Menu>}
          </Dropdown>
          {/* </a>
          </Link> */}
          <Link href='#'>
            <a className='text-decoration-none c-primary'>
              <span className='font-weight-mokuzai-700'>BLOG</span>
            </a>
          </Link>
        </Col>
        <Col md={4} className="me-auto d-flex flex-row justify-content-end align-items-end gap-5">
          <Link href='#'>
            <a className='text-decoration-none c-primary'>
              <FiSearch size={23} stroke-width={3} />
            </a>
          </Link>
          <Link href='#'>
            <a className='text-decoration-none c-primary'>
              <FiHeart size={23} stroke-width={3} />
            </a>
          </Link>
          <Link href='/profile/cart'>
            <a className='text-decoration-none c-primary'>
              <FiShoppingCart size={23} stroke-width={3} />
            </a>
          </Link>
          <Link href='#'>
            {/* <a className='text-decoration-none c-primary'>
              <FiMenu size={30} stroke-width={3} />
            </a> */}
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className='bgc-unset border-0 c-black shadow-none p-0' bsPrefix='p-0'>
                <span className='font-weight-mokuzai-700'><FiMenu size={30} stroke-width={3} /></span>
              </Dropdown.Toggle>

              {/* <Dropdown.Menu variant="dark" className='rounded-0' align='end'>
                <Dropdown.Item><Link href={'/login'}><a className='text-decoration-none text-white'>Login</a></Link></Dropdown.Item>
                <Dropdown.Item><Link href={'/register'}><a className='text-decoration-none text-white'>Register</a></Link></Dropdown.Item>
                <Dropdown.Item><Link href={'#'}><a className='text-decoration-none text-white'>Chat</a></Link></Dropdown.Item>
                <Dropdown.Item><Link href={'#'}><a className='text-decoration-none text-white'>Order Tracking</a></Link></Dropdown.Item>
                <Dropdown.Item><Link href={'#'}><a className='text-decoration-none text-white'>Logout</a></Link></Dropdown.Item>
              </Dropdown.Menu> */}
              {token ? 
                <Dropdown.Menu variant="dark" className='rounded-0' align='end'>
                  <Dropdown.Item><Link href={'#'}><a className='text-decoration-none text-white'>Chat</a></Link></Dropdown.Item>
                  <Dropdown.Item><Link href={'#'}><a className='text-decoration-none text-white'>Order Tracking</a></Link></Dropdown.Item>
                  <Dropdown.Item><Link href={'#'}><a onClick={onLoggout} className='text-decoration-none text-white'>Logout</a></Link></Dropdown.Item>
                </Dropdown.Menu> : 
                <Dropdown.Menu variant="dark" className='rounded-0' align='end'>
                  <Dropdown.Item><Link href={'/login'}><a className='text-decoration-none text-white'>Login</a></Link></Dropdown.Item>
                  <Dropdown.Item><Link href={'/register'}><a className='text-decoration-none text-white'>Register</a></Link></Dropdown.Item>
                </Dropdown.Menu>}
            </Dropdown>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}
