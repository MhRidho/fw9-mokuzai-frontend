import React from 'react'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import ComHeader from '../ComHeader'
import ComFooter from '../ComFooter'
import ComBannerAuth from '../ComBannerAuth'


export default function MainTemplateAuth(props) {
  return (
    <>
      <Head>
        <title>{props.title ? props.title : 'MOKUZAI'}</title>
      </Head>
      <ComHeader />
      <ComBannerAuth title={props.titleBanner} desc={props.descBanner} />
      <Container className='py-4'>
        {props.children}
      </Container>
      <ComFooter />
    </>
  )
}
