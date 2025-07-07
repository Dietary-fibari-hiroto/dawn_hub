import React, { useEffect, useRef, useState } from "react";

import ImagesRoute from "../../assets/ImagesRoute";
const Title = ({ title }) => {
  return (
    <div className="absolute top-[10%] left-[10%] text-[50px]">{title}</div>
  );
};

const Section = ({ children }) => {
  return (
    <section className="relative section-frame flex flex-col items-center justify-center">
      {children}
    </section>
  );
};

const Heading = ({ text }) => {
  return (
    <p className="text-black inline w-[70%] string-md text-start">{text}</p>
  );
};
const Heading2 = ({ text }) => {
  return (
    <div className="text-black inline w-[70%] string-rg text-start">{text}</div>
  );
};
const Text = ({ text }) => {
  return (
    <p className="text-black inline w-[60%] string-sm text-start">{text}</p>
  );
};
const SpanContent = () => {
  return <div className="h-[20px]"></div>;
};

const webstack = [
  {
    name: "React",
    explain: "フロントエンドのフレームワーク",
    explain_gpt:
      "Reactは、Facebookが開発した**ユーザーインターフェース（UI）構築用のJavaScriptライブラリだよ。コンポーネントという単位でUIを分割して、再利用しやすくするのが特徴。仮想DOMを使って、最小限の変更だけを効率的に反映する仕組みがある。状態（State）やプロパティ（Props）でデータのやり取りを管理するよ。主にシングルページアプリケーション（SPA）の開発で使われている！",
    img: ImagesRoute.react_ico,
  },
  {
    name: "framer-motion",
    explain: "アニメーションライブラリ",
    explain_gpt:
      "framer-motionはReact専用のアニメーションライブラリで、滑らかで自然な動きを簡単に追加できる。motion.divなどの専用タグで直感的に使え、フェード、スライド、スケール、ドラッグなど多彩な動きをサポート。状態に応じたアニメーション制御も柔軟。低レベルなCSSやJS操作不要で、コードが読みやすく保守しやすい。UIに動きを加えてUXを向上させたいときに便利。",
    img: ImagesRoute.framer_logo,
  },
  {
    name: "tailwindcss",
    explain: "CSSフレームワーク",
    explain_gpt:
      "Tailwind CSSはユーティリティファーストなCSSフレームワークで、クラス名を使って直接スタイルを当てる仕組み。事前定義されたクラスでレイアウトや色、余白などを細かく調整できる。独自のCSSをほとんど書かずにデザインが完成する。Reactなどのコンポーネントとも相性がよく、開発スピードが上がる。カスタマイズ性も高く、デザインの一貫性を保ちやすい。",
    img: ImagesRoute.tailwind,
  },
  {
    name: "adobe XD",
    explain: "UI/UXデザイン用のツール",
    explain_gpt:
      "Adobe XDはUI/UXデザイン用のツールで、アプリやWebサイトの画面設計やプロトタイプ作成に使われる。アートボードで画面を並べて直感的にデザインできる。リンクやアニメーションを設定して動くプロトタイプを作れる。チームでの共有やフィードバックも簡単。軽快な動作で、デザイナーと開発者の連携を助ける。",
    img: ImagesRoute.xd,
  },
  {
    name: "adobe Lightroom",
    explain: "写真の編集",
    explain_gpt:
      "Adobe Lightroomは写真の編集と管理に特化したツールで、主にRAW画像の現像や色補正に使われる。露出や色温度、コントラストなどを細かく調整できる。非破壊編集なので元画像を損なわずに修正可能。写真を整理・タグ付け・検索する機能も充実している。プロの写真家から趣味ユーザーまで幅広く使われている。",
    img: ImagesRoute.lightroom,
  },
  {
    name: "adobe Photoshop",
    explain: "写真の編集",
    explain_gpt:
      "Adobe Photoshopは画像編集の定番ソフトで、写真の加工、合成、描画、デザインなど多用途に使える。レイヤー機能で複雑な編集がしやすく、フィルターやエフェクトも豊富。写真の修正だけでなく、イラストやWebデザイン、印刷物制作にも対応。高精度な選択・切り抜き・補正が可能。プロ向けだけでなく初心者にも人気のある強力なツール。",
    img: ImagesRoute.photoshop,
  },
  {
    name: "adobe fonts",
    explain: "写真の編集",
    explain_gpt:
      "Adobe FontsはAdobeが提供するクラウドベースのフォントサービスで、数千種類の高品質なフォントをウェブやデザインに自由に使える。Adobe Creative Cloudのメンバーシップに含まれていて、簡単に同期・利用可能。ウェブフォントとしてサイトに組み込んだり、デスクトップアプリで使ったりできる。ライセンス管理が不要で安心。デザイナーや開発者に便利なフォントコレクションだよ。",
    img: ImagesRoute.adobefonts,
  },
  {
    name: "ASP.NET",
    explain: "Webアプリケーションフレームワーク",
    explain_gpt:
      "ASP.NETはMicrosoftが開発したWebアプリケーションフレームワークで、C#などの.NET言語で高速にWebサイトやAPIを作れる。サーバーサイドで動くため、動的なページ生成やデータ処理が得意。MVCやWeb APIなど複数の開発モデルをサポートし、セキュリティや認証機能も充実。Visual Studioとの連携が強く、開発効率が高い。企業の業務システムから大規模サイトまで幅広く使われている。",
    img: ImagesRoute.net_icno,
  },
  {
    name: "Entity Framework Core",
    explain: "ORM",
    explain_gpt:
      "Entity Framework Coreは.NET向けのORM（オブジェクト関係マッピング）ライブラリで、データベース操作をコードのオブジェクトとして扱える。LINQでクエリを書けて、SQLを書かずにCRUD処理が簡単。複数のデータベースに対応し、マイグレーション機能でスキーマ変更も管理できる。コードファーストやデータベースファーストの開発スタイルをサポート。効率的なデータアクセスと保守性向上に役立つ。",
    img: ImagesRoute.core,
  },
  {
    name: "Mysql",
    explain: "DBMS",
    explain_gpt:
      "MySQLは世界で人気のあるオープンソースのリレーショナルデータベース管理システムで、大量データの保存や高速な検索が得意。SQL言語でデータの操作や管理を行い、ウェブアプリや企業システムで広く使われている。スケーラビリティやセキュリティ機能も充実し、多くのプラットフォームで動作。無料版と商用版があり、コミュニティも活発。初心者からプロまで幅広く利用されている。",
    img: ImagesRoute.mysql,
  },
  {
    name: "Excel",
    explain: "表計算ソフト",
    explain_gpt:
      "ExcelはMicrosoftの表計算ソフトで、数値の計算やデータ整理、グラフ作成が簡単にできるツール。セルに数式や関数を使って自動計算が可能で、ビジネスや学校など幅広い場面で使われている。マクロやVBAを使って作業の自動化もできる。大量データの分析やピボットテーブルでの集計も得意。直感的な操作で誰でも扱いやすいのが特徴。",
    img: ImagesRoute.excel,
  },
  {
    name: "AdobeExpress",
    explain: "デザインツール",
    explain_gpt:
      "Adobe Expressは初心者でも簡単に使えるオンラインのデザインツールで、ポスターやSNS投稿、ロゴなどを手軽に作成できる。豊富なテンプレートや素材が揃っていて、ドラッグ＆ドロップで編集可能。PhotoshopやIllustratorほど難しくなく、短時間でプロっぽいデザインが作れるのが魅力。ウェブやスマホアプリからアクセスでき、共有やダウンロードも簡単。SNSやマーケティング用のコンテンツ作成に便利だよ。",
    img: ImagesRoute.adobeexpress,
  },
];

