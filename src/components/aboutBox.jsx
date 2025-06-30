const AboutBox = ({first, sec}) =>{
    return(
        <div className="w-full h-[86px] md:mr-4 lg:w-[270px] mb-[16px] hover:scale-105 md:mb-0 p-[17px] lg:mt-[7px] lg:h-[138px] bg-[#222222] lg:gap-[15px]  lg:rounded-3xl rounded-xl flex flex-col justify-center ">
            <h2 className="text-green-300">{first}</h2>
            <p className=" text-[#999999] lg:pb-0 ">{sec}</p>
        </div>
    )
}
export default AboutBox;