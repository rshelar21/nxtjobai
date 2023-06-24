import React from 'react'
import { HiPlus } from "react-icons/hi";

const AddJob = () => {
  return (
    <>
      <div className='p-5 w-[329px] '>
        <button className='bg-blue-dark text-white w-[280px] p-6 flex items-center 
        justify-center rounded-lg space-x-3 font-medium text-lg'>
        <HiPlus className=''/>
        <span>Add List</span>
        </button>
      </div>
    </>
  )
}

export default AddJob
