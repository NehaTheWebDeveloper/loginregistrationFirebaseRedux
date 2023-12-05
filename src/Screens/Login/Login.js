import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../DataBase/Firebase";

const Login = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
console.log(user,"uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu")
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit =async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, data.email, data.password);

  };

  return (
    <>
      <div className=" flex items-center justify-center ">
        <div className="bg-white shadow-md rounded px-8 pt-6   w-80">
          <h1 className="text-red-800 text-center font-semibold p-2 text-lg">
            Login Page
          </h1>
          <div className=" flex flex-col gap-7">
            <input
              name="email"
              type="text"
              placeholder="Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              onChange={handleInputChange}
            />
            <input
              name="password"
              type="text"
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleInputChange}
            />

            <div className="flex justify-center">
              <button
                className="py-2 px-3 rounded border w-40 bg-blue-500 text-white"
                onClick={handleSubmit}
              >
                SignIn
              </button>
            </div>
            {/* <span>
              Do not have an account ?{" "}
              <div
                className="underline text-red-700 font-medium cursor-pointer "
                onClick={() => {
                  navigate("/signup");
                }}
              >
                SignUp
              </div>
            </span> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
