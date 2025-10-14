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
    <div>
      <motion.section
        {...wander_product_fade}
        className="section-frame flex max-md:flex-col items-center  justify-around KinutaShinStdN6K tracking-[10px]"
        style={{
          background: `url(${ImagesRoute.sangria_phooto_8})`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
        }}
      >
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
      </motion.section>
      <section className="section-frame flex-all-center">
        <p className={`string-s opacity-section ${animationOpacityStyle}`}>
          ワインボトルが光のインテリアに
        </p>
      </section>
      <section className="w-full h-[300lvh] step-target relative">
        <AnimatePresence mode="wait">
          {step >= 1 && (
            <motion.figure
              key="1"
              {...section_fade}
              className="w-full h-1/3 sticky top-0 left-0 z-[1]"
            >
              <img
                className="w-full h-full"
                src={ImagesRoute.sangria_phooto_1}
              />
            </motion.figure>
          )}
          {step >= 2 && (
            <motion.div
              key="2"
              {...section_fade}
              className="flex-all-center text-center w-full h-1/3 sticky top-0 left-0 z-[2] leading-[36px] string-s px-[10px]"
            >
              <p>
                Dawn-Sangriaは、飲み終えたワインボトルを“灯り”へと生まれ変わらせるライトインテリアです。
                <br />
                ボトルに差し込むだけで、柔らかな光が広がり、空間を上品に演出します。
                <br />
                スマホアプリ「Dawn-rumos」から操作でき、光の色や明るさを自由に調整可能。
                <br />
                リビングを落ち着いた空間にしたり、ディナーの雰囲気を華やかにしたりと、シーンに合わせた演出が簡単に楽しめます。
                <br />
                名前の由来は「ワインカクテルのサングリア」と「夜明け（Dawn）」。
                <br />
                深みあるワインの色合いに、朝の光を差し込むイメージを込めています。
                <br />
                Dawn-Sangriaは、インテリアとしての美しさと実用性を両立させた、ちょっと特別なライトです。
                <br />
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <section className="relative w-full h-[200lvh]">
        <img
          className={`absolute top-[10%] left-[10%] w-[clamp(250px,30vw,400px)]  opacity-section ${animationOpacityStyle}`}
          src={ImagesRoute.sangria_phooto_5}
        />
        <img
          className={`absolute top-[40%] right-[10%] w-[clamp(250px,30vw,400px)]  opacity-section ${animationOpacityStyle}`}
          src={ImagesRoute.sangria_phooto_6}
        />{" "}
        <img
          className={`absolute bottom-[10%] left-[40%] w-[clamp(250px,30vw,400px)]  opacity-section ${animationOpacityStyle}`}
          src={ImagesRoute.sangria_phooto_7}
        />
      </section>
      <iframe
        className="section-frame"
        src="https://www.youtube.com/embed/QCjvEgtNMpo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <section className="section-frame flex-all-center">
        <p>coming soom...</p>
      </section>
    </div>
  );
};

export default Sangria;
