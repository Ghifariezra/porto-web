"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/app/components/navbar/navbar";

export default function Header() {
  const pathname = usePathname();

  // Cek path-path spesifik
  const isVisiblePath = ["/about", "/projects", "/blog", "/admin/login", "/blog/read"].includes(pathname || "") || pathname?.startsWith("/projects/");

  return (
    <header className={`${isVisiblePath ? "sticky z-50 inset-2" : "inset-2 z-80 fixed"} flex flex-col justify-between gap-2 items-center p-4 h-fit`}>
      <Navbar />
    </header>
  );
}
