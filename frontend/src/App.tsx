import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Parentcomponent from "./components/Parentcomponent"
import Follows from "./pages/Follows"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

export default function App () {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Parentcomponent/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile",
          element:<Profile/>
        },
        {
          path:"/followers",
          element:<Follows followersList={true}/>
        },
        {
          path:"/followings",
          element:<Follows followersList={false}/>
        },
      ]
    },{
      path:"/login",element:<Login/>
    },{
      path:"/signup",element:<Signup/>
    }
  ])
  return (<>
  <RouterProvider router={router}/>
  </>)
}