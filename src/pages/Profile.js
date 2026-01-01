import { useState, useEffect } from "react";
import StackSection2 from "../components/StackSection2";
import Header from "../components/Header";
import SubPageStartcard from "../components/SubPageStartcard";
import UseOpacityAnimation from "../hooks/UseOpacityAnimation";
import ImagesRoute from "../assets/ImagesRoute";
import MySkillShield from "../components/MySkillShield.";
import Footer from "../components/Footer";
import LikeyStack from "../components/LikeyStack";

import useScrollProgressValue from "../hooks/animation/useScrollProgressValue";
const skillData = [
  {
    fieldImg: ImagesRoute.code,
    field: "Coding",
    roughly: "Web/IoT/App",
    explain:
      "授業で幅広い分野や言語を学んでいますが、Web/ IoT / Aplicationの分野は個人的に好きで授業外でスキルを磨くために勉強をしています。",
    fieldArray: [
      {
        filedTitle: "Web開発",
        libraryName: "HTML/CSS/Javascript:React/tailwind/Node.js/Laravel",
        stackExplain:
          "コードを書くことで自由自在にUIを構築、描画できることに楽しさを感じ独学で勉強をしています。モジュール化を意識して行い、重複したコードをこまめに関数で切り出すことで可読性や再利用性の向上を図っています。HTMLやCSSの値、プロパティ、要素名はほぼ暗記しておりスピーディーかつ正確なコーディングが可能です。",
      },
      {
        filedTitle: "アプリケーション/ソフトウェア開発",
        libraryName: "C#/Java/XML/XAML:.NET framework/.NET MAUI/Android Studio",
        stackExplain: `もともと.NET frameworkに興味があったのと授業でAndroid Studioを学んだことをきっかけに授業外でも勉強しています。.NET frameworkでは自分でほしいなと思った機能を実装したアプリケーションを中心に作成しており、実際に自分で使っているものもあります。このポートフォリオサイト内でダウンロードできるものもあるのでよかったら「Product」から確認してみてください。AndroidStudioではjavaとkotlinの両方の実装方法を学びましたが、正直言ってkotlinは苦手です。
          現在WinUI3やWPFを使ったソフトウェア開発もおこなっています。
          `,
      },
      {
        filedTitle: "IoT",
        libraryName: "C++/Javascript:Arduino/Espruino",
        stackExplain:
          "授業でESP32を使った勉強をしてきました。esp32を用いてユニバーサル基板や数々のモジュールをと併用して個人でも開発を行っています。MQTTを用いてサーバーからリクエストを受け取る処理を実装したり、自分の思考を形にしています。",
      },
    ],
  },
  {
    fieldImg: ImagesRoute.design,
    field: "Design",
    roughly: "Adobe XD,Photoshop/Figma",
    explain:
      "シンプルで操作性が高いのに華やかで彩のあるデザインができるようになるのが目標です。デザインは主にAdobe XDを使っており簡単なUI構築を行うことが可能です。現在は自分の想像どうりのデザインを表現するためにAdobe illustratorを勉強中です。",
    fieldArray: [
      {
        filedTitle: "Figma",
        libraryName: "figma",
        stackExplain: "figmaを使った簡単なデザインが可能です。",
      },
      {
        filedTitle: "Adobe",
        libraryName: "XD,illustrator",
        stackExplain:
          "AdobeXDによるwebUI/UXデザインや、illustratorによる簡単なキャラクター、絵の作成が可能です。XDに関してはFigmaよりも重宝しており、簡単なデザインが可能です。",
      },
    ],
  },
  {
    fieldImg: ImagesRoute.photo,
    field: "Photo",
    roughly: "Canon 80D:Lightroom/Photoshop",
    explain:
      "ポートレート中心に趣味でカメラマンをやっており、「web×お写真」の融合に可能性を感じ自分で撮影した写真を制作物に取り入れています。",
    fieldArray: [
      {
        filedTitle: "撮影",
        libraryName: "Canon 80D",
        stackExplain:
          "テーマを決めず「日常」を撮影することがおおいです。被写体を際立たせる撮影を心がけておりコミュニケーションを通じて笑顔を引き出させる努力をしています。ポートレートだけでなくライブハウスのお写真も撮らせていただいた経験があり明るい写真から暗い場面まで、幅広い撮影が可能です。",
      },
      {
        filedTitle: "レタッチ",
        libraryName: "Lightroom/Photoshop",
        stackExplain:
          "どこか光が飽和したようなふんわりとした仕上がりになるようにレタッチしています。記憶に残りやすいように彩は鮮やかにし被写体を際立たせるようにマスク機能を使用し細かくこだわって作業しています。Photoshopでは肌感を調整することができ依頼内容に合わせて柔軟に調整することができます。",
      },
    ],
  },
];

