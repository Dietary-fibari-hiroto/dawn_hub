import HomeVideo from "../../assets/videos/task_video.mp4";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  blurFadeIn,
  delayedFadeSlideIn,
  wander_product_fade,
} from "../../constants/motionConfig";
import ImagesRoute from "../../assets/ImagesRoute";
import { useScrollParallax } from "../../hooks/animation/useScrollParallax";

import useInElementScrollAnimation from "../../hooks/event/useInElementScrollAnimation";

const SectionTitle = (props) => {
  return (
    <div className={`p-[100px] ${props.className}`}>
      <div className="flex items-center justify-start tracking-[3px]">
        <p className="string-md">{props.index}</p>
        <div className="space-y-[-10px] flex items-start justify-center flex-col">
          <p className="string-lg">{props.title}</p>
          <p className="string-m">{props.english}</p>
        </div>
      </div>
    </div>
  );
};
const MiniSectionTitle = (props) => {
  return (
    <div
      className={`${props.className} flex items-center justify-start tracking-[3px]`}
    >
      <p className="string-m">{props.index}</p>
      <div className="space-y-[-10px] flex items-start justify-center flex-col">
        <p className="string-rg">{props.title}</p>
        <p className="string-sm">{props.english}</p>
      </div>
    </div>
  );
};
const TopicLabel = () => {};

const sintilyokuOb = [
  {
    state: true,
    title: "要件定義",
    explain: "実験背景、取得して得る情報、着地地点が明確にできた。",
  },
  {
    state: true,
    title: "DB設計",
    explain: "データベース設計と正規化、sql文作成",
  },
  {
    state: true,
    title: "デザイン",
    explain: "三種類のWebサイトのデザイン",
  },
  {
    state: true,
    title: "API実装",
    explain: "バックエンド構築実装",
  },
  {
    state: true,
    title: "フロント実装",
    explain: "クライアント側のUI実装",
  },
  {
    state: true,
    title: "結合",
    explain: "クライアント側のUI実装",
  },
  {
    state: false,
    title: "実験",
    explain: "実際にユーザーに触ってもらってデータを取る。",
  },
  {
    state: false,
    title: "分析",
    explain: "Excel等で分析、評価",
  },
];

