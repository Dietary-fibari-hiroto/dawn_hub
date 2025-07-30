import { useEffect, useState } from "react";

const useInElementScrollAnimation = (className) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.querySelector(`.${className}`);
      if (!el) return;

      const elTop = el.offsetTop;
      const elHeight = el.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // ビューポートの中央を基準にスクロール進捗を計算
      const scrollMiddle = scrollY + windowHeight / 2;
      const progress = (scrollMiddle - elTop) / elHeight;

      const clamped = Math.max(0, Math.min(1, progress));

      if (clamped <= 0.33) setStep(0);
      else if (clamped <= 0.66) setStep(1);
      else setStep(2);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初回

    return () => window.removeEventListener("scroll", handleScroll);
  }, [className]);

  return step;
};

export default useInElementScrollAnimation;
