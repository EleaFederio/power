import { Component, Fragment } from "react";
import { Card, Carousel, Col, Container, Image, Row } from "react-bootstrap";
import carousel1 from "../../assets/img/Carousel1.png"
import subCarousel1 from "../../assets/img/anounce2.png"

class HomePage extends Component{
    render() {
        return (
            <Fragment>
                <Container>
                    <Carousel className={'mt-2'}>
                        <Carousel.Item>
                            <Image src={carousel1} fluid />
                        </Carousel.Item>
                    </Carousel>

                    {/* First Row */}
                    <Row className={'mt-3'}>
                        <Col lg={4} className={'text-lg-left'}>
                            <Card className={'mb-3'}>
                                <Card.Img variant="top" src="https://gsac.coop/wp-content/uploads/2020/08/FeatureImage-300x225.png" />
                                <Card.Body>
                                    <p className={'text-center'}><b>GSAC Mart Opening</b></p>
                                    <p className={'text-center font-weight-light'}>November 28, 2019</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} className={'mb-3'}>
                            <Card>
                                <Card.Img variant="top" src="https://gsac.coop/wp-content/uploads/2020/08/FeatureImage-1-300x225.png" />
                                <Card.Body>
                                    <p className={'text-center'}><b>GSAC Iriga Branch Opens</b></p>
                                    <p className={'text-center font-weight-light'}>November 28, 2019</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} className={'mb-3'}>
                            <Card>
                                <Card.Img variant="top" src="https://gsac.coop/wp-content/uploads/2020/08/FeatureImage-2-300x225.png" />
                                <Card.Body>
                                    <p className={'text-center'}><b>GSAC Dental, Medical & BloodLetting</b></p>
                                    <p className={'text-center font-weight-light'}>November 28, 2019</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    {/* Second Row */}
                    <Row className={'mt-3'}>
                        <Col lg={6} className={'mb-3'}>
                            <Carousel>
                                <Carousel.Item>
                                    <Image src={'https://gsac.coop/wp-content/uploads/2020/12/GA-Paisi-1-683x1024.png'} fluid />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src={subCarousel1} fluid />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col lg={6} className={'mb-3'}>
                            <Card.Img variant="top" className={'mb-5'} src="https://gsac.coop/wp-content/uploads/2020/08/OnlineApplicationHOME.png" />
                            <Card.Img variant="top" className={'mb-5'} src="https://gsac.coop/wp-content/uploads/2020/08/OnlineMembershipHOME.png" />
                            <Card.Img variant="top" className={'mb-5'} src="https://gsac.coop/wp-content/uploads/2020/08/Transfer-of-MembershipHOME-1024x352.png" />
                        </Col>
                        {/* <Col lg={4} className={'mb-3'}>
                        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbugclibrary&tabs=timeline&width=0&height=0&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="0" height="0" style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        </Col> */}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default HomePage;