import React from 'react';
import Lottie from  "lottie-react";
import Programmer from "../LottieFiles/womenprogrammer.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Teja deleted background.png';
import {CiMicrophoneOn} from "react-icons/ci";


const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Teja Wulan</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={Programmer} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
          Hello, I'm Teja Wulan. I currently work as a developer.  
            I want to do work that challenges me as a developer & work that I can 
            be proud of. I like things related to technology. Apart from technology, I also like arts.<br /><br />
            I am understand in <b>Java, </b> <b>C++, </b> <b>SQL, </b><b>PLC, </b><b>Autocad, </b>and know  of <b>React</b> and am working on a few 
            projects in the <b>WIDE</b> stack.<br />
            I plan to learn <b>Next.js</b>, <b>Python</b> and<b> C# </b> in the near future. <br /><br />
            Also, I love <b>sing</b> <CiMicrophoneOn style={{scale:"1.5", rotate:"15deg"}}/>   
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home