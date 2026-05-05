import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 bg-black">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-block mb-6">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text text-sm font-semibold tracking-wider uppercase">
           DESIGN . DEVELOPMENT . CONVERSION
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Crafting Digital
          <br />
          <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-transparent bg-clip-text">
            Experiences
          </span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Transforming ideas into stunning visual designs and seamless user experiences. 
          Specialized in UI/UX design, frontend development, and social media advertising.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection('projects')}
            className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 active:scale-95 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
          >
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="border border-gray-700 hover:border-purple-500 hover:bg-purple-500/10 active:scale-95 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
