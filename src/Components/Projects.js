import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/wideeduwebsite1.png';
import WideEduWebsite2 from '../images/wideeduwebsite2.png';
import RogfreeImage from '../images/Java WCC.webp';
import MySQL from '../images/My SQL WCC.webp';
import TindogImage from '../images/wiress-logo.png';


const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={NewsletterImage} projectName="WIDE Edu Website" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="Java Basic Programming" />
        <ProjectBox projectPhoto={WideEduWebsite2} projectName="WIDE Edu Website currently" />
        <ProjectBox projectPhoto={TindogImage} projectName="WIRESS Clean Code App" />
        <ProjectBox projectPhoto={MySQL} projectName="MySQL Course" />
      </div>

    </div>
  )
}

export default Projects