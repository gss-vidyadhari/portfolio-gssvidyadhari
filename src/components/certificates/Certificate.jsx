import React from 'react'
import "./certificate.css"
import Image1 from "../../assets/AWS1.svg"
import Image2 from "../../assets/AWS1.svg"
import Image3 from "../../assets/REDHAT3.svg"
import Image4 from "../../assets/epam1.svg"
import Image5 from "../../assets/Oracle_logo1.svg"


const cert = [
    {
      id: 1,
      image: Image1,
      title: "AWS",
      description:
        "I completed my AWS cloud practitioner certificate.",
      link: "https://fontawesome.com/kits/ed27cfbad7/icons",
    },
    {
      id: 2,
      image: Image2,
      title: "AWS",
      description:
        "I have my AWS Developer Associate certificate.",
    },
    {
      id: 3,
      image: Image3,
      title: "Red Hat",
      description:
        "I have obtained my Red Hat Certified Enterprise Application Developer",
    },
    {
      id: 4,
      image: Image4,
      title: "EPAM",
      description:
        "I did my EPAM front end application certification.",
    },
    {
      id: 5,
      image: Image5,
      title: "Oracle",
      description:
        "I did my Oracle front end application certification.",
      
    }
  ];
const Certificate = () => {
  return (
    <section className='certificate container section' id='certificate'>
        <h2 className='section__title'>Certificates</h2>
        <div className="certificate__container grid">
          {cert.map(({id,image,title, description})=>{
            return(
              <div className='certificate__card' key={id}>
                <img src={image} alt='' className='certificate__img'/>
                <h3 className="certificate__title">{title}</h3>
                <p className='certificate__description'>{description}</p>
                <a href='https://www.credly.com/users/sri-sai-vidyadhari-ghanta.70bfb7b2' className='hyperlink'>View Certificate</a>
                
              </div>
            )
          })}
        </div>


  </section>
    
  );
};

export default Certificate