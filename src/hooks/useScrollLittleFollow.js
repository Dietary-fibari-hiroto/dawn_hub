// hooks/useScrollLittleFollow.ts
import { useEffect } from "react";

const useScrollLittleFollow = () => {
  const handleScroll = () => {
    const elements = document.querySelectorAll(".tracked-element");

    const windowScrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    console.log("window.scrollY:", windowScrollY);
    console.log("windowHeight:", windowHeight);
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top + windowScrollY;
      const elementBottom =
        element.getBoundingClientRect().bottom + windowScrollY;

      if (
        windowScrollY >= elementTop - windowHeight &&
        windowScrollY <= elementBottom
      ) {
        const offset = Math.max(0, (windowScrollY - elementTop) * 0.05);
        element.style.transform = `translateY(${offset}px)`;
      } else {
        element.style.transform = `translateY(0px)`;
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    transitionStyle: { transition: "transform 3s ease-in-out" },
  };
};

export default useScrollLittleFollow;
