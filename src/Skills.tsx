import { 
  Figma, 
  Code2, 
  Palette, 
  Layout, 
  Zap
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  bgGlow: string;
}

const skills: Skill[] = [
  { 
    name: "Figma", 
    icon: <Figma className="w-6 h-6" />, 
    color: "from-purple-500 to-pink-500",
    bgGlow: "group-hover:shadow-purple-500/30"
  },
  { 
    name: "Canva", 
    icon: <Palette className="w-6 h-6" />, 
    color: "from-cyan-500 to-blue-500",
    bgGlow: "group-hover:shadow-cyan-500/30"
  },
  { 
    name: "HTML", 
    icon: <Code2 className="w-6 h-6" />, 
    color: "from-orange-500 to-red-500",
    bgGlow: "group-hover:shadow-orange-500/30"
  },
  { 
    name: "CSS", 
    icon: <Layout className="w-6 h-6" />, 
    color: "from-blue-500 to-cyan-500",
    bgGlow: "group-hover:shadow-blue-500/30"
  },
  { 
    name: "JavaScript", 
    icon: <Zap className="w-6 h-6" />, 
    color: "from-yellow-500 to-orange-500",
    bgGlow: "group-hover:shadow-yellow-500/30"
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills
          </h2>
          <p className="text-gray-400 text-lg">
            Tools and technologies I do work with
          </p>
        </div>

        {/* Icon Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`group bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 shadow-lg ${skill.bgGlow} hover:-translate-y-2 flex flex-col items-center text-center`}
            >
              <div className={`bg-gradient-to-br ${skill.color} p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <span className="font-semibold text-gray-200">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Pill-shaped Tags */}
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <div
              key={`tag-${skill.name}`}
              className={`bg-gradient-to-r ${skill.color} px-6 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default`}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
