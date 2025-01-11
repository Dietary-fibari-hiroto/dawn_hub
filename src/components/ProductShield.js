import { Link } from "react-router-dom"
import UseOpacityAnimation from "../hooks/UseOpacityAnimation"

const ProductShield = (items) => {
    const { animationOpacityStyle } = UseOpacityAnimation();

    return (
        <Link to={items.path} className={`flex w-[80%] justify-between border-b border-[#FFBC00] space-x-[10px] max-sm:flex-col max-sm:items-center py-[50px] opacity-section ${animationOpacityStyle}`} >
            <figure className="h-[300px] w-[450px] left-0 top-1/2  relative max-md:h-[250px]">
                <img className="absolute size-[300px] object-cover max-md:size-[250px] max-md:left-[15%]" src={items.img} alt="IMG" />

                <figure className={`absolute right-0 top-1/2 translate-y-[-50%] bg-gradient-to-b ${items.gradient} p-[30px] max-sm:right-[15%]`}>
                    <img className=" size-[150px] max-md:size-[75px] object-contain " src={items.log} alt="IMG" />
                </figure>
            </figure>
            <div className="h-full w-1/2 my-auto space-y-[10px] max-sm:w-full">
                <p className="string-rg">{items.title}</p>
                <p className="string-sss text-[#FFBC00]">{items.stack}</p>
                <p className="string-ss">{items.explain}</p>
            </div>
        </Link >
    )
}

export default ProductShield