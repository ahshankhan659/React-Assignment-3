import React from 'react'
import Card from '../Card/Card'
import { serviceSec1 } from './ServiceDetail'

function Service1() {
  return (
    <>
  <div className="bg-card">
    <h1>Service Section 1</h1>
    <div className="card-sec">
        {serviceSec1.map((elements)=>{
             return(
                <Card imgSrc={elements.images} title={elements.head} info={elements.para} btns={elements.buttons}/>
             )
        })}
 
   </div>
   </div>
   </>
  )
}

export default Service1;