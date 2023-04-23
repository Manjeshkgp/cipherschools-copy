import { FC } from 'react'
import Button from '../Button';

interface InterestsProps {
  setPopup:Function,
  chosenInterests:string[]
}

const Interests: FC<InterestsProps> = ({setPopup,chosenInterests}) => {
  return (<>
  <div className="flex flex-col w-[96%] min-h-[3rem] bg-gray-100 text-gray-950 dark:text-gray-50 dark:bg-gray-950 items-center">
        <div className="flex w-full flex-col p-2">
          <div className="flex justify-between items-center m-2">
            <p className="text-lg font-bold">INTERESTS</p>
            <Button
              onClick={() => {
                setPopup((prev:boolean) => !prev);
              }}
            >
              Edit
            </Button>
          </div>
          <div className="flex justify-start items-center gap-4 flex-wrap">
            {chosenInterests.map((interest)=>(<button disabled className='text-[#F3912E] bg-[#F3912E20] py-[3px] px-[6px] rounded-md'>{interest}</button>))}
          </div>
        </div>{" "}
        </div>
  </>)
}

export default Interests