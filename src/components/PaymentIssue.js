import React from "react";
import image from "../assets/image12.png"
import vector from "../assets/Vector.png"
import dots from "../assets/dots.png"

function AboutPage() {
    return (

        <div className="bg-white mt-[15vh] w-[1660px] m-auto flex  "  >
            <div className="flex-1 " >
                <img src={image} />
            </div>

            <div className=" flex flex-col flex-1" >

                <span className=" text-[#2B59FF] leading-[27.15px] w-[239px] h-[28px] text-[20.89px] font-medium mt-[12vh]" >Why choose solvesphere</span>
                <span className=" mt-6 text-black text-[50.13px] h-121px leading-[60.16px] w-[607px] font-semibold " > Solvesphere manage and grow your business </span>
                <span className=" mt-6 text-black text-[16.71px] w-[474.15px] font-normal leading-[27.15px] opacity-80 h-[55px] " > An enim nullam tempor sapien gravida donec enim ipsum porta justo integer at odio velna vitae auctor integer congue </span>
                <div className="flex mt-8 gap-[13vh] " >

                    <div >
                        <ol className="flex flex-col gap-4 " >
                            <li className="flex w-[114px] h-[28px] font-normal text-[16.71px] leading-[27.15px] "  > <img src={vector} className="mt-[1vh] mr-[1vh] h-[1.4vh] " /> Boost SEO</li>
                            <li className="flex w-[134px] h-[28px] font-normal text-[16.71px] leading-[27.15px]" > <img src={vector} className="mt-[1vh] mr-[1vh] h-[1.4vh] " />Visual Reviews</li>
                            <li className="flex w-[134px] h-[28px] font-normal text-[16.71px] leading-[27.15px]" > <img src={vector} className="mt-[1vh] mr-[1vh] h-[1.4vh] " />Social Sharing</li>
                        </ol>

                    </div>
                    <div>
                        <ol className="flex flex-col gap-4 " >
                            <li className="flex w-[143px] h-[28px] font-normal text-[16.71px] leading-[27.15px]" > <img src={vector} className="mt-[1vh] mr-[1vh] h-[1.4vh] " />Manage Buying</li>
                            <li className="flex w-[154px] h-[28px] font-normal text-[16.71px] leading-[27.15px] " > <img src={vector} className="mt-[1vh] mr-[1vh] h-[1.4vh] " />Buyer Protection</li>
                            <li className="flex w-[124px] h-[28px] font-normal text-[16.71px] leading-[27.15px]" > <img src={vector} className="mt-[1vh] mr-[1vh] h-[1.4vh] " />Virtual Card</li>
                        </ol>

                    </div>
                    <img className="ml-[23vh] h-[22vh] " src={dots} />
                </div>

            </div>

        </div>

    )
}

export default AboutPage;