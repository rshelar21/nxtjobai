import React from 'react'
import JobCard from "./JobCard";
import { Droppable } from "react-beautiful-dnd";

const Offers = ({offersList}) => {
  return (
    <>
      <div className="p-5 w-[329px] bg-[#F5F4F4] rounded-lg">
        <div className="text-gray-dark flex justify-between items-center">
          <h3 className="font-semibold text-lg">Offer</h3>
          <p className="text-sm">1 Jobs</p>
        </div>

        <Droppable droppableId="offers">
            {(provided) => (
              <div
                className="flex flex-col gap-[10px] w-full"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {offersList?.map((item, index) => (
                  <JobCard key={item.id} item={item} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

      </div>
    </>
  )
}

export default Offers
