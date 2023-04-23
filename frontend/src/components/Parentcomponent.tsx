import { FC } from 'react';
import {Outlet} from "react-router-dom";
import Header from './Header';

interface ParentcomponentProps {
  
}

const Parentcomponent: FC<ParentcomponentProps> = ({}) => {
  return (<>
  <Header/>
  <div className="mt-[3.75rem] lg:w-[calc(100%-5rem)] lg:ml-20">
  <Outlet/>
  </div>
  </>)
}

export default Parentcomponent