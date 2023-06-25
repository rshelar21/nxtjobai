'use client'
import React, {useState} from "react";
import { sideLinks } from "../../utils/constants";



const SideBar = () => {
  const [active, setActive] = useState('/boards');
  return (
    <>
      <div className="flex flex-col bg-white gap-[10px] py-5 px-[10px] h-fit rounded-xl">
        {sideLinks?.map((item, index) => (
          <div 
          className={`flex gap-[10px] items-center w-48 h-[52px] text-gray-dark 
          p-[10px] rounded-lg  cursor-pointer transition-all duration-300 ease-in-out
          ${active === item.link ? 'bg-purple-dark' : ''} 
          ${active === item.link ? 'text-white' : ''} 
          `}
          key={index}
          onClick={() => setActive(item.link)}
          >
            <div className="relative w-7 h-7">{item?.icon}</div>
            <span className="text-xs">{item.title}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SideBar;
