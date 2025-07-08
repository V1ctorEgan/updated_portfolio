import React, {useState} from "react";
import Logo from "./logo";
import { Link } from "react-scroll";
import Menu from "../assets/img/menu.png"

const Navbar = () =>{
    const [showNavbar, setShowNavbar] = useState(false)
    const handleClick = () =>{
        setShowNavbar(!showNavbar)

    }
    return(
        <div className="items-center flex w-full top-0  z-10 bg-[#222222] h-[60px] text-white fixed">
            <Logo />
            <p className="hover:scale-110 z-40">Egan Developer</p>
            <div className="md:flex ml-auto md:w-[473px] mr-[41px] justify-evenly hidden">
                <p className="hover:text-green-500 text-[#999999] hover:scale-110 cursor-pointer"><Link to="home" smooth={true} duration={500}>Home</Link></p>
                <p className="hover:text-green-500 text-[#999999] hover:scale-110 cursor-pointer"><Link to="about" smooth={true} duration={500}>About</Link></p>
                <p className="hover:text-green-500 text-[#999999] hover:scale-110 cursor-pointer"><Link to = "skills" smooth={true} duration={500}>Skills</Link></p>
                <p className="hover:text-green-500 text-[#999999] hover:scale-110 cursor-pointer"><Link to="project" smooth={true} duration={500}>Projects</Link> </p>
                <p className="hover:text-green-500 text-[#999999] hover:scale-110 cursor-pointer"><Link to="contact" smooth={true} duration={500}>Contacts</Link> </p>
            </div>
            <div className="md:hidden  ml-auto">
                {!showNavbar && <img src={Menu} alt="menu hamburger" className="w-[24px] h-[24px] hover:scale-110" onClick={handleClick}/>}
                
            </div>
            {showNavbar && 
                    <div className="flex flex-col gap-[50px] z-100 bg-[#333333] h-screen w-[380px] justify-center items-center mt-[400px] md:hidden"> 
                        <p className="hover:text-green-500 text-[#999999] hover:scale-110 cursor-pointer text-2xl "><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></p>
                        <p className="hover:text-green-500 text-[#999999] hover:scale-110 cursor-pointer text-2xl "><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></p>
                        <p className="hover:text-green-500 text-[#999999] hover:scale-110 cursor-pointer text-2xl "><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></p>
                        <p className="hover:text-green-500 text-[#999999] hover:scale-110 cursor-pointer text-2xl "><Link onClick={handleClick} to="project" smooth={true} duration={500}>Projects</Link> </p>
                        <p className="hover:text-green-500 text-[#999999] hover:scale-110 cursor-pointer text-2xl "><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contacts</Link> </p>
 
                    </div>
                }
        </div>
    )
}
export default Navbar