import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar, Button, Offcanvas } from 'react-bootstrap';
import logo from '../assets/logo.png'; // Adjust the path to your logo

export default function NavBar({ user }) {
    /* Offcanvas Setters */
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-5">
                            <p>Welcome to Tuinue Wasichana</p>
                        </div>
                        <div className="col-md-6 col-sm-6 text-align-right">
                            <span className="phone-icon"><i className="fa fa-phone"></i> +254 719 405 599</span>
                            <span className="email-icon"><i className="fa fa-envelope-o"></i> <a href="mailto:info@tuinuewasichana.com">info@tuinuewasichana.com</a></span>
                        </div>
                        <div className="col-md-2 col-sm-1">
                            <span className="user-icon"><i className="fa fa-user"></i> <a href="#">Welcome {user ? user['name'] : "Guest"}</a></span>
                        </div>
                    </div>
                </div>
            </header>

            <Navbar className="p-2 text-light" style={{ backgroundColor: '#ff69b4' }} expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img alt="Tuinue Wasichana Logo" src={logo} width="30" height="30" className="d-inline-block align-top" />{' '}
                        Tuinue Wasichana
                    </Navbar.Brand>
                    <Button className="shadow-none d-lg-none border-0" onClick={handleShow}>
                        <span className="navbar-toggler-icon"></span>
                    </Button>
                    <Offcanvas show={show} onHide={handleClose} responsive="lg">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Tuinue Wasichana</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                                <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
                                <Nav.Link as={NavLink} to="/fundraise">Ways to Fundraise</Nav.Link>
                                <Nav.Link as={NavLink} to="/charities">Charities</Nav.Link>
                                <Nav.Link as={NavLink} to={user ? "/donate" : "/login"}>Donate</Nav.Link>
                                <div className="ms-4">
                                    {!user && (
                                        <>
                                            <Button variant="transparent border border-white">
                                                <NavLink to='/signup'>Sign Up</NavLink>
                                            </Button>
                                            <Button className="ms-2" variant="transparent border border-white">
                                                <NavLink to='/login'>Log In</NavLink>
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </Nav>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}
