"use client";
import React, { useState } from "react";
import JobCard from "./JobCard";
import { Droppable } from "react-beautiful-dnd";

const SavedJobs = ({ savedJobs }) => {
  return (
    <>
      <Droppable droppableId="characters" >
        {(provided) => (
          <div
            className="p-5 min-w-[329px] bg-[#F5F4F4] rounded-lg"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <div className="text-text_gray flex justify-between items-center w-full">
              <h3 className="font-semibold text-lg">Saved</h3>
              <p className="text-sm">4 Jobs</p>
            </div>

            <div className="flex flex-col gap-[10px] w-full">
              {savedJobs?.map((item, index) => (
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

export default SavedJobs;
