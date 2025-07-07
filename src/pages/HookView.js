import AudioAnalyzer from "../hooks/AudioAnalyzer";
import GraphicEQ from "../hooks/hobby/GraphicEQ";

const HookView = () => {
  const frequencys = [
    "20Hz",
    "25Hz",
    "32Hz",
    "41Hz",
    "53Hz",
    "67Hz",
    "84Hz",
    "107Hz",
    "136Hz",
    "174Hz",
    "222Hz",
    "281Hz",
    "355Hz",
    "446Hz",
    "559Hz",
    "699Hz",
    "876Hz",
    "1kHz",
    "1.3kHz",
    "1.7kHz",
    "2.1kHz",
    "2.6kHz",
    "3.4kHz",
    "4.2kHz",
    "5.4kHz",
    "6.8kHz",
    "8.7kHz",
    "11kHz",
    "14kHz",
    "17kHz",
    "22kHz",
  ];

  return (
    <div className="flex-all-center section-frame kinuta-maruminfuji-stdn space-y-[100px]">
      <section className={"w-[80%] flex-all-center"}>
        <AudioAnalyzer />
        <div className=" w-full flex items-center justify-between">
          {frequencys.map((frequency, index) => (
            <p className="text-[13px]" key={index}>
              {frequency}
            </p> // ここで配列の要素を表示
          ))}
        </div>
      </section>
      <section>
        <GraphicEQ />
      </section>
    </div>
  );
};
export default HookView;
