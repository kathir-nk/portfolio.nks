// src/components/Hero.jsx

import { useEffect, useRef } from "react";
import gsap from "gsap";

// IMPORT VIDEO
import heroVideo from "./../../assets/l1.mp4";

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const videoWrapRef = useRef(null);
  const topInfoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // HERO FADE
      gsap.from(heroRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // BIG TITLE
      gsap.from(titleRef.current, {
        y: 180,
        opacity: 0,
        duration: 1.4,
        ease: "power4.out",
      });

      // VIDEO
      gsap.from(videoWrapRef.current, {
        scale: 0.82,
        opacity: 0,
        duration: 1.5,
        delay: 0.3,
        ease: "power4.out",
      });

      // TOP INFO
      gsap.from(topInfoRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });

      // LEFT TEXT
      gsap.from(leftTextRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.1,
        delay: 0.5,
        ease: "power4.out",
      });

      // RIGHT TEXT
      gsap.from(rightTextRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.1,
        delay: 0.5,
        ease: "power4.out",
      });

      // FLOAT EFFECT
      gsap.to(videoWrapRef.current, {
        y: 14,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden bg-[#eceae7]"
    >
      <div className="mx-auto flex min-h-[calc(100vh-110px)] w-full max-w-[1920px] flex-col justify-between px-4 pb-8 pt-3 sm:px-6 md:px-10 lg:px-14 xl:px-20">

        {/* TITLE */}
        <div className="w-full overflow-hidden">
          <h1
            ref={titleRef}
            className="
              text-center
              font-black
              uppercase
              leading-[0.84]
              tracking-[-0.09em]

              text-[58px]
              sm:text-[88px]
              md:text-[125px]
              lg:text-[175px]
              xl:text-[235px]
              2xl:text-[285px]
            "
          >
            SOMANATHAN G
          </h1>
        </div>

        {/* BOTTOM CONTENT */}
        <div className="mt-4 grid w-full grid-cols-1 items-end gap-10 pb-4 md:grid-cols-3">

          {/* LEFT */}
          <div className="flex justify-center md:justify-start">
            <h2
              ref={leftTextRef}
              className="
                font-black
                uppercase
                leading-none
                tracking-[-0.05em]

                text-[38px]
                sm:text-[50px]
                md:text-[55px]
                lg:text-[70px]
                xl:text-[90px]
              "
            >
              A VISUAL
            </h2>
          </div>

          {/* CENTER */}
          <div className="flex flex-col items-center">

            {/* TOP INFO */}
            <div
              ref={topInfoRef}
              className="mb-3 flex w-full items-center justify-between text-[#7b7b7b]"
            >
              <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px]">
                UI/UX & Graphic Designer
              </p>

              <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px]">
                2024
              </p>
            </div>

            {/* VIDEO */}
            <div
              ref={videoWrapRef}
              className="
                group
                relative
                w-full
                overflow-hidden

                h-[250px]
                sm:h-[300px]
                md:h-[350px]
                lg:h-[420px]
                xl:h-[500px]
              "
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-[1.04]
                "
              >
                <source src={heroVideo} type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-black/5"></div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center md:justify-end">
            <h2
              ref={rightTextRef}
              className="
                font-black
                uppercase
                leading-none
                tracking-[-0.05em]

                text-[38px]
                sm:text-[50px]
                md:text-[55px]
                lg:text-[70px]
                xl:text-[90px]
              "
            >
              DESIGNER
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}