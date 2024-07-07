import React from 'react'
import ME from '../assets/Me.png';
import CTA from "./CTA";
import HeaderSocial from './headerSocial';

const Header = () => {
  return (
    <header>
    <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Picoty Jemutai</h1>
        <h5 className="text-light">
            Software Developer
        </h5>
        <CTA/>
       <HeaderSocial />
       <div className="me">
                  <img src={ME} alt="img"  />
              </div>
         <a href="#contact" className="scroll__down">Bottom</a>
       
    </div>
  </header>
  );
}

export default Header