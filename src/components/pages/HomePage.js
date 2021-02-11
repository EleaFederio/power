import { Component, Fragment } from "react";
import { Card, Carousel, Col, Container, Image, Row } from "react-bootstrap";
import carousel1 from "../../assets/img/Carousel1.png"
import subCarousel1 from "../../assets/img/anounce2.png"
import pic1 from "../../assets/img/pic1.png"
import pic2 from "../../assets/img/pic2.png"
import pic3 from "../../assets/img/pic3.png"
import application1 from "../../assets/img/application1.png"
import application2 from "../../assets/img/application2.png"
import application3 from "../../assets/img/application3.png"
import paisi2 from "../../assets/img/paisi2.png"
import gsac_post from "../../assets/img/gsac_post.png"


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
                                <Card.Img variant="top" src={pic1} />
                                <Card.Body>
                                    <p className={'text-center'} style={{color: '#000080', marginBottom: 0}}><b>GSAC Mart Opening</b></p>
                                    <p className={'text-center '} style={{color: 'grey', marginBottom: 0}}>November 28, 2019</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} className={'mb-3'}>
                            <Card>
                                <Card.Img variant="top" src={pic2} />
                                <Card.Body>
                                    <p className={'text-center'} style={{color: '#000080', marginBottom: 0}}><b>GSAC Iriga Branch Opens</b></p>
                                    <p className={'text-center '} style={{color: 'grey', marginBottom: 0}}>October 28, 2019</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} className={'mb-3'}>
                            <Card>
                                <Card.Img variant="top" src={pic3} />
                                <Card.Body>
                                    <p className={'text-center'} style={{color: '#000080', marginBottom: 0}}><b>GSAC Dental, Medical & BloodLetting</b></p>
                                    <p className={'text-center '} style={{color: 'grey', marginBottom: 0}}>October 27, 2019</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    {/* Second Row */}
                    <Row className={'mt-3'}>
                        <Col lg={4} className={'mb-3'}>
                            <Carousel>
                                <Carousel.Item>
                                    <Image src={paisi2} fluid />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src={subCarousel1} fluid />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col lg={4} className={'mb-3'}>
                            <h1 className={'text-center mb-5'}>Online Application</h1>
                            <Card.Img variant="top" className={'mb-5'} src={application1} />
                            <Card.Img variant="top" className={'mb-5'} src={application2} />
                            <Card.Img variant="top" className={'mb-5'} src={application3} />
                        </Col>
                        <Col lg={4} className={'mb-3'}>
                            <Image src={gsac_post} fluid/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default HomePage;