import BtnMessage from "../components/btnMessage";
import Email from "../assets/img/message.png"
import Phone from "../assets/img/phone-symbol.png"
import ContactForm from "../components/form/contactForm";

const GetInTouch = () =>{
     <style>
        {`
          @keyframes glow {
            0% {
              box-shadow: 0 0 2px #4ade80, 0 0 5px #4ade80, 0 0 10px #22c55e;
            }
            50% {
              box-shadow: 0 0 5px #4ade80, 0 0 15px #22c55e, 0 0 20px #22c55e;
            }
            100% {
              box-shadow: 0 0 2px #4ade80, 0 0 5px #4ade80, 0 0 10px #22c55e;
            }
          }

          .glow {
            animation: glow 2s ease-in-out infinite;
          }
        `}
      </style>
    return(
        <div name="contact" className="bg-[#111111] pt-[121px] pl-[32px] pr-[32px] pb-[126px]">
                 <style>
        {`
          @keyframes glow {
            0% {
              box-shadow: 0 0 5px #4ade80, 0 0 10px #4ade80, 0 0 20px #22c55e;
            }
            50% {
              box-shadow: 0 0 15px #4ade80, 0 0 30px #22c55e, 0 0 40px #22c55e;
            }
            100% {
              box-shadow: 0 0 5px #4ade80, 0 0 10px #4ade80, 0 0 20px #22c55e;
            }
          }

          .glow {
            animation: glow 2s ease-in-out infinite;
          }
        `}
      </style>
            <h3 className=" w-full text-center font-bold lg:text-[48px] text-[30px] md:text-[36px]  bg-gradient-to-r to-[#4ADE80] from-[#ffffff] gradient-text mb-[70px] ">Get In Touch</h3>
            <p className="font-bold lg:text-[30px] md:text-[24px] text-[20px] text-white mb-[36px]">Let's Work Together</p>
            <p className="lg:text-[20px] md:text-[18px] text-[16px] text-[#999999] lg:w-[555px] w-full">I'm always interested in new opportunities and exciting projects. Whether you need a mobile app, web application, ui/ux  or backend system, I'd love to hear about your project.</p>
            <div className="flex lg:gap-[24px] gap-[16px]  mt-[44px]">
                <p className="w-[64px] h-[64px] bg-gradient-to-r from-[#4ADE80] to-[#22C55E] rounded-[32px] flex glow justify-center items-center">
                    <img src={Phone} alt="phone icon"/>
                </p>
                <div className="justify-center flex flex-col ">
                    <p className="text-white text-[20px] text-[16px] font-semibold">Email</p>
                    <p className="text-[#999999] text-[18px] text-[14px] ">egan@developer.com</p>
                </div>
            </div>
            <div className="flex gap-[24px] mt-[37px]">
                <p className="w-[64px] h-[64px] bg-gradient-to-r from-[#4ADE80] flex to-[#22C55E] rounded-[32px] justify-center items-center glow"><img src={Email} alt='email icon' /></p>
                <div className="justify-center flex flex-col ">
                    <p className="text-white text-[20px] font-semibold">Phone</p>
                    <p className="text-[#999999] text-[18px] ">+234 816 287 8498 </p>
                </div>
            </div>
            <div className="w-full mt-[48px] ">
              <ContactForm />
                {/* <form className="bg-[#222222] w-full h-[572px] rounded-[16px] p-[33px]">
                    <div className="flex gap-[16px] mb-[24px]">
                        <div className="w-full">
                            <p className="text-white text-[14px]">Name</p>
                            <input className="bg-[#333333] mt-[8px] w-full rounded-[12px] h-[50px] pl-[16px] text-black text-[16px] " placeholder="Your name" />
                        </div>
                        <div className="w-full">
                            <p className="text-white text-[14px]">Email</p>
                            <input className="bg-[#333333] mt-[8px] w-full rounded-[12px] h-[50px] pl-[16px] text-black text-[16px] " placeholder="your@email.com"/>
                        </div>
                    </div>
                    <div className="w-full">
                        <p className="text-white">Subject</p>
                        <input className="w-full h-[50px] rounded-[12px] bg-[#333333] mt-[8px] text-black text-[16px] pl-[16px] " placeholder="Project inquiry" />
                    </div>
                    <div className="w-full mt-[24px]">
                        <p className="text-white animate-pop">Message</p>
                        <textarea className="w-full h-[180px] rounded-[12px] bg-[#333333] mt-[8px] text-black text-[16px] pl-[16px] h-[146px]" />
                    </div>
                    <button className="w-full h-[48px] rounded-[12px] mt-[30px] bg-gradient-to-r to-[#4ADE80] from-[#22C55E] text-black font-semibold hover:scale-105 glow"> Send Message</button>
                    

                </form> */}
            </div>
            
        </div>
    )
}

export default GetInTouch;