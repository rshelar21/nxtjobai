"use client";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiOutlineX } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { closeModal } from "../../features/modalSlice";
import {motion} from "framer-motion"

const AddJobModal = () => {
  const dispatch = useDispatch();

  const handlerCloseModal = () => {
    dispatch(
      closeModal({
        type: null,
      })
    );
  };

  return (
    <>
      <motion.div
        className="w-[500px] rounded-lg bg-white relative shadow-modal
      p-10 "
      initial={{scale:0}}
      animate={{scale:1}}
      transition={{duration: 0.5}}
      exit={{scale:0}}
      >
        <div className="absolute top-2 right-2 cursor-pointer">
          <HiOutlineX className="w-6 h-6" onClick={handlerCloseModal} />
        </div>
        <div className="text-center text-gray-dark">
          <h1 className="font-semibold text-2xl">Add Job</h1>
          <p className="text-[#5A5A5A] text-base">
            Create job card to track that job.
          </p>
        </div>

        <div className="py-10">
          <input
            type="text"
            placeholder="Company Name"
            className="inputField"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="inputField"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="inputField"
          />
          <select name="" id="" className="inputField">
            <option value="" selected>
              Saved
            </option>
          </select>
        </div>

        <div className="flex items-center gap-[10px] pb-10">
          <button className="button border" onClick={handlerCloseModal}>Cancel</button>

          <button className="button bg-pink-dark text-white">Submit</button>
        </div>

        <div className="bg-purple-light w-full p-2 rounded-lg flex items-start justify-between gap-[10px]">
          <div>
            <AiOutlineInfoCircle className="text-text_purple w-4 h-4" />
          </div>
          <p className="text-[10px] leading-4 text-[#5A5A5A]">
            Did yoy know? You can save job directly from our Extension and have
            all the data imported in a simple click! It takes just a few
            seconds.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default AddJobModal;
