// src/component/header/header.jsx

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "WORKS", href: "/works" },
  { name: "ABOUT", href: "/about" },
];

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  // BODY SCROLL LOCK
  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "auto";
  }, [mobileMenu]);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="w-full border-[3px] border-black bg-[#e9e7e3]">

        <div
          className="
            mx-auto
            flex
            h-[90px]
            sm:h-[100px]
            md:h-[110px]
            w-full
            max-w-[1920px]
            items-center
            justify-between
            px-4
            sm:px-6
            md:px-10
            lg:px-16
            xl:px-24
          "
        >

          {/* ================= LEFT ================= */}
          <div className="flex items-center gap-4 sm:gap-8 md:gap-10">

            {/* BENGALURU */}
            <div className="flex items-center gap-2">

              <span
                className="
                  text-[10px]
                  sm:text-[12px]
                  md:text-[14px]
                  lg:text-[16px]
                  font-black
                "
              >
                ●
              </span>

              <h1
                className="
                  text-[16px]
                  sm:text-[20px]
                  md:text-[26px]
                  lg:text-[36px]
                  font-black
                  tracking-[-0.03em]
                "
              >
                BENGALURU
              </h1>
            </div>

            {/* INDIA */}
            <div className="flex items-center gap-2">

              <span
                className="
                  text-[10px]
                  sm:text-[12px]
                  md:text-[14px]
                  lg:text-[16px]
                  font-black
                "
              >
                ●
              </span>

              <h1
                className="
                  text-[16px]
                  sm:text-[20px]
                  md:text-[26px]
                  lg:text-[36px]
                  font-black
                  tracking-[-0.03em]
                "
              >
                INDIA
              </h1>
            </div>
          </div>

          {/* ================= DESKTOP NAV ================= */}
          <nav
            className="
              hidden
              md:flex
              items-center
              gap-6
              lg:gap-10
              xl:gap-14
            "
          >
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="
                  relative
                  text-[14px]
                  lg:text-[22px]
                  xl:text-[30px]
                  font-black
                  tracking-[-0.03em]
                  transition-all
                  duration-300
                  hover:opacity-60
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
              size={34}
              strokeWidth={2.5}
              className="text-black"
            />
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          fixed
          inset-0
          z-50
          bg-[#e9e7e3]
          transition-all
          duration-500
          ${
            mobileMenu
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }
        `}
      >

        {/* ================= TOP ================= */}
        <div
          className="
            flex
            h-[90px]
            items-center
            justify-between
            border-b-[3px]
            border-black
            px-6
          "
        >

          {/* LEFT */}
          <div className="flex items-center gap-5">

            {/* BENGALURU */}
            <div className="flex items-center gap-2">

              <span className="text-[10px] font-black">
                ●
              </span>

              <h1 className="text-[18px] font-black">
                BENGALURU
              </h1>
            </div>

            {/* INDIA */}
            <div className="flex items-center gap-2">

              <span className="text-[10px] font-black">
                ●
              </span>

              <h1 className="text-[18px] font-black">
                INDIA
              </h1>
            </div>
          </div>

          {/* CLOSE BUTTON */}
          <button onClick={() => setMobileMenu(false)}>
            <X
              size={34}
              strokeWidth={2.5}
            />
          </button>
        </div>

        {/* ================= MOBILE NAV ================= */}
        <div
          className="
            flex
            h-[calc(100vh-90px)]
            flex-col
            items-center
            justify-center
            gap-10
          "
        >

          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setMobileMenu(false)}
              className="
                text-[42px]
                font-black
                tracking-[-0.05em]
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