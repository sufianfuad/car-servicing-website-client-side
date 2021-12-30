import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

//CSS
import './Navigation.css';
const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand
                        className='fw-bolder text-black'
                        href="#home">Car Wash</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link
                            className='nav-items text-black fw-bold'
                            as={Link} to="/home">Home
                        </Nav.Link>
                        <Nav.Link
                            className='nav-items text-black fw-bold'
                            as={Link} to="/services">Services
                        </Nav.Link>
                        {user?.email ?
                            <button onClick={logOut} className='btn btn-secondary'>LogOut</button>
                            :
                            <Nav.Link
                                className='nav-items text-black fw-bold'
                                as={Link} to="/login">Login
                            </Nav.Link>
                        }
                        <Nav.Link
                            className='nav-items text-black fw-bold'
                            as={Link} to="/signup">Register
                        </Nav.Link>
                        <Nav.Link
                            className='nav-items text-black fw-bold'
                            as={Link} to="/contact">Contact
                        </Nav.Link>
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </>
    );
};

export default Navigation;