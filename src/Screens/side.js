import React, { useState } from "react";
import { SideNavLayoutData as sideLinks } from "../Components/Utils/SideNavLayoutData";
import { Link, useNavigate } from "react-router-dom";
import logo from "../CleaningServiceLogo.png";
import { loginUser } from "../Redux/Slices/AuthSlice";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../Database/Firebase";
import { MdOutlineSubject } from "react-icons/md";

const SideNavLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  
  const handleLogout = async () => {
    try {
      dispatch(loginUser());
      signOut(auth);
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  
  const handleOpenSideBar = () => {
    setOpen(!open);
  };
  
  return (
    <>
      <MdOutlineSubject
        className="text-7xl lg:hidden"
        onClick={handleOpenSideBar}
      />
      
      <div className={`bg-graybg h-screen lg:w-[320px] text-white p-4 sticky top-0 
        ${open ? "lg:w-[320px]" : "xs:w-[60px]"} 
        ${open && "block lg:hidden hidden xs:block"}`}
      >
        <div className="flex items-center gap-2 py-2">
          <div className="flex flex-col items-center w-full">
            <img
              src={logo}
              alt="?"
              width={60}
              className="w-[130px] lg:block hidden"
            />
          </div>
        </div>
        {sideLinks.map((sideLink, i) => {
          if (sideLink.title === "Logout") {
            return (
              <div
                key={i}
                className="flex items-center gap-7 py-4 px-2 border-yellow-100 border-b-double shadow-lg hover:bg-slate-800"
                onClick={handleLogout}
                style={{ cursor: "pointer" }}
              >
                <div className="text-white">{sideLink.icons}</div>
                <span>{sideLink.title}</span>
              </div>
            );
          } else {
            return (
              <div
                key={i}
                className="flex items-center gap-7 py-4 px-2 border-yellow-100 border-b-double shadow-lg hover:bg-slate-800"
              >
                <div className="text-white">{sideLink.icons}</div>
                <Link to={sideLink.link}>{sideLink.title}</Link>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default SideNavLayout;
