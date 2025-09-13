import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import AnimatedRouteSet from "./AnimatedRouteSet";
import { Sangria, Write } from "../pages/products";
import Footer from "../components/Footer";
const RouteList = [
  { path: "/write", element: <Write /> },
  { path: "/sangria", element: <Sangria /> },
];
const ProductionRoutes = () => {
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
        <Footer />
      </AnimatePresence>
    </div>
  );
};

export default ProductionRoutes;
