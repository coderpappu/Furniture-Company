import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoIosGitCompare } from "react-icons/io";

const ProductCard = ({proImg,proImg2, proDetails,proPrice}) => {
  return (
    <>
  
        <div className="md:w-[270px] mx-[5px] md:first:ml-0 md:ml-[20px]">
          <div className="md:w-[270px] h-[270px] md:h-[360px] relative align-middle group block ">
            <img
              src={proImg}
              alt=""
              className="absolute ease-in duration-300 opacity-100 group-hover:opacity-0 "
            />
            <img src={proImg2} alt="" className="absolute ease-in duration-300 opacity-0 group-hover:opacity-100 " />
            <div className=" w-11/12 md:w-9/12 h-11 transition duration-150 ease-out invisible group-hover:visible  border-[1px]  mx-2 px-3  py-3 bottom-0 absolute bg-white flex flex-wrap group-hover:bottom-4 justify-between">
                <div className="flex">
                <h2 className="font-bold text-sm">ADD TO CART</h2>
                </div>
                <div className="flex">
                <AiOutlineShoppingCart className="mr-2"/>
                <IoIosGitCompare className="mr-2"/>
                <BiSearch />
                </div>



            </div>
          </div>
          <div className="flex flex-wrap mt-8 md:mt-0 pb-2 md:py-2">
            <div className="w-2/4">
              <p className="text-sm leading-4 text-[#929292]">
                Accessoreis, Lighting, Outdoor
              </p>
            </div>
            <div className="flex w-2/4 justify-end flex-wrap">
              <AiFillStar className="text-yellow-400" />
              <AiFillStar className="text-yellow-400" />
              <AiFillStar className="text-yellow-400" />
              <AiFillStar className="text-yellow-400" />
              <AiOutlineStar className="text-slate-400" />
            </div>
          </div>
          <div className="">
            <h3 className=" text-[12px] md:text-sm font-medium font-['Poppins'] ">
              {proDetails}
            </h3>
          </div>
          <div className="py-1">
            <h2 className="text-[14px] md:text-[17px] font-bold text-[#ee3333]">{proPrice}</h2>
          </div>
        </div>
      
      
    </>
  )
};

export default ProductCard;
