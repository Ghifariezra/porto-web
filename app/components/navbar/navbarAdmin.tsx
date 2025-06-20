"use client";
import { navbarAdminItems } from "@/app/utils/navbar";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarAdmin() {
  const pathname = usePathname();

  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      const res = await fetch("/api/me");
      const data = await res.json();
      setIsLoggedIn(data.isLoggedIn);
    };
    checkLogin();
  }, []);

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
      <nav className="nav-desk">
        <Link href="/admin/dashboard" className="logo-link">
          Ghifari Ezra Ramadhan
        </Link>
        {/* Toggle */}
        <div className="wrapper-toggle">
          {/* Toggle theme */}
          {mounted && (
            <button aria-label="Toggle theme" onClick={handleThemeChange} className="toggle-theme">
              {isDark ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
            </button>
          )}

          {/* Toggle menu */}
          <button aria-label="Toggle menu" onClick={toggleMenu} className="toggle-menu">
            {isOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="wrapper-menu">
          {navbarAdminItems.map((item) => (
            <li key={item.name} className="menu group">
              <Link href={item.href} className={`${item.style} ${pathname === item.href ? "line-link" : ""}`}>
                {item.name}
              </Link>
            </li>
          ))}
          {isLoggedIn && (
            <li className="menu group">
              <button
                onClick={async () => {
                  await fetch("/api/logout", { method: "GET" }); // Pastikan ini GET ya
                  setIsLoggedIn(false);
                  window.location.reload();
                }}
                className="button-logout"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="mobile-menu" ref={toggleRef}>
          <ul className="wrapper-menu-mobile">
            {navbarAdminItems.map((item) => (
              <li key={item.name} className="menu group">
                <Link href={item.href} className={`${item.style} ${pathname === item.href ? "underline" : ""}`}>
                  {item.name}
                </Link>
              </li>
            ))}
            {isLoggedIn && (
              <li className="menu group">
                <button
                  onClick={async () => {
                    await fetch("/api/logout", { method: "GET" }); // Pastikan ini GET ya
                    setIsLoggedIn(false);
                    window.location.reload();
                  }}
                  className="button-logout"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  );
}
