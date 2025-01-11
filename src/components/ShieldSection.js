
import { Link } from "react-router-dom";

import Shield from "./Shield"
import UseOpacityAnimation from "../hooks/UseOpacityAnimation"
import ImagesRoute from "../assets/ImagesRoute";

const ShieldSection = () => {

    const { animationOpacityStyle } = UseOpacityAnimation();

    const shiledValue = [
        { img: ImagesRoute.NNlog, title: "Nocturnal wanderings", explain: "夜を軽やかに、目に優しく。", link: "/nn" },
        { img: ImagesRoute.SSlog, title: "Shutter Showcase", explain: "すべての一瞬を、作品に", link: "/ss" },
        { img: "https://matitaka.dawn-waiting.com/static/media/matitaka-wh.6bfee6f218f07a91df4b.png", title: "街角のたからもの", explain: "私のお写真ポートフォリオ", link: "https://matitaka.dawn-waiting.com/" },
        { img: ImagesRoute.outfitw, title: "OUTFIT", explain: "失敗しない服選び。", link: "/outfit" },

    ]

    return (<section className="section-frame flex flex-all-center kinuta-maruminfuji-stdn">
        <p className={`section-title opacity-section ${animationOpacityStyle} string-rg`}>
            Product
        </p>
        <div className={`opacity-section ${animationOpacityStyle} w-full`}>
            <div className="flex px-[100px] space-x-[50px]  w-full overflow-x-auto">
                {shiledValue.map(({ img, title, explain, link }) => (
                    <Shield key={title} img={img} title={title} explain={explain} link={link} />
                ))}
            </div>
        </div>
        <Link to="/product" className={` string-sm rounded opacity-section ${animationOpacityStyle}`}>View more...</Link>

    </section>)
}

export default ShieldSection