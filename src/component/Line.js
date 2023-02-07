import React from 'react'
import './css/Line.css'

function Line() {
  return (
    <div className='line' ></div>
  )
}

function Pera(){
    return(
        <>
            <p className='pg'>uditsharma348@gmail.com</p>
            <p >91+ 9675478465</p>
            <p>Muzaffarnagar,UP</p>
        </>
    )
        
}
function Pera2(){
    return(
        <>
            <ul>
                <li>Leadership</li>
                <li>Teamwork</li>
                <li>Time management</li>
                <li>Problem Solving</li>
                <li>Creative Thinker</li>
                <li>Verbal and Written Communication    </li>
            </ul>
        </>
    )
        
}

function Pera3(){
    return(
        <>
            <ul className='pera3-li'>
                <li>HTML 5</li>
                <li>CSS 3</li>
                <li>JAVASCRIPT</li>
                <li>React.js</li>
                <li>BOOTSTRAP</li>
                <li>MONGODB</li>
                <li>NODE.JS</li>
                <li>jQUERY</li>
            </ul>
        </>
    )
        
}


export {Line,Pera,Pera2,Pera3};