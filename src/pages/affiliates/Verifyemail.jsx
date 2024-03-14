import React from "react";
import { cyan_logo } from "../../assets";
import { toast,ToastContainer } from "react-toastify";
import { sendEmailVerification } from "firebase/auth";
import { AuthContext } from "../../components/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";

function Verifyemail() {
    const { currentUser } = useContext(AuthContext);
    const sendverificationmail = async () => {
        await sendEmailVerification(currentUser)
        .then(() => {
            //registered
            toast.success(currentUser.email + "Mail Sent", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            navigate("/dashboard");
          })
          .catch((error) => {
            const errorCode = error.code;
            // const errorMessage = error.message;
            // console.log(errorMessage);
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
  return (
    <div>
      <ToastContainer />
      <div className="w-full flex flex-col ">
        <center className=" h-16 m-0 p-0 items-center mb-8 ">
          <img src={cyan_logo} className=" h-64 mb-4 p-0  " alt="" />
        </center>

        <section className="h-screen flex mt-8 flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
          <div className="rounded-lg bg-slate-700 p-8 text-center shadow-xl">
            <h1 className="mb-4 text-white text-4xl font-bold">Verify Your Email</h1>
            <p className="text-gray-500">
              Click on below to send verification mail to the registered mail
            </p>
            <button
            onClick={sendverificationmail}
              href="/"
              className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
            >
              {" "}
              Send Verification Mail{" "}
            </button>
          </div>
        </section>
      </div>
    </div>
    // <div className="w-full flex flex-col">
    //     <center className=" h-16 m-0 p-0 items-center mb-16 ">
    //       <img src={cyan_logo} className=" h-64 mb-8 p-0  " alt="" />
    //     </center>
    //   <div className=" flex items-center justify-center text-white">

    //     <div className="rounded-lg  p-8 text-center shadow-xl">
    //       <h1 className="mb-4 text-4xl font-bold">Verify Your Email</h1>
    //       <p className="text-gray-500">
    //         Oops! The page you are looking for could not be found.
    //       </p>
    //       <a
    //         href="/"
    //         className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
    //       >
    //         {" "}
    //         Go back to Home{" "}
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Verifyemail;