const Profile = () => {
  const scrollMaxValue = 1080;
  const { animationOpacityStyle } = UseOpacityAnimation();
  const [circleValue, setCircleValue] = useState();
  const [circleValue2, setCircleValue2] = useState();
  const scrollValue = useScrollProgressValue(".scroll-target", 25);
  const scrollValue2 = useScrollProgressValue(".scroll-target2", 25);
  useEffect(() => {
    const result = (scrollValue / 100) * scrollMaxValue;
    setCircleValue(result);
  }, [scrollValue]);
  useEffect(() => {
    const result = (scrollValue2 / 100) * scrollMaxValue;
    setCircleValue2(result);
  }, [scrollValue2]);
  return (
    <div className="kinuta-maruminfuji-stdn">
      <Header />
      <section
        className="section-frame sticky top-0 z-[-1]"
        style={{
          backgroundSize: "cover",
          background: `url(${ImagesRoute.IMG_7043})`,
          backgroundPosition: "center",
        }}
      ></section>
      <SubPageStartcard title={"わたしのこと"} className="absolute top-0" />
      {/**自己紹介 */}
      <div>
        <section className="bg-[#2F1C63] w-screen h-[50lvh]"></section>
        <section
          className="relative w-full h-[300lvh] scroll-target"
          style={{
            backgroundImage: `linear-gradient(#00000066),url(${ImagesRoute.IMG_7035})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="sticky top-0 section-frame">
            <div
              className="relative absolute"
              style={{
                zIndex: 5,
                width: "150vw",
                height: "100vh",
                left: "-50%",
                background: "#2F1C63",
                maskImage: `radial-gradient(circle at center, transparent ${circleValue}px, black ${
                  circleValue + 1
                }px)`,
                WebkitMaskImage: `radial-gradient(circle at center, transparent ${circleValue}px, black ${
                  circleValue + 1
                }px)`,
                transition: "all 2s ease-in-out",
              }}
            ></div>
          </div>
          <div className="sticky top-0 left-0 section-frame flex items-center justify-around max-lg:flex-col">
            <div
              className={`opacity-section ${animationOpacityStyle} text-start`}
            >
              <p className="string-lg">当たり前を作りたい</p>
              <p className="string-sm">
                I want to shape what people take for granted.
              </p>
              <p className="string-sss">My goal is...</p>
            </div>
            <p
              className={`opacity-section ${animationOpacityStyle} leading-[40px] profile-appeal-text string-s`}
            >
              もともとパソコンを触るのが好きで、自然とITに興味を持つようになりました。
              あるときふと、「今、スマホやパソコンを誰もが当たり前のように使っているけど、
              よく考えたらこれを作った人って本当にすごいな」と感じたことがあります。
              それ以来、“人々にとって当たり前と思われるようなものを、
              自分もいつか作りたい”という想いを持つようになりました。
              <br />
              <br />
              この考え方のきっかけのひとつに、鉄道会社の存在があります。
              たとえば、JRや京阪などの鉄道企業は、毎日何百万人もの人を安全にまた低価格で運び続けています。
              当たり前に電車が動いているように見えて、その裏には膨大なシステムと人の努力がある。
              もちろん、そういった巨大な仕組みを一人でつくることはできません。
              でも、自分にも何かしらの形で、“日々誰かが使い続ける仕組み”を届けられるんじゃないか――
              <br />
              <br />
              そう思ったとき、自分の好きな分野であるITの世界で挑戦していきたいと思うようになりました。
            </p>
          </div>
        </section>{" "}
        <section
          className="relative w-full h-[300lvh] scroll-target2 "
          style={{
            backgroundImage: `linear-gradient(#00000066),url(${ImagesRoute.IMG_1782})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="sticky top-0 section-frame">
            <div
              className="relative"
              style={{
                zIndex: 5,
                width: "150vw",
                height: "100vh",
                left: "0",
                background: "#2F1C63",
                maskImage: `radial-gradient(circle at center, transparent ${circleValue2}px, black ${
                  circleValue2 + 1
                }px)`,
                WebkitMaskImage: `radial-gradient(circle at center, transparent ${circleValue2}px, black ${
                  circleValue2 + 1
                }px)`,
                transition: "all 2s ease-in-out",
              }}
            ></div>
          </div>
          <div className="sticky top-0 left-0 section-frame flex items-center justify-around max-lg:flex-col">
            <div
              className={`opacity-section ${animationOpacityStyle} text-start`}
            >
              <p className="string-lg">
                「シンプルだけど、華やか。」
                <br />
                そんなWebをつくりたい
              </p>
              <p className="string-sm">
                "Simple, yet striking." That’s the kind of web design I want to
                create.
              </p>
              <p className="string-sss">What I keep in mind when designing</p>
            </div>
            <p
              className={`opacity-section ${animationOpacityStyle} leading-[40px] string-s profile-appeal-text`}
            >
              Webやアプリをつくるとき、最初に取りかかるのはUIデザインです。
              私は個人制作でも、まず「見やすさ」「使いやすさ」「ちょっとした遊び心」
              を意識しながらデザインを進めています。
              <br />
              <br />
              なかでも、アニメーションや細かなギミックを通して
              “印象に残る体験”をつくることにこだわっています。
              “動き”を通じて心が動くような、そんなWebサイトが好きです。
              <br />
              <br />
              目指しているのは、シンプルで操作しやすいのに、どこか彩りがあって心地いい。
              そんな「使いやすさ」と「華やかさ」のバランスがとれたWebサイトを、
              自分の手で届けられるようになりたいと思っています。
            </p>
          </div>
        </section>
        <section className="flex-all-center section-padding my-[100px]">
          <div className="flex items-center justify-evenly w-full max-sm:flex-col max-sm:space-y-[30px]">
            <div
              className={`opacity-section ${animationOpacityStyle}  w-[600px] h-[700px]  text-card flex flex-col justify-center items-start space-y-[50px] max-lg:w-[100%] max-lg:h-[100%] px-[30px]`}
            >
              <p className="string-md border-b">Who I am</p>
              <p className="string-rg">おのでら ひろと</p>
              <p className="string-ss w-full leading-[30px] border-l border-l-[#6F3AFF] pl-[10px]">
                IT系の専門学校に通っており、普段はIoTやインフラ、サーバーサイドをメインに学んでいます。特にプログラミングやシステム設計に興味があり、技術を生かして少しでも必要とされるプロダクトを生み出すことに魅力を感じています。
                <br />
                また、コードを通じてUIを自由にデザインし、動的に変更できることに面白さを感じ、独学でWebデザインやフロントエンド開発にも取り組んでいます。これまでにReactやNode.jsを使った開発経験があり、個人制作としてWebアプリやポートフォリオサイト(React,ASP.NETを使用)の制作にも挑戦しました。
                <br />
                今後はデザインやその動き、機能の面からユーザーにとって記憶に残る体験を提供できるエンジニアを目指し、バックエンドやシステム開発の知識もさらに広げていきたいと考えています。
              </p>
            </div>
            <figure>
              <img
                className={`opacity-section ${animationOpacityStyle} w-[300px] rounded-[30px]`}
                src={ImagesRoute.MePhoto}
                alt="Mephoto"
              />
            </figure>
          </div>
        </section>
        <section className="h-auto w-full flex-all-center py-[200px]">
          <div className="flex-all-center space-y-[50px]">
            <div className="section-title h-auto">
              使用可能なプログラミング言語
            </div>
            <StackSection2 />
            <div className="section-title h-auto">
              得意なプログラミング言語&フレームワーク
            </div>
            <LikeyStack />
          </div>
        </section>
        {/**できること */}
        <section className="section-padding h-auto flex-all-center space-y-[50px] max-md:space-y-[100px]">
          <div className="section-title h-auto">できること</div>
          {skillData.map((item, index) => (
            <MySkillShield
              key={index}
              items={item} // skillData の各要素を items として渡す
              fieldArray={item.fieldArray} // fieldArray を渡す
            />
          ))}
        </section>
        <section className="flex-all-center section-padding space-y-[100px] mt-[100px] mx-[30px]">
          <div className="section-title h-auto">強み</div>
          <div className="max-w-[800px]  flex flex-col justify-center items-start space-y-[30px]">
            <p className="string-rg border-b">実行力</p>
            <p className="string-ss w-full leading-[30px] border-l border-l-[#6F3AFF] pl-[10px]">
              私の一番の強みは実行力です。
              プログラミング学習では、授業で習う知識にとどまらず、思いついた機能を自主的に実装し、実践を重ねてきました。また、経験を積むためにハッカソンにも積極的に参加し、多くの挑戦を通じてスキルを磨いています。
              さらに、高校時代には軽音楽部の副部長として、専門学校では学生会の副会長として、組織の運営やチームをまとめる役割を担いました。計画を立てるだけでなく、実際に行動し、結果を出すことを常に意識しています。
              私はこれからも、学びや挑戦の場面で「まず行動する」姿勢を大切にし、実行を通じて成長していきたいと考えています。{" "}
            </p>
          </div>
          <div className="max-w-[800px] flex flex-col justify-center items-start space-y-[30px]">
            <p className="string-rg border-b">探求心</p>
            <p className="string-ss w-full leading-[30px] border-l border-l-[#6F3AFF] pl-[10px]">
              私はイタリアン(梅田ワーフ)でアルバイトをしており、そこでお客様から様々な質問をされます。
              例えば、「生牡蠣に合うお酒は？」と質問を受けた際、最初は先輩に頼るだけでしたが、「なぜ合うのか？」と自分で調べるようになり、最近では自信を持って答えられるようになりました。この姿勢を評価していただき、リピーターのお客様を獲得したり、名前を覚えてもらえるようになりました。
              わからないことがあればすぐに調べて自分のものにすることを意識しています。
            </p>
          </div>
          <div className="max-w-[800px] flex flex-col justify-center items-start space-y-[30px]">
            <p className="string-rg border-b">コード書くのが楽しい</p>
            <p className="string-ss w-full leading-[30px] border-l border-l-[#6F3AFF] pl-[10px]">
              コード書くのが楽しいです！
              作り始めたものを完成というゴールに向かって構築することが大変楽しく、何時間も時間を使ってしまいます。
              特にwebの分野はコードでデザインが出来上がっていくのが魅力的でのめりこんでしまいます。
            </p>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
