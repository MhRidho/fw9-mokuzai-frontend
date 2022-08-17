import Image from 'next/image'
import React from 'react'
import { Col, Row, Button, Nav, Container, Dropdown, ButtonGroup  } from 'react-bootstrap'
import Link from 'next/link'

export default function ComFooter() {
  return (
    <div className='bgc-primary'>
      <Container className='pt-5 text-white'>
        <Row className='mb-5'>
          <Col md={5} className=''>
            <div className='d-flex flex-column gap-3'>
              <span className='font-size-mokuzai-46 font-weight-mokuzai-700'>MOKUZAI</span>
              <p className='c-ligth'>Donec nunc nunc, gravida vitae diam vel,<br/> varius interdum erat. Quisque a nunc vel<br/> diam auctor commodo.</p>
              <div className='d-flex flex-row gap-4'>
                <Link href='#'>
                  <a className='text-decoration-none'>
                    <Image src='/icons/facebook.svg' width={45} height={45} alt='corporate' />
                  </a>
                </Link>
                
                <Link href='#'>
                  <a className='text-decoration-none'>
                    <Image src='/icons/twitter.svg' width={45} height={45} alt='corporate' />
                  </a>
                </Link>
                
                <Link href='#'>
                  <a className='text-decoration-none'>
                    <Image src='/icons/youtube.svg' width={45} height={45} alt='corporate' />
                  </a>
                </Link>
                
                <Link href='#'>
                  <a className='text-decoration-none'>
                    <Image src='/icons/drible.svg' width={45} height={45} alt='corporate' />
                  </a>
                </Link>
              </div>
            </div>
          </Col>
          <Col md={7} className='d-flex flex-row justify-content-between'>
            <div className='d-flex flex-column gap-3'>
              <span className='mb-3'>COMPANY</span>
              <Link href='#'>
                <a className='text-decoration-none c-ligth'>
                  <span>About Us</span>
                </a>
              </Link>
              <Link href='#'>
                <a className='text-decoration-none c-ligth'>
                  <span>Help Center</span>
                </a>
              </Link>
              <Link href='#'>
                <a className='text-decoration-none c-ligth'>
                  <span>Licenses</span>
                </a>
              </Link>
              <Link href='#'>
                <a className='text-decoration-none c-ligth'>
                  <span>Market API</span>
                </a>
              </Link>
              <Link href='#'>
                <a className='text-decoration-none c-ligth'>
                  <span>Site Map</span>
                </a>
              </Link>
            </div>

            <div className='d-flex flex-column gap-3'>
              <span className='mb-3'>USERFUL</span>
              <Link href='#'>
                <a className='text-decoration-none c-ligth'>
                  <span>The Collections</span>
                </a>
              </Link>
              <Link href='#'>
                <a className='text-decoration-none c-ligth'>
                  <span>Size Guide</span>
                </a>
              </Link>
              <Link href='#'>
                <a className='text-decoration-none c-ligth'>
                  <span>Lookbook</span>
                </a>
              </Link>
              <Link href='#'>
                <a className='text-decoration-none c-ligth'>
                  <span>Instagram Shop</span>
                </a>
              </Link>
            </div>

            <div className='d-flex flex-column gap-3'>
              <span className='mb-3'>CONTACT US</span>
              <Link href='#'>
                <a className='text-decoration-none text-white'>
                  <div className='d-flex flex-row align-items-center gap-4'>
                    <Image src='/icons/mail.svg' width={58} height={58} alt='contact icon' />
                    <span className='c-ligth'>info@la-studioweb.com</span>
                  </div>
                </a>
              </Link>
              <Link href='#'>
                <a className='text-decoration-none text-white'>
                  <div className='d-flex flex-row align-items-center gap-4'>
                    <Image src='/icons/phone.svg' width={58} height={58} alt='contact icon' />
                    <span className='c-ligth'>+44.954.954.86</span>
                  </div>
                </a>
              </Link>
              <Link href='#'>
                <a className='text-decoration-none text-white'>
                  <div className='d-flex flex-row align-items-center gap-4'>
                    <Image src='/icons/clock.svg' width={58} height={58} alt='contact icon' />
                    <span className='c-ligth'>9:00am - 19:00pm<br/>Monday - Sunday</span>
                  </div>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
        <div className='p-2 d-flex justify-content-center c-ligth'>
          <span>© 2019 RAZ Store All rights reserved</span>
        </div>
      </Container>
    </div>
  )
}
