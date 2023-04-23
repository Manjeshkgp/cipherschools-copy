import { FC,useState } from 'react'
import Button from '../Button';
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai";

interface PasswordProps {
  
}

const Password: FC<PasswordProps> = ({}) => {
    const [edit,setEdit] = useState<boolean>(false);
    const [showOld,setShowOld] = useState<boolean>(false);
    const [showNew,setShowNew] = useState<boolean>(false);
    const [passwords,setPasswords] = useState({
        oldPassword:"",
        newPassword:""
    })
  return (<>
  <div className="flex flex-wrap w-[96%] justify-center gap-x-2 gap-y-4 p-2 pt-20 relative pb-4">
          <div className="md:text-lg font-bold absolute top-6 left-4">
            <p>CHANGE PASSWORD</p>
          </div>
          <div className="absolute top-6 right-4">
            <Button onClick={()=>setEdit((prev:boolean)=>(!prev))} >{edit?"Save":"Edit"}</Button>
          </div>
          <div className="flex lg:w-[calc(50%-1rem)] w-[100%] border rounded-md border-gray-500">
            {!showOld?<AiFillEyeInvisible 
              className="bg-gray-100 rounded-l-md dark:bg-gray-800 p-1 cursor-pointer"
              size={40} onClick={()=>setShowOld((prev:boolean)=>(!prev))}/>
            :<AiFillEye 
            className="bg-gray-100 rounded-l-md dark:bg-gray-800 p-1 cursor-pointer"
            size={40} onClick={()=>setShowOld((prev:boolean)=>(!prev))}/>}
            <input
              disabled={!edit}
              value={passwords?.oldPassword}
            onChange={(e)=>setPasswords({...passwords,[e.target.name]:e.target.value})}
            name="oldPassword"
              placeholder="Old Password"
              type={showOld?"text":"password"}
              className="w-[92%] md:w-[97%] p-2 rounded-r-md bg-gray-100 text-gray-950 dark:bg-gray-800 dark:text-gray-50 focus:outline-none"
            />
          </div>{" "}
          <div className="flex lg:w-[calc(50%-1rem)] w-[100%] border rounded-md border-gray-500">
          {!showNew?<AiFillEyeInvisible 
              className="bg-gray-100 rounded-l-md dark:bg-gray-800 p-1 cursor-pointer"
              size={40} onClick={()=>setShowNew((prev:boolean)=>(!prev))}/>
            :<AiFillEye 
            className="bg-gray-100 rounded-l-md dark:bg-gray-800 p-1 cursor-pointer"
            size={40} onClick={()=>setShowNew((prev:boolean)=>(!prev))}/>}
            <input
              disabled={!edit}
              value={passwords?.newPassword}
            onChange={(e)=>setPasswords({...passwords,[e.target.name]:e.target.value})}
            name="newPassword"
              placeholder="New Password"
              type={showNew?"text":"password"}
              className="w-[92%] md:w-[97%] p-2 rounded-r-md bg-gray-100 text-gray-950 dark:bg-gray-800 dark:text-gray-50 focus:outline-none"
            />
          </div>{" "}
        <hr className="w-[99%] border border-gray-400" />
        </div>{" "}
  </>)
}

export default Password