import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import AnimatedRouteSet from "./AnimatedRouteSet";
import { DawnWander, JumBubblePlan, RumosMaterial } from "../pages/materials";

const RouteList = [
  { path: "/dawn-wander", element: <DawnWander /> },
  { path: "/jumbubble_plan", element: <JumBubblePlan /> },
  { path: "/rumos", element: <RumosMaterial /> },
];

const MaterialRoutes = () => {
  const location = useLocation();

  return (
    <div className=" bg-black">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {RouteList.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={<AnimatedRouteSet>{element}</AnimatedRouteSet>}
            />
          ))}
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default MaterialRoutes;
