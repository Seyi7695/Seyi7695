import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { ProjectModal } from "./ProjectModal";

// Import uploaded images using figma:asset

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags?: string[];
  category?: string;
  fullDescription?: string;
  features?: string[];
  liveLink?: string;
  githubLink?: string;
}

// Social Media Ad Projects
const socialMediaProjects: Project[] = [
  {
    id: 1,
    title: "Mason Skin - Vitamin C Serum",
    description: "Premium skincare product Instagram ad campaign",
    image: "/i.PNG",
    category: "Social Media Ad",
    fullDescription:
      "Elegant skincare advertisement for Mason Skin's Vitamin C Serum featuring 'Glow Like Never Before' campaign. Designed for Instagram feed with a focus on luxury beauty aesthetics and limited-time promotional offer.",
    features: [
      "Luxurious gold and cream color palette",
      "Product-focused composition with lifestyle imagery",
      "Clear call-to-action with 50% off promotion",
      "Professional photography and typography",
      "Optimized for Instagram square format",
    ],
    tags: ["Canva", "Skincare", "Instagram", "Product Ad"],
    liveLink: "https://instagram.com",
  },
  {
    id: 2,
    title: "Veltrix Fitness - Train Like A Champion",
    description: "High-energy fitness gym promotional campaign",
    image: "/vel.png",
    category: "Social Media Ad",
    fullDescription:
      "Bold and motivational fitness advertisement for Veltrix Fitness featuring dynamic workout imagery. Designed to inspire action and drive gym memberships through social media engagement.",
    features: [
      "High-contrast dark background with neon green accents",
      "Powerful motivational messaging",
      "Dynamic composition with multiple fitness models",
      "Strong brand identity and social media handles",
      "Energy-driven visual hierarchy",
    ],
    tags: ["Photoshop", "Fitness", "Instagram", "Gym Marketing"],
    liveLink: "https://instagram.com",
  },
  {
    id: 3,
    title: "Sneakers Delivery - 24 Hours",
    description: "E-commerce sneaker store delivery promotion",
    image: "sneaker.PNG",
    category: "Social Media Ad",
    fullDescription:
      "Clean and modern e-commerce advertisement showcasing fast sneaker delivery service. Features premium product photography with botanical elements for a contemporary aesthetic.",
    features: [
      "Minimalist design with premium product focus",
      "Bold typography emphasizing delivery speed",
      "Natural floral elements for modern appeal",
      "Strong orange accent color for CTAs",
      "Clear value proposition and brand identity",
    ],
    tags: ["Figma", "E-commerce", "Product Ad", "Sneakers"],
    liveLink: "https://example.com",
  },
  {
    id: 4,
    title: "Veltrix Fitness - Train Like A Champion",
    description: "Push your limits",
    image: "vel.png",
    category: "Social Media Ad",
    fullDescription:
      "Bold and motivational fitness advertisement for Veltrix Fitness featuring dynamic workout imagery and equipments. Designed to inspire action and drive gym memberships through social media engagement.",
    features: [
      "High-contrast dark background with neon green accents",
      "Powerful motivational messaging",
      "Dynamic composition with multiple fitness models",
      "Strong brand identity and social media handles",
      "Energy-driven visual hierarchy",
    ],
    tags: ["Photoshop", "Fitness", "Instagram", "Gym Marketing"],
    liveLink: "https://instagram.com",
  },
  {
    id: 5,
    title:
      "Luxury Travel Brand Identity Design | Private Jet Brand Logo (VELARIS)",
    description:
      "Velaris is a luxury private travel brand built around exclusivity and cinematic elegance.",
    image: "veris.png",
    category: "Social Media Ad",
    fullDescription:
      "Velaris is a premium private travel brand concept designed to evoke exclusivity and cinematic luxury through minimalist, high-end visual identity and refined typography.",
    features: [
      "High-end private aviation photography featuring a symmetrical, center-weighted composition",
      "Cinematic deep purple and sunset indigo palette with high-contrast red reflections.",
      "Minimalist, bold sans-serif headline paired with a refined, italicized serif sub-copy.",
      "Focused on luxury, exclusivity, and lifestyle transformation",
      "Clean, understated wordmark placement in the lower visual field.",
    ],
    tags: ["Canva", "Figma", "Instagram", "Travels"],
    liveLink: "https://instagram.com",
  },
  {
    id: 6,
    title:
      "Luxury Travel Brand Identity Design | Private Jet Brand Logo (VELARIS)",
    description:
      "Velaris is a luxury private travel brand built around exclusivity and cinematic elegance.",
    image: "ig.png",
    category: "Social Media Ad",
    fullDescription:
      "Velaris is a premium private travel brand concept designed to evoke exclusivity and cinematic luxury through minimalist, high-end visual identity and refined typography.",
    features: [
      "High-end private aviation photography featuring a symmetrical, center-weighted composition",
      "Cinematic deep purple and sunset indigo palette with high-contrast red reflections.",
      "Minimalist, bold sans-serif headline paired with a refined, italicized serif sub-copy.",
      "Focused on luxury, exclusivity, and lifestyle transformation",
      "Clean, understated wordmark placement in the lower visual field.",
    ],
    tags: ["Canva", "Figma", "Instagram", "Travels"],
    liveLink: "https://instagram.com",
  },
];

