import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Auth from "./Screens/Auth";
import Home from "./Screens/Home";

import { useDispatch, useSelector } from "react-redux";
import { auth } from "./DataBase/Firebase";
import React, { useEffect } from "react";
import { loginUser, setLoading } from "./Redux/Slices/authSlice";
import ProtectedRoutes from "./ProtectedRoutes";
import MainLayout from "./Components/MainLayOut";
function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  console.log(user, "loginUser");
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        console.log("User is not logged in.");
      }
    });
  }, []);
  const { isLoading } = useSelector((state) => state.auth);
  console.log(isLoading, "islo");
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Home />} />

          {!isLoading ? (
            <Route
              path={"/home"}
              element={<MainLayout><ProtectedRoutes Components={Home} /> </MainLayout>}
            />
          ) : (
            <Route element={<React.Fragment>Loading...</React.Fragment>} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
