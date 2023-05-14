import React from 'react'
import FooterBottom from './FooterBottom'
import FooterTop from './FooterTop'

function FooterApp() {
  return (
    <>
        <div className='w-100% bg-[#f6f6f6] h-auto flex flex-wrap'>
            <div className='w-11/12 md:w-[1170px] m-auto'>
                <FooterTop/>
                <FooterBottom/>
            </div>
        </div>

    </>
  )
}

export default FooterApp