// Website/Frontend Projects
const webProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform For a Coffee Shop In Ikeja,Lagos.",
    description: "Modern online shopping experience with Figma",
    image: "/coffee.PNG",
    tags: ["Figma"],
    category: "Frontend Design",
    fullDescription:
      "A fully responsive e-commerce platform for Ikeja Bean coffee shop design built with Figma",
    features: [
      "Responsive design for all devices",
      "Shopping cart with real-time updates",
      "Smooth page transitions and animations",
      "Optimized performance and loading times",
    ],
  },
  {
    id: 2,
    title: "Visitors Management software Dashboard",
    description:
      "Data visualization dashboard with real-time metrics and responsive design",
    image: "/visitor.PNG",
    tags: ["Figma", "HTML", "JavaScript"],
    category: "UI/UX Design",
    fullDescription:
      "Comprehensive analytics dashboard featuring real-time data visualization, interactive charts, and intuitive user interface.",
    features: [
      "Real-time data updates",
      "Interactive charts and graphs",
      "Customizable dashboard widgets",
      "Export functionality for reports",
      "Dark mode support",
    ],
  },
  {
    id: 3,
    title: "Designed for a lagos Based Event Centre Brand",
    description: "Clean and modern Website for an Event centre",
    image: "/Royal Occasion.PNG",
    tags: ["React", "Tailwind", "Design"],
    category: "Web Design",
    fullDescription:
      "A sleek, modern website designed to help clients showcase their professionalism, highlight their work ethic, and present the elegance and prestige of their event center.",
    features: [
      "Smooth scroll animations",
      "Project showcase galleries",
      "Contact form integration",
      "SEO optimized",
      "Fast loading performance",
    ],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
];

// Concert & Event Promotions
const concertProjects: Project[] = [
  {
    id: 1,
    title: "Shadow Revival Tour",
    description: "Rock concert poster series",
    image: "src/Pictures/SHADOWREVIVAL.png",
    category: "Concert Poster",
    fullDescription:
      "Bold and edgy poster series for Shadow Revival's national tour, capturing the raw energy of rock music.",
    features: [
      "High-contrast design for visibility",
      "Typography that reflects the music genre",
      "Print-ready formats",
      "Adaptable for different venues",
    ],
    tags: ["Figma", "Print Design", "Music"],
  },

  {
    id: 2,
    title: "Summer Music Festival",
    description: "Multi-day event branding",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Event Branding",
    fullDescription:
      "Complete branding package for a three-day summer music festival, including posters, digital assets, and merchandise.",
    features: [
      "Cohesive multi-day branding",
      "Vibrant summer aesthetics",
      "Lineup presentation design",
      "Social media templates",
    ],
    tags: ["Illustrator", "Branding", "Events"],
  },

  {
    id: 3,
    title: "Jazz Night Series",
    description: "Elegant jazz event posters",
    image:
      "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Event Design",
    fullDescription:
      "Sophisticated poster designs for an intimate jazz night series, blending elegance with musical energy.",
    features: [
      "Elegant typography",
      "Jazz-inspired color palettes",
      "Premium event aesthetics",
      "Monthly series consistency",
    ],
    tags: ["Canva", "Jazz", "Print"],
  },
  {
    id: 4,
    title: "Random Music concert Ad",
    description: "Bold Music concert Festival",
    image: "src/Pictures/Blue and White Modern Music Concert Poster.png",
    category: "Festival Promotion",
    fullDescription:
      "High-energy promotional materials for an electronic dance music festival featuring bold colors and dynamic compositions.",
    features: [
      "Energetic visual effects",
      "Neon-inspired color schemes",
      "Motion-inspired static designs",
      "DJ lineup presentations",
    ],
    tags: ["Canva", "Festival"],
  },
];

export function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className="py-20 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            A showcase of design work across multiple disciplines
          </p>
        </div>

        {/* Social Media Ad Designs */}
        <div className="mb-24">
          <div className="mb-10">
            <h3 className="text-3xl font-bold mb-3">Social Media Ad Designs</h3>
            <p className="text-gray-400">
              Eye-catching social content optimized for Instagram, Facebook, and
              other platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {socialMediaProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => openProjectModal(project)}
                className="group relative aspect-square bg-slate-800 rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 active:scale-95"
              >
                <img
                  src={project.image}
                  alt="no image"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="font-bold text-sm mb-1">{project.title}</h4>
                    <p className="text-xs text-gray-300">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Website / Frontend Projects */}
        <div className="mb-24">
          <div className="mb-10">
            <h3 className="text-3xl font-bold mb-3">
              Website / Frontend Projects
            </h3>
            <p className="text-gray-400">
              Responsive web applications and interfaces built with modern
              technologies
            </p>
          </div>

          <div className="space-y-6">
            {webProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => openProjectModal(project)}
                className="group bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer active:scale-[0.99]"
              >
                <div className="grid md:grid-cols-[2fr_1fr] gap-0">
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[16/9] md:aspect-auto">
                    <img
                      src={project.image}
                      alt="no image"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/80" />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <h4 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                      {project.description}
                    </p>

                    {project.tags && (
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-slate-600/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center gap-2 text-purple-400 group-hover:text-purple-300 font-semibold text-sm transition-colors">
                      View Details <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Concert & Event Promotions */}
        <div>
          <div className="mb-10">
            <h3 className="text-3xl font-bold mb-3">
              Concert & Event Promotions
            </h3>
            <p className="text-gray-400">
              Bold poster designs for live music events and festivals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {concertProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => openProjectModal(project)}
                className="group relative aspect-[3/4] bg-slate-800 rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-2 active:scale-95"
              >
                <img
                  src=""
                  alt="no image"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />

                {/* Hover Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-5 w-full">
                    <h4 className="font-bold text-lg mb-1">{project.title}</h4>
                    <p className="text-sm text-gray-300">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeModal}
          project={selectedProject}
        />
      )}
    </section>
  );
}
