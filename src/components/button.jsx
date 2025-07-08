const BtnG = () =>{
    return(
        <div className="hover:scale-110 font-semibold hover:border-4 rounded-[12px] lg:w-[219px] md:w-[173px] w-full h-[64px] bg-gradient-to-r from-[#4ADE80] to-[#22C55E]  flex justify-center items-center md:mt-[74px]">
                View My Work
        </div>
    )
} 

const BtnT = () => {
    return(
        <div className="hover:scale-110 font-semibold hover:border-4 rounded-[12px] lg:w-[219px] md:w-[173px] w-full h-[64px] bg-linear-to-r text-white border-2  border-[#333333] flex justify-center items-center md:mt-[74px]">
                Get In Touch
        </div>
    )

}
export {BtnG, BtnT};