import React from "react";
import img1 from "./../../assets/l2.png";
import img2 from "./../../assets/l3.png";
import img3 from "./../../assets/l4.png";
import img4 from "./../../assets/l5.png";
import { useNavigate } from "react-router-dom";


const projects = [
  {
    id: "01",
    title: "FLOW",
    image: img1,
    link: "https://www.behance.net/gallery/205743689/F2H-Grocery-app-UXUI-Case-Study",
    tags: ["E-COMMERCE", "UI/UX", "DESIGN"],
    size: "large"
  },
  {
    id: "02",
    title: "FLOW",
    image: img2,
    link: "https://www.behance.net/gallery/246941867/T-Shirt-Print-Design",
    tags: ["BRANDING", "T-SHIRT", "DESIGN"],
    size: "small"
  },
  {
    id: "03",
    title: "FLOW",
    image: img3,
    link: "https://www.behance.net/gallery/240694587/COCOMAPLE-RESTSURANT-BRAND-IDENTITY",
    tags: ["MENU CARD", "GRAPHIC", "DESIGN"],
    size: "small"
  },
  {
    id: "04",
    title: "FLOW",
    image: img4,
    link: "https://www.behance.net/gallery/243882769/Zhagaram-Cafe",
    tags: ["BRAND STRATEGY", "UI AND GRAPHIC", "DESIGN"],
    size: "large"
  }
];

const filterTags = ["CONCEPTUAL", "EXPRESSIVE", "IMMERSIVE"];

const WorksSection = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-white px-6 md:px-12 lg:px-16 py-12 md:py-16">

      {/* TITLE */}
      <h2
        className="text-black uppercase text-center mb-8 md:mb-10"
        style={{
          fontFamily: "Anton, sans-serif",
          fontSize: "clamp(60px, 12vw, 140px)",
          fontWeight: 400,
          lineHeight: "100%",
          letterSpacing: "0.02em"
        }}
      >
        OUR WORKS
      </h2>

      {/* DIVIDER */}
      <div className="w-full h-[1px] bg-black mb-6 md:mb-8" />

      {/* FILTER ROW */}
      <div className="flex justify-between items-center mb-8 md:mb-10">
        <span
          className="text-black uppercase"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.1em"
          }}
        >
          DESIGN INSIGHTS
        </span>

        <div className="flex gap-2 md:gap-3">
          {filterTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 md:px-4 md:py-1.5 bg-black rounded-full text-white uppercase"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.05em"
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className="flex flex-col gap-6 md:gap-8">

        {/* ROW 1 */}
        <div className="w-full">
          <ProjectCard project={projects[0]} />
        </div>

        {/* ROW 2 */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <div className="w-full md:w-1/2">
            <ProjectCard project={projects[1]} />
          </div>
          <div className="w-full md:w-1/2">
            <ProjectCard project={projects[2]} />
          </div>
        </div>

        {/* ROW 3 */}
        <div className="w-full">
          <ProjectCard project={projects[3]} />
        </div>

      </div>

      {/* BUTTON */}
      <div className="flex justify-center mt-10 md:mt-12">
  <button
    onClick={() => navigate("/work")}
    className="px-6 py-2.5 md:px-8 md:py-3 bg-black text-white rounded-full uppercase hover:opacity-80 transition-opacity duration-300 cursor-pointer"
    style={{
      fontFamily: "Inter, sans-serif",
      fontSize: "18px",
      fontWeight: 500,
      letterSpacing: "0.1em"
    }}
  >
    SEE ALL WORK
  </button>
</div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="relative w-full overflow-hidden group">

      {/* IMAGE LINK */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
      </a>

      {/* BOTTOM BAR */}
      <div
        className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-4 py-3 md:px-6 md:py-4"
        style={{ backgroundColor: "#393939" }}
      >
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <span
            className="text-white"
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 400
            }}
          >
            {project.id}
          </span>

          <span
            className="text-white uppercase"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "0.05em"
            }}
          >
            {project.title}
          </span>
        </div>

        {/* RIGHT */}
        <div className="flex gap-1.5 md:gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 md:px-3 md:py-1 bg-white/90 rounded-full text-black uppercase"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "9px",
                fontWeight: 500,
                letterSpacing: "0.05em"
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default WorksSection;