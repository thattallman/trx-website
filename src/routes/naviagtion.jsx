import React, { lazy, Suspense } from "react";
import HomePage from '../pages/landing/Home'
import  ClientPage from "../pages/landing/Client";
 import CandidatePage  from "../pages/landing/Candidates";


export const nav = [
  {
    path: "/",
    name: "home",
    element: <HomePage />,
    isPrivate: false,
  },
  {
    path: "/client",
    name: "client",
    element: <ClientPage />,
    isPrivate: false,
  },
  {
    path: "/candidates",
    name: "candidates",
    element: <CandidatePage />,
    isPrivate: false,
  },
];
