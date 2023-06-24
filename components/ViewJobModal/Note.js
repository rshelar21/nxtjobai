import React from "react";
import { AiOutlineFileText } from "react-icons/ai";
const Note = () => {
  return (
    <>
      <div
        className="w-[660px] p-5 bg-purple-light rounded-lg h-full"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-text_gray font-bold text-lg">Compant info</h1>
          <button className="text-white bg-blue-dark px-8 py-[10px] rounded-lg font-bold text-sm">
            Create New Note
          </button>
        </div>

        <div>
          <dir className="pt-[60px] mx-auto w-full">
            <AiOutlineFileText className="text-pink-light w-[160px] h-[200px] mx-auto" />
          </dir>

          <div className="text-[#5A5A5A] text-center">
            <h3 className="font-semibold text-2xl">No notes created</h3>
            <p className="text-sm">
              You can tap the `&quot;`Create New Notes`&quot;` Button to start taking notes!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Note;
