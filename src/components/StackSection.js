import { useState } from "react";
import ImagesRoute from "../assets/ImagesRoute";
import { motion } from "framer-motion";
const StackSection = () => {
  const imgValues = [
    ImagesRoute.js,
    ImagesRoute.java,
    ImagesRoute.csharp,
    ImagesRoute.cpp,
    ImagesRoute.go,
    ImagesRoute.html,
    ImagesRoute.css,
    ImagesRoute.python,
    ImagesRoute.php,
    ImagesRoute.xml,
    ImagesRoute.xaml,
    ImagesRoute.mysql,
    ImagesRoute.ubuntu,
    ImagesRoute.arduino,
  ];
  const [viewPattern, setViewPattern] = useState(true);
  const ChangePattern = (e) => {
    e.preventDefault();
    setViewPattern(!viewPattern);
  };

  return (
    <div className="flex-all-center w-full overflow-x-hidden space-y-[50px]">
      {viewPattern ? (
        <div className="carousel">
          <div className="inner">
            {imgValues.map((item, index) => (
              <img
                className="opacity-down size-[100px]"
                key={index}
                src={item}
                alt="test"
              />
            ))}
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
      ) : (
        <div className="px-[50px] flex flex-wrap gap-[100px] flex-1">
          {imgValues.map((item, index) => (
            <img className="size-[100px]" key={index} src={item} alt="test" />
          ))}
        </div>
      )}
      <button
        className="text-light string-sm pointer-up"
        onClick={ChangePattern}
      >
        {viewPattern ? "View all..." : "View Animation..."}
      </button>
    </div>
  );
};

export default StackSection;
