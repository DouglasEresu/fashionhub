/*eslint-disable*/
import React from 'react'
import navStyles from '../styles/Nav.module.css'
import { useSelector } from 'react-redux';
// import Link from 'next/link'
import { useRouter } from 'next/router';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Navigation() {

  
  const router =useRouter();
  const currentRoute = router.pathname;

  // const Navbar = () => {
    const cart = useSelector((state) => state.cart);
  
    const getItemsCount = () => {
      
      return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
    };
  
    return (
      <div className={navStyles.nav}>

      <nav className='shadow-lg p-3 mb-5 bg-body rounded'>
        <ul className=' d-flex justify-content-center'>
        <li className='mx-5 nav'>
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/"><a className={currentRoute ==="/" }>
                <span className={navStyles.logo}>TFH</span> 
                </a></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home"><a className={currentRoute ==="/home" ? "active" : "non-active"}>
              Home
              </a></Nav.Link>
              <Nav.Link href="/shop"><a className={currentRoute ==="/shop" ? "active" : "non-active"}>
              Shop
              </a></Nav.Link>
               <Nav.Link href="/cart"><p>
              <a className={currentRoute ==="/cart" ? "active" : "non-active"}>
                Cart({getItemsCount()})</a></p></Nav.Link>
                <NavDropdown.Divider />
               <Nav.Link href="/login"><a className={currentRoute ==="/login" ? "active" : "non-active"}>
              Login
              </a></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
            </li>
            </ul>
            <style jsx>
        {`
        nav a {
          text-decoration:none;
          padding:5%;
          font-size:25px;
    
        }
        
        nav ul {
          display: flex;
          list-style: none;
          margin: 0;
          
        }
      
        nav li {
          margin-right: 1rem;
        }
        
          }
        }
      
        }
        .active{
          background: linear-gradient(to right, #8e2de2, #4a00e0);
          color:white;
          border-radius:15px;
        }`}
      </style>
    </nav>
    </div>
    
  )
    
}

export default Navigation
