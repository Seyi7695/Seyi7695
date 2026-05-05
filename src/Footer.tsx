import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              Designer Portfolio
            </h3>
            <p className="text-gray-400 text-sm">
              Crafting digital experiences with passion
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 border border-slate-700 hover:border-purple-500 hover:bg-slate-800 active:bg-slate-700 active:scale-95 p-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 border border-slate-700 hover:border-blue-500 hover:bg-slate-800 active:bg-slate-700 active:scale-95 p-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 border border-slate-700 hover:border-cyan-500 hover:bg-slate-800 active:bg-slate-700 active:scale-95 p-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-gray-400 text-sm">
          <p className="flex items-center justify-center gap-2">
            Made by Oluwaseyi Ayomikun Akinde • © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
