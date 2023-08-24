import React from 'react'
import  Nav  from './components/nav/Nav'

function Home() {
  return (
    <div className='flex flex-row'>
      <div className="bg-sky-200 h-screen w-1/5 fixed  ">
        <Nav/>
      </div>
    </div>
  )
}

export default Home