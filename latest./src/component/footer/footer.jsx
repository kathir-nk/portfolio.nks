import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser'; 

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [status, setStatus] = useState(''); // 'sending...', 'success', 'error'
  const formRef = useRef();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Email.js Submit Handler
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending...');

    // 🛠️ Unga EmailJS credentials pacha-va inject panniyaachu da
    emailjs.sendForm(
      'service_higjgd8', 
      'template_2meb85i', 
      formRef.current, 
      '3swp4kt98wKTTcCPt'
    )
    .then((result) => {
        setStatus('success');
        setMessageText(''); // Reset text field after success
        setTimeout(() => {
          setIsModalOpen(false);
          setStatus('');
        }, 2000);
    }, (error) => {
        setStatus('error');
        console.error(error.text);
    });
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

            {/* Email link triggers modal setup */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-base md:text-xl lg:text-2xl font-medium text-black hover:opacity-60 text-left"
            >
              EMAIL
            </button>
          </div>

          {/* RIGHT NAV LINKS */}
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

      {/* ========================================================================= */}
      {/* 🪟 CONTACT MODAL POPUP (Screenshot Pixel Match)                           */}
      {/* ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          
          {/* Modal Container Body */}
          <div className="bg-white w-full max-w-[550px] p-8 md:p-12 relative rounded-sm shadow-2xl flex flex-col justify-between min-h-[580px]">
            
            {/* CLOSE BUTTON (X) */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-black font-light text-2xl hover:opacity-60 transition-opacity"
            >
              ✕
            </button>

            {/* FORM CONTAINER */}
            <form ref={formRef} onSubmit={sendEmail} className="w-full flex-1 flex flex-col justify-between">
              
              {/* TOP HEADER TITLE */}
              <div className="mb-4">
                <h2 
                  className="text-black font-medium tracking-tight leading-[110%]"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "clamp(36px, 8vw, 52px)",
                  }}
                >
                  Let’s start a<br />conversation
                </h2>
              </div>

              {/* INPUT FIELDS STACK (Screenshot Exact UI Layout) */}
              <div className="flex flex-col gap-5 flex-1 justify-center">
                
                {/* 🔒 Email Label (Not Input anymore - Static Text View) */}
                <div 
                  className="w-full text-neutral-400 font-normal py-2 select-all"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "18px" }}
                >
                  somusomanathan1074@gmail.com
                </div>

                {/* 🔒 Phone Label (Not Input anymore - Static Text View) */}
                <div 
                  className="w-full text-neutral-400 font-normal py-2 select-all"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "18px" }}
                >
                  8270710850
                </div>

                {/* 🔓 Message Input Field (The only editable area da) */}
                <input 
                  type="text"
                  name="message"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Message"
                  required
                  autoFocus
                  className="w-full text-black placeholder-neutral-300 font-normal py-2 focus:outline-none border-b border-neutral-200 focus:border-black transition-colors"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "18px" }}
                />

              </div>

              {/* SUBMIT ROW */}
              <div className="mt-8 pt-4 relative">
                
                {/* Status Notice Tooltip */}
                {status === 'sending...' && <p className="text-xs text-yellow-600 font-medium mb-1 animate-pulse">Sending message...</p>}
                {status === 'success' && <p className="text-xs text-green-600 font-medium mb-1">✓ Message sent successfully da!</p>}
                {status === 'error' && <p className="text-xs text-red-600 font-medium mb-1">✕ Failed to send. Try again.</p>}

                <button 
                  type="submit"
                  disabled={status === 'sending...'}
                  className="w-full text-left text-black font-medium text-xl py-3 border-b-2 border-black tracking-tight flex justify-between items-center hover:opacity-70 transition-opacity disabled:opacity-50"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <span>Send</span>
                  <span className="text-sm font-light">→</span>
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

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