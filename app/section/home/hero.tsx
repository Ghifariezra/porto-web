"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center gap-4 sm:gap-8">
      <div className="rounded-2xl min-h-screen sm:w-1/2 py-8 px-4 flex flex-col justify-center items-center bg-[url('/scribble-mask-bg.jpg')] bg-cover bg-center bg-fixed mask-radial mask-radial-from-10% mask-radial-to-100% overflow-hidden">
        <div className="relative flex flex-col justify-center items-center">
          <div className="aspect-video min-h-[200px] sm:min-h-[300px] md:max-h-[400px] bg-[url('/home-light-profile.png')] dark:bg-[url('/home-dark-profile.png')] bg-contain bg-no-repeat bg-center dark:-rotate-45"></div>
        </div>
      </div>
    </section>
  );
}
