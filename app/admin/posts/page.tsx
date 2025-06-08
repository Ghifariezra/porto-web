"use client";
import { useState, useEffect } from "react";
import { fetchBlogItems, formatDate, BlogOverview } from "@/app/utils/blog";
import Markdown from "react-markdown";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import Link from "next/link";

export default function BlogAdmin() {
  const [blogItems, setBlogItems] = useState<BlogOverview[]>([]);
  useEffect(() => {
    const fetchItems = async () => {
      const items = await fetchBlogItems();
      setBlogItems(items);
    };
    fetchItems();
  }, []);
  return (
    <div className="flex flex-col gap-4  px-4 py-8">
      <Link href="/admin/posts/new" className="flex w-fit bg-sky-600 items-center justify-center p-4 rounded-md text-white cursor-pointer font-semibold hover:bg-sky-500">
        <AddRoundedIcon />
        New Post
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
        {blogItems.map((item, index) => (
          <div key={index} className="w-full">
            <div className="flex gap-4 bg-white/90 dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-lg rounded-2xl shadow p-4 h-full justify-between">
              <div className="aspect-6/2 bg-transparent border border-zinc-200 dark:border-white/10 w-[50%] rounded-lg" />
              <div className="flex flex-col w-full gap-2 md:gap-4">
                <span className="text-sm text-zinc-600 dark:text-zinc-300">
                  <Markdown>{formatDate(item.date)}</Markdown>
                </span>
                <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  <Markdown>{item.title}</Markdown>
                </span>
                <span className="text-base text-zinc-700 dark:text-zinc-300 line-clamp-3">
                  <Markdown>{item.description}</Markdown>
                </span>
                <div className="flex gap-2">
                  <button className="flex w-fit bg-sky-600 items-center justify-center px-4 py-2 rounded-md text-white cursor-pointer font-semibold hover:bg-sky-500">
                    <EditNoteRoundedIcon />
                    Edit
                  </button>
                  <button className="flex w-fit bg-red-600 items-center justify-center px-4 py-2 rounded-md text-white cursor-pointer font-semibold hover:bg-red-500">
                    <DeleteRoundedIcon />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
