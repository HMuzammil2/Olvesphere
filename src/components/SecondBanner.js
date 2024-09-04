import React from "react";
import background from "../assets/background.png"

function SecondBanner() {
    return (
        <div className="bg-[#f2fcfa] h-[267.36px]  w-[1660px] m-auto flex  "  >
            <div className="flex-1 flex bg-cover bg-center"
                style={{ backgroundImage: `url(${background})` }} >


                <span className="flex-1 flex flex-col self-center ml-[16vh] " >
                    <p className="text-[#00BB98] font-bold text-[63px] " >
                        28k
                    </p>
                    <p className="font-semibold pl-4 text-[16px]  " >
                        Total Users
                    </p>
                </span>
                <span className="flex-1 flex flex-col self-center" >
                    <p className="text-[#00BB98] font-bold text-[63px] " >
                        13K
                    </p>
                    <p className="font-semibold text-[16px] " >
                        Lifetime Downloads
                    </p>
                </span>
                <span className="flex-1 flex flex-col self-center" >
                    <p className="text-[#00BB98] font-bold text-[63px] " >
                        68K
                    </p>
                    <p className="font-semibold text-[16px] pl-5 " >
                        Social Likes
                    </p>
                </span>
                <span className="flex-1 flex flex-col self-center" >
                    <p className="text-[#00BB98] font-bold text-[63px] " >
                        10K
                    </p>
                    <p className="font-semibold text-[16px] pl-4" >
                        5 Star Ratings
                    </p>
                </span>
            </div>
        </div>
    )
}

export default SecondBanner;