const Dawn_wander = () => {
  const step = useInElementScrollAnimation("my-target");

  useEffect(() => {
    console.log(step);
  }, [step]);

  useScrollParallax();
  useScrollParallax(".tracked-element2", 0.1);
  useScrollParallax(".tracked-element3", 0.3);
  const ref = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!ref.current) return;

      // glitchクラスを一時的に付けて消す
      ref.current.classList.add("glitching");
      setTimeout(() => {
        ref.current?.classList.remove("glitching");
      }, 300); // アニメーション時間と同じ
    }, Math.random() * 3000 + 3000); // 3〜6秒おきに発動

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="kinuta-maruminfuji-stdn bg-black">
      <section className="relative section-frame">
        {" "}
        <video
          muted
          loop
          autoPlay
          className="absolute top-0 left-0 section-frame z-[1]"
          src={HomeVideo}
        />
        <div className="section-frame absolute top-0 left-0 z-[3] flex items-center justify-evenly">
          <div className="floating  flex-all-center flex-col tracking-[15px]">
            <motion.p
              {...blurFadeIn}
              className="KinutaShinStdN6K string-big-plus"
            >
              DAWN
            </motion.p>
            <motion.p {...blurFadeIn} className="KinutaShinStdN48K string-rg">
              Wander
            </motion.p>
          </div>
          <div className="glitch-wrapper relative w-[651px] h-[151px] flex-all-center">
            <div className="overflow-hidden absolute top-0 left-0 string-m">
              <motion.p {...delayedFadeSlideIn} transition={{ delay: 1 }}>
                アニメーションによる
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.p
                {...delayedFadeSlideIn}
                transition={{ delay: 2 }}
                ref={ref}
                className="string-lg glitch-text"
              >
                UX変化分析アプリ
              </motion.p>
            </div>
            <div className="absolute bottom-0 right-0 string-m">
              <motion.p {...delayedFadeSlideIn} transition={{ delay: 1.5 }}>
                React + ASP.NET
              </motion.p>
            </div>
          </div>
        </div>
        <div className="string-sm text-center absolute bottom-[5%] left-1/2 translate-x-[-50%] z-[5]">
          <p className="string-sm">SK3A 小野寺広登</p>

          <p className="string-ss">前期最終発表プレゼン資料</p>
        </div>
        <button className="string-sm absolute bottom-[5%] left-[5%] bg-[#555555] w-[350px] h-[50px] z-[5]">
          資料UIが崩れている方はこちら
        </button>
      </section>
      <section className="relative w-screen h-[200lvh]">
        <div className="sticky top-0 section-frame z-[8] flex items-end">
          <div className="h-[200px] w-screen bg-black" />
        </div>
        <SectionTitle
          className="absolute top-0 left-0"
          index="00"
          title="もくじ"
          english="table of contents"
        />
        <MiniSectionTitle
          index="01"
          title="研究テーマ"
          english="Research Theme"
          className="absolute top-[23%] left-[25%] z-[10] opacity-[0.5]"
        />
        <MiniSectionTitle
          index="02"
          title="技術スタック"
          english="Tech Stack"
          className="absolute top-[31%] left-[48%] z-[10] opacity-[0.5]"
        />{" "}
        <MiniSectionTitle
          index="03"
          title="アーキテクチャ"
          english="Architecture"
          className="absolute top-[38%] left-[58%] z-[10] opacity-[0.5]"
        />{" "}
        <MiniSectionTitle
          index="04"
          title="SPAとFramer-motion"
          english="SPA & Framer Motion"
          className="absolute top-[50%] left-[65%] z-[10] opacity-[0.5]"
        />{" "}
        <MiniSectionTitle
          index="05"
          title="作成した疑似Webサイト"
          english="Mock Websites Created"
          className="absolute top-[61%] left-[51%]  z-[10] opacity-[0.5]"
        />
        <MiniSectionTitle
          index="06"
          title="デモ"
          english="LiveDemo"
          className="absolute top-[72%] left-[32%] z-[10] opacity-[0.5]"
        />
        <MiniSectionTitle
          index="07"
          title="GitHub"
          english="GitHub Repository"
          className="absolute top-[82%] left-[39%] z-[10] opacity-[0.5]"
        />
        {/*--- */}
        <MiniSectionTitle
          index="01"
          title="研究テーマ"
          english="Research Theme"
          className="absolute top-[23%] left-[25%] z-[3]"
        />
        <MiniSectionTitle
          index="02"
          title="技術スタック"
          english="Tech Stack"
          className="absolute top-[31%] left-[48%] z-[3]"
        />{" "}
        <MiniSectionTitle
          index="03"
          title="アーキテクチャ"
          english="Architecture"
          className="absolute top-[38%] left-[58%] z-[3]"
        />{" "}
        <MiniSectionTitle
          index="04"
          title="SPAとFramer-motion"
          english="SPA & Framer Motion"
          className="absolute top-[50%] left-[65%] z-[3]"
        />{" "}
        <MiniSectionTitle
          index="05"
          title="作成した疑似Webサイト"
          english="Mock Websites Created"
          className="absolute top-[61%] left-[51%] z-[3]"
        />
        <MiniSectionTitle
          index="06"
          title="デモ"
          english="LiveDemo"
          className="absolute top-[72%] left-[32%] z-[3]"
        />
        <MiniSectionTitle
          index="07"
          title="GitHub"
          english="GitHub Repository"
          className="absolute top-[82%] left-[39%] z-[3]"
        />
        <img
          src={ImagesRoute.IMG_7050}
          className="tracked-element w-[300px] h-[200px] absolute left-[63%] top-[15%] z-[10]"
        />
        <img
          src={ImagesRoute.IMG_7034}
          className="tracked-element3 w-[300px] h-[200px] absolute left-[15%] top-[33%] z-[10]"
        />
        <img
          src={ImagesRoute.IMG_7065}
          className="tracked-element2 w-[200px] h-[300px] absolute left-[35%] top-[45%] z-[10]"
        />
        <img
          src={ImagesRoute.IMG_7068}
          className="tracked-element w-[200px] h-[300px] absolute left-[58%] top-[68%] z-[10]"
        />
      </section>
      <section className="section-frame flex-all-center relative">
        <SectionTitle
          className="absolute top-0 left-0"
          index="01"
          title="研究テーマ"
          english="Research Theme"
        />
        <div className="w-full flex-all-center flex-col string-lg">
          <p className="mr-[300px]">
            <span className="string-big text-[#9B74FF]">”動き”</span>が与える
          </p>
          <p className="ml-[300px]">ユーザーの影響と視線誘導</p>
        </div>
      </section>
      <section className="section-frame flex-all-center flex-col  space-y-[100px] ">
        <div className="w-screen flex justify-start px-[300px]">
          <div className="pl-[100px] space-y-[10px]">
            <p className="string-lg">・目的...</p>
            <p className="text-support-line-l string-sm leading-[30px]">
              現代のWebサイトでは、アニメーションがUX（ユーザー体験）
              <br />
              の重要な要素として広く活用されており、その効果に関する知見も蓄積されている。
              <br />
              特に、アニメーションの有無や種類がユーザーの「印象・行動・記憶」に
              <br />
              影響を与えることは指摘されているが、効果の程度や条件は依然として検証の余地がある。
              <br />
              本研究では、既存の知見を踏まえつつ、実際のUIにおけるアニメーションの影響を改めて検証し、
              <br />
              どのような場面で実装が有効かを明らかにすることを目的とする。
            </p>
          </div>
        </div>
        <div className="w-screen flex justify-end px-[300px]">
          <div className="pr-[100px] space-y-[10px]">
            <p className="string-lg">・実験方法...</p>
            <p className="text-support-line-l string-sm leading-[30px]">
              実験形式のWebページ合計6種類を用いて
              <br />
              ユーザーにタスクを付与。サイト内でユーザーの行動を監視し
              <br />
              それらの結果を用いてユーザー行動・意識の差異を定量。訂正的に評価。{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="w-screen h-[200lvh] relative">
        <p className="string-lg w-full text-center">・進捗...</p>{" "}
        <div className="flex flex-col items-center justify-center absolute z-[3]  top-[10%] left-[30%]">
          {sintilyokuOb.map(({ state, title }, index) => {
            const isLast = index === sintilyokuOb.length - 1;
            const color = state ? "#9B74FF" : "#FF7474";
            const mark = state ? "✓" : "×";

            return (
              <div key={title} className="flex-all-center flex-col">
                <div
                  className="size-[50px] rounded-full flex-all-center string-m"
                  style={{ backgroundColor: color }}
                >
                  {mark}
                </div>
                {/* 最後の要素には線を描画しない */}
                {!isLast && (
                  <div
                    className="w-[1px] h-[120px]"
                    style={{ backgroundColor: color }}
                  />
                )}
              </div>
            );
          })}
        </div>
        <div className="space-y-[120px] absolute top-[10%] right-[25%] z-[10]">
          {sintilyokuOb.map(({ title, explain }, index) => (
            <div
              key={index}
              className="flex justify-start items-center space-x-[30px]"
            >
              <p className="h-[50px] string-md">・・・{title}</p>
              <p>{explain}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section-frame relative">
        <SectionTitle
          className="absolute top-0 left-0 z-[3]"
          index="02"
          title="技術スタック"
          english="Tech Stack"
        />
        <img className="section-frame" src={ImagesRoute.dawn_wander_tec} />
      </section>
      <section className="section-frame flex flex-col justify-evenly">
        <div className="flex items-center justify-evenly w-full">
          <figure
            className="size-[300px]"
            style={{
              backgroundImage: `linear-gradient(to left,#000000,#00000055,#00000000),url(${ImagesRoute.react_ico})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <div className="pl-[100px] space-y-[10px]">
            <p className="string-lg">・なぜReact?...</p>
            <p className="text-support-line-l string-s leading-[30px]">
              Reactはアニメーションの抽象化と実装がしやすく、
              <br />
              アニメーションライブラリも豊富で、様々なアニメーションを簡単に実装できたから。
              <br />
              要素へのアクションで発生するイベントなども設定しやすかった。
              <br />
              「framer-motion」を中心にお世話になりました。
              <br />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-evenly w-full">
          <div className="pl-[100px] space-y-[10px]">
            <p className="string-lg">・なぜASP.NET?...</p>
            <p className="text-support-line-l string-s leading-[30px]">
              アニメーションとユーザーの行動ログの関係性を検証するという特性上、
              <br />
              将来的に蓄積される操作データの分析や可視化も視野に入れている。
              <br />
              そのため、システムの設計には柔軟性と堅牢性の両立が求められた。
              <br />
              ASP.NETはレイヤードアーキテクチャとの親和性が高く、MVCに近い設計も容易であるため、
              <br />
              初期段階で要件が流動的なプロジェクトにおいても適切な選択肢だったと思ってる。
              <br />
              あと処理が速い
              <br />
              <br />
              他:Swagger、セキュリティ、みんながGO使ってるから逆張り という理由
            </p>
          </div>
          <figure
            className="size-[300px]"
            style={{
              backgroundImage: `linear-gradient(to left,#000000,#00000055,#00000000),url(${ImagesRoute.net_icno})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </div>
      </section>
      <section className="relative section-frame flex-all-center flex-col space-y-[100px]">
        <SectionTitle
          className="absolute top-0 left-0 z-[3]"
          index="03"
          title="アーキテクチャ"
          english="Architecture"
        />
        <p className="string-lg">レイヤードアーキテクチャ</p>
        <div className="pl-[100px] space-y-[10px]">
          <p className="string-rg mr-[100px]">
            ・レイヤードアーキテクチャの基本思想...
          </p>
          <p className="text-support-line-l string-s leading-[30px] ml-[100px]">
            処理を責務（役割）ごとに分けることで、再利用性・保守性・テストのしやすさを高める構成手法。
            <br />
            僕がこのアーキテクチャを選んでる一番の理由は特定のファイルや処理が視覚的に探しやすいってとこ{" "}
          </p>
        </div>
      </section>
      <section className="section-frame flex-all-center">
        <div className="space-y-[10px]">
          <p className="string-rg ml-[100px] w-screen">
            ・ディレクトリ構想(例)
          </p>
          <div className="flex justify-center items-center space-x-[100px] string-sm w-full">
            <p>
              Node.jsプロジェクト
              <br />
              ├── src/ <br />
              │ ├── controllers/ # コントローラー
              <br />
              │ ├── models/ # モデル
              <br />
              │ ├── routes/ # ルート(エンドポイント指定やリレーション紐づけ)
              <br />│ └── services/ # サービス(ロジック)
            </p>
            <p>
              ASP.NET(今回)プロジェクト
              <br />
              ├── Features/ <br />
              │ ├── controllers/ # ここでエンドポイント定義
              <br />
              │ ├── models/ # モデル(リレーション紐づけ)
              <br />
              │ ├── ripository/ データアクセス層。
              <br />
              │ │ DBとのやりとりを抽象化。
              <br />│ └── services/ # サービス
            </p>
          </div>
        </div>
        <div className="space-y-[10px]">
          <p className="string-rg ml-[100px] w-screen">・処理の流れ</p>
          <div className="flex justify-center items-center space-x-[100px] string-sm w-full">
            <p>
              Node.js
              <br />
              [クライアンからのリクエスト]
              <br />
              ↓<br />
              Route —Controllerに振り分け
              <br />
              ↓<br />
              Controller —Service に処理を委譲
              <br />
              ↓<br />
              Service —ロジック実行
              <br />
              ↓<br />
              Model —Entity取得
              <br />
              ↓v Service —Response DTO 作成
              <br />
              ↓<br />
              Controller —レスポンス返却
            </p>
            <p>
              ASP.NET(今回)プロジェクト
              <br />
              [リクエスト]
              <br />
              ↓<br />
              Controller —Request DTO
              <br />
              ↓<br />
              Service —ビジネスロジック
              <br />
              ↓<br />
              Repository —DBアクセス
              <br />
              ↓<br />
              Model —Entity取得
              <br />
              ↓<br />
              Service —Response DTO 作成
              <br />
              ↓<br />
              Controller —レスポンス返却
            </p>
          </div>
        </div>
      </section>
      <section className="section-frame flex-all-center">
        <p className="string-rg p-[100px] w-screen">・今回の構成方針</p>
        <div className="flex justify-center items-center space-x-[100px] string-sm w-full">
          <p>
            ├── server/ <br />
            │ ├── Features/ <br />
            │ │ ├── auth/ <br />
            │ │ │ ├── controller <br />
            │ │ │ ├── models/ <br />
            │ │ │ ├── ripositories/ <br />
            │ │ │ └── services/ <br />
            │ │ ├── users/ <br />
            │ │ │ ├── controller <br />
            │ │ │ ├── models/ <br />
            │ │ │ ├── ripositories/ <br />
            │ │ │ └── services/ <br />
            │ │ └── posts/ <br />
            │ │ ├── controllers
            <br />
            ...............................................
          </p>
          <div className="space-y-[50px]">
            <p className="string-rg ">なんでまたドメイン単位で分けたん？</p>
            <p className="ml-[50px] text-support-line-l">
              認証・ユーザー・投稿などの機能はそれぞれ独立した目的を持つ
              <br />
              関連ファイルを同じフォルダにまとめることで、横断的な理解や変更がしやすくなる。
              <br />
              特定の機能が大規模化しても、他の機能に影響せず保守できる
              <br />
              責務と位置がはっきりしているため、トラブル対応や単体テストが効率的
              <br />
              (この構造なら知識さえあればコメントアウトいらんまである()嘘です)
            </p>
            <div className="text-center">
              <p>簡単に説明すると...</p>
              <p className="string-md">
                やっぱり何をどこでやっているかわかりやすい
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen h-[150lvh] flex-all-center relative">
        <SectionTitle
          className="absolute top-0 left-0 z-[3]"
          index="04"
          title="SPAとFramer-motion"
          english="SPA & Framer Motion"
        />{" "}
        <div className="pl-[100px] space-y-[10px] mt-[100px]">
          <p className="string-rg mr-[100px]">
            ・SinglePageApplication(SPA)とは...
          </p>
          <p className="text-support-line-l string-s leading-[30px] ml-[100px]">
            「単一ページのWebアプリケーション」のこと。
            <br />
            ページの切り替え時に、ブラウザ全体をリロードせず、一部のコンテンツだけを書き換えるアプリの仕組み。{" "}
          </p>
        </div>
        <div className="flex w-screen justify-evenly items-center">
          <div>
            {" "}
            <p className="string-rg p-[100px]">・従来のWebサイト</p>
            <img src={ImagesRoute.material_spa} className="w-[500px]" />
            <p className="text-center string-rg">HTMLファイルごと交換</p>
          </div>
          <div>
            {" "}
            <p className="string-rg p-[100px]">・SPA</p>
            <img src={ImagesRoute.material_web} className="w-[500px]" />
            <p className="text-center string-rg">
              内部DOM(HTMLタグ)だけ交換
              <br />
              (マウント、アンマウントとかいうよね)
            </p>
          </div>{" "}
        </div>
        <div className="flex justify-evenly otems-center mt-[100px]">
          <img className="size-[200px]" src={ImagesRoute.framer_motion} />
          <div className="pl-[100px] space-y-[10px]">
            <p className="string-rg mr-[100px]">・Framer-motionとは...</p>
            <p className="text-support-line-l string-s leading-[30px] ml-[100px]">
              Framer Motion は、React向けのアニメーションライブラリで、
              <br />
              めっちゃ簡単に・柔軟に・高品質なアニメーションを作れるツール
              <br />
              コンポーネントのマウント（表示）とアンマウント（非表示）時のアニメーションを簡単に実装できるのが超強い。
              <br />{" "}
            </p>
          </div>
        </div>
        <SectionTitle
          className="w-screen"
          index="05"
          title="作成した疑似Webサイト"
          english="Mock Websites Created"
        />
      </section>
      <div
        className=" h-[600vh] w-screen
       my-target relative"
      >
        <AnimatePresence mode="wait">
          {step >= 0 && (
            <motion.figure
              key="1"
              {...wander_product_fade}
              className="section-frame sticky z-[1] top-0 left-0"
              style={{
                backgroundImage: `url(${ImagesRoute.table_5356682_1920})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></motion.figure>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {step >= 1 && (
            <motion.figure
              key="2"
              {...wander_product_fade}
              className="section-frame sticky z-[2] top-0 left-0"
              style={{
                backgroundImage: `url(${ImagesRoute.p464739458_416156958199650_3162208171733525292_n})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></motion.figure>
          )}{" "}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {step >= 2 && (
            <motion.figure
              key="3"
              {...wander_product_fade}
              className="section-frame sticky z-[3] top-0 left-0"
              style={{
                backgroundImage: `url(${ImagesRoute.IMG_2855})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></motion.figure>
          )}
        </AnimatePresence>

        <div className="absolute top-0 left-0 z-[10] h-[600vh] w-screen">
          <section className="h-[200lvh] relative">
            <div className="sticky top-0 left-0 section-frame flex justify-start pl-[200px] items-center">
              <div className="flex flex-col items-center KinutaShinStdN6K">
                <p>Patisserie</p>
                <p className="text-[75px]">DAWN</p>
              </div>
            </div>
          </section>{" "}
          <section className="h-[200lvh] relative Ten-Mincho-Regular">
            <div className="sticky top-0 left-0 section-frame flex justify-start pl-[200px] items-center">
              <p className="string-big transition-all duration-1000 hover:tracking-[1px] hover:text-[#40867C]">
                Are We Still A...?
              </p>
            </div>
          </section>{" "}
          <section className="h-[200lvh] relative">
            <div className="sticky top-0 left-0 section-frame flex justify-start pl-[200px] items-center">
              <div className="string-hundred flex flex-col items-center KinutaShinStdN6K">
                <p className="pr-[150px]">Shutter</p>
                <p className="pl-[150px]">Showcase</p>
              </div>
            </div>
          </section>
        </div>
        <div className="absolute top-0 left-0 z-[12] h-[600vh] w-screen">
          <section className="w-screen h-[200lvh] relative">
            <img
              className="w-[350px] h-[500px] absolute top-[10%] right-[40%]"
              src={ImagesRoute.dining_table_7782610_1920}
            />
            <img
              className="w-[500px] h-[350px] absolute top-[40%] right-[5%]"
              src={ImagesRoute.hermes_rivera_aK6WGqxyHFw_unsplash}
            />
            <img
              className="w-[500px] h-[350px] absolute bottom-[10%] right-[20%]"
              src={ImagesRoute.t_ed_hOgog7l_iuY_unsplash}
            />
          </section>
          <section className="w-screen h-[200lvh] relative">
            <img
              className="w-[350px] h-[500px] absolute top-[10%] right-[10%]"
              src={ImagesRoute.p465072607_1461049087899559_588075790240556776_n}
            />
            <img
              className="w-[500px] h-[350px] absolute top-[40%] right-[35%]"
              src={ImagesRoute.p465523955_568969585623225_5011903062634586769_n}
            />
            <img
              className="w-[500px] h-[350px] absolute bottom-[10%] right-[20%]"
              src={
                ImagesRoute.p465189818_3939773542908699_8873408741192309513_n
              }
            />
          </section>
          <section className="w-screen h-[200lvh] relative">
            <img
              className="w-[350px] h-[500px] absolute top-[10%] right-[40%]"
              src={ImagesRoute.IMG_2882}
            />
            <img
              className="w-[500px] h-[350px] absolute top-[40%] right-[5%]"
              src={ImagesRoute.IMG_8332}
            />
            <img
              className="w-[500px] h-[350px] absolute bottom-[10%] right-[20%]"
              src={ImagesRoute.IMG_7856}
            />
          </section>
        </div>
      </div>
      <section className="section-frame flex-all-center">
        {" "}
        <SectionTitle
          className="w-screen"
          index="06"
          title="デモ"
          english="LiveDemo"
        />
      </section>
    </div>
  );
};
export default Dawn_wander;
