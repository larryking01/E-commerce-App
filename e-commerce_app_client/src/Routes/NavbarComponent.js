import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import { BiHelpCircle, BiUser } from 'react-icons/bi'
import { BsInfoCircle, BsCart3 } from 'react-icons/bs'


import brand1 from '../Static Files/brand1.png'
import brand2 from '../Static Files/brand2.png'
import brand3 from '../Static Files/brand3.jpg'
import brand4 from '../Static Files/brand4.png'




const NavbarComponent = () => {

    return (

        <div>
            <Navbar expand='lg' variant='light' style={{ /*backgroundColor: '#ff3300',*/  height: 70 }} >
                <Container>
                    <Navbar.Brand style={{ cursor: 'pointer' }}> <img src={ brand4 } alt='nav-brand' width={ 60 } /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='container-fluid' >
                            <Nav.Link> Men </Nav.Link>
                            <Nav.Link> Women </Nav.Link>
                            <Nav.Link> New Arrivals </Nav.Link>


                            <Nav.Item className='ms-auto'>
                                <Nav.Link href='login'> Login </Nav.Link>
                            </Nav.Item>

                            <Nav.Item className='ms-1'>
                                <Nav.Link href='sign-up'> Sign Up </Nav.Link>
                            </Nav.Item>

                            <Nav.Item className='ms-1'>
                                <Nav.Link href='about-us'> About Us </Nav.Link>
                            </Nav.Item>

                            <Nav.Item className='ms-1'>
                                <Nav.Link href='help'> Help </Nav.Link>
                            </Nav.Item>

                            <Nav.Item className='ms-1'>
                                <Nav.Link > <BsCart3 size={ 22 } title='Cart'/> </Nav.Link>
                            </Nav.Item>

                            <Nav.Item className='ms-1'>
                                <Nav.Link> <BiUser size={ 26 } title='Account' /> </Nav.Link>
                            </Nav.Item>



                            {/* <Nav.Item className='ms-5' style={{ paddingRight: 20 }}>
                                <Button variant='danger'> Sign Up </Button>
                            </Nav.Item>

                            <Nav.Item>
                                <Button variant='outline-danger'> Log In </Button>
                            </Nav.Item>  */}

                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar>

        </div>
    )

}




export default NavbarComponent