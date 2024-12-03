import React from 'react';
import { Github, Instagram, Mail } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import { getGreeting } from '../utils/timeUtils';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24">
        <div className="flex flex-col items-start">
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight font-['Fira_Sans']">
              Welcome,
            </h1>
            <div className="text-3xl md:text-5xl bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text font-['Fira_Sans'] font-bold mb-4">
              {getGreeting()}
            </div>
            <div className="text-3xl md:text-4xl text-white/80 font-['Fira_Sans']">
              <Typewriter
                options={{
                  strings: ['Developer', 'Designer', 'Innovator'],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: 'typewriter-text',
                  cursorClassName: 'typewriter-cursor'
                }}
              />
            </div>
          </div>
          
          <div className="space-y-4 mb-12">
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed font-['Space_Grotesk']">
              Crafting digital experiences that merge creativity with technical excellence.
            </p>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed font-['Space_Grotesk']">
              Specialized in building modern web applications with cutting-edge technologies.
            </p>
          </div>

          <div className="flex space-x-8 mb-12">
            <a 
              href="https://github.com/shinbrot" 
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://instagram.com/yanda.ee" 
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={28} />
            </a>
            <a 
              href="mailto:jinshiivy@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <Mail size={28} />
            </a>
          </div>

          <button className="group relative px-10 py-4 bg-transparent border border-purple-500 text-white rounded-full text-lg font-medium overflow-hidden transition-all duration-300 hover:bg-purple-500 font-['Fira_Sans']">
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;