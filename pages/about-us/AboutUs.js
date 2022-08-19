import React from 'react';
import Image from 'next/image'
import {Row, Col, Container} from 'react-bootstrap'
import MainTemplate from '../../components/organisms/MainTemplate'
import Banner from '../../components/organisms/ComBannerAuth'

export default function AboutUs() {
  return (
    <MainTemplate>
      <Banner title={'About Us'}/>

      <Row className='d-flex m-5 p-5'>
        <Col md={6} className='d-flex flex-column'>
          <div className='d-flex flex-column gap-5'>
            <h1>Mokuzai - Modern Furniture</h1>
            <span className='about-span'>Quisque at justo sagittis, semper lacus a, iaculis tellus. Fusce tempor, leo vel iaculis aliquet, dui turpis maximus tellus, commodo congue Nam fermentum, augue eget pulvinar ullamcorper, dui purus ornare nibh, eu congue ligula felis nec diam liquam mollis nibh eu</span>            
            <li>Fusce risus ligula, semper et ultricies vitae</li>
            <li>Fusce risus ligula, semper et ultricies vitae</li>
            <span className='about-span'>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue molestie eu et velit. Praesent gravida magna eget interdum iaculis. Aliquam erat volutpat. Integer placerat ipsum quis malesuada vehicula. Vestibulum</span>           
          </div>
        </Col>

        <Col md={6}>
          <div>
            <Image src='/home-dummy-one.png' width={640} height={640} alt='dummy-one' />
          </div>
        </Col>
      </Row>

      <div className='m-5 p-5'>
        <div className='text-center'>
          <h1>Why Should Choose Us?</h1>
        </div>

        <Row className='m-5 p-5 text-center'>
          <Col md={4} className='d-flex flex-column gap-2'>
            <h3>Unique Design</h3>
            <span>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</span>
          </Col>

          <Col md={4} className='d-flex flex-column gap-2'>
            <h3>Unique Design</h3>
            <span>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</span>
          </Col>

          <Col md={4} className='d-flex flex-column gap-2'>
            <h3>Unique Design</h3>
            <span>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</span>
          </Col>
        </Row>

        <Row className='m-5 p-5 text-center'>
          <Col md={4} className='d-flex flex-column gap-2'>
            <h3>Unique Design</h3>
            <span>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</span>
          </Col>

          <Col md={4} className='d-flex flex-column gap-2'>
            <h3>Unique Design</h3>
            <span>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</span>
          </Col>

          <Col md={4} className='d-flex flex-column gap-2'>
            <h3>Unique Design</h3>
            <span>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</span>
          </Col>
        </Row>
      </div>

      <div className='m-5 p-5'>
        <div className='text-center'>
          <h1>Meet Our Team</h1>
        </div>
      </div>

      <Row className='m-5 p-5 text-center'>
        <Col md={4} className='d-flex flex-column gap-2'>
          <Image src='/about-us/sephiroth.png' width={360} height={450} alt='team-pict'/>
          <h3>Asep Setiawan</h3>
          <span>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</span>
        </Col>

        <Col md={4} className='d-flex flex-column gap-2'>
          <Image src='/about-us/sephiroth.png' width={360} height={450} alt='team-pict'/>
          <h3>Bagus Dwi Nugraha</h3>
          <span>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</span>
        </Col>

        <Col md={4} className='d-flex flex-column gap-2'>
          <Image src='/about-us/sephiroth.png' width={360} height={450} alt='team-pict'/>
          <h3>Muhammad Ridho</h3>
          <span>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</span>
        </Col>
      </Row>

      <Row className='m-5 p-5 text-center'>
        <Col md={3} className='d-flex flex-column gap-2'>
          <Image src='/about-us/sephiroth.png' width={360} height={450} alt='team-pict'/>
          <h3>Prayogo Santoso</h3>
          <span>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</span>
        </Col>

        <Col md={3} className='d-flex flex-column gap-2'>
          <Image src='/about-us/sephiroth.png' width={360} height={450} alt='team-pict'/>
          <h3>Putu Pridanta Raka Putra Pratama</h3>
          <span>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</span>
        </Col>

        <Col md={3} className='d-flex flex-column gap-2'>
          <Image src='/about-us/sephiroth.png' width={360} height={450} alt='team-pict'/>
          <h3>Refaldy Bagas Anggana</h3>
          <span>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</span>
        </Col>

        <Col md={3} className='d-flex flex-column gap-2'>
          <Image src='/about-us/sephiroth.png' width={360} height={450} alt='team-pict'/>
          <h3>Wahyu Prasetyo</h3>
          <span>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</span>
        </Col>
      </Row>

      <div className='about-comp'>
        <div className='d-flex flex-column p-5 gap-5'>
          <div className='text-center'>
            <span className='theme-primary span-home text-center'>&quot;Gave 5 stars for excellent customer service. I had a couple of questions which they replied quickly to answer. If I could give multiple reasons for my rating  it would also be for the design quality and customization to go along with the great service. The theme is excellent, keep up the great work.&quot;</span>
          </div>

          <div className='text-center'>
            <Image className='rounded-circle' src='/about-us/sephiroth.png' width={55} height={55} alt='team-testi' /> 
          </div>

          <div className='text-center theme-primary'>
          Trevor Rivera - CEO IKEA
          </div>
        </div>
      </div>
    </MainTemplate>
  )
}