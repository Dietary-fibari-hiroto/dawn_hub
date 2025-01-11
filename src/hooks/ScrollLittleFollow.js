import { useEffect } from "react";

/**
 * クラス指定方法:
className="tracked-element" style={transitionStyle}
 */
const ScrollLittleFollow = () => {
  const handleScroll = () => {
    const elements = document.querySelectorAll(".tracked-element");
    const windowScrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top + windowScrollY;
      const elementBottom = element.getBoundingClientRect().bottom + windowScrollY;

      // 要素がビューポート内にある場合にのみY座標を計算
      if (windowScrollY >= elementTop - windowHeight && windowScrollY <= elementBottom) {
        const offset = Math.max(0, (windowScrollY - elementTop) * 0.05);
        element.style.transform = `translateY(${offset}px)`;
      } else {
        element.style.transform = `translateY(0px)`;
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // 初回レンダリング時のみリスナーを追加

  return { transitionStyle: { transition: "transform 1s ease-in-out" } };
};

export default ScrollLittleFollow;
