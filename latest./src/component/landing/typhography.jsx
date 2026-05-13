import React from "react";

const HeroTypography = () => {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block w-full h-full">

        {/* TOP LEFT */}
        <div className="absolute top-[18%] left-[4%] z-20 text-white leading-[0.9] text-right">
          <h3 className="font-medium text-[2.1vw]">
            UI/UX & Visual
          </h3>

          <h3 className="font-medium text-[2.1vw]">
            Storytelling Designer
          </h3>
        </div>

        {/* CINEMATIC */}
        <h1
          className="
            absolute
            top-[19%]
            left-1/2
            -translate-x-1/2
            text-white
            uppercase
            whitespace-nowrap
            font-normal
            tracking-[0.01em]
            leading-[0.8]
          "
          style={{
            fontSize: "13vw",
            fontFamily: "Anton, sans-serif",
          }}
        >
          CINEMATIC
        </h1>

        {/* KINETIC */}
        <h1
          className="
            absolute
            top-[39%]
            left-1/2
            -translate-x-1/2
            text-white
            uppercase
            whitespace-nowrap
            font-normal
            tracking-[-0.02em]
            leading-none
          "
          style={{
            fontSize: "13vw",
            fontFamily: "Anton, sans-serif",
          }}
        >
          KINETIC
        </h1>

        {/* RIGHT TEXT */}
        <div className="absolute top-[42%] right-[22%] z-20 text-white leading-[0.9]">
          <h3 className="font-medium text-[2.3vw]">
            Creative
          </h3>

          <h3 className="font-medium text-[2.3vw]">
            Direction
          </h3>
        </div>

        {/* TYPOGRAPHY DESIGN */}
        <h1
          className="
            absolute
            bottom-[15%]
            left-1/2
            -translate-x-1/2
            text-white
            uppercase
            whitespace-nowrap
            font-normal
            tracking-[-0.02em]
            leading-none
          "
          style={{
            fontSize: "13vw",
            fontFamily: "Anton, sans-serif",
          }}
        >
          TYPOGRAPHY DESIGN
        </h1>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="block md:hidden relative w-full h-full">

        {/* TOP TEXT */}
        <div className="absolute top-[9%] left-[6%] z-20 text-white leading-[0.9] text-right">
          <h3 className="font-medium text-[5.2vw]">
            UI/UX & Visual
          </h3>

          <h3 className="font-medium text-[5.2vw]">
            Storytelling Designer
          </h3>
        </div>

        {/* CINEMATIC */}
        <h1
          className="
            absolute
            top-[24%]
            left-1/2
            -translate-x-1/2
            text-white
            uppercase
            whitespace-nowrap
            font-normal
            tracking-[0.01em]
            leading-[0.8]
          "
          style={{
            fontSize: "20vw",
            fontFamily: "Anton, sans-serif",
          }}
        >
          CINEMATIC
        </h1>

        {/* KINETIC */}
        <h1
          className="
            absolute
            top-[42%]
            left-1/2
            -translate-x-1/2
            text-white
            uppercase
            whitespace-nowrap
            font-normal
            tracking-normal
            leading-none
          "
          style={{
            fontSize: "18vw",
            fontFamily: "Anton, sans-serif",
          }}
        >
          KINETIC
        </h1>

        {/* RIGHT TEXT */}
        <div className="absolute top-[58%] right-[7%] z-20 text-white leading-[0.9] text-left">
          <h3 className="font-medium text-[5vw]">
            Creative
          </h3>

          <h3 className="font-medium text-[5vw]">
            Direction
          </h3>
        </div>

        {/* TYPOGRAPHY */}
        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-full">
          <h1
            className="
              text-white
              uppercase
              whitespace-nowrap
              font-normal
              tracking-normal
              leading-none
              text-center
            "
            style={{
              fontSize: "14vw",
              fontFamily: "Anton, sans-serif",
            }}
          >
            TYPOGRAPHY
          </h1>

          <h1
            className="
              text-white
              uppercase
              whitespace-nowrap
              font-normal
              tracking-normal
              leading-none
              text-center
              -mt-2
            "
            style={{
              fontSize: "14vw",
              fontFamily: "Anton, sans-serif",
            }}
          >
            DESIGN
          </h1>
        </div>
      </div>

    </section>
  );
};

export default HeroTypography;