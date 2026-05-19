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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 80 },
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

  // ✅ ADDED ONLY THIS
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={footerRef} className="w-full">

      {/* SECTION */}
      <div className="bg-white px-4 md:px-8 lg:px-17 pt-10 md:pt-14">

        <div className="flex justify-between items-start">
          <span className="text-lg font-medium">(FOLLOW)</span>
          <span className="text-lg font-medium">(NAVIGATION)</span>
        </div>

        <div className="h-6 md:h-8" />
        <div className="w-full h-[1px] bg-black" />

        <div className="pt-6 md:pt-8 flex justify-between items-start">

          {/* LEFT */}
          <div className="flex flex-col ">

            <a className="footer-link" href="https://www.instagram.com/stock_designer_?igsh=cHBnNHA0amdsYWdx" target="_blank">
              INSTAGRAM
            </a>

            <a className="footer-link mt-3" href="https://www.linkedin.com/in/somanathan-g-840118272/" target="_blank">
              LINKEDIN
            </a>

            <a className="footer-link mt-3" href="https://www.behance.net/somugs" target="_blank">
              BEHANCE
            </a>

            <button
              onClick={() => setIsModalOpen(true)}
              className="footer-link mt-3 text-left"
            >
              EMAIL
            </button>
          </div>

          {/* RIGHT (FIXED NAV) */}
          <div className="flex flex-col items-end">

            <Link className="footer-link" to="/" onClick={handleNavClick}>
              HOME
            </Link>

            <Link className="footer-link mt-3" to="/work" onClick={handleNavClick}>
              WORKS
            </Link>

            <Link className="footer-link mt-3" to="/about" onClick={handleNavClick}>
              ABOUT
            </Link>

          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <button onClick={scrollToTop} className="footer-link">
            BACK TO TOP
          </button>
        </div>

        <div className="pt-12 md:pt-16 lg:pt-20" />
      </div>

      {/* MARQUEE */}
      <div className="bg-black py-6 overflow-hidden">
        <div className="marquee">
          <span>LET'S TALK</span>
          <span>LET'S TALK</span>
          <span>LET'S TALK</span>
          <span>LET'S TALK</span>
          <span>LET'S TALK</span>
          <span>LET'S TALK</span>
          <span>LET'S TALK</span>
          <span>LET'S TALK</span>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white w-full max-w-[550px] p-8">
            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">

              <h2 className="text-3xl font-medium">Let’s talk</h2>

              <input
                name="message"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="Message"
                className="border-b py-2 outline-none"
                required
              />

              <button type="submit">
                {status === 'sending...' ? "Sending..." : "Send →"}
              </button>

            </form>
          </div>
        </div>
      )}

      {/* STYLES */}
      <style>{`
        .footer-link {
          font-size: 18px;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .footer-link:hover {
          opacity: 0.5;
          transform: translateX(4px);
        }

        .marquee {
          display: flex;
          gap: 60px;
          white-space: nowrap;
          animation: scroll 12s linear infinite;
        }

        .marquee span {
          color: white;
          font-size: 70px;
          font-weight: 900;
        }

        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

    </footer>
  );
};

export default Footer;