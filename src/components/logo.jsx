import EganLogo from "../assets/img/eganv.png"
const Logo = () =>{
    return(
        <div className="w-[40px] h-[40px] bg-green-500 rounded-[20px] ml-6 mr-1.5 object-cover">
            <img src={EganLogo} alt="Egan's Logo" className="rounded-full"/>
        </div>
    )
}

export default Logo;