'use client'
import React, { useEffect } from "react";
import {useSelector} from "react-redux"
import {selectModal} from "../../features/modalSlice"
import AddJobModal from "./AddJobModal";
import ViewJobModal from "./ViewJobModal";

const RenderModal = (modalType) => {
  console.log(modalType)
  const modal = modalType.modalType
  switch (modal) {
    case "addJob":
      return <AddJobModal/>;
    case "viewJob":
      return <ViewJobModal />;
    default:
      return null;
  }
};

const Modal = () => {
  const modalType = useSelector(selectModal)

  useEffect(() => {
    if (modalType) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [modalType]);
  return (
    <>
    {
      modalType &&
      <div className="w-full inset-0 z-40 backdrop-blur-sm bg-black bg-opacity-30 flex justify-center items-center fixed">
        <RenderModal modalType={modalType} />
      </div>
    }
    </>
  )
};

export default Modal;
