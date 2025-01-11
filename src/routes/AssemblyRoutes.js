import React, { useState, useEffect } from "react";

import { motion } from "framer-motion"


import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import AnimatedRouteSet from "./AnimatedRouteSet"
import ScrollReset from "../hooks/ScrollReset"
import LoadingScreen from "../pages/LoadingScreen";

import HomePage from "../pages/HomePage"
import NotFound from "../pages/404"
import Test from "../test/Test"
import NN from "../pages/NN";
import SS from "../pages/SS";
import OUTFIT from "../pages/OUTFIT";
import Profile from "../pages/Profile";
import ProductPage from "../pages/ProductPage";


const routeList = [
    { path: "/", element: <HomePage /> },
    { path: "*", element: <NotFound /> },
    { path: "/profile", element: <Profile /> },
    { path: "/product", element: <ProductPage /> },
    { path: "/test", element: <Test /> },
    { path: "/nn", element: <NN /> },
    { path: "/ss", element: <SS /> },
    { path: "/outfit", element: <OUTFIT /> }
]

const AssemblyRoutes = () => {
    const location = useLocation(); // location を取得

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, [])


    return (
        <AnimatePresence mode="wait">
            {isLoading && <LoadingScreen />}
            <ScrollReset />
            {!isLoading && (
                <Routes location={location} key={location.pathname}>
                    {routeList.map(({ path, element }) => (
                        <Route
                            key={path} // key を指定
                            path={path}
                            element={<AnimatedRouteSet>{element}</AnimatedRouteSet>}
                        />
                    ))}
                </Routes>

            )}
        </AnimatePresence>
    );

}


export default AssemblyRoutes;