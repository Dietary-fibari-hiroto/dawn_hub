import { useEffect, useState } from "react";

const useInOrderAnimation = (startPercent = 0, endPercent = 100) => {
  const [currentAnimation, setCurrentAnimation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.documentElement; // ページ全体

      const scrollTop = window.scrollY;
      const elementHeight = element.scrollHeight - window.innerHeight;

      const startOffset = (startPercent / 100) * elementHeight;
      const endOffset = (endPercent / 100) * elementHeight;

      const scrollProgress = Math.min(
        Math.max((scrollTop - startOffset) / (endOffset - startOffset), 0),
        1
      );

      if (scrollProgress <= 0.33) {
        setCurrentAnimation(0);
      } else if (scrollProgress <= 0.66) {
        setCurrentAnimation(1);
      } else {
        setCurrentAnimation(2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [startPercent, endPercent]);

  return currentAnimation;
};

export default useInOrderAnimation;
