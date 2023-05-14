const Main_Menu = () =>{
    

    return(
        <>
            <div className="w-full flex justify-center">
                <div className=" flex justify-center w-12/12 py-5 hidden md:block">
                <ul className=" flex ">
                    <li className="pr-8 font-['Poppins'] text-[13px] font-semibold uppercase hover:text-red-600"><a href="#" className="  ">Home </a></li>
                    <li className="pr-8 font-['Poppins'] text-[13px] font-semibold uppercase hover:text-red-600 "><a href="#">Shop </a></li>
                    <li className="pr-8 font-['Poppins'] text-[13px] font-semibold uppercase hover:text-red-600 "><a href="#">Blog </a></li>
                    <li className="pr-8 font-['Poppins'] text-[13px] font-semibold uppercase hover:text-red-600 "><a href="#">Pages </a></li>
                    <li className="pr-8 font-['Poppins'] text-[13px] font-semibold uppercase hover:text-red-600 "><a href="#">About Us  </a></li>
                    <li className="pr-8 font-['Poppins'] text-[13px] font-semibold uppercase hover:text-red-600 "><a href="#">Contact</a></li>
                </ul>
                </div>
            </div>
        </>
    )
}


export default Main_Menu