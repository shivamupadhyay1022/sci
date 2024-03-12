import React from 'react'
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";

import { cyan_logo, shine_logo } from '../../assets';

function Signup() {
  return (
    <div className='w-full flex flex-col '>
            <center className=' h-16 m-0 p-0 items-center mb-16 ' >
                <img src={cyan_logo} className=' h-64 mb-8 p-0  ' alt="" />
            </center>
    
    <section className="h-screen flex mt-8 pt-16 flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <label className="mr-1 text-gray-400">Sign up with</label>
          <button
            type="button"
            className="mx-1 h-9 w-9  rounded-full bg-gradient-to-r from-[#b2e9d7] to-[#9363f1]  text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            <BiLogoFacebook
              size={20}
              className="flex justify-center items-center w-full"
            />
          </button>
          <button
            type="button"
            className="inlne-block mx-1 h-9 w-9 rounded-full bg-gradient-to-r from-[#b2e9d7] to-[#9363f1] uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            <AiOutlineTwitter
              size={20}
              className="flex justify-center items-center w-full"
            />
          </button>
          <button
            type="button"
            className="inlne-block mx-1 h-9 w-9 rounded-full bg-gradient-to-r from-[#b2e9d7] to-[#9363f1] uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            <FaGoogle

              size={20}
              className="flex justify-center items-center w-full"
            />
          </button>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Or
          </p>
        </div>
        <input
          className="text-sm w-full px-4 py-2 border border-solid text-white bg-gray-600 border-gray-300 rounded"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="text-sm w-full px-4 py-2 mt-4 border border-solid text-white bg-gray-600 border-gray-300 rounded"
          type="text"
          placeholder="Name"
        />
        <input
          className="text-sm w-full px-4 py-2 mt-4 border border-solid text-white bg-gray-600 border-gray-300 rounded"
          type="text"
          placeholder="Affiliate Code"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid text-white bg-gray-600 border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
        />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a
            className="text-[#b2e9d7] hover:text-[#9363f1] hover:underline hover:underline-offset-4"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="text-center flex justify-center md:text-left">
          <button
            className="mt-4 w-3/4 bg-gradient-to-r from-[#b2e9d7] to-[#9363f1] px-4 py-2 text-white uppercase rounded-2xl text-xs tracking-wider"
            type="submit"
          >
            Login
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don&apos;t have an account?{" "}
          <a
            className="text-[#b2e9d7] hover:text-[#9363f1] hover:underline hover:underline-offset-4"
            href="#"
          >
            Register
          </a>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Signup