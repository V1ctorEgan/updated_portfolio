import React from "react";
import Logo from "./logo";

const Navbar = () =>{
    return(
        <div className="items-center flex w-full top-0  z-10 bg-[#222222] h-[60px] text-white fixed">
            <Logo />
            <p className="hover:scale-110">Egan Developer</p>
            <div className="md:flex ml-auto w-[473px] mr-[41px] justify-evenly hidden">
                <p className="hover:text-green-500 text-[#999999] hover:scale-110 cursor-pointer">Home</p>
                <p className="hover:text-green-500 text-[#999999] hover:scale-110 cursor-pointer">About</p>
                <p className="hover:text-green-500 text-[#999999] hover:scale-110 cursor-pointer">Skills</p>
                <p className="hover:text-green-500 text-[#999999] hover:scale-110 cursor-pointer">Projects </p>
                <p className="hover:text-green-500 text-[#999999] hover:scale-110 cursor-pointer">Contacts </p>
            </div>
        </div>
    )
}
export default Navbar