import { motion } from "framer-motion"
import { useState, useEffect } from "react";
import ImagesRoute from "../assets/ImagesRoute"


const images = [
    ImagesRoute.dawn_cat_ani,
    ImagesRoute.dawn_cat_ani2,
    ImagesRoute.dawn_cat_ani,
    ImagesRoute.dawn_cat_ani2,
];

const LoadingScreen = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [switchCount, setSwitchCount] = useState(0); // 画像が切り替わった回数
    const [showMessage, setShowMessage] = useState(false); // 3秒後に表示するメッセージの状態
    useEffect(() => {
        // 画像が3回切り替わったら停止
        if (switchCount >= 4) {
            return;
        }
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            setSwitchCount((prevCount) => prevCount + 1); // 切り替え回数を更新
        }, 200); // 1秒ごとに切り替え

        return () => clearInterval(interval); // クリーンアップ
    }, [switchCount]); // switchCountが変わるたびに再実行


    useEffect(() => {
        // 3秒後にメッセージを表示する
        const timeout = setTimeout(() => {
            setShowMessage(true);
        }, 1000); // 3秒後に実行

        return () => clearTimeout(timeout); // クリーンアップ
    }, []); // コンポーネントの最初のレンダリング後に1回実行
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex justify-center items-center bg-black z-50"
        >
            <motion.div
                className="flex-all-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <img
                    src={images[currentImageIndex]}
                    alt={`Image ${currentImageIndex + 1}`}
                    className="size-[100px] object-contain rounded-lg shadow-lg"
                />
                <div className="h-[100px]">
                    {showMessage && (
                        <motion.div
                            className="flex-all-center text-white h-[100px]"
                            initial={{ filter: "blur(10px) saturate(0%)", opacity: 0 }}
                            animate={{ filter: "blur(0px) saturate(100%)", opacity: 1 }}
                            exit={{ filter: "blur(10px) saturate(0%)", opacity: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <p className="string-lg palast-variable-italic">DAWN</p>
                            <p className="string-sss palast-variable-italic tracking-[5px]">portfolio</p>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    )
}

export default LoadingScreen