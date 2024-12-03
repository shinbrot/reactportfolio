import React from 'react';

const projects = [
  {
    title: "Jinshi Ai",
    description: "A ai chatbot whatsapp in bound, helpfull, fun features, admin features",
    image: "https://files.catbox.moe/j1hpfl.jpg",
    tags: ["JavaScript", "MongoDB"]
  },
  {
    title: "Shenlle Ai",
    description: "Simmilar with Jinshi Ai, but this one is prototyple models",
    image: "https://files.catbox.moe/ob8adg.jpg",
    tags: ["JavaScript"]
  },
  {
    title: "Project Gamma",
    description: "AI-powered analytics dashboard for business intelligence",
    image: "https://files.catbox.moe/h2atx6.jpeg",
    tags: ["Python", "TensorFlow", "D3.js"]
  }
];

const Work: React.FC = () => {
  return (
    <section id="work" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-purple-600/30 rounded-full text-sm text-purple-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;