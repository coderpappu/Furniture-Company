import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { BiWifi2, BiSearch } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";


function FooterTop() {
  return (
    <>
        <div className='pt-16 flex flex-wrap'>
            <div className='md:w-6/12 w-2/4 md:mr-0 mr-4 '>
                <div>
                    <img src="http://ginza.mallthemes.com/wp-content/uploads/2019/01/logo.png" alt="logo" className='w-2/12'/>
                </div>
                <div className='my-8'>
                    <p className='text-sm text-[#929292]'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p>

                </div>
                <div>
                    <h2 className='text-base my-5'>Follow Us On Social:</h2>
                    <ul className="flex ">
          <li>
            <a href="#">
              <FaFacebookF className='text-[#929292] text-sm' />
            </a>
          </li>
          <li className="pl-5">
          
            <a href="#">
              <BsTwitter className='text-[#929292] text-sm'/>
            </a>
          </li>
          <li className="pl-5">
           
            <a href="#">
              <AiOutlineInstagram className='text-[#929292] text-sm'/>
            </a>
          </li>
          <li className="pl-5">
           
            <a href="#">
              <GrLinkedinOption className='text-[#929292] text-sm'/>
            </a>
          </li>
          <li className="pl-5">
          
            <a href="#">
              <BiWifi2 className='text-[#929292] text-sm'/>
            </a>
          </li>
        </ul>
                </div>
            </div>
            <div className='md:w-2/12 2/4' >
                <h2 className='font-semibold'>Opening Time</h2>

                <p className='my-4 text-sm text-[#929292]'>Mon – Fri: 8AM – 10PM</p>
                <p className='my-4 text-sm text-[#929292]'>Sat: 9AM-8PM</p>
                <p className='my-4 text-sm text-[#929292]'>Sun: Closed</p>
                <p className='text-xs font-medium my-5 mt-14'>We Work All The Holidays</p>
            </div>
            <div className='md:w-2/12 w-2/4 md:mt-0 mt-8' >
                <h2 className='font-semibold'>My Account</h2>

                <p className='my-4 text-sm text-[#929292]'>My account</p>
                <p className='my-4 text-sm text-[#929292]'>Wishlist</p>
                <p className='my-4 text-sm text-[#929292]'>Order Tracking</p>
                <p className='my-4 text-sm text-[#929292]'>Privacy Policy</p>
                <p className='my-4 text-sm text-[#929292]'>Shipping Information</p>
             
            </div>
            <div className='md:w-2/12 w-2/4 md:mt-0 mt-8' >
                <h2 className='font-semibold'>About Us</h2>


                <p className='my-4 text-sm text-[#929292]'>About Us</p>
                <p className='my-4 text-sm text-[#929292]'>Shopping Guide</p>
                <p className='my-4 text-sm text-[#929292]'>Delivery Information</p>
                <p className='my-4 text-sm text-[#929292]'>Privacy Policy</p>
                <p className='my-4 text-sm text-[#929292]'>Our Store</p>
             
            </div>
        </div>
    </>
  )
}

export default FooterTop