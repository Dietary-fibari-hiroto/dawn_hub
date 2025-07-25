import { useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import ImagesRoute from "../assets/ImagesRoute";

// フィールドの詳細表示部分のコンポーネント
const FieldDetails = ({ filedTitle, libraryName, stackExplain }) => (
  <div className="w-full mx-auto space-y-[10px]">
    <div className="flex max-md:flex-col max-md:items-start">
      <p className="string-rg">{filedTitle}</p>
      <p className="string-sss text-[#CCCCCC] pt-[20px] max-md:pt-0">
        {libraryName}
      </p>
    </div>
    <p className="string-ss mx-[20px]">{stackExplain}</p>
  </div>
);

const MySkillShield = ({ items, fieldArray }) => {
  const [openDetails, setOpenDetails] = useState(false);

  const handleDetailOpen = () => {
    setOpenDetails((prevState) => !prevState);
  };

  return (
    <div className=" w-[800px] max-md:max-w-[500px]  px-[20px]  max-sm:w-full rounded-[50px] space-y-[10px] transition-[height] duration-[300ms]">
      <div className="flex justify-start items-center max-md:flex-col">
        <div className="flex-all-center">
          <figure className="size-[150px]">
            <img
              className="size-full opacity-down"
              src={items.fieldImg}
              alt="stackicon"
            />
          </figure>
          <p className="string-sm ">{items.field}</p>
        </div>
        <div className="pl-[20px]">
          <p className="text-[#CCCCCC] string-sss">{items.roughly}</p>
          <p className="string-ss">{items.explain}</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {openDetails &&
          fieldArray.map((field, index) => (
            <motion.div
              key={index}
              className="w-[100%] space-y-[20px]"
              initial={{ opacity: 0, y: 10, height: 0 }}
              animate={{
                opacity: openDetails ? 1 : 0,
                y: openDetails ? 0 : 10,
                height: "auto",
                transition: {
                  opacity: { duration: 1, delay: 1 },
                  y: { duration: 1, delay: 1 },
                  height: { duration: 1, delay: 0 },
                },
              }}
              exit={{
                opacity: 0,
                y: 10,
                height: 0,
                transition: {
                  opacity: { delay: 0, duration: 1 },
                  y: { delay: 0, duration: 1 },
                  height: { delay: 1, duration: 1 },
                },
              }}
              transition={{
                ease: "easeInOut", // ← ここ！
              }}
            >
              <FieldDetails
                filedTitle={field.filedTitle}
                libraryName={field.libraryName}
                stackExplain={field.stackExplain}
              />
            </motion.div>
          ))}
      </AnimatePresence>

      <button onClick={handleDetailOpen} className="w-full flex-all-center">
        <img
          className={`${openDetails ? "scale-y-[-1]" : ""} size-[25px]`}
          src={ImagesRoute.openButton}
          alt="openButton"
        />
      </button>
    </div>
  );
};

export default MySkillShield;
