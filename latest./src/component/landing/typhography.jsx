import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroTypography = () => {
  const mobileTextRef = useRef(null);
  const containerRef = useRef(null);
  const desktopRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

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

  const getPositions = () => {
    const { width, height } = dimensions;

    // Base font size
    const cinematicSize = Math.min(200, Math.max(60, width * 0.12));
    const kineticSize = cinematicSize;
    const typographySize = Math.min(160, Math.max(50, width * 0.10));

    // 🔥 IMPORTANT: lineHeight factor must match actual CSS lineHeight
    // lineHeight: 0.85 means text occupies 85% of fontSize vertically
    const lineHeightFactor = 0.85;

    // Gaps (in pixels)
    const gapCinematicKinetic = 4;   // Small gap between CINEMATIC and KINETIC
    const gapKineticTypography = 40; // Bigger gap before TYPOGRAPHY DESIGN

    // Top positions
    const cinematicTop = Math.max(100, height * 0.18);

    // KINETIC = CINEMATIC top + CINEMATIC rendered height + gap
    // Rendered height = fontSize * lineHeightFactor
    const kineticTop = cinematicTop + (cinematicSize * lineHeightFactor) + gapCinematicKinetic;

    // TYPOGRAPHY = KINETIC top + KINETIC rendered height + gap
    const typographyTop = kineticTop + (kineticSize * lineHeightFactor) + gapKineticTypography;

    return {
      // Top left text
      topLeftTop: Math.max(80, height * 0.15),
      topLeftLeft: Math.max(16, width * 0.03),
      topLeftSize: Math.min(28, Math.max(16, width * 0.018)),

      // CINEMATIC
      cinematicTop,
      cinematicSize,

      // KINETIC
      kineticTop,
      kineticSize,

      // Top right text (aligned with KINETIC middle)
      topRightTop: kineticTop + (kineticSize * lineHeightFactor * 0.3),
      topRightRight: Math.max(16, width * 0.03),
      topRightSize: Math.min(30, Math.max(16, width * 0.019)),

      // TYPOGRAPHY DESIGN
      typographyTop,
      typographySize,
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
        minHeight: "100dvh"
      }}
    >

      {/* 💻 DESKTOP */}
      <div 
        ref={desktopRef}
        className="hidden md:block w-full relative" 
        style={{ height: "100dvh", minHeight: "600px" }}
      >

        {/* Top Left Text */}
        <div 
          className="absolute text-white text-right"
          style={{ 
            top: `${pos.topLeftTop}px`, 
            left: `${pos.topLeftLeft}px`,
            zIndex: 20,
            lineHeight: "0.9"
          }}
        >
          <h3 className="font-medium" style={{ fontSize: `${pos.topLeftSize}px`, lineHeight: "0.9", margin: 0, padding: 0 }}>UI/UX & Visual</h3>
          <h3 className="font-medium" style={{ fontSize: `${pos.topLeftSize * 0.9}px`, lineHeight: "0.9", margin: 0, padding: 0 }}>Storytelling Designer</h3>
        </div>

        {/* CINEMATIC */}
        <h1
          className="absolute left-1/2 -translate-x-1/2 text-white uppercase whitespace-nowrap font-normal tracking-[0.01em]"
          style={{ 
            top: `${pos.cinematicTop}px`,
            fontSize: `${pos.cinematicSize}px`, 
            fontFamily: "Anton, sans-serif",
            lineHeight: "0.85",
            margin: 0,
            padding: 0
          }}
        >
          CINEMATIC
        </h1>

        {/* KINETIC */}
        <h1
          className="absolute left-1/2 -translate-x-1/2 text-white uppercase whitespace-nowrap font-normal tracking-[-0.02em]"
          style={{ 
            top: `${pos.kineticTop}px`,
            fontSize: `${pos.kineticSize}px`, 
            fontFamily: "Anton, sans-serif",
            lineHeight: "0.95",
            margin: 0,
            padding: 0
          }}
        >
          KINETIC
        </h1>

        {/* Top Right Text */}
        <div 
          className="absolute text-white"
          style={{ 
            top: `${pos.topRightTop}px`, 
            right: `${pos.topRightRight}px`,
            zIndex: 20,
            lineHeight: "0.9"
          }}
        >
          <h3 className="font-medium" style={{ fontSize: `${pos.topRightSize}px`, lineHeight: "0.9", margin: 0, padding: 0 }}>Creative</h3>
          <h3 className="font-medium" style={{ fontSize: `${pos.topRightSize}px`, lineHeight: "0.9", margin: 0, padding: 0 }}>Direction</h3>
        </div>

        {/* TYPOGRAPHY DESIGN */}
        <h1
          className="absolute left-1/2 -translate-x-1/2 text-white uppercase whitespace-nowrap font-normal tracking-[-0.02em]"
          style={{ 
            top: `${pos.typographyTop}px`,
            fontSize: `${pos.typographySize}px`, 
            fontFamily: "Anton, sans-serif",
            lineHeight: "0.85",
            margin: 0,
            padding: 0
          }}
        >
          TYPOGRAPHY DESIGN
        </h1>
      </div>

      {/* 📱 MOBILE */}
      <div
        ref={mobileTextRef}
        className="flex md:hidden flex-col items-center w-full px-4 py-12 text-center"
        style={{ minHeight: "85dvh" }}
      >

        <div className="text-white w-full max-w-[280px] mb-8">
          <h3 className="font-bold uppercase tracking-[0.2em] text-[11px] text-gray-400">
            UI/UX & Visual Storytelling Designer
          </h3>
        </div>

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

        <div className="text-white w-full max-w-[280px] mt-8">
          <h3 className="font-bold uppercase tracking-[0.15em] text-[11px] text-gray-400">
            Creative Direction
          </h3>
        </div>

      </div>

    </section>
  );
};

export default HeroTypography;