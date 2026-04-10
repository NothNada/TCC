import React from "react";
import GoHome from "../components/GoHome"

import "../components/NotFoundStyle.css"

export default function Main() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-gray-100 text-[0px] bg-[#ffdc93] rounded-[50px] relative overflow-hidden mx-auto my-0">
      <span className="block h-[49px] font-['Avenir_Next'] text-[36px] font-medium leading-[49px] text-[#000] relative text-left whitespace-nowrap z-[13] mt-[90px] mr-0 mb-0 ml-[559px]">
        Page NotFound
      </span>
      <div className="w-[975px] h-[415px] opacity-30 relative overflow-hidden mt-[136px] mr-0 mb-0 ml-[236px]">
        <div className="w-[100px] h-[100px] relative overflow-hidden z-[7] mt-[42px] mr-0 mb-0 ml-[554px]" />
        <div className="w-full h-full absolute top-0 left-0 z-[1]">
          <div className="w-full h-full absolute top-0 left-0 z-[2]">
            <div className="w-full h-full absolute top-0 left-0 z-[3]">
              <div className="w-[29.86%] h-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-10/eesP3FJ0pZ.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[35.03%] z-[5]" />
              <div className="w-[32.1%] h-[97.17%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-10/NCMUGM9zD8.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[1.42%] left-0 z-[4]" />
              <div className="w-[32.1%] h-[97.17%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-10/f6GxNmv3JB.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[1.42%] left-[67.9%] z-[6]" />
            </div>
          </div>
        </div>
      </div>
      <GoHome>
      <div className="w-[1854.625px] h-[1249.05px] relative z-[12] mt-[90px] mr-0 mb-0 ml-[616px]">
        <div className="pl-20 pt-2 w-[206px] h-[57px] bg-[#fff1d6] rounded-[30px] border-solid border-[3px] border-[#000] absolute top-0 left-0 box-content shadow-[0_0_0_0_#ffffff_inset] z-[9]">
            go home
          <div className="w-[35px] h-[35px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-10/s8jiuxV6mg.png)] bg-cover bg-no-repeat absolute top-[10px] left-[26px] overflow-hidden z-[11]" />
        </div>
        <div className="w-[36.24%] h-[96.83%] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-04-10/txeEyNtbyK.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[3.17%] left-[63.76%] z-[12]" />
      </div>

      </GoHome>
    </div>
  );
}
