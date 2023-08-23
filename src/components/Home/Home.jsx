import React from 'react';
import "./home.css";
import Me from "../../assets/avatarME.svg"
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

// import Resume from '../../assets/gss.vidyadhari_resume_.pdf'


const Home = () => {
  return (
    
      <section className='home container' id="home">
         {/* <Shapes/> */}
        <div className='intro'>
          <img src={Me} alt="" className='home__img'/>
          <h1 className='home__name'>Sri Sai Vidyadhari Ghanta</h1>
          <span className='home__education'> I'm a full stack web developer</span>
          <HeaderSocials/>
          
          
        <ScrollDown/>
        </div>
        <div>
       
        </div>
      </section>
      
  )
}

export default Home