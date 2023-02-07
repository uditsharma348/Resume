import React from 'react';
import './css/Right.css';
// import {Line} from './Line'
export const Right = () => {
  return (
    <div className='right'>
        <div className="right-upper">
            <h1 className='about'>About Me</h1>
            <div className='gym'></div>
            <span className='ppg'>An independent and self-motivated Electronics and
            Communication Engineer looking for an internship or
            research opportunity in an organization where I can
            utilize my skills and attention to detail to further 
            develop my abilities.</span>
            <h1 className='education'>Education Background</h1>
            <div className='gym' style={{position:"relative",top:"29.5%"}}></div>
            <ul className='nnum'>
              <li>passing <b>B tech in ECE</b> from AKTU university <b>(2018-19)</b></li>
              <li>passed <b>12th</b> from UP board from <b>(2018-19)</b></li>
              <li>passed <b>10th</b> from UP board from <b>(2016-17)</b></li>
            </ul>
            <h1 className='tra'>Trainings</h1>
            <div className="gym" style={{position:"relative", top:"31%"}}></div>
            <ul style={{position:"absolute",top:"36%", fontSize:"14px",boxSizing:"border-box",lineHeight:"21px"}}>
              <li>Completed a six month training on <b>WEB DEVELOPMENT</b> from April to October 2022 from
                Silverwink Training Center in Muzaffarnagar</li>
            </ul>
        </div>
        <div className="right-lower">
            <h1 style={{position:'relative',top:"20px",left:"50px"}}>Projects</h1>
            <div className='gym' style={{position:"relative",top:"7.2%"}}></div>
            <ul style={{position:"relative",top:"6%",lineHeight:"30px", fontSize:"14px"}}>
              <li><b>Gym website using HTML, CSS, JS</b></li>
              <li><b>Currency conversion website using HTML, CSS, JS, Node.js</b></li>
            </ul>
            <h1 style={{position:'relative',top:"20px",left:"50px"}}>Decleration</h1>
            <div className="gym" style={{position:"relative", top:"7%"}}></div>
            <label style={{position:"absolute",top:"70%",left:"50px",fontSize:"14px"}}>I hereby declare the information provided above is
              true to the best of my knowledge and belief.</label>

        </div>
    </div>
  )
}
