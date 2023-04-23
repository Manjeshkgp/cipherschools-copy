import React from 'react'
import {BsPencilFill} from "react-icons/bs"

const Hero = () => {
  return (<>
  <div
        style={{
          backgroundImage:
            "url(https://www.cipherschools.com/static/media/ProfileCover.e525f2d51356332792cb.png)",
        }}
        className="flex w-full lg:w-[calc(100vw-5rem)] h-[90px] border-b text-gray-800 dark:text-gray-50 border-gray-200 fixed top-[3.75rem] bg-gray-50 dark:bg-gray-800"
      >
        <div className="flex justify-between items-center absolute inset-0 bg-gradient-to-r from-white via-transparent to-white dark:from-gray-800 dark:via-transparent dark:to-gray-800">
        <div className="flex gap-2">
          <div className="flex flex-col justify-center items-center relative h-[90px] w-[90px]">
            <img className="w-16 h-16 rounded-full" src="https://picsum.photos/seed/picsum/200/300" alt="" />
            <button className="absolute top-16 bg-gray-950 p-1 rounded-full fill-white text-white"><BsPencilFill size={12}/></button>
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-lg mt-2">Hello,</p>
            <p className="font-bold text-base">lorem ipsum odonor</p>
            <p>lorem ipsum odonor</p>
          </div>
        </div>
        <div className="hidden md:grid place-items-center">
          <p className="md:mr-8">0 Followers</p>
        </div>
        </div>
      </div>
  </>)
}

export default Hero