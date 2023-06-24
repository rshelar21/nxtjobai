import JobPanel from "@/components/JobPanel/JobPanel";
import SideBar from "@/components/SideBar/SideBar";
import Image from "next/image";
// bg-[#F5F4F4]

export default function Home() {
  return (
    <>
      <div className="">
        <div className="pt-5 pl-8 flex w-full overflow-hidden h-full ">
          <SideBar />
          <JobPanel />
        </div>
      </div>
    </>
  );
}
