import {
  AudioAnalyzer,
  PixcelAudioAnalyzer,
  VolumeAnalyzer,
} from "../../hooks/routine";
import GraphicEQ from "../../hooks/hobby/GraphicEQ";
import { RackButton, EffectIcon } from "../../components";

import ImagesRoute from "../../assets/ImagesRoute";
import { effectList } from "../../constants/audioEffectList";

const AudioRoutine = () => {
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
    <div className="flex-all-center kinuta-maruminfuji-stdn">
      <section className="my-[50px] bg-black w-[90vw] h-[400px] rounded-[50px] flex items-center justify-between">
        <div className="flex items-center h-full overflow-y-hidden">
          <div className="mt-[30px] mx-[50px] space-y-[10px] flex flex-col justify-start h-full">
            <RackButton img={ImagesRoute.menu_bar} />
            <RackButton img={ImagesRoute.home_icon} />
          </div>
          <div className="w-[35vw] h-[90%] bg-[#222222] pt-[10px] pl-[10px]">
            <p className="string-m">Routine List</p>
            <div className="mt-[10px] ml-[10px] flex flex-col items-start justify-start space-y-[15px]">
              {effectList.map((effect) => (
                <div
                  className="flex space-x-[30px] items-center string-sm"
                  key={effect.name}
                >
                  <EffectIcon img={effect.img} />
                  <p>{effect.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col justify-end items-center space-y-[80px] py-[20px]">
          <RackButton img={ImagesRoute.powersupply_icon} />
          <div className="flex items-center">
            <img className="h-[50px]" src={ImagesRoute.Audioroutine_icon} />
            <div className="mx-[50px] KinutaShinStdN48K text-center">
              <p className="string-lg tracking-[5px]">DAWN</p>
              <p className="string-s tracking-[10px]">Audio routine</p>
            </div>
          </div>
        </div>
      </section>
      <section className={"w-[80%] flex-all-center space-y-[10px]"}>
        <AudioAnalyzer />
        {/*<PixcelAudioAnalyzer />*/}
        <VolumeAnalyzer />

        <div className=" w-full flex items-center justify-between">
          {frequencys.map((frequency, index) => (
            <p className="text-[13px]" key={index}>
              {frequency}
            </p> // ここで配列の要素を表示
          ))}
        </div>
      </section>
      <section className="flex">
        <GraphicEQ />
        <GraphicEQ />
        <GraphicEQ />
        <GraphicEQ />
        <GraphicEQ />
        <GraphicEQ />
        <GraphicEQ />
      </section>
    </div>
  );
};

export default AudioRoutine;
