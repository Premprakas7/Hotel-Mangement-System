import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import auth from "../Pages/auth";
import Admin from "../Pages/Admin";
import AdminEdit from "./Admin/AdminEdit";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
import Details from "./auth/Details";
import ReqAuth from "./ReqAuth";

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/auth"
          element={
            <ReqAuth>
              <auth />
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
        <Route path="/auth/hotel/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default AllRoute;
