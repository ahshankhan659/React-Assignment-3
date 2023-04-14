import React from 'react'
import Card from '../Card/Card'
import { Link, Outlet } from 'react-router-dom'
import { serviceSec } from './ServiceDetail'

function Service() {
  return (
    <>
  <div className="bg-card">
    <h1>Service Section</h1>
    <div className="card-sec">
        {serviceSec.map((elements)=>{
             return(
                <Card imgSrc={elements.images} title={elements.head} info={elements.para} btns={elements.buttons}/>
             )
        })}
 
   </div>
   </div>
   <div className="trending">
      <ul>
        <li><Link className='trend' to='service1'>Service 1</Link></li>
        <li><Link className='trend' to='service2'>Service 2</Link></li>
      </ul>
        <p>Click Here to See More</p>
      </div>
      <Outlet />
   </>
  )
}

export default Service;