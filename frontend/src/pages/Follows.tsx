import { FC } from 'react'
import Button from '../components/Button'

interface FollowsProps {
  followersList:boolean
}

const Follows: FC<FollowsProps> = ({followersList}) => {
  return (
  <>
  <div className="bg-gray-100 text-gray-950 dark:bg-gray-950 dark:text-gray-50 flex flex-col">
    <p className='text-xl font-bold ml-12'>{followersList?"Users Following You":"You Following those Users"}</p>
    <div className="flex justify-center items-center gap-4 flex-wrap">
      <div className="w-44 h-52 bg-gray-300 dark:bg-gray-800 rounded-md flex flex-col justify-start">
        <div className="w-full h-20 flex justify-center items-center">
          <img src="https://picsum.photos/id/237/200/300" className='w-16 h-16 rounded-full' alt="" />
        </div>
        <p className='text-lg font-bold ml-2'>Username</p>
        <p className="ml-2">10 Followers</p>
        <p className="ml-2">CurrentWORK</p>
        <Button style={{marginLeft:"8px"}}>Follow</Button>
      </div>
    </div>
  </div>
  </>)
}

export default Follows