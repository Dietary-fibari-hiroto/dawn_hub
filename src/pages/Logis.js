import ImagesRoute from "../assets/ImagesRoute";

import Product from "../components/Product";

import useScrollAnimation from "../hooks/useScrollAnimation";

import "../assets/styles/animateStyles.css";

const Logis = () => {
  const { animationStyle } = useScrollAnimation();

  const productname = "Logis";

  const project_detail = {
    title: productname,
    bg: "logis-bg",
    title_bar: <p>{productname}</p>,
    log: ImagesRoute.logis_icon,
    top_bg: ImagesRoute.IMG_1347,
    project_state: (
      <a
        href="https://logis.dawn-waiting.com"
        className={` px-[10px] py-[5px] rounded-[10px] bg-[#777777] `}
      >
        制作中...(閲覧できます。)
      </a>
    ),
    main_catchcopy: "情報、整理。伝達、スムーズ。",
    subtitle: "絶対的な共有を。",
    subimg: ImagesRoute.logis_sc1,
    width_src: ImagesRoute.logis_ap,
    width_explain: (
      <p
        className={`scroll-section ${animationStyle} string-sm space-y-[10px]`}
      >
        <p className={`scroll-section ${animationStyle}`}>Logisとは、</p>
        <p className={`scroll-section ${animationStyle}`}>
          大事な共有事項をメッセージアプリ等で配信していませんか？
        </p>
        <p className={`scroll-section ${animationStyle}`}>
          それだと見づらいし、見逃してしまう可能性も...
        </p>
        <p className={`scroll-section ${animationStyle}`}>
          そんな共有事項もここにまとめておきませんか？
        </p>
        <p className={`scroll-section ${animationStyle}`}>
          過去の最新のトピックからマニュアルまで
        </p>
        <p className={`scroll-section ${animationStyle}`}>一丸共有！</p>
        <br />
      </p>
    ),
    explain2_src: ImagesRoute.logis_sc3,
    explain2_title: "必読事項も確認",
    explain2_text: (
      <p className="string-ss pace-y-[10px]">
        「絶対にこの情報だけは共有しておきたい」
        <br />
        そんな情報は「必読ページ」に投稿すると
        <br />
        見た人には閲覧マークがつき、
        <br />
        まだ見ていない人をすぐに確認できます。
        <br />
      </p>
    ),

    explain3_bg: ImagesRoute.IMG_152,
    appealTagValues: [
      {
        position: "top-[0] max-sm:left-1/2 -translate-x-1/2",
        title: "アカウント",
        text: (
          <div>
            アカウントに権限の設定を付与することができ、
            <br />
            OPアカウントには「作成、編集、投稿、閲覧」
            <br />
            クルーアカウントは「閲覧」を可能にします。
          </div>
        ),
      },
      {
        position: "top-[25%] max-sm:right-1/2 -translate-x-[-50%]",
        title: "足あと機能",
        text: (
          <div>
            必読項目には足跡機能がついており、
            <br />
            すでに確認済みか否かを簡単にチェックできます。
            <br />
            まだ確認できていない人に閲覧を促すことが可能です。
          </div>
        ),
      },
      {
        position: "top-[50%] max-sm:left-1/2 -translate-x-1/2",
        title: "ネスト仕様",
        text: (
          <div>
            共有事項はトピックによって仕訳ができ、
            <br />
            各項目に適した情報を投稿できます。
            <br />
          </div>
        ),
      },
      {
        position: "top-[75%] max-sm:right-1/2 -translate-x-[-50%]",
        title: "クルーアカウント",
        text: (
          <div>
            店舗ログインするとクルーアカウントが作成でき、
            <br />
            従業員の数だけアカウントを作成、管理が可能です。
            <br />
          </div>
        ),
      },
    ],
    stackValue: [
      { img: ImagesRoute.node, name: "Node.js", lang: "Javascript" },
      {
        img: ImagesRoute.react_ico,
        name: "React",
        lang: "HTML,CSS,JavaScript",
      },
      {
        img: ImagesRoute.tailwind,
        name: `Tailwindcss`,
        lang: "CSS",
      },
    ],
    dialog: (
      <div className="max-w-[600px]">
        <div className="pt-[100px]">
          <p className="string-lg">{productname}</p>
        </div>
        <div className="text-white leading-relaxed space-y-6">
          <h1 className="string-rg">背景と課題</h1>
          <p>
            現在バイト先の共有事項や簡単なマニュアルをグループLINEのノートでまとめおり、とても見づらく自分の確認したいトピックの位置がわかりずらいなど様々な問題があるので、それをまとめて表示、管理するツールがほしい。
          </p>
          <h1 className="string-rg">解決策</h1>
          <p>新しいプラットフォームを作成し、そこで管理する。</p>
          <h1 className="string-rg">{productname}の機能</h1>
          <p>
            ・店IDとログインコードを作成し、さらにその中にクルーと社員のアカウント(ここはパスワードなしでもよい)を作成する。
            社員アカウントはマニュアルやトピックなどの共有事項を「作成、編集、投稿、閲覧」することが可能で、
            クルーアカウントはそれらの情報を「閲覧」することが可能。
            ・クルーが閲覧すると「Done」マーク(足跡のようなもの)がつき、確認したか確認していないかを判別できる。
            こうすることにより、必ず頭に入れておいてほしい共有事項があった場合、出勤前などに読んでいるかチェックすることができる。
            （この機能は「必読の共有事項」というトピックにのみ与える。）
            ・トピックによってトグルリストのような機能を持たせ、まとめることができる。
            たとえば「接客」に関しての「マニュアル」ならば、「ログイン→マニュアル→接客→リスト...」
            必読の共有事項なら「ログイン→共有事項→リスト...」等。
            ログインより先のトピックはできれば社員アカウントで作成、編集できるようにしたい。
          </p>
        </div>
        <h2 className="string-rg text-white">技術スタック</h2>
        <p className="text-white">
          フロントエンド: React,tailwindcss
          <br />
          バックエンド:Node.js
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

export default Logis;
