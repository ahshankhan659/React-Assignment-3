import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Card from '../Card/Card'
import { TrendingSec } from './TrendingDetail'

function Trending() {
  return (
    <>
      <div className="bg-card">
        <h1>Trending Section</h1>
        <div className="card-sec">
          {TrendingSec.map((elements) => {
            return (
              <Card imgSrc={elements.images} title={elements.head} info={elements.para} btns={elements.buttons} />
            )
          })}

        </div>
      </div>
      <div className="trending">
      <ul>
        <li><Link className='trend' to='trending1'>Trending 1</Link></li>
        <li><Link className='trend' to='trending2'>Trending 2</Link></li>
      </ul>
        <p>Click Here to See More</p>
      </div>
      <Outlet />
    </>
  )
}

export default Trending;