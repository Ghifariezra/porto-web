"use client";
import { socialItems } from "@/app/utils/social-media";
import Link from "next/link";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { useState } from "react";

export default function HeroAbout() {
  const [popupDownloaded, setPopupDownloaded] = useState(false);

  const handleDownload = () => {
    setPopupDownloaded(true);
    setTimeout(() => {
      setPopupDownloaded(false);
    }, 3000);
  };

  return (
    <section id="about" className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-3 py-8 px-4 gap-4 sm:gap-8 justify-between items-center">
      <div className="flex flex-col justify-evenly w-full h-full order-2 sm:order-1 sm:col-span-2 gap-4">
        <div className="order-1 sm:order-0 flex place-content-center sm:place-content-start gap-2">
          {socialItems.map((item) => (
            <Link key={item.name} href={item.href} target="_blank" className={item.style}>
              {item.icon}
            </Link>
          ))}
        </div>
        <h1 className="text-name">
          Hi, I&#39;m <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent dark:from-sky-400 dark:to-blue-500">Ghifari Ezra Ramadhan</span>
        </h1>
        <h2 className="text-role">
          <span className="text-sky-600 dark:text-sky-400">Full-Stack</span> Web Developer
        </h2>
        <p className="text-desc">
          I&#39;m a university student at Universitas Pancasila, currently exploring the world of full-stack web development. With a strong passion for technology, I&#39;m committed to continuous learning and building digital solutions that
          are both efficient and meaningful. I believe that technology is not just a tool, but a bridge to solving real-world problems. I&#39;m always open to collaboration, innovation, and new challenges in the web development space.
        </p>
        <div className="flex place-content-center sm:place-content-start">
          <Link
            onClick={handleDownload}
            href="https://drive.google.com/uc?export=download&id=1YCvYiw2lnNKDihbfp6BYJa5MTZllUPCU"
            className="flex items-center justify-center gap-2 bg-zinc-800 dark:bg-zinc-100 px-4 py-2 w-fit rounded-full cursor-pointer text-white dark:text-zinc-800 font-semibold"
          >
            Download CV
            <ArrowOutwardRoundedIcon />
          </Link>
        </div>
      </div>
      <div className="mask-luminance mask-b-from-white mask-b-from-30% mask-b-to-black place-self-end aspect-video sm:aspect-4/3 bg-zinc-200 rounded-2xl w-full h-full md:w-2/3 lg:w-full bg-cover bg-top order-1 sm:order-2 bg-[url('/dark-profile.png')] dark:bg-[url('/light-profile.png')] overflow-hidden">
        <div className="w-full h-full bg-cover bg-center bg-[url('/scribble-mask-bg.jpg')] opacity-15" />
      </div>

      {popupDownloaded && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-zinc-800 dark:bg-zinc-100 px-4 py-2 rounded-full flex items-center justify-center gap-2">
          <span className="text-white dark:text-zinc-800 font-semibold">Successfully Downloaded</span>
        </div>
      )}
    </section>
  );
}
