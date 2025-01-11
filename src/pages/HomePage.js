import React, { useState, useEffect } from "react";
import ImagesRoute from "../assets/ImagesRoute"

import StackShield from "../components/StackShield";
import Header from "../components/Header";
import Footer from "../components/Footer";

import UseOpacityAnimation from "../hooks/UseOpacityAnimation";

import ShieldSection from "../components/ShieldSection";
import { Link } from "react-router-dom";



const stackValue = [
    { img: ImagesRoute.react_ico, name: "React", lang: "HTML,CSS,JavaScript" },
    { img: ImagesRoute.go_ico, name: "Gin", lang: "go" }
]



const HomePage = () => {




    const { animationOpacityStyle } = UseOpacityAnimation();
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialog = () => {
        document.body.style.overflow = "hidden"; // ページのスクロールを無効化
        setIsDialogOpen(true);
    }
    const closeDialog = () => {
        document.body.style.overflow = "auto"; // ページのスクロールを復元
        setIsDialogOpen(false)
    }

    return (
        <div className="text-white w-[100vw] overflow-x-hidden">
            {/**本文 */}

            <div className="triangle-street z-[-1]"></div>
            <section className="palast-variable-italic h-screen w-[100vw] overflow-y-hidden">
                <Header />
                <div className="w-full flex justify-evenly items-center max-sm:flex-col" style={{ height: `calc(100vh - 50px)` }}>
                    <p className="text-[75px]">DAWN</p>
                    <figure><img className="h-[150px] w-[150px] wind-flow" src={ImagesRoute.dawn_cat} alt="dawncat" /></figure>
                    <div className="tracking-[10px]">
                        <p className="text-[50px]">
                            Hiroto<br />
                            Onodera<br />
                        </p>
                        <p className="text-[15px]">Portfolio</p>
                    </div>
                </div>

            </section>
            <section className="section-frame flex-all-center overflow-y-hidden">
                <p className={` sm-vertical-text opacity-section ${animationOpacityStyle} tracking-[10px] text-[30px] kiwi-maru-regular`}>#私の個人製作</p>
            </section>
            <section className="relative text-center flex-all-center kinuta-maruminfuji-stdn">
                <div className="absolute top-0 section-frame triangle-gray-bg-top  z-[4]"></div>
                <div className="absolute z-[3] top-[50%] translate-y-[-50%] bg-[#393939] w-[100vw] h-screen"> </div>
                <div className="absolute bottom-0 section-frame triangle-gray-bg-bottom z-[4]"></div>

                <div className="section-frame flex-all-center z-[5] ">
                    <div className={`opacity-section ${animationOpacityStyle} section-title flex items-center space-x-[20px]`}>
                        <p className={`string-rg `}>Who I am</p>
                        <p className="string-ss">僕のこと</p>
                    </div>
                    <div className="flex items-center justify-evenly w-full max-sm:flex-col max-sm:space-y-[30px]">
                        <div className="space-y-[30px]">
                            <p className={`opacity-section ${animationOpacityStyle} string-sm space-y-[10px]`}>おのでら ひろと</p>
                            <p className={`text-start string-ss max-w-[400px] px-[10px] leading-loose opacity-section ${animationOpacityStyle}`}>IT系の専門学校に通っており、
                                普段はIoTやサーバーサイドのコーディングを主に学んでいます。
                                コードでUIを自由自在にデザイン、変更できることに楽しさを感じ、
                                独学でWebデザイン、フロントエンドも学んでいます。
                            </p>
                            <div><Link className={`opacity-section ${animationOpacityStyle} px-[20px] py-[5px] bg-[#fff] text-[#000] rounded-[10px]`} to="/profile">View more</Link></div>

                        </div>
                        <figure>
                            <img className={`opacity-section ${animationOpacityStyle} w-[300px] rounded-[30px]`} src={ImagesRoute.MePhoto} alt="Mephoto" />
                        </figure>
                    </div>
                </div>

                <div className="section-frame flex items-center justify-evenly z-[5] max-sm:flex-col">
                    <figure className="max-sm:order-2"> <img className={`opacity-section ${animationOpacityStyle} w-[300px] rounded-[30px]`} src={ImagesRoute.MePhoto2} alt="Mephoto2" /></figure>
                    <div className="space-y-[30px] max-sm:order-1">
                        <p className={`opacity-section ${animationOpacityStyle} string-rg `}>できること</p>
                        <p className={`opacity-section ${animationOpacityStyle} string-ss w-[400px] text-start  leading-loose max-sm:pl-[50px]`}>
                            1,IoT<br />
                            ・ESP32<br />
                            2,ソフトウェア/アプリ開発<br />
                            ・windowsソフト開発<br />
                            ・アンドロイドアプリ開発<br />
                            3,Web開発<br />
                            ・フロントエンド開発<br />
                            ・バックエンド開発<br />
                            4,写真撮影<br />
                            ・ポートレート写真撮影<br />
                            ・Adobe Lightroom<br />
                            ・Adobe PhotoShop<br />

                        </p>
                    </div>

                </div>
            </section>
            <ShieldSection />
            <section className="kinuta-maruminfuji-stdn section-frame flex-all-center space-y-[100px]">
                <p className={`border-l border-white string-rg opacity-section ${animationOpacityStyle} txet-[50px] max-sm:text-[30px] `}>
                    Technology stack
                </p>
                <div className={`opacity-section ${animationOpacityStyle} w-full grid grid-cols-2 grid-rows-${stackValue.length / 2} gap-4 place-items-center max-sm:flex max-sm:flex-col `}>
                    {stackValue.map(({ img, name, lang }) => (
                        <StackShield img={img} name={name} lang={lang} />
                    ))}
                </div>
                <button
                    className={` opacity-section ${animationOpacityStyle} px-4 py-2 bg-[#717171] string-sm rounded`}
                    onClick={openDialog}
                >
                    View more...
                </button>

            </section>

            {isDialogOpen && (
                <div className="kinuta-maruminfuji-stdn fixed inset-0 bg-black flex flex-col justify-center items-center z-[10] overflow-y-auto">
                    <div className="w-full max-w-3xl px-4 py-8 text-center space-y-8">
                        <p className="string-lg mt-[100px]">Dawn</p>
                        <p className="text-white leading-relaxed">
                            このサイトは、IT学生である僕の個人制作によるポートフォリオサイトです。<br />
                            名前の「DAWN」は、日本語で「夜明け」や「曙」を意味します。<br />
                            この名前を選んだ理由は単純で、夜明けの時間帯が昔から好きだからです。<br />
                            涼しくて静かな朝の空気感がとても心地よく、特別な日に早起きして感じるその時間帯は特別なんですよね。<br />
                            このポートフォリオには、「ただ好きなものを好きなように作る」という思いを込めています。<br />
                            しょうもないものでも、自由に創作したものを投稿する場にしたいと思っています。（まあ、この理由は後付けですが…）<br />
                            ここでは、僕が制作したアプリやWebサイトを紹介する予定です。<br />
                        </p>
                        <p className="string-rg text-white">技術スタック</p>
                        <p className="text-white">
                            フロントエンド: React<br />
                            デザイン: Adobe XD<br />
                            その他:<br />
                        </p>
                        <button
                            className="px-4 py-2 bg-red-500 text-white rounded"
                            onClick={closeDialog}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <Footer />
        </div>)
}

export default HomePage;