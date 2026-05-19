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

  // ============================================
  // DESKTOP: GSAP Animation Setup
  // ============================================

  const getSafeX = () => {
    if (typeof window === "undefined") return 60;
    const calculated = window.innerWidth * 0.12;
    return Math.min(calculated, 180);
  };

  const getVideoSize = () => {
    if (typeof window === "undefined") return { width: 560, height: 360 };
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    let width, height;
    if (vw < 1024) {
      width = Math.min(vw * 0.55, 520);
      height = Math.min(vh * 0.32, 340);
    } else if (vw < 1440) {
      width = Math.min(vw * 0.50, 680);
      height = Math.min(vh * 0.36, 420);
    } else {
      width = Math.min(vw * 0.45, 800);
      height = Math.min(vh * 0.38, 480);
    }
    return { width, height };
  };

  const getSafeYPhase1 = () => {
    if (typeof window === "undefined") return 0;
    const vh = window.innerHeight;
    return Math.min(vh * 0.18, 140);
  };

  const getSafeYPhase2 = () => {
    if (typeof window === "undefined") return 0;
    return window.innerHeight * 0.04;
  };

  useEffect(() => {
    // 🔒 MOBILE: Skip ALL GSAP — just static layout
    if (window.innerWidth <= 768) return;

    const initTimer = setTimeout(() => {
      const ctx = gsap.context(() => {

        const updateVideoSize = () => {
          const size = getVideoSize();
          if (videoWrapRef.current) {
            gsap.set(videoWrapRef.current, {
              width: size.width,
              height: size.height
            });
          }
        };
        updateVideoSize();

        // ============================================
        // ENTRANCE ANIMATIONS (Desktop Only)
        // ============================================
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
              onRefresh: () => {
                updateVideoSize();
              },

              onLeaveBack: () => {
                gsap.to(titleRef.current, { opacity: 1, y: 0, duration: 0.3 });
                gsap.to(labelRowRef.current, { opacity: 1, duration: 0.3 });
                gsap.to(leftTextRef.current, { x: 0, opacity: 1, duration: 0.3 });
                gsap.to(rightTextRef.current, { x: 0, opacity: 1, duration: 0.3 });

                const size = getVideoSize();
                gsap.to(videoWrapRef.current, {
                  width: size.width,
                  height: size.height,
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

          // PHASE 1 - Text spreads to sides
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
            { y: getSafeYPhase1(), ease: "none" },
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
          // PHASE 2 - Video grows OVER text
          // ============================================
          const expandedSize = getVideoSize();

          scrollTl.to(videoWrapRef.current, {
            width: expandedSize.width * 1.5,
            height: expandedSize.height * 1.4,
            scale: 1.15,
            y: getSafeYPhase1() + getSafeYPhase2(),
            ease: "none"
          }, 0.5);

          scrollTl.to([leftTextRef.current, rightTextRef.current], {
            x: (i) => i === 0 ? getSafeX() * 1.3 : -getSafeX() * 1.3,
            opacity: 0.3,
            ease: "power2.in"
          }, 0.5);

          scrollTl.to([titleRef.current, labelRowRef.current], {
            opacity: 0,
            ease: "power2.in"
          }, 0.6);

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
      className="relative w-full overflow-hidden bg-white min-h-[100dvh] h-auto pb-12 md:pb-0"
    >
      <div className="relative flex h-full w-full flex-col items-center">

        {/* ========================================== */}
        {/* HEADER SPACE - Same for both               */}
        {/* ========================================== */}
        <div className="h-[60px] md:h-[120px] lg:h-[160px] xl:h-[180px] w-full shrink-0" />

        {/* ========================================== */}
        {/* TITLE - Same for both                      */}
        {/* ========================================== */}
        <div className="w-full px-4 shrink-0 mt-2 md:mt-4 lg:mt-8 flex justify-center">
          <h1
            ref={titleRef}
            className="text-center uppercase leading-[100%] text-[32px] sm:text-[56px] md:text-[80px] lg:text-[120px] xl:text-[160px] 2xl:text-[200px] text-black"
            style={{
              fontFamily: "Anton, sans-serif",
              fontWeight: 400,
              letterSpacing: "0.02em"
            }}
          >
            SOMANATHAN G
          </h1>
        </div>

        {/* ========================================== */}
        {/* LABEL ROW - Same for both                  */}
        {/* ========================================== */}
        <div
          ref={labelRowRef}
          className="flex justify-between w-full max-w-[520px] px-6 mt-3 mb-3 md:mb-2 shrink-0"
        >
          <span className="font-bold uppercase tracking-[0.2em] text-[9px] sm:text-[10px] md:text-[11px] text-gray-700">
            UI/UX & Graphic Designer
          </span>
          <span className="font-bold uppercase tracking-[0.2em] text-[9px] sm:text-[10px] md:text-[11px] text-gray-700">
            2024
          </span>
        </div>

        {/* ========================================== */}
        {/* DESKTOP: Animated Layout (md and up)       */}
        {/* ========================================== */}
        <div className="hidden md:block relative w-full flex-1 mt-2 min-h-[320px]">

          {/* LAYER 1: TEXT (z-10 = Behind) */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 10 }}>
            <div className="flex items-center gap-6 md:gap-10 lg:gap-16">

              <div ref={leftTextRef}>
                <h2 className="font-black uppercase leading-none tracking-tighter text-[20px] md:text-[32px] lg:text-[44px] xl:text-[56px] 2xl:text-[68px] whitespace-nowrap text-black">
                  A VISUAL
                </h2>
              </div>

              {/* SPACER matching video size */}
              <div 
                className="shrink-0"
                style={{
                  width: "clamp(320px, 50vw, 680px)",
                  height: "clamp(240px, 32vh, 420px)"
                }}
              />

              <div ref={rightTextRef}>
                <h2 className="font-black uppercase leading-none tracking-tighter text-[20px] md:text-[32px] lg:text-[44px] xl:text-[56px] 2xl:text-[68px] whitespace-nowrap text-black">
                  DESIGNER
                </h2>
              </div>

            </div>
          </div>

          {/* LAYER 2: VIDEO (z-20 = On Top) */}
          <div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ zIndex: 20 }}
          >
            <div
              ref={videoWrapRef}
              className="relative overflow-hidden shadow-2xl pointer-events-auto"
              style={{
                width: "clamp(320px, 50vw, 680px)",
                height: "clamp(240px, 32vh, 420px)"
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

        </div>

        {/* ========================================== */}
        {/* MOBILE: Static Clean Layout (below md)     */}
        {/* ========================================== */}
        {/* 
          NO GSAP, NO animation, NO scroll hijack
          Just clean static flex layout
        */}
        <div className="flex md:hidden flex-col items-center w-full mt-4 px-4 gap-5">

          {/* Video first - full width */}
          <div className="relative overflow-hidden shadow-2xl w-full max-w-[400px] aspect-[16/10]">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="h-full w-full object-cover"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>

          {/* Text below video */}
          <div className="flex flex-col items-center text-center gap-1">
            <h2 className="font-black uppercase leading-none tracking-tighter text-[28px] sm:text-[36px] text-black">
              A VISUAL
            </h2>
            <h2 className="font-black uppercase leading-none tracking-tighter text-[28px] sm:text-[36px] text-black">
              DESIGNER
            </h2>
          </div>

        </div>

        {/* ========================================== */}
        {/* SCROLL DOWN - Desktop only                 */}
        {/* ========================================== */}
        <div
          ref={scrollDownRef}
          className="absolute bottom-[20px] md:bottom-[30px] left-1/2 -translate-x-1/2 hidden md:block"
        >
          <p className="font-bold uppercase tracking-[0.15em] text-[9px] text-gray-500">
            SCROLL DOWN
          </p>
        </div>

      </div>
    </section>
  );
}