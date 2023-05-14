import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { BiWifi2, BiSearch } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiMenu } from "react-icons/bi";

const Header = () => {
  return (
    <div className="flex flex-wrap w-full justify-center  py-10">
      <div className="  flex w-2/12 justify-center hidden md:block">
        <ul className="flex ">
          <li>
            {" "}
            <a href="#">
              <FaFacebookF />{" "}
            </a>
          </li>
          <li className="pl-5">
            {" "}
            <a href="#">
              <BsTwitter />{" "}
            </a>
          </li>
          <li className="pl-5">
            {" "}
            <a href="#">
              <AiOutlineInstagram />{" "}
            </a>
          </li>
          <li className="pl-5">
            {" "}
            <a href="#">
              <GrLinkedinOption />{" "}
            </a>
          </li>
          <li className="pl-5">
            {" "}
            <a href="#">
              <BiWifi2 />{" "}
            </a>
          </li>
        </ul>
      </div>
      <div className="flex md:justify-center w-6/12 h-4 ">
        <img
          className="w-28 h-8"
          src="http://ginza.mallthemes.com/wp-content/uploads/2019/01/logo.png"
          alt=""
        />
      </div>
      <div className="flex flex-wrap justify-end w-4/12 md:w-2/12">
        <div className="pr-5 md:hidden block">
          <BiMenu className="w-5 h-6"/>
        </div>
        <div className="pr-5">
          <BiSearch className="w-5 h-6" />
        </div>
        <HiOutlineShoppingBag className="w-5 h-5" />
      </div>
    </div>
  );
};

export default Header;
