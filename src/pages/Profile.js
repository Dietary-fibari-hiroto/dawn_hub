import Header from "../components/Header"
import SubPageStartcard from "../components/SubPageStartcard"
import UseOpacityAnimation from "../hooks/UseOpacityAnimation";
import ImagesRoute from "../assets/ImagesRoute";
import MySkillShield from "../components/MySkillShield.";
import Footer from "../components/Footer";
const skillData = [
    {
        fieldImg: ImagesRoute.code,
        field: "Coding",
        roughly: "Web/IoT/App",
        explain: "授業で幅広い分野や言語を学んでいますが、Web/ IoT / Aplicationの分野は個人的に好きで授業外でスキルを磨くために勉強をしています。",
        fieldArray: [
            {
                filedTitle: "Web開発",
                libraryName: "HTML/CSS/Javascript:React/tailwind/Node.js/Laravel",
                stackExplain: "コードを書くことで自由自在にUIを構築、描画できることに楽しさを感じ独学で勉強をしています。モジュール化を意識して行い、重複したコードをこまめに関数で切り出すことで可読性や再利用性の向上を図っています。HTMLやCSSの値、プロパティ、要素名はほぼ暗記しておりスピーディーかつ正確なコーディングが可能です。",
            },
            {
                filedTitle: "アプリケーション開発",
                libraryName: "C#/Java/XML/XAML:.NET framework/.NET MAUI/Android Studio",
                stackExplain: "もともと.NET frameworkに興味があったのと授業でAndroid Studioを学んだことをきっかけに授業外でも勉強しています。.NET frameworkでは自分でほしいなと思った機能を実装したアプリケーションを中心に作成しており、実際に自分で使っているものもあります。このポートフォリオサイト内でダウンロードできるものもあるのでよかったら「Product」から確認してみてください。AndroidStudioではjavaとkotlinの両方の実装方法を学びましたが、正直言ってkotlinは苦手です。",
            },
            {
                filedTitle: "IoT",
                libraryName: "C++/Javascript:Arduino/Espruino",
                stackExplain: "授業でESP32を使った勉強をしてきましたが、webやappとは違いパソコンの外で「物」を動かすことにロマンのようなものを感じ勉強しています。",
            }
        ]
    },
    {
        fieldImg: ImagesRoute.design,
        field: "Design",
        roughly: "Adobe XD,Photoshop/Figma",
        explain: "シンプルで操作性が高いのに華やかで彩のあるデザインができるようになるのが目標です。デザインは主にAdobe XDを使っており簡単なUI構築を行うことが可能です。現在は自分の想像どうりのデザインを表現するためにAdobe illustratorを勉強中です。",
        fieldArray: [
            {
                filedTitle: "none",
            }
        ]
    }
    , {
        fieldImg: ImagesRoute.photo,
        field: "Photo",
        roughly: "Canon 80D:Lightroom/Photoshop",
        explain: "ポートレート中心に趣味でカメラマンをやっており、「web×お写真」の融合に可能性を感じ自分で撮影した写真を制作物に取り入れています。",
        fieldArray: [
            {
                filedTitle: "撮影",
                libraryName: "Canon 80D",
                stackExplain: "テーマを決めず「日常」を撮影することがおおいです。被写体を際立たせる撮影を心がけておりコミュニケーションを通じて笑顔を引き出させる努力をしています。ポートレートだけでなくライブハウスのお写真も撮らせていただいた経験があり明るい写真から暗い場面まで、幅広い撮影が可能です。",
            },
            {
                filedTitle: "レタッチ",
                libraryName: "Lightroom/Photoshop",
                stackExplain: "どこか光が飽和したようなふんわりとした仕上がりになるようにレタッチしています。記憶に残りやすいように彩は鮮やかにし被写体を際立たせるようにマスク機能を使用し細かくこだわって作業しています。Photoshopでは肌感を調整することができ依頼内容に合わせて柔軟に調整することができます。",
            },
        ]
    }
];

const Profile = () => {
    const { animationOpacityStyle } = UseOpacityAnimation();


    return (
        <div className="kinuta-maruminfuji-stdn">
            <Header />
            <SubPageStartcard title={"わたしのこと"} />
            {/**自己紹介 */}
            <section className="flex-all-center section-padding">
                <div className={`opacity-section ${animationOpacityStyle} border-l border-white flex items-center space-x-[20px]`}>
                    <p className={`string-rg `}>Who I am</p>
                    <p className="string-ss">わたしのこと</p>
                </div>
                <div className="flex items-center justify-evenly w-full max-sm:flex-col max-sm:space-y-[30px]">
                    <div className="space-y-[30px]">
                        <p className={`opacity-section ${animationOpacityStyle} string-sm space-y-[10px] text-center`}>おのでら ひろと</p>
                        <p className={`text-start string-ss w-[400px] max-sm:w-[350px] px-[10px] leading-loose opacity-section ${animationOpacityStyle}`}>IT系の専門学校に通っており、
                            普段はIoTやサーバーサイドのコーディングを主に学んでいます。
                            コードでUIを自由自在にデザイン、変更できることに楽しさを感じ、
                            独学でWebデザイン、フロントエンドも学んでいます。
                        </p>

                    </div>
                    <figure>
                        <img className={`opacity-section ${animationOpacityStyle} w-[300px] rounded-[30px]`} src={ImagesRoute.MePhoto} alt="Mephoto" />
                    </figure>
                </div>
            </section>
            {/**できること */}
            <section className="section-padding h-auto flex-all-center space-y-[50px] max-md:space-y-[100px]">
                <div className="section-title h-auto">できること</div>
                {skillData.map((item, index) => (
                    <MySkillShield
                        key={index}
                        items={item}  // skillData の各要素を items として渡す
                        fieldArray={item.fieldArray}  // fieldArray を渡す
                    />
                ))}
            </section>
            <Footer />
        </div>

    )
}

export default Profile