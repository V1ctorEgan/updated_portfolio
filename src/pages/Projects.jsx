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
            {/* <div className="hidden md:flex lg:hidden text-white p-[24px] w-full">
                <div className="w-full bg-[#222222] h-[582px] p-[32px] rounded-[16px]">
                    <div className="w-full flex items-center justify-start gap-2">
                        <p className="bg-[#4ADE80] w-[12px] h-[12px] rounded-[6px]"></p>
                        <p className="text-[#999999]">Featured Project</p>
                    </div>
                    <p className="text-white font-bold text-[24px] mt-[16px] mb-[16px]">Social Media Dashboard</p>
                    <p className="text-[#999999] mb-[27px]" >Analytics dashboard for social media management with real-time data visualization</p>
                    <p className="text-[#999999] mb-[25px] text-[14px]" ><span className="text-[#4ADE80] text-[14px] font-semibold">Technologies:</span> React native, Redux</p>
                    <div className="flex w-[270px] gap-[16px]">
                        <div className="text-center flex items-center justify-center font-semibold hover:scale-110 hover:border-[2px] w-full h-[52px] rounded-[12px] bg-gradient-to-l to-[#4ADE80] from-[#22C55E] text-black ">View Live</div>
                        <div className="text-center flex items-center justify-center font-semibold hover:scale-110 hover:border-[2px] border border-[#999999]  w-full h-[52px] rounded-[12px]">View Code</div>
                    </div>
                    <div className="w-full h-[256px] bg-[#333333] flex mt-[32px] justify-center items-center rounded-[12px]">
                        <p className="text-center  text-green-100 text-[72px] ">Dashboard</p>
                    </div>
                </div>
            </div> */}


                            {/* Mobile View */}
                            <MobileCarousel />
            {/* <div className="md:hidden text-white w-full p-[16px]">
                <div className="h-[558px] w-full bg-[#222222] rounded-[16px] p-[25px]">
                    <div className="w-full flex items-center justify-start gap-2">
                        <p className="bg-[#4ADE80] w-[12px] h-[12px] rounded-[6px]"></p>
                        <p className="text-[#999999]">Featured Project</p>
                    </div>
                    <p className="text-white font-bold text-[20px] mt-[16px] mb-[16px]">Social Media Dashboard</p>
                    <div className="flex justify-center items-center bg-green-400 rounded-[8px] w-full h-[192px]">
                        <p className="text-[48px] text-black font-bold">Dashboard</p>
                    </div>
                    <p className="text-[#999999] mb-[16px] mt-[18px] text-[14px]" >Analytics dashboard for social media management with real-time data visualization</p>
                    <p className="text-[#999999] mb-[26px] text-[14px] " ><span className="text-[#4ADE80] text-[14px] font-semibold">Technologies:</span> React native, Redux</p>
                    <div className="text-center flex items-center justify-center font-semibold hover:scale-110 hover:border-[2px] mb-[12px] w-full h-[52px] rounded-[12px] bg-gradient-to-l to-[#4ADE80] from-[#22C55E] text-black ">View Live</div>
                    <div className="text-center flex items-center justify-center font-semibold hover:scale-110 hover:border-[2px] border border-[#999999]  w-full h-[52px] rounded-[12px]">View Code</div>


                </div>
                

            </div> */}



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