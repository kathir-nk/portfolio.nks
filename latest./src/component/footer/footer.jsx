import React from "react";

const FooterSection = () => {
  return (
    <footer className="w-full overflow-hidden">

      {/* ================= TOP ================= */}
      <div className="bg-[#e8e6e1] px-6 md:px-16 lg:px-24 pt-14 md:pt-20 pb-20 md:pb-28">

        {/* TOP LABELS */}
        <div className="flex items-center justify-between">

          <h2 className="text-black uppercase text-[8vw] md:text-[3vw] leading-none">
            (FOLLOW)
          </h2>

          <h2 className="text-black uppercase text-[8vw] md:text-[3vw] leading-none">
            (NAVIGATION)
          </h2>
        </div>

        {/* LINE */}
        <div className="border-t border-black mt-6 md:mt-8" />

        {/* CONTENT */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 items-start">

          {/* LEFT */}
          <div className="flex flex-col gap-1">

            {["INSTAGRAM", "LINKEDIN", "BEHANCE", "EMAIL"].map((item) => (
              <a
                key={item}
                href="/"
                className="
                  text-black
                  uppercase
                  text-[7vw]
                  md:text-[2.1vw]
                  leading-[0.95]
                  hover:opacity-60
                  duration-300
                  w-fit
                "
              >
                {item}
              </a>
            ))}
          </div>

          {/* CENTER */}
          <div className="flex justify-center mt-14 md:mt-20">

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="
                text-black
                uppercase
                text-[6vw]
                md:text-[2vw]
                leading-none
                hover:opacity-60
                duration-300
              "
            >
              BACK TO TOP
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-1 md:items-end mt-14 md:mt-0">

            {["HOME", "WORKS", "ABOUT"].map((item) => (
              <a
                key={item}
                href="/"
                className="
                  text-black
                  uppercase
                  text-[7vw]
                  md:text-[2.1vw]
                  leading-[0.95]
                  hover:opacity-60
                  duration-300
                  w-fit
                "
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="bg-black overflow-hidden">

        <div className="w-full flex justify-center items-center pt-8 md:pt-10">

          <h1
            className="
              text-white
              uppercase
              whitespace-nowrap
              leading-[0.82]
              tracking-[-0.05em]
              text-center
            "
            style={{
              fontSize: "clamp(80px, 14vw, 320px)",
              fontFamily: "Anton, sans-serif",
            }}
          >
            TALK LET’S TALK LET’S
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;