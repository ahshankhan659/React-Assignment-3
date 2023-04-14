import React from 'react'
import { Link } from 'react-router-dom'

function Navlist() {
  return (
    <>
   
      <div className="navbar">
        <h1>DemoPage</h1>
        <ul>
         
              <li><Link to="/">Home</Link></li>
              <li><Link to='/service'>Services</Link>
                {/* <ul>
                  <li><Link to='service1'>Services1</Link></li>
                  <li><Link to='service2'>Services2</Link></li>
                </ul> */}
              </li>
              <li><Link to="/blog">Blogs</Link>
                {/* <ul>
                  <li><Link to='blog1'>Blogs1</Link></li>
                  <li><Link to='blog2'>Blog2</Link></li>
                </ul> */}
              </li>
              <li><Link to='/trending'>Trending</Link>
                {/* <ul>
                <li><Link  to='trending1'>Trending 1</Link></li>
                  <li><Link to='trending2'>Trending 2</Link></li>
                </ul> */}
              </li>
             
            </ul>
       
            <a href="" type='button' className='btn'>Sign in</a>


      </div>

    </>
  )
}

export default Navlist