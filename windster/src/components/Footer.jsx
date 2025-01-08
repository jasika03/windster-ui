import React from 'react'

function Footer ()  {
  return (
    <div className='pb-4'>
      <footer>
        <div className='flex items-center justify-between bg-white rounded-xl px-4 py-10 shadow-md'>
        <div className='flex space-x-6 text-sm text-slate-500'>
            <a href='#' className='hover:underline'>Terms and conditions</a>
            <a href='#' className='hover:underline'>Privacy Policy</a>
            <a href='#' className='hover:underline'>Licensing</a>
            <a href='#' className='hover:underline'>Cookie Policy</a>
            <a href='#' className='hover:underline'>Contact</a>
        </div>
        <div className=' flex space-x-4 text-slate-500'>
        <i class="fa-brands fa-facebook hover:text-black"></i>
        <i class="fa-brands fa-instagram hover:text-black"></i>
        <i class="fa-brands fa-twitter hover:text-black"></i>
        <i class="fa-brands fa-github hover:text-black"></i>
        <i class="fa-brands fa-dribbble hover:text-black"></i>
        </div>
        </div>
        <p className='text-slate-500 text-center mt-5 mb-2'>© 2019-2021 <a href='#' className='hover:underline'>Themesberg</a>. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Footer
