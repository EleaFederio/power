import { Component, Fragment } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";

class FooterPage extends Component{


    render(){
        return(
            <Fragment>
                <footer className="footer py-4 mt-4" style={{backgroundColor: '#eee'}} >
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 text-lg-left">Copyright © Eleazar Federio 2020</div>
                            <div className="col-lg-4 my-3 my-lg-0">
                                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-youtube"></i></a>
                            </div>
                            <div className="col-lg-4 text-lg-right">
                                Thank you for viewing this site
                            </div>
                        </div>
                    </div>
                </footer>
            </Fragment>
        )
    }

}

export default FooterPage;