const ProductMenu = () => {
  return(
  <>
    <div className="w-[350px] mx-[50px] md:w-[270px] md:mr-[30px] float-none md:float-left ">
    <div className="w-full h-[103px] font-medium text-center p-4 border-l-[3px]  border-slate-200">
      <h2 className="text-xl "> OUR BEST </h2>
      <h2 className="text-[40px] font-semibold text-[#929292] m-0">
        PRODUCTS
      </h2>
    </div>
    <div className="w-full h-[67px] px-5 py-6 text-red-600 bg-[#EE3333] text-center border-b border-[#dadada]  hover:bg-[#F0F0F0] hover:text-[#414141] ">
      <button className="text-base font-medium text-white">Furniture</button>
    </div>
    <div className="w-full h-[67px] px-5 py-6 text-[#414141] bg-[#F0F0F0] text-center border-b border-[#dadada] hover:bg-[#EE3333] hover:text-white ">
      <button className="text-base font-medium ">Decorative</button>
    </div>
    <div className="w-full h-[67px] px-5 py-6 text-[#414141] bg-[#F0F0F0] text-center border-b border-[#dadada]  hover:bg-[#EE3333] hover:text-white ">
      <button className="text-base font-medium ">Lighting</button>
    </div>
    <div className="w-full h-[67px] px-5 py-6 text-[#414141] bg-[#F0F0F0] text-center border-b border-[#dadada]  hover:bg-[#EE3333] hover:text-white ">
      <button className="text-base font-medium ">Storage</button>
    </div>
    <div className="w-full h-[67px] px-5 py-6 text-[#414141] bg-[#F0F0F0] text-center border-b border-[#dadada]  hover:bg-[#EE3333] hover:text-white ">
      <button className="text-base font-medium ">Outdoor</button>
    </div>
    <div className="w-full h-[67px] px-5 py-6 text-[#414141] bg-[#F0F0F0] text-center border-b border-[#dadada]  hover:bg-[#EE3333] hover:text-white ">
      <button className="text-base font-medium ">Decore Accessoreis</button>
    </div>
  </div>
  </>)
};


export default ProductMenu;
