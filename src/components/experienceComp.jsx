const ExperienceComp = ({f,s,t}) =>{
    return(
        <div className="border-l-2 border-[#4ADE80] pl-[28px] mt-8 bold">
            <h3 className="text-xl font-semibold text-white">{f}</h3>
            <p className="text-[16px] text-[#4ADE80] mt-2 ">{s}</p>
            <p className=" text-[#999999] mt-3.5 pr-6"> {t} </p>

        </div>
    )
}

export default ExperienceComp;