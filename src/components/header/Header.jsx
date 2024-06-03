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
<<<<<<< HEAD
        <h5 className="text-light"> Software Engineer / Research & Data Analyst / Freelancer</h5>
=======
        <h5 className="text-light"> Research & Data Analyst / Freelancer</h5>
>>>>>>> d0fd339a547c038caecdd17d0a886df0ab89baf0
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
