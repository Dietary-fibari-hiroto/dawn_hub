import ImagesRoute from "../assets/ImagesRoute";

import Footer from "../components/Footer";

import UseOpacityAnimation from "../hooks/UseOpacityAnimation";

import ShieldSection from "../components/ShieldSection";
import { Link } from "react-router-dom";
import TopPageBackScreen from "../components/TopPageBackScreen";
import ShootingStars from "../hooks/ShootingStarts";
import LinkButton from "../components/LinkButton";
import { useScrollParallax } from "../hooks/animation/useScrollParallax";
import Shield from "../components/Shield";

const HomePage = () => {
  const { animationOpacityStyle } = UseOpacityAnimation();
  useScrollParallax();
  useScrollParallax(".tracked-element2", 0.1);
  useScrollParallax(".tracked-element3", 0.3);

  return (
    <div className="home-bg KinutaShinStdN48K text-white w-[100vw] overflow-x-hidden">
      {/**本文 */}

      <section className="relative">
        <TopPageBackScreen />
        <div
          className="fixed z-[20] top-0 size-auto"
          style={{ pointerEvents: "none" }}
        >
          <ShootingStars />
        </div>
        <div className="absolute top-0 z-[5] h-[100lvh] w-[100vw] flex-all-center ">
          <Link
            to="/product"
            className="tracking-[10px] KinutaShinStdN6K string-sm side-link left-0 -translate-y-1/2 -translate-x-[50%]  rounded-[50%] custom-vertical-text"
          >
            Product
          </Link>
          <Link
            to="/profile"
            className="tracking-[10px] KinutaShinStdN6K string-sm side-link right-0 -translate-y-1/2 -translate-x-[-50%]  rounded-[50%] custom-vertical-text scale-x-[-1] scale-y-[-1]"
          >
            Profile
          </Link>
          <p className="shootingstar-underline pl-[40px] string-big flex-all-center tracking-[20px]">
            DAWN
          </p>
          <p className="tracking-[5cpx]">Portfolio(v1.4.2)</p>
          <div className="absolute bottom-[10%] right-1/2 translate-x-1/2 flex-all-center space-y-[50px]">
            <div className="scroll-arrow">
              <div className="line"></div>
              <div className="line middle"></div>
              <div className="line"></div>
            </div>
            <p>Scroll</p>
          </div>
        </div>
      </section>
      <section className="w-full py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-8">
            <p className="text-sm tracking-wide text-neutral-500 mb-3">
              お知らせ
            </p>

            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              サーバー環境を Microsoft Azure へ移行しました
            </h2>

            <div className="h-px bg-neutral-200 mb-6" />

            <p className="text-neutral-700 leading-relaxed">
              このたび、より安定した運用と拡張性向上 + 勉強のため、
              これまで利用していた「さくらのVPS」から Microsoft Azure
              へサーバー環境を移行しました。
              <br />
              <br />
              引き続き、応援よろしくお願いいたします。
            </p>
          </div>
        </div>
      </section>

      <section className="flex-all-center flex-col space-y-[30px]">
        <div className="text-center">
          <p
            className={`opacity-section ${animationOpacityStyle}  string-md  `}
          >
            Current Project
          </p>
          <p className={`string-s opacity-section ${animationOpacityStyle}`}>
            現行のプロジェクト
          </p>
        </div>
        <iframe
          className={`w-[50vw] min-w-[390px] aspect-[16/9] opacity-section ${animationOpacityStyle}`}
          src="https://www.youtube.com/embed/QCjvEgtNMpo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="w-[100%] px-[10px] box-border overflow-x-scroll flex space-x-[30px] justify-start ">
          <Shield
            img={ImagesRoute.duskOwl_flaing}
            title="Dawn-DuckShift"
            explain="見守って、整えて、届けるシフト"
            link="https://www.duskshift.dawn-waiting.com"
          />
          <Shield
            img={ImagesRoute.IMG_0168}
            title="日々写真館"
            explain="お写真ポートフォリオ"
            link="https://hibi.dawn-waiting.com"
          />
          <Shield
            img={ImagesRoute.sangira_icon}
            title="Dawn-Rumos"
            explain="変わらぬ日々に魔法をかけて。"
            link="https://rumos.dawn-waiting.com"
          />{" "}
          <Shield
            img={ImagesRoute.jumbubblelogo}
            title="Jambubble"
            explain="動的プレイリストをみんなで"
            link="https://dawn-waiting.com/material/jumbubble_plan"
          />
        </div>
      </section>
      <section className="relative KinutaShinStdN6K w-full h-[300lvh] ">
        <div
          className={`opacity-section ${animationOpacityStyle} absolute z-[3] left-[10%] top-[14%] text-start`}
        >
          <p className="string-ss">My greatest strength is...</p>
          <p className="string-lg">継続を凌駕する実行力</p>
        </div>
        <img
          className={`tracked-element bluer-img-hover opacity-section ${animationOpacityStyle} absolute z-[2] top-[7%] left-[32%] img-custom-box-vertical `}
          src={ImagesRoute.IMG_7041}
        />
        <img
          className={`tracked-element2 opacity-section ${animationOpacityStyle} absolute left-[64%] max-sm:left-[50%] top-[30%] img-custom-box-horizontal z-[2]`}
          src={ImagesRoute.IMG_7038}
        />
        <img
          className={`opacity-section ${animationOpacityStyle} absolute z-[3] left-[47%] top-[41%] img-custom-box-vertical`}
          src={ImagesRoute.IMG_7018}
        />
        <div
          className={`tracked-element3 opacity-section ${animationOpacityStyle} absolute top-[22%] left-[55%] z-[0] size-[300px] border border-[#6F3AFF]`}
        />
        <div
          className={`tracked-element3 opacity-section ${animationOpacityStyle} absolute top-[52%] left-[5%] z-[0] size-[300px] border border-[#6F3AFF]`}
        />
        <div
          className={`opacity-section ${animationOpacityStyle} absolute top-[88%] right-[10%] z-[0] size-[300px] border border-[#6F3AFF]`}
        />
        <p
          className={`opacity-section ${animationOpacityStyle} kinuta-maruminfuji-stdn absolute top-[40%] left-[17%] string-ss leading-[30px] z-[5] max-sm:bg-[#00000066]`}
        >
          足りないからこそ挑み続ける。
          <br />
          やってみることでしか見えない景色がある。
          <br />
          <br />
          「どうすればもっと良くなるか」
          <br />
          「次は何をつくろうか」
          <br />
          <br />
          このサイトは、私の“現在地”を映す場所であり、
          <br />
          同時に“これから”へ踏み出すスタート地点でもあります。
          <br />
          <br />
          未完成であることを恐れず、
          <br />
          実行力を持って挑戦を続けていきます。
          <br />
          <br />
        </p>
        <img
          className={`tracked-element opacity-section ${animationOpacityStyle} absolute img-custom-box-vertical left-[8%] top-[57%]`}
          src={ImagesRoute.IMG_152}
        />
        <img
          className={`tracked-element2 opacity-section ${animationOpacityStyle} absolute left-[27%] top-[72%] z-[3] img-custom-box-vertical`}
          src={ImagesRoute.IMG_7017}
        />
        <p
          className={`opacity-section ${animationOpacityStyle} kinuta-maruminfuji-stdn absolute left-[65%] top-[75%] z-[5] string-ss leading-[30px] max-sm:left-[20%] max-sm:bg-[#00000066]`}
        >
          このサイトは「曙（DAWN）」をテーマにデザインしました。
          <br />
          <br />
          なぜこのテーマを選んだかというと、
          <br />
          昔から夜明け前の静けさや澄んだ空気が好きだからです。
          <br />
          <br />
          その雰囲気を表現するために、
          <br />
          全体をシンプルにまとめつつも、
          <br />
          どこか華やかさを感じられるよう意識して仕上げました。
          <br />
        </p>
      </section>
      <section className="flex-all-center kinuta-maruminfuji-stdn w-full space-y-[300px]">
        <div className="relative w-full h-[150lvh]">
          <div
            className={`opacity-section ${animationOpacityStyle} absolute z-[2] top-1/2 translate-y-[-50%] left-[10%] max-lg:left-1/2 max-lg:translate-x-[-50%]  w-[600px] h-[700px]  text-card flex flex-col justify-center items-start space-y-[50px] max-lg:w-[100%] max-lg:h-[100%] px-[30px]`}
          >
            <p className="string-md border-b">Who am I</p>
            <p className="string-rg">おのでら ひろと</p>
            <p className="string-ss w-full leading-[30px] border-l border-l-[#FFBC00] pl-[10px]">
              IT系の専門学校に通っており、普段はIoTやITをメインに学んでいます。特にプログラミングやシステム設計に興味があり、技術を生かして少しでも必要とされるプロダクトを生み出すことに魅力を感じています。
              <br />
              また、コードを通じてUIを自由にデザインし、動的に変更できることに面白さを感じ、独学でWebデザインやフロントエンド開発にも取り組んでいます。これまでにReactやNode.jsを使った開発経験があり、個人制作としてWebアプリやポートフォリオサイトの制作にも挑戦しました。
              <br />
              今後はデザインやその動き、機能の面からユーザーにとって記憶に残る体験を提供できるエンジニアを目指し、バックエンドやシステム開発の知識も広げていきたいと考えています。
            </p>
            <LinkButton to="/profile" />
          </div>
          <img
            className={`pointer-down opacity-section ${animationOpacityStyle} absolute top-0 z-[1] right-[-20%] max-lg:right-1/2 max-lg:translate-x-[50%]  h-full`}
            src={ImagesRoute.IMG_7043}
            alt=""
          />
        </div>
        <div className="relative w-full h-[100lvh]">
          <img
            className={`pointer-down opacity-section ${animationOpacityStyle} absolute top-0 h-full  z-[1] max-lg:left-1/2 max-lg:translate-x-[-50%]`}
            src={ImagesRoute.IMG_7028}
            alt=""
          />
          <div
            className={`opacity-section ${animationOpacityStyle} absolute z-[2] top-1/2 translate-y-[-50%] right-[10%] max-lg:right-1/2 max-lg:translate-x-[50%]  w-[600px] h-[700px]  text-card flex flex-col justify-center items-start space-y-[50px] max-lg:w-[100%] max-lg:h-[100%] px-[30px]`}
          >
            <p className="string-md border-b">What I Do</p>
            <p className="string-rg">写真を通じて魅力を伝える</p>
            <p className="string-ss w-full leading-[30px] border-l border-l-[#FFBC00] pl-[10px]">
              個人でポートレート撮影や画像編集を行っており、作品に合わせた写真を撮影することができます。「Web
              ×
              写真」の融合に可能性を感じ、デザインの一部として写真を活用することで、より魅力的なビジュアル表現を目指しています。色彩や構図にもこだわり、制作物に最適な雰囲気を持たせるため、自ら撮影した写真を積極的に取り入れています。個人制作で使用している写真はすべて自分で撮影したもので、「Product」ページで実際の作品をご覧いただけます。
            </p>
            <LinkButton to="/profile" />
          </div>
        </div>
      </section>
      <section>
        <ShieldSection />
        <section className="relative kinuta-maruminfuji-stdn section-frame flex-all-center space-y-[100px]">
          <div
            className="absolute z-[20] top-0 size-auto"
            style={{ pointerEvents: "none" }}
          >
            <ShootingStars />
          </div>
          <p className="string-lg mt-[100px] ">Dawn</p>
          <p className="text-white leading-relaxed text-center leading-[50px] string-ss">
            このサイトは、私の個人制作ポートフォリオサイトです。
            <br />
            名前の「DAWN」は、日本語で「夜明け」や「曙」を意味します。
            <br />
            この名前を選んだ理由は単純に夜明けの時間帯が昔から好きだったからです。
            <br />
            涼しくて静かな朝の空気感がとても心地よく、特別感があって好きです。
            <br />
            このポートフォリオには、「ただ好きなものを好きなように作る」というのがテーマになっていて
            <br />
            しょうもないものでも、自由に創作したものを投稿する場にしたいと思っています。
            <br />
          </p>
          <p className="string-rg text-white">このサイトの技術スタック</p>
          <p className="text-white">
            フロントエンド: React
            <br />
            デザイン: Adobe XD
            <br />
            その他:tailwindcss
            <br />
          </p>
        </section>

        <Footer />
      </section>
    </div>
  );
};

export default HomePage;
