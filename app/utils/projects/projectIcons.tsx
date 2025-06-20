// utils/project-icons.ts
import { RiJavascriptFill, RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiVite, SiLooker, SiPandas, SiDbt, SiApacheairflow, SiNestjs, SiSwagger, SiPrisma, SiJsonwebtokens } from "react-icons/si";
import { FaReact, FaPython, FaGithub, FaRegSnowflake, FaDocker } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";

import { ReactNode } from "react";

export const iconMap: Record<string, ReactNode> = {
  jsonwebtoken: <SiJsonwebtokens key="jsonwebtoken" className="w-6 h-6" />,
  prisma: <SiPrisma key="prisma" className="w-6 h-6" />,
  swagger: <SiSwagger key="swagger" className="w-6 h-6" />,
  nestjs: <SiNestjs key="nestjs" className="w-6 h-6" />,
  typescript: <BiLogoTypescript key="typescript" className="w-6 h-6" />,
  react: <FaReact key="react" className="w-6 h-6" />,
  tailwind: <RiTailwindCssFill key="tailwind" className="w-6 h-6" />,
  nextjs: <RiNextjsFill key="nextjs" className="w-6 h-6" />,
  javascript: <RiJavascriptFill key="javascript" className="w-6 h-6" />,
  vite: <SiVite key="vite" className="w-6 h-6" />,
  python: <FaPython key="python" className="w-6 h-6" />,
  postgresql: <BiLogoPostgresql key="postgresql" className="w-6 h-6" />,
  looker: <SiLooker key="looker" className="w-6 h-6" />,
  github: <FaGithub key="github" className="w-6 h-6" />,
  pandas: <SiPandas key="pandas" className="w-6 h-6" />,
  snowflake: <FaRegSnowflake key="snowflake" className="w-6 h-6" />,
  dbt: <SiDbt key="dbt" className="w-6 h-6" />,
  airflow: <SiApacheairflow key="airflow" className="w-6 h-6" />,
  docker: <FaDocker key="docker" className="w-6 h-6" />,
};
