import Header from "../components/Header";
import ImagesRoute from "../assets/ImagesRoute";

const NN = () => {
    return (
        <div className="kinuta-maruminfuji-stdn">
            <div className=" nn-topground z-[-1]" style={{ backgroundImage: `url(${ImagesRoute.IMG_6728})` }}></div>
            <section className=" section-frame">
                <Header />
                <div className="flex justify-around items-center" style={{ height: `calc(100vh - 50px)` }}>
                    <figure>
                        <img className="h-[175px]" src={ImagesRoute.NNlog} alt="NNlog" />
                    </figure>
                    <div className="text-start text-shadow-black">
                        <p className=" text-[50px] tracking-[20px]">
                            Nocturnal<br />
                            wanderings
                        </p>
                        <p>夜間作業を快適にサポートするためのフィルターソフト</p>
                        <a className=" bg-[#777777] px-[10px] py-[5px] rounded-[10px]" href="../assets/Dawn-NacturnalWanderings.exe" download>ダウンロード</a>
                    </div>

                </div>
            </section>
            <section className="section-frame relative flex justify-evenly items-center">
                <p className="absolute z-[2] left-[15%] text-[40px]">
                    夜を軽やかに、目に優しく。
                </p>
                <figure className="absolute  right-[15%] w-[500px]">
                    <img className="rounded-[10px]" src={ImagesRoute.IMG_3975} alt="image" />
                </figure>
            </section>
            <section className="section-frame">
                <figure>
                </figure>
                <div>
                </div>
            </section>
        </div>
    )
}

export default NN;