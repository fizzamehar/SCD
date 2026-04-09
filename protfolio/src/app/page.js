"use client";
import React from 'react';
import { User, Mail, Briefcase, GraduationCap, Heart } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="bg-[#0b1120] text-200 min-h-screen font-sans">
      
      {/* Navbar  */}
      <div className="bg-[#0b1120] border-b border-slate-800 ">
        <div className=" mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-white ">
            My Portfolio
          </div>
          <div className="flex items-center gap-6">
            <div className="text-xs font-semibold uppercase  text-blue-400  sm:block">
              About Me
            </div>
            <div className="bg-blue-600 px-5 py-2 rounded text-white text-xs font-bold uppercase hover:bg-blue-700 ">
              My Resume
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Left Side: Content */}
          <div className="flex-1 space-y-7 text-center md:text-left ">
            
            <div className="text-5xl md:text-6xl font-extrabold ">
              FIZZA FAROOQ
            </div>
            
            <div className="text-white text-lg md:text-xl max-w-lg ">
              I am a Data Science student at <span className="text-blue-400 font-semibold text-2xl">Superior University</span>. 
              I love playing with numbers and turning raw data into meaningful stories.
            </div>

            <div className="flex justify-center md:justify-start gap-4 pt-4">
              <div className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold text-xl shadow-lg bg-blue-700 cursor-pointer">
                Download CV
              </div>
              <div className="border border-slate-700 text-white px-8 py-3 rounded-xl font-bold text-xl bg-slate-800  cursor-pointer">
                Contact Me
              </div>
            </div>
          </div>
          
          {/* Right Side: Image */}
          <div className="flex-1 flex justify-center md:justify-end  ">
            <div className="">
              {/* Main Image Container */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px]">
                <img 
                  src="/img.jpeg" 
                  alt="" 
                  className="w-full h-full object-cover rounded-[40px] border-4 border-slate-800 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Grid Cards */}
      <div className="py-16 bg-[#0d1526]/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. About Me */}
             <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <User className="text-blue-500" size={24} />
                  <div className="text-xl font-bold text-white uppercase ">About Me</div>
                </div>
                
                {/* text-justify class lines ko equal karegi */}
                <div className="text-gray-300 text-base leading-relaxed text-justify tracking-wide">
                  My journey into development and data science began with a curiosity for solving 
                  complex puzzles through code. I am passionate about transforming raw, intricate 
                  data into simplified, actionable insights. Currently, I am honing my analytical 
                  skills to build efficient, data-driven solutions for real-world challenges.
                </div>
              </div>

              {/* 2. Skills Card  */}
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
                
                {/* Heading*/}
                <div className="text-xl font-bold text-white uppercase mb-6">
                  Technical Skills
                </div>

                {/* Skills */}
                <div className="text-white text-sm space-y-3">
                  <div>• Python</div>
                  <div>• SQL Database</div>
                  <div>• Data Analysis</div>
                  <div>• Machine Learning</div>
                  <div>• Statistics</div>
                  <div>• Microsoft Excel</div>
                  <div>• Matplotlib</div>
                  <div>• Pandas</div>
                </div>

              </div>

            {/* 3. Education Card */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="text-blue-500" size={24} />
                <div className="text-xl font-bold text-white uppercase tracking-tight">Education</div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-bold text-white">BS Data Science</div>
                  <div className="text-sm text-gray-300 font-light">Superior University | 2023 - 2027</div>
                </div>
                <div className="border-t border-slate-800 pt-3">
                  <div className="text-sm font-bold text-white">FSc Pre-Engineering</div>
                  <div className="text-sm text-gray-300 font-light">PIASS College | 2021 - 2023</div>
                </div>
              </div>
            </div>

            {/* 4. Experience Card */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="text-blue-500" size={24} />
                <div className="text-xl font-bold text-white uppercase tracking-tight">Experience</div>
              </div>
              <div className="text-s font-bold text-white">Freelance Data Analyst</div>
              <div className="text-xs text-blue-400 font-bold">2024 - Present</div>
              <div className="text-xs text-white-400 mt-2">
                Working on Machine learning and visualization tasks for various clients.
              </div>
            </div>

            {/* 5. Hobbies Card */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="text-blue-500" size={24} />
                <div className="text-xl font-bold text-white uppercase tracking-tight">Hobbies</div>
              </div>
              <div className="text-sm text-white space-y-2">
                <div>• Researching Trends</div>
                <div>• Reading Novels</div>
                <div>• Cooking</div>
                <div>• Problem Solving</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section  */}
      <div className="py-12 bg-blue-900">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <div className="text-3xl font-bold text-white italic "> Let's connect!</div>
            <div className="text-blue-100 mt-1">Open for internships and learning opportunities.</div>
          </div>
          <div className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-black text-sm  transition flex items-center gap-2 cursor-pointer">
            <Mail size={18} /> SAY HELLO!
          </div>
        </div>
      </div>

      {/* Footer  */}
      <div className="py-10 text-center text-white text-sm font-bold uppercase tracking-widest">
        Made with by Fizza Farooq • 2026
      </div>
    </div>
  );
}