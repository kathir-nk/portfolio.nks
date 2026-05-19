import React from 'react';
import figmaIcon from './../../assets/l9.png'
import psIcon from './../../assets/l8.png'
import aiIcon from './../../assets/l7.png'
import notionIcon from './../../assets/l10.png'
import geminiIcon from './../../assets/l11.png'

const topLabels = [
  { left: "ADVOCATE OF CLEAN", right: "DESIGN" },
  { left: "UI/UX + GRAPHIC", right: "DESIGN" },
  { left: "COFFEE + CREATIVITY", right: "DESIGN" }
];

const tools = [
  { name: "Figma", icon: figmaIcon },
  { name: "Photoshop", icon: psIcon },
  { name: "Illustrator", icon: aiIcon },
  { name: "Notion", icon: notionIcon },
  { name: "Gemini", icon: geminiIcon }
];

const AboutTextSection = () => {
  // Desktop text styling (Pure & Crisp)
  const paragraphStyle = {
    fontFamily: "Inter, sans-serif",
    fontSize: "clamp(16px, 2.5vw, 30px)",
    fontWeight: 400,
    lineHeight: "160%",
    letterSpacing: "0.02em",
    color: "#000000"
  };

  // 📱 Mobile text styling (Now using a slightly scaled down size to handle full content gracefully)
  const mobileParagraphStyle = {
    fontFamily: "Inter, sans-serif",
    fontSize: "15px",
    fontWeight: 400,
    lineHeight: "160%",
    letterSpacing: "0.02em",
    color: "#000000"
  };

  return (
    <section className="w-full bg-white">

      {/* ========================================================================= */}
      {/* 📱 MOBILE VIEW ONLY (Hidden on Desktop)                                  */}
      {/* ========================================================================= */}
      <div className="block md:hidden px-4 py-10">

        {/* ========== TOP LABELS ROW (Asymmetric Alignment Locked) ========== */}
        <div className="flex justify-between items-start gap-1 mb-12 w-full">
          
          {/* 1st Item: Left Align */}
          <div className="flex flex-col items-start flex-1">
            <span 
              className="text-black uppercase text-left block tracking-tight font-semibold"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", lineHeight: "130%" }}
            >
              {topLabels[0].left}
            </span>
            <span 
              className="text-black uppercase text-left block tracking-tight font-semibold"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", lineHeight: "130%" }}
            >
              {topLabels[0].right}
            </span>
          </div>

          {/* 2nd Item: Center Align */}
          <div className="flex flex-col items-center flex-1">
            <span 
              className="text-black uppercase text-center block tracking-tight font-semibold"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", lineHeight: "130%" }}
            >
              {topLabels[1].left}
            </span>
            <span 
              className="text-black uppercase text-center block tracking-tight font-semibold"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", lineHeight: "130%" }}
            >
              {topLabels[1].right}
            </span>
          </div>

          {/* 3rd Item: Right Align */}
          <div className="flex flex-col items-end flex-1">
            <span 
              className="text-black uppercase text-right block tracking-tight font-semibold"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", lineHeight: "130%" }}
            >
              {topLabels[2].left}
            </span>
            <span 
              className="text-black uppercase text-right block tracking-tight font-semibold"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", lineHeight: "130%" }}
            >
              {topLabels[2].right}
            </span>
          </div>

        </div>

        {/* ========== MAIN TEXT (Full Content Restored 100%) ========== */}
        <div className="text-center mb-12 px-1">
          {/* Paragraph 1 */}
          <p className="mb-8" style={mobileParagraphStyle}>
            HEY HI, I'M <span className="font-bold">SOMANATHAN G</span> - A <span className="font-bold">UI/UX & GRAPHIC DESIGNER</span>, CURRENTLY I'M STAYING <span className="font-bold">BANGALURU, INDIA</span>, WITH <span className="font-bold">2+ YEARS OF EXPERIENCE</span> IN <span className="font-bold">UI/UX DESIGN, BRANDING, WEB DESIGN, AND VISUAL STORYTELLING</span>.
          </p>

          {/* Paragraph 2 */}
          <p className="mb-8" style={mobileParagraphStyle}>
            I CREATE <span className="font-bold">CLEAN, MODERN, AND USER-CENTERED DIGITAL EXPERIENCES</span> THAT COMBINE <span className="font-bold">FUNCTIONALITY WITH STRONG VISUAL AESTHETICS</span>. MY WORK FOCUSES ON <span className="font-bold">USER RESEARCH, UI DESIGN, DESIGN SYSTEMS, PROTOTYPING, BRAND IDENTITY, AND CREATIVE DIGITAL EXPERIENCES</span>.
          </p>

          {/* Paragraph 3 */}
          <p style={mobileParagraphStyle}>
            ALONGSIDE PROFESSIONAL EXPERIENCE, I'VE WORKED ON <span className="font-bold">FREELANCE AND PERSONAL PROJECTS</span> INCLUDING <span className="font-bold">E-COMMERCE APPS, BRAND GUIDELINES, WEB DESIGN, AND GRAPHIC DESIGN</span> SOLUTIONS FOR DIFFERENT BRANDS. I ENJOY USING <span className="font-bold">TYPOGRAPHY, MINIMAL LAYOUTS, AND PURPOSEFUL DESIGN THINKING</span> TO BUILD EXPERIENCES THAT FEEL <span className="font-bold">SIMPLE, MODERN, AND MEANINGFUL</span>.
          </p>
        </div>

        {/* ========== TOOL ICONS ========== */}
        <div className="flex justify-center gap-3 pb-2">
          {tools.map((tool) => (
            <div 
              key={tool.name}
              className="w-11 h-11 rounded-xl overflow-hidden shadow-sm border border-gray-100 active:scale-95 transition-transform"
            >
              <img 
                src={tool.icon} 
                alt={tool.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>


      {/* ========================================================================= */}
      {/* 🖥️ DESKTOP VIEW ONLY (Hidden on Mobile)                                  */}
      {/* ========================================================================= */}
      <div className="hidden md:block px-8 lg:px-12 py-16">

        {/* ========== TOP LABELS ROW (Synced with Mobile Alignments) ========== */}
        {/* 🛠️ Map thookitu direct individual flex alignment layout structure set panniten da */}
        <div className="flex justify-between items-start mb-14 md:mb-20 w-full">
          
          {/* 1st Item: Desktop Left Align */}
          <div className="flex flex-col items-start">
            <span 
              className="text-black uppercase text-left"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.15em", lineHeight: "140%" }}
            >
              {topLabels[0].left}
            </span>
            <span 
              className="text-black uppercase text-left"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.15em", lineHeight: "140%" }}
            >
              {topLabels[0].right}
            </span>
          </div>

          {/* 2nd Item: Desktop Center Align */}
          <div className="flex flex-col items-center">
            <span 
              className="text-black uppercase text-center"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.15em", lineHeight: "140%" }}
            >
              {topLabels[1].left}
            </span>
            <span 
              className="text-black uppercase text-center"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.15em", lineHeight: "140%" }}
            >
              {topLabels[1].right}
            </span>
          </div>

          {/* 3rd Item: Desktop Right Align */}
          <div className="flex flex-col items-end">
            <span 
              className="text-black uppercase text-right"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.15em", lineHeight: "140%" }}
            >
              {topLabels[2].left}
            </span>
            <span 
              className="text-black uppercase text-right"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.15em", lineHeight: "140%" }}
            >
              {topLabels[2].right}
            </span>
          </div>

        </div>

        {/* ========== MAIN TEXT ========== */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24 px-2">
          <p className="mb-8 md:mb-10" style={paragraphStyle}>
            HEY HI, I'M <span className="font-bold">SOMANATHAN G</span> - A <span className="font-bold">UI/UX & GRAPHIC DESIGNER</span>, CURRENTLY I'M STAYING <span className="font-bold">BANGALURU, INDIA</span>, WITH <span className="font-bold">2+ YEARS OF EXPERIENCE</span> IN <span className="font-bold">UI/UX DESIGN, BRANDING, WEB DESIGN, AND VISUAL STORYTELLING</span>.
          </p>

          <p className="mb-8 md:mb-10" style={paragraphStyle}>
            I CREATE <span className="font-bold">CLEAN, MODERN, AND USER-CENTERED DIGITAL EXPERIENCES</span> THAT COMBINE <span className="font-bold">FUNCTIONALITY WITH STRONG VISUAL AESTHETICS</span>. MY WORK FOCUSES ON <span className="font-bold">USER RESEARCH, UI DESIGN, DESIGN SYSTEMS, PROTOTYPING, BRAND IDENTITY, AND CREATIVE DIGITAL EXPERIENCES</span>.
          </p>

          <p style={paragraphStyle}>
            ALONGSIDE PROFESSIONAL EXPERIENCE, I'VE WORKED ON <span className="font-bold">FREELANCE AND PERSONAL PROJECTS</span> INCLUDING <span className="font-bold">E-COMMERCE APPS, BRAND GUIDELINES, WEB DESIGN, AND GRAPHIC DESIGN</span> SOLUTIONS FOR DIFFERENT BRANDS. I ENJOY USING <span className="font-bold">TYPOGRAPHY, MINIMAL LAYOUTS, AND PURPOSEFUL DESIGN THINKING</span> TO BUILD EXPERIENCES THAT FEEL <span className="font-bold">SIMPLE, MODERN, AND MEANINGFUL</span>.
          </p>
        </div>

        {/* ========== TOOL ICONS ========== */}
        <div className="flex justify-center gap-4 md:gap-6 lg:gap-8 pb-4">
          {tools.map((tool) => (
            <div 
              key={tool.name}
              className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-2xl overflow-hidden shadow-sm hover:scale-110 transition-transform duration-300 border border-gray-100"
            >
              <img 
                src={tool.icon} 
                alt={tool.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default AboutTextSection;