import React, {useEffect} from "react";
import Navbar from "../components/Navbar";
import './Home.css'
import Movcont from "../components/Movcont";
import Mouseblob from "../components/Mouseblob";


function Home() {

  useEffect(() => {

    //movcont
    var update = function(event) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight/2).toFixed(2),
        (mouse.x / inner.offsetWidth/2).toFixed(2)
      );
    };
    
    var updateTransformStyle = function(x, y) {
      var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
      inner.style.transform = style;
      inner.style.webkitTransform = style;
      inner.style.mozTransform = style;
      inner.style.msTransform = style;
      inner.style.oTransform = style;
    };
    var container = document.getElementById("container");
    var inner = document.getElementById("inner");

    var onMouseEnterHandler = function (event) {
      update(event);
    };
    var onMouseLeaveHandler = function () {
      inner.style = "";
    };
    var onMouseMoveHandler = function (event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };

    // Init
    var container = document.getElementById("container");
    var inner = document.getElementById("inner");
    // Mouse
    var mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function (event) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function (e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
      show: function () {
        return "(" + this.x + ", " + this.y + ")";
      },
    };
    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);

    var counter = 0;
    var updateRate = 10;
    var isTimeToUpdate = function () {
      return counter++ % updateRate === 0;
    };

    container.onmouseenter = onMouseEnterHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmousemove = onMouseMoveHandler;

    //blob
    const blob = document.getElementById("blob");
  });
  window.onpointermove = (event) => {
    const { clientX, clientY } = event;
    blob.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 3000, fill: "forwards" }
    );
  };

  
  return (
    <div className="w-full">
      <div id="blob" className=" blur-[100px]"></div>
      {/* <div id="blur"></div> */}
      <div id="container" className="w-full">
      <div id="inner">
        <img src="https://i.pinimg.com/originals/82/c6/5b/82c65b9bb0a75026fc4c82a438b4cc9b.jpg"/>
      </div>
    </div>
      {/* <div><Mouseblob/></div> */}
      
      
    </div>
  );
}

export default Home;
