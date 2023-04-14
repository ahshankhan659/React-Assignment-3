import React from 'react'
import Card from '../Card/Card'
import { Link, Outlet } from 'react-router-dom'
import { BlogSec } from './BlogDetail'

function Blog() {
  return (
    <>
  <div className="bg-card">
    <h1>Blog Section</h1>
    <div className="card-sec">
        {BlogSec.map((elements)=>{
             return(
                <Card imgSrc={elements.images} title={elements.head} info={elements.para} btns={elements.buttons}/>
             )
        })}
 
   </div>
   </div>
   <div className="trending">
      <ul>
        <li><Link className='trend' to='blog1'>Blog 1</Link></li>
        <li><Link className='trend' to='blog2'>Blog 2</Link></li>
      </ul>
        <p>Click Here to See More</p>
      </div>
      <Outlet />
   </>
  )
}

export default Blog;