import React from 'react'
import {Header} from './component/Header'
import {Left} from './component/Left'
import { Right } from './component/Right'

export const Main = () => {
  return (
    <div className='fullContent'>
        <Header />
        <Left />
        <Right />
    </div>
  )
}


