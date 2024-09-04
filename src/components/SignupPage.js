import React from 'react';
import logo from "../assets/Logo.png";
import ellipseRight from "../assets/Ellipse 60.png"
import ellipseLeft from "../assets/Ellipse 62.png"
import image from "../assets/Image.png"
import airbnb from "../assets/1.png"
import hubspot from "../assets/2.png"
import google from "../assets/3.png"
import microsoft from "../assets/4.png"
import walmart from "../assets/5.png"
import background from "../assets/background.png"
import yellow from "../assets/Ellipse 61.png"



function SignupPage() {
    return (
        <div className="h-screen bg-[#f2fcfa] w-[1660px] m-auto" >
            <div className=" bg-cover bg-center "
                style={{ backgroundImage: `url(${background})` }} >

                <nav aria-label="Global" className=" pt-[2.4vh] mx-auto flex max-w-7xl items-center justify-between lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img alt="" src={logo} className="h-8 w-auto" />
                        </a>
                    </div>
                    <div className="flex lg:hidden">

                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <a href="#" className="text-[16.71px] w-[56px] h-[26px] font-medium leading-[25.06px] text-black ">

                            Demo
                        </a>
                        <a href="#" className="text-[16.71px] w-[56px] h-[26px] font-medium leading-[25.06px] text-black">
                            Feature
                        </a>
                        <a href="#" className="text-[16.71px] w-[56px] h-[26px] font-medium leading-[25.06px] text-black">
                            Pricing
                        </a>
                        <a href="#" className="text-[16.71px] w-[56px] h-[26px] font-medium leading-[25.06px] text-black">
                            Contact
                        </a>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 items-center lg:justify-end">
                        <a href="#" className="text-[16.71px] w-[47px] leading-[25.06px] font-medium text-black">

                            Log in
                        </a>

                        <button className='bg-[#FD4C5C] mr-[-11vh] ml-[3rem] w-[125.33px] h-[47px] text-white rounded-[3.13px]' >Sign Up</button>
                    </div>
                </nav>
                <div className="flex h-[78vh] flex-row pt-7">
                    <div className="flex flex-1 text-white p-2 mb-2">
                        <div className='flex-[0.18]'>
                            <img src={ellipseLeft} className='mt-[3vh] h-[9vh] ml-[-0.7vh] ' />
                        </div>
                        <div className='flex-1 flex fs-[50.13] flex-col ' >
                            <span className='flex-[0.3] font-bold text-[75.19px] text-black mt-[11vh] w-[64vh] leading-[82.71px] ' >Grow your business faster with Solvesphere</span>
                            <span className='flex-[0.18] mb-6 text-[16.71px] text-black w-[40vh] leading-[25.06px] mt-8 ' >An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at pretium purus pretium</span>
                            <span className=' justify-between flex bg-white w-[62vh] h-[68.93px] w-[549.34px] rounded-[5.22px]' >
                                <input className=' font-normal p-2 focus:outline-none focus:border-none text-black' type='text' placeholder='Enter your email address' />
                                <button className='bg-[#FD4C5C] w-[187.99px] h-[52.22px] text-white rounded-[5.22px] p-2 mt-[7px] mb-[3px] mr-[10px]'  >Get for 5 days trial</button>
                            </span>
                        </div>

                        <div className='flex-[0.19] self-end h-[19vh]' >

                            <img src={ellipseRight} className='ml-[16vh] m-[-4.5vh] mr-[-4vh] h-[8.6vh]' />
                        </div>
                    </div>
                    <div className="flex-[0.9] relative mt-[9vh] p-2">
                        <img src={yellow} className='top-[-3.42vh] left-[64vh] absolute' />
                        <img src={image} className='w-[831.34px] m-[1vh] h-[561.96px]' />
                    </div>
                </div>
                <div className='flex h-[17.3vh] bg-[#2B59FF] '>
                    <span className=' ml-[9.75rem] flex-1 self-center' >
                        <img src={airbnb} />
                    </span>
                    <span className='flex-1 self-center' >
                        <img src={hubspot} />
                    </span>
                    <span className='flex-1 self-center' ><img src={google} /></span>
                    <span className='flex-1 self-center' >
                        <img src={microsoft} />
                    </span>
                    <span className='flex-1 self-center ' >
                        <img src={walmart} />
                    </span>

                </div>
            </div>
        </div>
    );
}

export default SignupPage;