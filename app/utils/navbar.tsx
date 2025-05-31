interface Navbar {
  name: string;
  href: string;
  style: string;
}

const styleNavbar = "text-sm sm:text-base group-hover:underline group-hover:underline-offset-8";

export const navbarItems: Navbar[] = [
  { name: "About", href: "/", style: styleNavbar },
  { name: "Projects", href: "/projects", style: styleNavbar },
  { name: "Contact", href: "/contact", style: styleNavbar },
];
