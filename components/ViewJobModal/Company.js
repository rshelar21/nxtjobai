import React from "react";
import Image from "next/image";
import { RiPencilFill } from "react-icons/ri";


const Company = () => {
  return (
    <>
      <div
        className="w-[660px] p-5 bg-purple-light rounded-lg h-full"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-gray-dark font-bold text-lg">Compant info</h1>
          <RiPencilFill className="text-purple-dark w-6 h-6" />
        </div>

        <div className="flex items-center gap-[10px] py-5">
          <div className="relative w-[72px] h-[72px]">
            <Image src="/company.svg" alt="logo" fill={true} />
          </div>

          <h1 className="text-gray-dark font-bold text-xl">PIXSTER STUDIO</h1>
        </div>

        <div className="text-[#5A5A5A]">
          <p className="font-normal text-sm">
            Pixster Studio offers a complete array of Mobile & Web-based
            services ranging from development of iOS, Android, and Web
            applications all the way to front-end and back-end website
            solutions. We’ve more than 15 products and satisfied clients all
            around the world.{" "}
          </p>
          <br />
          <h3 className="font-medium text-gray-dark">Website</h3>
          <p className="underline text-purple-dark">
            https://www.linkedin.com/company/pixster-studio/life/
          </p>
          <br />
          <h3 className="font-medium text-gray-dark">Industry</h3>
          <p className="font-normal text-sm">
            Information Technology & Services
          </p>
          <br />
          <h3 className="font-medium text-gray-dark">Employee</h3>
          <p className="font-normal text-sm">Count 11-50</p>
          <br />
          <h3 className="font-medium text-gray-dark">Address</h3>
          <p className="font-normal text-sm">Ahmedabad, Gujarat, India</p>
        </div>
      </div>
    </>
  );
};

export default Company;
