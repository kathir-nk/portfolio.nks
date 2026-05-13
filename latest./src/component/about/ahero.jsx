import React from "react";

import profileImg from "./../../assets/l6.png";
import figma from "./../../assets/l7.png";
import photoshop from "./../../assets/l8.png";
import illustrator from "./../../assets/l9.png";

const AboutPage = () => {
  return (
    <section className="w-full bg-[#e8e6e1] overflow-hidden">

      {/* ================= HERO ================= */}
      <div className="relative bg-black px-4 sm:px-6 md:px-12 pt-10 md:pt-16 pb-40 md:pb-56">

        {/* TITLE */}
        <div className="flex justify-center">

          <h1
            className="
              text-white
              uppercase
              text-center
              leading-[0.9]
              tracking-[-0.05em]
            "
            style={{
              fontSize: "clamp(58px, 10vw, 220px)",
              fontFamily: "Anton, sans-serif",
            }}
          >
            ABOUT SOMANATHAN
          </h1>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative z-20 mt-10 md:mt-14 flex justify-center">

          <div className="relative w-full max-w-[300px] md:max-w-[430px]">

            {/* TOP LABELS */}
            <div className="absolute -top-7 left-0 right-0 flex items-center justify-between">

              <p
                className="
                  text-white
                  uppercase
                  text-[10px]
                  md:text-[14px]
                  tracking-wide
                "
              >
                WHO'S THIS?
              </p>

              <p
                className="
                  text-white
                  uppercase
                  text-[10px]
                  md:text-[14px]
                  tracking-wide
                "
              >
                HELLO, HI, HEY
              </p>
            </div>

            {/* IMAGE BOX */}
            <div
              className="
                bg-[#f4f4f4]
                w-full
                h-[420px]
                md:h-[620px]
                overflow-hidden
                flex
                items-end
                justify-center
              "
            >
              <img
                src={profileImg}
                alt=""
                className="
                  h-full
                  object-contain
                "
              />
            </div>

            {/* BUTTONS */}
            <div className="mt-4 flex items-center justify-center gap-3">

              <button
                className="
                  bg-black
                  text-white
                  rounded-full
                  px-4
                  md:px-5
                  py-1.5
                  uppercase
                  text-[10px]
                  md:text-[12px]
                  tracking-wide
                "
              >
                Resume
              </button>

              <button
                className="
                  bg-black
                  text-white
                  rounded-full
                  px-4
                  md:px-5
                  py-1.5
                  uppercase
                  text-[10px]
                  md:text-[12px]
                  tracking-wide
                "
              >
                Linkedin
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM LIGHT AREA */}
        <div
          className="
            absolute
            bottom-0
            left-0
            w-full
            h-[140px]
            md:h-[220px]
            bg-[#e8e6e1]
          "
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-30 px-5 md:px-12 pb-24 md:pb-32">

        {/* TOP SMALL TEXTS */}
        <div
          className="
            flex
            justify-between
            gap-4
            uppercase
            text-black
            leading-[1.1]
            text-[9px]
            sm:text-[11px]
            md:text-[15px]
          "
        >

          <p>
            Advocate Of Clean <br />
            Design
          </p>

          <p className="text-center">
            UI/UX + Graphic <br />
            Design
          </p>

          <p className="text-right">
            Coffee + Creativity <br />
            Design
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div
          className="
            mt-16
            md:mt-24
            flex
            flex-col
            items-center
            text-center
          "
        >

          {/* PARA 1 */}
          <p
            className="
              uppercase
              text-black
              leading-[1.28]
              max-w-[1200px]
            "
            style={{
              fontSize: "clamp(22px, 3vw, 58px)",
            }}
          >
            HEY, I’M SOMANATHAN — A UI/UX & GRAPHIC
            DESIGNER PASSIONATE ABOUT CREATING CLEAN,
            PURPOSEFUL, AND VISUALLY ENGAGING DIGITAL
            EXPERIENCES.
          </p>

          {/* PARA 2 */}
          <p
            className="
              uppercase
              text-black
              leading-[1.35]
              max-w-[1250px]
              mt-14
              md:mt-20
            "
            style={{
              fontSize: "clamp(21px, 2.8vw, 52px)",
            }}
          >
            I WORK ACROSS UI/UX, BRANDING, AND VISUAL
            STORYTELLING, FOCUSING ON MINIMAL INTERFACES,
            STRONG TYPOGRAPHY, AND USER-CENTERED DESIGN.
            MY APPROACH COMBINES CREATIVITY WITH
            FUNCTIONAL THINKING TO BUILD EXPERIENCES
            THAT FEEL SIMPLE, MODERN, AND MEANINGFUL.
          </p>

          {/* PARA 3 */}
          <p
            className="
              uppercase
              text-black
              leading-[1.35]
              max-w-[1150px]
              mt-14
              md:mt-20
            "
            style={{
              fontSize: "clamp(21px, 2.8vw, 52px)",
            }}
          >
            FROM DESIGN SYSTEMS AND PROTOTYPING TO BRAND
            VISUALS AND MOTION-INSPIRED LAYOUTS, I ENJOY
            TURNING IDEAS INTO EXPERIENCES THAT CONNECT
            WITH PEOPLE.
          </p>
        </div>

        {/* TOOLS */}
        <div
          className="
            mt-20
            md:mt-28
            flex
            items-center
            justify-center
            gap-8
            md:gap-28
            flex-wrap
          "
        >

          {[figma, photoshop, illustrator].map((icon, index) => (
            <div
              key={index}
              className="
                w-[82px]
                h-[82px]
                sm:w-[100px]
                sm:h-[100px]
                md:w-[150px]
                md:h-[150px]
              "
            >
              <img
                src={icon}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;