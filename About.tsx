export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Hi, I’m a <span className="font-bold">UI/UX</span> and{" "}
                <span className="font-bold">Graphics Designer</span> with
                frontend development skills, focused on creating clean,
                user-friendly, and visually engaging digital experiences.
              </p>
              <p>
                With a strong foundation in design principles and modern web
                technologies, I specialize in transforming complex ideas into
                intuitive interfaces. My approach combines aesthetic sensibility
                with technical expertise to deliver solutions that are both
                visually stunning and highly performant.
              </p>
              <p>
                I believe great design is invisible—it just works. Whether I'm
                wireframing a new feature, coding a responsive layout, or
                refining micro-interactions, my focus is always on the end user
                and creating seamless experiences that solve real problems.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/level4class.jpg"
                alt="Designer workspace"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-8 -right-8 w-full h-full border-2 border-purple-500/20 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
