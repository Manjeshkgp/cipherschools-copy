import { FC } from "react";
import { AiOutlineLeft } from "react-icons/ai";

interface ShrinkerProps {
  shrink: boolean;
  setShrink: Function;
}

const Shrinker: FC<ShrinkerProps> = ({ shrink, setShrink }) => {
  return (
    <>
      <div
        onClick={() => {
          setShrink((prev: boolean) => !prev);
        }}
        className={
          shrink
            ? "fixed cursor-pointer rounded-l-md border-b border-l border-gray-200 w-6 h-8 top-[calc(3.75rem+90px)] right-[79px] z-50 hidden lg:flex justify-center items-center bg-gray-100 text-gray-950 dark:text-gray-50 dark:bg-gray-800 transition-all duration-300"
            : "fixed cursor-pointer rounded-l-md border-b border-l border-gray-200 w-6 h-8 top-[calc(3.75rem+90px)] right-[239px] z-50 hidden lg:flex justify-center items-center bg-gray-100 text-gray-950 dark:text-gray-50 dark:bg-gray-800 transition-all duration-300"
        }
      >
        <AiOutlineLeft
          className={
            shrink
              ? "transition-all duration-300"
              : "rotate-180 transition-all duration-300"
          }
        />
      </div>
    </>
  );
};

export default Shrinker;
