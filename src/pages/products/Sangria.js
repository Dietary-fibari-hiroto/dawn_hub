import { useEffect } from "react";
import ImagesRoute from "../../assets/ImagesRoute";
import { motion, AnimatePresence } from "framer-motion";

import useInElementScrollAnimation from "../../hooks/event/useInElementScrollAnimation";
import UseOpacityAnimation, {
  useOpacityAnimation2,
} from "../../hooks/UseOpacityAnimation";
import {
  wander_product_fade,
  delayedFadeSlideIn,
} from "../../constants/motionConfig";
import { transition } from "three/examples/jsm/tsl/display/TransitionNode.js";

const motionSetFade = {
  initial: {
    filter: "blur(100px) brightness(250%)",
    opacity: 0,
  },
  animate: {
    filter: "blur(0px) brightness(100%)",
    opacity: 1,
  },
  transition: { duration: 2, ease: "easeInOut", delay: 1 },
};
const section_fade = {
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
  transition: { duration: 1, ease: "easeInOut" },
};

const Sangria = () => {
  const step = useInElementScrollAnimation("step-target");
  const { animationOpacityStyle } = UseOpacityAnimation();
  useEffect(() => {
    console.log(step);
  }, [step]);

  return (
    <div className="relative">
      <div
        className="fixed section-frame top-0 left-0 z-[-1]"
        style={{
          background: `url(${ImagesRoute.IMG_7112})`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
        }}
      />

      <section className="section-frame flex max-md:flex-col items-center  justify-around KinutaShinStdN6K tracking-[10px]">
        <div className="text-center">
          <motion.p {...motionSetFade} className="string-hundred">
            Sangria
          </motion.p>
          <motion.p {...motionSetFade} className="string-m">
            Astrolume
          </motion.p>
        </div>
        <motion.p {...motionSetFade} className="string-big-plus">
          DAWN
        </motion.p>
      </section>
      <section className="section-frame">test</section>
    </div>
  );
};

export default Sangria;
