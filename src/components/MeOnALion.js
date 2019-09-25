import React, { useContext } from "react"
import "./MeOnALion.css"

import { ScreenSizeContext } from "../contexts/ScreenSize"

const MeOnALion = () => {
  const ScreenSize = useContext(ScreenSizeContext)
  console.log(ScreenSize)
  return (
    <div className="MeOnALionBackground">
      <svg
        className="MeOnALionSVG"
        viewBox={"0 0 112600 8600"}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        space="preserve"
        serif="http://www.serif.com/"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 1.5,
        }}
        // height="100%"
        // width="100%"
      >
        <g transform="matrix(4.16667,0,0,4.16667,0,0)">
          <svg
            id="meSVG"
            // height={ScreenSize.aspectRatio >= 1 ? "100%" : "50%"}
          >
            <g id="clouds">
              <path
                d="M-11.342,473.045c4.377,-36.985 122.638,55.275 130.813,91.61c10.635,47.266 79.537,73.94 95.492,95.304c17.696,23.696 -143.19,37.201 -157.898,59.79c-14.707,22.59 45.672,87.728 76.354,84.841c38.622,-3.635 102.244,-75.468 156.966,-85.219c50.503,-8.998 39.122,52.737 132.689,-6.567c43.438,-27.531 109.468,109.924 115.663,57.796c8.401,-70.704 161.509,50.409 235.359,14.187c55.362,-27.154 167.652,101.049 232.097,91.183c72.165,-11.048 246.2,168.182 285.021,137.023c29.855,-23.962 -110.668,120.389 -148.796,116.958c-103.884,-9.347 -220.61,195.351 -317.022,200.115c-79.654,3.935 -156.697,40.433 -217.773,73.553c-52.453,28.444 -91.338,152.978 -149.212,144.894c-268.438,-37.496 -113.733,230.11 -176.341,220.641c-62.609,-9.47 -142.723,-19.662 -187.242,-25.496c-27.32,-3.581 -100.47,45.096 -100.199,-111.81c0.272,-157.365 -23.86,-1007.63 -5.971,-1158.8Z"
                style={{ fill: "#bbb" }}
              />
              <path
                d="M-6.446,451.159c21.873,26.187 73.711,29.966 94.641,47.676c16.808,14.222 35.419,65.665 52.023,80.125c16.692,14.538 71.264,69.328 68.122,90.372c-3.141,21.044 -83.038,-2.473 -106.088,11.191c-23.049,13.664 -49.849,11.22 -60.405,20.196c-10.555,8.976 6.011,48.857 16.187,58.358c14.386,13.432 43.366,45.981 70.392,41.981c31.98,-4.733 87.765,-55.957 121.49,-70.378c25.273,-10.807 59.225,1.308 86.684,2.507c32.061,1.399 71.962,2.52 105.68,5.889c30.153,3.013 61.056,-10.091 90.807,-4.332c52.745,10.21 162.13,37.435 225.663,65.593c56.909,25.222 129.69,11.9 185.575,34.211c55.886,22.31 96.137,85.909 149.737,99.651c48.769,12.504 161.978,69.997 188.808,83.168c26.829,13.172 -120.489,73.897 -172.529,108.89c-60.261,40.522 -150.201,101.18 -236.023,103.018c-88.898,1.904 -222.315,-62.91 -297.361,-91.594c-53.808,-20.565 -112.889,-44.368 -152.914,-80.505c-86.785,-78.357 -86.737,-173.263 -86.737,-173.263c0,0 -84.908,11.84 -120.247,14.932c-35.339,3.091 -69.553,43.877 -100.658,50.205c-31.106,6.329 -80.843,-0.1 -113.284,-8.478c-32.44,-8.377 -31.436,-515.6 -9.563,-489.413Z"
                style={{ fill: "#ededeb" }}
              />
              <path
                d="M1366.39,967.953c13.079,-36.231 62.797,27.349 102.656,20.141c15.955,-2.886 -32.263,30.876 -52.804,37.555c-20.866,6.785 -60.661,8.741 -72.392,3.151c-11.057,-5.269 -5.628,-31.282 2.008,-36.692c7.635,-5.41 57.689,34.515 60.727,4.911c5.611,-54.664 -51.005,0.879 -40.195,-29.066Z"
                style={{ fill: "#ededeb" }}
              />
              <path
                d="M8.711,1389.87c25.975,11.21 68.46,16.63 77.927,33.628c33.952,60.961 -63.559,-1.509 -61.566,58.093c0.691,20.642 63.223,43.465 124.461,22.469c47.873,-16.413 141.584,-41.255 154.287,-24.593c12.703,16.661 -77.414,74.616 -73.985,144.633c2.547,52.022 -136.334,70.392 -150.794,56.592c-33.615,-32.079 -52.491,43.8 -80.974,43.629c-28.484,-0.171 -15.332,-345.66 10.644,-334.451Z"
                style={{ fill: "#ededeb" }}
              />
            </g>
            <g id="lion-rock">
              <path
                d="M2.414,2085.2C4.863,2039.13 66.07,2058.01 111.332,1984.27C148.817,1923.19 241.518,1830.81 304.384,1794.93C361.686,1762.23 429.397,1816.38 482.772,1778.56C536.147,1740.75 560.768,1594.62 627.111,1528.15C757.791,1397.23 980.772,1529.5 1157.37,1537.57C1344.63,1546.13 1594.28,1582.3 1665.27,1580.32C1853.62,1575.05 1917.76,1490.11 2139.73,1675.48C2207.25,1731.86 2408.46,1629.22 2595.75,1744.69C2733.63,1829.69 4561.27,1884.53 4296.16,1870.48C4182.67,1864.47 6347.32,1966.98 6946.6,2087.5C6954.21,3629.22 6950.84,3949.84 6950.84,3949.84L-16.887,4034.61C-16.887,4034.61 -15.503,2422.28 2.417,2085.2L2.414,2085.2Z"
                style={{ fill: "#f1c584" }}
              />
            </g>
            <g id="myself">
              <g id="head">
                <path
                  id="my-head"
                  d="M725.47,244.997c-28.928,51.153 3.978,83.644 -8.98,117.236c-23.959,62.113 -7.867,119.045 1.219,148.963c6.118,20.142 38.069,10.295 48.759,47.891c7.928,27.884 6.949,96.979 24.122,123.247c56.471,86.378 138.941,22.026 165.076,-7.366c19.829,-22.298 40.03,-73.24 38.665,-90.627c-0.835,-10.633 -17.135,-0.1 -19.806,-15.163c-5.584,-31.49 25.4,-125.914 28.499,-185.336c4.99,-95.69 -29.256,-116.721 -72.757,-158.644c-46.934,-45.231 -171.527,-39.029 -204.797,19.799Z"
                  style={{ fill: "#e59162" }}
                />
                <path
                  id="beard"
                  d="M914.378,405.805c-12.578,17.996 -27.805,18.369 -45.93,28.164c-21.301,11.511 -25.454,57.669 -40.037,56.716c-18.143,-1.185 -9.804,-34.941 -22.602,-37.445c-12.797,-2.504 -23.783,30.835 -36.977,33.986c-9.966,2.38 -33.29,-1.166 -42.109,-6.382c-20.086,-11.877 -22.992,-50.055 -22.636,-42.56c0.311,6.538 -5.14,79.955 19.444,86.781c35.142,9.757 28.305,33.298 56.309,39.712c28.004,6.414 74.119,1.57 97.518,-13.426c23.399,-14.995 38.305,-53.236 47.775,-76.683c8.266,-20.469 9.235,-39.987 13.987,-61.545c4.752,-21.558 -19.621,-14.644 -24.742,-7.318Z"
                  style={{ fillOpacity: 0.74 }}
                />
                <path
                  id="lip-tuft"
                  d="M728.639,441.031c13.972,3.223 38.213,-1.402 40.847,1.321c3.587,3.707 -13.011,9.256 -21.673,9.937c-8.252,0.649 -25.985,-12.83 -19.174,-11.258Z"
                  style={{ fillOpacity: 0.74 }}
                />
                <path
                  id="right-moustache"
                  d="M757.709,383.795c0.471,4.862 -1.63,11.842 2.195,14.88c10.214,8.115 38.438,27.346 42.86,33.721c1.752,2.525 4.617,-16.662 -0.697,-17.875c-5.753,-1.313 -44.829,-35.588 -44.358,-30.726Z"
                  style={{ fillOpacity: 0.74 }}
                />
                <path
                  id="left-moustache"
                  d="M743.578,384.909c0.22,5.602 4.505,14.459 -1.47,15.595c-8.09,1.537 -22.471,32.19 -28.627,32.725c-4.002,0.348 -0.421,-14.924 6.3,-20.996c9.063,-8.187 23.554,-33.469 23.797,-27.324Z"
                  style={{ fillOpacity: 0.74 }}
                />
                <g id="hair">
                  <path
                    d="M701.567,363.335c-15.59,-18.935 -34.908,-51.934 -27.876,-73.344c27.696,-84.321 59.387,-70.877 67.031,-96.692c7.386,-24.945 58.571,-27.945 91.341,-22.504c64.704,10.743 88.075,19.449 137.959,82.118c26.968,33.878 46.45,67.727 49.374,121.541c2.023,37.233 -20.625,74.38 -24.962,115.08c-2.91,27.309 -5.859,71.93 -21.846,73.405c-8.578,0.792 -11.148,-39.452 -26.778,-61.951c-4.2,-6.046 -5.051,-20.657 2.169,-19.22c21.552,4.29 42.704,-32.138 45.18,-46.577c3.56,-20.753 -5.241,-32.468 -11.764,-36.192c-7.586,-4.332 -19.773,-17.715 -30.028,1.209c-3.775,6.968 -6.387,14.504 -10.654,19.16c-3.947,4.307 -19.737,-1.931 -20.97,-10.008c-3.083,-20.202 7.784,-61.372 -14.787,-97.056c-5.672,-8.967 27.089,-22.737 5.098,-49.566c-25.358,-30.939 -52.517,-0.244 -78.763,18.501c-15.204,10.858 -76.879,-18.166 -76.646,-18.401c0.248,-0.25 31.612,2.76 46.163,-2.462c9.942,-3.568 32.778,-12.172 39.836,-33.74c2.923,-8.932 -51.739,6.296 -84.026,19.475c-32.286,13.179 -39.323,136.326 -55.051,117.224Z"
                    style={{ fill: "#22191a" }}
                  />
                  <path
                    d="M674.626,306.639c1.611,-18.406 15.393,-50.657 25.651,-67.369c8.403,-13.69 24.909,-17.238 37.287,-27.476c12.57,-10.397 18.895,-25.209 34.868,-29.598c16.918,-4.648 53.195,-7.907 65.246,-3.715c7.117,2.475 14.19,18.278 9.937,18.891c-22.442,3.236 -48.686,9.974 -68.482,16.393c-18.043,5.85 -34.366,16.067 -51.549,24.1c-17.183,8.034 -55.11,93.364 -52.958,68.774Z"
                    style={{ fill: "#6b4835" }}
                  />
                  <path
                    d="M919.902,289.183c-3.333,-3.257 -11.088,15.539 -11.007,23.921c0.083,8.56 4.066,18.326 6.915,29.246c3.165,12.132 2.617,32.589 8.289,41.008c5.672,8.418 20.213,7.037 30.471,7.313c11.262,0.303 42.032,5.702 37.917,-6.44c-5.755,-16.977 -58.964,-81.734 -72.585,-95.048Z"
                    style={{ fill: "#6b4835" }}
                  />
                </g>
                <g id="sunglasses">
                  <path
                    id="right-lens"
                    d="M795.971,282.389c26.656,-5.54 55.93,0.052 66.152,14.02c13.971,19.093 -1.219,62.716 -20.121,69.635c-21.359,7.817 -33.749,2.198 -49.596,-12.89c-24.015,-22.866 -24.06,-65.024 3.565,-70.765Z"
                    style={{
                      fill: "#29282f",
                      stroke: "#f6e7b3",
                      strokeWidth: "3.35px",
                    }}
                  />
                  <path
                    id="right-earpiece"
                    d="M954.106,393.754l-78.5,-76.143l-8.092,9.365l-0.138,-10.732l8.23,1.367"
                    style={{
                      fill: "none",
                      stroke: "#f6e7b3",
                      strokeWidth: "3.35px",
                    }}
                  />
                  <path
                    id="left-lens"
                    d="M748.498,289.116c-18.457,-10.565 -51.389,0.468 -62.823,12.278c-15.085,15.58 -6.939,60.513 5.484,69.305c15.847,11.215 40.058,-14.146 52.626,-32.043c8.849,-12.6 14.985,-43.66 4.713,-49.54Z"
                    style={{
                      fill: "#29282f",
                      stroke: "#f6e7b3",
                      strokeWidth: "3.35px",
                    }}
                  />
                  <path
                    id="bridge"
                    d="M795.461,282.15l-57.835,1.256"
                    style={{
                      fill: "none",
                      stroke: "#f6e7b3",
                      strokeWidth: "3.35px",
                    }}
                  />
                  <path
                    id="nosepiece"
                    d="M755.539,314.692c-3.969,-31.767 21.544,-22.285 18.607,-12.081"
                    style={{
                      fill: "none",
                      stroke: "#f6e7b3",
                      strokeWidth: "3.35px",
                    }}
                  />
                </g>
                <path
                  id="left-noustril"
                  d="M734.755,370.048c-1.86,-1.45 -2.351,2.158 -1.62,3.921c0.73,1.764 2.129,5.307 5.725,6.634c2.575,0.951 -2.599,-9.383 -4.105,-10.555Z"
                  style={{ fill: "#2f1c10" }}
                />
                <path
                  id="right-noustril"
                  d="M753.896,364.469c-3.482,0.635 -3.85,5.748 -1.888,7.891c1.962,2.143 17.069,6.209 16.846,4.355c-0.921,-7.665 -11.979,-12.788 -14.958,-12.246Z"
                  style={{ fill: "#2f1c10" }}
                />
              </g>
              <path
                d="M739.429,410.583c3.613,0.42 5.41,-0.309 9.046,-0.453c3.889,-0.155 7.569,-2.516 11.456,-0.854c5.37,2.297 16.177,7.997 27.26,17.354c10.945,9.241 8.495,4.712 10.951,6.584c2.546,1.941 -11.607,0.214 -28.387,-6.025c-5.913,-2.198 -13.367,-3.518 -18.7,-2.914c-4.908,0.556 -10.706,-1.214 -13.584,2.8c-5.88,8.2 -13.32,13.114 -12.455,7.953c1.236,-7.38 10.799,-24.864 14.413,-24.445Z"
                style={{ fill: "#ab4d3b" }}
              />
              <path
                d="M748.525,439.102c-8.106,0.473 -16.501,0.278 -18.657,-1.361c-2.155,-1.638 4.523,-5.473 8.33,-12.141c2.007,-3.516 10.219,-1.769 14.238,-2.252c4.23,-0.51 7.143,-2.057 11.574,-1.442c9.632,1.335 25.015,11.106 25.683,12.763c0.912,2.26 -33.061,3.961 -41.168,4.433Z"
                style={{ fill: "#ed8562" }}
              />
              <g id="clothes">
                <g id="shirt" transform="matrix(1,0,0,1,-1.86732,-3.13554)">
                  <path
                    id="shirt1"
                    serifId="shirt"
                    d="M1158.13,1271.12c-4.654,-36.257 -22.975,-187.689 -26.472,-242.504c-2.299,-36.039 -2.516,-61.371 0.02,-61.173c73.138,5.726 119.882,-44.958 119.882,-44.958c0,0 -4.062,-38.1 -24.789,-167.393c-11.317,-70.596 -42.783,-110.494 -106.218,-127.745c-83.292,-22.651 -125.817,-45.582 -124.379,-45.48c0,0 -11.271,103.961 -91.651,132.064c-41.34,14.454 -94.127,15.316 -116.592,-44.47c-18.945,-50.42 -16.249,-63.333 -16.249,-63.333c0,0 -67.607,16.989 -130.922,48.346c-24.186,11.979 -63.182,18.8 -89.386,93.887c-18.562,53.189 7.726,153.213 7.726,153.213c0,0 11.024,21.897 60.13,12.519c12.536,-2.394 -2.157,287.067 -2.157,287.067c0,0 551.581,151.941 541.057,69.96Z"
                    style={{
                      fill: "#f7b1ad",
                      stroke: "#000",
                      strokeOpacity: 0,
                      strokeWidth: "5.18px",
                    }}
                  />
                  <g id="shirt-bg" transform="matrix(1,0,0,1,1.86732,3.13554)">
                    <path
                      d="M1072.49,807.993c0.197,-8.092 -188.323,35.728 -368.99,-38.317c-1.044,-0.428 3.031,358.472 -9.496,422.827c-1.588,8.159 241.173,84.75 428.324,-14.753c4.282,-2.277 -52.324,-267.6 -49.838,-369.757Z"
                      style={{
                        fill: "#89e1e3",
                        stroke: "#000",
                        strokeOpacity: 0,
                        strokeWidth: "5.18px",
                      }}
                    />
                  </g>
                  <g
                    id="legally-distinct-starfish-man"
                    transform="matrix(1,0,0,1,1.86732,3.13554)"
                  >
                    <path
                      d="M932.402,981.138c-70.352,-89.837 -261.83,-196.487 -261.83,-196.487c0,0 87.955,207.424 109.783,295.019c7.327,29.407 -99.184,33.398 -83.098,107.189c15.189,69.679 403.136,7.166 403.136,7.166l-12.537,-231.037c0,0 -125.614,56.255 -155.454,18.15Z"
                      style={{
                        fill: "#ff785e",
                        stroke: "#000",
                        strokeOpacity: 0,
                        strokeWidth: "5.18px",
                      }}
                    />
                  </g>
                  <g transform="matrix(1.04474,-0.20662,0.204587,1.03446,-241.839,202.143)">
                    <ellipse
                      cx="1168.83"
                      cy="938.201"
                      rx="76.557"
                      ry="32.086"
                      style={{
                        fill: "#ff785e",
                        stroke: "#000",
                        strokeOpacity: 0,
                        strokeWidth: "4.89px",
                      }}
                    />
                  </g>
                  <g
                    id="left-arm-hole"
                    transform="matrix(0.991628,-0.129129,0.129129,0.991628,-111.594,67.4165)"
                  >
                    <ellipse
                      cx="634.515"
                      cy="916.81"
                      rx="79.416"
                      ry="28.88"
                      style={{
                        fill: "#ff785e",
                        stroke: "#000",
                        strokeOpacity: 0,
                        strokeWidth: "5.18px",
                      }}
                    />
                  </g>
                </g>
                <g id="shorts">
                  <path
                    id="shorts-base"
                    d="M906.931,1500.07c65.831,9.886 149.047,42.479 206.204,15.439c57.156,-27.04 130.093,-121.432 144.078,-171.332c11.404,-40.696 -13.743,-128.894 -54.377,-140.517c-112.9,-32.292 -100.638,-17.097 -180.744,52.319c-25.475,22.076 -99.843,12.362 -157.862,-5.245c-49.787,-15.109 -87.426,-69.755 -143.868,-84.874c-99.603,-26.682 -204.402,5.315 -199.03,53.502c5.452,48.903 96.094,215.992 161.584,263.835c60.661,44.314 153.965,6.352 224.015,16.873Z"
                    style={{
                      fill: "#efd63b",
                      stroke: "#000",
                      strokeOpacity: 0,
                      strokeWidth: "5.18px",
                    }}
                  />
                  <path
                    id="flower2"
                    d="M819.641,1363.2c14.051,3.585 -2.93,62.716 9.425,65.061c20.611,3.911 12.452,-64.398 30.986,-61.711c35.619,5.163 59.269,44.981 47.99,80.941c-10.232,32.619 -54.168,28.215 -53.499,35.277c0.525,5.543 73.721,-2.226 50.089,7.148c-20.054,7.954 -140.912,24.544 -172.558,17.767c-19.863,-4.254 -21.848,-48.753 -17.317,-58.428c4.532,-9.674 39.533,7.356 44.506,0.38c4.973,-6.976 -21.716,-29.105 -14.666,-42.235c1.697,-3.162 66.589,-46.358 75.044,-44.2Z"
                    style={{
                      fill: "#5f3e45",
                      stroke: "#000",
                      strokeOpacity: 0,
                      strokeWidth: "5.18px",
                    }}
                  />
                  <path
                    id="flower3"
                    d="M918.794,1366.95c7.291,8.104 18.817,-5.976 20.971,-1.303c4.75,10.307 -9.868,20.509 -10.786,30.447c-1.612,17.456 25.854,27.175 31.657,24.008c7.935,-4.333 -0.606,-36.091 2.312,-40.896c2.918,-4.805 10.116,20.909 15.198,12.067c5.213,-9.071 14.725,-58.968 14.86,-68.812c0.078,-5.7 -14.221,12.919 -14.052,9.749c0.169,-3.17 15.78,-26.358 15.064,-28.767c-0.716,-2.409 -11.693,11.937 -19.358,14.315c-10.744,3.333 -36.456,0.578 -45.52,9.049c-16.157,15.1 -15.481,34.436 -10.346,40.143Z"
                    style={{
                      fill: "#5f3e45",
                      stroke: "#000",
                      strokeOpacity: 0,
                      strokeWidth: "5.18px",
                    }}
                  />
                  <path
                    id="flower1"
                    d="M1044.32,1410.3c-27.89,-0.629 -20.896,52.072 -4.312,69.744c9.884,10.532 49.321,-4.917 56.899,-0.865c7.577,4.053 -18.624,19.412 -11.434,25.182c7.674,6.157 29.851,5.759 41.152,2.454c10.636,-3.111 20.721,-14.066 26.996,-18.736c35.437,-26.367 49.071,-63.638 43.158,-75.105c-5.912,-11.467 -39.595,14.684 -47.489,13.037c-7.478,-1.559 7.5,-24.902 0.126,-22.913c-16.765,4.521 -42.224,2.237 -53.333,-2.181c-6.423,-2.554 2.489,19.051 -4.312,20.284c-8.627,1.563 -34.392,-10.607 -47.451,-10.901Z"
                    style={{
                      fill: "#5f3e45",
                      stroke: "#000",
                      strokeOpacity: 0,
                      strokeWidth: "5.18px",
                    }}
                  />
                </g>
              </g>
              <path
                id="left-forearm"
                d="M638.237,1078.73c40.379,20.155 78.611,-67.122 86.186,-116.039c10.756,-69.462 -17.549,-217.617 -21.911,-286.531c-3.052,-48.202 27.128,-37.288 56.22,-95.929c4.363,-8.794 28.401,-15.888 33.126,-37.156c1.304,-5.868 -6.988,-10.53 -9.171,-15.527c-1.998,-4.575 1.233,-12.571 -2.736,-15.599c-7.776,-5.936 -8.02,-11.739 -15.086,-17.138c-6.815,-5.207 -7.927,-13.719 -14.372,-18.837c-6.237,-4.953 -11.135,-14.042 -18.293,-17.533c-8.401,-4.096 -23.777,-4.255 -32.867,-3.391c-11.638,1.107 -28.502,-3.949 -33.463,0.554c-23.901,21.693 -23.021,102.332 -44.917,149.026c-18.673,39.821 -14.953,82.482 -23.273,125.669c-10.948,56.821 -52.207,152.223 -46.391,210.397c6.976,69.782 47.928,118.557 86.948,138.034Z"
                style={{ fill: "#ec9a62" }}
              />
              <path
                id="left-thigh"
                d="M538.543,1055.94c15.795,-55.656 137.013,-41.256 170.263,18.912c37.541,67.936 72.359,102.274 82.477,163.939c7.369,44.915 -144.976,112.719 -183.222,77.673c-35.174,-32.23 -97.834,-160.746 -69.518,-260.524Z"
                style={{ fill: "#feb980" }}
              />
              <path
                id="left-shin"
                d="M689.053,1731.82c23.14,-37.498 -115.805,-282.335 -136.956,-391.269c-25.57,-131.699 -11.943,-164.069 -32.528,-241.445c-9.978,-37.51 34.557,-98.559 108.092,-75.132c50.361,16.045 82.832,207.699 128.486,278.067c30.785,47.452 6.193,120.052 6.516,176.615c0.831,145.529 57.804,295.69 64.205,373.71c5.361,65.357 -69.31,-5.187 -182.737,58.566c-41.808,23.498 -161.806,-24.816 -153.059,-55.497c8.746,-30.682 126.22,-7.327 197.981,-123.615Z"
                style={{ fill: "#feb980" }}
              />
              <path
                id="right-upper-arm"
                d="M1094.52,927.721c-9.737,9.563 -3.694,140.467 9.03,175.515c13.514,37.223 81.442,45.784 106.387,28.197c24.945,-17.587 27.994,-90.409 33.478,-127.521c4.304,-29.125 3.343,-78.856 1.17,-91.656c-2.949,-17.365 -91.519,-42.032 -150.065,15.465Z"
                style={{ fill: "#ec9a62" }}
              />
              <path
                id="right-forearm"
                d="M1116.63,1010.83c39.331,5.94 100.691,51.283 106.006,81.273c6.602,37.246 -10.582,62.004 -33.366,68.795c-45.909,13.682 -174.659,31.089 -230.619,14.277c-24.8,-7.451 -77.792,-33.487 -79.228,-18.443c-1.162,12.174 -4.916,23.828 -35.966,57.659c-16.492,17.969 -9.496,102.029 -32.327,102.722c-25.445,0.772 -7.008,-101.93 -10.081,-93.728c-19.847,52.982 11.289,137.711 -16.236,140.436c-24.453,2.421 -14.556,-84.753 -21.506,-77.781c-12.932,12.974 8.512,101.768 -26.55,99.851c-12.657,-0.692 -4.184,-39.302 -10.359,-43.134c-6.176,-3.832 0.438,21.564 -17.046,20.442c-14.097,-0.905 -12.204,-50.092 -16.249,-86.882c-2.46,-22.377 9.867,-41.377 24.108,-75.088c14.608,-34.578 32.331,-42.506 81.349,-105.582c32.232,-41.476 149.846,-33.764 196.206,-43.728c34.767,-7.472 102.123,-44.071 121.864,-41.089Z"
                style={{ fill: "#ec9a62" }}
              />
              <path
                id="right-thigh"
                d="M1217.76,1098.13c35.954,-4.505 64.151,81.5 52.231,125.082c-18.861,68.963 -68.564,125.672 -127.072,158.698c-32.473,18.33 -89.35,28.312 -126.801,-29.334c-23.103,-35.56 16.47,-30.959 37.375,-109.315c47.059,-176.387 134.512,-141.403 164.267,-145.131Z"
                style={{ fill: "#feb980" }}
              />
              <path
                id="right-shin"
                d="M1234.15,1106.76c-59.02,-39.988 -102.309,70.378 -118.817,120.783c-26.227,80.081 -70.094,208.12 -50.694,298.907c25.319,118.488 13.985,152.907 4.601,231.805c-8.094,68.058 -53.19,161.226 -68.341,199.2c-15.388,38.571 173.454,73.118 164.529,33.675c-7.987,-35.297 -8.883,-143.082 -2.387,-214.186c10.161,-111.212 91.788,-262.136 113.873,-377.275c6.408,-33.406 -13.678,-104.883 -7.249,-138.284c9.987,-51.878 34.329,-107.303 -35.515,-154.625Z"
                style={{ fill: "#feb980" }}
              />
              <g id="shoes">
                <g id="left-shoe">
                  <path
                    d="M674.685,1659.52c18.736,-20.206 46.985,-25.78 69.976,-1.214c2.668,2.851 18.764,3.917 39.137,6.244c8.731,0.997 -2.858,-16.877 2.196,-14.992c2.851,1.064 4.797,1.911 7.849,10.419c19.346,53.936 61.439,181.181 46.236,213.647c-10.626,22.691 -128.051,3.293 -167.88,46.009c-4.393,4.712 -123.769,3.866 -201.752,-54.637c-0.497,-0.373 12.29,-33.044 25.488,-31.736c37.738,3.741 98.665,-17.245 135.023,-52.342c62.36,-60.199 35.336,-112.348 43.727,-121.398Z"
                    style={{
                      fill: "#5e5146",
                      stroke: "#000",
                      strokeOpacity: 0,
                      strokeWidth: "5.18px",
                    }}
                  />
                  <path
                    id="shoe-bottom"
                    d="M494.155,1833.97c14.238,-5.953 45.79,-9.348 63.564,-3.736c27.173,8.58 43.253,26.036 40.894,43.693c-0.457,3.423 59.524,20.332 84.161,10.958c27.977,-10.646 39.098,-14.263 73.538,-23.025c34.884,-8.875 68.021,-2.537 85.907,-21.894c1.477,-1.598 8.529,30.961 -2.005,38.068c-20.124,13.577 -76.151,18.719 -119.923,20.196c-46.093,1.555 -20.985,28.924 -90.056,30.102c-41.121,0.701 -103.384,-18.221 -157.941,-62.382c-4.228,-3.422 9.948,-26.999 21.861,-31.98Z"
                    style={{
                      fill: "#f6e7cf",
                      stroke: "#000",
                      strokeOpacity: 0,
                      strokeWidth: "5.18px",
                    }}
                  />
                  <path
                    d="M725.043,1785.4c-7.863,-10.686 -10.206,-78.598 -28.713,-82.848c-7.557,-1.735 13.502,-10.119 15.583,-2.649c5.117,18.36 46.821,121.743 3.414,118.387c-27.846,-2.153 -6.153,-109.277 -19.744,-121.537c-44.379,-40.035 -81.405,103.864 -88.289,98.837c-18.406,-13.441 80.045,-97.657 84.575,-98.511c4.531,-0.854 -64.83,32.165 -65.18,79.871"
                    style={{
                      fill: "none",
                      stroke: "#f6e7cf",
                      strokeWidth: "8.54px",
                    }}
                  />
                  <path
                    d="M735.012,1716.52l-62.592,15.705l39.329,37.345l-68.099,2.881l51.413,21.589l-70.265,2.05l18.832,32.312c0,0 -68.364,-10.299 -71.552,-8.026c-3.187,2.272 52.428,21.661 52.428,21.661l-34.66,-29.975l77.884,-1.281l-28.039,-25.793l40.787,-6.837l-27.948,-21.764l77.064,-11.871l-47.986,-29.267"
                    style={{
                      fill: "none",
                      stroke: "#f6e7cf",
                      strokeWidth: "8.54px",
                    }}
                  />
                </g>
                <g id="right-shoe">
                  <path
                    d="M1075.1,1740.23c-0.996,-0.05 -39.448,135.314 -57.505,172.627c-14.179,29.3 -37.504,54.51 -32.312,59.321c20.633,19.122 149.371,55.359 177.544,19.837c8.359,-10.539 -11.361,-157.124 1.41,-224.717c3.805,-20.138 -27.294,-36.614 -47.594,-38.437c-8.746,-0.786 -16.189,29.009 -22.384,31.095c-6.194,2.085 5.722,-18.478 -19.159,-19.726Z"
                    style={{ fill: "#5e5146" }}
                  />
                  <path
                    id="lace-bow"
                    d="M1100.84,1891.16c13.928,-54.593 13.588,-113.314 14.112,-103.164c2.311,44.757 30.371,133.369 -26.2,91.775c-38.686,-28.445 -9.665,-123.114 34.372,-89.481c35.434,27.062 41.698,117.928 48.207,124.254c5.905,5.74 2.943,-118.755 -37.376,-122.832c-37.97,-3.84 25.988,3.457 31.112,140.36"
                    style={{
                      fill: "none",
                      stroke: "#f6e7cf",
                      strokeWidth: "8.54px",
                    }}
                  />
                  <path
                    id="shoelace"
                    d="M1135.03,1799.17l-68.212,21.639l76.225,47.391l-93.972,-2.69l80.863,43.671l-89.599,-5.211l82.576,24.922l-75.196,-41.956l89.005,3.452l-77.491,-45.251l89.187,-5.143l-74.008,-50.338"
                    style={{
                      fill: "none",
                      stroke: "#f6e7cf",
                      strokeWidth: "8.54px",
                    }}
                  />
                  <path
                    id="shoe-bottom1"
                    serifid="shoe-bottom"
                    d="M990.709,1949.92c-12.174,4.804 -16.288,31.035 -4.124,35.866c28.615,11.364 146.551,31.153 175.928,28.828c14.301,-1.132 6.763,-34.196 1.536,-44.039c-5.226,-9.843 -22.875,-8.218 -32.894,-15.018c-22.637,-15.365 -44.311,-29.479 -67.287,-34.111c-34.393,-6.934 -52.303,20.244 -73.159,28.474Z"
                    style={{ fill: "#f6e7cf" }}
                  />
                </g>
              </g>
            </g>
          </svg>
          <g id="Layer2"></g>
        </g>
        <defs>
          <linearGradient
            id="_Linear1"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(21.7929,2822.49,-2835.96,22.1064,1494.84,104.748)"
          >
            <stop
              offset="0"
              style="stop-color:#3e69a0;stop-opacity:1"
              style={{ stopColor: "#3e69a0", stopOpacity: 1 }}
            />
            <stop
              offset="1"
              style="stop-color:#7ea0cd;stop-opacity:1"
              style={{ stopColor: "#7ea0cd", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default MeOnALion
