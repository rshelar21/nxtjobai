"use client";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SavedJobs from "./JobDetails/SavedJobs";
import AppliedJobs from "./JobDetails/AppliedJobs";
import Offers from "./JobDetails/Offers";
import Interviewing from "./JobDetails/Interviewing";
import RejectedJobs from "./JobDetails/RejectedJobs";
import AddJob from "./JobDetails/AddJob";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import {
  savedJobList,
  appliedJobList,
  interviewList,
  rejectedList,
  offersList,
} from "../../utils/constants";

const JobPanel = () => {
  const [savedJobs, setSavedJobs] = useState(savedJobList);
  const [appliedJobs, setAppliedJobs] = useState(appliedJobList);

  const hadnlerDrag = (result) => {
    console.log(result);
    const { source, destination } = result;
    if (!destination) return;
    let add;
    let active;
    let updated;
    if (source.droppableId === "characters") {
      active = savedJobs;
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      active = appliedJobs;
      add = active[source.index];
      active.splice(source.index, 1);
    }

    if (destination.droppableId === "appliedJobs") {
      updated = appliedJobs;
      updated.splice(destination.index, 0, add);
      setAppliedJobs(updated);
    } else {
      updated = savedJobs;
      updated.splice(destination.index, 0, add);
      setSavedJobs(updated);
    }
  };
  return (
    <>
      <div className="w-full pl-5">
        <SearchBar />

        <div className="">
          <div className="mt-5 flex gap-[10px] w-full max-w-[1250px] overflow-x-scroll scrollbar-hide scroll-smooth pr-2">
            <DragDropContext onDragEnd={hadnlerDrag}>
              <SavedJobs savedJobs={savedJobs} />
              <AppliedJobs appliedJobs={appliedJobs} />
              <Interviewing interviewList={interviewList} />
              <Offers offersList={offersList} />
              <RejectedJobs rejectedList={rejectedList} />
            </DragDropContext>
            <AddJob />
          </div>
        </div>
      </div>
    </>
  );
};

export default JobPanel;
