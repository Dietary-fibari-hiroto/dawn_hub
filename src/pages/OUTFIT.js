import ImagesRoute from "../assets/ImagesRoute";

import Product from "../components/Product";

import useScrollAnimation from "../hooks/useScrollAnimation";


import "../assets/styles/animateStyles.css";


const OUTFIT = () => {

    const { animationStyle } = useScrollAnimation();

    const productname = "OUTFIT"

    const project_detail = {
        title: productname,
        bg: "outfit-bg",
        title_bar: (<p>OUTFIT</p>),
        log: ImagesRoute.outfitw,
        top_bg: ImagesRoute.manamisky,
        project_state: (<a className={`scroll-section ${animationStyle}  px-[10px] py-[5px] rounded-[10px] text-[red]`} >デプロイの予定はありません</a>),
        main_catchcopy: "その服、自分に似合うかな？",
        subtitle: "失敗しない服選び。",
        subimg: ImagesRoute.outfitgamen,
        width_src: ImagesRoute.manamisorami1,
        width_explain: (
            <p className={`scroll-section ${animationStyle} string-ss space-y-[10px]`}>
                <p className={`scroll-section ${animationStyle}`}>Shutter Showcaseとは、</p>
                <p className={`scroll-section ${animationStyle}`}>あなたの写真を、簡単にオンラインで展示できるwebアプリです。</p>
                <p className={`scroll-section ${animationStyle}`}>豊富な写真館(テンプレート)から選んで、</p>
                <p className={`scroll-section ${animationStyle}`}>自分だけのポートフォリオを簡単に作成できます。</p>
                <p className={`scroll-section ${animationStyle}`}>作品を美しく公開し、世界中にシェアしよう！</p><br />
            </p>
        ),
        explain2_src: ImagesRoute.outfitmain,
        explain2_title: "購入前に試着シミュレート",
        explain2_text: (<p className="string-ss space-y-[10px]">
            「この服、サイズ感合うかな？」<br />
            そんな不安にさようなら。<br />
            体型やサイズをリアルに再現したマネキンが、<br />
            試着イメージをわかりやすく表示。<br />
            オンラインショッピングをもっと便利に、もっと楽しく！<br /></p>),

        explain3_bg: ImagesRoute.manamisorami2,
        appealTagValues: [
            {
                position: "top-[0] max-sm:left-1/2 -translate-x-1/2", title: "マネキンカスタマイズ機能", text: (
                    <div>身長や体重、肩幅などの数値を入力することで、<br />
                        あなたの体型にそっくりなマネキンを作成可能。<br />
                        細かい調整でよりリアルな試着イメージを実現します。</div>
                )
            }, {
                position: "top-[25%] max-sm:right-1/2 -translate-x-[-50%]", title: "服のテンプレート選択", text: (
                    <div>シャツ、ズボン、パーカーなど、服の種類ごとにテンプレートを選択可能。<br />
                        これにより、試着したいアイテムのカテゴリーに<br />
                        最適化したプレビューが得られます。</div>
                )
            }, {
                position: "top-[50%] max-sm:left-1/2 -translate-x-1/2", title: "ステータス入力機能", text: (
                    <div>購入予定の服の着丈、袖丈、肩幅などを入力するだけで、<br />
                        正確なサイズ感をシミュレーション。<br />
                        サイズ選びの失敗を防ぎます。</div>
                )
            }, {
                position: "top-[75%] max-sm:right-1/2 -translate-x-[-50%]", title: "試着イメージ表示", text: (
                    <div>リアルタイムで作成したマネキンに服を試着。<br />
                        360度回転して確認できるので、<br />
                        あらゆる角度からフィット感をチェックできます。</div>
                )
            }
        ],
        stackValue: [
            { img: ImagesRoute.go_ico, name: "Gin", lang: "go" },
            { img: ImagesRoute.react_ico, name: "React", lang: "HTML,CSS,JavaScript" },
            { img: ImagesRoute.file_type_python_icon_130221, name: `APImathutils`, lang: "Python" },
            { img: ImagesRoute.Blender_23505, name: "Blender", lang: "" }
        ],
        dialog: (
            <div>
                <div className="pt-[100px]">
                    <p className="string-lg">{productname}</p>
                </div>
                <div className="text-white leading-relaxed space-y-6">
                    <p>
                        このWebサービスは、Yahooが主催する「OPEN HACK U 2024」に参加した際にチームで制作した作品です。

                        <h1 className="string-rg">背景と課題</h1>

                        <p>
                            SNSやネットショップが普及する現代、<br />
                            ファッションにおいてもインターネットでの買い物が一般的になりました。<br />
                            しかし、通販の課題として「注文した服のサイズ感が合わない」という問題が頻発しています。<br />
                            多くのユーザーが以下のような悩みを抱えています：<br />
                            モデルの体型と自分が違いすぎてイメージしにくい<br />
                            着丈などの数値だけではイメージが湧かない<br />
                            身長が同じでも体型の違いでサイズ感が合わない<br />
                        </p>
                        <h1 className="string-rg">解決策</h1>
                        <p>
                            私たちは、ネットショップで提供される「服のステータス値」とユーザーの体型情報を活用し、<br />
                            「自分そっくりのマネキン」に服を擬似的に試着させるというアイデアを提案しました。<br />
                            この仕組みを実現したのが「OUTFIT」です。<br />
                        </p>
                        <h1 className="string-rg">OUTFITの機能</h1><p>
                            ユーザーは自分の体型データを入力し、試したい服を選択するだけで、<br />
                            マネキンに擬似試着させたイメージを確認できます。</p>

                        <h1 className="string-rg">実装方法</h1>
                        <p>
                            フロントエンド: Reactを使用し、体型や服のデータを入力・表示するUIを作成。<br />
                            バックエンド: Gin（Goフレームワーク）でデータ処理を行い、Pythonを使ってBlenderファイルを操作・編集。<br />
                            3D表示: Blenderで作成した3Dモデルを動的に変形させ、ユーザーにリアルタイムで表示。<br />
                        </p>
                        <h1 className="string-rg">担当箇所</h1><p>
                            私はフロントエンド（React）とPythonによるBlenderファイル編集部分を担当しました。<br />
                            Pythonはあまり経験がありませんでしたが、新しいスキルを学ぶ良い機会となりました。
                        </p>
                    </p>

                </div>
                <h2 className="string-rg text-white">技術スタック</h2>
                <p className="text-white">
                    フロントエンド: React<br />
                    バックエンド:Go（Gin）、Python<br />
                    デザイン: Figma<br />
                    その他:Blender
                </p>
            </div>
        )

    }

    return (
        <Product productname={productname} project_detail={project_detail} />
    )
}


export default OUTFIT;