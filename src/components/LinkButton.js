import { Link } from "react-router-dom";
import ImagesRoute from "../assets/ImagesRoute";

const LinkButton = ({ to }) => {
  return (
    <Link to={to} className=" string-rg shootingstar-underline pointer-up">
      <div className="flex items-center space-x-[20px]">
        <div>View more</div>
        <div className=" border rounded-[50%] size-[50px] flex-all-center">
          <img className="w-2/3" src={ImagesRoute.arrow} alt="" />
        </div>
      </div>
    </Link>
  );
};

export default LinkButton;
