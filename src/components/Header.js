import { useState } from "react";
import { Link } from "react-router-dom";
import ImagesRoute from "../assets/ImagesRoute";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute z-[20] top-0 flex justify-between items-center w-full px-[20px] py-[10px]">
      <Link to="/" className="size-[50px] shootingstar-rightline">
        <img className="size-[50px]" src={ImagesRoute.dawn_cat} alt="" />
      </Link>

      {/* PC 用ナビ */}
      <ul className="hidden md:flex KinutaShinStdN6K tracking-[5px] h-[60px] justify-between items-center px-[20px] space-x-[30px]">
        <Link className="shootingstar-rightline" to="/">
          Home
        </Link>
        <Link className="shootingstar-rightline" to="/profile">
          Profile
        </Link>
        <Link className="shootingstar-rightline" to="/product">
          Product
        </Link>
        <a
          className="shootingstar-rightline"
          href="https://github.com/Dietary-fibari-hiroto"
        >
          Git
        </a>
      </ul>

      {/* モバイル用ハンバーガー */}
      <button
        className="md:hidden flex flex-col space-y-[5px]"
        onClick={() => setOpen(true)}
        aria-label="open menu"
      >
        <span className="w-7 h-[2px] bg-white"></span>
        <span className="w-7 h-[2px] bg-white"></span>
        <span className="w-7 h-[2px] bg-white"></span>
      </button>

      {/* フルスクリーンメニュー */}
      {open && (
        <div className="fixed inset-0 z-[30] bg-gradient-to-b from-[#05050a] via-[#0a0a18] to-[#14142a] bg-opacity-95 backdrop-blur-sm flex flex-col items-center justify-center space-y-10 KinutaShinStdN6K tracking-[6px]">
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setOpen(false)}
            aria-label="close menu"
          >
            ✕
          </button>

          <Link
            onClick={() => setOpen(false)}
            className="text-3xl shootingstar-rightline"
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="text-3xl shootingstar-rightline"
            to="/profile"
          >
            Profile
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="text-3xl shootingstar-rightline"
            to="/product"
          >
            Product
          </Link>
          <a
            onClick={() => setOpen(false)}
            className="text-3xl shootingstar-rightline"
            href="https://github.com/Dietary-fibari-hiroto"
          >
            Git
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
