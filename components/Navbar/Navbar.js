import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiChevronDown } from "react-icons/hi";
import { TbBellFilled } from "react-icons/tb";

const navLinks = [
  {
    id: 1,
    title: "Resume Builder",
    link: "/resume-builder",
  },
  {
    id: 2,
    title: "Cover Letter",
    link: "/cover-letter",
  },
  {
    id: 3,
    title: "LinkedIn Review",
    link: "/linkedin-review",
  },
  {
    id: 4,
    title: "Interview",
    link: "/interview",
  },
  {
    id: 5,
    title: "Job Tracker & Networking",
    link: "/",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full 
      py-[26px] px-8 shadow-nav sticky top-0 bg-white">
        <div className="flex items-center">
          <div className="w-[139px] h-12 relative">
            <Image src="/nxtjob-logo.svg" alt="logo" fill={true} />
          </div>

          <div className="">
            <ul className="flex items-center space-x-2">
              {navLinks?.map((link) => (
                <li
                  key={link.id}
                  className="text-gray-dark last:text-purple-dark
                last:bg-purple-light rounded-[8px]"
                >
                  <Link
                    href={link.link}
                    className="flex px-5 py-[10px] items-center gap-x-2 
                    text-sm"
                  >
                    {link.title}
                    <span>
                      <HiChevronDown className="w-5 h-5"/>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div>
            <TbBellFilled className="h-6 w-6"/>
          </div>

          <div className="rounded-full bg-blue-dark text-white w-12 h-12 flex justify-center items-center">
            GS
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
