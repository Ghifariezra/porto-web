"use client";
import Markdown from "react-markdown";
import { blogItems } from "@/app/utils/blog";

export default function BlogUser() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 py-10 bg-zinc-50 dark:bg-zinc-800">
      {blogItems.map((item, index) => (
        <div key={index} className="col-span-1 flex flex-col gap-4 bg-white/90 dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-lg rounded-2xl shadow p-4">
          <div className="aspect-video bg-yellow-400 w-full rounded-lg" />
          <span className="text-sm text-zinc-600 dark:text-zinc-300">
            <Markdown>{item.date}</Markdown>
          </span>
          <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            <Markdown>{item.title}</Markdown>
          </span>
          <span className="text-base text-zinc-700 dark:text-zinc-300 line-clamp-3">
            <Markdown>{item.description}</Markdown>
          </span>
        </div>
      ))}
    </section>
  );
}
