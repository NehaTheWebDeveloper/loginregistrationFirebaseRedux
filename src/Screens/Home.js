import React from "react";
import { loginUser, logoutUser } from "../Redux/Slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../DataBase/Firebase";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handelLogout = () => {
    dispatch(loginUser());
    signOut(auth);
    navigate("/auth")

  };
  return (
    <div className="p-10">
      <div>Home</div>
      <div>username:{user.email}</div>
      <div>
        <button
          className="px-3 py-2 rounded bg-red-800 text-white"
          onClick={handelLogout}
        >
          SignOut
        </button>
      </div>
      <div class="h-screen relative z-0 flex bg-gray-500">
      <div class="text-4xl">
        The main content of the file and it has it's content all over the page
        and i want to build a navbar on top of this
      </div>
      <div class="absolute inset-y-0 left-0 z-10 bg-green-400 w-1/3">
        <div class="flex h-full items-center justify-center text-4xl">
          Mobile Navbar
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
