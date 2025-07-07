import { Link } from "react-router-dom";

/**
 *
 * @param {
 * img:プロジェクトロゴイメージ
 * title:タイトル
 * explain:簡単な説明
 * link:遷移先Path
 * } items
 * @returns
 */

const Shield = (items) => {
  return (
    <Link
      to={items.link}
      className=" opacity-down pointer-up relative min-w-[230px] h-[350px] flex flex-all-center kinuta-maruminfuji-stdn space-y-[50px]"
    >
      <img
        className=" w-auto h-[150px] z-[3] absolute  top-[0] left-[50%] -translate-x-1/2"
        src={items.img}
        alt="ShieldLogo"
      />
      <div className="pt-[80px]  w-full bg-black flex flex-col justify-between items-center space-y-[20px]">
        <p className="string-ss">{items.title}</p>
        <p className="string-sss">{items.explain}</p>
        <p className="string-lg">{">>>"}</p>
      </div>
    </Link>
  );
};

export default Shield;
