import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full">
      {/* ================== BEIGE SECTION ================== */}
      <div className="bg-white px-4 md:px-8 lg:px-12 pt-10 md:pt-14">

        {/* === PART 1 === */}
        <div className="flex justify-between items-start">
          <span className="text-base md:text-lg font-medium tracking-wide text-black">
            (FOLLOW)
          </span>
          <span className="text-base md:text-lg font-medium tracking-wide text-black">
            (NAVIGATION)
          </span>
        </div>

        <div className="h-6 md:h-8" />
        <div className="w-full h-[1px] bg-black" />

        {/* === PART 2: LINKS === */}
        <div className="pt-6 md:pt-8 flex justify-between items-start">

          {/* LEFT */}
          <div className="flex flex-col">
            <a href="https://www.instagram.com/stock_designer_?igsh=cHBnNHA0amdsYWdx" target="_blank" rel="noopener noreferrer"
              className="text-base md:text-xl lg:text-2xl font-medium text-black hover:opacity-60">
              INSTAGRAM
            </a>

            <div className="h-3 md:h-4" />

            <a href="https://www.linkedin.com/in/somanathan-g-840118272/" target="_blank" rel="noopener noreferrer"
              className="text-base md:text-xl lg:text-2xl font-medium text-black hover:opacity-60">
              LINKEDIN
            </a>

            <div className="h-3 md:h-4" />

            <a href="https://www.behance.net/somugs" target="_blank" rel="noopener noreferrer"
              className="text-base md:text-xl lg:text-2xl font-medium text-black hover:opacity-60">
              BEHANCE
            </a>

            <div className="h-3 md:h-4" />

            <a
  href="mailto:somanathan@gmail.com?subject=Project%20Inquiry"
  className="text-base md:text-xl lg:text-2xl font-medium text-black hover:opacity-60"
>
  EMAIL
</a>
          </div>

          {/* RIGHT NAV LINKS (FIXED CLICK BEHAVIOR) */}
          <div className="flex flex-col items-end">
            <a href="/" className="text-base md:text-xl lg:text-2xl font-medium text-black hover:opacity-60">
              HOME
            </a>

            <div className="h-3 md:h-4" />

            <a href="/work" className="text-base md:text-xl lg:text-2xl font-medium text-black hover:opacity-60">
              WORKS
            </a>

            <div className="h-3 md:h-4" />

            <a href="/about" className="text-base md:text-xl lg:text-2xl font-medium text-black hover:opacity-60">
              ABOUT
            </a>
          </div>
        </div>

        {/* BACK TO TOP */}
        <div className="mt-3 md:mt-4 flex justify-center">
          <button
            onClick={scrollToTop}
            className="text-base md:text-xl lg:text-2xl font-medium text-black hover:opacity-60"
          >
            BACK TO TOP
          </button>
        </div>

        <div className="pt-12 md:pt-16 lg:pt-20" />
      </div>

      {/* ================== MARQUEE ================== */}
      <div className="bg-black py-6 md:py-8 overflow-hidden">
        <div className="marquee-container flex whitespace-nowrap">
          <div className="marquee-content flex items-center">
            <span className="text-white text-6xl md:text-8xl lg:text-9xl font-black mx-4">
              LET'S TALK
            </span>
            <span className="text-white text-6xl md:text-8xl lg:text-9xl font-black mx-4">
              LET'S TALK
            </span>
          </div>

          <div className="marquee-content flex items-center" aria-hidden="true">
            <span className="text-white text-6xl md:text-8xl lg:text-9xl font-black mx-4">
              LET'S TALK
            </span>
            <span className="text-white text-6xl md:text-8xl lg:text-9xl font-black mx-4">
              LET'S TALK
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .marquee-container {
          display: flex;
          overflow: hidden;
        }
        .marquee-content {
          flex-shrink: 0;
          min-width: 100%;
          animation: scroll 20s linear infinite;
        }
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;