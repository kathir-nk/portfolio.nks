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
    // Only run GSAP animation on desktop (above 768px)
    // Mobile: skip animation to prevent layout issues
    if (window.innerWidth <= 768) return;

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

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer 
      ref={footerRef} 
      className="w-full relative"
      style={{ 
        zIndex: 10,
        position: 'relative'
      }}
    >

      {/* MAIN FOOTER SECTION */}
      <div className="bg-white px-4 sm:px-6 md:px-8 lg:px-16 pt-10 md:pt-14 pb-8">

        {/* Header Row */}
        <div className="flex justify-between items-start">
          <span className="text-sm md:text-lg font-medium">(FOLLOW)</span>
          <span className="text-sm md:text-lg font-medium">(NAVIGATION)</span>
        </div>

        <div className="h-4 md:h-8" />
        <div className="w-full h-[1px] bg-black" />

        {/* Links Row */}
        <div className="pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-start md:items-start gap-8 md:gap-0">

          {/* LEFT - Social Links */}
          <div className="flex flex-col gap-3">
            <a 
              className="footer-link text-base md:text-lg" 
              href="https://www.instagram.com/stock_designer_?igsh=cHBnNHA0amdsYWdx" 
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM
            </a>

            <a 
              className="footer-link text-base md:text-lg" 
              href="https://www.linkedin.com/in/somanathan-g-840118272/" 
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>

            <a 
              className="footer-link text-base md:text-lg" 
              href="https://www.behance.net/somugs" 
              target="_blank"
              rel="noopener noreferrer"
            >
              BEHANCE
            </a>

            <button
              onClick={() => setIsModalOpen(true)}
              className="footer-link text-left text-base md:text-lg"
            >
              EMAIL
            </button>
          </div>

          {/* RIGHT - Navigation */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <Link 
              className="footer-link text-base md:text-lg" 
              to="/" 
              onClick={handleNavClick}
            >
              HOME
            </Link>

            <Link 
              className="footer-link text-base md:text-lg" 
              to="/work" 
              onClick={handleNavClick}
            >
              WORKS
            </Link>

            <Link 
              className="footer-link text-base md:text-lg" 
              to="/about" 
              onClick={handleNavClick}
            >
              ABOUT
            </Link>
          </div>
        </div>

        {/* Back to Top */}
        <div className="mt-8 md:mt-5 flex justify-center">
          <button 
            onClick={scrollToTop} 
            className="footer-link text-sm md:text-base"
          >
            BACK TO TOP
          </button>
        </div>

        <div className="pt-8 md:pt-16 lg:pt-20" />
      </div>

      {/* MARQUEE */}
      <div className="bg-black py-4 md:py-6 overflow-hidden">
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

      {/* EMAIL MODAL */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
        >
          <div className="bg-white w-full max-w-[550px] p-6 md:p-8 relative">
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-2xl font-bold hover:opacity-50 transition-opacity"
            >
              ×
            </button>

            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-medium">Let's talk</h2>

              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="border-b border-black py-2 outline-none text-base"
                required
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                className="border-b border-black py-2 outline-none text-base"
                required
              />

              <textarea
                name="message"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="Message"
                rows={4}
                className="border-b border-black py-2 outline-none text-base resize-none"
                required
              />

              <button 
                type="submit"
                className="mt-2 py-3 px-6 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
              >
                {status === 'sending...' ? "Sending..." : "Send →"}
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-sm">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-sm">Failed to send. Try again.</p>
              )}
            </form>
          </div>
        </div>
      )}

      {/* STYLES */}
      <style>{`
        .footer-link {
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
          color: black;
          text-decoration: none;
        }

        .footer-link:hover {
          opacity: 0.5;
          transform: translateX(4px);
        }

        .marquee {
          display: flex;
          gap: 40px;
          white-space: nowrap;
          animation: scroll 12s linear infinite;
        }

        .marquee span {
          color: white;
          font-size: clamp(36px, 8vw, 70px);
          font-weight: 900;
          flex-shrink: 0;
        }

        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        /* Mobile-specific fixes */
        @media (max-width: 768px) {
          .marquee {
            gap: 24px;
          }

          .marquee span {
            font-size: 36px;
          }
        }
      `}</style>

    </footer>
  );
};

export default Footer;