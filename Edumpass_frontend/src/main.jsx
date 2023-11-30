import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Project_Details from './Project_Details.jsx'
import Projects from './Projects.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import './index.css'
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:'/projects',element:<Projects/>},
      {path:"/projects/:projectId" , element:<Project_Details/>}

    ]
  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
