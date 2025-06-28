const AboutBox = ({first, sec}) =>{
    return(
        <div className="w-[427px] md:w-[474px] h-[86px] md:h-[86px] lg:w-[270px] lg:h-[138px] bg-[#222222] gap-5  rounded-3xl flex flex-col justify-center items-center">
            <h2 className="text-green-300">{first}</h2>
            <p className=" text-[#999999]">{sec}</p>
        </div>
    )
}
export default AboutBox;