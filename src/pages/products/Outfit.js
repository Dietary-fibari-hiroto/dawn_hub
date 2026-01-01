import ImagesRoute from "../../assets/ImagesRoute";
import { GrayFunctionButton } from "../../components";

const Outfit = () => {
  return (
    <div>
      <section
        className="section-frame flex items-center justify-evenly"
        style={{
          background: `url(${ImagesRoute.manamisky})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img className="h-[200px]" src={ImagesRoute.outfitw} />
        <div className="text-start space-y-[30px]">
          <div>
            <h1 className="Yu-Mincho string-lg tracking-[8px]">OUTFIT</h1>
            <p className="KinutaShinStdN6K tracking-[8px]">
              その服、私に似合うかな？
            </p>
          </div>
          <GrayFunctionButton
            img={ImagesRoute.download_icon}
            label="Web View"
          />
        </div>
      </section>
      <section className="section-frame flex items-center justify-evenly">
        comming soon...
      </section>
    </div>
  );
};

export default Outfit;
