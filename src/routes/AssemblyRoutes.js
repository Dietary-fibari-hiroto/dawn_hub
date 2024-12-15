import React from "react";


import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import AnimatedRouteSet from "./AnimatedRouteSet"

import HomePage from "../pages/HomePage"
import Test from "../test/Test"
import NN from "../pages/NN";


const routeList = [
    { path: "/", element: <HomePage /> },
    { path: "/test", element: <Test /> },
    { path: "/nn", element: <NN /> },
]

const AssemblyRoutes = () => {
    const location = useLocation(); // location を取得

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                {routeList.map(({ path, element }) => (
                    <Route
                        key={path} // key を指定
                        path={path}
                        element={<AnimatedRouteSet>{element}</AnimatedRouteSet>}
                    />
                ))}
            </Routes>
        </AnimatePresence>
    );

}


export default AssemblyRoutes;