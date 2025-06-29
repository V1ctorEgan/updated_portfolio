import SkillsBox from "../components/skillBox";
import phone from "../assets/img/phone.png"
import laptop from "../assets/img/laptop.png"
import database from "../assets/img/database.png"
import gear from "../assets/img/gear.png"

const Technical = () =>{
    return(
        <div className="bg-[#111111] flex pb-[128px] justify-center items-center p-[16px] flex-col pt-[112px]">
            <h2 className=" font-bold text-[48px]  bg-gradient-to-r to-[#4ADE80] from-[#ffffff] gradient-text">Technical Skills</h2>
            <div className="bg-[#222222] pl-[51px] mt-[37px]  pt-[45px] pb-[45px] pr-[51px] lg:w-[577px] lg:h-[106px] w-full lg:rounded-[24px] rounded-[16px] justify-center items-center ">
                <div className=" w-full  bg-gradient-to-r rounded-[10px]  to-[#4ADE80] from-[#ffffff] border h-[16px]"></div>
            </div>
            <div className="lg:flex grid grid-cols-2 gap-3 pt-[97px] lg:justify-evenly w-full">
                <SkillsBox icon= {phone} firstText={'Mobile Development'} secondText={'React Native, Expo, iOS/Android '}/>
                <SkillsBox icon= {laptop} firstText={'Web Development'} secondText={'React.js, Next.js, TypeScript'}/>
                <SkillsBox icon= {gear} firstText={'Backend Development'} secondText={'Node.js, Express.js, APIs '}/>
                <SkillsBox icon= {database} firstText={'Database Management'} secondText={'MongoDB, PostgreSQL, Redis '}/>
            </div>
        </div>
    )
}

export default Technical;