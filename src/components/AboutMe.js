import React from 'react'
import './styles/AboutMe.css';

export default function AboutMe() {
  return (
    <div className='aboutme'>
        <div className='inner'>
            <h1>About me</h1>
            <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>

            <section>
                <h2>Get to know me!</h2>
                <p>I'm a Fullstack developer building the Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
                <p>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming</p>
                <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                <div className='projects-button'>Contact</div>
            </section>
            <div className='skills'>
                <h2>My Skills</h2>
                <div className='skills-container'>
                    <div className='skill'>HTML</div>
                    <div className='skill'>CSS</div>
                    <div className='skill'>JavaScript</div>
                    <div className='skill'>React.js</div>
                    <div className='skill'>Node.js</div>
                    <div className='skill'>SQL</div>
                    <div className='skill'>Git</div>
                    <div className='skill'>GitHub</div>
                </div>
            </div>
        </div>
    </div>
  )
}
