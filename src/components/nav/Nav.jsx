import React from 'react'
import './Nav.scss'

function Nav() {
  return (
    <section className='flex justify-center py-8 '>
      <div>
        <div className='flex flex-col items-center'>
            <div className='w-20 h-20 rounded-full overflow-hidden relative border-light'>
                <img className='w-full object-cover absolute -top-6' src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=80" alt="" />
            </div>
            <div>
                <h3 className='text-center'><span className='relative italic block w-full text-5xl'>Robert Elisc <span className='absolute top-2/4 left-2/4 font-bold z-10 not-italic text-lg mr-1 w-full'>Robert Elisc</span></span></h3>
            </div>
        </div>
        <div className='text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <nav>
            <ul className='flex flex-col gap-2'>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Service</a></li>
              <li><a href="">Protfolio</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className='absolute bottom-0'>
          <div>
            <ul>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
            </ul>
          </div>
          <div>
            <p>Copright 2023 Shibin <br/> All rights reseved.</p>
          </div>
        </div>
      </div>
    </section> 
  )
}

export default Nav