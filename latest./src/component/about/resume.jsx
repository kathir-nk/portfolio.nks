import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import resumeImage from './../../assets/resume.jpeg';

export default function ResumePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex flex-col items-center p-6">

      <button
        onClick={() => navigate("/about")}
        className="fixed top-6 left-6 z-50 text-white"
      >
        <ArrowLeft size={32} />
      </button>

      <img
        src={resumeImage}
        alt="Resume"
        className="max-w-full h-auto"
      />
    </div>
  );
}