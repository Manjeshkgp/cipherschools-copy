import React,{useState} from 'react';
import {Outlet} from "react-router-dom";
import Header from './Header';
import Sidebar from './Sidebar';

const Parentcomponent = () => {
  const [shrink,setShrink] = useState<boolean>(true);
  return (<>
  <Header setShrink={setShrink}/>
  <Sidebar shrink={shrink}/>
  <div className="mt-[3.75rem] lg:w-[calc(100%-5rem)] lg:ml-20">
  <Outlet/>
  </div>
  </>)
}

export default Parentcomponent