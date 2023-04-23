import { FC, useState } from "react";
import Hero from "../components/profile/Hero";
import Leftbar from "../components/profile/Rightbar";
import Shrinker from "../components/profile/Shrinker";
import Button from "../components/Button";
import Details from "../components/profile/Details";

interface ProfileProps {}

const Profile: FC<ProfileProps> = ({}) => {
  const [shrink, setShrink] = useState<boolean>(true);
  return (
    <>
      <Hero />
      <Leftbar shrink={shrink} />
      <Shrinker shrink={shrink} setShrink={setShrink} />
      <div
        className={
          shrink
            ? "mt-[calc(90px+3.75rem)] w-full lg:w-[calc(100%-5rem)] flex flex-col justify-start items-center flex-wrap"
            : "mt-[calc(90px+3.75rem)] w-full lg:w-[calc(100%-15rem)] flex flex-col justify-start items-center flex-wrap"
        }
      >
        <div>ciphermap</div>
        <Details/>
        <div>Password Changer</div>
        <div>Interests</div>
      </div>
    </>
  );
};

export default Profile;
