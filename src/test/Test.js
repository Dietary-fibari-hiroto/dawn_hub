import ImagesRoute from "../assets/ImagesRoute";
import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";

const animateGrovaluValue = 1;

function FlutteringCloth() {
  const [x, setX] = useState(0);
  const value = ScrollValue();
  useEffect(() => {
    setX((prev) => value);
  }, [value]);

  /*
  useEffect(() => {
    const interval = setInterval(() => {
      setX((prev) => prev + 0.05);
    }, 50);
    return () => clearInterval(interval); // クリーンアップ
  });
  */

  const meshRef = useRef();
  const { camera, size } = useThree();
  const [geometrySize, setGeometrySize] = useState([1, 1]);

  const texture = useLoader(TextureLoader, ImagesRoute.table_5356682_1920); // public/cloth.jpg に画像があると仮定
  useEffect(() => {
    if (!texture || !texture.image) return;

    const texWidth = texture.image.width;
    const texHeight = texture.image.height;
    const planeWidth = geometrySize[0];
    const planeHeight = geometrySize[1];

    const texRatio = texWidth / texHeight;
    const planeRatio = planeWidth / planeHeight;

    let repeatX = 1,
      repeatY = 1;

    if (texRatio > planeRatio) {
      // 画像が横長 → Y軸に合わせてXは切れる（cover的）
      repeatX = planeRatio / texRatio;
    } else {
      // 画像が縦長 → X軸に合わせてYは切れる
      repeatY = texRatio / planeRatio;
    }

    texture.repeat.set(repeatX, repeatY);

    texture.offset.set((1 - repeatX) / 2, (1 - repeatY) / 2);
    texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.center.set(0.5, 0); // 中心基準に回転や移動するために設定
    texture.needsUpdate = true;
  }, [texture, geometrySize]);

  useEffect(() => {
    const fov = camera.fov * (Math.PI / 180);
    const height = 2 * Math.tan(fov / 2.0) * camera.position.z;
    const width = height * (size.width / size.height);
    setGeometrySize([width, height]);
  }, [camera.fov, camera.position.z, size]);
  /*
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const mesh = meshRef.current;

    if (mesh) {
      const position = mesh.geometry.attributes.position;
      const count = position.count;

      for (let i = 0; i < count; i++) {
        const x = position.getX(i);
        const y = position.getY(i);
        const wave =
          Math.sin(x * 3 + t * 2) * 0.15 + Math.sin(y * 4 + t * 1.5) * 0.1;
        position.setZ(i, wave);
      }

      position.needsUpdate = true;
      mesh.geometry.computeVertexNormals();
    }
  });
  */
  useFrame(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const position = mesh.geometry.attributes.position;
    const count = position.count;

    for (let i = 0; i < count; i++) {
      const px = position.getX(i);
      const py = position.getY(i);

      const wave =
        value <= animateGrovaluValue + 1.5
          ? 0
          : Math.sin(px * 3 + x * 2) * 0.1 + Math.sin(py * 4 + x * 1.5) * 0.05;

      position.setZ(i, wave);
    }

    position.needsUpdate = true;
    mesh.geometry.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[geometrySize[0], geometrySize[1], 80, 80]} />
      {texture && (
        <meshStandardMaterial
          map={texture}
          side={THREE.DoubleSide}
          roughness={0.8}
        />
      )}
    </mesh>
  );
}

export function ScrollValue() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setValue((prev) => (window.scrollY - 500) / 150);
    };

    window.addEventListener("scroll", handleScroll);

    // クリーンアップ（コンポーネントがアンマウントされたとき）
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return value;
}

export default function Test() {
  const value = ScrollValue();
  const [a, setA] = useState(0);
  useEffect(() => {
    const newValue = value / 10 - 0.3;
    if (0 <= newValue && newValue <= 0.3) {
      setA(newValue);
    } else if (0 >= value) {
      setA(0);
    }
  }, [value]);
  return (
    <div className="relative h-[400vh] bg-black">
      <div
        className="w-[100vw] h-[100vh] sticky top-0 z-1 transition-all duration-300 ease-in-out"
        style={{ filter: `blur(${a * (animateGrovaluValue * 80)}px)` }}
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={2} />
          <FlutteringCloth />
        </Canvas>
      </div>
      <div
        className={`w-[100vw] h-[100vh] transition-all duration-300 ease-in-out sticky top-0 z-3 bg-black blur-[20px]`}
        style={{ opacity: `${a - 0.2}` }}
      ></div>
      <div className="absolute w-[100vw] top-0 z-5">
        <section className="w-full h-[100vh] flex items-center justify-evenly block">
          <div className="flex flex-col items-center justify-center KinutaShinStdN6K">
            <p>Patisserie</p>
            <p className="text-[75px]">DAWN</p>
          </div>
          <div className="kinuta-maruminfuji-stdn text-[25px]">
            <p>
              世界が静かに切り替わる
              <br />
              わたしがわたしに戻る
              <br />
              やわらかな空間で。
            </p>
          </div>
        </section>
        <section className="h-screen"></section>
      </div>
      <section className="w-[100vw] sticky top-0 z-5">
        <div className="w-full h-[100vh] flex items-center justify-evenly">
          <div className="flex flex-col items-center justify-center KinutaShinStdN6K">
            <p className="text-[20px]">because you deserve softness.</p>
          </div>
          <div className="kinuta-maruminfuji-stdn text-[18px]">
            <p>
              心がふっと軽くなる瞬間って、 <br />
              案外、甘いものの中にある気がする。
              <br />
              <br />
              ひとくち食べて、ふわっと笑顔になる。
              <br />
              目を閉じたら、風や光まで思い出せる。
              <br />
              <br /> 誰かと分け合っても、
              <br />
              ひとりでそっと味わってもいい。
              <br />
              <br /> 特別な日も、そうじゃない日も。
              <br /> その時間が、ちゃんと自分のものだって思えるから。
              <br />
              <br />
              今日のわたしに、ひとつだけご褒美を。
              <br /> Patisserie DAWMで、
              <br />
              ほんの少し、心を甘やかしてみませんか。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
