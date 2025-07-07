import ImagesRoute from "../assets/ImagesRoute";

const SubPageStartcard = (items) => {
  return (
    <div
      className={`section-frame flex justify-evenly items-center max-sm:flex-col ${items.className}`}
      style={{
        backgroundSize: "cover",
        background: `url(${items.img})`,
        backgroundPosition: "center",
      }}
    >
      <div>
        <p className="string-lg opacity-down">{items.title}</p>
        <p className="tracking-[5px] opacity-down">Portfolio</p>
      </div>
      <figure>
        <img
          className="size-[100px] opacity-down"
          src={ImagesRoute.dawn_cat}
          alt="dawn-cat"
        />
      </figure>
    </div>
  );
};

export default SubPageStartcard;
