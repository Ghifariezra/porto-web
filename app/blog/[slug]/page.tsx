"use client";
import Markdown from "react-markdown";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Blog() {

  const searchParams = useSearchParams();
  const id: string | null = searchParams.get("id");

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
    <div className="grid grid-cols-1 gap-8 px-4 py-8 bg-zinc-50 dark:bg-zinc-800">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col gap-4">
          <div
            className="aspect-video bg-cover bg-center rounded-2xl overflow-hidden"
            style={{
              backgroundImage: item.image ? `url(${encodeURI(item.image)})` : "none",
            }}
          ></div>
          <div className="flex flex-col gap-4">
            <span className="text-3xl font-bold">
              <Markdown>{`# ${item.title}`}</Markdown>
            </span>
            <hr />
          </div>
          <span className="text-2xl text-zinc-700 dark:text-zinc-300">
            {
              item.content ? (
                <Markdown>{item.content}</Markdown>
              ) : (
                <Markdown>{item.description}</Markdown>
              )
            }
          </span>
        </div>
      ))}
    </div>
  );
}
