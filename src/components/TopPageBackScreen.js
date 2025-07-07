const TopPageBackScreen = () => {
  return (
    <div className=" w-[100vw] h-[150lvh] relative">
      <div className="absolute top-0 z-[3]">
        <svg
          viewBox="0 0 1920 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          style={{ width: "100vw", height: "100vh" }}
        >
          <g clipPath="url(#clip0_365_2)">
            <rect width="1920" height="1080" className="background" />
            <path
              d="M1920 0V400H1834.62C1760.81 400 1689.59 427.211 1634.58 476.428L1160.04 901.018C1046.15 1002.92 873.854 1002.92 759.962 901.018L285.419 476.428C230.412 427.211 159.192 400 85.3806 400H0V0H1920Z"
              className="gradient-fill"
              fill="url(#gradient1)" // グラデーション1を適用
            />
          </g>
          <defs>
            <linearGradient
              id="gradient1"
              x1="960"
              y1="0"
              x2="960"
              y2="1080"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#1F1340" />
              <stop offset="1" stopColor="#000000" />
            </linearGradient>
            <clipPath id="clip0_365_2">
              <rect width="1920" height="1080" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="absolute topbackscreen-ani z-[2]">
        <svg
          viewBox="0 -100 1920 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          style={{ width: "100vw", height: "120vh" }}
        >
          <g clipPath="url(#clip0_365_2)">
            <rect width="1920" height="1080" className="background" />
            <path
              d="M1920 0V400H1834.62C1760.81 400 1689.59 427.211 1634.58 476.428L1160.04 901.018C1046.15 1002.92 873.854 1002.92 759.962 901.018L285.419 476.428C230.412 427.211 159.192 400 85.3806 400H0V0H1920Z"
              className="gradient-fill"
              fill="url(#gradient2)" // グラデーション1を適用
            />
          </g>
          <defs>
            <linearGradient
              id="gradient2"
              x1="960"
              y1="0"
              x2="960"
              y2="1080"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#1F1340" />
              <stop offset="1" stopColor="#ffffff" />
            </linearGradient>
            <clipPath id="clip0_365_2">
              <rect width="1920" height="1080" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default TopPageBackScreen;
