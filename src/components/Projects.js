import React from 'react'
import './styles/Projects.css';
import project from '../assets/project1.png';

export default function Projects() {
  return (
    <div className='projects'>
        <div className='projects-inner'>
            <h1>Projects</h1>
            <p>Here you will find some of the personal and clients projects that I created with each project.</p>

            <div className='projects-container'>
                <img src={project} alt='project' className='project-image'/>
                <h1>Tech e-commerce</h1>
                <p>Tech e-commerce website is for placing your product on a platform and see other tech products. it is build with MERN stack</p>
                <div className='project-buttons'>
                    <a href='https://super-kitsune-eac280.netlify.app/' rel='noreferrer' target='_blank'><div className='projects-button'>Live site</div></a>
                    <a href='https://github.com/Tamrazrk' target='_blank' rel='noreferrer'><div className='projects-button'>Github</div></a>
                </div>
            </div>
        </div>
    </div>
  )
}
