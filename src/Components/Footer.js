import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Teja Wulan</h4>
      <h4>2023, Indonesia</h4>
      <div className='footerLinks'>
        <a href="https://github.com/TejaWulan" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/teja-wulan-8673a6237/?originalSubdomain=id" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:tejawulan8@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer