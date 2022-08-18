import React from 'react'
import { Container } from 'react-bootstrap'

export default function ComBannerAuth({title, desc}) {
  return (
    <div className='bg-banner-auth'>
      <Container className='size-banner-auth d-flex justify-content-center align-items-center'>
        <div className='d-flex flex-column gap-3'>
          <span className='font-size-mokuzai-56 text-center font-weight-mokuzai-400 c-primary'>{title}</span>
          <span className='font-size-mokuzai-16 c-primary font-weight-mokuzai-400'>{desc}</span>
        </div>
      </Container>
    </div>
  )
}
