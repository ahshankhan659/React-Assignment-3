import React from 'react'
import Navbar from './Navbar/Navbar'
import './App.css'
import Service from './ServiceSection/Service'
import Blog from './Blogs/Blog'
import Trending from './Trending/Trending'
import { Route, Routes } from 'react-router-dom'
import Main from './Main/Main'
import Blog1 from './Blogs/Blog1'
import Blog2 from './Blogs/Blog2'
import Service1 from './ServiceSection/Service1'
import Service2 from './ServiceSection/Service2'
import Trending1 from './Trending/Trending1'
import Trending2 from './Trending/Trending2'

function App() {
    return (
        <>
            <Navbar />


            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/service' element={<Service />} >
                    <Route path='service1' element={<Service1 />} />
                    <Route path='service2' element={<Service2 />} />
                </Route>
                <Route path='/blog' element={<Blog />} >
                    <Route path='blog1' element={<Blog1 />} />
                    <Route path='blog2' element={<Blog2 />} />
                </Route>


                <Route path='/trending' element={<Trending />} >
                    <Route path='trending1' element={<Trending1 />} />
                    <Route path='trending2' element={<Trending2 />} />
                </Route>

            </Routes>
        </>
    )
}

export default App