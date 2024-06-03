import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Amir Fareed</h1>
        <h5 className="text-light"> Software Engineer / Research & Data Analyst / Freelancer</h5>

        <h5 className="text-light"> Research & Data Analyst / Freelancer</h5>

        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
