import React from "react";
import { modalSideBar, resposList } from "../../utils/constants";
import ViewHeader from "../ViewJobModal/ViewHeader";
import JobDescription from "../ViewJobModal/JobDescription";
import Company from "../ViewJobModal/Company";
import Networking from "../ViewJobModal/Networking";
import Note from "../ViewJobModal/Note";
import { useDispatch, useSelector } from "react-redux";
import { setViewJob, selectViewJob } from "../../features/viewJobSlice";
import { HiOutlineX } from "react-icons/hi";
import { closeModal } from "../../features/modalSlice";
import {motion} from "framer-motion"


const RenderComponent = (titleType) => {
  const modal = titleType.titleType;
  switch (modal) {
    case "job description":
      return <JobDescription />;
    case "company":
      return <Company />;
    case "note":
      return <Note />;
    case "networking":
      return <Networking />;
    default:
      return <JobDescription />;
  }
};

const ViewJobModal = () => {
  const titleType = useSelector(selectViewJob);
  const dispatch = useDispatch();
  const handlerSetViewJob = (title) => {
    dispatch(setViewJob({ type: title }));
  };

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
        className="rounded-lg bg-white relative shadow-modal  w-[1140px] py-10 
        h-full 
      "
      initial={{scale:0}}
      animate={{scale:1}}
      transition={{duration: 0.5}}
      exit={{scale:0}}
      >
        <div className="absolute top-2 right-2 cursor-pointer">
          <HiOutlineX className="w-6 h-6" onClick={handlerCloseModal} />
        </div>
        <div
          className="h-full relative overflow-hidden"
        >
          <ViewHeader />
          <div className="flex gap-x-5 h-full pt-[10px]">
            <div className="px-[10px] py-5 w-[213px] border-r h-full">
              <div className="flex flex-col gap-[10px]">
                {modalSideBar?.map((item) => (
                  <div
                    className={`flex items-center text-[#5A5A5A] rounded-lg 
                px-[10px] py-[6px] cursor-pointer gap-[10px] 
                ${
                  titleType === item.link && "bg-purple-light text-purple-dark"
                }`}
                    onClick={() => handlerSetViewJob(item.link)}
                  >
                    <div className="">{item?.icon}</div>
                    <span className="text-xs">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-h-[500px] overflow-y-scroll scrollbar-hide scroll-smooth">
              <RenderComponent titleType={titleType} />
            </div>

            <div className="w-[200px] p-5 bg-purple-light rounded-lg h-fit">
              <h1 className="text-[#5A5A5A] font-bold ">Time Line</h1>

              <div className=" mt-[10px]">
                <ol className="list-none">
                  <li className="list_style">
                    <div className="w-[127px] ml-auto">
                      <h3 className="text-gray-light text-sm leading-4">
                        Today, 1:12 PM
                      </h3>
                      <div className="bg-blue-light text-[#5A5A5A] p-[10px] mt-[10px]">
                        <h3 className=" text-xs font-semibold">
                          Moved to Saved
                        </h3>
                        <h3 className="text-[10px] leading-4">
                          You moved this job from Applied to saved
                        </h3>
                      </div>
                    </div>
                  </li>

                  <li className="list_style">
                    <div className="w-[127px] ml-auto">
                      <h3 className="text-gray-light text-sm leading-4">
                        Today, 1:12 PM
                      </h3>
                      <div className="bg-blue-light text-[#5A5A5A] p-[10px] mt-[10px]">
                        <h3 className=" text-xs font-semibold">
                          Moved to Saved
                        </h3>
                        <h3 className="text-[10px] leading-4">
                          You moved this job from Applied to saved
                        </h3>
                      </div>
                    </div>
                  </li>

                  <li className="list_style">
                    <div className="w-[127px] ml-auto">
                      <h3 className="text-gray-light text-sm leading-4">
                        Today, 1:12 PM
                      </h3>
                      <div className="bg-blue-light text-[#5A5A5A] p-[10px] mt-[10px]">
                        <h3 className=" text-xs font-semibold">
                          Moved to Saved
                        </h3>
                        <h3 className="text-[10px] leading-4">
                          You moved this job from Applied to saved
                        </h3>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ViewJobModal;
