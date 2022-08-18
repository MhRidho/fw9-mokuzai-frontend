import React from 'react'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import ComHeader from '../ComHeader'
import ComFooter from '../ComFooter'

export default function MainTemplate(props) {
  return (
    <>
      <Head>
        <title>{props.title ? props.title : 'MOKUZAI'}</title>
      </Head>
      <ComHeader />
      {props.children}
      <ComFooter />
    </>
  )
}
