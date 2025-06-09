"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Markdown from "react-markdown";
import { useSearchParams } from "next/navigation";

function NewPostPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newPost = {
      title,
      description,
      content,
      date: new Date().toISOString(),
    };

    // Simulasi POST ke API atau simpan di localstorage/mock
    // Kamu bisa ganti URL ini sesuai endpoint backend kamu
    const res = await fetch("/api/blogs/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    if (res.ok) {
      router.push("/admin/posts"); // kembali ke halaman admin
    } else {
      alert("Failed to add new post");
    }
  };

  return (
    <section className="px-4 py-8">
      <div className="max-w-3xl mx-auto p-6 bg-white/90 dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-lg rounded-2xl">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-6">Add New Blog Post</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col">
            <span className="font-semibold">Title</span>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border border-gray-300 rounded p-2" required />
          </label>

          <label className="flex flex-col">
            <span className="font-semibold">Description</span>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="border border-gray-300 rounded p-2 h-48" required />
          </label>

          <label className="flex flex-col">
            <span className="font-semibold">Content (Markdown supported)</span>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} className="border border-gray-300 rounded p-2 h-48" required />
          </label>

          <div className="flex gap-4">
            <button type="submit" className="bg-sky-600 hover:bg-sky-500 text-white font-semibold py-2 px-4 rounded cursor-pointer">
              Save Post
            </button>
            <button type="button" className="bg-gray-300 hover:bg-gray-200 text-black font-semibold py-2 px-4 rounded cursor-pointer" onClick={() => router.push("/admin/posts")}>
              Cancel
            </button>
          </div>
        </form>

        {/* Preview markdown (optional) */}
        {content && (
          <div className="mt-10">
            <h2 className="text-xl font-bold">Live Preview</h2>
            <div className="prose dark:prose-invert max-w-none">
              <Markdown>{content}</Markdown>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
function EditPostPage({ id }: { id: string }) {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`/api/blogs/${id}`);
      const data = await res.json();
      setTitle(data.title);
      setDescription(data.description);
      setContent(data.content);
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newPost = {
      title,
      description,
      content,
      date: new Date().toISOString(),
    };

    const res = await fetch(`/api/blogs/edit/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    if (res.ok) {
      router.push("/admin/posts"); // kembali ke halaman admin
    } else {
      alert("Failed to add new post");
    }
  };

  return (
    <section className="px-4 py-8">
      <div className="max-w-3xl mx-auto p-6 bg-white/90 dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-lg rounded-2xl">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-6">Edit Blog Post</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col">
            <span className="font-semibold">Title</span>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border border-gray-300 rounded p-2" required />
          </label>

          <label className="flex flex-col">
            <span className="font-semibold">Description</span>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="border border-gray-300 rounded p-2 h-48" required />
          </label>

          <label className="flex flex-col">
            <span className="font-semibold">Content (Markdown supported)</span>
            <textarea value={content || ""} onChange={(e) => setContent(e.target.value)} className="border border-gray-300 rounded p-2 h-48" required />
          </label>

          <div className="flex gap-4">
            <button type="submit" className="bg-sky-600 hover:bg-sky-500 text-white font-semibold py-2 px-4 rounded cursor-pointer">
              Save Post
            </button>
            <button type="button" className="bg-gray-300 hover:bg-gray-200 text-black font-semibold py-2 px-4 rounded cursor-pointer" onClick={() => router.push("/admin/posts")}>
              Cancel
            </button>
          </div>
        </form>

        {/* Preview markdown (optional) */}
        {content && (
          <div className="mt-10">
            <h2 className="text-xl font-bold">Live Preview</h2>
            <div className="prose dark:prose-invert max-w-none">
              <Markdown>{content}</Markdown>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

const postsForm = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  if (id) {
    return <EditPostPage id={id} />;
  } else {
    return <NewPostPage />;
  }
};

export default postsForm;
