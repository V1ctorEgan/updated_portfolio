const SkillsBox = ({icon, firstText, secondText}) =>{
    return(
        <div className="flex flex-col justify-center p-[21px] items-center lg:w-[250px] lg:h-[210px] bg-[#222222] rounded-[16px] ">
            {icon && <img src={icon} />}
            <p className="text-white"> {firstText }</p>
            <p className="text-center text-[#999999]">{secondText} </p>

        </div>
    )
}

export default SkillsBox;