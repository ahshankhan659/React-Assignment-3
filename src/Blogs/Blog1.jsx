import React from 'react'
import Card from '../Card/Card'
import { BlogSec1 } from './BlogDetail'

function Blog1() {
  return (
    <>
  <div className="bg-card">
    <h1>Blog-1 Section</h1>
    <div className="card-sec">
        {BlogSec1.map((elements)=>{
             return(
                <Card imgSrc={elements.images} title={elements.head} info={elements.para} btns={elements.buttons}/>
             )
        })}
 
   </div>
  
   </div>
   </>
  )
}

export default Blog1;