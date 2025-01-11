import { useEffect } from "react";
import "../assets/styles/animateStyles.css";

//className={`scroll-section ${animationStyle}`}

const useScrollAnimation = () => {
  const animationStyle = "fadeInBefore fadeInDown";

  const handleScroll = () => {
    const windowHeight = window.innerHeight;

    // クラス名で対象要素を取得
    const sections = document.querySelectorAll(".scroll-section");

    sections.forEach((section, index) => {
      if (section) {
        const itemHeight = section.getBoundingClientRect().top;
        if (itemHeight < windowHeight * 0.9) {
          section.classList.add("fadeInAfter");
          section.setAttribute("data-index", index); // 自動的にインデックスを付与
        } else {
          section.classList.remove("fadeInAfter");
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { animationStyle }; // sectionsRefは不要
};

export default useScrollAnimation;
