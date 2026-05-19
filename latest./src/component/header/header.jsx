// src/component/header/header.jsx

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "WORKS", href: "/work" }, // Route mapping locked to match App.jsx /work
  { name: "ABOUT", href: "/about" },
];

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const location = useLocation();

  const isAboutPage = location.pathname === "/about";
  const isWorkPage = location.pathname === "/work";

  const isDarkModePage = isAboutPage || isWorkPage;

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "auto";
  }, [mobileMenu]);

  // 🔥 AUTO HIDE HEADER ON SCROLL
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`
          fixed
          top-0
          left-0
          z-[9999]
          w-full
          transition-all
          duration-500
          ${showHeader ? "translate-y-0" : "-translate-y-full"}
          ${isDarkModePage ? "bg-black text-white" : "bg-white text-black"}
        `}
      >
        <div
          className="
            mx-auto
            flex
            h-[72px]
            w-full
            max-w-[1920px]
            items-center
            justify-between
            px-4
            md:px-8
            lg:px-12
          "
        >
          {/* ================= LEFT (BENGALURU ● INDIA) ================= */}
          <div className="flex items-center gap-5 md:gap-8">

            {/* BENGALURU */}
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="text-[8px] sm:text-[10px] md:text-[12px] font-medium">
                ●
              </span>
              <h1
                className="
                  text-[14px]
                  sm:text-[18px]
                  md:text-[20px]
                  lg:text-[22px]
                  font-medium
                  tracking-wide
                  leading-none
                "
              >
                BENGALURU
              </h1>
            </div>

            {/* INDIA */}
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="text-[8px] sm:text-[10px] md:text-[12px] font-medium">
                ●
              </span>
              <h1
                className="
                  text-[14px]
                  sm:text-[18px]
                  md:text-[20px]
                  lg:text-[22px]
                  font-medium
                  tracking-wide
                  leading-none
                "
              >
                INDIA
              </h1>
            </div>
          </div>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10 xl:gap-14">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="
                  text-[14px]
                  md:text-[16px]
                  lg:text-[20px]
                  xl:text-[22px]
                  font-medium
                  tracking-wide
                  transition-all
                  duration-300
                  hover:opacity-60
                  leading-none
                "
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setMobileMenu(true)}
            className="flex md:hidden"
          >
            <Menu
              size={28}
              strokeWidth={2}
              className={isDarkModePage ? "text-white" : "text-black"}
            />
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU DRAWER ================= */}
      <div
        className={`
          fixed
          inset-0
          z-[10000]
          transition-all
          duration-500
          ${isDarkModePage ? "bg-black text-white" : "bg-white text-black"}
          ${mobileMenu ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
      >
        {/* ================= MOBILE MENU TOP HEADER ================= */}
        <div className="flex h-[72px] items-center justify-between px-5">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-medium">●</span>
              <h1 className="text-[14px] font-medium">BENGALURU</h1>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-medium">●</span>
              <h1 className="text-[14px] font-medium">INDIA</h1>
            </div>
          </div>

          <button onClick={() => setMobileMenu(false)}>
            <X
              size={28}
              strokeWidth={2}
              className={isDarkModePage ? "text-white" : "text-black"}
            />
          </button>
        </div>

        {/* ================= MOBILE NAV LINKS ================= */}
        <div className="flex h-[calc(100vh-72px)] flex-col items-center justify-center gap-10">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setMobileMenu(false)}
              className="
                text-[36px]
                font-medium
                tracking-wide
                hover:opacity-60
                transition-all
                duration-300
              "
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}