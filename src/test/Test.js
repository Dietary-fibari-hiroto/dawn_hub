// components/Test.tsx
import React from "react";
import useScrollLittleFollow from "../hooks/useScrollLittleFollow";
import { useScrollParallax } from "../hooks/useScrollParallax";

const Test = () => {
  const { style } = useScrollParallax(); // デフォルトで .tracked-element に適用

  return (
    <div className="w-screen h-[300lvh] flex-all-center text-black relative">
      <p
        style={{ ...style }}
        className="tracked-element bg-white  translate-y-1/2"
      >
        test
      </p>
    </div>
  );
};

export default Test;
