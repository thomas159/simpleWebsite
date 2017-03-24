import React from 'react';
import { Link } from 'react-router';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li>
            <Link to="/redux">Redux</Link>
          </li>
          <li>
            <Link to="/reduxthunk">ReduxThunk</Link>
          </li>
          <li>
            <Link to="/contactform">Contact Form</Link>
          </li>
           <li>
            <Link to="/carousel">Carousel</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
