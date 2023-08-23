import React from 'react'
import './Nav.scss'

function Nav() {
  return (
    <section className='flex justify-center py-8'>
        <div>
            <div className='w-28 h-28 rounded-full overflow-hidden'>
                <img className='w-full object-cover' src="https://images.unsplash.com/photo-1639747279286-c07eecb47a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="" />
            </div>
            <div>
                <h3 className='text-center'><span className='relative italic block w-full text-5xl'>Robert Elisc <span className='absolute top-2/4 left-2/4 font-bold z-10 not-italic text-lg mr-1 w-full'>Robert Elisc</span></span></h3>
            </div>
        </div>
    </section>
  )
}

export default Nav