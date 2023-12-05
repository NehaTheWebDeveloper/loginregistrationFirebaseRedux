import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../DataBase/Firebase";
const SignUp = () => {
  // const navigate = useNavigate();
console.log(auth,"auth    ;jjj")
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
console.log(auth,"On SignUp")
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    // Clear the error message when the user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!data.name) {
      validationErrors.name = "Name is required";
    }

    if (!data.email) {
      validationErrors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      validationErrors.email = "Invalid email";
    }

    if (!data.password) {
      validationErrors.password = "Password is required";
    }

    if (!data.confirmPassword) {
      validationErrors.confirmPassword = "Confirm Password is required";
    } else if (data.confirmPassword !== data.password) {
      validationErrors.confirmPassword = "Passwords must match";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // navigate("/login");
      console.log(data);
    }
  };

  const isValidEmail = (email) => {
    // You can implement your email validation logic here
    // This is a simple example; you can use regular expressions for more complex validation
    return email.includes("@");
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((authUser) => {
        signInWithEmailAndPassword(auth, data.email, data.password).then(
          updateProfile(auth.currentUser, {
            displayName: data.name,
          })
        );
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className=" flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded w-full max-w-md p-8">
        <h1 className="text-xl text-center font-semibold text-gray-800 mb-6">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleInputChange}
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Enter your email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleInputChange}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleInputChange}
              required
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-semibold"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleInputChange}
              required
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>
          <div className="flex justify-center">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
