import React, { useEffect, useState } from 'react';

export default function BtnMessage() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      {/* Tailwind-compatible inline animation style */}
      <style>
        {`
          @layer utilities {
            .animate-scale-in-out {
              animation: scaleInOut 0.6s ease-out forwards;
            }

            @keyframes scaleInOut {
              0% { transform: scale(0.8); opacity: 0; }
              50% { transform: scale(1.1); opacity: 1; }
              100% { transform: scale(1); opacity: 1; }
            }
          }
        `}
      </style>

      <button
        className={`w-full h-[48px] rounded-[12px] mt-[30px] bg-gradient-to-r to-[#4ADE80] from-[#22C55E] text-black font-semibold transition-transform ${
          animate ? 'animate-scale-in-out' : ''
        }`}
        onClick={() => {
          setAnimate(false);
          setTimeout(() => setAnimate(true), 10); // restart animation
        }}
      >
        Message
      </button>
    </>
  );
}
