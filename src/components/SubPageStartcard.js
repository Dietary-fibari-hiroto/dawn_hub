import ImagesRoute from "../assets/ImagesRoute"

const SubPageStartcard = (items) => {
    return (
        <div className="section-frame flex justify-evenly items-center max-sm:flex-col">
            <div>
                <p className="string-lg">{items.title}</p>
                <p className="tracking-[5px]">Portfolio</p>
            </div>
            <figure><img className="size-[100px]" src={ImagesRoute.dawn_cat} alt="dawn-cat" /></figure>
        </div>
    )
}

export default SubPageStartcard