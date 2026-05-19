import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroTypography = () => {
  const mobileTextRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx;

    const runAnimation = () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());

      ctx = gsap.context(() => {
        // =========================================================================
        // WINDOW SCALING COMPENSATOR (Fixes Windows/Dell/Samsung Layout Shifts)
        // =========================================================================
        if (window.innerWidth > 768) {
          // Automatic correction factor based on display aspect ratio vs scaling
          const vhCompensation = Math.min(window.innerHeight / 900, 1);
          
          // Force subpixel rendering optimization on text elements
          const textElements = containerRef.current?.querySelectorAll("h1, h3");
          if (textElements) {
            gsap.set(textElements, { 
              force3D: true, 
              rotation: 0.01,
              transformOrigin: "center center"
            });
          }
        }

        // =========================================================================
        // MOBILE ANIMATION
        // =========================================================================
        if (window.innerWidth <= 768) {
          const targetLines = mobileTextRef.current?.querySelectorAll(".animate-line");
          if (!targetLines) return;

          gsap.fromTo(
            targetLines,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.25,
              ease: "power3.out",
              scrollTrigger: {
                trigger: mobileTextRef.current,
                start: "top 75%",
                toggleActions: "play none none none",
                invalidateOnRefresh: true,
              },
            }
          );
        }
      }, containerRef);
    };

    runAnimation();

    // Debounced listener to prevent layout breaking during continuous resize triggers
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(runAnimation, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full md:h-screen h-auto bg-black overflow-hidden py-16 md:py-0 select-none antialiased"
      style={{ WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }}
    >

      {/* ========================================================================= */}
      {/* 💻 DESKTOP (DESIGN AND SIZES TOUCH-FREE) */}
      {/* ========================================================================= */}
      <div className="hidden md:block w-full h-full relative">

        <div className="absolute top-[18%] left-[4%] z-20 text-white leading-[0.9] text-right will-change-transform">
          <h3 className="font-medium text-[2.1vw]">UI/UX & Visual</h3>
          <h3 className="font-medium text-[2.0vw]">Storytelling Designer</h3>
        </div>

        <h1
          className="absolute top-[19%] left-1/2 -translate-x-1/2 text-white uppercase whitespace-nowrap font-normal tracking-[0.01em] leading-[0.8] will-change-transform"
          style={{ fontSize: "13vw", fontFamily: "Anton, sans-serif" }}
        >
          CINEMATIC
        </h1>

        <h1
          className="absolute top-[39%] left-1/2 -translate-x-1/2 text-white uppercase whitespace-nowrap font-normal tracking-[-0.02em] leading-none will-change-transform"
          style={{ fontSize: "13vw", fontFamily: "Anton, sans-serif" }}
        >
          KINETIC
        </h1>

        <div className="absolute top-[42%] right-[22%] z-20 text-white leading-[0.9] will-change-transform">
          <h3 className="font-medium text-[2.3vw]">Creative</h3>
          <h3 className="font-medium text-[2.3vw]">Direction</h3>
        </div>

        <h1
          className="absolute bottom-[15%] left-1/2 -translate-x-1/2 text-white uppercase whitespace-nowrap font-normal tracking-[-0.02em] leading-none will-change-transform"
          style={{ fontSize: "13vw", fontFamily: "Anton, sans-serif" }}
        >
          TYPOGRAPHY DESIGN
        </h1>
      </div>

      {/* ========================================================================= */}
      {/* 📱 MOBILE (UNCHANGED DESIGN) */}
      {/* ========================================================================= */}
      <div
        ref={mobileTextRef}
        className="flex md:hidden flex-col items-center justify-between w-full min-h-[85vh] px-4 py-8 text-center"
      >

        <div className="text-white leading-[1.2] w-full max-w-[280px]">
          <h3 className="font-bold uppercase tracking-[0.2em] text-[11px] text-gray-400">
            UI/UX & Visual Storytelling Designer
          </h3>
        </div>

        <div className="flex flex-col items-center w-full leading-[0.82] gap-8 my-auto">

          <h1 className="animate-line text-white uppercase text-center"
            style={{ fontSize: "19vw", fontFamily: "Anton, sans-serif" }}>
            CINEMATIC
          </h1>

          <h1 className="animate-line text-white uppercase text-center mt-[1.5vh]"
            style={{ fontSize: "19vw", fontFamily: "Anton, sans-serif" }}>
            KINETIC
          </h1>

          <h1 className="animate-line text-white uppercase text-center mt-[1.5vh]"
            style={{ fontSize: "19vw", fontFamily: "Anton, sans-serif" }}>
            TYPOGRAPHY
          </h1>

          <h1 className="animate-line text-white uppercase text-center mt-[1.5vh]"
            style={{ fontSize: "19vw", fontFamily: "Anton, sans-serif" }}>
            DESIGN
          </h1>

        </div>

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