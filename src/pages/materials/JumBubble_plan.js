import { motion, AnimatePresence } from "framer-motion";
import ImagesRoute from "../../assets/ImagesRoute";
import UseOpacityAnimation from "../../hooks/UseOpacityAnimation";

const titleMotion = {
  initial: {
    filter: "blur(20px) saturate(0%)",
    opacity: 0,
  },
  animate: {
    filter: "blur(0px) saturate(100%)",
    opacity: 1,
  },
  transition: { duration: 1 },
};
const titleElementMotion = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: "0%", opacity: 1 },
  exit: { y: "100%", opacity: 0 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

const Mokuzi = (items) => {
  const { animationOpacityStyle } = UseOpacityAnimation();
  return (
    <div
      className={`opacity-section ${animationOpacityStyle} w-[500px] flex items-start justify-start border-b border-b-[#6B6B6B] ${
        items.absolute ? "absolute top-0 left-0 m-[20px]" : ""
      }`}
    >
      <p className="string-m text-[#ff8800]">{items.number}.</p>
      <div className="flex flex-col">
        <p className="string-m">{items.title}</p>
        <p className="string-sm">{items.explain}</p>
      </div>
    </div>
  );
};

const JumBubble_plan = () => {
  const { animationOpacityStyle } = UseOpacityAnimation();
  return (
    <div>
      <section className="relative section-frame flex justify-center items-center space-x-[10px]">
        <div className="flex items-center justify-center overflow-hidden">
          <div className="flex items-center justify-center">
            <motion.h1
              {...titleMotion}
              className="Noto-Sans-CJK-JP font-black string-big"
            >
              JumBubble
            </motion.h1>
            <motion.img
              {...titleElementMotion}
              transition={{ delay: 1.5 }}
              className="size-[80px]"
              src={ImagesRoute.jumbubblelogo}
            />
          </div>
          <motion.p
            {...titleElementMotion}
            transition={{ delay: 1.8 }}
            className="string-md mt-[30px]"
          >
            by
          </motion.p>
          <motion.img
            {...titleElementMotion}
            transition={{ delay: 2.1 }}
            className="w-[150px]"
            src={ImagesRoute.DayoffWhiteLogo}
          />
        </div>
        <p className="absolute z-[3] bottom-0 left-1/2 translate-x-[-50%]">
          SK3A:加藤昌輝,小野寺広登,石塚直樹,朴建泳
        </p>
        <img
          src={ImagesRoute.night_view}
          className="absolute section-frame top-0 left-0 z-[-2] opacity-[0.8]"
        />
      </section>
      <section className="section-frame relative flex-all-center ">
        <Mokuzi absolute={true} number="00" title="もくじ" />
        <div className="flex space-x-[100px] items-center">
          <div className="flex flex-col items-start space-y-[20px]">
            <Mokuzi number="01" title="チーム紹介" explain="なぜDayOff?" />
            <Mokuzi
              number="02"
              title="導入"
              explain="目を付けた事象につながる話をします"
            />
            <Mokuzi number="03" title="問題定義" explain="感じている問題" />
            <Mokuzi number="04" title="コンセプト" explain="企画を進める軸" />
            <Mokuzi
              number="05"
              title="解決案と主要機能"
              explain="問題を解決するためのアプローチ"
            />
            <Mokuzi
              number="06"
              title="もう一つの使い方"
              explain="主要機能とは別の機能"
            />
          </div>
          <div className="flex flex-col items-start justify-center space-y-[20px]">
            <Mokuzi
              number="07"
              title="期待される効果
"
              explain="このシステムによって改善される点"
            />{" "}
            <Mokuzi
              number="08"
              title="既存のシステムとの差別化"
              explain="既存のシステムと重なる点・異なる点"
            />{" "}
            <Mokuzi
              number="09"
              title="技術スタック"
              explain="どのような技術を用いるか"
            />{" "}
            <Mokuzi number="10" title="まとめ" />
            <img className="p-[100px]" src={ImagesRoute.bubble} />
          </div>
        </div>
      </section>
      <section className="relative section-frame flex items-center justify-evenly">
        <Mokuzi
          absolute={true}
          number="01"
          title="チーム紹介"
          explain="なぜDayOff?"
        />
        <figure
          className={`w-[300px] opacity-section ${animationOpacityStyle}`}
        >
          <img src={ImagesRoute.DayoffWhiteLogo} />
        </figure>
        <div className="max-w-[600px] space-y-[50px]">
          <p>意味:休日</p>
          <p>
            Holiday:「祝日」「連休」「長期の休暇」など、“特別な理由で休みになる日”。
            DayOff:「仕事・学校を休む日」＝“個人的な休み”
          </p>
          <p>
            企画内容が休日とあっているような内容だったのと、
            メンバーみんなが気張りすぎないようにゆるい意味を持つチーム名にしました。
          </p>
        </div>
      </section>
      <section className="relative section-frame flex items-center justify-evenly">
        <Mokuzi
          absolute={true}
          number="02"
          title="導入"
          explain="目を付けた事象につながる話をします"
        />
        <div className="flex flex-col space-y-[30px]">
          <h2 className="string-md">あなたに質問です。</h2>
          <p className="string-sm flex flex-col space-y-[10px] ml-[20px]">
            <span className={`opacity-section ${animationOpacityStyle}`}>
              あなたは普段ドライブに行きますか？
            </span>
            <span className={`opacity-section ${animationOpacityStyle}`}>
              1人で行きますか？
            </span>
            <span
              className={`opacity-section text-[#FF8800] ${animationOpacityStyle}`}
            >
              誰かと行きますか？
            </span>
            <span className={`opacity-section ${animationOpacityStyle}`}>
              車は何台でいきますか？
            </span>
            <span className={`opacity-section ${animationOpacityStyle}`}>
              音楽は流しますか？
            </span>
            <span
              className={`opacity-section text-[#FF8800] ${animationOpacityStyle}`}
            >
              何を流しますか？
            </span>
          </p>
          <h3 className="string-rg">
            これらにまつわるテーマをお持ちしました。
          </h3>
        </div>
        <figure className="w-[500px] ">
          <img
            className={`opacity-section ${animationOpacityStyle}`}
            src={ImagesRoute.carnav_photo}
          />
        </figure>
      </section>
      <section className="relative">
        <Mokuzi
          absolute={true}
          number="03"
          title="問題定義"
          explain="感じている問題"
        />
        <div className="section-frame flex items-center justify-evenly">
          <div className="string-m space-y-[20px]">
            <p>
              ドライブ中の音楽。
              <br />
              Bluetoothスピーカーに接続できるのは、たった一台。
            </p>
            <p>
              その結果、音楽の選曲権はいつも同じ人に。
              <br />
              他の同乗者はただ「聴くだけ」になってしまう。
            </p>
            <p>
              <span className="text-[#FF8800]">──</span>
              せっかくみんなで出かけているのに、
              <br />
              　音楽の体験は“共有”できていない。
            </p>
          </div>
          <figure
            className={`w-[480px] h-[315px] opacity-section ${animationOpacityStyle}`}
            style={{
              background: `linear-gradient(to left,rgba(0,0,0,0),rgba(0,0,0,1)),url(${ImagesRoute.pexels_thevibrantmachine_3066867}`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
        <div className="section-frame flex-all-center string-sm leading-[35px]">
          ・ドライブ中の音楽、いつも同じ人が選んでいませんか？
          <br />
          ・Bluetoothで繋げるのは一台だけ──その制限が、音楽の楽しみを狭めていませんか？
          <br />
          ・車の中の音楽、みんなで楽しんでいるつもりでも、実は“聴かされているだけ”の人がいませんか？
          <br />
          ・選曲権が一人に集中すると、他の人の好みや気分は置き去りになってしまう。
          <br />
          ・「音楽を共有する」つもりが、いつの間にか「音楽を支配する」構図になっていませんか？
          <br />
          ・あなたが好きな音楽も流したくないですか？
          <br />
          ・車のスピーカーはみんなのもの。でも実際に使っているのは一人だけ。
          <br />
          ・ドライブの思い出を作るはずの音楽が、誰かの孤独を生んでいませんか？
          <br />
          ・一緒にいるのに、聴いている世界がバラバラ──そんな経験、ありませんか？
          <br />
          ・ドライブという“共有体験”の中で、音楽だけが“個人の体験”になってしまっている。
          <br />
          ・音楽権を交換する時Bluetooth切って繋げてが面倒ではありませんか？
          <br />
        </div>
        <div className="section-frame flex-all-center">
          <p className="string-sm">結局それって...</p>
          <p className="string-rg">
            選曲権が一人に<span className="string-lg">"だけ"</span>
            あるのがいけないんじゃない？
          </p>
        </div>
      </section>
      <section className="relative section-frame flex-all-center">
        <Mokuzi
          absolute={true}
          number="04"
          title="コンセプト"
          explain="企画を進めるに当たっての軸"
        />
        <div className="flex flex-col justify-center items-center ">
          {" "}
          <p className="w-full txet-start string-rg">我々は</p>
          <h1 className="px-[50px] string-md">
            車内で一つのプレイリストを、
            <span className="string-lg">"みんなで奏でる"</span>体験
          </h1>
          <p className="w-full text-end string-rg">をお作りいたします。</p>
        </div>
      </section>
      <section>
        <div className="relative section-frame flex-all-center space-y-[100px]">
          <Mokuzi
            absolute={true}
            number="05"
            title="解決案と主要機能"
            explain="問題を解決するためのアプローチ"
          />
          <div className="text-center space-y-[50px]">
            <p className="string-rg">
              課題のおさらい:
              Bluetooth接続が1台しかできないから、音楽の操作と趣味が一人のものに集中してしまう。
            </p>
            <p className="string-m">ならば...</p>
            <p className="string-lg">「全員が選曲に参加できればいい」</p>
          </div>
          <p className="text-center string-m ">
            リアルタイムで編集可能な動的プレイリストを作成し
            <br />
            そこに"皆で"音楽を追加していく。というアプローチで
            <br />
            これらの問題を解決しようと思います
            <br />
          </p>
        </div>
        <div className="section-frame flex justify-evenly items-center">
          <p className="string-sm">
            Bluetoothに接続しているホスト(A)が専用のアプリで
            <br />
            部屋を作るとWebリンクと共にQRコード発行。
            <br />
            ゲスト(B,C,D)はそのリンクを踏むことでその部屋のプレイリス
            <br />
            トに音楽をリクエストすることができます。
            <br />
            <br />
            リクエストされた音楽はアプリ側に即時反映され、
            <br />
            順番にホスト端末から流れていきます。
            <br />
            <br />
            ＊Webゲストがリクエストするのは音楽ファイル
            <br />
            そのものではなく、一意に識別できる「ID」等です。
          </p>
          <figure className="w-[600px]">
            <img src={ImagesRoute.example_dayoff} />
          </figure>
        </div>
      </section>
      <section className="relative section-frame flex justify-evenly items-center">
        <Mokuzi
          absolute={true}
          number="06"
          title="もう一つの使い方"
          explain="主要機能とは別のユースケース"
        />{" "}
        <figure className="w-[500px]">
          <img src={ImagesRoute.example_dayoff2} />
        </figure>{" "}
        <p className="string-sm">
          アプリを持っているホストが何人かいれば、
          <br />
          同時にいくつもの場所で音楽を流せます。
          <br />
          <br />
          たとえば大人数での卒業旅行で車が2台に分かれても、
          <br />
          同じプレイリストを一緒に作って、
          <br />
          両方の車で同じ曲を流すことができます。
          <br />
          <br />
          ちなみに実際に流れる音楽データと情報は
          <br />
          Spotify or AppleMusicのシステムを用い、リクエスト
          <br />
          には一意に識別できる値だけを用います。
          <br />
          もちろん、アプリ使用者は各プラットフォームの
          <br />
          アカウントが必要になります。
          <br />
        </p>
      </section>
      <section className="relative section-frame flex-all-center space-y-[50px] text-start">
        {" "}
        <Mokuzi
          absolute={true}
          number="07"
          title="期待される効果"
          explain="このシステムによって改善される事象"
        />
        <div className="w-[1000px]">
          <p className="string-rg">1.体験共有の向上</p>
          <div className="pl-[50px] string-sm">
            <p>
              ・全員が曲を提案できることで、音楽体験が「一人の好き」から「みんなのセッション」になる
            </p>
            <p>
              ・「受動的な聴取」→「能動的な参加」に変わることで、会話のきっかけが増える。
            </p>
          </div>
        </div>
        <div className="w-[1000px]">
          <p className="string-rg">2.利便性の向上</p>
          <div className="pl-[50px] string-sm">
            <p>
              ・スピーカーに接続できるのはホスト1台でも、全員が選曲に参加可能。
            </p>
            <p>
              ・Bluetooth接続やログインの煩わしさをなくし、QR一つで即参加できる快適さ。
            </p>
          </div>
        </div>
        <div className="w-[1000px]">
          <p className="string-rg">3.新しいシーン創出</p>
          <div className="pl-[50px] string-sm">
            <p>
              ・車内だけでなく、カフェ・ホームパーティー・勉強会・小イベントなど、あらゆる「小さな共有空間」に音楽を溶け込ませられる。
            </p>
            <p>
              ・離れた場所でも同じプレイリストを作れるため、**「距離を越えた共聴体験」**が可能に。
            </p>
          </div>
        </div>
      </section>
      <section className="relative section-frame">
        <Mokuzi
          absolute={true}
          number="08"
          title="既存のシステムとの差別化"
          explain="既存のシステムと重なる点・異なる点"
        />
        <div className="section-frame flex justify-center ml-[200px] items-start flex-col space-y-[50px] text-start">
          <div className="w-[1500px]">
            <p className="string-rg">類似のアプリ：</p>
            <div className="pl-[50px] string-sm">
              <p>
                Spotify Jam / Group Session
                ・・・共通のキューで友達が曲を追加できたり、リアルタイムで一緒に聴ける機能がある。
              </p>
              <p>
                Playlistr・・・Spotify
                を使って「部屋(ルーム)を作って、友達と共有のキューでリアルタイムに曲を追加・再生・スキップできる」機能がある。
              </p>
              <p>
                A collaborative listening room using
                Spotify(github)・・・複数ユーザーが曲を提案して投票して、それを同期して
                Spotify で再生するような仕組み{" "}
              </p>{" "}
              <p>
                Rider
                Jukebox・・・車の乗客に音楽のコントロール権を与えるようなアプリ／Webアプリ。車内の乗員が音楽を共有するというアイディアが近い。
              </p>
            </div>
          </div>
          <div className="w-[1000px]">
            <p className="string-rg">重なる点：</p>
            <div className="pl-[50px] string-sm">
              <p>複数人で共有のキューで音楽を再生できる</p>
              <p>QRコード／リンクを共有して参加できる形態</p>
              <p>
                リアルタイム性（参加者が追加・スキップをすると他の人にも反映される）
              </p>
            </div>
          </div>
          <div className="w-[1000px]">
            <p className="string-rg">異なる点：</p>
            <div className="pl-[50px] string-sm">
              <p>
                単一の スピーカー接続を前提として、選曲権の偏りを減らす仕組み
              </p>
              <p>遠隔地でも共同でプレイリストを作って再生する機能</p>
              <p>Webゲストがアカウントやログインを必要としない</p>
            </div>
          </div>
        </div>
        <img
          className="absolute z-[-1] top-[10%] right-[0%] w-[500px] opacity-[0.5]"
          src={ImagesRoute.ruizi_1}
        />
        <img
          className="absolute z-[-1] bottom-[10%] right-[20%] w-[500px]  opacity-[0.5]"
          src={ImagesRoute.ruizi_2}
        />
        <img
          className="absolute z-[-1] top-[40%] right-[10%] w-[500px]  opacity-[0.5]"
          src={ImagesRoute.ruizi_3}
        />
      </section>
      <section className="relative section-frame flex-all-center">
        <Mokuzi
          absolute={true}
          number="09"
          title="技術スタック"
          explain="どのような技術を用いるか"
        />
        <img className="h-[70vh]" src={ImagesRoute.dayoff_tecnorogy} />
      </section>
      <section className="relative section-frame flex-all-center">
        <Mokuzi absolute={true} number="10" title="まとめ" />
        <p className="string-lg">ドライブを、もっと楽しめるようにしたい</p>
      </section>
    </div>
  );
};

export default JumBubble_plan;
