import React from 'react';
import aboutImage from './../../assets/l6.png';

const AboutSection = () => {
  const buttonClass =
    "w-[160px] h-12 flex items-center justify-center bg-black text-white rounded-full uppercase text-center";

  return (
    <section className="w-full relative">

      {/* ========================================================================= */}
      {/* 📱 MOBILE VIEW */}
      {/* ========================================================================= */}
      <div className="block md:hidden bg-black w-full pt-28">

        <div className="px-6 pt-12 pb-10 flex flex-col items-center">
          <h2
            className="text-white uppercase text-center w-full"
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "clamp(54px, 15vw, 75px)",
              fontWeight: 400,
              lineHeight: "95%",
              letterSpacing: "0.02em"
            }}
          >
            ABOUT<br />SOMANATHAN
          </h2>
        </div>

        <div className="px-6 pt-6 pb-12 flex flex-col items-center">

          <div className="w-full flex justify-between items-center px-1 mb-3">
            <span className="text-white uppercase font-medium"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", letterSpacing: "0.1em" }}>
              WHO'S THIS?
            </span>
            <span className="text-white uppercase font-medium"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", letterSpacing: "0.1em" }}>
              HELLO, HI, HEY
            </span>
          </div>

          <div
            className="w-full bg-neutral-900 p-2 shadow-2xl"
            style={{ height: "clamp(340px, 110vw, 440px)" }}
          >
            <img
              src={aboutImage}
              alt="Somanathan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-white px-6 pt-16 pb-16">
          <div className="flex justify-center gap-4">

            <button
              onClick={() => window.open("/resume", "_self")}
              className={buttonClass}
            >
              RESUME
            </button>

            <a
              href="https://www.linkedin.com/in/somanathan-g-840118272/"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass}
            >
              LINKEDIN
            </a>

          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 🖥️ DESKTOP VIEW */}
      {/* ========================================================================= */}
      <div className="hidden md:block w-full relative">

        {/* ✅ ONLY GAP FIXED HERE */}
        <div className="bg-black px-6 md:px-12 lg:px-16 pt-28 md:pt-36 lg:pt-30 pb-90 flex flex-col items-center">
          <h2
            className="text-white uppercase text-center w-full"
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "clamp(60px, 12vw, 140px)",
              fontWeight: 400,
              lineHeight: "100%",
              letterSpacing: "0.02em"
            }}
          >
            ABOUT SOMANATHAN
          </h2>
        </div>

        {/* IMAGE FLOAT (UNCHANGED) */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2"
          style={{
            bottom: "clamp(80px, 15vw, 120px)",
            width: "clamp(280px, 35vw, 450px)",
            height: "clamp(380px, 48vw, 580px)",
            zIndex: 10
          }}
        >
          <div className="absolute left-2 text-white uppercase font-medium"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", top: "-30px" }}>
            WHO'S THIS?
          </div>

          <div className="absolute right-2 text-white uppercase font-medium"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", top: "-30px" }}>
            HELLO, HI, HEY
          </div>

          <div className="w-full h-full p-2 md:p-3">
            <img
              src={aboutImage}
              alt="Somanathan"
              className="w-full h-full object-cover shadow-xl"
            />
          </div>
        </div>

        {/* BUTTONS (UNCHANGED) */}
        <div className="bg-white px-6 md:px-12 lg:px-16 pt-48 md:pt-64 lg:pt-80 pb-12 md:pb-16">
          <div className="flex justify-center gap-4 md:gap-6">

            <button
              onClick={() => window.open("/resume", "_self")}
              className={buttonClass}
            >
              RESUME
            </button>

            <a
              href="https://www.linkedin.com/in/somanathan-g-840118272/"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass}
            >
              LINKEDIN
            </a>

          </div>
        </div>

      </div>

    </section>
  );
};

export default AboutSection;