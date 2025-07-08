import MiddleCarousel from "../components/middleCarousel"
import FeaturedProjectsCarousel from "../components/projectCarousel"
import MobileCarousel from "../components/mobileCarousel"
const Projects = () =>{
    return(
        <div name="project" className="w-full bg-[#0F0F0F] justify-center items-center p-[32px] ">
            <h3 className="bg-gradient-to-r to-[#4ADE80] font-bold pt-[122px] from-[#ffffff] gradient-text text-[48px] w-full text-center">Featured Projects</h3>
                          
                            {/* desktop view */}
                            <FeaturedProjectsCarousel />
            
                        {/* middle view */}
                        <div>
                        <MiddleCarousel />
                        </div>
            


                            {/* Mobile View */}
                            <MobileCarousel />
            



            <div className=" w-full justify-center gap-[64px] mt-[47px] items-center hidden lg:flex">
                {/* <div className="bg-[#222222]  rounded-[28px] w-[56px] h-[56px]"></div>
                <div className="bg-[#222222]  rounded-[28px] w-[56px] h-[56px]"></div> */}
            </div>
            <div className="lg:flex lg:gap-[32px] ">
                <div className="w-full h-[405px] text-white pt-[32px] bg-[#222222] rounded-[24px] p-[16px] overflow-y-scroll scrollbar-hide  mb-[24px] lg:mb-0">
                    <h3 className="text-[24px] font-bold pb-[20px] ">Projects</h3>
                    <p className="w-full text-[18px] pt-[30px]  border-b-[0.2px] pb-[12px] border-[#333333] flex justify-between"> <span>Social media Automation</span> <span className="text-green-300">React Native</span></p>
                    <p className="w-full text-[18px] pt-[30px]  border-b-[0.2px] pb-[12px] border-[#333333] flex justify-between"> <span>IoT application</span> <span className="text-green-300">React Native</span></p>
                    <p className="w-full text-[18px] pt-[30px]  border-b-[0.2px] pb-[12px] border-[#333333] flex justify-between"> <span>Real-time communication</span> <span className="text-green-300">React.js</span></p>
                    <p className="w-full text-[18px] pt-[30px]  border-b-[0.2px] pb-[12px] border-[#333333] flex justify-between"> <span>Vulue</span> <span className="text-green-300">React.js</span></p>
                    <p className="w-full text-[18px] pt-[30px]  border-b-[0.2px] pb-[12px] border-[#333333] flex justify-between"> <span>Expertdex</span> <span className="text-green-300">Full stack</span></p>
                    

                </div>
                <div className="w-full h-[405px] text-white bg-[#222222] rounded-[24px] p-[32px] mb-[24px] lg:mb-0">
                    <h3 className="text-[24px] font-bold pb-[20px]  ">Client Testimonials</h3>

                </div>
                <div className="w-full h-[405px] text-white bg-[#222222] rounded-[24px] p-[32px] ">
                    <h3 className="text-[24px] font-bold pb-[20px] ">GitHub Stats</h3>
                    <p className="w-full text-[18px] pt-[12px] pb-[12px] flex justify-between hover:shadow-lg rounded-[5px] "> <span className="hover:text-white text-[#999999]">Public Repos </span> <span className="text-white font-bold">38</span></p>
                    <p className="w-full text-[18px] pt-[12px] pb-[12px] flex justify-between hover:shadow-lg rounded-[5px] "> <span className="hover:text-white text-[#999999]">Total Stars</span> <span className="text-white font-bold">1,278</span></p>
                    <p className="w-full text-[18px] pt-[12px] pb-[12px] flex justify-between hover:shadow-lg rounded-[5px] "> <span className="hover:text-white text-[#999999]">Followers</span> <span className="text-white font-bold">978</span></p>
                    <p className="w-full text-[18px] pt-[12px] pb-[12px] flex justify-between hover:shadow-lg rounded-[5px] "> <span className="hover:text-white text-[#999999]">Contributions</span> <span className="text-white font-bold">2,156</span></p>
                    <div className="w-full flex justify-center items-center">
                        <button className="bg-[#333333] lg:w-[310px] lg:h-[60px] h-[48px] w-full  rounded-[12px] mt-[20px] hover:border-2 hover:scale-110">View GitHub Profile</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects;