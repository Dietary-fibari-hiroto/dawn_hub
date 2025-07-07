import { useState, useEffect } from "react";

const ShootingStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const addStar = () => {
      const id = Math.random().toString(36).substr(2, 9);
      const startX = Math.random() * 100; // 画面のランダムなX位置
      const startY = Math.random() * 100; // 画面のランダムなY位置
      const angle = Math.random() * 360; // ランダムな角度

      setStars((prev) => [...prev, { id, startX, startY, angle }]);

      // 一定時間後に削除
      setTimeout(() => {
        setStars((prev) => prev.filter((star) => star.id !== id));
      }, 2000);
    };

    const interval = setInterval(addStar, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {stars.map(({ id, startX, startY, angle }) => (
        <div
          key={id}
          className="absolute w-[2px] h-[100px] bg-white opacity-80 overflow-hidden"
          style={{
            top: `${startY}%`,
            left: `${startX}%`,
            transform: `rotate(${angle}deg)`,
            animation: "shooting 1.5s linear forwards",
          }}
        />
      ))}

      {/* アニメーションのスタイル */}
      <style>
        {`
          @keyframes shooting {
            0% {
              transform: translate(0, 0) rotate(var(--angle)) scale(1);
              opacity: 1;
              top: -100%;
            }
            100% {
              transform: translate(200px, 200px) rotate(var(--angle)) scale(0.5);
              opacity: 0;
              top: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ShootingStars;
