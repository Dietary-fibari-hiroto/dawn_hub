import { useState, useEffect } from "react";
import ImagesRoute from "../assets/ImagesRoute";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
const StackviewContainer = styled.div`
  display: flex;
  position: relative;
  height: 50vh;
  width: 100vw;
  .text-container {
    position: absolute;
    transform: translate(-50%, -50%);
    bottom: 0%;
    left: 50%;
    border: solid 1px white;
    width: 500px;
    height: 75px;
    background: #00000055;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StickviewContent = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: ${({ $position }) => $position}%;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  opacity: ${({ $opacity }) => $opacity};
  z-index: ${({ $zindex }) => $zindex};
  transition: all 1.5s ease;
`;
const imgValues = [
  {
    key: "js",
    src: ImagesRoute.js,
    explain: `Web開発やApiサーバーを作成するのに使用。
    Node.jsやReactが得意`,
  },
  {
    key: "java",
    src: ImagesRoute.java,
    explain: "授業やAndroid開発で使用。",
  },
  {
    key: "csharp",
    src: ImagesRoute.csharp,
    explain: `WindowsソフトやApiサーバーを作成するのに使用。
    ASP.NET Core,Win UIが得意,`,
  },
  {
    key: "cpp",
    src: ImagesRoute.cpp,
    explain: `IoT開発やOpenCVを扱うのに使用。
    Arduino/PlatformIOが扱える`,
  },
  {
    key: "go",
    src: ImagesRoute.go,
    explain: `Apiサーバーを作成するのに使用。
    Ginが扱える`,
  },
  {
    key: "html",
    src: ImagesRoute.html,
    explain: `Web作成に使用。
    タグの役割を理解しており、ネストの少ないコーディングが可能。得意`,
  },
  {
    key: "css",
    src: ImagesRoute.css,
    explain:
      "ほぼすべてのCSSプロパティを記憶、理解しており、想像した通りに要素を操作することが可能。得意",
  },
  {
    key: "python",
    src: ImagesRoute.python,
    explain:
      "授業で触っており、授業外ではWebゲームの自動化システムを作成した。",
  },
  {
    key: "php",
    src: ImagesRoute.php,
    explain: `Apiサーバーを作成するのに使用。
    Laravelが扱える
    `,
  },
  {
    key: "xml",
    src: ImagesRoute.xml,
    explain: `Androidアプリケーションを作成するのに使用。`,
  },
  {
    key: "xaml",
    src: ImagesRoute.xaml,
    explain: `Windowsアプリケーションを作成するのに使用。`,
  },
  {
    key: "mysql",
    src: ImagesRoute.mysql,
    explain: `DBを作成、管理するのに使用。
    小規模なプロジェクトであれば、拡張性や保守性を意識し、第三正規化まで可能。`,
  },
  {
    key: "ubuntu",
    src: ImagesRoute.ubuntu,
    explain: "portfolioサイトを運営するのに使用。",
  },
  {
    key: "arduino",
    src: ImagesRoute.arduino,
    explain: "IoTの授業で使用。",
  },
];
const motionAnimateConfig = {
  initial: { y: 100 },
  animate: { y: 0 },
  exit: { y: -100 },
  transition: { duration: 0.2 },
};
const StackSection2 = () => {
  //0~13
  const [processIndex, setProcessIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(0);
  const [viewPattern, setViewPattern] = useState(true);
  const [viewState, setViewState] = useState(false);
  const [positionValue, setPositionValue] = useState(50);
  const ChangePattern = (e) => {
    e.preventDefault();
    setViewPattern(!viewPattern);
  };

  useEffect(() => {
    setPositionValue(50 - processIndex * 10);
  }, [processIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProcessIndex((prev) => (prev >= 13 ? 0 : prev + 1));
      setViewState((prev) => !prev);
    }, [3000]);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex-all-center w-screen overflow-x-hidden overflow-y-hidden  space-y-[50px]">
      {viewPattern ? (
        <StackviewContainer>
          {imgValues.map((item, index) => (
            <StickviewContent
              $size={index === processIndex ? "250" : "100"}
              $opacity={index === processIndex ? "1" : "0.5"}
              $position={positionValue + 10 * index}
              $zindex={index === processIndex ? "3" : "1"}
              key={index}
              src={item.src}
              alt="test"
            />
          ))}
          <div className="text-container ">
            <AnimatePresence mode="wait">
              {viewState ? (
                <motion.div
                  {...motionAnimateConfig}
                  className="w-full flex items-center justify-around"
                >
                  <p className="string-rg">{imgValues[processIndex].key}</p>
                  <p className="string-ss break-words w-[350px]">
                    {imgValues[processIndex].explain}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="script-info"
                  {...motionAnimateConfig}
                  className="w-full flex items-center justify-around"
                >
                  <p className="string-rg">{imgValues[processIndex].key}</p>
                  <p className="string-ss break-words w-[350px]">
                    {imgValues[processIndex].explain}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </StackviewContainer>
      ) : (
        <div className="flex-all-center">
          <div className="px-[50px] flex flex-wrap justify-center gap-[100px] flex-1">
            {imgValues.map((item, index) => (
              <img
                className="size-[100px] hover:scale-[1.2] hover:opacity-[0.5] transition duration-100"
                key={index}
                src={item.src}
                alt="test"
                onMouseEnter={() => {
                  setHoverIndex(index);
                }}
              />
            ))}
          </div>
          <motion.div
            {...motionAnimateConfig}
            className="border border-white w-[500px] h-[75px] bg-[#00000055] rounded-[20px] overflow-hidden flex justify-around items-center"
          >
            <p className="string-rg">{imgValues[hoverIndex].key}</p>
            <p className="string-ss break-words w-[350px]">
              {imgValues[hoverIndex].explain}
            </p>
          </motion.div>
        </div>
      )}
      <button
        className="text-light string-sm pointer-up"
        onClick={ChangePattern}
      >
        {viewPattern ? "View all..." : "View Animation..."}
      </button>
    </div>
  );
};

export default StackSection2;
