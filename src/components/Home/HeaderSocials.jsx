import React from 'react'

const HeaderSocials = () => {
  const email = 'gss.vidyadhari@gmail.com';
  return (
    <div className="home__socials">
       {/* <a href="" className="home__social-link" target="__blank">
        <i class="fab fa-linkedin"></i>
        </a>
        <a href="" className="home__social-link" target="__blank">
        <i class="fa-brands fa-square-github"></i>
        </a> */}
        <a href="www.linkedin.com/in/ghanta-sri-sai-vidyadhari" className="home__social-link" target="__blank">
        <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/gss-vidyadhari" className="home__social-link" target="__blank">
        <i class="fa-brands fa-square-github"></i>
        </a>
        <a href={`mailto:${email}`} className="home__social-link" target="__blank">
        <i class="fa-solid fa-envelope"></i>
        </a>
        {/* <a href="" className="home__social-link" target="__blank">
        <i class="fab fa-linkedin"></i>
        </a> */}
        
       

    </div>
  )
}

export default HeaderSocials