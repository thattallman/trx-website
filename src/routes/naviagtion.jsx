import React, { lazy, Suspense } from "react";

const HomePage = lazy(() => import("../pages/landing/Home"));
const ClientPage = lazy(() => import("../pages/landing/Client"));
const CandidatePage = lazy(() => import("../pages/landing/Candidates"));
export const nav = [
  {
    path: "/",
    name: "home",
    element: (
      <Suspense
        fallback={() => {
          <div>Loading</div>;
        }}
      >
        <HomePage />
      </Suspense>
    ),
    isPrivate: false,
  },
  {
    path: "/client",
    name: "client",
    element: (
      <Suspense
        fallback={() => {
          <div>Loading</div>;
        }}
      >
        <ClientPage />
      </Suspense>
    ),
    isPrivate: false,
  },
  {
    path: "/candidates",
    name: "candidates",
    element: (
      <Suspense
        fallback={() => {
          <div>Loading</div>;
        }}
      >
        <CandidatePage />
      </Suspense>
    ),
    isPrivate: false,
  },
];
