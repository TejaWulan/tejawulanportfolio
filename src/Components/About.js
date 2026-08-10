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
            Hi, my name is <b>Teja Wulan</b>, a <b>Software Engineer</b> with a Bachelor's degree in Electrical Engineering (GPA 3.45) from Universitas Siliwangi.<br/><br/>

            Since July 2022, I have been working at <b>PT. Wide Technologies Indonesia</b>, specializing in backend and full-stack development. I have hands-on experience building clean-code applications using <b>Java</b> and <b>Golang</b>, managing complex <b>state machines</b>, integrating APIs (such as Xendit VA & SiCepat), and optimizing REST endpoints and database queries.<br/><br/>

            Additionally, I serve as a trainer/instructor for <b>Java & SQL Bootcamps</b> at Wide Edu, and I have completed freelance projects including end-to-end UI/UX & frontend development for corporate websites.<br/><br/>

            I hold various certifications including the <b>Prompt Design in Vertex AI Skill Badge</b> from Google, Java Programming Course-Net (Prakerja), and Electrical Certifications from KEMNAKER and Ministry of Energy and Mineral Resources (ESDM).<br/><br/>

            I am <b>open</b> to new opportunities and collaborations where I can contribute, solve complex problems, and grow. Feel free to connect with me!<br/><br/>

            Apart from coding, I love music and creating songs. You can check my published work on <a href="https://my.scorecloud.com/user/7b6a23adfe85a7e0d9754946128192c1/tejawulan7" target='_blank' rel="noreferrer">ScoreCloud</a>.
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