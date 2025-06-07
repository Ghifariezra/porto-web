"use client";

import { useState } from "react";

export default function AuthPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [popupSuccess, setPopupSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log(data);

      if (!res.ok) throw new Error(data.error || "Login failed");
      
      setSuccess("Login successful!");
      setPopupSuccess(true);
      setTimeout(() => {
        setPopupSuccess(false);
        window.location.href = "/admin/dashboard"; // Hard reload, cookie akan terbaca
      }, 3000);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err);
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-4">
      <div className="grid grid-cols-3 justify-center items-center h-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10">
        {/* Parallax Image */}
        <div className="min-h-screen w-full py-8 px-4 hidden md:flex flex-col justify-center items-center bg-[url('/scribble-mask-bg.jpg')] bg-cover bg-center bg-fixed mask-radial mask-radial-from-10% mask-radial-to-100% overflow-hidden">
          <div className="relative flex flex-col justify-center items-center">
            <div className="aspect-video min-h-[250px] sm:min-h-[300px] md:max-h-[400px] bg-[url('/home-light-profile.png')] dark:bg-[url('/home-dark-profile.png')] bg-contain bg-no-repeat bg-center rotate-45 dark:-rotate-45"></div>
          </div>
        </div>

        {popupSuccess && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-zinc-800 dark:bg-zinc-100 px-4 py-2 rounded-full flex items-center justify-center gap-2">
            <span className="text-white dark:text-zinc-800 font-semibold">{success}</span>
          </div>
        )}

        {/* Login Form */}
        <div className="h-screen col-span-3 md:col-span-2 bg-white/90 dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-lg">
          <div className="flex flex-col gap-4 justify-center items-center font-[family-name:var(--font-besley)] w-full p-8 h-full">
            <h1 className="text-2xl font-semibold md:w-1/2 text-center">Login</h1>

            <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
                className="p-3 rounded-md border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="p-3 rounded-md border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
                required
              />

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button type="submit" disabled={loading} className="p-3 rounded-md bg-black text-white hover:bg-zinc-800 transition disabled:opacity-50 cursor-pointer">
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
