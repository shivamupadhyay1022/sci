import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Test from "./pages/Test";


const App = () => {
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

  return (

    
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
