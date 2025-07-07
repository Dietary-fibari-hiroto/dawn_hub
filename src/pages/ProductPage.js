import Header from "../components/Header";
import SubPageStartcard from "../components/SubPageStartcard";

import Footer from "../components/Footer";
import ShieldSection from "../components/ShieldSection";
import ProductShield from "../components/ProductShield";
import ImagesRoute from "../assets/ImagesRoute";

import { ProductData } from "../constants/ProductData";

const ProductPage = () => {
  return (
    <div className="kinuta-maruminfuji-stdn w-[100vw]">
      <Header />
      <SubPageStartcard title={"Product"} img={ImagesRoute.IMG_7050} />

      <div className="flex-all-center mb-[50px]">
        {ProductData.map(
          ({ path, img, log, gradient, title, stack, explain }, index) => (
            <ProductShield
              key={index}
              path={path}
              img={img}
              gradient={gradient}
              log={log}
              title={title}
              stack={stack}
              explain={explain}
            />
          )
        )}
      </div>
      <ShieldSection />
      <Footer />
    </div>
  );
};

export default ProductPage;
