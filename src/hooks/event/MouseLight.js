import { useEffect, useState } from "react";

const MouseLight = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringPointer, setIsHoveringPointer] = useState(true);
  useEffect(() => {
    const handleMouseMove = (e) => {
      // requestAnimationFrameを使うとよりスムーズになる
      requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });

        const element = document.elementFromPoint(e.clientX, e.clientY);
        const tagNamesWithPointer = [
          "A",
          "BUTTON",
          "INPUT",
          "SELECT",
          "TEXTAREA",
        ];

        if (element && tagNamesWithPointer.includes(element.tagName)) {
          setIsHoveringPointer(true);
        } else {
          setIsHoveringPointer(false);
        }
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: mousePos.y - 50,
        left: mousePos.x - 50,
        width: 100,
        height: 100,
        pointerEvents: "none",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)",
        zIndex: 9999,
        opacity: isHoveringPointer ? "1" : "0.3",

        mixBlendMode: "screen",
        transition: "opacity 0.3s ease",
      }}
      className="flex-all-center"
    >
      <div className="w-[5px] h-[5px] bg-white border-[50%]"></div>
    </div>
  );
};

export default MouseLight;
