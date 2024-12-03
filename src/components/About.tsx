import React from 'react';
import { Code, Palette, Globe } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      icon: <Code className="w-6 h-6 text-purple-400" />,
      title: "Full Stack Development",
      description: "Proficient in modern web technologies including React, Node.js, and TypeScript"
    },
    {
      icon: <Palette className="w-6 h-6 text-purple-400" />,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces with attention to detail"
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-400" />,
      title: "Cloud Architecture",
      description: "Experience with AWS, Azure, and modern cloud infrastructure"
    }
  ];

  return (
    <section id="about" className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 blur-xl opacity-50" />
              <div className="absolute inset-2 rounded-full overflow-hidden bg-black">
                <img
                  src="https://files.catbox.moe/jc4597.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-gray-300 text-lg mb-8">
              Hello, I'm Yanda, also known as Shinbo or Jinshi, passionate in developer with less 1 years of experience in creating digital solutions that make a difference. 
              My journey in tech has been driven by curiosity and a desire to build products that combine innovative technology 
              with exceptional user experiences.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="p-6 rounded-xl bg-purple-900/20 backdrop-blur-sm border border-purple-500/10">
                  <div className="mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                  <p className="text-gray-400">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;