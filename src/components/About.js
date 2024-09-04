import React from "react"
import iconOne from "../assets/icon.png"
import iconTwo from "../assets/icon (1).png"
import iconThree from "../assets/icon (2).png"
import iconFour from "../assets/Group.png"
import yellowShape from "../assets/shape.png"

function AboutPage() {
    return (
        <div className="bg-white w-[1660px] m-auto flex mt-[14vh] "  >
            <div className="ml-[14vh] flex-col flex flex-[0.9] ">
                <span className="text-[#2B59FF] leading-[27.15px] text-[20.89px] " >About solvesphere</span>
                <span className="text-black text-[50.13px] h-[181px]  w-[578px] leading-[60.16px] mt-5 font-semibold "  >Solvesphere is a platform that gives you many solutions quickly</span>
                <span className=" mt-6 w-[474.15px] font-normal leading-[27.15px] text-[16.17px] h-[55px] opacity-80" >An enim nullam tempor sapien gravida donec enim ipsum porta justo integer at odio velna vitae auctor integer congue</span>
                <span>
                    <button className=' mt-12 bg-[#FD4C5C] ml-4 w-[162.93px] h-[53.15px] text-white rounded-[3.13px]' >Get Started</button>
                </span>
                <span>
                    <img className="mt-[18vh] ml-[-15vh] " src={yellowShape} />
                </span>
            </div>
            <div className="gap-6 flex-1 flex flex-wrap h-[60vh] ">
                <div className="flex flex-col h-[275.71px] p-[2vh] w-[319.58px] hover:shadow-lg " >
                    <span>
                        <img className="mt-4" src={iconOne} />
                    </span>
                    <span className="mt-8 font-semibold text-black text-[20.89px] leading-[27.15px] w-[207px] h-[28px] " >
                        Advanced Reporting
                    </span>
                    <span className="mt-5 text-[16.71px] font-normal leading-[27.15px] w-[256.92px] h-[82px] opacity-70 "  >

                        With lots of unique blocks you can easily create a page without coding with Appmax
                    </span>
                </div>
                <div className="flex flex-col h-[275.71px] p-[2vh] w-[319.58px]  hover:shadow-lg " >
                    <span>
                        <img className="mt-4" src={iconTwo} />
                    </span>
                    <span className="mt-8 font-semibold text-black text-[20.89px] leading-[27.15px] w-[207px] h-[28px] " >
                        Email Services
                    </span>
                    <span className="mt-5 text-[16.71px] font-normal leading-[27.15px] w-[256.92px] h-[82px] opacity-70 "  >
                        With lots of unique blocks you can easily create a page without coding with Appmax
                    </span>
                </div>
                <div className="flex flex-col h-[275.71px] p-[2vh] w-[319.58px] hover:shadow-lg " >
                    <span>
                        <img className="mt-4" src={iconFour} />
                    </span>
                    <span className="mt-8 font-semibold text-black text-[20.89px] leading-[27.15px] w-[207px] h-[28px] " >
                        Sales & CRM
                    </span>
                    <span className="mt-5 text-[16.71px] font-normal leading-[27.15px] w-[256.92px] h-[82px] opacity-70 "  >
                        With lots of unique blocks you can easily create a page without coding with Appmax
                    </span>
                </div>
                <div className="flex flex-col h-[275.71px] p-[2vh] w-[319.58px] hover:shadow-lg " >
                    <span>
                        <img className="mt-4" src={iconThree} />
                    </span>
                    <span className="mt-8 font-semibold text-black text-[20.89px] leading-[27.15px] w-[207px] h-[28px] " >
                        SEO optimization
                    </span>
                    <span className="mt-5 text-[16.71px] font-normal leading-[27.15px] w-[256.92px] h-[82px] opacity-70 "  >
                        With lots of unique blocks you can easily create a page without coding with Appmax
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AboutPage