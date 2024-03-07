import React from "react";

function Herotext() {
  return (
    <div className="flex justify-center items-center text-white md:mx-16 my-32 bg-black">
      <div className="grid grid-cols-2 gap-16 md:gap-32">
        <div>
          <h1 className="text-[16px] text-purple-500">all digital</h1>
          <p className="text-4xl font-oswald my-2">
            digital store to digital world, web to mobile we got u covered
          </p>
          <button className="  relative group">
            <span>Know More</span>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-cyan-400 transition-all group-hover:w-32"></span>
          </button>
        </div>
        <div>
          <h1 className="text-[16px] text-cyan-500">all social</h1>
          <p className="text-4xl font-oswald my-2">
            social buzz to viral vibe Embrace trendy twists and turns with our expertise
          </p>
          <button className=" relative group">
            <span>Know More</span>
            <span className="absolute -bottom-1 left-0 w-0 h-1  bg-cyan-400 transition-all group-hover:w-32"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Herotext;
