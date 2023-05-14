import React from 'react'

function LateBlogs() {
  return (
    <>
    <div className='md:w-[370px] float-left md:mr-7 md:last:mr-[0px] mb-6 '>
                <div className='w-full md:h-[221px]'>
                    <img src="http://ginza.mallthemes.com/wp-content/uploads/2018/04/blog02-1170x700.jpg" alt=""/>
                </div>
                <div>
                    <h3 className='font-["Poppins"] font-medium text-lg text-[#323232] mt-4 mb-3'>Post with Gallery</h3>
                    <p className='font-["Poppins"] text-sm font-light text-[#929292]'>By <span className='text-red-500'>Admin</span> April 24, 2021</p>
                </div>
                <div>
                    <button className='border-2 border-slate-600 font-["Poppins"] w-[122px] h-[44px] my-5 text-sm font-semibold hover:bg-red-600 hover:text-white hover:border-none'>Read More</button>
                </div> 
            </div>
    
    </>
  )
}

export default LateBlogs