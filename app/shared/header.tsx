"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/app/components/navbar";

export default function Header() {
  const pathname = usePathname();
  const pathInteraction = ["/about"];

  if (pathInteraction.includes(pathname)) {
    return (
      <header className="sticky inset-2 z-50 flex flex-col justify-between gap-2 items-center p-4">
        <Navbar />
      </header>
    );
  }

  return (
    <header className="inset-2 z-50 flex flex-col justify-start gap-2 items-center p-4 fixed">
      <Navbar />
    </header>
  );
}
