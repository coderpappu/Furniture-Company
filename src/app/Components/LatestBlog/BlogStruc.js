import React from 'react'
import LateBlogs from './LateBlogs'

function BlogStruc() {
  return (
    <div className='w-100% h-auto overflow-hidden md:mb-10'>
        <div className='w-11/12 md:w-[1170px] m-auto border-t-[1px] font-["Poppins"]'>
            <h2 className='font-medium text-2xl my-5'>Latest Blogs</h2>
            <LateBlogs/>
            <LateBlogs/>
            <LateBlogs/>
        </div>
    </div>
  )
}

export default BlogStruc