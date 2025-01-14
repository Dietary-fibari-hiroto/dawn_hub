import Header from "../components/Header"
import SubPageStartcard from "../components/SubPageStartcard"

import Footer from "../components/Footer";
import ShieldSection from "../components/ShieldSection";
import ProductShield from "../components/ProductShield";
import ImagesRoute from "../assets/ImagesRoute";

const ProductList = [
    {
        path: "/nn",
        img: ImagesRoute.IMG_6728,
        log: ImagesRoute.NNlog,
        gradient: "from-[#000000] to-[#545454]",
        title: "Nocturnal Wanderings",
        stack: "Windowsソフトウェア",
        explain: "暗い部屋でも目に優しく、快適に作業を続けられます。Nocturnal Wanderingsを実行して、夜間の作業をもっと快適に。"
    },
    {
        path: "/ss",
        img: ImagesRoute.manaphoto,
        log: ImagesRoute.SSlog,
        gradient: "from-[#ffffff] to-[#F9D176]",
        title: "Shutter Showcase",
        stack: "Webアプリケーション",
        explain: "綺麗に取れたお写真、飾ってみませんか？撮影した写真を、より美しい形で見せたいときに最適です。あなたの作品を引き立てるための、スタイリッシュな展示が簡単に実現できます。"
    },
    {
        path: "https://matitaka.dawn-waiting.com",
        img: ImagesRoute.manami_hydoro,
        log: ImagesRoute.matitaka_wh,
        gradient: "from-[#BC78FF] to-[#3DBBFF]",
        title: "街角のたからもの",
        stack: "Webサイト",
        explain: "私のお写真のポートフォリオです。"
    },
    {
        path: "/outfit",
        img: ImagesRoute.manamisky,
        log: ImagesRoute.outfitw,
        gradient: "from-[#C1EDE2] to-[#C1CDED]",
        title: "OUTFIT",
        stack: "Webアプリケーション",
        explain: "「この服、サイズ感合うかな？」そんな不安にさようなら。体型やサイズをリアルに再現したマネキンが、試着イメージをわかりやすく表示。オンラインショッピングをもっと便利に、もっと楽しく！"
    },
]


const ProductPage = () => {
    return (
        <div className="kinuta-maruminfuji-stdn w-[100vw]">
            <Header />
            <SubPageStartcard title={"Product"} />

            <div className="flex-all-center mb-[50px]">
                {ProductList.map(({ path, img, log, gradient, title, stack, explain }, index) => (
                    <ProductShield key={index} path={path} img={img} gradient={gradient} log={log} title={title} stack={stack} explain={explain} />
                ))}
            </div>
            <ShieldSection />
            <Footer />
        </div>

    )
}

export default ProductPage