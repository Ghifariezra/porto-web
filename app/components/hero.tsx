export default function Hero() {
  return (
    <section className="home-hero">
      {/* Name Field */}
      <div className="wrapper-name">
        <div className="group-name">
          <h1 className="text-sm sm:text-lg lg:text-2xl font-bold">Hi, I&#39;m Ghifari Ezra Ramadhan</h1>
          <h2 className="text-xs sm:text-sm lg:text-lg font-semibold">Full-Stack Web Developer</h2>
          <p className="text-[10px] sm:text-xs lg:text-sm">I&#39;m a university student at Universitas Pancasila, currently exploring the world of full-stack web development.</p>
        </div>
      </div>
      {/* Parallax Image */}
      <div className="rounded-2xl min-h-screen w-full py-8 px-4 flex flex-col justify-center items-center bg-[url('/scribble-mask-bg.jpg')] bg-cover bg-center bg-fixed mask-radial mask-radial-from-10% mask-radial-to-100% overflow-hidden">
        <div className="relative flex flex-col justify-center items-center">
          <div className="aspect-video min-h-[250px] sm:min-h-[300px] md:max-h-[400px] bg-[url('/home-light-profile.png')] dark:bg-[url('/home-dark-profile.png')] bg-contain bg-no-repeat bg-center rotate-45 dark:-rotate-45"></div>
        </div>
      </div>
    </section>
  );
}
