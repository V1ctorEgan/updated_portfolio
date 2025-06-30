import React from "react";
import {BtnG, BtnT} from "../components/button";
import LargeLogo from "../components/largeLogo";
import BrownBox from "../components/brownBox";

const Home = () =>{
    return(
        <div className=" bg-[#111111] flex flex-col  w-full items-center  ">
            <LargeLogo />
            <h1 className="text-green-300 lg:text-[72px] hover:shadow-md md:text-[48px] text-[30px] mb-[56px] bg-gradient-to-l font-bold from-[#4ADE80] to-[#ffffff] gradient-text ">Full stack Developer</h1>
            <p className="text-green-400 md:text-xl lg:text-2xl text-[14px] ">Building innovative solutions with cutting-edge technology|</p>
            <div className="flex md:justify-center gap-1 md:gap-[23px] flex-col md:flex-row mt-[46px] md:mt-0">
                <BtnG />
                <BtnT />
            </div>
            <div className="flex flex-col md:flex-row mt-20 md:justify-evenly md:w-[779px] gap-[24px] md:gap-0">
                <BrownBox first={'4+'} sec={'Years Experience'} />
                <BrownBox first={'100%'} sec={'Clients Satisfaction'} />
                <BrownBox first={'100%'} sec={'Success Rate'} />
            </div>

        </div>
    )
}

export default Home;