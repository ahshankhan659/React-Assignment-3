import React from 'react'
import Card from '../Card/Card'
import { BlogSec2 } from './BlogDetail'

function Blog2() {
  return (
    <>
  <div className="bg-card">
    <h1>Blog-2 Section</h1>
    <div className="card-sec">
        {BlogSec2.map((elements)=>{
             return(
                <Card imgSrc={elements.images} title={elements.head} info={elements.para} btns={elements.buttons}/>
             )
        })}
 
   </div>
  
   </div>
   </>
  )
}

export default Blog2;