import React from 'react'
import './intro.css'
import GitHub from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/boy.png'
import Glassesimoji from '../../img/glassesimoji.png'
import Thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'


const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <span className='heading'>Hi! I Am</span>
            <span className='head'>M. Taha Bilal</span>
            <span className='head2'>
                Full stack developer. I'm fresh graducate
                and  doing a work in MERN technology.I'm 
                very dedicated for my work.
            </span>
            <button className="button i-button">Hire me</button>

          <div className='i-icon'>
            <a href='https://github.com/TahaSandhu'>
            <img src={GitHub} alt="github" />
            </a>
            <a href='https://www.linkedin.com/in/taha-bilal-303358262/'>
            <img src={Linkedin} alt="linkedin" />
            </a>
            <img src={Instagram} alt="instagram" />
          </div>
        </div>

        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={Boy} alt="" />
            <img src={Glassesimoji} alt="" />

          <div style={{top:'-4%',left:"68%"}}>
            <FloatingDiv image={Crown}  txt1='Web' txt2='Developer' />
          </div> 
          <div style={{top:'18rem',left:'0rem'}}>
            <FloatingDiv image={Thumbup}  txt1='Best Design' txt2='Award' />
          </div>
            {/* Here Background Blur code */}
            <div className='blur' style={{background:'rgb (238 210 255)'}}>
            </div>
            <div className='blur' style={{
                background:'#C1F5FF',
                top:'17rem',
                width:'21rem',
                height:'11rem',
                left:'-9rem'
            }}>

            </div>
        </div>
    </div>
  )
}

export default Intro