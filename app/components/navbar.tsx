"use client";
import { navbarItems } from "@/app/utils/navbar";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * A component that renders the navbar with links to all the pages and a theme toggle.
 *
 * @returns The navbar component.
 */
export default function Navbar() {
  const pathname = usePathname();

  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = (resolvedTheme || theme) === "dark";

  const handleThemeChange = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toggleRef.current && !toggleRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <>
      <nav className="flex w-full justify-between items-center p-4 bg-zinc-50/30 backdrop-blur-md rounded-2xl border border-white/10">
        <Link href="/" className="font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">Ghifari Ezra Ramadhan</Link>
        {/* Toggle */}
        <div className="flex justify-between items-center gap-4">
          {/* Toggle theme */}
          {mounted && (
            <button aria-label="Toggle theme" onClick={handleThemeChange} className="flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-700 cursor-pointer">
              {isDark ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
            </button>
          )}

          {/* Toggle menu */}
          <button aria-label="Toggle menu" onClick={toggleMenu} className="sm:hidden flex items-center justify-center w-10 h-10 rounded-full transition-colors dark:hover:bg-sky-800 hover:bg-sky-100 cursor-pointer">
            {isOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden sm:flex justify-between items-center gap-8">
          {navbarItems.map((item) => (
            <li key={item.name} className="font-semibold group">
              <Link href={item.href} className={`${item.style} ${pathname === item.href ? "underline underline-offset-8" : ""}`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden w-full shadow-md py-4 px-6 bg-zinc-50/30 backdrop-blur-md rounded-2xl border border-white/10" ref={toggleRef}>
          <ul className="flex flex-col justify-between items-center gap-4">
            {navbarItems.map((item) => (
              <li key={item.name} className="font-semibold group">
                <Link href={item.href} className={`${item.style} ${pathname === item.href ? "underline" : ""}`}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
