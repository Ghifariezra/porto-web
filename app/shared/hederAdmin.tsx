"use client";
import { usePathname } from "next/navigation";
import NavbarAdmin from "@/app/components/navbarAdmin";

export default function HeaderAdmin() {
  const pathname = usePathname();
  const pathInteraction = ["/admin/dashboard", "/admin/posts", "/admin/posts/new"];
  if (pathInteraction.includes(pathname)) {
    return (
      <header className="sticky z-50 inset-2 flex flex-col justify-between gap-2 items-center p-4 h-fit">
        <NavbarAdmin />
      </header>
    );
  }
}
