import { useState, useEffect } from "react";

/**
 * スクロールに応じて sticky 要素の opacity を制御するカスタムフック。
 *
 * @param {number} [startPercent=0] - opacity の変化が開始するスクロール量（要素高さの%）。
 * @param {number} [endPercent=200] - opacity が 1 に達するスクロール量（要素高さの%）。
 * @returns {Object} - `style` オブジェクトを返し、コンポーネントに適用可能。
 *
 *   使用方法: const { style } = useStickyOpacity("sticky-target", 20, 50);
 */
const useInOrderAnimation = (startPercent = 0, endPercent = 100) => {
  const [currentAnimation, setCurrentAnimation] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      // 指定されたクラス名のエレメントを取得
      const element = document.querySelector(`.parent`);

      // 要素が存在しない場合は何もしない
      if (!element) return;

      // 要素の位置やサイズに関する情報を取得
      const rect = element.getBoundingClientRect();

      // 現在のページのY軸方向のスクロール量を取得

      // 要素の高さを取得
      const elementHeight = rect.height;

      // startPercent と endPercent を要素の高さの割合で変換
      const startOffset = (startPercent / 100) * elementHeight;
      const endOffset = (endPercent / 100) * elementHeight;

      // 要素内のスクロール位置の割合（%）を計算
      const scrollProgress = Math.min(
        Math.max((-rect.top - startOffset) / (endOffset - startOffset), 0),
        1
      );

      if (0 <= scrollProgress && scrollProgress <= 0.2) setCurrentAnimation(0);

      if (0.2 <= scrollProgress && scrollProgress <= 0.4)
        setCurrentAnimation(1);
      if (0.4 <= scrollProgress && scrollProgress <= 0.6)
        setCurrentAnimation(2);
      if (0.6 <= scrollProgress && scrollProgress <= 1) setCurrentAnimation(3);
      // 進行具合に応じて opacity を設定
    };

    // スクロールイベントのリスナーを追加
    window.addEventListener("scroll", handleScroll);
    return () => {
      // クリーンアップ
      window.removeEventListener("scroll", handleScroll);
    };
  }, [startPercent, endPercent, currentAnimation]);
  return currentAnimation;
};

export default useInOrderAnimation;
