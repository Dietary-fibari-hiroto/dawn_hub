import { useEffect } from "react";
import "../assets/styles/animateStyles.css";

//className={`opacity-section ${animationOpacityStyle}`}

const UseOpacityAnimation = () => {
  const animationOpacityStyle = "opacityBefore opacityAfter";

  const handleOpacity = () => {
    const windowHeight = window.innerHeight;

    // 対象の要素をクラス名で取得
    const sections = document.querySelectorAll(".opacity-section");

    sections.forEach((section, index) => {
      if (section) {
        const itemHeight = section.getBoundingClientRect().top;
        if (itemHeight < windowHeight * 0.8) {
          section.classList.add("opacityAfter");
          section.setAttribute("data-index", index); // デバッグや追跡用にindexを付与
        } else {
          section.classList.remove("opacityAfter");
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleOpacity);
    return () => {
      window.removeEventListener("scroll", handleOpacity);
    };
  }, []);

  return { animationOpacityStyle }; // クラス名を返すだけ
};

export default UseOpacityAnimation;
