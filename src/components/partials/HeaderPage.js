import { Component, Fragment } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

class HeaderPage extends Component{
    
    render() {
        return (
            <Fragment>
                <Navbar collapseOnSelect expand="lg" fixed={'top'} variant="dark" style={{backgroundColor: '#2d2288'}}>
                <Navbar.Brand href="#home">
                    <img
                        src="https://gsac.coop/wp-content/uploads/2020/08/GSACLOGOW-1536x559.png"
                        width="80"
                        height="40"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">HOME</Nav.Link>
                        <NavDropdown title="ABOUT US" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">HISTORY</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">VMC</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">AWARD</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">GALERY</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">BOARD OF DIRECTORS</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">ANNUAL REPORT</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="PRODUCT & SERVICES" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">LOAN</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">SAVINGS</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">ALLIED SERVICES</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="MEMBERSHIP" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">REGULAR MEMBERSHIP</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">ASSOCIATE MEMBERSHIP</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#S">ONLINE APPLICATION</Nav.Link>
                        <Nav.Link href="#D">BRANCHES</Nav.Link>
                        <Nav.Link href="#A">ARTICLES</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default HeaderPage;