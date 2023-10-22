import React, { useState } from 'react'
import './styles/Navbar.css';
import profile from '../assets/profile.jpg';

const AboutScroll = 700;
const HomeScroll = 0;
const ProjectsScroll = 1600;
const ContactScroll = 2600;

export default function Navbar() {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  }

  const scrollAbout = () => {
    window.scrollTo(0, AboutScroll);
  }

  const scrollHome = () => {
    window.scrollTo(0, HomeScroll);
  }

  const scrollProjects = () => {
    window.scrollTo(0, ProjectsScroll);
  }

  const scrollContact = () => {
    window.scrollTo(0, ContactScroll);
  }

  return (
    <div className='navbar'>
        <div className='navbar-left'>
            <img alt='profileimage' src={profile} className='profile'/>
            <h4>Tamar Zarkhozashvili</h4>
        </div>

        <div className='navbar-right'>
            <h4 onClick={scrollHome}>Home</h4>
            <h4 onClick={scrollAbout}>About</h4>
            <h4 onClick={scrollProjects}>Projects</h4>
            <h4 onClick={scrollContact}>Contact</h4>
        </div>
        <div className='menu-icon'>
          <img 
          src='https://d33wubrfki0l68.cloudfront.net/79e75114856ae61628d2ad26504e3ff4ab2c71b6/f06a4/assets/svg/ham-menu.svg'
          alt='menu-icon'
          onClick={toggleShow}
          />
        </div>
        {show &&
         <div className='navbar-right-small'>
            <h4 onClick={scrollHome}>Home</h4>
            <h4 onClick={scrollAbout}>About</h4>
            <h4 onClick={scrollProjects}>Projects</h4>
            <h4 onClick={scrollContact}>Contact</h4>
        </div> }

    </div>
  )
}
