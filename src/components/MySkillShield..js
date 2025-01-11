import { useState } from "react";
import { motion } from "framer-motion";
import ImagesRoute from "../assets/ImagesRoute";

// フィールドの詳細表示部分のコンポーネント
const FieldDetails = ({ filedTitle, libraryName, stackExplain }) => (
    <div className="w-full mx-auto space-y-[10px]">
        <div className="flex max-md:flex-col max-md:items-start">
            <p className="string-rg">{filedTitle}</p>
            <p className="string-sss text-[#CCCCCC] pt-[20px] max-md:pt-0">{libraryName}</p>
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
        <div
            className=" w-[800px] max-md:max-w-[500px] max-sm:max-w-[350px] px-[20px] bg-gradient-to-r from-[#000] to-[#545454] rounded-[50px] space-y-[10px]"        >
            <div className="flex justify-start items-center max-md:flex-col">
                <div className="flex-all-center">
                    <figure className="size-[150px]">
                        <img className="size-full" src={items.fieldImg} alt="stackicon" />
                    </figure>
                    <p className="string-sm ">{items.field}</p>
                </div>
                <div className="pl-[20px]">
                    <p className="text-[#CCCCCC] string-sss">{items.roughly}</p>
                    <p className="string-ss">{items.explain}</p>
                </div>
            </div>

            <motion.div
                className="w-[100%] space-y-[20px]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: openDetails ? 1 : 0, y: openDetails ? 0 : 10 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 1 }}
            >
                {openDetails &&
                    fieldArray.map((field, index) => (
                        <FieldDetails
                            key={index} // Reactのrender最適化のためにkeyを指定
                            filedTitle={field.filedTitle}
                            libraryName={field.libraryName}
                            stackExplain={field.stackExplain}
                        />
                    ))}
            </motion.div>

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
