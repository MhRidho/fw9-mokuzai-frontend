import React from 'react';
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap';

import MainTemplate from '../components/organisms/MainTemplate';

export default function Home() {
  return (
    <MainTemplate>
      <div className="head-background">
        <div className="text-center background-text">
          <h1 className="background-text-head">Minimal Furniture Store</h1>
          <span className="background-text-span">
            Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo.
            <br /> Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim
          </span>
        </div>
      </div>

      <Row className="">
        <Col md={6}>
          <div>
            <Image src="/home/home-dummy-one.png" width={640} height={640} alt="dummy-one" />
          </div>
        </Col>

        <Col md={6}>
          <div className="p-5 m-5 d-flex flex-column gap-5">
            <h2>Mid-Century 1929 Sofa with Pilow</h2>
            <span>
              Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam
            </span>
            <div className="d-flex flex-row gap-5">
              <hr className="rules-home-content" />
              <span className="fw-bold">SHOP NOW</span>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="">
        <Col md={6}>
          <div className="p-5 m-5 d-flex flex-column gap-5">
            <h2>Mini Modern Lamp</h2>
            <span>
              Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam
            </span>
            <div className="d-flex flex-row gap-5">
              <hr className="rules-home-content" />
              <span className="fw-bold">SHOP NOW</span>
            </div>
          </div>
        </Col>

        <Col md={6}>
          <div className="d-flex justify-content-end">
            <Image src="/home/home-dummy-two.png" width={640} height={640} alt="dummy-two" />
          </div>
        </Col>
      </Row>

      <Row className="d-flex flex-row">
        <Col md={6}>
          <div>
            <Image src="/home/home-dummy-three.png" width={640} height={640} alt="dummy-three" />
          </div>
        </Col>

        <Col>
          <div className="p-5 m-5 d-flex flex-column gap-5">
            <h2>Blue Living Vintage Chair</h2>
            <span>
              Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam
            </span>
            <div className="d-flex flex-row gap-5">
              <hr className="rules-home-content" />
              <span className="fw-bold">SHOP NOW</span>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="d-flex flex-row">
        <Col>
          <div className="p-5 m-5 d-flex flex-column gap-5">
            <h2>Japanese style blue ceramic</h2>
            <span>
              Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam
            </span>
            <div className="d-flex flex-row gap-5">
              <hr className="rules-home-content" />
              <span className="fw-bold">SHOP NOW</span>
            </div>
          </div>
        </Col>

        <Col md={6}>
          <div className="d-flex justify-content-end">
            <Image src="/home/home-dummy-four.png" width={640} height={640} alt="dummy-four" />
          </div>
        </Col>
      </Row>

      <Row className="d-flex flex-row">
        <Col md={6}>
          <div>
            <Image src="/home/home-dummy-five.png" width={640} height={640} alt="dummy-five" />
          </div>
        </Col>

        <Col>
          <div className="p-5 m-5 d-flex flex-column gap-5">
            <h2>Japanese plate floral</h2>
            <span>
              Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam
            </span>
            <div className="d-flex flex-row gap-5">
              <hr className="rules-home-content" />
              <span className="fw-bold">SHOP NOW</span>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="d-flex flex-row">
        <Col>
          <div className="p-5 m-5 d-flex flex-column gap-5">
            <h2>Modern Floor Lamp</h2>
            <span>
              Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam
            </span>
            <div className="d-flex flex-row gap-5">
              <hr className="rules-home-content" />
              <span className="fw-bold">SHOP NOW</span>
            </div>
          </div>
        </Col>

        <Col md={6}>
          <div className="d-flex justify-content-end">
            <Image src="/home/home-dummy-six.png" width={640} height={640} alt="dummy-six" />
          </div>
        </Col>
      </Row>

      <div className="partner-comp">
        <div className="d-flex flex-column p-5 gap-5">
          <div className="text-center">
            <span className="span-white span-home text-center">
              Gave 5 stars for excellent customer service. I had a couple of questions which they replied quickly to answer. If I could give multiple reasons for my rating it would also be for the design quality and customization to go
              along with the great service. The theme is excellent, keep up the great work.
            </span>
          </div>

          <hr className="rules-home" />

          <div className="text-center span-white">Trevor Rivera - CEO IKEA</div>

          <div className="d-flex flex-row gap-5 justify-content-around">
            <Image src="/home/partner-one.png" width={184} height={143} alt="partner-one" />
            <Image src="/home/partner-two.png" width={184} height={143} alt="partner-two" />
            <Image src="/home/partner-three.png" width={184} height={143} alt="partner-three" />
            <Image src="/home/partner-four.png" width={184} height={143} alt="partner-four" />
          </div>
        </div>
      </div>
    </MainTemplate>
  );
}
