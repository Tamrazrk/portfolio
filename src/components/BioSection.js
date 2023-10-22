import React from 'react'
import './styles/Bio.css';

const ProjectsScroll = 1600;

export default function BioSection() {

  const scrollProjects = () => {
    window.scrollTo(0, ProjectsScroll);
  }

  return (
    <div className='bio'>
        <h1>HEY, I'M Tamar Zarkhozashvili</h1>

        <p>A Fullstack Web Developer building the Websites and Web Applications that leads to the success of the overall product</p>

        <div className='projects-button' onClick={scrollProjects}>Projects</div>

        <div className='socials'>
          <div className='icon'>
            <a href='https://www.linkedin.com/in/tamara-zark-461847249/' target='_blank' rel='noreferrer'><img 
            src='https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg'
            alt='linkedinicon'
            /></a>
          </div>
          <div className='icon'>
          <a href='https://github.com/Tamrazrk' target='_blank' rel='noreferrer'><img 
            src='https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg'
            alt='githubicon'
            /></a>
          </div>
          

        </div>
    </div>
  )
}
