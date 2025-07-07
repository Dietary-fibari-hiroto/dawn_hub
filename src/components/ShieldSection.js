import { Link } from "react-router-dom";

import Shield from "./Shield";
import UseOpacityAnimation from "../hooks/UseOpacityAnimation";
import ImagesRoute from "../assets/ImagesRoute";
import LinkButton from "./LinkButton";
import { ProductData } from "../constants/ProductData";

const ShieldSection = () => {
  const { animationOpacityStyle } = UseOpacityAnimation();

  return (
    <section className=" section-frame flex flex-all-center kinuta-maruminfuji-stdn">
      <p
        className={`section-title opacity-section ${animationOpacityStyle} string-rg`}
      >
        Product
      </p>
      <div className={`opacity-section ${animationOpacityStyle} w-full`}>
        <div className="flex px-[100px] space-x-[50px]  w-full overflow-x-auto">
          {ProductData.map(({ log, title, subtitle, path }, index) => (
            <Shield
              key={index}
              img={log}
              title={title}
              explain={subtitle}
              link={path}
            />
          ))}
        </div>
      </div>
      <LinkButton to="/product" />
    </section>
  );
};

export default ShieldSection;
