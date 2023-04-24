import React,{useState,useEffect} from 'react';
import {Outlet} from "react-router-dom";
import Header from './Header';
import Sidebar from './Sidebar';
import { useDispatch } from 'react-redux/es/exports';
import { add } from '../slices/pointSlice';

const Parentcomponent = () => {
  const [shrink,setShrink] = useState<boolean>(true);
  const dispatch = useDispatch();
function startTimer() {
    setTimeout(() => {
      dispatch(add());
      startTimer();
    }, 60000); // 1 minute in milliseconds
}
startTimer()
  return (<>
  <Header setShrink={setShrink}/>
  <Sidebar shrink={shrink}/>
  <div className="mt-[3.75rem] lg:w-[calc(100%-5rem)] lg:ml-20">
  <Outlet/>
  </div>
  </>)
}

export default Parentcomponent