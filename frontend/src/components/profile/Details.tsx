import { FC, useState } from "react";
import Button from "../Button";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiOutlineConsoleSql,
} from "react-icons/ai";

interface DetailsProps {}

const Details: FC<DetailsProps> = ({}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [details, setDetails] = useState({
    aboutMe: "",
    currentWork: "",
    education: "",
    facebook: "",
    github: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    website: "",
  });
  return (
    <>
      <div className="flex flex-col w-[96%] min-h-[3rem] bg-gray-100 text-gray-950 dark:text-gray-50 dark:bg-gray-950 items-center">
        <div className="flex w-full flex-col p-2">
          <div className="flex justify-between items-center m-2">
            <p className="text-lg font-bold">ABOUT ME</p>
            <Button
              onClick={() => {
                setEdit((prev: boolean) => !prev);
              }}
            >
              {edit ? "Save" : "Edit"}
            </Button>
          </div>
          <textarea
            disabled={!edit}
            value={details?.aboutMe}
            onChange={(e)=>setDetails({...details,[e.target.name]:e.target.value})}
            name="aboutMe"
            placeholder="Add Something About You"
            className="p-2 h-32 my-4 rounded-md bg-white text-gray-950 dark:bg-gray-800 dark:text-gray-50 mx-2"
          ></textarea>
        </div>{" "}
        <hr className="w-[97%] border border-gray-400" />
        <div className="flex flex-wrap w-full justify-center gap-x-2 gap-y-4 p-2 pt-20 relative pb-4">
          <div className="text-lg font-bold absolute top-6 left-4">
            <p>SOCIAL LINKS</p>
          </div>
          <div className="flex lg:w-[calc(50%-1rem)] w-[100%] border rounded-md border-gray-500">
            <AiFillLinkedin
              className="bg-gray-100 rounded-l-md dark:bg-gray-800 p-1"
              size={40}
            />{" "}
            <input
              disabled={!edit}
              value={details?.linkedin}
            onChange={(e)=>setDetails({...details,[e.target.name]:e.target.value})}
            name="linkedin"
              placeholder="LinkedIn"
              type="text"
              className="w-[92%] md:w-[97%] p-2 rounded-r-md bg-gray-100 text-gray-950 dark:bg-gray-800 dark:text-gray-50 focus:outline-none"
            />
          </div>{" "}
          <div className="flex lg:w-[calc(50%-1rem)] w-[100%] border rounded-md border-gray-500">
            <AiFillGithub
              className="bg-gray-100 rounded-l-md dark:bg-gray-800 p-1"
              size={40}
            />{" "}
            <input
              disabled={!edit}
              value={details?.github}
            onChange={(e)=>setDetails({...details,[e.target.name]:e.target.value})}
            name="github"
              placeholder="Github"
              type="text"
              className="w-[92%] md:w-[97%]  p-2 rounded-r-md bg-gray-100 text-gray-950 dark:bg-gray-800 dark:text-gray-50 focus:outline-none"
            />
          </div>{" "}
          <div className="flex lg:w-[calc(50%-1rem)] w-[100%] border rounded-md border-gray-500">
            {" "}
            <AiFillFacebook
              className="bg-gray-100 rounded-l-md dark:bg-gray-800 p-1"
              size={40}
            />{" "}
            <input
              disabled={!edit}
              value={details?.facebook}
            onChange={(e)=>setDetails({...details,[e.target.name]:e.target.value})}
            name="facebook"
              placeholder="Facebook"
              type="text"
              className="w-[92%] md:w-[97%]  p-2 rounded-r-md bg-gray-100 text-gray-950 dark:bg-gray-800 dark:text-gray-50 focus:outline-none"
            />
          </div>{" "}
          <div className="flex lg:w-[calc(50%-1rem)] w-[100%] border rounded-md border-gray-500">
            <AiFillTwitterCircle
              className="bg-gray-100 rounded-l-md dark:bg-gray-800 p-1"
              size={40}
            />{" "}
            <input
              disabled={!edit}
              value={details?.twitter}
            onChange={(e)=>setDetails({...details,[e.target.name]:e.target.value})}
            name="twitter"
              placeholder="Twitter"
              type="text"
              className="w-[92%] md:w-[97%]  p-2 rounded-r-md bg-gray-100 text-gray-950 dark:bg-gray-800 dark:text-gray-50 focus:outline-none"
            />
          </div>{" "}
          <div className="flex lg:w-[calc(50%-1rem)] w-[100%] border rounded-md border-gray-500">
            <AiFillInstagram
              className="bg-gray-100 rounded-l-md dark:bg-gray-800 p-1"
              size={40}
            />{" "}
            <input
              disabled={!edit}
              value={details?.instagram}
            onChange={(e)=>setDetails({...details,[e.target.name]:e.target.value})}
            name="instagram"
              placeholder="Instagram"
              type="text"
              className="w-[92%] md:w-[97%]  p-2 rounded-r-md bg-gray-100 text-gray-950 dark:bg-gray-800 dark:text-gray-50 focus:outline-none"
            />
          </div>{" "}
          <div className="flex lg:w-[calc(50%-1rem)] w-[100%] border rounded-md border-gray-500">
            {" "}
            <AiOutlineConsoleSql
              className="bg-gray-100 rounded-l-md dark:bg-gray-800 p-1"
              size={40}
            />{" "}
            <input
              disabled={!edit}
              value={details?.website}
            onChange={(e)=>setDetails({...details,[e.target.name]:e.target.value})}
            name="website"
              placeholder="Your Website"
              type="text"
              className="w-[92%] md:w-[97%]  p-2 rounded-r-md bg-gray-100 text-gray-950 dark:bg-gray-800 dark:text-gray-50 focus:outline-none"
            />
          </div>{" "}
        </div>{" "}
        <hr className="w-[97%] border border-gray-400" />
        <div className="flex flex-wrap w-full justify-center gap-x-2 gap-y-4 p-2 pt-20 relative pb-4">
          <div className="text-lg font-bold absolute top-6 left-4">
            <p>PROFESSIONAL INFORMATION</p>
          </div>
          <div className="flex lg:w-[calc(50%-1rem)] w-[100%] border rounded-md border-gray-500">
            <select
              disabled={!edit}
            onChange={(e)=>setDetails({...details,[e.target.name]:e.target.value})}
            name="education"
              value={details?.education||"Select Your Highest Education"}
              className="bg-gray-600 text-gray-400 appearance-none border-none inline-block p-2 rounded leading-tight w-full"
            >
              {[
                "Select Your Highest Education",
                "Primary",
                "Secondary",
                "Higher Secondary",
                "Graduation",
                "Post Graduation",
              ].map((education) => (
                <option key={education}>{education}</option>
              ))}
            </select>
          </div>
          <div className="flex lg:w-[calc(50%-1rem)] w-[100%] border rounded-md border-gray-500">
            <select
              disabled={!edit}
            onChange={(e)=>setDetails({...details,[e.target.name]:e.target.value})}
            name="currentWork"
              value={details?.currentWork||"Select Your Highest Education"}
              className="bg-gray-600 text-gray-400 appearance-none border-none inline-block p-2 rounded leading-tight w-full"
            >
              {[
                "Select Your Work",
                "Schooling",
                "College Student",
                "Teaching",
                "Job",
                "Freelancing",
              ].map((education) => (
                <option key={education}>{education}</option>
              ))}
            </select>
          </div>
        </div>{" "}
        <hr className="w-[97%] border border-gray-400" />
      </div>
    </>
  );
};

export default Details;
