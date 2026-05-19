import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    title: "F2H (FRAMERS TO HOME)",
    link: "https://www.behance.net/gallery/205743689/F2H-Grocery-app-UXUI-Case-Study",
    offset: 0
  },
  {
    id: "02",
    title: "BEE BIKES",
    link: "https://www.behance.net/gallery/208456359/Bee-Bikes-Rental-app-UIUX-Case-study",
    offset: 40
  },
  {
    id: "03",
    title: "ARROW",
    link: "https://www.behance.net/gallery/207642971/ARROW-Trading-app-UIUX-Case-study",
    offset: 80
  },
  {
    id: "04",
    title: "LENSKART (REDESIGN)",
    link: "https://www.behance.net/gallery/209999779/Lenskart-Responsive-app-UIUX-Case-study",
    offset: 0
  },
  {
    id: "05",
    title: "PIXLA LOGO",
    link: "https://www.behance.net/gallery/235401845/Pixla-Group-logo-design",
    offset: 50
  },
  {
    id: "06",
    title: "HEALTH CARE LOGO",
    link: "https://www.behance.net/gallery/244700761/Logos-Marks-Collections",
    offset: 20
  }
];

const BreakSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // 🔒 MOBILE: Skip all GSAP animation
    if (window.innerWidth <= 768) return;

    const ctx = gsap.context(() => {

      // =========================
      // TITLE ANIMATION (Desktop only)
      // =========================
      gsap.fromTo(
        ".break-title",
        {
          y: 120,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".break-title",
            start: "top 85%"
          }
        }
      );

      // =========================
      // META ANIMATION (Desktop only)
      // =========================
      gsap.fromTo(
        ".break-meta",
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".break-meta-wrap",
            start: "top 90%"
          }
        }
      );

      // =========================
      // PROJECT ITEMS (Desktop only)
      // =========================
      gsap.fromTo(
        ".project-item-desktop",
        {
          opacity: 0,
          y: 80
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".projects-wrap-desktop",
            start: "top 85%"
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full bg-black overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 py-14 md:py-24"
    >

      {/* ========================= */}
      {/* TITLE */}
      {/* ========================= */}
      <h2
        className="break-title text-white uppercase text-center leading-[100%]"
        style={{
          fontFamily: "Anton, sans-serif",
          fontSize: "clamp(52px, 14vw, 190px)",
          fontWeight: 400,
          letterSpacing: "0.01em"
        }}
      >
        BREAK
      </h2>

      {/* ========================= */}
      {/* DIVIDER */}
      {/* ========================= */}
      <div className="w-full h-[1px] bg-white/20 mt-8 md:mt-10" />

      {/* ========================= */}
      {/* FILTER ROW */}
      {/* ========================= */}
      <div className="break-meta-wrap flex flex-col md:flex-row items-center justify-between gap-4 mt-6 md:mt-8 mb-12 md:mb-16">

        <span
          className="break-meta text-white/60 uppercase text-center md:text-left"
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
          className="break-meta px-4 py-1.5 bg-white text-black rounded-full uppercase"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(8px, 0.9vw, 10px)",
            fontWeight: 600,
            letterSpacing: "0.05em"
          }}
        >
          SMALL SCALE VISUAL
        </span>
      </div>

      {/* ========================= */}
      {/* DESKTOP - Animated */}
      {/* ========================= */}
      <div className="projects-wrap-desktop hidden md:flex flex-col items-center w-full max-w-[1100px] mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-item-desktop w-full flex items-baseline justify-center gap-4 py-4 transition-all duration-300 hover:opacity-60"
            style={{ paddingLeft: `${project.offset}px` }}
          >
            <span
              className="text-white shrink-0"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(18px, 2vw, 30px)",
                fontWeight: 900,
                minWidth: "40px"
              }}
            >
              {project.id}
            </span>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white uppercase leading-[110%]"
              style={{
                fontFamily: "Anton, sans-serif",
                fontSize: "clamp(28px, 5vw, 64px)",
                fontWeight: 400,
                letterSpacing: "0.02em"
              }}
            >
              {project.title}
            </a>
          </div>
        ))}
      </div>

      {/* ========================= */}
      {/* MOBILE - Static (NO animation) */}
      {/* ========================= */}
      <div className="flex md:hidden flex-col items-center w-full max-w-[420px] mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full flex items-center justify-center gap-1 py-5  last:border-none"
          >
            <span
              className="text-white shrink-0"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                fontWeight: 900,
                minWidth: "28px"
              }}
            >
              {project.id}
            </span>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white uppercase text-center leading-[115%] break-words"
              style={{
                fontFamily: "Anton, sans-serif",
                fontSize: "clamp(20px, 6vw, 30px)",
                fontWeight: 400,
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