import React from 'react'
import { Col } from 'react-bootstrap'
import Link from 'next/link'

export default function index() {
  return (
    <Col md={5} className='d-flex flex-column gap-5'>
      <Link href='/login'>
        <a className='text-decoration-none'>
          <span className='c-black font-size-mokuzai-32 font-weight-mokuzai-400'>Login Account</span>
        </a>
      </Link>
      <Link href='/register'>
        <a className='text-decoration-none'>
          <span className='c-black font-size-mokuzai-32 font-weight-mokuzai-400'>Register Account</span>
        </a>
      </Link>
    </Col>
  )
}
