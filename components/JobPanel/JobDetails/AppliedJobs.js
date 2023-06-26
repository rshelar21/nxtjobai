"use client";
import React, { useState } from "react";
import JobCard from "./JobCard";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const adata = [
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Ajmera Infotech Inc.",
  },
];

const AppliedJobs = ({ appliedJobs }) => {
  const [ldata, setData] = useState(adata);
  const handlerASetDrag = (e) => {
    console.log(e);
  };
  return (
    <>
      <Droppable droppableId="appliedJobs">
        {(provided) => (
          <div
            className="p-5 bg-[#F5F4F4] min-w-[329px] rounded-lg"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <div className="text-text_gray flex justify-between items-center">
              <h3 className="font-semibold text-lg">Applied</h3>
              <p className="text-sm">1 Jobs</p>
            </div>

            <div className="flex flex-col gap-[10px] w-full">
              {appliedJobs?.map((item, index) => (
                <JobCard key={item.id} item={item} index={index} />
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </>
  );
};

export default AppliedJobs;
