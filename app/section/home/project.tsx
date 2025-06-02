"use client";
import { projectCards } from "@/app/utils/project-cards";
import { useState, useEffect, useRef } from "react";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

export default function Projects() {
  const [showMore, setShowMore] = useState(false);

  const lessRef = useRef<HTMLDivElement>(null);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    if (showMore) {
      lessRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [showMore]);

  return (
    <section className="grid grid-rows-1 sm:grid-cols-3 sm:grid-rows-1 px-4 py-10 gap-4 sm:gap-8 bg-zinc-50 dark:bg-zinc-800">
      <div className="sm:sticky sm:top-28 text-name place-self-center sm:place-self-start w-full flex flex-col gap-4">
        <h3 className="font-[family-name:var(--font-besley)] mb-2">Projects Overview</h3>
        <p className="font-light text-sm sm:text-base">A showcase of personal and collaborative projects highlighting my skills, creativity, and passion in full-stack development and digital solutions.</p>
        <div className="hidden sm:flex items-center justify-center gap-2 bg-zinc-800 dark:bg-zinc-100 px-4 py-2 sm:w-fit rounded-full cursor-pointer text-white dark:text-zinc-800" onClick={handleShowMore}>
          <span className="font-semibold text-sm">Show {showMore ? "Less" : "More"}</span>
          {showMore ? <ArrowOutwardRoundedIcon /> : <ArrowOutwardRoundedIcon className="rotate-90" />}
        </div>
      </div>
      {/* Project Cards */}
      <div className="grid lg:grid-cols-2 gap-6 sm:col-span-2">
        {showMore
          ? projectCards.slice(0, 5).map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-full h-full gap-4 px-4 sm:px-6 pt-6 bg-white/90 dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-lg rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-cyan-200/40 dark:hover:shadow-cyan-400/20 transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="flex w-full justify-center items-center gap-2">
                <h1 className="font-bold text-center text-sm sm:text-lg px-3 py-1 rounded-full w-full bg-zinc-800 dark:bg-transparent dark:border-zinc-100 dark:border text-zinc-100">{item.status}</h1>
              </div>
              <div className="flex justify-between items-center gap-2">
                <h1 className="font-semibold text-[11px] sm:text-base w-fit px-3 py-1 rounded-full border dark:border-none dark:bg-white text-zinc-800">{item.title}</h1>
                <h2 className="font-semibold text-[11px] sm:text-base px-3 py-1 rounded-full border dark:border-none dark:bg-white text-zinc-800">{item.years}</h2>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-medium text-xs sm:text-sm text-zinc-800/85 dark:text-zinc-100/85 line-clamp-6">{item.description}</p>
                <div className="flex justify-start gap-2">
                  {item.icons.map((icon, i) => (
                    <div key={`${item.title}-icon-${i}`}>{icon}</div>
                  ))}
                </div>
              </div>
              <div
                className="aspect-square w-full min-h-[200px] sm:h-[200px] rounded-t-2xl sm:rounded-none bg-cover sm:bg-contain sm:bg-no-repeat bg-center overflow-hidden sm:translate-y-10 sm:group-hover:translate-y-5 transition-all duration-500 ease-in-out z-10 drop-shadow-sm"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
            </div>
          ))
          : projectCards.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className="flex flex-col w-full h-full gap-4 px-4 sm:px-6 pt-6 bg-white/90 dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-lg rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-cyan-200/40 dark:hover:shadow-cyan-400/20 transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="flex w-full justify-center items-center gap-2">
                  <h1 className="font-bold text-center text-sm sm:text-lg px-3 py-1 rounded-full w-full bg-zinc-800 dark:bg-transparent dark:border-zinc-100 dark:border text-zinc-100">{item.status}</h1>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <h1 className="font-semibold text-[11px] sm:text-base w-fit px-3 py-1 rounded-full border dark:border-none dark:bg-white text-zinc-800">{item.title}</h1>
                  <h2 className="font-semibold text-[11px] sm:text-base px-3 py-1 rounded-full border dark:border-none dark:bg-white text-zinc-800">{item.years}</h2>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="font-medium text-xs sm:text-sm text-zinc-800/85 dark:text-zinc-100/85 line-clamp-6">{item.description}</p>
                  <div className="flex justify-start gap-2">
                    {item.icons.map((icon, i) => (
                      <div key={`${item.title}-icon-${i}`}>{icon}</div>
                    ))}
                  </div>
                </div>
                <div
                  className="aspect-square w-full min-h-[200px] sm:h-[200px] rounded-t-2xl sm:rounded-none bg-cover sm:bg-contain sm:bg-no-repeat bg-center overflow-hidden sm:translate-y-10 sm:group-hover:translate-y-5 transition-all duration-500 ease-in-out z-10 drop-shadow-sm"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
              </div>
            ))}
        <div className="sm:hidden flex items-center justify-center gap-2 bg-zinc-800 dark:bg-zinc-100 px-4 py-2 w-full sm:w-fit rounded-full cursor-pointer text-white dark:text-zinc-800" onClick={handleShowMore}>
          <span className="font-semibold text-sm">Show {showMore ? "Less" : "More"}</span>
          {showMore ? <ArrowOutwardRoundedIcon /> : <ArrowOutwardRoundedIcon className="rotate-90" />}
        </div>
      </div>
    </section>
  );
}
