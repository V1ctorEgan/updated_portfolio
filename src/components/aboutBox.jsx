const AboutBox = ({first, sec}) =>{
    return(
        <div className="w-full h-[86px] md:mr-4 lg:w-[270px] mb-[16px] hover:scale-105 md:mb-0 p-[17px] lg:mt-[7px] lg:h-[138px] cursor-pointer bg-[#222222] lg:gap-[15px]  lg:rounded-3xl rounded-xl flex flex-col justify-center ">
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
            <h2 className="text-green-300 hover:glow">{first}</h2>
            <p className=" text-[#999999] lg:pb-0 ">{sec}</p>
        </div>
    )
}
export default AboutBox;