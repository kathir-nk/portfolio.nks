import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [status, setStatus] = useState('');
  const formRef = useRef();
  const footerRef = useRef();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // 🔥 ONLY DESKTOP GSAP
    if (window.innerWidth <= 768) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        {
          opacity: 0,
          y: 80
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending...');

    emailjs.sendForm(
      'service_higjgd8',
      'template_2meb85i',
      formRef.current,
      '3swp4kt98wKTTcCPt'
    )
    .then(() => {
      setStatus('success');
      setMessageText('');

      setTimeout(() => {
        setIsModalOpen(false);
        setStatus('');
      }, 2000);

    }, () => {
      setStatus('error');
    });
  };

  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer
      ref={footerRef}
      className="
        w-full
        relative
        overflow-hidden
        bg-white
      "
      style={{
        zIndex: 10,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden"
      }}
    >

      {/* ================== MAIN SECTION ================== */}
      <div
        className="
          w-full
          max-w-[1920px]
          mx-auto
          px-4
          sm:px-6
          md:px-8
          lg:px-12
          xl:px-16
          pt-10
          md:pt-14
          pb-8
        "
      >

        {/* HEADER */}
        <div className="flex justify-between items-start">
          <span className="text-sm md:text-lg font-medium text-black">
            (FOLLOW)
          </span>

          <span className="text-sm md:text-lg font-medium text-black">
            (NAVIGATION)
          </span>
        </div>

        <div className="h-4 md:h-8" />

        <div className="w-full h-[1px] bg-black" />

        {/* LINKS */}
        <div
          className="
            pt-6
            md:pt-8
            flex
            flex-col
            md:flex-row
            justify-between
            items-start
            gap-10
            md:gap-0
          "
        >

          {/* LEFT */}
          <div className="flex flex-col gap-3">

            <a
              className="footer-link"
              href="https://www.instagram.com/stock_designer_?igsh=cHBnNHA0amdsYWdx"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM
            </a>

            <a
              className="footer-link"
              href="https://www.linkedin.com/in/somanathan-g-840118272/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>

            <a
              className="footer-link"
              href="https://www.behance.net/somugs"
              target="_blank"
              rel="noopener noreferrer"
            >
              BEHANCE
            </a>

            <button
              onClick={() => setIsModalOpen(true)}
              className="footer-link text-left"
            >
              EMAIL
            </button>

          </div>

          {/* RIGHT */}
          <div
            className="
              flex
              flex-col
              items-start
              md:items-end
              gap-3
              w-full
              md:w-auto
            "
          >

            <Link
              className="footer-link"
              to="/"
              onClick={handleNavClick}
            >
              HOME
            </Link>

            <Link
              className="footer-link"
              to="/work"
              onClick={handleNavClick}
            >
              WORKS
            </Link>

            <Link
              className="footer-link"
              to="/about"
              onClick={handleNavClick}
            >
              ABOUT
            </Link>

          </div>
        </div>

        {/* BACK TO TOP */}
        <div className="mt-8 md:mt-5 flex justify-center">
          <button
            onClick={scrollToTop}
            className="footer-link"
          >
            BACK TO TOP
          </button>
        </div>

        <div className="pt-8 md:pt-16 lg:pt-20" />
      </div>

      {/* ================== MARQUEE ================== */}
      <div className="bg-black py-4 md:py-6 overflow-hidden w-full ">

        <div className="marquee-track">

          <div className="marquee-group">
            <span>LET'S TALK</span>
            <span>LET'S TALK</span>
            <span>LET'S TALK</span>
            <span>LET'S TALK</span>
          </div>

          <div className="marquee-group">
            <span>LET'S TALK</span>
            <span>LET'S TALK</span>
            <span>LET'S TALK</span>
            <span>LET'S TALK</span>
          </div>

        </div>

      </div>

      {/* ================== MODAL ================== */}
      {isModalOpen && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/60
            p-4
          "
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsModalOpen(false);
            }
          }}
        >

          <div
            className="
              bg-white
              w-full
              max-w-[550px]
              p-6
              md:p-8
              relative
            "
          >

            {/* CLOSE */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="
                absolute
                top-4
                right-4
                text-2xl
                font-bold
                hover:opacity-50
                transition-opacity
              "
            >
              ×
            </button>

            {/* FORM */}
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="flex flex-col gap-4"
            >

              <h2 className="text-2xl md:text-3xl font-medium">
                Let's talk
              </h2>

              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="
                  border-b
                  border-black
                  py-2
                  outline-none
                  text-base
                "
                required
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                className="
                  border-b
                  border-black
                  py-2
                  outline-none
                  text-base
                "
                required
              />

              <textarea
                name="message"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="Message"
                rows={4}
                className="
                  border-b
                  border-black
                  py-2
                  outline-none
                  text-base
                  resize-none
                "
                required
              />

              <button
                type="submit"
                className="
                  mt-2
                  py-3
                  px-6
                  bg-black
                  text-white
                  font-medium
                  hover:bg-gray-800
                  transition-colors
                "
              >
                {status === 'sending...' ? "Sending..." : "Send →"}
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-sm">
                  Message sent successfully!
                </p>
              )}

              {status === 'error' && (
                <p className="text-red-600 text-sm">
                  Failed to send. Try again.
                </p>
              )}

            </form>
          </div>
        </div>
      )}

      {/* ================== STYLES ================== */}
      <style>{`
        * {
          box-sizing: border-box;
        }

        .footer-link {
          font-size: clamp(15px, 1vw, 18px);
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
          color: black;
          text-decoration: none;
          width: fit-content;
          line-height: 1.2;
        }

        .footer-link:hover {
          opacity: 0.5;
          transform: translateX(4px);
        }

        .marquee-track {
          width: max-content;
          display: flex;
          align-items: center;
          animation: marqueeMove 18s linear infinite;
        }

        .marquee-group {
          display: flex;
          align-items: center;
          gap: 40px;
          padding-right: 40px;
          flex-shrink: 0;
        }

        .marquee-group span {
          color: white;
          font-size: clamp(78px, 15vw, 92px);
          font-weight: 900;
          line-height: 1;
          white-space: nowrap;
          flex-shrink: 0;
        }

        @keyframes marqueeMove {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        /* 🔥 DEPLOY FIX */
        @media screen and (max-width: 768px) {

          .footer-link:hover {
            transform: none;
          }

          .marquee-group {
            gap: 24px;
            padding-right: 24px;
          }

          .marquee-group span {
            font-size: 38px;
          }
        }
      `}</style>

    </footer>
  );
};

export default Footer;