import React from 'react'
import Card from '../Card/Card'
import { TrendingSec1 } from './TrendingDetail'

function Trending1() {
  return (
    <>
  <div className="bg-card">
    <h1>Trending 1 Section</h1>
    <div className="card-sec">
        {TrendingSec1.map((elements)=>{
             return(
                <Card imgSrc={elements.images} title={elements.head} info={elements.para} btns={elements.buttons}/>
             )
        })}
 
   </div>
   </div>
   </>
  )
}

export default Trending1;