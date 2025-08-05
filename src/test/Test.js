import {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import CircularTimer from "../components/functions/CircularTimer";
import { AnimatePresence, motion } from "framer-motion";

const Test = () => {
  // ref を作成（CircularTimerを操作する用）
  const timerRef = useRef();

  const [timerStates, setTimerStates] = useState({
    workDuration: 25 * 60,
    restDuration: 5 * 60,
    round: 5,
    isWork: false,
  });

  const handleIntervalComplete = () => {
    const nextIsWork = !timerStates.isWork;
    setTimerStates((prev) => ({
      ...prev,
      isWork: nextIsWork,
      round: prev.round - (nextIsWork ? 1 : 0),
    }));
    if (timerStates.round <= 0) return timerRef.current.reset;
    timerRef.current.reset();
    setTimeout(() => {
      timerRef.current.start();
    }, 300);
  };

  return (
    <div className="section-frame relative flex flex-col items-center justify-center gap-4">
      {/* タイマー本体（15秒のタイマー） */}
      <AnimatePresence mode="wait">
        {false && (
          <motion.div className="absolute top-0 left-0 section-frame flex-all-center "></motion.div>
        )}{" "}
      </AnimatePresence>
      <CircularTimer
        onComplete={handleIntervalComplete}
        ref={timerRef}
        size={600}
        duration={
          timerStates.isWork
            ? timerStates.workDuration
            : timerStates.restDuration
        }
      />
      <div className="flex items-center space-x-[10px]">
        {/* スタートボタン */}

        <button
          className="execution-button"
          onClick={() => timerRef.current.start()}
        >
          ▶ Start
        </button>
        <button
          className="execution-button"
          onClick={() => timerRef.current.pause()}
        >
          ⏸ Pause
        </button>
        <button
          className="execution-button"
          onClick={() => timerRef.current.resume()}
        >
          ⏯ Resume
        </button>
        <button
          className="execution-button"
          onClick={() => timerRef.current.reset()}
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
};

export default Test;
