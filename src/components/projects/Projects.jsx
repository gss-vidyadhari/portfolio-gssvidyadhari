import React from 'react'
import "./projects.css"
import Data1 from './Data1'
import Card1 from './Card1'
const Projects = () => {
  return (
    <section className="project container section" id="project">
      <h2 className='section__title'>Projects</h2>
      <div className='projects__container grid'>
        <div className='timeline grid'>
          {Data1.map((val,id)=>{
            
            if(val.category==="project1"){
              return (
                
                <Card1 ey={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc} />
              )
              }           
          })}
        </div>
        <div className='timeline grid'>
          {Data1.map((val,index)=>{
            
            if(val.category==="project2"){
              return (
                
                <Card1 ey={index} icon={val.icon} title={val.title} year={val.year} desc={val.desc} />
              )
              }           
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects