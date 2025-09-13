import { Link } from "react-router-dom";
import ImagesRoute from "../assets/ImagesRoute";

const Header = () => {
  return (
    <div className="absolute z-[10] top-0 flex justify-between  w-full px-[20px] py-[10px]">
      <Link to="/" className="size-[50px] shootingstar-rightline">
        <img className="size-[50px]" src={ImagesRoute.dawn_cat} alt="" />
      </Link>
      <ul className=" KinutaShinStdN6K tracking-[5px] h-[60px] w-[300px] flex justify-between items-center px-[20px] space-x-[20px]">
        <Link className="shootingstar-rightline " to="/profile">
          Profile
        </Link>
        <Link className="shootingstar-rightline " to="/product">
          Product
        </Link>
        <a
          className="shootingstar-rightline "
          href="https://github.com/Dietary-fibari-hiroto"
        >
          Git
        </a>
      </ul>
    </div>
  );
};

export default Header;
