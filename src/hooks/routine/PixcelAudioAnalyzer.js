// AudioAnalyzer.js
import React, { useEffect, useRef, useState } from "react";

const PixcelAudioAnalyzer = () => {
  const canvasRef = useRef(null);
  const [audioContext, setAudioContext] = useState(null);
  const [analyser, setAnalyser] = useState(null);
  const [dataArray, setDataArray] = useState(null);

  useEffect(() => {
    const initAudio = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        const audioCtx = new (window.AudioContext ||
          window.webkitAudioContext)();
        const analyserNode = audioCtx.createAnalyser();
        analyserNode.fftSize = 256; // バーの数が増える
        const sourceNode = audioCtx.createMediaStreamSource(stream);

        sourceNode.connect(analyserNode);

        const bufferLength = analyserNode.frequencyBinCount;
        const data = new Uint8Array(bufferLength);

        setAudioContext(audioCtx);
        setAnalyser(analyserNode);
        setDataArray(data);
      } catch (err) {
        console.error("Error accessing microphone:", err);
      }
    };

    initAudio();
  }, []);

  useEffect(() => {
    if (!analyser || !dataArray) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const LEVELS = 12;
    const colors = [
      "blue", // 0-2
      "#00d5ff",
      "#00d5ff",
      "#00d5ff", // 3-5
      "#00d5ff",
      "#00d5ff",
      "#00d5ff", // 6-8
      "#00d5ff",
      "yellow",
      "yellow", // 9-1
      "yellow",
      "red", // 12-13
    ];

    const draw = () => {
      requestAnimationFrame(draw);

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const barWidth = 5;
      const barGap = 1;
      const totalBars = Math.floor(
        (canvas.width + barGap) / (barWidth + barGap)
      );

      const barHeightUnit = canvas.height / LEVELS;

      for (let i = 0; i < totalBars; i++) {
        const value = dataArray[i] || 0; // i番目の周波数成分
        const normalizedValue = Math.min(value / 255, 1); // 0〜1に正規化
        const currentLevel = Math.floor(normalizedValue * (LEVELS - 1));

        for (let level = 0; level <= currentLevel; level++) {
          ctx.fillStyle = colors[level];
          ctx.fillRect(
            i * (barWidth + barGap),
            canvas.height - (level + 1) * barHeightUnit,
            barWidth,
            barHeightUnit
          );
        }
      }
    };

    draw();
  }, [analyser, dataArray]);

  return (
    <canvas
      className="w-full"
      ref={canvasRef}
      width="600"
      height="80"
      style={{ backgroundColor: "#222" }}
    />
  );
};

export default PixcelAudioAnalyzer;
