import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroTypography = () => {
  const mobileTextRef = useRef(null);

  useEffect(() => {
    // Mobile-க்கான Stagger Entrance Animation மட்டும் தனியா
    if (window.innerWidth <= 768) {
      const targetLines = mobileTextRef.current.querySelectorAll(".animate-line");
      
      gsap.fromTo(
        targetLines,
        { 
          y: 60, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.25, // ஒன்னுக்கு பின்னாடி இன்னொன்னு அனிமேட் ஆகி வர டைமிங் da
          ease: "power3.out",
          scrollTrigger: {
            trigger: mobileTextRef.current,
            start: "top 75%", // செக்ஷன் ஸ்கிரீனுக்குள்ள வந்த உடனே ட்ரிகர் ஆயிடும்
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, []);

  return (
    <section className="relative w-full md:h-screen h-auto bg-black overflow-hidden py-16 md:py-0">

      {/* ========================================================================= */}
      {/* 💻 1. DESKTOP VIEW LAYOUT (Completely Untouched - Exactly as your code)    */}
      {/* ========================================================================= */}
      <div className="hidden md:block w-full h-full relative">

        {/* TOP LEFT */}
        <div className="absolute top-[18%] left-[4%] z-20 text-white leading-[0.9] text-right">
          <h3 className="font-medium text-[2.1vw]">
            UI/UX & Visual
          </h3>
          <h3 className="font-medium text-[2.0vw]">
            Storytelling Designer
          </h3>
        </div>

        {/* CINEMATIC */}
        <h1
          className="absolute top-[19%] left-1/2 -translate-x-1/2 text-white uppercase whitespace-nowrap font-normal tracking-[0.01em] leading-[0.8]"
          style={{ fontSize: "13vw", fontFamily: "Anton, sans-serif" }}
        >
          CINEMATIC
        </h1>

        {/* KINETIC */}
        <h1
          className="absolute top-[39%] left-1/2 -translate-x-1/2 text-white uppercase whitespace-nowrap font-normal tracking-[-0.02em] leading-none"
          style={{ fontSize: "13vw", fontFamily: "Anton, sans-serif" }}
        >
          KINETIC
        </h1>

        {/* RIGHT TEXT */}
        <div className="absolute top-[42%] right-[22%] z-20 text-white leading-[0.9]">
          <h3 className="font-medium text-[2.3vw]">
            Creative
          </h3>
          <h3 className="font-medium text-[2.3vw]">
            Direction
          </h3>
        </div>

        {/* TYPOGRAPHY DESIGN */}
        <h1
          className="absolute bottom-[15%] left-1/2 -translate-x-1/2 text-white uppercase whitespace-nowrap font-normal tracking-[-0.02em] leading-none"
          style={{ fontSize: "13vw", fontFamily: "Anton, sans-serif" }}
        >
          TYPOGRAPHY DESIGN
        </h1>
      </div>

      {/* ========================================================================= */}
      {/* 📱 2. MOBILE VIEW LAYOUT (Screenshot Alignment & Stagger Animation)     */}
      {/* ========================================================================= */}
      <div 
        ref={mobileTextRef} 
        className="flex md:hidden flex-col items-center justify-between w-full min-h-[85vh] px-4 py-8 text-center"
      >
        
        {/* TOP SUBTITLE (PURPOSEFUL DESIGN Maari) */}
        <div className="text-white leading-[1.2] w-full max-w-[280px] ">
          <h3 className="font-bold uppercase tracking-[0.2em] text-[11px] text-gray-400">
            UI/UX & Visual Storytelling Designer
          </h3>
        </div>

        {/* 🛠️ SCREENSHOT MAARI 4-LINE BOLD TEXT ALIGNMENT */}
        <div className="flex flex-col items-center w-full leading-[0.82] gap-8 tracking-normel my-auto">
          
          <h1
            className="animate-line text-white uppercase whitespace-nowrap font-normal text-center"
            style={{ fontSize: "19vw", fontFamily: "Anton, sans-serif" }}
          >
            CINEMATIC
          </h1>

          <h1
            className="animate-line text-white uppercase whitespace-nowrap font-normal text-center mt-[1.5vh]"
            style={{ fontSize: "19vw", fontFamily: "Anton, sans-serif" }}
          >
            KINETIC
          </h1>

          <h1
            className="animate-line text-white uppercase whitespace-nowrap font-normal text-center mt-[1.5vh]"
            style={{ fontSize: "19vw", fontFamily: "Anton, sans-serif" }}
          >
            TYPOGRAPHY
          </h1>

          <h1
            className="animate-line text-white uppercase whitespace-nowrap font-normal text-center mt-[1.5vh]"
            style={{ fontSize: "19vw", fontFamily: "Anton, sans-serif" }}
          >
            DESIGN
          </h1>

        </div>

        {/* BOTTOM SUBTITLE (NARRATIVE THROUGH ANIMATION Maari) */}
        <div className="text-white leading-[1.2] w-full max-w-[280px] mt-4">
          <h3 className="font-bold uppercase tracking-[0.15em] text-[11px] text-gray-400">
            Creative Direction
          </h3>
        </div>

      </div>

    </section>
  );
};

export default HeroTypography;