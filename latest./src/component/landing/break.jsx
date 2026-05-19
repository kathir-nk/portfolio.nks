import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: "01", title: "F2H (FRAMERS TO HOME)", link: "https://www.behance.net/gallery/205743689/F2H-Grocery-app-UXUI-Case-Study", offset: 0 },
  { id: "02", title: "BEE BIKES", link: "https://www.behance.net/gallery/208456359/Bee-Bikes-Rental-app-UIUX-Case-study", offset: 40 },
  { id: "03", title: "ARROW", link: "https://www.behance.net/gallery/207642971/ARROW-Trading-app-UIUX-Case-study", offset: 80 },
  { id: "04", title: "LENSKART (REDESIGN)", link: "https://www.behance.net/gallery/209999779/Lenskart-Responsive-app-UIUX-Case-study", offset: 0 },
  { id: "05", title: "PIXLA LOGO", link: "https://www.behance.net/gallery/235401845/Pixla-Group-logo-design", offset: 50 },
  { id: "06", title: "HEALTH CARE LOGO", link: "https://www.behance.net/gallery/244700761/Logos-Marks-Collections", offset: 20 }
];

const BreakSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // MOBILE ONLY: Simple fade-in animation
    if (window.innerWidth > 768) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      });

      tl.fromTo(".animate-mobile-title",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );

      tl.fromTo(".animate-mobile-meta",
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        "-=0.2"
      );

      tl.fromTo(".animate-mobile-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.15,
          ease: "power2.out"
        },
        "-=0.1"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full bg-black px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-20 overflow-hidden"
    >

      {/* ========================================== */}
      {/* TITLE - Same on all screens                */}
      {/* ========================================== */}
      <h2
        className="animate-mobile-title text-white uppercase text-center mb-6 md:mb-8"
        style={{
          fontFamily: "Anton, sans-serif",
          fontSize: "clamp(48px, 12vw, 180px)",
          fontWeight: 400,
          lineHeight: "100%",
          letterSpacing: "0.01em"
        }}
      >
        BREAK
      </h2>

      {/* DIVIDER */}
      <div className="animate-mobile-meta w-full h-[1px] bg-white/20 mb-6 md:mb-8" />

      {/* FILTER ROW */}
      <div className="animate-mobile-meta flex flex-col md:flex-row justify-between items-center gap-3 mb-10 md:mb-12">
        <span
          className="text-white/60 uppercase text-center md:text-left"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(9px, 1vw, 11px)",
            fontWeight: 500,
            letterSpacing: "0.15em"
          }}
        >
          SHORT, EXPERIMENTAL DESIGN
        </span>

        <span
          className="px-3 py-1 bg-white text-black rounded-full uppercase text-center"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(8px, 0.9vw, 10px)",
            fontWeight: 500,
            letterSpacing: "0.05em"
          }}
        >
          SMALL SCALE VISUAL
        </span>
      </div>

      {/* ========================================== */}
      {/* DESKTOP - Centered staggered layout        */}
      {/* ========================================== */}
      <div className="hidden md:flex flex-col items-center w-full max-w-[900px] mx-auto">
        {projects.map((project) => (
          <div
            key={`desktop-${project.id}`}
            className="flex items-baseline gap-3 py-3 transition-colors duration-300 cursor-pointer hover:opacity-60 w-full"
            style={{ 
              paddingLeft: `${project.offset}px`,
              justifyContent: "center"
            }}
          >
            <span
              className="text-white shrink-0"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(20px, 2vw, 29px)",
                fontWeight: 900,
                lineHeight: "100%",
                minWidth: "40px"
              }}
            >
              {project.id}
            </span>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white uppercase hover:underline"
              style={{
                fontFamily: "Anton, sans-serif",
                fontSize: "clamp(24px, 5vw, 56px)",
                fontWeight: 400,
                lineHeight: "110%",
                letterSpacing: "0.02em"
              }}
            >
              {project.title}
            </a>
          </div>
        ))}
      </div>

      {/* ========================================== */}
      {/* MOBILE - Clean centered list               */}
      {/* ========================================== */}
      <div className="flex md:hidden flex-col items-center gap-0 w-full max-w-[500px] mx-auto">
        {projects.map((project) => (
          <div
            key={`mobile-${project.id}`}
            className="animate-mobile-item flex items-center justify-center gap-3 py-3 w-full text-center border-b border-white/10 last:border-none"
          >
            <span
              className="text-white shrink-0"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                fontWeight: 800,
                lineHeight: "100%",
                minWidth: "32px"
              }}
            >
              {project.id}
            </span>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white uppercase"
              style={{
                fontFamily: "Anton, sans-serif",
                fontSize: "clamp(18px, 5vw, 24px)",
                fontWeight: 400,
                lineHeight: "120%",
                letterSpacing: "0.01em"
              }}
            >
              {project.title}
            </a>
          </div>
        ))}
      </div>

    </section>
  );
};

export default BreakSection;