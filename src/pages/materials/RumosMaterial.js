import ImagesRoute from "../../assets/ImagesRoute";
import { Hero, Guidance } from "../../sections/materials/rumos";

const RumosMaterial = () => {
  return (
    <div className="relative">
      <img
        className="section-frame fixed top-0 left-0 z-[-1]"
        src={ImagesRoute.IMG_7391}
        alt=""
      />
      <Hero />
      <Guidance />
    </div>
  );
};

export default RumosMaterial;
