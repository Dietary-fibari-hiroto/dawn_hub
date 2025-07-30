import React, { useState, useEffect } from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import AnimatedRouteSet from "./AnimatedRouteSet";
import LoadingScreen from "../pages/LoadingScreen";
import ProductionRoutes from "./ProductionRoutes";

import HomePage from "../pages/HomePage";
import NotFound from "../pages/404";
import Test from "../test/Test";
import NN from "../pages/NN";
import SS from "../pages/SS";
import OUTFIT from "../pages/OUTFIT";
import Profile from "../pages/Profile";
import ProductPage from "../pages/ProductPage";
import Logis from "../pages/Logis";
import HookView from "../pages/HookView";
import ChronoDawn from "../pages/functions/Chronodawn";
import ReserchMa from "../pages/materials/ResearchMa";
import Dawn_wander from "../pages/materials/Dawn_wander";

const routeList = [
  { path: "/", element: <HomePage /> },
  { path: "*", element: <NotFound /> },
  { path: "/profile", element: <Profile /> },
  { path: "/product", element: <ProductPage /> },
  { path: "/test", element: <Test /> },
  { path: "/product/nn", element: <NN /> },
  { path: "/product/ss", element: <SS /> },
  { path: "/product/outfit", element: <OUTFIT /> },
  { path: "/product/logis", element: <Logis /> },

  { path: "/function/chronodawn", element: <ChronoDawn /> },

  { path: "/hook/hookview", element: <HookView /> },

  { path: "/material/researchma", element: <ReserchMa /> },

  { path: "/material/dawn-wander", element: <Dawn_wander /> },
];

const AssemblyRoutes = () => {
  const location = useLocation(); // location を取得

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && <LoadingScreen />}

      {!isLoading && (
        <Routes location={location} key={location.pathname}>
          {routeList.map(({ path, element }) => (
            <Route
              key={path} // key を指定
              path={path}
              element={<AnimatedRouteSet>{element}</AnimatedRouteSet>}
            />
          ))}
          <Route path="/production/*" element={<ProductionRoutes />} />
        </Routes>
      )}
    </AnimatePresence>
  );
};

export default AssemblyRoutes;
