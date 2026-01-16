import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={`section-frame ${styles["hero-section"]}`}>
      <div>
        <p className="text-lg">変わらぬ日々に、魔法をかけて。</p>
        <p className={`text-7xl ${styles["hero-section__title"]}`}>Rumos</p>
      </div>
      <p className={`text-base ${styles["hero-section__metadata"]}`}>
        SK3A IoTゼミ所属 小野寺広登 - 研究発表資料
      </p>
    </section>
  );
};
