import { useState } from "react";
import ImagesRoute from "../assets/ImagesRoute";
import { motion } from "framer-motion";
const LikeyStack = () => {
  const imgValues = [
    ImagesRoute.html,
    ImagesRoute.css,
    ImagesRoute.js,
    ImagesRoute.csharp,
    ImagesRoute.node,
    ImagesRoute.react,
    ImagesRoute.net_icno,
    ImagesRoute.logo_winui,
    ImagesRoute.tailwind,
  ];

  return (
    <div className="flex-all-center w-full overflow-x-hidden space-y-[50px]">
      <div className="px-[50px] flex flex-wrap gap-[100px] flex-1">
        {imgValues.map((item, index) => (
          <img
            className="opacity-down size-[100px]"
            key={index}
            src={item}
            alt="test"
          />
        ))}
      </div>
    </div>
  );
};

export default LikeyStack;
