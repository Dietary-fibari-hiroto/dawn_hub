import Header from "../components/Header";
import ImagesRoute from "../assets/ImagesRoute";

import { useState } from "react";

import useScrollAnimation from "../hooks/useScrollAnimation";

import Product from "../components/Product";
import Footer from "../components/Footer";

import "../assets/styles/animateStyles.css";

const NN = () => {
  const { animationStyle } = useScrollAnimation();

  const productname = "Nocturnal Wanderings";

  const project_detail = {
    title: productname,
    title_bar: (
      <p>
        Nocturnal
        <br />
        Wanderings
      </p>
    ),
    bg: "",
    log: ImagesRoute.NNlog,
    top_bg: ImagesRoute.IMG_6728,
    project_state: (
      <a
        className=" bg-[#777777] px-[10px] py-[10px] rounded-[10px]"
        href="../assets/Dawn-NacturnalWanderings.zip"
        download
      >
        ダウンロード
      </a>
    ),
    main_catchcopy: "夜間作業を快適にサポートするためのフィルターソフト",
    subtitle: "夜を軽やかに、目に優しく。",
    subimg: ImagesRoute.IMG_3975,
    width_src: ImagesRoute.IMG_6732,
    width_explain: (
      <p
        className={`scroll-section ${animationStyle} string-ss space-y-[10px]`}
      >
        <p className={`scroll-section ${animationStyle}`}>
          Nocturnal Wanderingsは、夜間作業を
        </p>
        <p className={`scroll-section ${animationStyle}`}>
          快適にサポートするフィルターソフトです。
        </p>
        <p className={`scroll-section ${animationStyle}`}>
          暗い部屋での作業中、画面の明るさが気になることはありませんか？
        </p>
        <p className={`scroll-section ${animationStyle}`}>
          このソフトは、PCの設定以上に明るさを抑えることで、
        </p>
        <p className={`scroll-section ${animationStyle}`}>
          目への負担を軽減しつつ集中力を高めます。
        </p>
        <br />
      </p>
    ),
    explain2_src: ImagesRoute.gp83,
    explain2_title: "ディスプレイも夜仕様に",
    explain2_text: (
      <p className="string-ss space-y-[10px]">
        暗い部屋でも目に優しく、
        <br />
        快適に作業を続けられます。
        <br />
        Nocturnal Wanderingsを実行して、
        <br />
        夜間の作業をもっと快適に。
        <br />
      </p>
    ),

    explain3_bg: null,
    appealTagValues: [
      {
        position: "top-[0] max-sm:left-1/2 -translate-x-1/2",
        title: "目の負担を軽減",
        text: (
          <div>
            長時間の画面作業でも目が疲れにくい、
            <br />
            快適な作業環境を提供。
            <br />
            夜間でも安心して作業できます。
          </div>
        ),
      },
      {
        position: "top-[25%] max-sm:right-1/2  -translate-x-[-50%]",
        title: "幅広い明るさ設定",
        text: (
          <div>
            OSで設定できる明るさに加え、
            <br />
            さらに自分の好みに合わせて
            <br />
            細かく明るさを調整可能。
          </div>
        ),
      },
      {
        position: "top-[50%] max-sm:left-1/2 -translate-x-1/2",
        title: "ナイトシフト機能",
        text: (
          <div>
            目の負担を軽減する暖色化機能を搭載。
            <br />
            夜間の作業時に最適な色温度に調整でき、
            <br />
            自然な感じで作業をサポートします。
          </div>
        ),
      },
      {
        position: "top-[75%] max-sm:right-1/2 -translate-x-[-50%]",
        title: "マルチディスプレイ対応",
        text: (
          <div>
            複数のモニターを使用している環境でも、
            <br />
            全てのディスプレイで快適な作業環境を提供。
            <br />
            ディスプレイごとに独立した設定が可能。
          </div>
        ),
      },
    ],
    stackValue: [
      { img: ImagesRoute.NET_icon, name: ".NET Framework", lang: "C#" },
      { img: ImagesRoute.csharp, name: "C#" },
      { img: ImagesRoute.xaml, name: "　xaml" },
    ],
    dialog: (
      <div>
        <div className="pt-[100px]">
          <p className="string-lg">{productname}</p>
        </div>
        <div className="text-white leading-relaxed space-y-6">
          <h2 className="string-rg">主な機能</h2>
          <p>
            OSの設定限界よりも画面を暗くする機能
            <br />
            ブルーライトをカットする機能
          </p>
          <h2 className="string-rg">開発の背景</h2>
          <p>
            私は夜になると部屋を暗くし、デスクライトだけで作業することが多いです。
            <br />
            その理由は、夜に強い光を浴びると睡眠の質が低下するという話を聞いたことがあるのと、
            <br />
            単純に暗い空間の雰囲気が好きだからです。
            <br />
            そんな環境でパソコンを使っていると、白い画面がどうしても眩しく、
            <br />
            明るさを最小に設定しても目に負担を感じました。
            <br />
            そこで「フィルターウィンドウを作って画面に重ねれば暗くできるのでは？」と思い立ち、開発を始めました。
            <br />
            ちょうどその頃、Microsoftが提供するC#のフレームワーク「.NET
            Framework」に興味があり、
            <br />
            これを使って開発することにしました。
          </p>
          <h2 className="string-rg">追加機能へのアイデア</h2>
          <p>
            開発中、セカンドディスプレイを購入して使ってみたところ、
            <br />
            明るさを調整する際に本体のボタンを押さなければならず不便さを感じました。
            <br />
            そこで、ディスプレイ自体の明るさは固定し、ソフトウェア上でフィルターを使って調整できる「マルチディスプレイ対応機能」を追加することを考えました。
          </p>
          <h2 className="string-rg">今後の課題</h2>
          <p>
            マルチディスプレイ機能の安定化,
            <br />
            明るさやブルーライトカットの設定を保存できるプリセット機能の追加
          </p>
        </div>
        <h2 className="string-rg text-white">技術スタック</h2>
        <p className="text-white">
          フロントエンド: XAML,.NET Framework
          <br />
          バックエンド:C#,.NET Framework
          <br />
          デザイン: Adobe XD
          <br />
          その他:
        </p>
      </div>
    ),
  };

  return <Product productname={productname} project_detail={project_detail} />;
};

export default NN;
