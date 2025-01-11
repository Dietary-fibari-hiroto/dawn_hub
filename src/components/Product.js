import Header from "./Header";
import Footer from "./Footer";
import AppealTag from "./AppealTag";
import StackShield from "./StackShield";
import ShieldSection from "./ShieldSection";


import { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import UseOpacityAnimation from "../hooks/UseOpacityAnimation";

import "../assets/styles/animateStyles.css";

const ProductSection = ({ children, className = "" }) => (
    <section className={`section-frame overflow-y-hidden ${className}`}>{children}</section>
);

const Product = ({ project_detail }) => {
    const { animationStyle } = useScrollAnimation();
    const { animationOpacityStyle } = UseOpacityAnimation();
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const toggleDialog = () => setIsDialogOpen((prev) => !prev);

    return (
        <div className={`kinuta-maruminfuji-stdn ${project_detail.bg} text-shadow-black`}>
            {/* Top Background */}
            <div
                className="nn-topground z-[0]"
                style={{ backgroundImage: `url(${project_detail.top_bg})` }}
            ></div>

            <ProductSection>
                <Header />
                <div className="wind-flow flex max-sm:flex-col justify-around items-center h-[calc(100vh-50px)]">
                    <figure>
                        <img className="bg-shadow h-[175px]" src={project_detail.log} alt="log" />
                    </figure>
                    <div className="text-start max-sm:space-y-[20px] ">
                        <p className="text-[50px] max-sm:text-[30px] tracking-[20px] ">{project_detail.title_bar}</p>
                        <p>{project_detail.main_catchcopy}</p>
                        <div>{project_detail.project_state}</div>
                    </div>
                </div>
            </ProductSection>

            {/* Middle Sections */}
            <ProductSection className="relative flex justify-evenly items-center overflow-x-hidden">
                <p
                    className={`sm-vertical-text text-shadow-black scroll-section ${animationStyle} absolute z-[2] left-[15%] text-[40px] max-sm:text-[20px]  max-sm:tracking-[20px]`}
                >
                    {project_detail.subtitle}
                </p>
                <figure className={`absolute right-[-10%] max-sm:left-1/2 -translate-x-1/2 max-sm:right-0   w-[40vw] max-sm:w-[150vw] `}>
                    <img
                        className={`scroll-section ${animationStyle} rounded-[10px]`}
                        src={project_detail.subimg}
                        alt="image"
                    />
                </figure>
            </ProductSection>

            <ProductSection className="flex flex-col items-center">
                <div className="bg-red py-[70px] h-1/2">
                    <figure
                        className={`h-[40vh] flex flex-col justify-center items-center overflow-y-scroll scroll-section ${animationStyle}`}
                    >
                        <img src={project_detail.width_src} alt="images" />
                    </figure>
                </div>
                <div className="flex justify-evenly items-center w-full h-1/2 max-sm:flex-col max-sm:space-y-[50px]">
                    <div className="flex flex-col justify-center items-center">
                        <p className={`text-[40px] scroll-section ${animationStyle}`}>
                            {project_detail.title}
                        </p>
                        <a className={`scroll-section ${animationStyle} px-[10px] py-[5px] rounded-[10px}`}>
                            {project_detail.project_state}
                        </a>
                    </div>
                    {project_detail.width_explain}
                </div>
            </ProductSection>

            <ProductSection className="flex justify-evenly items-center max-sm:flex-col">
                <figure className={`scroll-section ${animationStyle} w-[400px]`}>
                    <img src={project_detail.explain2_src} />
                </figure>
                <div className={`scroll-section ${animationStyle} flex-all-center space-y-[20px]`}>
                    <p className="string-rg">{project_detail.explain2_title}</p>
                    {project_detail.explain2_text}
                </div>
            </ProductSection>

            {/* Appeal Section */}
            <ProductSection className="relative flex flex-col justify-center items-center">
                <div
                    className="appeal-bg z-[0] section-frame bg-cover bg-center"
                    style={{ backgroundImage: `url(${project_detail.explain3_bg})` }}
                ></div>
                {project_detail.appealTagValues.map(({ position, title, text }, index) => (
                    <div
                        key={index}
                        className={`absolute opacity-section ${animationOpacityStyle} ${position}`}
                    >
                        <AppealTag index={index + 1} title={title} text={text} />
                    </div>
                ))}
            </ProductSection>

            {/* Technology Stack */}
            <ProductSection className="flex-all-center space-y-[100px] ">
                <p className={`text-shadow-po string-lg  scroll-section ${animationStyle}`}>
                    Technology stack
                </p>
                <div
                    className={`opacity-section ${animationOpacityStyle} w-full grid grid-cols-2 grid-rows-${project_detail.stackValue.length / 2} gap-4 place-items-center max-sm:flex max-sm:flex-col`}
                >
                    {project_detail.stackValue.map(({ img, name, lang }, index) => (
                        <StackShield key={index} img={img} name={name} lang={lang} />
                    ))}
                </div>
                <button className={`opacity-section ${animationOpacityStyle} brush-hover px-4 py-2 string-sm rounded bg-[#717171]`} onClick={toggleDialog}>
                    View more...
                </button>
            </ProductSection>
            <ShieldSection />

            {/* Dialog */}
            {isDialogOpen && (
                <div className="kinuta-maruminfuji-stdn fixed inset-0 bg-black flex flex-col items-center z-[10] overflow-y-auto">
                    <div className="w-full max-w-3xl px-4 py-8 text-center space-y-8">
                        {project_detail.dialog}
                        <button
                            className="px-4 py-2 bg-red-500 text-white rounded"
                            onClick={toggleDialog}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <section className="h-[20vw]"></section>
            <Footer />
        </div>
    );
};

export default Product;
