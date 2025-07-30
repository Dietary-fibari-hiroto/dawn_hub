import { easeInOut, transform } from "framer-motion";

export const delayedFadeSlideIn = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: "0%", opacity: 1 },
  exit: { y: "100%", opacity: 0 },
  transition: { delay: 1, duration: 0.5, ease: "easeInOut" },
};

export const blurFadeIn = {
  initial: {
    filter: "blur(100px) saturate(0%)",
    transform: "scale(1.5)",
    opacity: 0,
  },
  animate: {
    filter: "blur(0px) saturate(100%)",
    transform: "scale(1)",
    opacity: 1,
  },
  transition: { duration: 1 },
};

export const wander_product_fade = {
  initial: {
    filter: "blur(100px) saturate(0%) brightness(250%)",
    opacity: 0,
  },
  animate: {
    filter: "blur(0px) saturate(100%) brightness(100%)",
    opacity: 1,
  },
  exit: {
    filter: "blur(100px) saturate(0%) brightness(250%)",
    opacity: 0,
  },
  transition: { duration: 2, ease: "easeInOut" },
};
