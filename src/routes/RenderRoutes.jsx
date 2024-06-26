import React from "react";
import { nav } from "./naviagtion";
import { Route, Routes } from "react-router-dom";
import HomePage from '../pages/landing/Home'
import  ClientPage from "../pages/landing/Client";
 import CandidatePage  from "../pages/landing/Candidates";


const RenderRoutes = () => {
  return (
    <>
      <Routes>
        {/* {nav.map((r, i) => {
          // Protected routes

          // Public Routes
          if (!r.isPrivate) {
            return <Route key={i} path={r.path} element={r.element} />;
          } else return false;
        })} */}
        <Route path="/" element={<HomePage />} />
        <Route path="/client" element={<ClientPage />} />
        <Route path="/candidates" element={<CandidatePage />} />
      </Routes>
    </>
  );
};

export default RenderRoutes;
