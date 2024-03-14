import React, { useState, useEffect, useContext } from "react";
import { auth, db } from "../../firebase";
import { ref, set, onValue } from "firebase/database";
import { signOut } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../components/AuthProvider";
import { useNavigate } from "react-router-dom";
import {
  SiGooglepay,
  SiRazorpay,
  SiPhonepe,
  SiPaytm,
  SiAmazonpay,
  SiPaypal,
  SiWhatsapp,
  SiDiscord
} from "react-icons/si";
import { cyan_logo } from "../../assets";

function Dashboard() {
  const { currentUser } = useContext(AuthContext);
  const [acode, setacode] = useState();
  const [email, setEmail] = useState("");
  const [emailverified, setEmailverified] = useState("");
  const [name, setName] = useState("");
  const [jobdesc, setJobdesc] = useState("");
  const [tier, setTier] = useState("Code Explorer");
  const [upi, setUpi] = useState("");
  const [dev, setDev] = useState("");
  const navigate = useNavigate();

  const renderSwitch = (param) => {
    switch (param) {
      case "Code Explorer":
        return "⭐";
      case "Tech Pilgrim":
        return "🌟";
      case "Code Artisan":
        return "✨";
      case "Tech Pioneer":
        return "🌠";
      case "Code Sage":
        return "💫";
      case "Tech Alchemist":
        return "⚜️";
      case "Code Titan":
        return "👑";
      default:
        return "foo";
    }
  };
  const fetchdata = async () => {
    if (currentUser) {
      if (currentUser.emailVerified == false) {
        setEmailverified(false);
      } else {
        setEmailverified(true);
      }
      const starCountRef = ref(db, "freelancers/" + currentUser.uid);
      await onValue(starCountRef, (snapshot) => {
        if (snapshot.exists()) {
          var data = snapshot.val();
          setName(data.name);
          setEmail(data.email);
          setacode(data.acode);
          setDev(data.dev);
          setJobdesc(data.jobdesc);
          setTier(data.tier);
          setUpi(data.upi);
        }
      });
    }
  };
  useEffect(() => {
    fetchdata();
  }, [currentUser]);

  const handlelogout = () => {
    if (currentUser) {
      signOut(auth);
      navigate("/");
    } else {
      navigate("/signin");
    }
  };

  return (
    <div className="w-full flex-col ">
      <ToastContainer />
      <center className=" mb-8 ">
        <img src={cyan_logo} className=" h-64 mb-4   " alt="" />
      </center>
      <div className="grid m-4 gap-2 md:grid-cols-2 md:m-12  md:gap-16">
        <div className=" text-white font-oswald pt-4 pb-4 w-full bg-gray-700 rounded-xl">
          <table className=" mx-4 overflow-hidden w-full table-auto border-spacing-y-4  ">
            <tbody>
              <tr className="mb-2">
                <td>Developer's Name</td>
                <td>
                  {" "}
                  {name || "Name"}
                  {/* <input 
                placeholder={name || "Name"} 
                className="bg-slate-500 text-center border-black border-1 text-white rounded-xl"
                onChange={(e) => setName(e.target.value)} /> */}
                </td>
              </tr>
              <tr>
                <td>Developer's Email</td>
                <td>
                  {email || "Email"}
                  {/* <input 
                placeholder={email || "Email"} 
                className="bg-slate-500 text-center border-black border-1 text-white rounded-xl"
                onChange={(e) => setEmail(e.target.value)} /> */}
                </td>
              </tr>
              <tr>
                <td>
                  Developer Affiliate
                  <br /> Code
                </td>
                <td>{acode || "Affiliate Code"}</td>
              </tr>
            </tbody>
          </table>
          {/* <button  >
            Update
          </button> */}
        </div>
        <div className=" text-white flex-row font-oswald pt-4 pb-4 w-full bg-gray-700 rounded-xl">
          <div className="flex justify-center w-full flex-row gap-2">
            <SiPaypal />
            <SiAmazonpay /> <SiGooglepay /> <SiRazorpay /> <SiPaytm />{" "}
            <SiPhonepe />
          </div>
          <div className="w-full">
            <table className=" mx-4 mt-4  w-full table-auto  ">
              <tbody>
                <tr>
                  <td>Developer's Upi ID</td>
                  <td>
                    {/* {upi|| "UPI"} */}
                    <input
                      placeholder={upi || "UPI"}
                      className="bg-slate-500 text-center w-[80%] border-black border-1 text-white rounded-xl"
                      onChange={(e) => setUpi(e.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <center>
            <button className="mt-4 w-3/4 bg-gradient-to-r from-[#b2e9d7] to-[#9363f1] px-4 py-2 text-white uppercase rounded-2xl text-xs tracking-widerjustify-self-center items-center">
              Update
            </button>
          </center>
        </div>
      </div>

      {/* Second rows */}
      <div className="grid m-4 gap-2 md:grid-cols-2 md:m-12  md:gap-16">
          {/* first block */}
        <center className=" text-white font-oswald pt-4 pb-4 w-full bg-gray-700 rounded-xl">
          <span>Develeoper's Tier:</span>
          <br />
          <p className="text-8xl ">{renderSwitch(tier)}</p>
          <p className="text-4xl ">{'"' + tier + '"'}</p>
        </center>
        {/* Second block */}
        <div className=" flex flex-col text-center text-white font-bold font-oswald p-4 w-full bg-gray-700 rounded-xl">
          <span className="mb-8" >
            Join Social Media Groups to get Regular updates
          </span>
        <div className=" text-white justify-center items-center flex flex-row font-oswald">

        <SiWhatsapp />
        <SiDiscord />


        </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
