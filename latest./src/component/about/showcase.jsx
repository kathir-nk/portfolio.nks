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
      {/* 💻 DESKTOP VIEW (FIXED RESPONSIVE ALIGNMENT) */}
      {/* ================================================================================= */}
      <div className="hidden md:flex relative w-full min-h-screen bg-[#1f1f1f]  flex-col justify-center">

        {services.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            className={`relative w-full flex items-center justify-center cursor-pointer transition-all duration-500 ease-in-out

              ${
                activeIndex === index
                  ? "bg-[#4a4a4a] flex-[1.0]"
                  : "flex-[1]"
              }
            `}
            style={{
              minHeight: "90px",
            }}
          >

            {/* ACTIVE LINE */}
            {activeIndex === index && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[65%] h-[3px] bg-white" />
            )}

            {/* TEXT */}
            <h1
              className={`uppercase font-extrabold tracking-tight text-center leading-none transition-all duration-500

                ${
                  activeIndex === index
                    ? "text-white opacity-100 scale-100"
                    : "text-[#3a3a3a] opacity-70 scale-95"
                }

                text-[clamp(32px,5vw,110px)]
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
      {/* 📱 MOBILE VIEW (UNCHANGED LOGIC) */}
      {/* ================================================================================= */}
      <div className="flex md:hidden relative w-full bg-[#1f1f1f] flex-col py-2">

        {services.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative w-full flex items-center justify-center cursor-pointer transition-all duration-300

              ${
                activeIndex === index
                  ? "h-[62px] bg-[#4a4a4a]"
                  : "h-[62px]"
              }
            `}
          >

            {activeIndex === index && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[82%] h-[2px] bg-white" />
            )}

            <h1
              className={`uppercase font-extrabold tracking-tight text-center leading-none

                ${
                  activeIndex === index
                    ? "text-white"
                    : "text-[#3a3a3a]"
                }

                text-[24px] sm:text-[28px]
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