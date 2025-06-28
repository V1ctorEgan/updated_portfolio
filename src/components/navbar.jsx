import React from "react";
import Logo from "./logo";

const Navbar = () =>{
    return(
        <div className="items-center flex w-full top-0  border bg-[#222222] h-[73px] text-white">
            <Logo />
            <p>Egan Developer</p>
            <div>
                <p>Home</p>
                <p>About</p>
                <p>Skills</p>
                <p>Projects </p>
                <p>Contacts </p>
            </div>
        </div>
    )
}
export default Navbar