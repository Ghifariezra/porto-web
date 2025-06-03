import { socialItems } from "@/app/utils/social-media";
import Link from "next/link";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";

export default function Contact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:flex gap-4 sm:gap-8 w-full bg-white/90 dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-lg rounded-2xl p-10">
      <div className="flex flex-col gap-4 place-self-center font-[family-name:var(--font-besley)] w-full">
        <h1 className="text-name md:w-1/2 text-center md:text-left">Let&#39;s Connect</h1>
        <h2 className="text-sm md:w-1/2 text-center md:text-left">Please don&#39;t hesitate to reach out to me.</h2>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <h3 className="font-[family-name:var(--font-besley)] font-semibold underline underline-offset-8 text-sm md:text-base text-center md:text-left">Social Media</h3>
        <div className="hidden lg:flex gap-4 w-full justify-center items-center z-70">
          {socialItems.map((item) => (
            <Link key={item.name} href={item.href} target="_blank" className={item.style}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex lg:hidden gap-4 w-full justify-center items-center z-70">
          {socialItems.map((item) => (
            <Link key={item.name} href={item.href} target="_blank" className={item.style}>
              {item.icon}
            </Link>
          ))}
        </div>
        <Link
          href="mailto:iamezraramadhan@gmail.com"
          className="text-sm md:text-base text-center md:text-left p-2 sm:p-4 lg:p-6 border border-zinc-200 dark:border-white/10 rounded-full hover:bg-zinc-200 dark:hover:bg-white/10 hover:text-zinc-800 dark:hover:text-zinc-100 transition duration-300 ease-in-out font-semibold flex items-center gap-2"
        >
          <AlternateEmailRoundedIcon className="text-sm md:text-base" />
          iamezraramadhan@gmail.com
        </Link>
      </div>
    </div>
  );
}
