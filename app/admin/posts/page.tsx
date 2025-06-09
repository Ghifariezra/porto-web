"use client";
import { useState, useEffect, useRef } from "react";
import { fetchBlogItems, formatDate, BlogOverview } from "@/app/utils/blog";
import Markdown from "react-markdown";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import Link from "next/link";

export default function BlogAdmin() {
  const [blogItems, setBlogItems] = useState<BlogOverview[]>([]);
  const [popupDelete, setPopupDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      const items = await fetchBlogItems();
      console.log(items);
      setBlogItems(items);
    };
    fetchItems();
  }, []);

  const refDelete = useRef<HTMLDivElement>(null);
  const handlePopupDelete = (id: number) => {
    setPopupDelete(!popupDelete);
    setDeleteId(id);
    return;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (refDelete.current && !refDelete.current.contains(event.target as Node)) {
        setPopupDelete(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await fetch(`/api/blogs/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      window.location.reload();
    } catch (error) {
      console.error("Failed to delete blog:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4  px-4 py-8">
      <Link href="/admin/posts/new" className="flex w-fit bg-sky-600 items-center justify-center px-4 py-2 rounded-md text-white cursor-pointer font-semibold hover:bg-sky-500">
        <AddRoundedIcon />
        New Post
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
        {blogItems.map((item, index) => (
          <div key={index} className="w-full">
            <div className="flex flex-col sm:flex-row gap-4 bg-white/90 dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-lg rounded-2xl shadow p-4 h-full justify-between">
              <div
                className="aspect-2/1 bg-transparent border border-zinc-200 dark:border-white/10 sm:w-[75%] rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: item.image ? `url(${encodeURI(item.image)})` : "none",
                }}
              />
              <div className="flex flex-col w-full gap-2 md:gap-4">
                <span className="text-sm text-zinc-600 dark:text-zinc-300">
                  <Markdown>{formatDate(item.date)}</Markdown>
                </span>
                <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  <Markdown>{item.title}</Markdown>
                </span>
                <span className="text-base text-zinc-700 dark:text-zinc-300">
                  <Markdown>{item.description}</Markdown>
                </span>
                <div className="flex gap-2">
                  <Link
                    href={{
                      pathname: "/admin/posts/edit",
                      query: { id: item.id },
                    }}
                    className="flex w-fit bg-sky-600 items-center justify-center px-4 py-2 rounded-md text-white cursor-pointer font-semibold hover:bg-sky-500"
                  >
                    <EditNoteRoundedIcon />
                    Edit
                  </Link>
                  <button
                    onClick={() => {
                      handlePopupDelete(item.id);
                    }}
                    className="flex w-fit bg-red-600 items-center justify-center px-4 py-2 rounded-md text-white cursor-pointer font-semibold hover:bg-red-500"
                  >
                    <DeleteRoundedIcon />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {popupDelete && (
          <div className="fixed top-0 left-0 z-50 w-full h-full bg-black/50 flex justify-center items-center px-4">
            <div ref={refDelete} className="flex flex-col gap-4 bg-white/90 dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-lg rounded-2xl shadow p-4 h-1/2 justify-between">
              <div className="flex flex-col gap-4">
                <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Delete Post</span>
                <span className="text-base text-zinc-700 dark:text-zinc-300">Apakah kamu yakin ingin menghapus post ini?</span>
              </div>
              <div className="flex justify-center gap-2">
                <button onClick={() => handlePopupDelete(0)} className="flex w-fit bg-sky-600 items-center justify-center px-4 py-2 rounded-md text-white cursor-pointer font-semibold hover:bg-sky-500">
                  <span className="text-sm font-semibold">Cancel</span>
                </button>
                <button onClick={() => handleDelete(deleteId)} className="flex w-fit bg-red-600 items-center justify-center px-4 py-2 rounded-md text-white cursor-pointer font-semibold hover:bg-red-500">
                  <span className="text-sm font-semibold">Delete</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
