import { Mail, MessageCircle, ArrowRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        {/* Contact Options */}
        <div className="space-y-6 mb-12">
          <a
            href = "https://mail.google.com/mail/?view=cm&fs=1&to=akindese4@gmail.com&su=Project%20Inquiry&body=Hi%20I%20would%20like%20to%20discuss%20a%20project"
            target="_blank"
            className="group flex items-center justify-center gap-4 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 border border-slate-700 hover:border-slate-600 active:border-purple-500 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 active:scale-95"
          >
            <div className="bg-purple-500/10 p-3 rounded-xl group-hover:bg-purple-500/20 group-active:bg-purple-500/30 transition-colors">
              <Mail className="w-6 h-6 text-purple-400" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-sm text-gray-400 mb-1">Email</div>
              <div className="text-lg font-semibold">akindese4@gmail.com</div>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </a>

          <a
            href="https://wa.me/09049584118"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-4 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 border border-slate-700 hover:border-slate-600 active:border-green-500 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 active:scale-95"
          >
            <div className="bg-green-500/10 p-3 rounded-xl group-hover:bg-green-500/20 group-active:bg-green-500/30 transition-colors">
              <MessageCircle className="w-6 h-6 text-green-400" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-sm text-gray-400 mb-1">WhatsApp</div>
              <div className="text-lg font-semibold">Message Me</div>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </a>
        </div>

        {/* Additional CTA */}
        <div className="pt-8 border-t border-slate-800">
          <p className="text-gray-500 text-sm">
            Available for freelance projects and collaborations
          </p>
        </div>
      </div>
    </section>
  );
}
