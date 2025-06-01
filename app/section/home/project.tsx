export default function Projects() {
  return (
    <section className="grid grid-rows-1 sm:grid-cols-3 sm:grid-rows-1 px-4 py-10 gap-4 sm:gap-8 bg-zinc-50 dark:bg-zinc-800">
      <div className="sm:sticky sm:top-28 text-name place-self-center sm:place-self-start w-full">
        <h3 className="font-[family-name:var(--font-besley)] mb-2">Projects Overview</h3>
        <p className="font-light text-sm sm:text-base">A showcase of personal and collaborative projects highlighting my skills, creativity, and passion in full-stack development and digital solutions.</p>
      </div>
      {/* Project Cards */}
      <div className="grid sm:grid-cols-2 gap-4 sm:col-span-2">
        <div className="flex flex-col w-full h-full gap-4 px-6 pt-6 bg-white/90 dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-lg rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-cyan-200/40 dark:hover:shadow-cyan-400/20 transition-transform duration-300 hover:scale-[1.02]">
          <div className="flex justify-between gap-2">
            <h1 className="font-bold text-sm px-3 py-1 rounded-full border dark:border-none dark:bg-white text-zinc-800">Portfolio Web</h1>
            <h2 className="font-bold text-sm px-3 py-1 rounded-full border dark:border-none dark:bg-white text-zinc-800">2025</h2>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-light text-sm text-zinc-800 dark:text-zinc-100">
              A personal portfolio website showcasing your professional profile as a Tech Generalist with a minimalist and responsive design. Features intuitive navigation, contact information, tech stack display, and 3D avatar. Built using
              modern web technologies to reflect your skills and experience in web development.
            </p>
          </div>
          <div className="aspect-square w-full h-[200px] bg-cover bg-center bg-[url('/projects/porto1.0.png')] rounded-xl overflow-hidden translate-y-10 group-hover:translate-y-2 transition-all duration-500 ease-in-out z-10 drop-shadow-sm"></div>
        </div>
        <div className="flex flex-col w-full h-full gap-4 px-6 pt-6 bg-white/90 dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-lg rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-cyan-200/40 dark:hover:shadow-cyan-400/20 transition-transform duration-300 hover:scale-[1.02]">
          <div className="flex justify-between gap-2">
            <h1 className="font-bold text-sm px-3 py-1 rounded-full border dark:border-none dark:bg-white text-zinc-800">Portfolio Web</h1>
            <h2 className="font-bold text-sm px-3 py-1 rounded-full border dark:border-none dark:bg-white text-zinc-800">2025</h2>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-light text-sm text-zinc-800 dark:text-zinc-100">
              A personal portfolio website showcasing your professional profile as a Tech Generalist with a minimalist and responsive design. Features intuitive navigation, contact information, tech stack display, and 3D avatar. Built using
              modern web technologies to reflect your skills and experience in web development.
            </p>
          </div>
          <div className="aspect-square w-full h-[200px] bg-cover bg-center bg-[url('/projects/porto1.0.png')] rounded-xl overflow-hidden translate-y-10 group-hover:translate-y-2 transition-all duration-500 ease-in-out z-10 drop-shadow-sm"></div>
        </div>
      </div>
    </section>
  );
}
