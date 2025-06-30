const BrownBox = ({first, sec}) =>{
    return(
        <div className="w-[395px] hover:scale-110 hover:shadow-md md:w-[228px] h-[118px] md:h-[158px] bg-[#222222] gap-5  rounded-3xl flex flex-col justify-center items-center">
            <p className="bold lg:text-5xl text-[30px] text-[#4ADE80]">{first}</p>
            <p className="text-[#999999] md:text-[18px] text-[16px] ">{sec}</p>
        </div>
    )
}

export default BrownBox;