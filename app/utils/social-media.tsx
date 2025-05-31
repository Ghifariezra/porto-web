import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";

interface SocialMedia {
  name: string;
  href: string;
  style: string;
  icon: React.ReactNode;
}

const styleSocial = "text-sm sm:text-base hover:bg-zinc-200 dark:hover:bg-zinc-700 px-2 py-1 rounded-full";

export const socialItems: SocialMedia[] = [
  { name: "Telegram", href: "https://t.me/GhifariEzR", style: styleSocial, icon: <FaTelegram className="text-xl" /> },
  { name: "Linkedin", href: "https://www.linkedin.com/in/ghifariezraramadhan/", style: styleSocial, icon: <FaLinkedin className="text-xl" /> },
  { name: "Github", href: "https://github.com/Ghifariezra", style: styleSocial, icon: <FaGithub className="text-xl" /> },
];
