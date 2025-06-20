"use client";
import Markdown from "react-markdown";
import { useState, useEffect } from "react";

export default function BlogSlug({ slug }: { slug: string }) {
  const id = slug;

  const [data, setData] = useState([
    {
      id: 0,
      title: "",
      description: "",
      content: "",
      image: "",
      date: "",
    },
  ]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`/api/blogs/${id}`);
      const data = await res.json();
      setData([data]);
    };
    fetchPost();
  }, [id]);

  return (
    <div className="max-w-3xl mx-auto grid grid-cols-1 gap-8 px-4 py-8 bg-zinc-50 dark:bg-zinc-800 min-h-screen">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col gap-4">
          <div
            className="aspect-video bg-cover bg-center rounded-2xl overflow-hidden w-full"
            style={{
              backgroundImage: item.image ? `url(${encodeURI(item.image)})` : "none",
            }}
          ></div>
          <div className="flex flex-col gap-4">
            <span className="text-2xl sm:text-3xl font-bold break-words">
              <Markdown>{`# ${item.title}`}</Markdown>
            </span>
          </div>
          <span className="text-base sm:text-2xl text-zinc-700 dark:text-zinc-300 break-words">
            {item.content ? <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: item.content }} /> : <Markdown>{item.description}</Markdown>}
          </span>
        </div>
      ))}
    </div>
  );
}
