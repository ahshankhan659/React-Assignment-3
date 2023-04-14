import React from 'react'
// import { Outlet } from 'react-router-dom'
import Blog from '../Blogs/Blog'
import Service from '../ServiceSection/Service'
import Trending from '../Trending/Trending'

function Main() {
  return (
    <>
    <Service/>
    <Blog/>
    <Trending/>
    {/* <Outlet/> */}

    </>
  )
}

export default Main