// ServiceShowcase.jsx

import { useState } from "react";

const services = [
  "UI/UX DESIGN",
  "GRAPHIC DESIGN",
  "BRANDING",
  "CONTENT EDITING",
  "VISUAL DESIGN",
];

export default function ServiceShowcase() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="w-full overflow-hidden bg-black">

  {/* ================================================================================= */}
  {/* 💻 DESKTOP VIEW */}
  {/* ================================================================================= */}
  <div className="hidden md:flex relative w-full h-screen bg-[#1f1f1f] flex-col justify-center">

    {services.map((item, index) => (
      <div
        key={index}
        onMouseEnter={() => setActiveIndex(index)}
        className={`relative w-full flex items-center justify-center transition-all duration-500 ease-in-out cursor-pointer
        
        ${
          activeIndex === index
            ? "h-[170px] bg-[#4a4a4a]"
            : "h-[150px]"
        }
        `}
      >

        {/* BLUE LINE */}
        {activeIndex === index && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[62%] h-[3px] bg-white" />
        )}

        {/* TEXT */}
        <h1
          className={`uppercase font-extrabold tracking-tight text-center leading-none transition-all duration-500
          
          ${
            activeIndex === index
              ? "text-white opacity-100 scale-100"
              : "text-[#3a3a3a] opacity-70 scale-95"
          }

          text-[42px]
          sm:text-[58px]
          md:text-[80px]
          lg:text-[120px]
          xl:text-[150px]
          `}
          style={{
            fontFamily: "Impact, sans-serif",
          }}
        >
          {item}
        </h1>
      </div>
    ))}
  </div>

  {/* ================================================================================= */}
  {/* 📱 MOBILE VIEW */}
  {/* ================================================================================= */}
  <div className="flex md:hidden relative w-full bg-[#1f1f1f] flex-col py-2">

    {services.map((item, index) => (
      <div
        key={index}
        onClick={() => setActiveIndex(index)}
        className={`relative w-full flex items-center justify-center cursor-pointer
        
        ${
          activeIndex === index
            ? "h-[62px] bg-[#4a4a4a]"
            : "h-[62px]"
        }
        `}
      >

        {/* WHITE LINE */}
        {activeIndex === index && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[82%] h-[2px] bg-white" />
        )}

        {/* TEXT */}
        <h1
          className={`uppercase font-extrabold tracking-tight text-center leading-none
          
          ${
            activeIndex === index
              ? "text-white"
              : "text-[#3a3a3a]"
          }

          text-[24px]
          sm:text-[28px]
          `}
          style={{
            fontFamily: "Impact, sans-serif",
          }}
        >
          {item}
        </h1>
      </div>
    ))}
  </div>
</section>
  );
}