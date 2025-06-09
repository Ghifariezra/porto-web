"use client";
import Markdown from "react-markdown";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { useState, useEffect } from "react";
import { fetchBlogItems, formatDate, BlogOverview } from "@/app/utils/blog";

export default function BlogUser() {
  const [blogItems, setBlogItems] = useState<BlogOverview[]>([]);
  useEffect(() => {
    const fetchItems = async () => {
      const items = await fetchBlogItems();
      setBlogItems(items);
    };
    fetchItems();
  }, []);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 py-8 bg-zinc-50 dark:bg-zinc-800">
      <div className="col-span-2 h-fit">
        {blogItems.slice(0, 1).map((item, index) => (
          <div key={index} className="flex sm:flex-row flex-col gap-4 bg-white/90 dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-lg rounded-2xl shadow p-4 overflow-hidden">
            {item.image ? (
              <div
                className="aspect-2/1 bg-transparent border border-zinc-200 dark:border-white/10 w-full rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: item.image ? `url(${encodeURI(item.image)})` : "none",
                }}
              />
            ) : (
              <div className="aspect-5/2 bg-transparent border border-zinc-200 dark:border-white/10 w-full rounded-lg">
                <span className="w-full h-full flex justify-center items-center font-bold p-4 text-center">Halaman admin belum tayang... kudanil lagi nyoba install niat dulu.</span>
              </div>
            )}
            <div className="flex flex-col gap-2 md:gap-4 w-fit">
              <span className="text-sm text-zinc-600 dark:text-zinc-300">
                <Markdown>{formatDate(item.date)}</Markdown>
              </span>
              <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                <Markdown>{item.title}</Markdown>
              </span>
              <span className="text-base text-zinc-700 dark:text-zinc-300">
                <Markdown>{item.description}</Markdown>
              </span>
              <button className="flex w-fit items-center gap-1 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-white/10 hover:bg-zinc-200 dark:hover:bg-white/10 hover:text-zinc-800 dark:hover:text-zinc-100 transition duration-300 ease-in-out font-semibold py-2 px-4 rounded-full cursor-pointer">
                Read More <ArrowOutwardRoundedIcon fontSize="small" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 col-span-2 gap-4">
        {blogItems.slice(1).map((item, index) => (
          <div key={index} className="w-full">
            <div className="flex flex-col gap-4 bg-white/90 dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-lg rounded-2xl shadow p-4 h-full justify-between overflow-hidden">
              {item.image ? (
                <div
                  className="aspect-2/1 bg-transparent border border-zinc-200 dark:border-white/10 w-full rounded-lg bg-cover bg-center"
                  style={{
                    backgroundImage: item.image ? `url(${encodeURI(item.image)})` : "none",
                  }}
                />
              ) : (
                <div className="aspect-5/2 bg-transparent border border-zinc-200 dark:border-white/10 w-full rounded-lg">
                  <span className="w-full h-full flex justify-center items-center font-bold p-4 text-center">Halaman admin belum tayang... kudanil lagi nyoba install niat dulu.</span>
                </div>
              )}
              <span className="text-sm text-zinc-600 dark:text-zinc-300">
                <Markdown>{formatDate(item.date)}</Markdown>
              </span>
              <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                <Markdown>{item.title}</Markdown>
              </span>
              <span className="text-base text-zinc-700 dark:text-zinc-300 line-clamp-3">
                <Markdown>{item.description}</Markdown>
              </span>
              <button className="flex w-fit items-center gap-1 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-white/10 hover:bg-zinc-200 dark:hover:bg-white/10 hover:text-zinc-800 dark:hover:text-zinc-100 transition duration-300 ease-in-out font-semibold py-2 px-4 rounded-full cursor-pointer">
                Read More <ArrowOutwardRoundedIcon fontSize="small" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
