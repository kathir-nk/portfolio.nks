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
        // MOBILE ANIMATION ONLY (below 768px)
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
      className="relative w-full bg-black overflow-hidden select-none antialiased"
      style={{ 
        WebkitFontSmoothing: "antialiased", 
        MozOsxFontSmoothing: "grayscale",
        height: "auto",
        minHeight: "100dvh"
      }}
    >

      {/* ========================================================================= */}
      {/* 💻 DESKTOP (768px and up) - FIXED PIXEL SIZES, NO vw/vh                 */}
      {/* ========================================================================= */}
      {/* 
        Using fixed pixel breakpoints instead of vw/vh to avoid Windows scaling issues.
        Windows laptops often use 125% display scaling which breaks viewport units.
        Fixed pixels + responsive breakpoints = consistent across all screens.
      */}
      <div className="hidden md:block w-full relative" style={{ height: "100dvh", minHeight: "600px" }}>

{/* Top Left Text */}
<div 
  className="absolute text-white leading-[0.9] text-right"
  style={{ 
    top: "clamp(80px, 15vh, 140px)", 
    left: "clamp(16px, 3vw, 48px)",
    zIndex: 20 
  }}
>
  <h3 className="font-medium" style={{ fontSize: "clamp(18px, 1.8vw, 28px)" }}>UI/UX & Visual</h3>
  <h3 className="font-medium" style={{ fontSize: "clamp(16px, 1.7vw, 26px)" }}>Storytelling Designer</h3>
</div>

{/* CINEMATIC */}
<h1
  className="absolute left-1/2 -translate-x-1/2 text-white uppercase whitespace-nowrap font-normal tracking-[0.01em] leading-[0.8]"
  style={{ 
    top: "clamp(100px, 18vh, 180px)",
    fontSize: "clamp(80px, 12vw, 200px)", 
    fontFamily: "Anton, sans-serif" 
  }}
>
  CINEMATIC
</h1>

{/* KINETIC */}
<h1
  className="absolute left-1/2 -translate-x-1/2 text-white uppercase whitespace-nowrap font-normal tracking-[-0.02em] leading-none"
  style={{ 
    top: "clamp(210px, 38vh, 360px)", /* Slight tweak for tighter connection */
    fontSize: "clamp(80px, 12vw, 200px)", 
    fontFamily: "Anton, sans-serif" 
  }}
>
  KINETIC
</h1>

{/* Top Right Text */}
<div 
  className="absolute text-white leading-[0.9]"
  style={{ 
    top: "clamp(220px, 40vh, 380px)", 
    right: "clamp(16px, 3vw, 48px)",
    zIndex: 20 
  }}
>
  <h3 className="font-medium" style={{ fontSize: "clamp(18px, 1.9vw, 30px)" }}>Creative</h3>
  <h3 className="font-medium" style={{ fontSize: "clamp(18px, 1.9vw, 30px)" }}>Direction</h3>
</div>

{/* TYPOGRAPHY DESIGN (FIXED: Uses predictable top clamp sequencing to close the gap) */}
<h1
  className="absolute left-1/2 -translate-x-1/2 text-white uppercase whitespace-nowrap font-normal tracking-[-0.02em] leading-[1.2]"
  style={{ 
    top: "clamp(340px, 58vh, 560px)", /* Fixed from bottom to sequential top flow */
    fontSize: "clamp(60px, 10vw, 160px)", 
    fontFamily: "Anton, sans-serif" 
  }}
>
  TYPOGRAPHY DESIGN
</h1>
</div>

      {/* ========================================================================= */}
      {/* 📱 MOBILE (below 768px) - CLEAN STATIC LAYOUT                           */}
      {/* ========================================================================= */}
      <div
        ref={mobileTextRef}
        className="flex md:hidden flex-col items-center w-full px-4 py-12 text-center"
        style={{ minHeight: "85dvh" }}
      >

        {/* Top Label */}
        <div className="text-white leading-[1.2] w-full max-w-[280px] mb-8">
          <h3 className="font-bold uppercase tracking-[0.2em] text-[11px] text-gray-400">
            UI/UX & Visual Storytelling Designer
          </h3>
        </div>

        {/* Main Typography Stack */}
        <div className="flex flex-col items-center w-full leading-[0.82] gap-6 my-auto">

          <h1 
            className="animate-line text-white uppercase text-center"
            style={{ fontSize: "clamp(48px, 18vw, 120px)", fontFamily: "Anton, sans-serif" }}
          >
            CINEMATIC
          </h1>

          <h1 
            className="animate-line text-white uppercase text-center"
            style={{ fontSize: "clamp(48px, 18vw, 120px)", fontFamily: "Anton, sans-serif" }}
          >
            KINETIC
          </h1>

          <h1 
            className="animate-line text-white uppercase text-center"
            style={{ fontSize: "clamp(48px, 18vw, 120px)", fontFamily: "Anton, sans-serif" }}
          >
            TYPOGRAPHY
          </h1>

          <h1 
            className="animate-line text-white uppercase text-center"
            style={{ fontSize: "clamp(48px, 18vw, 120px)", fontFamily: "Anton, sans-serif" }}
          >
            DESIGN
          </h1>

        </div>

        {/* Bottom Label */}
        <div className="text-white leading-[1.2] w-full max-w-[280px] mt-8">
          <h3 className="font-bold uppercase tracking-[0.15em] text-[11px] text-gray-400">
            Creative Direction
          </h3>
        </div>

      </div>

    </section>
  );
};

export default HeroTypography;