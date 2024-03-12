import React, { useEffect } from "react";
import "./Home.css";
import Carousel from "../components/Carousel";
import Herotext from "../components/Herotext";
import Futurecard from "../components/Futurecard";
import Timeline from "../components/Timeline";
import Avatarslide from "../components/Avatarslide";
import { black_logo, cyan_logo, logo, shine_logo } from "../assets";
import Footer from "../components/Footer";

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
     
      <div id="container" className="w-full min-h-[80vh] md:min-h-[100vh] flex items-center justify-center ">
      <div id="blob" className=" hidden md:block blur-[100px] "></div>
      <div id="blob2" className=" block md:hidden blur-[100px] "></div>
        <div className="z-50 absolute text-[70px] md:text-[90px] tracking-tighter leading-[0.85em] md:leading-[0.85em] justify-center align-middle ">
          <p className=" text-white font-bold font-oswald  text-start md:pr-[180px]">
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
          <div className=" leading-8 flex  justify-center ">
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
          src={cyan_logo}
          className="bg-none col-start-1 row-start-1 rounded-2xl h-[12em] w-[14em] md:h-[18em] md:w-[20em]"
        />
      </div>

      <div className="flex self-center text-center justify-center">
        <p className="text-white font-bold text-[50px] md:text-[90px] font-oswald">
          our clients
        </p>
      </div>

      <div className="flex h-full justify-center my-4">
        <Avatarslide />
      </div>
      <Herotext />
      <div className="flex justify-center">
        <p className="text-white font-bold text-[50px] md:text-[90px] font-oswald">
          wanna work ?
        </p>
      </div>
      <Timeline className='x-4 scale-6050' />
      
      <div
        className="fixed bottom-8 mb-4 w-[360px] md:w-[380px] rounded-full z-10 left-1/2 transform -translate-x-1/2"
        id="bottom-nav"
      >
        <div
          className=" w-full h-full text-[aquamarine] bg-gradient-to-r absolute from-[aquamarine] to-[mediumpurple] opacity-85 rounded-full -z-10 left-1/2 transform -translate-x-1/2"
          id="bottom-nav"
        >
          .
        </div>
        <div class="bg-inherit flex gap-x-4 w-full h-full font-bold py-2 px-4 justify-center rounded-full shadow-lg">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6 x-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </button>
          <button>
            <svg viewBox="0 0 32 32" className=" h-8  whatsapp-ico">
              <path
                d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          </button>
          <p className="text-white font-bold font-oswald text-lg self-center">
            wanna work ?
          </p>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
