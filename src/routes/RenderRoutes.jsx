import React from 'react'
import {nav} from './naviagtion'
import { Route, Routes } from "react-router-dom";

const RenderRoutes = () => {
  return (
    <>
    <Routes>
      {nav.map((r, i) => {
        // Protected routes
  
        // Public Routes
        if (!r.isPrivate) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else return false;
      })}
    </Routes>
  </>
  )
}

export default RenderRoutes