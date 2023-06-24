"use client";
import React from "react";
import Image from "next/image";
import { MdOutlineHomeWork } from "react-icons/md";
import { TbDotsVertical } from "react-icons/tb";
import { IoDocumentAttach } from "react-icons/io5";
import { BsFileEarmarkTextFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setModal } from "../../../features/modalSlice";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const JobCard = ({ index, item }) => {
  const dispatch = useDispatch();
  const handlerOpenModal = () => {
    dispatch(setModal({ type: "viewJob" }));
  };

  return (
    <>
      <Draggable draggableId={item?.id?.toString()} index={index}>
        {(provided) => (
          <div
            className="bg-white p-[10px] rounded-lg w-[289px] shadow-card relative"
            onClick={handlerOpenModal}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
          {
            item.expired &&
            <div className="flex items-center justify-between pb-2">
              <h3 className="text-blue-dark text-xs font-bold">
                Saved By Loop
                <span className="text-[#5A5A5A] font-normal pl-2">Expired in 2 days</span>
              </h3>
              <TbDotsVertical />
            </div>
          }
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative h-6 w-6">
                  <Image src="/job-card.svg" alt="job-logo" fill={true} />
                </div>
                <div className="text-text_gray">
                  <h3 className="text-sm">{item?.title}</h3>
                  <p className="flex items-center text-[#AFAFAF] text-xs space-x-3">
                    <MdOutlineHomeWork className="text-[#5A5A5A] w-4 h-4" />
                    <span className="font-normal">{item?.company}</span>
                  </p>
                </div>
              </div>
              {
                !item.expired && 
                <div>
                <TbDotsVertical />
              </div>
              }

            </div>

            <div className="flex items-center space-x-3 pt-[10px]">
              <div className=" bg-green-light text-green-dark flex items-center justify-between text-xs rounded px-[10px] py-2 space-x-1">
                <IoDocumentAttach className="w-4 h-4" />
                <span>75%</span>
              </div>

              <div className="flex items-center justify-center p-2 border-dashed rounded-full border-2 border-[#9E9E9E] text-[#9E9E9E]">
                <BsFileEarmarkTextFill className="h-4 w-4" />
              </div>

              <div className={` ${item.remaining ? "btn_alert" : "btn_tag"}`}>
                <div className="">
                  {item?.remaining ? (
                    <Image src="/file-active.svg" alt="file-icon" width={18} height={16} />
                  ) : (
                    <Image src="/file.svg" alt="file-icon" width={16} height={16}/>
                  )}
                </div>
                {item?.remaining && <span className="">25%</span>}
              </div>
            </div>
          </div>
        )}
      </Draggable>
    </>
  );
};

export default JobCard;
