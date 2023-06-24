'use client'
import React from "react";
import { FiSearch } from "react-icons/fi";
import {setModal} from "../../features/modalSlice"
import {useDispatch} from "react-redux"

const SearchBar = () => {
  const dispatch = useDispatch()
  const handlerOpenModal = () => {
    dispatch(setModal({type : "addJob"}))
  }

  return (
    <>
      <div className="pr-8">
        <div className="w-full px-5 h-20 bg-white py-4 rounded-lg ">
          <div className="flex items-center justify-between">
            <h1 className="text-gray-dark font-semibold text-xl">
              My 2023 Job Search
            </h1>

            <div className="flex items-center gap-[10px]">
              <div className="flex items-center w-[329px] px-[18px] py-[14px] border rounded-lg space-x-2">
                <FiSearch className="w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search"
                  className="placeholder:text-[#AFAFAF] w-full focus:outline-none "
                />
              </div>
              <button className="bg-pink-dark text-white px-[18px] py-3 rounded-lg 
              text-base font-semibold" 
              onClick={handlerOpenModal}>
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
