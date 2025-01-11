import ImagesRoute from "../assets/ImagesRoute"

const NotFound = () => {
    return (
        <div className="h-screen w-full flex-all-center text-[10vw]">
            <figure><img className="w-[10vw] rounded-[50%]" src={ImagesRoute.dawn} alt={"dawn"} /> </figure>
            <p>404 Not Found</p>
        </div>
    )
}


export default NotFound