import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './routes/homepage/Homepage';
import DashboardPage from './routes/dashboardPage/DashboardPage'
import Chatpage from './routes/chatPage/ChatPage'
import RootLayout from './layouts/rootLayout/RootLayout';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout';





const router = createBrowserRouter([
  {
    element:<RootLayout/>,
    children : [
      { path:"/", element:<Homepage/>},
      
      {
        element:<DashboardLayout/>,
        children:[
          { path:"/dashboard", element:<DashboardPage/>},
          { path:"/dashboard/chats/:id", element:<Chatpage/>}

        ]

      }
      
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
