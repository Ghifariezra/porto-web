import { RiJavascriptFill, RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiVite, SiLooker, SiPandas, SiDbt, SiApacheairflow, SiNestjs, SiSwagger, SiPrisma, SiJsonwebtokens } from "react-icons/si";
import { FaReact, FaPython, FaGithub, FaRegSnowflake, FaDocker } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";

export interface ProjectCard {
  demo?: string  | null;
  slug: string;
  head?: string;
  status: string;
  title: string;
  years: string;
  partners?: string[] | null;
  role?: string | null;
  team?: string[] | null;
  linkedinTeams?: string[] | null;
  linkedinPartners?: string[] | null;
  description: string;
  image: string;
  icons: React.ReactNode[];
}

const yearNow = new Date().getFullYear();

const icon = {
  jsonwebtoken: <SiJsonwebtokens className="w-6 h-6" />,
  prisma: <SiPrisma className="w-6 h-6" />,
  swagger: <SiSwagger className="w-6 h-6" />,
  nestjs: <SiNestjs className="w-6 h-6" />,
  typescript: <BiLogoTypescript className="w-6 h-6" />,
  react: <FaReact className="w-6 h-6" />,
  tailwind: <RiTailwindCssFill className="w-6 h-6" />,
  nextjs: <RiNextjsFill className="w-6 h-6" />,
  javascript: <RiJavascriptFill className="w-6 h-6" />,
  vite: <SiVite className="w-6 h-6" />,
  python: <FaPython className="w-6 h-6" />,
  postgresql: <BiLogoPostgresql className="w-6 h-6" />,
  looker: <SiLooker className="w-6 h-6" />,
  github: <FaGithub className="w-6 h-6" />,
  pandas: <SiPandas className="w-6 h-6" />,
  snowflake: <FaRegSnowflake className="w-6 h-6" />,
  dbt: <SiDbt className="w-6 h-6" />,
  airflow: <SiApacheairflow className="w-6 h-6" />,
  docker: <FaDocker className="w-6 h-6" />,
};

export const projectCards: ProjectCard[] = [
  {
    demo: "https://kapita-konsul-sinergi.vercel.app/",
    slug: "k2s",
    head: "Kapita Konsul Sinergi – Company Profile Website",
    status: "Collaborative",
    title: "Company Website",
    years: `${yearNow}`,
    partners: ["Muhammad Fadli Syukur"],
    role: "UI/UX Designer",
    linkedinPartners: ["https://www.linkedin.com/in/muhammadfadlisyukur/"],
    description:
      "A professional company website for PT. Kapita Konsul Sinergi, designed to highlight their consulting services in engineering, K3, and environmental certifications. Features include service overviews, team introduction, consultation call-to-action, and a clean, responsive layout. Built collaboratively using modern frontend technologies to support business growth and credibility.",
    image: "/projects/k2s.png",
    icons: [icon.typescript, icon.react, icon.tailwind, icon.nextjs],
  },
  {
    demo: "https://nestjs-news-api-production.up.railway.app/",
    slug: "news-api",
    head: "NestJS News API",
    status: "Personal",
    title: "RESTful News API",
    years: `${yearNow}`,
    partners: null,
    role: null,
    team: null,
    linkedinTeams: null,
    linkedinPartners: null,
    description:
      "A secure RESTful API built with NestJS for fetching categorized news articles. Includes user authentication with JWT, Prisma ORM integration, PostgreSQL, and Swagger documentation. Designed as a backend-only service to power frontend clients or mobile apps with protected access to news data.",
    image: "/projects/news-api.png",
    icons: [icon.jsonwebtoken, icon.typescript, icon.nestjs, icon.postgresql, icon.swagger, icon.prisma],
  },
  {
    demo: "https://ghifariezraramadhan.netlify.app/",
    slug: "porto",
    head: "Personal Portfolio Website – Showcasing Tech Generalist Skills",
    status: "Pesonal",
    title: "Portofolio Web",
    years: `${yearNow}`,
    partners: null,
    role: null,
    team: null,
    linkedinTeams: null,
    linkedinPartners: null,
    description:
      "A personal portfolio website showcasing your professional profile as a Tech Generalist with a minimalist and responsive design. Features intuitive navigation, contact information, tech stack display, and 3D avatar. Built using modern web technologies to reflect your skills and experience in web development.",
    image: "/projects/porto1.0.png",
    icons: [icon.javascript, icon.tailwind, icon.react, icon.vite],
  },
  {
    demo: null,
    slug: "etl",
    head: "OLTP Data Pipeline with ETL & Visualization",
    status: "Collaborative",
    title: "Extract, Transform, Load",
    years: `${yearNow - 1}`,
    partners: [""],
    role: "",
    team: ["Fine Oktafiani", "Giovani Govert"],
    linkedinTeams: ["https://www.linkedin.com/in/fineoktafiani/", "https://www.linkedin.com/in/giovanni-govert/"],
    linkedinPartners: [""],
    description:
      "A data pipeline implementing the Extract-Transform-Load (ETL) process to migrate data from an OLTP system to a Data Warehouse. Built using Python and PostgreSQL, the pipeline cleans, transforms, and loads data to enable efficient analysis. Includes interactive visualizations to support data-driven insights and reporting.",
    image: "/projects/ETL.png",
    icons: [icon.python, icon.postgresql, icon.looker],
  },
  {
    demo: null,
    slug: "elt",
    head: "ELT Pipeline for Northwind: Snowflake, dbt & Looker Studio",
    status: "Collaborative",
    title: "Extract, Load, Transform",
    years: `${yearNow - 1}`,
    partners: [""],
    role: "",
    team: ["Fine Oktafiani", "Giovani Govert"],
    linkedinTeams: ["https://www.linkedin.com/in/fineoktafiani/", "https://www.linkedin.com/in/giovanni-govert/"],
    linkedinPartners: [""],
    description:
      "A collaborative ELT project for building a modern data warehouse using the Northwind dataset sourced from GitHub CSVs. The pipeline extracts data, loads it into Snowflake, and transforms it using dbt to create curated data marts. Final insights are visualized in Looker Studio, enabling business analysis such as top-performing employees, supplier revenue, and product category trends. Tools used include Python, dbt, Snowflake, and Looker Studio.",
    image: "/projects/ELT.png",
    icons: [icon.github, icon.pandas, icon.snowflake, icon.dbt, icon.looker],
  },
  {
    demo: null,
    slug: "batch-processing",
    head: "Orchestrated Batch ELT Pipeline Using Airflow & dbt",
    status: "Collaborative",
    title: "Batch Processing",
    years: `${yearNow - 1}`,
    partners: [""],
    role: "",
    team: ["Fine Oktafiani", "Giovani Govert"],
    linkedinTeams: ["https://www.linkedin.com/in/fineoktafiani/", "https://www.linkedin.com/in/giovanni-govert/"],
    linkedinPartners: [""],
    description:
      "A collaborative ELT batch processing pipeline that automates daily data workflows using Apache Airflow. The system extracts data, loads it into Snowflake, and transforms it with dbt to populate a data mart for analytics. Task dependencies are managed using Airflow DAGs with scheduled runs at 12 PM. The entire pipeline is containerized with Docker and utilizes PostgreSQL for intermediate storage. Final results are visualized using Looker Studio to support business decision-making. This project focuses on scalability, automation, and maintainability using modern cloud-native tools.",
    image: "/projects/batch-processing.jpg",
    icons: [icon.postgresql, icon.docker, icon.airflow, icon.pandas, icon.snowflake, icon.dbt, icon.looker],
  },
];
