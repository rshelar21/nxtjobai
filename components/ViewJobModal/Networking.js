import React from "react";
import { FiSearch } from "react-icons/fi";
import { AiFillCaretDown } from "react-icons/ai";
import Image from "next/image";
import { IoWarning } from "react-icons/io5";
import { MdInsertComment } from "react-icons/md";
import {
  BsThreeDotsVertical,
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { FaCircleArrowRight } from "react-icons/fa";

import User from "../Networking/User";

const Networking = () => {
  return (
    <>
      <div className="w-[660px] p-5 bg-purple-light rounded-lg ">
        <div className="flex items-center justify-between">
          <h1 className="text-gray-dark font-bold text-lg">Your Network</h1>

          <div className="flex items-center gap-[10px]">
            <div className="flex items-center w-[219px] px-[18px] py-[10px] border rounded-lg space-x-2 bg-white">
              <FiSearch className="w-5 h-5" />
              <input
                type="text"
                placeholder="Search"
                className="placeholder:text-[#AFAFAF] w-full focus:outline-none "
              />
            </div>
            <button className="bg-blue-dark text-white px-8 py-[10px] rounded-lg font-bold text-sm">
              Create New
            </button>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex items-center gap-[10px] text-gray-dark">
            <AiFillCaretDown className="w-4 h-4" />
            <h1 className="font-bold text-sm">Follow-Up 1</h1>
          </div>
          <div className="pt-[10px] flex flex-col gap-[10px]">
            <User rightArrow={""} />
            <User rightArrow={"right"} />
          </div>
        </div>

        <div className="pt-5">
          <div className="flex items-center gap-[10px] text-gray-dark">
            <AiFillCaretDown className="w-4 h-4" />
            <h1 className="font-bold text-sm">Follow-Up 2</h1>
          </div>
          <div className="pt-[10px] flex flex-col gap-[10px]">
            <User rightArrow={"left"} />
            <User rightArrow={""} />
          </div>
        </div>

        <div className="pt-5">
          <div className="flex items-center gap-[10px] text-gray-dark">
            <AiFillCaretDown className="w-4 h-4" />
            <h1 className="font-bold text-sm">Follow-Up 3</h1>
          </div>
          <div className="pt-[10px] flex flex-col gap-[10px]">
            <User rightArrow={""} />
            <User rightArrow={""} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Networking;
