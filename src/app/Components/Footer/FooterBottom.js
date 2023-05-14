
import React from 'react'

function FooterBottom() {
  return (
    <>
        <div className='flex flex-wrap justify-between border-t-[1px] mt-10 ' >
            <div className='md:py-8 py-4'>
                <p className='text-xs text-[#929292]'>Copyright © 2019 <span className='text-red-600'>Roadthemes</span>. All Right Reserved.</p>
            </div>
            <div className='md:py-8 py-4'>
                <ul className='flex '>
                    <li className='text-xs text-[#838181] md:pl-12'> <a> Policy</a></li>
                    <li className='text-xs  text-[#838181] pl-12'> <a> Question</a></li>
                    <li className='text-xs  text-[#838181] pl-12'> <a> Affiliate</a></li>
                    <li className='text-xs  text-[#838181] pl-12'> <a> Help</a></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default FooterBottom