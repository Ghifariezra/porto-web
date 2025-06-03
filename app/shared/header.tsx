"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/app/components/navbar";
import { projectCards } from "@/app/utils/project-cards";

export default function Header() {
  const pathname = usePathname();
  const projects = projectCards.map((item) => `/projects/${item.slug}`);
  const pathInteraction = ["/about", ...projects];

  if (pathInteraction.includes(pathname)) {
    return (
      <header className="sticky z-50 inset-2 flex flex-col justify-between gap-2 items-center p-4 h-fit">
        <Navbar />
      </header>
    );
  }

  return (
    <header className="inset-2 z-80 flex flex-col justify-start gap-2 items-center p-2 fixed h-fit">
      <Navbar />
    </header>
  );
}
