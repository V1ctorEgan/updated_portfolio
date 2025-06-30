const SkillsBox = ({icon, firstText, secondText}) =>{
    return(
        <div className="flex flex-col justify-center hover:scale-110 p-[21px] gap-[15px] items-center lg:w-[250px] lg:h-[210px] bg-[#222222] rounded-[16px] ">
            {icon && <img src={icon} />}
            <p className="text-white hover:scale-110"> {firstText }</p>
            <p className="text-center text-[#999999] hover:scale-110">{secondText} </p>

        </div>
    )
}

export default SkillsBox;