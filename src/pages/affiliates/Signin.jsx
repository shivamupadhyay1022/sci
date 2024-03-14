import React,{useState, useContext, useEffect} from 'react'
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";
import { signInWithEmailAndPassword, } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from 'react-router-dom'
import { toast,ToastContainer } from "react-toastify";
import { AuthContext } from '../../components/AuthProvider';
import { cyan_logo } from '../../assets';
import "react-toastify/dist/ReactToastify.css";
function Signin() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { currentUser } = useContext(AuthContext);

    // useEffect= () =>{
    //     if(currentUser){
    //         if(user.emailVerified){
    //             console.log("verified")
    //             navigate("/dashboard")
    //         }else{
    //             navigate("./verify")
    //         }
    //     }
    // }

    function onRegister() {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                toast.success(user.email + ' signed in', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                    if(user.emailVerified){
                        console.log("verified")
                        navigate("/dashboard")
                    }else{
                        console.log("Not verified")
                        navigate("/verify")
                    }
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                toast.error(errorCode, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            });
    }

    const showpassword = () => {
        console.log("show")
        var x = document.getElementById("password");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister();
        
    };

  return (
    <div>
      <ToastContainer />
      <div className="w-full flex flex-col ">
        <center className=" h-16 m-0 p-0 items-center mb-16 ">
          <img src={cyan_logo} className=" h-64 mb-8 p-0  " alt="" />
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
            {/* Email */}
            <input
              className="text-sm w-full px-4 py-2 border border-solid text-white bg-gray-600 border-gray-300 rounded"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />

            {/* password */}
            <input
              className="text-sm w-full px-4 py-2 border border-solid text-white bg-gray-600 border-gray-300 rounded mt-4"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {/* show password */}
            <input type="checkbox" onChange={showpassword} className="my-4" />{" "}
            <span className="text-white font-oswald"> Show Password</span>
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
                onClick={handleSubmit}
              >
                Register
              </button>
            </div>
            <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
              {/* Don&apos;t  */}
              Dont &apos have an account?{" "}
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
    </div>
  )
}

export default Signin