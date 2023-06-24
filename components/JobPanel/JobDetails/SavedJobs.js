'use client'
import React, {useState} from "react";
import JobCard from "./JobCard";
import { Droppable } from "react-beautiful-dnd";



const SavedJobs = ({savedJobs}) => {

  return (
    <>
      <div className="p-5 w-[329px] bg-[#F5F4F4] rounded-lg">
        <div className="text-text_gray flex justify-between items-center w-full">
          <h3 className="font-semibold text-lg">Saved</h3>
          <p className="text-sm">4 Jobs</p>
        </div>
          <Droppable droppableId="characters">
            {(provided) => (
              <div
                className="flex flex-col gap-[10px] w-full"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {savedJobs?.map((item, index) => (
                  <JobCard key={item.id} item={item} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
      </div>
    </>
  );
};

export default SavedJobs;
