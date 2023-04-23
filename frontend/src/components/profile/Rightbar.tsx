import { FC } from "react";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { IoLibrary } from "react-icons/io5";
import { AiTwotoneLike } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";

interface RightbarProps {
  shrink?: boolean;
}

const Rightbar: FC<RightbarProps> = ({ shrink }) => {
  return (
    <>
      <div
        className={
          shrink
            ? "w-20 shadow-md shadow-gray-500 z-50 transition-all items-center duration-300 border-l border-gray-200 bg-gray-100 dark:bg-gray-800 text-gray-950 dark:text-gray-50 top-[calc(3.75rem+90px)] fixed right-0 h-[calc(100%-3.75rem)] hidden lg:flex flex-col"
            : "w-60 z-50 transition-all items-center duration-300 border-l border-gray-200 bg-gray-100 dark:bg-gray-800 text-gray-950 dark:text-gray-50 top-[calc(3.75rem+90px)] fixed right-0 h-[calc(100%-3.75rem)] hidden lg:flex flex-col"
        }
      >
        <div
          className={
            shrink
              ? "w-16 flex flex-col justify-center items-center gap-y-[2px] h-12 rounded mt-2 hover:bg-[#F3912E50] cursor-pointer transition-all duration-300"
              : "w-[13rem] flex justify-start items-center gap-x-4 h-12 mt-2 rounded hover:bg-[#F3912E50] cursor-pointer transition-all duration-300"
          }
        >
          <RiDashboardFill size={25} className={shrink?"":"ml-3"} />
          <p className={shrink ? "text-[9px] text-center" : "text-base"}>
            Dashboard
          </p>
        </div>
        <div
          className={
            shrink
              ? "w-16 flex flex-col justify-center items-center gap-y-[2px] h-12 rounded mt-2 hover:bg-[#F3912E50] cursor-pointer transition-all duration-300"
              : "w-[13rem] flex justify-start items-center gap-x-4 h-12 mt-2 rounded hover:bg-[#F3912E50] cursor-pointer transition-all duration-300"
          }
        >
          <FaUserAlt size={25} className={shrink?"":"ml-3"} />
          <p className={shrink ? "text-[9px] text-center" : "text-base"}>
            Profile
          </p>
        </div>
        <div
          className={
            shrink
              ? "w-16 flex flex-col justify-center items-center gap-y-[2px] h-12 rounded mt-2 hover:bg-[#F3912E50] cursor-pointer transition-all duration-300"
              : "w-[13rem] flex justify-start items-center gap-x-4 h-12 mt-2 rounded hover:bg-[#F3912E50] cursor-pointer transition-all duration-300"
          }
        >
          <IoLibrary size={25} className={shrink?"":"ml-3"} />
          <p className={shrink ? "text-[9px] text-center" : "text-base"}>
            Courses
          </p>
        </div>
        <div
          className={
            shrink
              ? "w-16 flex flex-col justify-center items-center gap-y-[2px] h-12 rounded mt-2 hover:bg-[#F3912E50] cursor-pointer transition-all duration-300"
              : "w-[13rem] flex justify-start items-center gap-x-4 h-12 mt-2 rounded hover:bg-[#F3912E50] cursor-pointer transition-all duration-300"
          }
        >
          <BsFillBookmarkStarFill size={25} className={shrink?"":"ml-3"} />
          <p className={shrink ? "text-[9px] text-center" : "text-base"}>
            Wishlist
          </p>
        </div>
        <div
          className={
            shrink
              ? "w-16 flex flex-col justify-center items-center gap-y-[2px] h-12 rounded mt-2 hover:bg-[#F3912E50] cursor-pointer transition-all duration-300"
              : "w-[13rem] flex justify-start items-center gap-x-4 h-12 mt-2 rounded hover:bg-[#F3912E50] cursor-pointer transition-all duration-300"
          }
        >
          <AiTwotoneLike size={25} className={shrink?"":"ml-3"} />
          <p className={shrink ? "text-[9px] text-center" : "text-base"}>
            Liked Videos
          </p>
        </div>
      </div>
    </>
  );
};

export default Rightbar;
