import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroTypography = () => {
  const mobileTextRef = useRef(null);
  const containerRef = useRef(null);
  const desktopRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

  // 🔥 BULLETPROOF: Use ResizeObserver to get ACTUAL rendered size
  // This fixes Windows 125% scaling because it measures the DOM, not viewport units
  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }
    });

    if (desktopRef.current) {
      observer.observe(desktopRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Calculate positions based on ACTUAL container size (not vw/vh)
  const getPositions = () => {
    const { width, height } = dimensions;

    // Scale factor based on actual width (like vw but accurate)
    const scale = width / 1920;

    return {
      // Top left text
      topLeftTop: Math.max(80, height * 0.15),
      topLeftLeft: Math.max(16, width * 0.03),
      topLeftSize: Math.min(28, Math.max(16, width * 0.018)),

      // CINEMATIC
      cinematicTop: Math.max(100, height * 0.18),
      cinematicSize: Math.min(200, Math.max(60, width * 0.12)),

      // KINETIC (tight below CINEMATIC)
      kineticTop: Math.max(100, height * 0.18) + (Math.min(200, Math.max(60, width * 0.12)) * 0.75),
      kineticSize: Math.min(200, Math.max(60, width * 0.12)),

      // Top right text
      topRightTop: Math.max(100, height * 0.18) + (Math.min(200, Math.max(60, width * 0.12)) * 0.75) + 20,
      topRightRight: Math.max(16, width * 0.03),
      topRightSize: Math.min(30, Math.max(16, width * 0.019)),

      // TYPOGRAPHY DESIGN (with proper gap below KINETIC)
      typographyTop: Math.max(100, height * 0.18) + (Math.min(200, Math.max(60, width * 0.12)) * 0.75) + (Math.min(200, Math.max(60, width * 0.12)) * 0.85) + 40,
      typographySize: Math.min(160, Math.max(50, width * 0.10)),
    };
  };

  const pos = getPositions();

  useEffect(() => {
    let ctx;

    const runAnimation = () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());

      ctx = gsap.context(() => {
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
      {/* 💻 DESKTOP - ABSOLUTE POSITIONING with JS-calculated pixels              */}
      {/* ========================================================================= */}
      {/* 
        Using ResizeObserver to get ACTUAL rendered container size.
        This bypasses Windows 125% scaling issues because we measure the DOM
        after the browser applies scaling, not viewport units.
      */}
      <div 
        ref={desktopRef}
        className="hidden md:block w-full relative" 
        style={{ height: "100dvh", minHeight: "600px" }}
      >

        {/* Top Left Text */}
        <div 
          className="absolute text-white leading-[0.9] text-right"
          style={{ 
            top: `${pos.topLeftTop}px`, 
            left: `${pos.topLeftLeft}px`,
            zIndex: 20 
          }}
        >
          <h3 className="font-medium" style={{ fontSize: `${pos.topLeftSize}px` }}>UI/UX & Visual</h3>
          <h3 className="font-medium" style={{ fontSize: `${pos.topLeftSize * 0.9}px` }}>Storytelling Designer</h3>
        </div>

        {/* CINEMATIC */}
        <h1
          className="absolute left-1/2 -translate-x-1/2 text-white uppercase whitespace-nowrap font-normal tracking-[0.01em] leading-[0.8]"
          style={{ 
            top: `${pos.cinematicTop}px`,
            fontSize: `${pos.cinematicSize}px`, 
            fontFamily: "Anton, sans-serif" 
          }}
        >
          CINEMATIC
        </h1>

        {/* KINETIC */}
        <h1
          className="absolute left-1/2 -translate-x-1/2 text-white uppercase whitespace-nowrap font-normal tracking-[-0.02em] leading-none"
          style={{ 
            top: `${pos.kineticTop}px`,
            fontSize: `${pos.kineticSize}px`, 
            fontFamily: "Anton, sans-serif" 
          }}
        >
          KINETIC
        </h1>

        {/* Top Right Text */}
        <div 
          className="absolute text-white leading-[0.9]"
          style={{ 
            top: `${pos.topRightTop}px`, 
            right: `${pos.topRightRight}px`,
            zIndex: 20 
          }}
        >
          <h3 className="font-medium" style={{ fontSize: `${pos.topRightSize}px` }}>Creative</h3>
          <h3 className="font-medium" style={{ fontSize: `${pos.topRightSize}px` }}>Direction</h3>
        </div>

        {/* TYPOGRAPHY DESIGN */}
        <h1
          className="absolute left-1/2 -translate-x-1/2 text-white uppercase whitespace-nowrap font-normal tracking-[-0.02em] leading-[1.2]"
          style={{ 
            top: `${pos.typographyTop}px`,
            fontSize: `${pos.typographySize}px`, 
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