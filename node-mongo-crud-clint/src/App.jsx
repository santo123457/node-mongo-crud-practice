import { useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import AddUser from "./Components/AddUser/AddUser";

function App() {

  const route = createBrowserRouter([
    {
      path : "/",
      element : <Home></Home>,
      loader :async()=>{
        return await fetch('http://localhost:5000/users')
      }
    },
    {
      path : "/adduser",
      element : <AddUser></AddUser>
    }
  ])
  return <RouterProvider router={route}>
  
  </RouterProvider>;
}

export default App;
