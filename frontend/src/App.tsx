import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Parentcomponent from "./components/Parentcomponent"
import Follows from "./pages/Follows"

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
    }
  ])
  return (<>
  <RouterProvider router={router}/>
  </>)
}