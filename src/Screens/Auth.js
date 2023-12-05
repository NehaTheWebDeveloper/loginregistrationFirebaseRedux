import React, { useState } from "react";
import logo from "../../src/P3Vm1Kq.png"
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

function Auth() {
  const [active, setActive] = useState("login");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };

  return (
    <div className="flex h-full overflow-hidden">
      <div className="auth__left w-1/2">
        <img
          src={logo}
          alt="Instagram Screenshots"
          className="w-full h-[650px]"
        />
      </div>
      <div className=" w-1/2  flex flex-col justify-center">
        {active === "login" ? <Login /> : <SignUp />}

        <div className="  text-center">
          <span>
            {active === "login" ? (
              <>
                Don't have an account?{" "}
                <button
                  onClick={handleChange}
                  className="text-blue-500 hover:underline"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Have an account?{" "}
                <button
                  onClick={handleChange}
                  className="text-blue-500 hover:underline"
                >
                  Log in
                </button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Auth;
