import React from "react";

const breakItems = [
  "F2H (FRAMERS TO HOME)",
  "BEE BIKES",
  "ARROW",
  "LENSKART (REDESIGN)",
  "PIXLA LOGO",
  "HEALTH CARE LOGO",
];

const BreakSection = () => {
  return (
    <section className="w-full bg-black text-white overflow-hidden">

      {/* TOP SPACE */}
      <div className="h-[90px] md:h-[130px]" />

      {/* TITLE */}
      <div className="w-full flex justify-center">
        <h1
          className="
            uppercase
            leading-none
            tracking-[-0.05em]
            text-center
          "
          style={{
            fontSize: "clamp(90px, 16vw, 320px)",
            fontFamily: "Anton, sans-serif",
          }}
        >
          BREAK
        </h1>
      </div>

      {/* LINE + LABELS */}
      <div className="mt-10 md:mt-14 px-5 md:px-16">

        <div className="border-t border-white/40 pt-3 flex items-center justify-between gap-4">

          <p className="uppercase text-[11px] md:text-[18px] text-white/60 font-semibold">
            SHORT, EXPERIMENTAL DESIGN
          </p>

          <div
            className="
              bg-white
              text-black
              rounded-full
              px-4
              py-1
              uppercase
              whitespace-nowrap
              text-[10px]
              md:text-[16px]
              leading-none
            "
          >
            SMALL SCALE VISUAL
          </div>

        </div>
      </div>

      {/* LIST */}
      <div className="mt-14 md:mt-20 flex flex-col items-center px-4 md:px-10 pb-20 md:pb-32">

        {breakItems.map((item, index) => (
          <div
            key={index}
            className="
              w-full
              flex
              items-center
              justify-center
              gap-3
              md:gap-5
              leading-none
            "
          >

            {/* NUMBER */}
            <span
              className="
                text-white
                leading-none
                mt-2
              "
              style={{
                fontSize: "clamp(20px, 2vw, 42px)",
                fontFamily: "Anton, sans-serif",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* TITLE */}
            <h2
              className="
                uppercase
                text-center
                leading-[0.9]
                tracking-[-0.04em]
              "
              style={{
                fontSize: "clamp(42px, 6vw, 130px)",
                fontFamily: "Anton, sans-serif",
              }}
            >
              {item}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BreakSection;