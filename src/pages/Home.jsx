import React, { useEffect } from "react";
import "./Home.css";
import Carousel from "../components/Carousel";
import Herotext from "../components/Herotext";
import Futurecard from "../components/Futurecard";
import Timeline from "../components/Timeline";
import Avatarslide from "../components/Avatarslide";

function Home() {
  // MouseFollower.registerGSAP(gsap);
  
  useEffect(() => {
    //movcont
  //   const cursor = new MouseFollower({
  //     container: '.blob',
  //     speed: 0.3
  // });
    var update = function (event) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
      );
    };

    var updateTransformStyle = function (x, y) {
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
    // const blob = document.getElementById("blob");
  });


  return (
    <div className="flex-row">
      {/* <div id="blur"></div> */}
      <div id="blob" className=" blur-[100px] "></div>
      <div id="container" className="w-full flex items-center justify-center ">
        <div className="z-50 absolute text-[90px] tracking-tighter leading-[0.85em] justify-center align-middle ">
          <p className=" text-white font-bold font-oswald  text-start pr-[180px]">
            reaching
          </p>
          <p className=" text-white font-bold  font-oswald  text-end ">
            heights
          </p>
          <p className="text-white font-bold  font-oswald text-start">
            innovating
          </p>
          <p className=" text-white font-bold font-oswald  text-end ">
            horizons
          </p>
          <div className=" leading-8 flex mt-4 justify-center ">
            <button className="btn mt-8 h-[121px] w-[121px] relative inline-flex items-center justify-start overflow-hidden transition-all bg-aquamarine rounded-[120px] hover:rounded-[120px] hover:bg-inherit group">
              {/* purple box */}
              <span className="w-0 h-0 rounded-[120px] bg-purple-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
              <span className="w-full lowercase text-2xl text-white rounded-[120px] font-oswald transition-colors duration-500 ease-in-out group-hover:text-white z-10">
                discover more
              </span>
            </button>
          </div>
        </div>
        <img
          id="inner"
          src="https://static.vecteezy.com/system/resources/thumbnails/005/076/592/small/hacker-mascot-for-sports-and-esports-logo-free-vector.jpg"
          className=" col-start-1 row-start-1 rounded-2xl"
        />
      </div>

      <Carousel />
      <Herotext />
      <div className="flex justify-center" >
        <p className="text-white font-bold text-[90px] font-oswald" >
          wanna work ?
        </p>
      </div>
      <Timeline/>
      <div className="flex justify-center" >
        <p className="text-white font-bold text-[90px] font-oswald" >
          Our lead associates
        </p>
      </div>
      <div className="flex h-full justify-center my-4" >
      <Avatarslide/>
      </div>
      
    </div>
  );
}

export default Home;
