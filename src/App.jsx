import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DoctorDashboard from "./Component/DoctorDashboard.jsx";
import Sidebarx from "./Component/Sidebarx.jsx";
import Sidebary from "./Component/Sidebary.jsx";
import HomePage from "./Component/HomePage/HomePage.jsx";
import { BrowserRouter } from "react-router-dom";
import {ProSidebarProvider} from "react-pro-sidebar"
import {Outlet} from "react-router-dom"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>


    
     <HomePage/>
<ProSidebarProvider>
<BrowserRouter>
   

      </BrowserRouter>

      </ProSidebarProvider>
    </>
  )
}

export default App
