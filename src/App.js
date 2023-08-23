import React from 'react';
import './App.css';
import Education from './components/education/Education';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Home from './components/Home/Home';
import Projects from './components/projects/Projects';
import Certificate from './components/certificates/Certificate';


const App=()=> {
  return (
    <div>
   
    <Sidebar/>
    <Home/>
    <About/>
    <Education/>
    <Projects/>
     <Certificate/>
    

    </div>
  );
}

export default App;
