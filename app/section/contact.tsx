import { socialItems } from "@/app/utils/social-media";
import Link from "next/link";
import CircleIcon from "@mui/icons-material/Circle";

export default function Contact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:flex gap-4 sm:gap-8 border-t-[1px] justify-between items-center px-4 py-6">
      <button className="p-2 border-[1px] rounded-sm text-sm sm:text-base font-semibold cursor-pointer group">
        <span className="flex justify-center items-center gap-2 group-hover:scale-97">
          <CircleIcon fontSize="small" className="animate-pulse text-green-600 dark:text-green-400" />
          <span>iamezraramadhan@gmail.com</span>
        </span>
      </button>
      <div className="hidden lg:flex gap-4 justify-evenly">
        {socialItems.map((item) => (
          <Link key={item.name} href={item.href} target="_blank" className={item.style}>
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex lg:hidden gap-4 justify-evenly">
        {socialItems.map((item) => (
          <Link key={item.name} href={item.href} target="_blank" className={item.style}>
            {item.icon}
          </Link>
        ))}
      </div>
      <h5 className="text-sm sm:text-base md:col-span-2 justify-self-center lg:justify-self-end">Ghifari Ezra Ramadhan @ {new Date().getFullYear()}</h5>
    </div>
  );
}
