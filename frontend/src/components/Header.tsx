import { FC, useState } from "react";
import { RiCompass3Line } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import {BiSearch,BiSun,BiMoon} from "react-icons/bi";
import {RxCross2} from "react-icons/rx";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
    const [mobileSearch,setMobileSearch] = useState<boolean>(false);
  return (
    <>
      <div className="w-full h-[3.75rem] bg-gray-100 dark:bg-gray-800 dark:text-gray-50 fixed top-0 border-b border-gray-200 flex justify-between items-center">
      <div className={mobileSearch?"justify-center items-center lg:hidden flex absolute w-[100%] dark:bg-gray-800 bg-gray-100 z-10":"hidden"}>
            <BiSearch className="bg-gray-50 dark:bg-gray-950 h-9 w-9 p-2 rounded-l-full"/>
            <input
              type="text"
              className="focus:outline-none py-2 w-[90%] bg-gray-50 dark:bg-gray-950 text-sm"
              placeholder="Search and Learn"
            />
            <RxCross2 onClick={()=>{setMobileSearch(!mobileSearch)}} className="bg-gray-50 dark:bg-gray-950 h-9 w-9 p-2 rounded-r-full"/>
          </div>
        <div className="flex items-center justify-start gap-x-2">
          <div className="hidden lg:flex flex-col h-14 w-12 ml-6 cursor-pointer">
            <div className="w-6 h-[3px] mt-5 bg-gray-900 dark:bg-gray-100 rounded-sm"></div>
            <div className="w-6 h-[3px] mt-1 bg-gray-900 dark:bg-gray-100 rounded-sm"></div>
            <div className="w-4 h-[3px] mt-1 bg-gray-900 dark:bg-gray-100 rounded-sm"></div>
          </div>
          <button>
            <img
              className="w-9 h-9 ml-2 lg:ml-0 object-center object-contain"
              src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
              alt="logo"
            />
          </button>
          <p className="text-[1.35rem] hidden md:block font-semibold">CipherSchools</p>
          <div className="hidden lg:flex h-14 justify-center items-center gap-x-1 ml-2 text-lg cursor-pointer">
            <RiCompass3Line />
            <p>Browse</p>
            <BiChevronDown />
          </div>
        </div>
        <div className="flex items-center justify-start lg:gap-x-4 gap-x-2">
        <div className="lg:hidden flex h-14 justify-center items-center gap-x-1 text-lg cursor-pointer">
            <RiCompass3Line />
            <p>Browse</p>
            <BiChevronDown />
          </div>
          <div className="justify-center items-center hidden lg:flex lg:static">
            <BiSearch className="bg-gray-50 dark:bg-gray-950 h-9 w-9 p-2 rounded-l-full"/>
            <input
              type="text"
              className="focus:outline-none p-2 w-80 bg-gray-50 dark:bg-gray-950 pr-3 pl-0 rounded-r-full text-sm"
              placeholder="Search and Learn"
            />
          </div>
          <div className="relative">
            <IoIosNotificationsOutline size={25} className="cursor-pointer " />
          </div>{" "}
          <div className="relative">
            <img
              className="w-6 h-6 cursor-pointer"
              src="https://www.cipherschools.com/static/media/WatchPoints.1caa87d88b88c0d4b4ee24fdd5b1db3f.svg"
              alt=""
            />
          </div>
          <div className="relative">
            <button onClick={()=>{document.documentElement.classList.toggle("dark")}} className="lg:mr-8 flex justify-center items-center"><BiSun className="hidden dark:block w-6 h-6"/> <BiMoon className="dark:hidden block w-6 h-6"/></button>
          </div>
          <button onClick={()=>{setMobileSearch(!mobileSearch)}} className="relative cursor-pointer lg:hidden flex items-center">
            <BiSearch className="h-6 w-6 rounded-full mr-2"/>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;