import React from 'react';
import "./about.css";


const About = () => {
  const email = 'gss.vidyadhari@gmail.com';
  return (
    <section className='about container section' id= 'about'>
      <h2 className='section__title'>About Me</h2>
      <div className="about__container ">
      
      <div className='about__data grid'>
        <div className='about__info'>
          <p className='about__description'>
          Hello, I'm Sri Sai Vidyadhari, a tech enthusiast weaving the worlds of full stack development and software engineering into digital wonders. Picture an orchestra, where one foot dances in front-end finesse, captivating with visuals, while the other strides boldly into back-end brilliance, ensuring efficiency. With a palette of languages and technologies, I craft seamless user experiences from concept spark to triumphant execution. Each project's a new composition, pushing boundaries of innovation.

Web development is my artistic playground. I navigate trends, frameworks, and techniques, thriving on the cutting edge. Amidst code and challenges, I find balance in literature and music. An avid reader, I lose myself in enchanting realms where ideas intertwine. Also, I'm a songwriter, transforming thoughts into harmonious melodies. Just as I structure code, I compose heartfelt songs.
          </p>
          <br/>
          <p className='about__description'> Email me on further communication regarding my resume</p>
        {/* <a href={Resume} download="gss.vidyadhari_resume_.pdf" className='btn'>Download Resume</a> */}
        <a href={`mailto:${email}`} className="home__social-link" target="__blank"> 
        <i class="fa-solid fa-envelope"></i>
        </a>
        </div>
        <div className='about__skills grid'>
          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__names">Python</h3>
              <span className='skills__number'>80%</span>
            </div>
            <div className="skills__bar">
              <span className='skills__percentage python'></span>
            </div>
          </div>
             <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__names">C++</h3>
              <span className='skills__number'>70%</span>
            </div>
            <div className="skills__bar">
              <span className='skills__percentage cpp'></span>
            </div>
          </div>
             <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__names">C</h3>
              <span className='skills__number'>70%</span>
            </div>
            <div className="skills__bar">
              <span className='skills__percentage c'></span>
            </div>
          </div>
             <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__names">Java</h3>
              <span className='skills__number'>65%</span>
            </div>
            <div className="skills__bar">
              <span className='skills__percentage java'></span>
            </div>
          </div>
             <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__names">HTML/CSS/JS</h3>
              <span className='skills__number'>80%</span>
            </div>
            <div className="skills__bar">
              <span className='skills__percentage html_css'></span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__names">Front-End Development Skills</h3>
              <span className='skills__number'>80%</span>
            </div>
            <div className="skills__bar">
              <span className='skills__percentage fed'></span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__names">Back-End Development Skill</h3>
              <span className='skills__number'>75%</span>
            </div>
            <div className="skills__bar">
              <span className='skills__percentage bed'></span>
            </div>
          </div>
          
        </div>

      </div>
      </div>
      
    </section>
  )
}

export default About