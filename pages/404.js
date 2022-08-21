import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'
import MainTemplate from '../components/organisms/MainTemplate'

export default function Page404() {
  return (
    <MainTemplate>
      <Container className='d-flex flex-row py-5'>
        <div className='col-md-7'>
          <div className='d-flex flex-column'>
            <sapan className='font-size-mokuzai-86 c-primary font-weight-mokuzai-700'>404</sapan>
            <sapan className='font-size-mokuzai-46 c-primary font-weight-mokuzai-700'>Page cannot be found!</sapan>
            <p className='font-size-mokuzai-16 c-primary font-weight-mokuzai-400'>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices exurabitur ut magna dignissim, dignissi</p>
          </div>
          
          <div className='d-flex flex-row align-items-center gap-3'>
            <div className='strip-left-link'></div>
            <Link href={'/'}>
              <a className='text-decoration-none'>
                <span className='font-size-mokuzai-16 c-primary font-weight-mokuzai-700'>BACK TO HOMEPAGE</span>
              </a>
            </Link>
          </div>
        </div>
        <div className='d-flex col-md-5 justify-content-end'>
          <div className='cricle-not-found overflow-hidden bgc-warm-smoke rounded-circle'>

          </div>
        </div>
      </Container>
    </MainTemplate>
  )
}
