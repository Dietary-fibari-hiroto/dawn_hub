import React from "react";
import ImagesRoute from "../assets/ImagesRoute"

import Shield from "../components/Shield";
import Header from "../components/Header";

const shiledValue = [
    { img: ImagesRoute.NNlog, title: "Nocturnal wanderings", explain: "夜を軽やかに、目に優しく。", link: "/nn" },
    { img: ImagesRoute.SSlog, title: "Shutter Showcase", explain: "すべての一瞬を、作品に", link: "/test" }
]

const HomePage = () => {
    return (
        <div className="text-white">
            <div className="triangle-street z-[-1]"></div>
            <section className="palast-variable-italic h-screen w-[100vw] ">
                <Header />
                <div className="w-full flex flex-col justify-center items-center overflow-x-hidden" style={{ height: `calc(100vh - 50px)` }}>
                    <div className="wind-flow pl-[150px] text-[20vw] tracking-[200px] oveflow-y-hidden">
                        DAWN
                    </div>
                    <div className="text-[20px] tracking-[10px] text-shadow-black">Portfolio Of Progress</div>
                </div>

            </section>
            <section className="section-frame flex-all-center">
                <p className="tracking-[10px] text-[20px] kiwi-maru-regular">#私の個人製作</p>
            </section>
            <section className="relative text-center section-frame flex-all-center kinuta-maruminfuji-stdn">
                <img className="absolute top-[5vw] h-[150px] w-[150px]" src={ImagesRoute.myImg} alt="myImg" />
                <div className="w-full bg-black pt-[100px] space-y-[30px]">
                    <div>
                        <p className="string-sm">コン専門2回生</p>
                        <p className="string-rg">ひろと</p>
                    </div>
                    <p className="string-ss">趣味は筋トレ、カメラ、ギター、コードを書くこと,<br />
                        多趣味です。得意な分野はWeb開発で、<br />
                        主にReactとLaravelをメインに勉強しています。</p>
                    <p className="string-sm">{"View More>>>"}</p>
                </div>

            </section>
            <section className="section-frame flex-all-center kinuta-maruminfuji-stdn">
                <p className="string-lg ">
                    Product
                </p>
                <div className="flex overflow-x-auto ml-[100px] space-x-[50px] ">
                    {shiledValue.map(({ img, title, explain, link }) => (
                        <Shield key={title} img={img} title={title} explain={explain} link={link} />
                    ))}
                </div>
            </section>
        </div>)
}

export default HomePage;