import { useState, useEffect } from "react";
import ImagesRoute from "../../assets/ImagesRoute";

const ChronoDawn = () => {
  const [time, setTime] = useState({ hour: "0", minute: "0" });
  const [colonState, setColonState] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime({
        hour: now.getHours().toString().padStart(2, "0"),
        minute: now.getMinutes().toString().padStart(2, "0"),
      });
    };

    updateTime();

    const interval = setInterval(updateTime, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setColonState((prev) => !prev);
      console.log(colonState);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section-frame bg-black ">
      <div
        className="absolute z-[1] section-frame opacity-[80%]"
        style={{
          backgroundImage: `url(${ImagesRoute.IMG_1417})`,
          backgroundPosition: `center`,
          backgroundSize: "cover",
        }}
      ></div>

      <div className=" absolute z-[3] w-full h-full max-sm:flex-col flex px-[50px]">
        <div className="flex-1 flex-all-center">
          {" "}
          <p className=" KinutaShinStdN6K w-[350px] h-[200px] flex  items-center justify-center string-big border rounded-[50px]">
            <p>{time.hour}</p>
            <p className="w-[30px]">{colonState ? ":" : " "}</p>
            <p>{time.minute}</p>
          </p>
        </div>

        <div className="chronodawn-text KinutaShinStdN48K flex-all-center flex-1">
          <p className="shootingstar-underline pl-[40px] string-big flex-all-center tracking-[20px]">
            DAWN
          </p>
          <p className="tracking-[5cpx]">Chronodawn</p>
        </div>

        <div className=" chronodawn-text flex-1 flex-all-center KinutaShinStdN48K tracking-[3px] leading-[50px]">
          <p className="max-w-[200px] string-sm">
            “ But you know, happiness can be found even in the darkest of times,
            if one only remembers to turn on the light. ”
          </p>
        </div>
      </div>
    </div>
  );
};
export default ChronoDawn;
