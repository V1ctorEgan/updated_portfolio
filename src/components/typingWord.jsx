import React, { useEffect, useState } from "react";

export default function TypingText() {
  const fullText = "Building innovative solutions with cutting-edge technology";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 100; // milliseconds per character
    const pauseAfterComplete = 2000;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      } else {
        // Wait, then restart
        clearInterval(interval);
        setTimeout(() => {
          setDisplayedText("");
          setIndex(0);
        }, pauseAfterComplete);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="text-green-400 md:text-xl lg:text-2xl text-[14px] whitespace-nowrap select-none">
      {displayedText}
      <span className="inline-block animate-pulse">|</span>

      {/* Optional styling (can also be in global CSS) */}
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .animate-pulse {
            animation: pulse 0.7s infinite;
          }
        `}
      </style>
    </div>
  );
}
