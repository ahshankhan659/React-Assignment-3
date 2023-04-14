import React from 'react'
import Card from '../Card/Card'
import { serviceSec2 } from './ServiceDetail'

function Service2() {
  return (
    <>
  <div className="bg-card">
    <h1>Service Section 2</h1>
    <div className="card-sec">
        {serviceSec2.map((elements)=>{
             return(
                <Card imgSrc={elements.images} title={elements.head} info={elements.para} btns={elements.buttons}/>
             )
        })}
 
   </div>
   </div>
   </>
  )
}

export default Service2;