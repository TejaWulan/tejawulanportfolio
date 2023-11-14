import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/codingwomen2.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Teja Wulan</b> and I am from Tangerang Indonesia.
            I'm a <b>software developer </b>from July 2022 - now. Logical thinking and problem solving. 
           I have internship experience at at PT. Starcom Solusindo with responsibility for checking  <b>IT components. </b>  
            such as IDU, ODU, PoE, Subscribes Station, and conducting maintenance on these components and APS Power Supply. 
            I have a Java Programming  training certificate from Prakerja and simple building installations issued by KEMNAKER, education and training on low voltage installations from PPSDM KEBTKE of the Ministry of Energy and Mineral Resources, 
            and others you can check on my resume.
            I was once the Vice Chairman of the Shihonbu.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            Apart from coding I love sing and make a song. You can check here. If there isn't a list of songs, I haven't licensed them yet. So if it's already there it's because I published it <a href="https://my.scorecloud.com/user/7b6a23adfe85a7e0d9754946128192c1/tejawulan7" target='_blank'>ScoreCloud.</a>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Python' />
        <Skills skill='Figma' />
        <Skills skill='Java' />
        <Skills skill='Npm' />
        <Skills skill='Database'/>
        
      </div>
    </>
  )
}

export default About