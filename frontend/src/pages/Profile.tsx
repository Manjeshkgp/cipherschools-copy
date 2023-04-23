import { FC, useState } from "react";
import Hero from "../components/profile/Hero";
import Leftbar from "../components/profile/Rightbar";
import Shrinker from "../components/profile/Shrinker";
import Details from "../components/profile/Details";
import Password from "../components/profile/Password";
import Interests from "../components/profile/Interests";
import Button from "../components/Button";

interface ProfileProps {}

const Profile: FC<ProfileProps> = ({}) => {
  const [shrink, setShrink] = useState<boolean>(true);
  const [popup, setPopup] = useState<boolean>(false);
  const [chosenInterests, setChosenInterests] = useState<string[]>([]);
  const interestsArr = [
    "App Development",
    "Game Development",
    "Web Development",
    "Data Structures",
    "Programming",
    "Machine Learning",
    "Data Science",
    "Others",
  ];
  return (
    <>
      <div
        style={{ zIndex: "100" }}
        className={
          popup
            ? "fixed flex justify-center items-center inset-0 bg-[#F3912E30] backdrop-blur-sm"
            : "hidden"
        }
      >
        <div className="w-[96%] relative max-w-[30rem] h-max p-6 pb-16 bg-gray-100 text-gray-950 dark:bg-gray-800 dark:text-gray-50 flex justify-center items-center gap-4 flex-wrap rounded-md">
        {interestsArr.map((interest) => (
        <button
          key={interest}
          onClick={() => {
            const index = chosenInterests.indexOf(interest);
            if (index !== -1) {
              const updatedInterests = [...chosenInterests];
              updatedInterests.splice(index, 1);
              setChosenInterests(updatedInterests);
            } else {
              setChosenInterests([...chosenInterests, interest]);
            }
          }}
          className={
            chosenInterests.some((obj) => obj === interest)===false
              ? "text-[#F3912E] cursor-pointer bg-[#F3912E20] py-[3px] px-[6px] w-[90%] md:w-[45%] rounded-md"
              : "text-[#fff] cursor-pointer bg-[#F3912E] py-[3px] px-[6px] w-[90%] md:w-[45%] rounded-md"
          }
        >
          {interest}
        </button>
      ))}
          <div className="absolute bottom-4 right-8 md:right-10 flex justify-center items-center gap-x-4">
            <Button onClick={() => setPopup(false)}>Cancel</Button>
            <Button onClick={()=>{console.log(chosenInterests);setPopup(false)}}>Save</Button>
          </div>
        </div>
      </div>
      <Hero />
      <Leftbar shrink={shrink} />
      <Shrinker shrink={shrink} setShrink={setShrink} />
      <div
        className={
          shrink
            ? "mt-[calc(90px+3.75rem)] transition-all duration-300 dark:bg-gray-950 dark:text-gray-50 w-full lg:w-[calc(100%-5rem)] flex flex-col justify-start items-center flex-wrap"
            : "mt-[calc(90px+3.75rem)] transition-all duration-300 dark:bg-gray-950 dark:text-gray-50 w-full lg:w-[calc(100%-15rem)] flex flex-col justify-start items-center flex-wrap"
        }
      >
        <div>ciphermap</div>
        <Details />
        <Password />
        <Interests setPopup={setPopup} chosenInterests={chosenInterests} />
      </div>
    </>
  );
};

export default Profile;
