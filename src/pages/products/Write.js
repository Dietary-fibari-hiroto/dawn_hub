import ImagesRoute from "../../assets/ImagesRoute";

const Write = () => {
  return (
    <div className="bg-black">
      <section
        className="section-frame flex items-center justify-evenly"
        style={{
          background: `url(${ImagesRoute.IMG_7065})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex-all-center flex-col space-y-[20px]">
          <p className="string-hundred mb-[-30px]">Write</p>
          <p className="string-m text-black px-[10px] bg-[#cccccc]">DAWN</p>
          <div className="string-rg px-[20px] bg-[#777777]">In progress...</div>
        </div>
        <img className="size-[270px]" src={ImagesRoute.write_logo} />
      </section>
      <section className="section-frame flex items-center justify-between">
        <p className="ml-[300px] string-sm">
          ふと、思いついた瞬間を
          <br />
          あなたらしく
        </p>
        <img className="w-[1000px] h-[666px]" src={ImagesRoute.IMG_7069} />
      </section>
      <div className="relative w-screen h-[300lvh]">
        <div className="absolute bg-[#222222] w-[1500px] h-[1300px] z-[1] right-0 top-[10%]" />
        <div className="absolute top-0 left-0 z-[3]">
          <section>
            <p className="px-[100px] py-[50px]">
              <span className="string-rg">DAWN-</span>
              <span className="string-big">Write</span>
            </p>
            <div className="flex items-center justify-evenly w-screen">
              <img
                className="w-[500px] h-[750px]"
                src={ImagesRoute.p20240705_Manami_Sorami_152}
              />
              <div className="flex-all-center flex-col">
                <p className="string-sm leading-[50px]">
                  DAWN-Writeはあなたの気分に寄り添う「着せ替えメモソフト」です。
                  <br />
                  無機質なテキストだけでは物足りない。
                  <br />
                  その時の気分に合ったテーマを選んで、
                  <br />
                  ふとした時に気持ちよくメモできる空間を作りましょう。
                </p>
                <img className="w-[800px]" src={ImagesRoute.under_write} />
              </div>
            </div>
          </section>
          <section>
            <p className="px-[100px] py-[50px] string-lg">主要機能</p>
            <div className="w-screen flex items-center justify-evenly">
              <img className="h-[270px]" src={ImagesRoute.ss} />
              <div className="space-y-[50px]">
                <div className="space-y-[10px]">
                  <p className="string-rg">着せ替えテーマ</p>
                  <p className="string-sm ml-[50px]">
                    朝焼けのようなグラデーション、落ち着いた夜のモード、集中できるミニマルな配色。
                    <br />
                    自分の気分や時間帯に合わせて、自由に切り替えられます。
                  </p>
                  <img className="w-[650px]" src={ImagesRoute.under_line} />
                </div>
                <div className="space-y-[10px]">
                  <p className="string-rg">手軽さはそのままに</p>
                  <p className="string-sm ml-[50px]">
                    とにかく今、書きたいことを自由に書けるように、
                    <br />
                    保存時にタイトルをつける形式を採用。
                  </p>
                  <img className="w-[650px]" src={ImagesRoute.under_line} />
                </div>
              </div>
            </div>
          </section>
          <section className="mt-[100px]">
            <div className="w-screen flex items-center justify-evenly">
              <div className="space-y-[50px]">
                <div className="space-y-[10px]">
                  <p className="string-rg">着せ替えテーマ</p>
                  <p className="string-sm ml-[50px]">
                    朝焼けのようなグラデーション、落ち着いた夜のモード、集中できるミニマルな配色。
                    <br />
                    自分の気分や時間帯に合わせて、自由に切り替えられます。
                  </p>
                  <img className="w-[650px]" src={ImagesRoute.under_line} />
                </div>
                <div className="space-y-[10px]">
                  <p className="string-rg">手軽さはそのままに</p>
                  <p className="string-sm ml-[50px]">
                    とにかく今、書きたいことを自由に書けるように、
                    <br />
                    保存時にタイトルをつける形式を採用。
                  </p>
                  <img className="w-[650px]" src={ImagesRoute.under_line} />
                </div>
              </div>{" "}
              <img className="h-[500px] w-[750px]" src={ImagesRoute.IMG_7064} />
            </div>
          </section>
          <section className="flex-all-center flex-col">
            {" "}
            <p className="w-full px-[100px] py-[50px] string-lg">
              こんな人におすすめ
            </p>
            <p className="string-sm">
              ・メモアプリにもう少し遊び心がほしい
              <br />
              ・デザインや雰囲気で気分を変えたい
              <br />
              ・日記・アイデア・タスクなどを気軽に記録したい
              <br />
              ・シンプルだけど、ちゃんと整頓できるアプリがほしい
            </p>
          </section>
        </div>
      </div>
      <section className="space-y-[50px] pb-[100px]">
        <p className="w-full px-[100px] string-lg">技術スタック</p>
        <div className="flex-all-center flex-col">
          <p className="string-md">Windows専用版</p>
          <div className="flex items-center">
            <figure>
              <img className="size-[256px]" src={ImagesRoute.logo_winui} />
            </figure>{" "}
            <p className="string-md font-bold">+</p>
            <figure>
              <img className="size-[256px]" src={ImagesRoute.cpp} />
            </figure>{" "}
          </div>
        </div>
        <div className="flex-all-center flex-col">
          <p className="string-md">クロスプラットフォーム版</p>
          <div className="flex items-center">
            <figure>
              <img className="size-[256px]" src={ImagesRoute.MAUI} />
            </figure>{" "}
            <p className="string-md font-bold">+</p>
            <figure>
              <img className="size-[256px]" src={ImagesRoute.csharp} />
            </figure>{" "}
          </div>
        </div>
        <p className="string-md text-center">選定理由</p>
        <p className="string-s text-center px-[300px]">
          本プロジェクトでは、Windows専用版とクロスプラットフォーム版の二種類を開発することに決めました。
          <br />
          その理由は、当初の技術選定において「軽快な起動性と手軽な操作感」を最重要と考えていたためです。
          <br />
          具体的には、Windowsに標準搭載されているメモアプリのように、起動時にストレスを感じさせないことを条件に挙げていました。
          <br />
          メモ機能という単純なユースケースだからこそ、余計な待機時間があるだけでUXを大きく損なうと判断しました。
          <br />
          <br />
          この時点では、.NET環境下でC#を用いて記述できる WinUI 3
          が最適と考えていました。
          <br />
          しかし一方で、「Windows以外のユーザーにも使ってもらいたい」という思いから、.NET
          MAUI の導入も検討するようになります。
          <br />
          <br />
          実際に両者を比較テストしたところ、.NET
          MAUIはクロスプラットフォーム対応の影響か、WinUIと比べて起動に約3秒の遅延が生じることが分かりました。
          <br />
          この「立ち上がりの遅さ」は本プロダクトの求める要件にはそぐわないものであり、Windows向けにはWinUIを使用するという方針を固めました。
          <br />
          <br />
          一方で、MAUIはモバイルや他OSへの展開を見据えた場合に有効であり、またWinUIと比較してソースコード構造にも大きな差異がなかったため、
          <br />
          両方のUIフレームワークに対応させる方針に切り替えました。
          <br />
          この時点で開発対象は「WinUI（Windows専用）」と「MAUI（クロスプラットフォーム）」の二軸になります。
          <br />
          <br />
          ところが、その後の調査で「WinUIはC++でも開発可能」という情報にたどり着きます。ちょうどC++を学びたいと思っていたこと、
          <br />
          また.NETランタイムを通さずよりネイティブに近い実装が可能になることでさらに起動性能が向上する可能性があることから、
          <br />
          C++/WinRTによるWinUI実装にも着手することを決意しました。
          <br />
          当然ながら、開発コストは2倍以上に増えますが、それ以上に得られる学びと検証の価値があると判断しました。
          <br />
          <br />
          <br />
          以上の理由から、最終的には以下の構成で開発を進めることに決定しました：
          <br />
          <br />
          Windows専用：WinUI + C++/WinRT
          <br />
          <br />
          クロスプラットフォーム：.NET MAUI + C#
        </p>
      </section>
      <section className="flex-all-center flex-col py-[50px]">
        {" "}
        <p className="w-full px-[100px] py-[50px] string-lg">
          Download/Install
        </p>
        <div className="text-center">
          <p className="string-md">ver1.0.0</p>
          <div>現在制作中</div>
        </div>
      </section>
    </div>
  );
};

export default Write;
