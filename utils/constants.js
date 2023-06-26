import { IoGridSharp } from "react-icons/io5";
import { LuNetwork } from "react-icons/lu";
import { TiArrowLoop } from "react-icons/ti";
import { BsLightbulbFill , BsGrid, BsFileEarmarkText} from "react-icons/bs";
import { MdArchive, MdBugReport } from "react-icons/md";
import { MdOutlineHomeWork } from "react-icons/md";

export const sideLinks = [
    {
        id : 1,
        title : "Boards",
        link : "/boards",
        icon : <IoGridSharp className="absolute w-full h-full"/>
    },
    {
        id : 2,
        title : "Networking",
        link : "/networking",
        icon : <LuNetwork className="absolute w-full h-full"/>
    },
    {
        id : 3,
        title : "Archive Jobs",
        link : "/archive-jobs",
        icon : <MdArchive className="absolute w-full h-full"/>
    },
    {
        id : 4,
        title : "Loop Settings",
        link : "/loop-settings",
        icon : <TiArrowLoop className="absolute w-full h-full"/>
    },
    {
        id : 5,
        title : "Suggest a feature",
        link : "/suggest-feature",
        icon : <BsLightbulbFill className="absolute w-full h-full"/>
    },
    {
        id : 4,
        title : "Report an Issue",
        link : "/report-issue",
        icon : <MdBugReport className="absolute w-full h-full"/>
    },
];

export const modalSideBar = [
    {
        id : 1,
        title : "Job Description",
        icon : <BsGrid className="w-6 h-6"/>,
        link : "job description"
    },
    {
        id : 2,
        title : "Company",
        icon : <MdOutlineHomeWork className="w-6 h-6"/>,
        link : "company"
    },
    {
        id : 3,
        title : "Note",
        icon : <BsFileEarmarkText className="w-6 h-6"/>,
        link : "note"
    },
    {
        id : 4,
        title : "Networking",
        icon : <LuNetwork className="w-6 h-6"/>,
        link : "networking"
    },
]

export const resposList = [
    {
        id : 1,
        desc : "Assist in the research, design, and prototyping of user interfaces and experiences"
    },
    {
        id : 2,
        desc : "Conduct user research and develop personas, user stories, and user flows"
    },
    {
        id : 3,
        desc : "Create wireframes, mockups, and prototypes to effectively communicate design ideas"
    },
    {
        id : 4,
        desc : "Collaborate with cross-functional teams to gather requirements and develop solutions"
    },
    {
        id : 5,
        desc : "Participate in usability testing and incorporate feedback into design iterations"
    },
    {
        id : 6,
        desc :"Support the team with general administrative tasks as needed"
    },
    {
        id : 7,
        desc : "Contribute to the creation of design documentation and style guides "
    }
]


export const savedJobList = [
    {
        id : 1,
        title : "UI/UX Designer",
        company : "Ajmera Infotech Inc.",
        expired : true,
        remaining : false,
      },
      {
        id : 2,
        title : "UI/UX Designer",
        company : "Ajmera Infotech Inc.",
        expired : false,
        remaining : true,
        
      },
      {
        id : 3,
        title : "UI/UX Designer",
        company : "Ajmera Infotech Inc.",
        expired : false,
        remaining : false,
      },
      {
        id : 4,
        title : "UI/UX Designer",
        company : "Ajmera Infotech Inc.",
        expired : false,
        remaining : false,
      },
]

export const appliedJobList = [
    {
      id: 5,
      title: "UI/UX Designer",
      company: "Ajmera Infotech Inc.",
    },
];

export const interviewList = [
    {
      id: 6,
      title: "UI/UX Designer",
      company: "Ajmera Infotech Inc.",
    },
];

export const offersList = [
    {
      id: 7,
      title: "UI/UX Designer",
      company: "Ajmera Infotech Inc.",
    },
];

export const rejectedList = [
    {
      id: 8,
      title: "UI/UX Designer",
      company: "Ajmera Infotech Inc.",
    },
];

