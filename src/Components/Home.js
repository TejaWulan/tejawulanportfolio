import React from 'react';
import Lottie from "lottie-react";
import Programmer from "../LottieFiles/womenprogrammer.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Teja deleted background.png';

const Home = () => {
  return (
    <div>
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
            Halo, saya <b>Teja Wulan</b>. Saat ini saya bekerja sebagai <b>Software Engineer</b> di <b>PT. Wide Technologies Indonesia</b>, dengan spesialisasi pengembangan backend menggunakan <b>Java</b> dan <b>Golang</b>. Saya didorong oleh pemecahan masalah yang logis dan keinginan untuk membangun sistem yang bersih dan efisien.<br /><br />
            
            Saya memiliki fondasi kuat dalam pemrograman <b>Java</b>, <b>Golang</b>, <b>python</b>,dan <b>SQL</b>, serta pengalaman praktis dalam mengintegrasikan API pihak ketiga, mengoptimalkan REST endpoint, dan menangani state machine logistik yang kompleks.<br /><br />
            
            Latar belakang saya sebagai Sarjana Teknik Elektro memberi saya perspektif unik dalam memahami sisi hardware dan IoT.<br /><br />
            
            Mari berkolaborasi!
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="Teja Wulan" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home;