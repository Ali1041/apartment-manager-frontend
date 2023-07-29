import React from "react";
import { Route, Routes } from "react-router-dom";
import { Apartment, Home, Login, Rooms } from "../pages";
import { PrivateRoute } from "./PrivateRoute";
import ApartmentDetail from "../pages/apartment/apartmentDetail";
import Signup from "../pages/signup/signup";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" exact element={<Home />} />
        <Route path="/apartment" element={<Apartment />} />
        <Route path="/apartment/room" element={<Rooms />} />
        <Route path="apartment/:id" element={<ApartmentDetail />} />
      </Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
