import { socialItems } from "@/app/utils/social-media";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:flex gap-4 sm:gap-8 border-t-[1px] justify-between items-center py-6">
      <h5 className="text-sm sm:text-base justify-self-center lg:justify-self-end">Ghifari Ezra Ramadhan @ {new Date().getFullYear()}</h5>
      <div className="hidden lg:flex gap-4 justify-evenly z-70">
        {socialItems.map((item) => (
          <Link key={item.name} href={item.href} target="_blank" className={item.style}>
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex lg:hidden gap-4 justify-evenly z-70">
        {socialItems.map((item) => (
          <Link key={item.name} href={item.href} target="_blank" className={item.style}>
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
