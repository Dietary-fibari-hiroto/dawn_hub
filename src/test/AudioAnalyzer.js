// AudioAnalyzer.js
import React, { useEffect, useRef, useState } from "react";

const AudioAnalyzer = () => {
  const canvasRef = useRef(null);
  const [audioContext, setAudioContext] = useState(null);
  const [analyser, setAnalyser] = useState(null);
  const [dataArray, setDataArray] = useState(null);
  const [source, setSource] = useState(null);

  useEffect(() => {
    const initAudio = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        const audioCtx = new (window.AudioContext ||
          window.webkitAudioContext)();
        const analyserNode = audioCtx.createAnalyser();
        analyserNode.fftSize = 64; // 小さめにして31バンドっぽく近づける
        const sourceNode = audioCtx.createMediaStreamSource(stream);

        sourceNode.connect(analyserNode);

        const bufferLength = analyserNode.frequencyBinCount;
        const data = new Uint8Array(bufferLength);

        setAudioContext(audioCtx);
        setAnalyser(analyserNode);
        setDataArray(data);
        setSource(sourceNode);
      } catch (err) {
        console.error("Error accessing microphone:", err);
      }
    };

    // initAudio();
  }, []);

  useEffect(() => {
    if (!analyser || !dataArray) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const thresholds = [
      { level: 30, color: "blue" },
      { level: 70, color: "green" },
      { level: 90, color: "yellow" },
      { level: 100, color: "red" },
    ];
    const draw = () => {
      requestAnimationFrame(draw);

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / dataArray.length) * 1;
      let x = 0;

      /*
      let volume = 0;
      for (let i = 0; i < dataArray.length; i++) {
        volume = Math.max(volume, dataArray[i]);
      }
      const colorValue = Math.min(255, (volume / 255) * 255);
      const color = `rgb(${colorValue}, 50, 50)`; // 音量に応じて色を変更
*/
      for (let i = 0; i < dataArray.length; i++) {
        const barHeight = dataArray[i];
        // 色の範囲を決定（青→緑→黄→赤）

        let color;
        if (barHeight <= 90) {
          color = "rgb(0, 0, 255)"; // 青
        } else if (barHeight <= 210) {
          color = "rgb(0, 255, 0)"; // 緑
        } else if (barHeight <= 250) {
          color = "rgb(255, 255, 0)"; // 黄色
        } else {
          color = "rgb(255, 0, 0)"; // 赤
        }

        ctx.fillStyle = color;
        ctx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);
        x += barWidth + 1;
      }
    };

    draw();
  }, [analyser, dataArray]);

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#000",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "white" }}>🎶 Audio Analyzer 🎶</h1>
      <canvas
        ref={canvasRef}
        width="1000"
        height="400"
        style={{ backgroundColor: "#222" }}
      />
    </div>
  );
};

export default AudioAnalyzer;
