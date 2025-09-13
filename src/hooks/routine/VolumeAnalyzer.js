// AudioAnalyzer.js
import React, { useEffect, useRef, useState } from "react";

const VolumeAnalyzer = () => {
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

    const draw = () => {
      requestAnimationFrame(draw);

      // 時間領域データを取得（波形）
      analyser.getByteTimeDomainData(dataArray);

      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.lineWidth = 2;
      ctx.strokeStyle = "#9B77FF";

      ctx.beginPath();

      const sliceWidth = canvas.width / dataArray.length;
      let x = 0;

      for (let i = 0; i < dataArray.length; i++) {
        const v = dataArray[i] / 128.0; // 中心128で正規化
        const y = (v * canvas.height) / 2;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
        x += sliceWidth;
      }

      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();
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

export default VolumeAnalyzer;
