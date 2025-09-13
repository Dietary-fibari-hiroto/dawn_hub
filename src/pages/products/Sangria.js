import ImagesRoute from "../../assets/ImagesRoute";

const Sangria = () => {
  return (
    <div>
      <iframe
        className="section-frame "
        src="https://www.youtube.com/embed/QCjvEgtNMpo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <section className="section-frame flex-all-center">
        <p>coming soom...</p>
      </section>
      <section className="flex-all-center flex-col">
        <p className="string-md">Technology stack</p>
        <img
          src={ImagesRoute.rumos_ts}
          className="object-contain w-[80vw] h-[80lvh]"
        />
      </section>
    </div>
  );
};

export default Sangria;
