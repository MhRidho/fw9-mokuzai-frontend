import Main from '../../components/organisms/MainTemplate';
import { Container, Row, Col, Form, ListGroup, InputGroup, Button, ButtonGroup } from 'react-bootstrap';
import Image from 'next/image';
import { FiChevronRight, FiClock, FiTag } from 'react-icons/fi';
import Link from 'next/link';
import BlogAsideMenu from './blog-aside-menu';
import Content2 from '../../public/img-blog/content2.png'
import Content3 from '../../public/img-blog/content3.png'
import Content4 from '../../public/img-blog/content4.png'
import Quote from '../../public/img-blog/quote.png'
import Fb from '../../public/img-blog/fb(1).png'
import Tw from '../../public/img-blog/twitter.png'
import Yt from '../../public/img-blog/yt.png'
import Fb2 from '../../public/img-blog/fb(2).png'
import News1 from '../../public/img-blog/news1.png';
import News2 from '../../public/img-blog/news2.png';
import Post1 from '../../public/img-blog/post1.png';
import Post2 from '../../public/img-blog/post2.png';
import Post3 from '../../public/img-blog/post3.png';
import Comment1 from '../../public/img-blog/comment1.png';
import Comment2 from '../../public/img-blog/comment2.png';
import Comment3 from '../../public/img-blog/comment3.png';
import Comment4 from '../../public/img-blog/comment4.png';

