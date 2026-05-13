import React from "react";

import img1 from "./../../assets/l2.png"
import img2 from "./../../assets/l3.png"
import img3 from "./../../assets/l4.png"
import img4 from "./../../assets/l5.png"

const works = [
  {
    id: "01",
    title: "FLOW",
    image: img1,
    full: true,
    tags: ["E-COMMERCE", "UI/UX", "DESIGN"],
  },
  {
    id: "02",
    title: "FLOW",
    image: img2,
    tags: ["BRANDING", "T-SHIRT", "DESIGN"],
  },
  {
    id: "03",
    title: "FLOW",
    image: img3,
    tags: ["MENU CARD", "GRAPHIC", "DESIGN"],
  },
  {
    id: "04",
    title: "FLOW",
    image: img4,
    full: true,
    tags: ["BRAND STARTEGY", "UI AND GRAPHIC", "DESIGN"],
  },
];

const OurWorks = () => {
  return (
    <section className="w-full bg-[#e9e7e3] py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-14 overflow-hidden">

      {/* TOP TITLE */}
      <div className="w-full flex justify-center">
        <h1
          className="
            uppercase
            text-black
            leading-none
            tracking-[-0.04em]
            text-center
          "
          style={{
            fontSize: "clamp(70px, 14vw, 260px)",
            fontFamily: "Anton, sans-serif",
          }}
        >
          OUR WORKS
        </h1>
      </div>

      {/* FILTER ROW */}
      <div className="mt-8 md:mt-12 border-t border-black pt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-5">

        <p className="text-black text-[14px] md:text-[18px] uppercase font-medium">
          DESIGN INSIGHTS
        </p>

        <div className="flex flex-wrap gap-3">
          {["CONCEPTUAL", "EXPRESSIVE", "IMMERSIVE"].map((item) => (
            <button
              key={item}
              className="
                bg-black
                text-white
                rounded-full
                px-4
                py-1.5
                text-[12px]
                md:text-[15px]
                uppercase
                leading-none
              "
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* WORKS */}
      <div className="mt-10 md:mt-16 flex flex-col gap-10">

        {/* FIRST FULL CARD */}
        <div className="w-full">

          <div className="relative overflow-hidden">
            <img
              src={works[0].image}
              alt=""
              className="w-full h-[260px] md:h-[520px] object-cover"
            />

            <div className="absolute inset-0 bg-black/35" />
          </div>

          <div className="bg-[#3b3b3b] px-4 md:px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div className="flex items-end gap-3">
              <h2
                className="text-white leading-none"
                style={{
                  fontSize: "clamp(45px,5vw,90px)",
                  fontFamily: "Anton, sans-serif",
                }}
              >
                01
              </h2>

              <p className="text-white text-[18px] md:text-[24px] uppercase mb-2">
                FLOW
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {works[0].tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    bg-white
                    text-black
                    rounded-full
                    px-4
                    py-1
                    text-[12px]
                    md:text-[15px]
                    uppercase
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* TWO GRID CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {works.slice(1, 3).map((work) => (
            <div key={work.id} className="w-full">

              <div className="relative overflow-hidden">
                <img
                  src={work.image}
                  alt=""
                  className="w-full h-[240px] md:h-[420px] object-cover"
                />

                <div className="absolute inset-0 bg-black/35" />
              </div>

              <div className="bg-[#3b3b3b] px-4 py-4 flex flex-col gap-4">

                <div className="flex items-end gap-3">
                  <h2
                    className="text-white leading-none"
                    style={{
                      fontSize: "clamp(45px,5vw,90px)",
                      fontFamily: "Anton, sans-serif",
                    }}
                  >
                    {work.id}
                  </h2>

                  <p className="text-white text-[18px] md:text-[24px] uppercase mb-2">
                    {work.title}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        bg-white
                        text-black
                        rounded-full
                        px-4
                        py-1
                        text-[12px]
                        md:text-[15px]
                        uppercase
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LAST FULL CARD */}
        <div className="w-full">

          <div className="relative overflow-hidden">
            <img
              src={works[3].image}
              alt=""
              className="w-full h-[260px] md:h-[520px] object-cover"
            />

            <div className="absolute inset-0 bg-black/35" />
          </div>

          <div className="bg-[#3b3b3b] px-4 md:px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div className="flex items-end gap-3">
              <h2
                className="text-white leading-none"
                style={{
                  fontSize: "clamp(45px,5vw,90px)",
                  fontFamily: "Anton, sans-serif",
                }}
              >
                04
              </h2>

              <p className="text-white text-[18px] md:text-[24px] uppercase mb-2">
                FLOW
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {works[3].tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    bg-white
                    text-black
                    rounded-full
                    px-4
                    py-1
                    text-[12px]
                    md:text-[15px]
                    uppercase
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <div className="w-full flex justify-center mt-14 md:mt-20">
        <button
          className="
            bg-black
            text-white
            rounded-full
            px-7
            py-3
            text-[14px]
            md:text-[18px]
            uppercase
            hover:scale-105
            duration-300
          "
        >
          SEE ALL WORK
        </button>
      </div>
    </section>
  );
};

export default OurWorks;