import { FC } from "react";
import {AiFillHome} from "react-icons/ai"
import {IoLibrary} from "react-icons/io5"
import {AiFillCompass} from "react-icons/ai"
import {RiUserFollowFill,RiDashboardFill,RiLogoutCircleRLine} from "react-icons/ri"
import {FaDiscord,FaCreativeCommons} from "react-icons/fa"
import {BsDatabaseFillCheck} from "react-icons/bs"

interface SidebarProps {
  shrink?: boolean;
}

const Sidebar: FC<SidebarProps> = ({ shrink }) => {
  return (
    <>
      <div
        className={
          shrink
            ? "w-20 shadow-md shadow-gray-500 z-50 transition-all items-center duration-300 border-r border-gray-200 bg-gray-100 dark:bg-gray-800 text-gray-950 dark:text-gray-50 top-[3.75rem] fixed left-0 h-[calc(100%-3.75rem)] hidden lg:flex flex-col"
            : "w-60 z-50 transition-all items-center duration-300 border-r border-gray-200 bg-gray-100 dark:bg-gray-800 text-gray-950 dark:text-gray-50 top-[3.75rem] fixed left-0 h-[calc(100%-3.75rem)] hidden lg:flex flex-col"
        }
      >
        <div className={shrink?"w-16 flex flex-col justify-center items-center gap-y-[2px] h-12 rounded mt-2 hover:bg-[#F3912E50] cursor-pointer transition-all duration-300":"w-[13rem] flex justify-start items-center gap-x-4 h-12 mt-2 rounded hover:bg-[#F3912E50] cursor-pointer transition-all duration-300"}>
            <AiFillHome size={25} className={shrink?"":"ml-3"} />
            <p className={shrink?"text-[9px] text-center":"text-base"}>Home</p>
        </div>
        <div className={shrink?"w-16 flex flex-col justify-center items-center gap-y-[2px] h-12 rounded mt-2 hover:bg-[#F3912E50] cursor-pointer transition-all duration-300":"w-[13rem] flex justify-start items-center gap-x-4 h-12 mt-2 rounded hover:bg-[#F3912E50] cursor-pointer transition-all duration-300"}>
            <IoLibrary size={25} className={shrink?"":"ml-3"} />
            <p className={shrink?"text-[9px] text-center":"text-base"}>Courses</p>
        </div>
        <div className={shrink?"w-16 flex flex-col justify-center items-center gap-y-[2px] h-12 rounded mt-2 hover:bg-[#F3912E50] cursor-pointer transition-all duration-300":"w-[13rem] flex justify-start items-center gap-x-4 h-12 mt-2 rounded hover:bg-[#F3912E50] cursor-pointer transition-all duration-300"}>
            <AiFillCompass size={25} className={shrink?"":"ml-3"} />
            <p className={shrink?"text-[9px] text-center":"text-base"}>Trending</p>
        </div>
        <div className={shrink?"w-16 flex flex-col justify-center items-center gap-y-[2px] h-12 rounded mt-2 hover:bg-[#F3912E50] cursor-pointer transition-all duration-300":"w-[13rem] flex justify-start items-center gap-x-4 h-12 mt-2 rounded hover:bg-[#F3912E50] cursor-pointer transition-all duration-300"}>
            <RiUserFollowFill size={25} className={shrink?"":"ml-3"} />
            <p className={shrink?"text-[9px] text-center":"text-base"}>Following</p>
        </div>
        <div className={shrink?"w-16 flex flex-col justify-center items-center gap-y-[2px] h-12 rounded mt-2 hover:bg-[#F3912E50] cursor-pointer transition-all duration-300":"w-[13rem] flex justify-start items-center gap-x-4 h-12 mt-2 rounded hover:bg-[#F3912E50] cursor-pointer transition-all duration-300"}>
            <RiDashboardFill size={25} className={shrink?"":"ml-3"} />
            <p className={shrink?"text-[9px] text-center":"text-base"}>Dashboard</p>
        </div>
        <div className={shrink?"w-16 flex flex-col justify-center items-center gap-y-[2px] h-12 rounded mt-2 hover:bg-[#F3912E50] cursor-pointer transition-all duration-300":"w-[13rem] flex justify-start items-center gap-x-4 h-12 mt-2 rounded hover:bg-[#F3912E50] cursor-pointer transition-all duration-300"}>
            <FaDiscord size={25} className={shrink?"":"ml-3"} />
            <p className={shrink?"text-[9px] text-center":"text-base"}>Discord</p>
        </div>
        <div className={shrink?"w-16 flex flex-col justify-center items-center gap-y-[2px] h-12 rounded mt-2 hover:bg-[#F3912E50] cursor-pointer transition-all duration-300":"w-[13rem] flex justify-start items-center gap-x-4 h-12 mt-2 rounded hover:bg-[#F3912E50] cursor-pointer transition-all duration-300"}>
            <BsDatabaseFillCheck size={25} className={shrink?"":"ml-3"} />
            <p className={shrink?"text-[9px] text-center":"text-base"}>Restoration Form</p>
        </div>
        <div className={shrink?"w-16 flex flex-col justify-center items-center gap-y-[2px] h-12 rounded mt-2 hover:bg-[#F3912E50] cursor-pointer transition-all duration-300":"w-[13rem] flex justify-start items-center gap-x-4 h-12 mt-2 rounded hover:bg-[#F3912E50] cursor-pointer transition-all duration-300"}>
            <FaCreativeCommons size={25} className={shrink?"":"ml-3"} />
            <p className={shrink?"text-[9px] text-center":"text-base"}>Creator Access</p>
        </div>
        <div className={shrink?"w-16 flex flex-col justify-center items-center gap-y-[2px] h-12 rounded mt-2 hover:bg-[#F3912E50] cursor-pointer transition-all duration-300":"w-[13rem] flex justify-start items-center gap-x-4 h-12 mt-2 rounded hover:bg-[#F3912E50] cursor-pointer transition-all duration-300"}>
            <RiLogoutCircleRLine size={25} className={shrink?"":"ml-3"} />
            <p className={shrink?"text-[9px] text-center":"text-base"}>Logout</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
