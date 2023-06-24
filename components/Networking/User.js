import React from "react";
import Image from "next/image";
import { IoWarning } from "react-icons/io5";
import { MdInsertComment } from "react-icons/md";
import {
  BsThreeDotsVertical,
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { FaCircleArrowRight } from "react-icons/fa";

const User = ({ rightArrow }) => {
  const handlerArrow = (name) => {
    if (name === "right") {
      return <BsFillArrowRightCircleFill className="text-[#61C786] w-6 h-5" />;
    } else if (name === "left") {
      return <BsFillArrowLeftCircleFill className="text-[#FA5E51] w-6 h-5" />;
    } else {
      return <IoWarning className="text-[#FBBF24] w-6 h-6" />;
    }
  };

  return (
    <>
      <div className="">
        <div
          className="shadow-shadow_light bg-white px-5 py-[10px] flex justify-between
          items-center rounded-lg"
        >
          <div className="flex gap-[10px]">
            <div className="w-9 h-9 relative">
              <Image src="/Avatar.svg" alt="logo" fill={true} />
            </div>
            <div>
              <h3 className="text-sm text-gray-dark">Monisha Raut</h3>
              <p className="text-gray-light text-xs">
                UI/UX Designer at Crisil
              </p>
            </div>
          </div>

          <h1 className="text-gray-light text-xs">Name Of Company</h1>
          <h1 className="text-gray-light text-xs">17 June, 2023</h1>

          <div className="flex gap-[10px]">
            {handlerArrow(rightArrow)}
            <MdInsertComment className="text-gray-light -rotate-0 w-6 h-6" />
            <BsThreeDotsVertical className="text-[#42464A] w-6 h-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
