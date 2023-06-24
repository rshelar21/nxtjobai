import React from 'react'
import Image from "next/image";
import { MdOutlineHomeWork } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoDocumentAttach } from "react-icons/io5";
import { AiFillCaretDown } from "react-icons/ai";
import { BsFileEarmarkTextFill } from "react-icons/bs";


const ViewHeader = () => {
  return (
    <>
      <div>
      <div className="px-10 flex justify-between border-b pb-5">
          <div className="flex items-start gap-[10px]">
            <div className="relative w-[72px] h-[72px]">
              <Image src="/company.svg" alt="logo" fill={true} />
            </div>

            <div className="">
              <h1 className="text-gray-dark text-lg font-semibold">
                UI/UX Designer (Mobile Apps)
              </h1>

              <div className="flex items-center gap-[10px]">
                <p className="flex items-center text-[#5A5A5A] text-sm gap-1">
                  <MdOutlineHomeWork className=" w-4 h-4" />
                  <span>PIXSTER STUDIO</span>
                </p>

                <p className="flex items-center text-[#5A5A5A] text-sm gap-1">
                  <HiLocationMarker className=" w-4 h-4" />
                  <span>Ahmedabad, Gujarat, India</span>
                </p>

                <p className="flex items-center text-[#5A5A5A] text-sm gap-1">
                  <RiMoneyDollarCircleFill className=" w-4 h-4" />
                  <span>Ahmedabad, Gujarat, India</span>
                </p>

                <p className="text-purple-dark font-bold text-xs">
                  View Job Details
                </p>
              </div>
              <p className="text-xs text-gray-light">
                Job added from linkedin.com on Tue May 30 2023.
              </p>
            </div>
          </div>

          

          <div>
            <div className="flex items-center gap-[10px]">
              <button className="button_modal bg-red-medium text-white">
                Delete
              </button>

              <button className="button_modal border ">
                Save
                <AiFillCaretDown className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        <div className="px-10 flex items-start gap-[10px] py-5 border-b">
          <div className="tags_modal">
            <IoDocumentAttach />
            <span className="font-normal text-xs">Resume name 75%</span>
          </div>

          <div className="tags_modal bg-white border text-gray-light">
            <BsFileEarmarkTextFill className="" />
            <span className="font-normal text-xs">Cover Letter Name</span>
          </div>

          <div className="tags_modal bg-white border text-gray-light">
            <div className="relative h-6 w-6">
              <Image fill={true} src="/file.svg" alt="file-icon" />
            </div>
            <span className="font-normal text-xs">Mock Interview</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewHeader
