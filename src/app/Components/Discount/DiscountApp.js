import React from 'react'

function DiscountApp() {
  return (
    <>
        <div className='w-100% h-auto'>
            <div className='w-11/12 md:w-[1170px] mb-14 border-t-[1px] text-center m-auto'>
                <div className='mt-16'>
                <p className='text-sm my-4 text-[#929292]'>Special Ofers For Subscribers</p>
                <h2 className='text-2xl font-medium mb-5'>Ten Percent Member Discount</h2>
                <p className='text-xs text-[#929292] my-4'>Subscribe to our newsletters now and stay up to date with new collections, the latest lookbooks and exclusive offers.</p>
                <div className='my-5 md:w-2/4 md:h-14 m-auto border-[1px]'>
                    <input type="text" className=' ml-4 w-2/4 h-12 focus:outline-none float-left'/>
                    <button className="border-l-[1px] pl-4 h-14">
                        Subscribe
                    </button>
                </div>
                </div>


            </div>
        </div>
    </>
  )
}

export default DiscountApp