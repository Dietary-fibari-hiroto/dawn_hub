import { useState, useEffect } from "react";

const Testhook = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const addStar = () => {
      const id = Math.random().toString(36).substr(2, 9);
      const startX = Math.random() * 100; // 画面のランダムなX位置
      const startY = Math.random() * 100; // 画面のランダムなY位置
      const angle = Math.random() * 360; // ランダムな角度（0~360度）
      const distance = 300; // 移動する距離

      // 角度に沿った移動量を計算（ラジアンに変換して計算）
      const radian = (angle * Math.PI) / 180;
      const deltaX = Math.cos(radian) * distance;
      const deltaY = Math.sin(radian) * distance;

      setStars((prev) => [
        ...prev,
        { id, startX, startY, deltaX, deltaY, angle },
      ]);

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
      {stars.map(({ id, startX, startY, deltaX, deltaY, angle }) => (
        <div
          key={id}
          className="absolute w-[2px] h-[80px] bg-white opacity-80"
          style={{
            top: `${startY}%`,
            left: `${startX}%`,
            transform: `rotate(${angle}deg)`,
            animation: `shooting 1.5s linear forwards`,
            "--deltaX": `${deltaX}px`,
            "--deltaY": `${deltaY}px`,
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
            }
            100% {
              transform: translate(var(--deltaX), var(--deltaY)) rotate(var(--angle)) scale(0.5);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Testhook;
