import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Admin from "../Pages/Admin";
import AdminEdit from "./Admin/AdminEdit";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
import Details from "./User/Details";
import ReqAuth from "./ReqAuth";
import User from "../Pages/User";

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/user"
          element={
            <ReqAuth>
              <User />
            </ReqAuth>
          }
        />
        <Route
          path="/admin"
          element={
            <ReqAuth>
              <Admin />
            </ReqAuth>
          }
        />
        <Route path="/admin/edit/:id" element={<AdminEdit />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/hotel/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default AllRoute;
