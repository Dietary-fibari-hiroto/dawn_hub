import React, {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";

// 外部から ref を使って制御できるように forwardRef を使う
const CircularTimer = forwardRef(
  ({ duration = 10, size = 120, strokeWidth = 10, onComplete }, ref) => {
    // 円の半径（strokeWidthぶんマージンを取る）
    const radius = (size - strokeWidth) / 2;
    // 円周（アニメーション制御に必要）
    const circumference = 2 * Math.PI * radius;

    // 経過時間（秒）
    const [elapsed, setElapsed] = useState(0);

    // setInterval を保持する用の ref（クリアするため）
    const timerRef = useRef(null);

    // タイマーが現在動いているかどうか
    const [isRunning, setIsRunning] = useState(false); // 実行中フラグ
    const [isPaused, setIsPaused] = useState(false); // 一時停止フラグ

    const startTimeRef = useRef(null); // 再開時の基準時間
    const accumulatedTimeRef = useRef(0); // 累積経過時間（秒）

    // 親コンポーネントから制御できるように start/reset メソッドを公開する
    useImperativeHandle(ref, () => ({
      // タイマー開始（または再スタート）
      start() {
        if (isRunning) return; // すでに動作中なら無視

        setIsRunning(true); // 実行中フラグを立てる
        setIsPaused(false); // 一時停止ではない状態に

        // start 時の基準時間（累積分はあとで足す）
        startTimeRef.current = Date.now();

        // タイマー処理
        timerRef.current = setInterval(() => {
          const now = Date.now();
          const diff =
            (now - startTimeRef.current) / 1000 + accumulatedTimeRef.current; // 累積時間を加算

          if (diff >= duration) {
            setElapsed(duration);
            clearInterval(timerRef.current);
            setIsRunning(false);
            accumulatedTimeRef.current = 0;
            if (onComplete) onComplete();
          } else {
            setElapsed(diff);
          }
        }, 100);
      },

      // タイマーをリセット
      reset() {
        clearInterval(timerRef.current);
        setElapsed(0);
        setIsRunning(false);
        setIsPaused(false);
        accumulatedTimeRef.current = 0;
      },

      // 一時停止
      pause() {
        if (!isRunning || isPaused) return; // 動いてなければ無視
        clearInterval(timerRef.current);
        accumulatedTimeRef.current +=
          (Date.now() - startTimeRef.current) / 1000;
        setIsPaused(true);
        setIsRunning(false);
      },

      // 一時停止から再開
      resume() {
        if (isRunning || !isPaused) return; // すでに動いてるか、止まってないなら無視

        setIsRunning(true);
        setIsPaused(false);
        startTimeRef.current = Date.now();

        timerRef.current = setInterval(() => {
          const now = Date.now();
          const diff =
            (now - startTimeRef.current) / 1000 + accumulatedTimeRef.current;

          if (diff >= duration) {
            setElapsed(duration);
            clearInterval(timerRef.current);
            setIsRunning(false);
            accumulatedTimeRef.current = 0;
          } else {
            setElapsed(diff);
          }
        }, 100);
      },
    })); // 秒 → 分:秒 形式に変換する関数
    const formatTime = (seconds) => {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      const paddedSecs = secs.toString().padStart(2, "0");
      return `${mins}:${paddedSecs}`;
    };

    // 進行率（0〜1）
    const progress = elapsed / duration;
    // ストロークの残りを調整（strokeDashoffsetが小さいほど進行している）
    const strokeDashoffset = circumference * (1 - progress);

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          className="absolute absolute-center z-[1]"
          width={size}
          height={size}
        >
          {/* グラデーションの定義 */}
          <defs>
            <linearGradient
              id="timer-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#25232b" /> {/* 開始色 */}
              <stop offset="100%" stopColor="#ffdd8d" /> {/* 終了色 */}
            </linearGradient>
          </defs>

          {/* 背景用の薄い円 */}
          <circle
            stroke="#eee" // 灰色の背景線
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
          />

          {/* プログレス円 */}
          <circle
            stroke="url(#timer-gradient)" // グラデーション適用
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference} // 円の全長
            strokeDashoffset={strokeDashoffset} // 残り長さに応じて変化
            strokeLinecap="round" // 線端を丸く
            style={{
              transition: "stroke-dashoffset 0.1s linear", // アニメーション効果
              transform: "rotate(-90deg)", // スタート位置を上に
              transformOrigin: "50% 50%", // 回転の中心を円の中央に
            }}
          />

          {/* 残り秒数を表示するテキスト */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle" // 中央揃え
            dominantBaseline="middle" // 縦も中央揃え
            fontSize="20"
            fill="#25232b"
          >
            {Math.ceil(duration - elapsed)} {/* 残り秒数（切り上げ） */}
          </text>
        </svg>
        <p className="absolute-center z-[3] string-sm">
          {formatTime(duration - elapsed)}
        </p>
      </div>
    );
  }
);

export default CircularTimer;