const Explain_dialog = ({ item, onClick }) => {
  const ref = useRef(null);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 現在のスクロール量に合わせてtop位置を調整
      setTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初期実行

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      onClick={onClick}
      className="fixed z-[100] w-screen h-screen bg-[#00000088] flex-all-center"
      style={{
        position: "absolute", // ← fixedじゃない！
        top: `${top}px`,
        left: 0,
        transition: "0.1s ease-in",
      }}
    >
      <div className="bg-[#333333] w-[50vw] h-[50lvh] p-[50px] space-y-[10px]">
        <img src={item?.img} className="size-[150px]" />{" "}
        <p>名前:{item?.name}</p>
        <p>カテゴリ:{item?.explain}</p>
        <p>説明:{item?.explain_gpt}</p>
      </div>
      <p className="absolute bottom-[10%]">---画面をクリックで閉じる---</p>
    </div>
  );
};

const ReserchMa = () => {
  const [is_dialog, setIs_dialog] = useState(false);
  const [data, setData] = useState();
  const handleChangeDialog = (index) => {
    setData(webstack[index]);
    setIs_dialog((prev) => !prev);
  };
  return (
    <div className="relative w-[100vw] h-auto bg-white Ryo-Gothic-PlusN-H">
      {!is_dialog ? (
        ""
      ) : (
        <Explain_dialog item={data} onClick={handleChangeDialog} />
      )}

      <div className="sticky top-0 left-0 w-screen h-screen z-[5] pointer-events-none">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 1080.001"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              y1="0.02"
              x2="1"
              y2="1"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stopColor="#1384c8" />
              <stop offset="1" stopColor="#61dafb" />
            </linearGradient>
          </defs>
          <path
            d="M-2130,4622H-4050V3542h1920V4622ZM-3940,3607a50.056,50.056,0,0,0-50,50v850a50.057,50.057,0,0,0,50,50h1700a50.057,50.057,0,0,0,50-50V3657a50.056,50.056,0,0,0-50-50Z"
            transform="translate(4050 -3542)"
            fill="url(#linear-gradient)"
          />
        </svg>
      </div>
      <section className="text-black absolute top-0 section-frame flex items-center justify-between">
        <div className="text-center flex-1">
          <p className="string-rg">アニメーションソリューション</p>
          <p className="string-md bg-gradient-to-l from-[#1384c8] to-[#61dafb] bg-clip-text text-transparent ">
            動きによるUX変化の分析
          </p>
          <p className="string-ss">
            アニメーションが与える「印象・行動・記憶」
          </p>
        </div>
        <div className="flex-1 relative h-screen">
          <img
            className="absolute top-[40%] left-[10%] size-[400px]"
            src={ImagesRoute.i1516528960}
          />
          <img
            className="absolute top-[35%] right-[20%] size-[200px]"
            src={ImagesRoute.server_icon}
          />
          <img
            className="absolute top-[30%] left-[25%] size-[100px]"
            src={ImagesRoute.net_icno}
          />{" "}
          <img
            className="absolute top-[25%] right-[45%] size-[100px]"
            src={ImagesRoute.react_ico}
          />
        </div>
      </section>
      <div className="sticky text-black string-sm z-[10] bg-white top-[10%] left-[65%] inline">
        資料URL:https://dawn-waiting.com/material/researchma
      </div>
      <div className="text-black  top-0 z-[3]">
        <section className="relative section-frame flex items-center justify-center">
          <Title title="目次" />
          <div className="string-rg">
            <div className="flex items-center">
              <img className="size-[50px]" src={ImagesRoute.ckeck} />
              <p>研究背景</p>
              <p className="text-[#00ffff]"> ← New</p>
            </div>
            <div className="flex items-center">
              <img className="size-[50px]" src={ImagesRoute.ckeck} />
              <p>研究テーマ</p>
            </div>
            <div className="flex items-center">
              <img className="size-[50px]" src={ImagesRoute.ckeck} />
              <p>現在の進捗状況</p>
            </div>
            <div className="flex items-center">
              <img className="size-[50px]" src={ImagesRoute.ckeck} />
              <p>現時点での問題点</p>
            </div>
            <div className="flex items-center">
              <img className="size-[50px]" src={ImagesRoute.ckeck} />
              <p>今後の作業について</p>
            </div>
          </div>
        </section>
        <Section>
          <Title title="研究背景" />
          <Heading2 text="・情報過多社会の弊害" />
          <Text text="本来注目されるべき情報や、発信者が本当に伝えたいメッセージが、視覚的なノイズやコンテンツの洪水の中に埋もれてしまうことが起きている。" />
          <SpanContent />
          <Heading2 text="・現実世界への干渉" />
          <Text text="ながらスマホによって周囲に注意が向かない" />
          <Text text="重要情報や注意事項のスルー" />
          <SpanContent />
          <Heading text="→''動き''によって注意を誘導しようというアプローチ" />
          <Heading2
            text={
              <div>
                <span className="text-[#C40000]">"動き"</span>
                <span className="">による注意の再獲得の可能性</span>
              </div>
            }
          />
          <Text
            text="こうした状況の中で、Webサイト上の「動き（アニメーション）」が、ユーザーの注意を意図的に誘導し、情報の見落としを防ぐ手段として期待されている。
しかし、アニメーションは時にノイズと捉えられることもあり、その効果や適切な使い方についての実証的な知見はまだ十分ではない。"
          />
        </Section>
        <Section>
          <Title title="ポイントの整理" />

          <Text text="「情報が埋もれている」→「注意喚起が必要」→「動きが有効かも？」→「でもその効果はまだ不明」→「だから実験する」" />
        </Section>
        <Section>
          <Title title="研究背景" />
          <div className="flex items-center space-x-[10px]">
            <img src={ImagesRoute.gan} className="w-[400px] h-[500px]" />
            <div className="flex flex-col">
              <Text text="政治指導者・宗教家:マハトマ・ガンディー（1869/10/2 - 1948/1/30)" />
              <p className="text-black inline  string-rg text-start">
                人を動かすには、まず自分が動かなければならない。
              </p>{" "}
              <Text text="この言葉に着目..." />
              <p className="text-center string-lg mt-[100px] opacity-0 hover:opacity-[1]">
                →情報も視覚的に先に動かそう
              </p>
            </div>
          </div>{" "}
        </Section>
        <Section>
          <Title title="研究テーマについて" />
          <Heading2
            text={
              <div>
                <span className="">・研究テーマ・・・</span>
                <span className="text-[#61DAFB] string-lg">”動き”</span>
                <span className="">が与えるユーザーの影響と意識誘導</span>
              </div>
            }
          />
          <SpanContent />
          <Heading2 text="目的・・・" />
          <Text text="現代のwebサイトにおいて、アニメーションは「UX(ユーザー体験)」の重要な要素として活用されている。しかし、アニメーションの有無や種類がユーザーの「印象・行動・記憶」にどのような影響を与えるかは明確にされていない。実際影響は出るのか。また実装する必要はあるのかを知ることを目的とします。" />
          <SpanContent />
          <Text text="例:「視覚的ノイズ」の中でアニメーションが有効なのか、逆にノイズの一部にならないのか" />
          <SpanContent />
          <Heading2 text="実験方法・・・" />
          <Text
            text="実験形式のWebページを用いてユーザーにタスクを付与。
それらの結果を用いてユーザー行動・意識の差異を定量。訂正的に評価。

＊実験の詳しい概要や方法はこの教室にいる学生にも体験してもらう可能性があるため
　先入観の観点から発表しません。"
          />
        </Section>
        <Section>
          <Title title="課題・懸念点" />
          <Heading2 text="・試行方法の決定・・・" />
          <Text text="検証の時点で条件がそろっていないと意味がない。" />
          <Heading text="　　　↓" />
          <Heading2
            text={
              <div className="flex items-end">
                <p className="string-lg text-[#D60067]">再現性</p>
                <p className="string-rg mb-[5px]">
                  を保ちつつ被験者間の行動のばらつきを抑えることが重用。
                </p>
              </div>
            }
          />
          <SpanContent />
          <Text
            text="システムの構築より実験方法や取得する情報の方が重要。
ただ確立が激ムズ。"
          />
        </Section>
        <Section>
          <Title title="補足" />
          <Heading2 text="・GPTに解説手伝って貰っています。" />
          <Text
            text="難しそうな内容だったり、補足が必要な内容にはGPT君に質問した内容をそのまま記載しております。
内容は特定の要素をクリックすることで閲覧できます。
是非ご活用ください。
関西弁なのは突っ込まないでください。勝手に覚えました。"
          />
          <div className="flex items-center justify-evenly w-full">
            <img className="w-[500px]" src={ImagesRoute.content2} />
            <img className="w-[500px]" src={ImagesRoute.content1} />
          </div>
        </Section>
        <Section>
          <Title title="使用技術" />
          <div className="w-full grid grid-cols-2 gap-4 place-items-center">
            <div className="flex flex-col items-center justify-evenly rounded-[50px] w-[500px] h-[300px] border border-[5px] border-black">
              <p className="string-rg">web</p>
              <div className="flex items-center justify-evenly space-x-[10px]">
                {webstack.slice(0, 3).map((item, index) => (
                  <img
                    key={item.name}
                    onClick={() => handleChangeDialog(index)}
                    className="size-[100px]"
                    src={item.img}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center justify-evenly rounded-[50px] w-[500px] h-[300px] border border-[5px] border-black">
              <p className="string-rg">デザイン</p>
              <div className="flex items-center justify-evenly space-x-[10px]">
                {webstack.slice(3, 7).map((item, index) => (
                  <img
                    key={item.name}
                    onClick={() => handleChangeDialog(index + 3)}
                    className="size-[100px]"
                    src={item.img}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center justify-evenly rounded-[50px] w-[500px] h-[300px] border border-[5px] border-black">
              <p className="string-rg">server</p>
              <div className="flex items-center justify-evenly space-x-[10px]">
                {webstack.slice(7, 10).map((item, index) => (
                  <img
                    key={item.name}
                    onClick={() => handleChangeDialog(index + 7)}
                    className="size-[100px]"
                    src={item.img}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center justify-evenly rounded-[50px] w-[500px] h-[300px] border border-[5px] border-black">
              <p className="string-rg">分析・資料</p>
              <div className="flex items-center justify-evenly space-x-[10px]">
                {webstack.slice(10, 12).map((item, index) => (
                  <img
                    key={item.name}
                    onClick={() => handleChangeDialog(index + 10)}
                    className="size-[100px]"
                    src={item.img}
                  />
                ))}
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <Title title="現在の進捗状況" />
          <Heading2
            text={
              <div className="flex items-center">
                <img className="size-[40px]" src={ImagesRoute.tilekku} />
                <span>・要件定義・・・</span>
              </div>
            }
          />
          <Text text="実験背景、取得して得る情報、着地地点が明確にできた。" />
          <SpanContent />
          <Heading2
            text={
              <div className="flex items-center">
                <img className="size-[40px]" src={ImagesRoute.tilekku} />
                <span>・フロントエンド・・・</span>
              </div>
            }
          />
          <Text
            text="デザイン-終了
アニメーション定義-終了
実装-終了"
          />
          <SpanContent />
          <Heading2
            text={
              <div className="flex items-center">
                <img className="size-[40px]" src={ImagesRoute.tilekku} />
                <span>・バックエンド・・・</span>
              </div>
            }
          />
          <Text
            text="DB設計-終了
実装-終了"
          />
          <SpanContent />
          <Heading2
            text={
              <div className="flex items-center">
                <img className="size-[40px]" src={ImagesRoute.mainasu} />
                <span>・結合/実験・・・</span>
              </div>
            }
          />
          <Text
            text="結合-現在進行中
実験-未達成
集計/分析-未達成"
          />
          <SpanContent />
        </Section>
      </div>
    </div>
  );
};

export default ReserchMa;
