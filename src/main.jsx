import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddCoffee from './components/AddCoffee.jsx'
import UpdateCoffee from './components/UpdateCoffee.jsx'
import SignUp from './components/SignUp.jsx'
import SignIn from './components/SignIn.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import Users from './components/Users.jsx'

const route = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    loader:()=> fetch("https://coffee-store-server-hccg84062-aklima-akters-projects.vercel.app/coffee")
  },
  {
    path:"/addCoffee",
    element:<AddCoffee/>
  },
  {
    path:"/updateCoffee/:id",
    element:<UpdateCoffee/>,
    loader:({params})=> fetch(`https://coffee-store-server-hccg84062-aklima-akters-projects.vercel.app/coffee/${params.id}`)
  },
  {
    path:"/signUp",
    element:<SignUp/>
  },
  {
    path:"/signIn",
    element:<SignIn/>
  },
  {
    path:"/users",
    element: <Users/>,
    loader: ()=>fetch("https://coffee-store-server-hccg84062-aklima-akters-projects.vercel.app/user")
  }
 
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={route}></RouterProvider>
   </AuthProvider>
  </React.StrictMode>,
)
