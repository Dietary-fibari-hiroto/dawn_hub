import ImagesRoute from "../assets/ImagesRoute";
import useScrollAnimation from "../hooks/useScrollAnimation";

import Product from "../components/Product";

import "../assets/styles/animateStyles.css";



const SS = () => {

    const { animationStyle } = useScrollAnimation();

    const productname = "Shutter Showcase"

    const project_detail = {
        title: productname,
        title_bar: (<p>Shutter<br />Showcase</p>),
        bg: "sunny-bg",
        log: ImagesRoute.SSlog,
        top_bg: ImagesRoute.manaphoto,
        project_state: (<a className=" bg-[#777777] px-[10px] py-[5px] rounded-[10px]">制作中...</a>),
        main_catchcopy: "あなたの写真を簡単にオンライン展示。",
        subtitle: "すべての一瞬を、作品に。",
        subimg: ImagesRoute.IMG_2839,
        width_src: ImagesRoute.IMG_2122,
        width_explain: (
            <p className={`scroll-section ${animationStyle} string-ss space-y-[10px]`}>
                <p className={`scroll-section ${animationStyle}`}>Shutter Showcaseとは、</p>
                <p className={`scroll-section ${animationStyle}`}>あなたの写真を、簡単にオンラインで展示できるwebアプリです。</p>
                <p className={`scroll-section ${animationStyle}`}>豊富な写真館(テンプレート)から選んで、</p>
                <p className={`scroll-section ${animationStyle}`}>自分だけのポートフォリオを簡単に作成できます。</p>
                <p className={`scroll-section ${animationStyle}`}>作品を美しく公開し、世界中にシェアしよう！</p><br /></p>
        ),
        explain2_src: ImagesRoute.scs,
        explain2_title: "もっと魅せたいを",
        explain2_text: (<p className="string-ss space-y-[10px]">
            綺麗に取れたお写真、飾ってみませんか？<br />
            撮影した写真を、<br />
            より美しい形で見せたいときに最適です。<br />
            あなたの作品を引き立てるための、<br />
            スタイリッシュな展示が簡単に実現できます。<br /></p>),

        explain3_bg: ImagesRoute.IMG_5658,
        appealTagValues: [
            {
                position: "top-[0] max-sm:left-1/2 -translate-x-1/2", title: "目の負担を軽減", text: (
                    <div>長時間の画面作業でも目が疲れにくい、<br />
                        快適な作業環境を提供。<br />
                        夜間でも安心して作業できます。</div>
                )
            }, {
                position: "top-[25%] max-sm:right-1/2 -translate-x-[-50%]", title: "幅広い明るさ設定", text: (
                    <div>OSで設定できる明るさに加え、<br />
                        さらに自分の好みに合わせて<br />
                        細かく明るさを調整可能。</div>
                )
            }, {
                position: "top-[50%] max-sm:left-1/2 -translate-x-1/2", title: "ナイトシフト機能", text: (
                    <div>目の負担を軽減する暖色化機能を搭載。<br />
                        夜間の作業時に最適な色温度に調整でき、<br />
                        自然な感じで作業をサポートします。</div>
                )
            }, {
                position: "top-[75%] max-sm:right-1/2 -translate-x-[-50%]", title: "マルチディスプレイ対応", text: (
                    <div>複数のモニターを使用している環境でも、<br />
                        全てのディスプレイで快適な作業環境を提供。<br />
                        ディスプレイごとに独立した設定が可能。</div>
                )
            }
        ],
        stackValue: [
            { img: ImagesRoute.laravel_icon, name: "Laravel", lang: "php" },

        ],
        dialog: (
            <div>
                <div className="pt-[100px]">
                    <p className="string-lg">{productname}</p>
                </div>
                <div className="text-white leading-relaxed space-y-6">
                    <p>
                        シャッターショーケースは、自分の撮影した写真をインターネット上でポートフォリオとして展示できるWebアプリです。
                        一眼レフでポートレート撮影を趣味とする私自身の経験から、写真を魅力的に「見せる」場がもっと必要だと感じ、このシステムを開発しました。InstagramのようなSNSでは写真をシンプルに共有することが主ですが、シャッターショーケースでは展示会のように写真を飾り、より印象的に公開できます。
                    </p>
                    <h2 className="string-rg">主な機能</h2>
                    <p>
                        複数の写真をアップロードし、多彩なテンプレートから選択して展示会を作成
                        展示会をSNSで公開可能
                        投稿や閲覧機能（最近の投稿、人気の投稿、ランダム表示など）
                    </p>

                </div>
                <h2 className="string-rg text-white">技術スタック</h2>
                <p className="text-white">
                    フロントエンド: Laravel (HTML, CSS), Tailwind CSS<br />
                    バックエンド: Laravel (PHP), MySQL<br />
                    デザイン: Adobe XD<br />
                    その他:
                </p>
            </div>
        )

    }

    return (
        <Product productname={productname} project_detail={project_detail} />
    )

}


export default SS;