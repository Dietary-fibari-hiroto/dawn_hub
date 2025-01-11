import react from "react";

const StackShield = (items) => {

    return (
        <div className="z-[1] relative h-[100px] w-[300px] flex items-center ">
            <figure className="absolute left-0 h-full">
                <img className="h-[100px]" src={items.img} alt="ico" />
            </figure>
            <div className="pl-[50px] absolute right-0 bg-[#717171] z-[-1] min-w-[240px] h-full rounded-[50px] flex flex-col items-start justify-center space-y-[10px]">
                <p>{items.name}</p>
                <p>{items.lang}</p>
            </div>
        </div>
    )
}

export default StackShield;