import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import AnimatedRouteSet from "./AnimatedRouteSet";
import { Dawn_wander, JumBubble_plan } from "../pages/materials";
import Footer from "../components/Footer";

const RouteList = [
  { path: "/dawn-wander", element: <Dawn_wander /> },
  { path: "/jumbubble_plan", element: <JumBubble_plan /> },
];

const MaterialRoutes = () => {
  const location = useLocation();

  return (
    <div className="kinuta-maruminfuji-stdn bg-black">
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
