/*eslint-disable*/
import React from 'react'
import navStyles from '../styles/Nav.module.css'
import { useSelector } from 'react-redux';
import Link from 'next/link'
import { useRouter } from 'next/router';

function Nav() {

  window.addEventListener('load', function() {
    var navbar = document.querySelector('.nav');
    navbar.classList.add('loaded');
  });
  

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
          <Link href="/">
            <a className={currentRoute ==="/" }>
              <span className={navStyles.logo}>TFH</span> 
              </a></Link>
          </li>
          <li className='mx-5 nav'>
          <Link href="/home">
          <a className={currentRoute ==="/home" ? "active" : "non-active"}>
            Home
            </a></Link>
          </li>
          <li className='mx-5 nav'>
          <Link href="/shop">
          <a className={currentRoute ==="/shop" ? "active" : "non-active"}>
            Shop
            </a></Link>
          </li>
          <li className='mx-5 nav'>
          <Link href="/login">
          <a className={currentRoute ==="/login" ? "active" : "non-active"}>
            Login
            </a></Link>
          </li>
          <li className='mx-5 nav'>
            <Link href="/cart"><p>
            <a className={currentRoute ==="/cart" ? "active" : "non-active"}>
              Cart({getItemsCount()})</a></p>
              </Link>
          </li>
      </ul>

      <style jsx>
        {`
        nav a {
          text-decoration:none;
          padding:5%;
          font-size:25px;
          font-weight: 600
        }
        
        nav ul {
          display: flex;
          overflow-y: hidden;
          overflow-x: hidden;
          list-style: none;
          margin: 0;
          
        }
      
        nav li {
          margin-right: 1rem;
        }

        @media (max-width: 500px) {
          nav {
            position: fixed;
            top: -300px;
            width: 100%;
            padding : 10px;
            transition: top 0.5s ease;
            flex-direction: column;
            align-items: flex-start;
          }

          nav a{
            text-decoration: none;
            padding: 5px 10px;
            display: block;
            font-size: 20px;
            color: #072731
          }
          .nav.loaded{
            top: 0;
          }
        
          ul {
            flex-direction: column;
            list-style: none;
            margin: 0;
            padding: 0;
          }
        
          li {
            display: inline-block
            margin-right: 0;
            margin-bottom: 0.5rem;
          }
        }
      
        }

        .active{
          transition: color 0.25s ease, background 0.25s ease;
          background: linear-gradient(to right, #8e2de2, #4a00e0);
          color:white;
          border-radius:15px;
        }`}
      </style>
    </nav>
    </div>
  )
}

export default Nav
