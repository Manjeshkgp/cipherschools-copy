import { FC } from 'react'

interface FollowsProps {
  followersList:boolean
}

const Follows: FC<FollowsProps> = ({followersList}) => {
  return (
  <>
  {followersList?"Followers":"Following"}
  </>)
}

export default Follows