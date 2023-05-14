import React from 'react'

const QuoteCard = ( {cardImg,perName }) => {
  return (
    <>
         <div className="md:w-[910px] h-[344px]  text-center m-auto mt-14 ">
              <div className=" w-100% flex flex-wrap justify-center mb-8">
                <img
                  src={cardImg}
                  className="w-[70px] h-[70px] rounded-[50%]"
                  alt="#"
                />
              </div>
              <div className="px-6">
                <p className='text-sm text-[#707070] font-medium font-["Poppins" leading-[26px]'>
                  Support and response has been amazing, helping me with several
                  issues I came across and got them solved almost the same day.
                  A pleasure to work with them!
                </p>
              </div>
              <div className="flex justify-center my-6">
                <img
                  src="http://ginza.mallthemes.com/wp-content/themes/ginza/images/quote-icon.png"
                  alt
                />
              </div>
              <div>
                <h3 className='font-bold text-sm font-["Poppins"]'>

                  {perName}
                </h3>
                <p className='text-sm font-["Poppins"] text-[#c5c4c4] my-4'>
                  CEO of SunPark
                </p>
              </div>
            </div>
    
    </>
  )
}

export default QuoteCard