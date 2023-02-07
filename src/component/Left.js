import React from 'react'
import './css/Left.css'
import './css/Line.css'
import {Line,Pera,Pera2,Pera3} from './Line';

export const Left = () => {
  return (
    <div className='Left'>
        <div className="upper">
            <h1>Contact Me</h1>
            <Line />
            <Pera />
            <h1>Professional Skill</h1>
            <Line />
            <Pera2 />

        </div>
        <div className="lower">
            <h1 className='tech'>Technical Skill</h1>
            <div className="num"></div>
            <Pera3 />
            <h1 className='lang'>Language</h1>
            <div className='bag'/>
            <ul className='index'>
                <li>English</li>
                <li>Hindi</li>
            </ul>
        </div>
    </div>
  )
}
