// src/component/landing/WorkSlider.jsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";

// SWIPER CSS
import "swiper/css";
import "swiper/css/navigation";

// IMAGE IMPORTS
import img1 from "./../../assets/l2.png";
import img2 from "./../../assets/l3.png";
import img3 from "./../../assets/l4.png";
import img4 from "./../../assets/l5.png";
import img5 from "./../../assets/l12.png";
import img6 from "./../../assets/l13.png";

const totalProjects = [
  { id: "01", title: "F2H GROCERY", image: img1, link: "https://www.behance.net/gallery/205743689/F2H-Grocery-app-UXUI-Case-Study" },
  { id: "02", title: "T-SHIRT PRINTING", image: img2, link: "https://www.behance.net/gallery/246941867/T-Shirt-Print-Design" },
  { id: "03", title: "COCOMAPLE", image: img3, link: "https://www.behance.net/gallery/240694587/COCOMAPLE-RESTSURANT-BRAND-IDENTITY" },
  { id: "04", title: "ZHAGARAM CAFE", image: img4, link: "https://www.behance.net/gallery/243882769/Zhagaram-Cafe" },
  { id: "05", title: "SOUL", image: img5, link: "https://www.behance.net/gallery/219778855/SOUL-ORGANIC-CANDLES" },
  { id: "06", title: "ARROW", image: img6, link: "https://www.behance.net/gallery/207642971/ARROW-Trading-app-UIUX-Case-study" },
];

export default function WorkSlider() {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white mt-20 md:mt-32 lg:mt-40 pt-12 md:pt-20 pb-12 md:pb-16 select-none">

      {/* ================================================================================= */}
      {/* 💻 DESKTOP VIEW */}
      {/* ================================================================================= */}
      <div className="hidden md:block relative z-10 w-full">

        <Swiper
          modules={[Navigation, Mousewheel]}
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          slidesPerView={1.3}
          spaceBetween={0}
          speed={900}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
          }}
          navigation={{
            prevEl: ".desktop-prev-btn",
            nextEl: ".desktop-next-btn",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full"
        >
          {totalProjects.map((project) => (
            <SwiperSlide key={`desktop-${project.id}`} className="relative">

              {({ isActive }) => (
                <div className="flex flex-col items-center min-h-[580px]">

                  {/* TOP BAR */}
                  <div className="w-full h-[60px] flex items-center justify-center bg-black/40 backdrop-blur-md">
                    <span
                      className={`uppercase tracking-[0.18em] text-[13px] transition-all duration-700 ${
                        isActive
                          ? "opacity-100 scale-100 text-white"
                          : "opacity-0 scale-90"
                      }`}
                    >
                      {project.title}
                    </span>
                  </div>

                  {/* IMAGE AREA (CLICK ADDED ONLY HERE) */}
                  <div className="flex-1 w-full flex items-center justify-center p-10">

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-full max-w-[520px] aspect-[16/11] block"
                    >

                      <div
                        className={`relative w-full h-full transition-all duration-700 ease-out ${
                          isActive
                            ? "scale-100 opacity-100"
                            : "scale-[0.82] opacity-30 blur-[1px]"
                        }`}
                      >
                        {/* CORNER LINES */}
                        {isActive && (
                          <div className="absolute inset-0 z-20 pointer-events-none">
                            <div className="absolute top-[-10px] left-[-10px] w-5 h-5 border-t-2 border-l-2 border-white" />
                            <div className="absolute top-[-10px] right-[-10px] w-5 h-5 border-t-2 border-r-2 border-white" />
                            <div className="absolute bottom-[-10px] left-[-10px] w-5 h-5 border-b-2 border-l-2 border-white" />
                            <div className="absolute bottom-[-10px] right-[-10px] w-5 h-5 border-b-2 border-r-2 border-white" />
                          </div>
                        )}

                        {/* IMAGE */}
                        <div className="w-full h-full overflow-hidden shadow-2xl">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          />
                        </div>
                      </div>
                    </a>

                  </div>

                  {/* BOTTOM BLOCK */}
                  <div className="w-full h-[120px] bg-black/20 backdrop-blur-sm" />
                </div>
              )}
            </SwiperSlide>
          ))}

          {/* NAV */}
          <div className="absolute top-0 left-0 right-0 z-50 h-[60px] flex items-center justify-between px-8 lg:px-16 pointer-events-none">
            <button className="desktop-prev-btn pointer-events-auto uppercase tracking-[0.2em] text-[12px] text-white/40 hover:text-white transition-all duration-300">
              Prev
            </button>
            <button className="desktop-next-btn pointer-events-auto uppercase tracking-[0.2em] text-[12px] text-white/40 hover:text-white transition-all duration-300">
              Next
            </button>
          </div>

        </Swiper>
      </div>

      {/* ================================================================================= */}
      {/* 📱 MOBILE VIEW */}
      {/* ================================================================================= */}
      <div className="block md:hidden relative z-10 w-full min-h-[440px] overflow-hidden">

        <Swiper
          modules={[Navigation, Mousewheel]}
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          slidesPerView={1}
          spaceBetween={0}
          speed={800}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
          }}
          navigation={{
            prevEl: ".mobile-prev-btn",
            nextEl: ".mobile-next-btn",
          }}
          className="w-full h-full"
        >
          {totalProjects.map((project) => (
            <SwiperSlide key={`mobile-${project.id}`}>

              {({ isActive }) => (
                <div className="w-full min-h-[440px] flex flex-col items-center bg-black">

                  {/* TITLE */}
                  <div className="w-full h-[50px] flex items-center justify-center px-8">
                    <span
                      className={`uppercase tracking-[0.15em] text-[12px] transition-all duration-500 ${
                        isActive
                          ? "opacity-100 scale-100 text-white"
                          : "opacity-50 scale-90 text-white/40"
                      }`}
                    >
                      {project.title}
                    </span>
                  </div>

                  {/* IMAGE AREA (CLICK ADDED ONLY HERE) */}
                  <div className="relative flex-1 w-full flex items-center justify-center p-6 overflow-hidden">

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-full max-w-[280px] aspect-[4/3] block"
                    >

                      <div
                        className={`w-full h-full transition-all duration-700 ${
                          isActive
                            ? "scale-100"
                            : "scale-90 opacity-50"
                        }`}
                      >
                        {/* IMAGE */}
                        <div className="w-full h-full overflow-hidden shadow-2xl">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                    </a>

                  </div>

                  <div className="w-full h-[60px]" />
                </div>
              )}
            </SwiperSlide>
          ))}

          {/* MOBILE NAV */}
          <div className="absolute top-0 left-0 right-0 h-[50px] z-[60] flex items-center justify-between px-6 pointer-events-none">
            <button className="mobile-prev-btn pointer-events-auto uppercase tracking-[0.15em] text-[11px] font-bold text-white/40 hover:text-white transition-all duration-300">
              Prev
            </button>
            <button className="mobile-next-btn pointer-events-auto uppercase tracking-[0.15em] text-[11px] font-bold text-white/40 hover:text-white transition-all duration-300">
              Next
            </button>
          </div>

        </Swiper>
      </div>

      {/* GLOBAL FIX */}
      <style>{`
        .swiper {
          width: 100%;
          height: 100%;
          overflow: visible;
        }
        .swiper-wrapper {
          display: flex;
          align-items: stretch;
        }
        .swiper-slide {
          overflow: visible;
        }
      `}</style>

    </section>
  );
}