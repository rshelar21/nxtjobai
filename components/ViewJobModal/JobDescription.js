import React from "react";
import { RiPencilFill } from "react-icons/ri";
import { resposList } from "../../utils/constants";

const JobDescription = () => {
  return (
    <>
      <div
        className="w-[660px] p-5 bg-purple-light rounded-lg"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-text_gray font-bold text-lg">Description</h1>
          <RiPencilFill className="text-purple-dark w-6 h-6" />
        </div>

        <div className="pt-5 pb-[10px]">
          <h1 className="text-gray-dark font-medium text-base">
            About the job
          </h1>
        </div>

        <div className="text-[#5A5A5A] text-sm font-normal">
          <h3 className="">
            Are you passionate about UI/UX design and eager to gain hands-on
            experience working with a prestigious Management Consulting firm?
            TalentKompass Deutschland, a top Human Resources company based in
            Germany, is searching for a motivated UI/UX Design Intern to join
            our esteemed client. This remote position offers an extraordinary
            chance for someone who is excited to learn and develop their skills
            in a dynamic and fast-paced environment.
          </h3>
          <br />
          <h3>
            As a UI/UX Design Intern, you will work closely with the consulting
            and design teams, where you will be responsible for a range of
            tasks, including user research, wireframing, prototyping, and
            usability testing. You will have the unique opportunity to learn
            from experienced professionals who will provide mentorship and
            guidance throughout the internship. With this internship, you will
            gain valuable experience in UI/UX design, design thinking, and
            teamwork – all essential skills for a successful career in this
            field.
          </h3>
          <br />
          <h3 className="text-gray-dark font-medium">Responsibilities:</h3>
          <ul className="list-disc pl-3">
            {resposList.map((item, index) => (
              <li className="" key={index}>{item.desc}</li>
            ))}
          </ul>
          <h3 className="text-gray-dark font-medium">Requirements:</h3>
        </div>
      </div>
    </>
  );
};

export default JobDescription;
