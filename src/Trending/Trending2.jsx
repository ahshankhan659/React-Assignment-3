import React from 'react'
import Card from '../Card/Card'
import { TrendingSec2 } from './TrendingDetail'

function Trending2() {
  return (
    <>
  <div className="bg-card">
    <h1>Trending 2 Section</h1>
    <div className="card-sec">
        {TrendingSec2.map((elements)=>{
             return(
                <Card imgSrc={elements.images} title={elements.head} info={elements.para} btns={elements.buttons}/>
             )
        })}
 
   </div>
   </div>
   </>
  )
}

export default Trending2;