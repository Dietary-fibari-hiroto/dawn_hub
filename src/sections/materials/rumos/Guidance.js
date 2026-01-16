import ImagesRoute from "../../../assets/ImagesRoute";
import styles from "./Guidance.module.scss";

export const Guidance = () => {
  return (
    <section>
      <div className={styles["websote-nav"]}>
        <figure className={styles["websote-nav__container"]}>
          <div className={styles["websote-nav__container-content"]}>
            <p className="text-xl">Rumos</p>
            <p className="underline text-5xl">OfficialSite</p>
            <p className="text-base">
              このプロジェクトのオフィシャルサイトを作ってみました。
              <br />
              よければご覧ください。
            </p>
            <p className="mt-[1rem] text-base underline">Enter</p>
          </div>
          <img
            className={styles["websote-nav__container-img"]}
            src={ImagesRoute.IMG_7398}
            alt=""
          />
        </figure>
      </div>
    </section>
  );
};
