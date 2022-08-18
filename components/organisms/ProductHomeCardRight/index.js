import Image from 'next/image'
import React from 'react'
import { Col } from 'react-bootstrap'

export default function index() {
  return (
    <Col>
      <div className='d-flex flex-column flex-md-row align-items-center'>
        <Col md={7} className='p-5'>
          <div className='d-flex flex-column p-5'>
            <span className='font-size-mokuzai-56 c-black font-weight-mokuzai-400'>Mid-Century 1929<br/> Sofa with Pilow</span>
            <p>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc<br/> vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna<br/> dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam</p>
          </div>
        </Col>
        <Col md={5} className='justify-content-end'>
          <Image src={'/images/sova.png'} height={640} width={640} alt='test' />
        </Col>
      </div>
    </Col>
  )
}
