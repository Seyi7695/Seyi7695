import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Concert Poster Series",
    category: "Graphic Design",
    description: "A vibrant collection of concert posters featuring bold typography and dynamic compositions.",
    image: "https://images.unsplash.com/photo-1644352739408-a191ed85e513?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25jZXJ0JTIwcG9zdGVyJTIwZGVzaWdufGVufDF8fHx8MTc3NTA1MjE1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Figma", "Canva", "Brand Design"]
  },
  {
    id: 2,
    title: "Social Media Ad Campaign",
    category: "Digital Marketing",
    description: "Eye-catching social media advertisements designed for maximum engagement and conversion.",
    image: "https://images.unsplash.com/photo-1769596722541-40dedee6789d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFkdmVydGlzaW5nJTIwbW9ja3VwfGVufDF8fHx8MTc3NTA1MjE1OHww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Canva", "Ads Design", "Marketing"]
  },
  {
    id: 3,
    title: "Mobile Banking App",
    category: "UI/UX Design",
    description: "A modern and intuitive mobile banking experience with seamless navigation and visual appeal.",
    image: "https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzc1MDIyMzQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Figma", "UI Design", "Mobile"]
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    category: "Web Design",
    description: "A comprehensive analytics dashboard with data visualization and clean interface design.",
    image: "https://images.unsplash.com/photo-1771922748624-b205cf5d002d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBVSSUyMGRlc2lnbnxlbnwxfHx8fDE3NzUwNTIxNTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Figma", "Dashboard", "Data Viz"]
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    category: "Frontend Development",
    description: "A responsive e-commerce website built with React, featuring smooth animations and modern design.",
    image: "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc3NDk5MTI4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "JavaScript", "CSS"]
  },
  {
    id: 6,
    title: "Brand Identity System",
    category: "Brand Design",
    description: "Complete brand identity package including logo, color palette, and design guidelines.",
    image: "https://images.unsplash.com/photo-1633533451997-8b6079082e3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc3NTAyNjc0NXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Figma", "Branding", "Visual Design"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work in UI/UX design, frontend development, and creative design projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src="../Pictures/SHADOWREVIVAL.png"
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-purple-400 border border-purple-500/30">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-slate-600/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors">
                  View Project <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
