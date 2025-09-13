// AudioAnalyzer.js
import React, { useEffect, useRef, useState } from "react";

const AudioAnalyzer = () => {
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

    // 線形補間で色を作る関数
    const lerpColor = (color1, color2, t) => {
      const c1 = parseInt(color1.slice(1), 16);
      const c2 = parseInt(color2.slice(1), 16);
      const r1 = (c1 >> 16) & 0xff;
      const g1 = (c1 >> 8) & 0xff;
      const b1 = c1 & 0xff;
      const r2 = (c2 >> 16) & 0xff;
      const g2 = (c2 >> 8) & 0xff;
      const b2 = c2 & 0xff;
      const r = Math.round(r1 + (r2 - r1) * t);
      const g = Math.round(g1 + (g2 - g1) * t);
      const b = Math.round(b1 + (b2 - b1) * t);
      return `rgb(${r},${g},${b})`;
    };

    const draw = () => {
      requestAnimationFrame(draw);

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const sliceWidth = canvas.width / dataArray.length;
      let x = 0;

      for (let i = 0; i < dataArray.length - 1; i++) {
        const value1 = dataArray[i];
        const value2 = dataArray[i + 1];

        const y1 = canvas.height - (value1 / 255) * canvas.height;
        const y2 = canvas.height - (value2 / 255) * canvas.height;

        // 音量に応じて色を補間
        const color1 = lerpColor("#9B77FF", "#FFBC00", value1 / 255);
        const color2 = lerpColor("#9B77FF", "#FFBC00", value2 / 255);

        ctx.beginPath();
        ctx.moveTo(x, y1);
        ctx.strokeStyle = color1;
        ctx.lineTo(x + sliceWidth, y2);
        ctx.stroke();

        x += sliceWidth;
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

export default AudioAnalyzer;
