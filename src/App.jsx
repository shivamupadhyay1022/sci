import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter,Route,Routes, useLocation } from 'react-router-dom';
import Test from "./pages/Test";
import Signup from "./pages/affiliates/Signup";
import { AuthProvider } from "./components/AuthProvider";


const App = () => {
  const location = useLocation();
  console.log(location.pathname)
  // if (location == "/"){
    window.ontouchstart = (event) =>{
    return
  }
  window.ontouchend = (event) =>{
    return
  }
  window.ontouchcancel = (event) =>{
    return
  }
  window.onpointermove = (event) => {
    const { clientX, clientY } = event;
    const blob = document.getElementById("blob");
    blob.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 3000, fill: "forwards" }
    );
  };
// }
  

  return (

    <Home/>
  );
}

export default App;