const BlogContent = () => {
  return (
    <>
      <Main>
        <Container fluid className='bg-profile fluid py-4 px-sm-5'>
          <Row className='ms-sm-2'>
            <Col>
              <h6 className='cursor ms-5'>Blog <FiChevronRight className='m-2' />Blog Detail</h6>
            </Col>
          </Row>
          <Row>
            <Col className='d-flex flex-column justify-content-center align-items-center my-5'>
              <h1>How to open interior shop?</h1>
              <h6>Read and enjoy content from us</h6>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <BlogAsideMenu />
            <Col className='mt-5 bg-content-1'>
              <h2 className='margin-x font-size-mokuzai-32'>How to open interior shop?</h2>
              <p className='font-size-mokuzai-10 d-inline'><FiClock className='me-1' />24 Apr 2019, 45 mins ago, by Admin</p>
              <p className='font-size-mokuzai-10'><FiTag className='me-1' />Kids, Interior, Photos</p>
              <p className='font-size-mokuzai-14'>Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare suscipit nulla sagittis faucibuDonec non velit ut nisl ultrices lobortis eget et odio. Sed mollis, libero ut lacinia ultrices, ex urna sodales tortor, sed pulvinar ex eros vel orci. Sed tempor placerat tristique. Ut tristique leo sit amet nisi blandit rutrum. Nunc hendrerit a diam vel ultricies. Morbi gravida, dui eu efficitur aliquet, ante nisl mollis ex, eget venenatis magna urna non ex. Suspendisse et orci viverra lacus consectetur posuere. Curabitur bibendum nisi at sapien viverra ultricies. Praesent commodo volutpat leo, ut accumsan ipsum egestas in. Integer elementum ligula vel cursus bibendum. Nulla nibh ante, iaculis at consequat id, euismod a sem. Fusce et sapien cursus, placerat dui non, rhoncus diam. Praesent ac consectetur dui.

                Phasellus ac sem eu mauris sodales tristique sed non ligula. Aenean in mauris ac libero condimentum vulputate quis ut sapien. Phasellus euismod mi eget interdum pellentesque. Maecenas molestie vitae risus vitae volutpat. Maecenas a velit rutrum, auctor quam et, commodo est. Cras leo sem, maximus non ex ac, porttitor egestas dolor. Fusce ut metus sodales, pellentesque diam sed, sodales massa. Nulla facilisi. Sed sed quam eget metus interdum condimentum non et odio. Nam magna tortor, vulputate in venenatis et, porta ac orci. Sed venenatis scelerisque scelerisque. Nullam ut neque sed libero feugiat fermentum et non odio. Aenean et justo elementum, volutpat arcu vitae, tincidunt lorem.</p>
              <Container className='pt-4'>
                <Row>
                  <Col>
                    <Image src={Content2} alt='content2' />
                  </Col>
                  <Col>
                    <h2 className='font-size-mokuzai-32'>Scandinavian Style 2019</h2>
                    <p className='font-size-mokuzai-14'>Nunc hendrerit a diam vel ultricies. Morbi gravida, dui eu efficitur aliquet, ante nisl mollis ex, eget venenatis magna urna non ex. Suspendisse et orci viverra lacus consectetur posuere. Curabitur bibendum nisi at sapien viverra ultricies. Praesent commodo volutpat leo, ut accumsan ipsum egestas in. Integer elementum ligula vel cursus bibendum. Nulla nibh ante, iaculis at consequat id, euismod a sem. Fusce et sapien cursus, placerat dui non, rhoncus diam. Praesent ac consectetur dui.

                      Phasellus ac sem eu mauris sodales tristique sed non ligula. Aenean in mauris ac libero condimentum vulputate quis ut sapien. Phasellus euismod mi eget interdum pellentesque. </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className='font-size-mokuzai-14'>Sed mollis, libero ut lacinia ultrices, ex urna sodales tortor, sed pulvinar ex eros vel orci. Sed tempor placerat tristique. Ut tristique leo sit amet nisi blandit rutrum. Nunc hendrerit a diam vel ultricies. Morbi gravida, dui eu efficitur aliquet, ante nisl mollis ex, eget venenatis magna urna non ex. Suspendisse et orci viverra lacus consectetur posuere. Curabitur bibendum nisi at sapien viverra ultricies. Praesent commodo volutpat leo, ut accumsan ipsum egestas in. Integer elementum ligula vel cursus bibendum. Nulla nibh ante, iaculis at consequat id, euismod a sem. Fusce et sapien cursus, placerat dui non, rhoncus diam. Praesent ac consectetur dui.

                      Phasellus ac sem eu mauris sodales tristique sed non ligula. Aenean in mauris ac libero condimentum vulputate quis ut sapien. Phasellus euismod mi eget interdum pellentesque. Maecenas molestie vitae risus vitae volutpat. Maecenas a velit rutrum, auctor quam et, commodo est. Cras leo sem, maximus non ex ac, porttitor egestas dolor. Fusce ut metus sodales, pellentesque diam sed, sodales massa. Nulla facilisi. Sed sed quam eget metus interdum condimentum non et odio.</p>
                  </Col>
                </Row>
              </Container>
              <Container className='pt-3'>
                <Row className='ps-2'>
                  <Col className='border-left-1'>
                    <h1>“Luxury Is In Each Detail”</h1>
                    <h6>Hubert de Givenchy - Scoutandnimble.com</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className='font-size-mokuzai-14 mt-5'>Sed mollis, libero ut lacinia ultrices, ex urna sodales tortor, sed pulvinar ex eros vel orci. Sed tempor placerat tristique. Ut tristique leo sit amet nisi blandit rutrum. Nunc hendrerit a diam vel ultricies. Morbi gravida, dui eu efficitur aliquet, ante nisl mollis ex, eget venenatis magna urna non ex. Suspendisse et orci viverra lacus consectetur posuere. Curabitur bibendum nisi at sapien viverra ultricies. Praesent commodo volutpat leo, ut accumsan ipsum egestas in. Integer elementum ligula vel cursus bibendum. Nulla nibh ante, iaculis at consequat id, euismod a sem. Fusce et sapien cursus, placerat dui non, rhoncus diam. Praesent ac consectetur dui.

                      Phasellus ac sem eu mauris sodales tristique sed non ligula. Aenean in mauris ac libero condimentum vulputate quis ut sapien. Phasellus euismod mi eget interdum pellentesque. Maecenas molestie vitae risus vitae volutpat. Maecenas a velit rutrum, auctor quam et, commodo est. Cras leo sem, maximus non ex ac, porttitor egestas dolor. Fusce ut metus sodales, pellentesque diam sed, sodales massa. Nulla facilisi. Sed sed quam eget metus interdum condimentum non et odio.</p>
                  </Col>
                </Row>
                <Row className='mt-5 pb-3'>
                  <Col md={6}>
                  </Col>
                  <Col className='d-flex gap-4 justify-content-center align-items-center'>
                    <span>Share with</span>
                    <Image className='cursor' src={Fb} alt='fb' />
                    <Image className='cursor' src={Tw} alt='fb' />
                    <Image className='cursor' src={Yt} alt='fb' />
                    <Image className='cursor' src={Fb2} alt='fb' />
                  </Col>
                </Row>
                <hr />
              </Container>
              <Container>
                <Row className='p-3'>
                  <Col>
                    <div className='d-flex gap-3'>
                      <div>
                        <Image src={News1} alt='News1' title="News" />
                        <h6 className='font-size-mokuzai-10 cursor mt-3 fw-bold'>PREVIOUS POST</h6>
                      </div>
                      <div className='d-flex align-items-center'>
                        <div>
                          <h5 className='font-size-mokuzai-14 fw-bold'>How To Put Movies On<br /> Iphone</h5>
                          <p className='font-size-mokuzai-10'>24 Apr 2019, 45 mins ago</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className='d-flex gap-3 justify-content-end'>
                      <div className='d-flex align-items-center'>
                        <div>
                          <h5 className='font-size-mokuzai-14 fw-bold'>Windows Registry Cleaner<br /> Checklist</h5>
                          <p className='font-size-mokuzai-10'>24 Apr 2019, 45 mins ago</p>
                        </div>
                      </div>
                      <div>
                        <Image src={News2} alt='News2' title="News" />
                        <h6 className='font-size-mokuzai-10 cursor mt-3 fw-bold'>NEXT POST</h6>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <h1 className='font-size-mokuzai-32 mt-5'>4 Comment</h1>
                  <Row className='border p-5 mt-3'>
                    <Col>
                      <Image src={Comment1} alt='comment1' title="Comment" />
                    </Col>
                    <Col md={9}>
                      <p className='font-size-mokuzai-16'>“Theme is very flexible and easy to use. Perfect for us. Customer support has been excellent and answered every question we`ve thrown at them”</p>
                      <p className='font-size-mokuzai-12'>35 mins ago, 15 November 2019<span className='fw-bold ms-3 cursor'>Reply</span></p>
                    </Col>
                  </Row>
                  <Row className='border p-5'>
                    <Col>
                      -
                    </Col>
                    <Col>
                      <Image src={Comment2} alt='Comment2' title="Comment" />
                    </Col>
                    <Col md={8}>
                      <p className='font-size-mokuzai-16'>“This theme is indeed a great purchase. Support center is also helpful and quick to answer. No issues so far.”</p>
                      <p className='font-size-mokuzai-12'>35 mins ago, 15 November 2019<span className='fw-bold ms-3 cursor'>Reply</span></p>
                    </Col>
                  </Row>
                  <Row className='border p-5'>

                    <Col>
                      <Image src={Comment3} alt='comment3' title="Comment" />
                    </Col>
                    <Col md={9}>
                      <p className='font-size-mokuzai-16'>“Exceptional service, beautiful and straightforward theme! Can`t recommend enough.”</p>
                      <p className='font-size-mokuzai-12'>35 mins ago, 15 November 2019<span className='fw-bold ms-3 cursor'>Reply</span></p>
                    </Col>
                  </Row>
                  <Row className='border p-5'>
                    <Col>
                      <Image src={Comment4} alt='comment4' title="Comment" />
                    </Col>
                    <Col md={9}>
                      <p className='font-size-mokuzai-16'>“Highly customizable. Excellent design. Customer services has exceeded my expectation. They are quick to answer and even when they don`t know the answer right away. They`ll work with you towards a solution.”</p>
                      <p className='font-size-mokuzai-12'>35 mins ago, 15 November 2019<span className='fw-bold ms-3 cursor'>Reply</span></p>
                    </Col>
                  </Row>
                </Row>
                <Row>
                  <Col>
                    <h1 className='font-size-mokuzai-32 mt-5'>Leave A Comment</h1>
                    <p className='font-size-mokuzai-12'>Your email address will not be published. Required fields are marked *</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form noValidate className='d-flex gap-3 mt-4'>
                      <div className='border bg-white p-3'>
                        <Form.Control name='email' className='p-0 bgc-unset border-0 shadow-none' type="text" placeholder="Name *" />
                      </div>
                      <div className='border bg-white p-3'>
                        <Form.Control name='address' className='p-0 bgc-unset border-0 shadow-none' type="text" placeholder="Email *" />
                      </div>
                      <div className='border bg-white p-3'>
                        <Form.Control name='address' className='p-0 bgc-unset border-0 shadow-none' type="text" placeholder="Website" />
                      </div>
                    </Form>
                    <div>
                      <Form.Group className="my-4 shadow-none" controlId="exampleForm.ControlTextarea1">
                        <Form.Control placeholder="Your Comment" as="textarea" rows={3} className='border-sharp shadow-none p-4' />
                      </Form.Group>
                    </div>
                    <div className='pb-5'>
                      <Button type='submit' className='rounded-0 size-btn-auth bgc-primary border-0 p-3 mt-2'>
                        <span className='font-size-mokuzai-14 font-weight-mokuzai-700'>Send</span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row className='mb-5'>
            <h1 className='font-size-mokuzai-36 py-4'>Related Post</h1>
            <Col>
              <Image src={Post1} alt='post1' />
              <h6 className='mt-2 cursor'>How to open interior shop?</h6>
              <Row className='d-flex pt-2'>
                <Col md={7} className=' d-flex align-items-center'>
                  <p className='font-size-mokuzai-10 d-inline'><FiClock className='me-1' />24 Apr 2019, 45 mins ago, by Admin</p>
                </Col>
                <Col>
                  <p className='font-size-mokuzai-10'><FiTag className='me-1' />Kids, Interior, Photos</p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Image src={Post2} alt='post2' />
              <h6 className='mt-2 cursor'>Beautiful Corner</h6>
              <Row className='d-flex pt-2'>
                <Col md={7} className=' d-flex align-items-center'>
                  <p className='font-size-mokuzai-10 d-inline'><FiClock className='me-1' />24 Apr 2019, 45 mins ago, by Admin</p>
                </Col>
                <Col>
                  <p className='font-size-mokuzai-10'><FiTag className='me-1' />Kids, Interior, Photos</p>
                </Col>
              </Row>
            </Col>
            <Col className='mb-5'>
              <Image src={Post3} alt='post3' />
              <h6 className='mt-2 cursor'>Furniture Vintage Style</h6>
              <Row className='d-flex pt-2'>
                <Col md={7} className=' d-flex align-items-center'>
                  <p className='font-size-mokuzai-10 d-inline'><FiClock className='me-1' />24 Apr 2019, 45 mins ago, by Admin</p>
                </Col>
                <Col>
                  <p className='font-size-mokuzai-10'><FiTag className='me-1' />Kids, Interior, Photos</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Main>
    </>
  )
}

export default BlogContent;
