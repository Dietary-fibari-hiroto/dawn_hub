import { Link } from "react-router-dom";

const Header = () => {
    return (
        <ul className="absolute z-[5] palast-variable-italic tracking-[5px] h-[50px] w-full flex justify-between items-center px-[20px]">
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/">Dawn</Link></li>
            <li><Link to="/product">Product</Link></li>
        </ul>
    )
}


export default Header;