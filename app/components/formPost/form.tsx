"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import BlogAdd from "@/app/utils/blogs/add";
import BlogUploads from "@/app/utils/blogs/uploads";
import BlogSlug from "@/app/utils/blogs/blogId";
import BlogEditSlug from "@/app/utils/blogs/edit";
import Image from "next/image";
import RichEditor from "@/app/components/richEditor";

interface Post {
  title: string;
  description: string;
  content: string;
  image: string | null;
  date: string;
}

export function NewPostPage() {
  const router = useRouter();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let uploadedImageUrl = imageUrl;

    // Jika ada file baru yang dipilih tapi belum di-upload
    if (imageFile) {
      const res = await BlogUploads(imageFile);
      if (res.ok) {
        const data = await res.json();
        setImageUrl(data.url);
        uploadedImageUrl = data.url;
      } else {
        alert("Image upload failed.");
        return;
      }
    }

    const newPost: Post = {
      title,
      description,
      content,
      image: uploadedImageUrl,
      date: new Date().toISOString(),
    };

    const res = await BlogAdd(newPost);

    if (res.ok) {
      router.push("/admin/posts");
    } else {
      alert("Failed to add new post");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file); // ← hanya simpan filenya
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    console.log(file);
    if (file) {
      setImageFile(file); // ← hanya simpan filenya
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
            <span className="font-semibold">Upload Image (Drag & Drop or Click)</span>
            <input type="file" accept="image/*" ref={fileInputRef} className="hidden" onChange={handleFileChange} />
            <div onClick={handleImageClick} onDragOver={(e) => e.preventDefault()} onDrop={handleDrop} className="border border-dashed border-gray-400 p-6 text-center rounded cursor-pointer hover:bg-gray-50 dark:hover:bg-white/10">
              {imageFile ? (
                <Image src={URL.createObjectURL(imageFile)} alt="Preview" width={800} height={450} className="w-full aspect-video object-contain" unoptimized />
              ) : imageUrl ? (
                <div className="w-full aspect-video bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${encodeURI(imageUrl)})` }} />
              ) : (
                <p className="text-gray-500">Click or drag and drop an image here</p>
              )}
            </div>
          </label>

          <div id="editor">
            <RichEditor content={content} onChange={setContent} />
          </div>

          <div className="flex gap-4">
            <button type="submit" className="bg-sky-600 hover:bg-sky-500 text-white font-semibold py-2 px-4 rounded cursor-pointer">
              Save Post
            </button>
            <button type="button" className="bg-gray-300 hover:bg-gray-200 text-black font-semibold py-2 px-4 rounded cursor-pointer" onClick={() => router.push("/admin/posts")}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
export function EditPostPage({ id }: { id: string }) {
  const router = useRouter();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      const data = await BlogSlug(id);
      setImageUrl(data.image);
      setTitle(data.title);
      setDescription(data.description);
      setContent(data.content);
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newPost: Post = {
      title,
      description,
      content,
      image: imageUrl,
      date: new Date().toISOString(),
    };

    const res = await BlogEditSlug(Number(id), newPost);

    if (res.ok) {
      router.push("/admin/posts"); // kembali ke halaman admin
    } else {
      alert("Failed to add new post");
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const res = await BlogUploads(file);
      if (res.ok) {
        const data = await res.json();
        setImageUrl(data.url);
        alert("Image uploaded successfully!");
      } else {
        alert("Image upload failed.");
      }
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const res = await BlogUploads(file);
      if (res.ok) {
        const data = await res.json();
        setImageUrl(data.url);
        alert("Image uploaded successfully!");
      } else {
        alert("Image upload failed.");
      }
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
            <span className="font-semibold">Upload Image (Drag & Drop or Click)</span>
            <input type="file" accept="image/*" ref={fileInputRef} className="hidden" onChange={handleFileChange} />
            <div onClick={handleImageClick} onDragOver={(e) => e.preventDefault()} onDrop={handleDrop} className="border border-dashed border-gray-400 p-6 text-center rounded cursor-pointer hover:bg-gray-50 dark:hover:bg-white/10">
              {imageUrl ? <div className="w-full aspect-video bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${encodeURI(imageUrl)})` }} /> : <p className="text-gray-500">Click or drag and drop an image here</p>}
            </div>
          </label>

          <div id="editor">
            <RichEditor content={content} onChange={setContent} />
          </div>

          <div className="flex gap-4">
            <button type="submit" className="bg-sky-600 hover:bg-sky-500 text-white font-semibold py-2 px-4 rounded cursor-pointer">
              Save Post
            </button>
            <button type="button" className="bg-gray-300 hover:bg-gray-200 text-black font-semibold py-2 px-4 rounded cursor-pointer" onClick={() => router.push("/admin/posts")}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
