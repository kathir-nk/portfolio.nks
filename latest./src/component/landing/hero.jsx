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

  const getSafeX = () => {
    if (typeof window === "undefined") return 60;
    const calculated = window.innerWidth * 0.12;
    return Math.min(calculated, 180);
  };

  const getVideoSize = () => {
    if (typeof window === "undefined") return { width: 520, height: 320 };
    const vw = window.innerWidth;
    let width, height;
    if (vw < 1024) {
      width = Math.min(vw * 0.42, 420);
      height = width * 0.62;
    } else if (vw < 1440) {
      width = Math.min(vw * 0.38, 560);
      height = width * 0.62;
    } else {
      width = Math.min(vw * 0.34, 640);
      height = width * 0.62;
    }
    width = Math.max(width, 320);
    height = Math.max(height, 220);
    return { width, height };
  };

  const getSafeYPhase1 = () => {
    if (typeof window === "undefined") return 0;
    return Math.min(window.innerHeight * 0.18, 140);
  };

  const getSafeYPhase2 = () => {
    if (typeof window === "undefined") return 0;
    return window.innerHeight * 0.10;
  };

  useEffect(() => {
    const isDesktop = window.innerWidth > 768;
    if (!isDesktop) return;

    const initTimer = setTimeout(() => {
      const ctx = gsap.context(() => {

        const updateVideoSize = () => {
          const size = getVideoSize();
          gsap.set(videoWrapRef.current, {
            width: size.width,
            height: size.height
          });
        };
        updateVideoSize();

        // ==========================================
        // ENTRANCE ANIMATIONS
        // ==========================================
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
          ease: "power2.out"
        }, 1);

        floatingTweenRef.current = gsap.to(videoWrapRef.current, {
          y: "+=14",
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });

        // ==========================================
        // SCROLL TIMELINE - fromTo() for ALL elements
        // This ensures perfect reset on scroll up/down
        // ==========================================
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=240%",
            pin: true,
            scrub: 1.2,
            anticipatePin: 1,
            invalidateOnRefresh: true,

            onRefresh: () => {
              updateVideoSize();
            }
          }
        });

        const size = getVideoSize();
        const safeX = getSafeX();
        const safeY1 = getSafeYPhase1();
        const safeY2 = getSafeYPhase2();

        // 🔥 LEFT TEXT: from center → spread right
        scrollTl.fromTo(
          leftTextRef.current,
          { x: 0, opacity: 1 },
          { x: safeX, opacity: 1, ease: "none" },
          0
        );

        // 🔥 RIGHT TEXT: from center → spread left
        scrollTl.fromTo(
          rightTextRef.current,
          { x: 0, opacity: 1 },
          { x: -safeX, opacity: 1, ease: "none" },
          0
        );

        // 🔥 VIDEO: from center → moves down + grows
        scrollTl.fromTo(
          videoWrapRef.current,
          { y: 0, width: size.width, height: size.height, scale: 1 },
          { y: safeY1, ease: "none" },
          0
        );

        // 🔥 TITLE: from visible → fades
        scrollTl.fromTo(
          titleRef.current,
          { opacity: 1, y: 0 },
          { opacity: 0.15, y: -30, ease: "none" },
          0
        );

        // 🔥 LABEL: from visible → fades
        scrollTl.fromTo(
          labelRowRef.current,
          { opacity: 1 },
          { opacity: 0.3, ease: "none" },
          0
        );

        // 🔥 SCROLL DOWN: from visible → hides
        scrollTl.fromTo(
          scrollDownRef.current,
          { opacity: 1, y: 0 },
          { opacity: 0, y: 20, ease: "power2.in" },
          0
        );

        // ==========================================
        // PHASE 2: Video grows BIG
        // ==========================================
        scrollTl.fromTo(
          videoWrapRef.current,
          { width: size.width, height: size.height, scale: 1 },
          {
            width: size.width * 1.6,
            height: size.height * 1.5,
            scale: 1.15,
            ease: "none"
          },
          0.45
        );

        // Video moves further down
        scrollTl.fromTo(
          videoWrapRef.current,
          { y: safeY1 },
          { y: safeY1 + safeY2, ease: "none" },
          0.45
        );

        // Text fades behind video
        scrollTl.fromTo(
          [leftTextRef.current, rightTextRef.current],
          { opacity: 1 },
          { opacity: 0.12, ease: "power2.in" },
          0.55
        );

        scrollTl.fromTo(
          [titleRef.current, labelRowRef.current],
          { opacity: 0.15 },
          { opacity: 0, ease: "power2.in" },
          0.55
        );

      }, heroRef);

      return () => ctx.revert();

    }, 100);

    return () => {
      clearTimeout(initTimer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };

  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden bg-white"
      style={{ minHeight: "100dvh" }}
    >

      <div
        className="relative flex flex-col items-center w-full"
        style={{ minHeight: "100dvh" }}
      >

        {/* ========================================== */}
        {/* DESKTOP */}
        {/* ========================================== */}
        <div
          className="hidden md:flex flex-col items-center w-full"
          style={{ minHeight: "100dvh" }}
        >

          {/* HEADER SPACE */}
          <div
            className="w-full shrink-0"
            style={{ height: "clamp(60px, 12vh, 180px)" }}
          />

          {/* TITLE */}
          <div
            className="w-full px-4 shrink-0 flex justify-center"
            style={{ marginTop: "clamp(8px, 2vh, 32px)" }}
          >
            <h1
              ref={titleRef}
              className="text-center uppercase leading-[100%] text-black"
              style={{
                fontFamily: "Anton, sans-serif",
                fontWeight: 400,
                letterSpacing: "0.02em",
                fontSize: "clamp(32px, 12vw, 200px)"
              }}
            >
              SOMANATHAN G
            </h1>
          </div>

          {/* LABEL */}
          <div
            ref={labelRowRef}
            className="flex justify-between w-full max-w-[520px] px-6 shrink-0"
            style={{
              marginTop: "clamp(8px, 2vh, 24px)",
              marginBottom: "clamp(8px, 2vh, 16px)"
            }}
          >
            <span
              className="font-bold uppercase text-gray-700"
              style={{
                fontSize: "clamp(8px, 1vw, 11px)",
                letterSpacing: "0.2em"
              }}
            >
              UI/UX & Graphic Designer
            </span>

            <span
              className="font-bold uppercase text-gray-700"
              style={{
                fontSize: "clamp(8px, 1vw, 11px)",
                letterSpacing: "0.2em"
              }}
            >
              2024
            </span>
          </div>

          {/* CONTENT */}
          <div
            className="relative w-full flex-1"
            style={{ minHeight: "320px" }}
          >

            {/* TEXT LAYER */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ zIndex: 10 }}
            >

              <div
                className="flex items-center"
                style={{
                  gap: "clamp(16px, 2vw, 32px)"
                }}
              >

                {/* LEFT */}
                <div ref={leftTextRef}>
                  <h2
                    className="font-black uppercase leading-none tracking-tighter whitespace-nowrap text-black"
                    style={{
                      fontSize: "clamp(20px, 4vw, 68px)"
                    }}
                  >
                    A VISUAL
                  </h2>
                </div>

                {/* SPACER */}
                <div
                  className="shrink-0"
                  style={{
                    width: "clamp(320px, 42vw, 640px)",
                    height: "clamp(220px, 26vw, 400px)"
                  }}
                />

                {/* RIGHT */}
                <div ref={rightTextRef}>
                  <h2
                    className="font-black uppercase leading-none tracking-tighter whitespace-nowrap text-black"
                    style={{
                      fontSize: "clamp(20px, 4vw, 68px)"
                    }}
                  >
                    DESIGNER
                  </h2>
                </div>

              </div>
            </div>

            {/* VIDEO LAYER */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                zIndex: 20,
                pointerEvents: "none"
              }}
            >

              <div
                ref={videoWrapRef}
                className="relative overflow-hidden shadow-2xl"
                style={{
                  width: "clamp(320px, 42vw, 640px)",
                  height: "clamp(220px, 26vw, 400px)",
                  pointerEvents: "auto"
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

          {/* SCROLL DOWN */}
          <div
            ref={scrollDownRef}
            className="absolute hidden md:block"
            style={{
              bottom: "clamp(16px, 3vh, 30px)",
              left: "50%",
              transform: "translateX(-50%)"
            }}
          >
            <p
              className="font-bold uppercase text-gray-500"
              style={{
                fontSize: "9px",
                letterSpacing: "0.15em"
              }}
            >
              SCROLL DOWN
            </p>
          </div>

        </div>

        {/* ========================================== */}
        {/* MOBILE */}
        {/* ========================================== */}
        <div
          className="flex md:hidden flex-col items-center w-full"
          style={{
            minHeight: "100dvh",
            paddingTop: "80px",
            paddingBottom: "40px"
          }}
        >

          <div className="w-full px-4 flex justify-center shrink-0">
            <h1
              className="text-center uppercase leading-[100%] text-black"
              style={{
                fontFamily: "Anton, sans-serif",
                fontWeight: 400,
                letterSpacing: "0.02em",
                fontSize: "clamp(36px, 14vw, 80px)"
              }}
            >
              SOMANATHAN G
            </h1>
          </div>

          <div
            className="flex justify-between w-full max-w-[320px] px-4 shrink-0"
            style={{
              marginTop: "12px",
              marginBottom: "24px"
            }}
          >

            <span
              className="font-bold uppercase text-gray-700"
              style={{
                fontSize: "9px",
                letterSpacing: "0.2em"
              }}
            >
              UI/UX & Graphic Designer
            </span>

            <span
              className="font-bold uppercase text-gray-700"
              style={{
                fontSize: "9px",
                letterSpacing: "0.2em"
              }}
            >
              2024
            </span>

          </div>

          {/* VIDEO */}
          <div className="flex-1 flex items-center justify-center w-full px-4">

            <div
              className="relative overflow-hidden shadow-2xl w-full"
              style={{
                maxWidth: "380px",
                aspectRatio: "16/10"
              }}
            >

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

          </div>

          {/* TEXT */}
          <div
            className="flex flex-col items-center text-center gap-1 shrink-0"
            style={{
              marginTop: "24px",
              marginBottom: "20px"
            }}
          >

            <h2
              className="font-black uppercase text-black"
              style={{
                fontSize: "clamp(22px, 7vw, 32px)",
                letterSpacing: "-0.02em"
              }}
            >
              A VISUAL
            </h2>

            <h2
              className="font-black uppercase text-black"
              style={{
                fontSize: "clamp(22px, 7vw, 32px)",
                letterSpacing: "-0.02em"
              }}
            >
              DESIGNER
            </h2>

          </div>

        </div>

      </div>

    </section>
  );
}