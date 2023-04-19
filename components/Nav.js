/*eslint-disable*/
import React, {useEffect} from 'react'
import navStyles from '../styles/Nav.module.css'
import { useSelector } from 'react-redux';
// import Link from 'next/link'
import { useRouter } from 'next/router';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = ()=> {


  const router =useRouter();
  const currentRoute = router.pathname;

  // const Navbar = () => {
    const cart = useSelector((state) => state.cart);
  
    const getItemsCount = () => {
      
      return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
    };
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
      console.log("Cart saved to localStorage:", cart);
    }, [cart]);
  
  
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/" className={currentRoute ==="/" }>
                <span className={navStyles.logo}>TFH</span> 
                </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home" className={currentRoute ==="/home" ? "active" : "non-active"}>
              Home
              </Nav.Link>
              <Nav.Link href="/shop" className={currentRoute ==="/shop" ? "active" : "non-active"}>
              Shop
              </Nav.Link>
               <Nav.Link href="/cart"
               className={currentRoute ==="/cart" ? "active" : "non-active"}>
                Cart({getItemsCount()})</Nav.Link>
                <NavDropdown.Divider />
               <Nav.Link href="/login" className={currentRoute ==="/login" ? "active" : "non-active"}>
              Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    );
}

export default Navigation
