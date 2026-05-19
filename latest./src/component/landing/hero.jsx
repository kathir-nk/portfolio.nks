// src/components/Hero.jsx

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroVideo from "./../../assets/l1.mp4";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const videoWrapRef = useRef(null);
  const videoRef = useRef(null);
  const labelRowRef = useRef(null);
  const scrollDownRef = useRef(null);
  const floatingTweenRef = useRef(null);

  // ✅ SAFE FIX: replaces vw for consistent behavior across all screens
  const getSafeX = () => {
    if (typeof window === "undefined") return 0;
    return window.innerWidth * 0.15;
  };

  useEffect(() => {
    const initTimer = setTimeout(() => {
      const ctx = gsap.context(() => {

        // ============================================
        // ENTRANCE ANIMATIONS (Desktop Only)
        // ============================================
        if (window.innerWidth > 768) {
          const entranceTl = gsap.timeline();

          entranceTl.from(heroRef.current, {
            opacity: 0,
            duration: 1,
            ease: "power3.out"
          });

          entranceTl.from(titleRef.current, {
            y: 180,
            opacity: 0,
            duration: 1.4,
            ease: "power4.out"
          }, 0);

          entranceTl.from(videoWrapRef.current, {
            scale: 0.82,
            opacity: 0,
            duration: 1.5,
            ease: "power4.out"
          }, 0.3);

          entranceTl.from(labelRowRef.current, {
            opacity: 0,
            y: 10,
            duration: 1,
            ease: "power2.out"
          }, 1);

          entranceTl.from(leftTextRef.current, {
            x: -150,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out"
          }, 0.5);

          entranceTl.from(rightTextRef.current, {
            x: 150,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out"
          }, 0.5);

          entranceTl.from(scrollDownRef.current, {
            opacity: 0,
            y: 20,
            duration: 1,
            delay: 1.5,
            ease: "power2.out"
          });

          floatingTweenRef.current = gsap.to(videoWrapRef.current, {
            y: "+=14",
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        }

        // ============================================
        // GSAP MATCHMEDIA ENGINE
        // ============================================
        let mm = gsap.matchMedia();

        mm.add({
          isDesktop: "(min-width: 769px)"
        }, () => {

          const scrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "+=300%",
              pin: true,
              scrub: 1.5,
              anticipatePin: 1,
              invalidateOnRefresh: true,

              onLeaveBack: () => {
                gsap.to(titleRef.current, { opacity: 1, y: 0, duration: 0.3 });
                gsap.to(labelRowRef.current, { opacity: 1, duration: 0.3 });
                gsap.to(leftTextRef.current, { x: 0, opacity: 1, duration: 0.3 });
                gsap.to(rightTextRef.current, { x: 0, opacity: 1, duration: 0.3 });
                gsap.to(videoWrapRef.current, {
                  width: "clamp(240px, 30vw, 500px)",
                  height: "clamp(320px, 40vh, 480px)",
                  scale: 1,
                  y: 0,
                  duration: 0.3
                });

                gsap.to(scrollDownRef.current, {
                  opacity: 1,
                  y: 0,
                  duration: 0.3
                });

                if (floatingTweenRef.current) floatingTweenRef.current.resume();
              }
            }
          });

          // ============================================
          // PHASE 1 (FIXED: no vw dependency)
          // ============================================
          scrollTl.fromTo(
            leftTextRef.current,
            { x: 0, opacity: 1 },
            { x: getSafeX(), opacity: 1, ease: "none" },
            0
          );

          scrollTl.fromTo(
            rightTextRef.current,
            { x: 0, opacity: 1 },
            { x: -getSafeX(), opacity: 1, ease: "none" },
            0
          );

          scrollTl.fromTo(
            videoWrapRef.current,
            { y: 0 },
            { y: 300, ease: "none" },
            0
          );

          scrollTl.fromTo(
            titleRef.current,
            { opacity: 1, y: 0 },
            { opacity: 0.15, y: -30, ease: "none" },
            0
          );

          scrollTl.fromTo(
            labelRowRef.current,
            { opacity: 1 },
            { opacity: 0.3, ease: "none" },
            0
          );

          scrollTl.fromTo(
            scrollDownRef.current,
            { opacity: 1, y: 0 },
            { opacity: 0, y: 20, ease: "power2.in" },
            0
          );

          // ============================================
          // PHASE 2 (FIXED RESPONSIVE SAFE SIZE ONLY)
          // ============================================
          scrollTl.to(videoWrapRef.current, {
            width: "clamp(420px, 60vw, 900px)",
            height: "clamp(420px, 70vh, 700px)",
            scale: 1.1,
            y: 30,
            ease: "none"
          }, 0.5);

          scrollTl.to([leftTextRef.current, rightTextRef.current], {
            opacity: 0,
            ease: "power2.in"
          }, 0.6);

          scrollTl.to([titleRef.current, labelRowRef.current], {
            opacity: 0,
            ease: "power2.in"
          }, 0.7);

        });

      }, heroRef);

      return () => ctx.revert();
    }, 100);

    return () => {
      clearTimeout(initTimer);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden bg-white md:h-[100vh] h-auto pb-12 md:pb-0"
    >
      <div className="relative flex h-full w-full flex-col items-center">

        {/* HEADER SPACE */}
        <div className="h-[80px] md:h-[180px] w-full shrink-0" />

        {/* TITLE */}
        <div className="w-full px-4 shrink-0 mt-2 md:mt-8 flex justify-center">
          <h1
            ref={titleRef}
            className="text-center uppercase leading-[100%] text-[36px] sm:text-[70px] md:text-[100px] lg:text-[140px] xl:text-[190px] 2xl:text-[200px] text-black"
            style={{
              fontFamily: "Anton, sans-serif",
              fontWeight: 400,
              letterSpacing: "0.02em"
            }}
          >
            SOMANATHAN G
          </h1>
        </div>

        {/* LABEL ROW */}
        <div
          ref={labelRowRef}
          className="flex justify-between w-full max-w-[520px] px-6 mt-4 mb-4 md:mb-2 shrink-0"
        >
          <span className="font-bold uppercase tracking-[0.2em] text-[9px] sm:text-[11px] text-gray-700">
            UI/UX & Graphic Designer
          </span>
          <span className="font-bold uppercase tracking-[0.2em] text-[9px] sm:text-[11px] text-gray-700">
            2024
          </span>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:block relative w-full flex-1 mt-2">

          {/* LEFT TEXT */}
          <div
            ref={leftTextRef}
            className="absolute left-6 md:left-12 top-[60px] md:top-[80px]"
            style={{ zIndex: 30 }}
          >
            <h2 className="font-black uppercase leading-none tracking-tighter text-[24px] md:text-[52px] lg:text-[64px] xl:text-[76px] whitespace-nowrap text-black">
              A VISUAL
            </h2>
          </div>

          {/* VIDEO */}
          <div
            className="absolute left-1/2 top-[40px] md:top-[60px] -translate-x-1/2"
            style={{ zIndex: 20 }}
          >
            <div
              ref={videoWrapRef}
              className="relative overflow-hidden shadow-2xl"
              style={{
                width: "clamp(240px, 30vw, 500px)",
                height: "clamp(320px, 40vh, 480px)"
              }}
            >
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              >
                <source src={heroVideo} type="video/mp4" />
              </video>
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div
            ref={rightTextRef}
            className="absolute right-6 md:right-12 top-[60px] md:top-[80px]"
            style={{ zIndex: 30 }}
          >
            <h2 className="font-black uppercase leading-none tracking-tighter text-[24px] md:text-[52px] lg:text-[64px] xl:text-[76px] whitespace-nowrap text-black">
              DESIGNER
            </h2>
          </div>

        </div>

        {/* MOBILE */}
        <div className="flex md:hidden flex-col items-center gap-6 w-full mt-2 px-4">
          <div className="relative overflow-hidden shadow-2xl w-[340px] h-[320px]">
            <video autoPlay muted loop playsInline className="h-full w-full object-cover">
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>

          <div className="flex flex-col items-center text-center">
            <h2 className="font-black uppercase text-[28px] text-black">A VISUAL</h2>
            <h2 className="font-black uppercase text-[28px] text-black">DESIGNER</h2>
          </div>
        </div>

        {/* SCROLL */}
        <div
          ref={scrollDownRef}
          className="absolute bottom-[30px] left-1/2 -translate-x-1/2 hidden md:block"
        >
          <p className="font-bold uppercase tracking-[0.15em] text-[9px] text-gray-500">
            SCROLL DOWN
          </p>
        </div>

      </div>
    </section>
  );
}