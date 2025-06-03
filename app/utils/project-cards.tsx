import { RiJavascriptFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiLooker } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiPandas } from "react-icons/si";
import { FaRegSnowflake } from "react-icons/fa";
import { SiDbt } from "react-icons/si";
import { SiApacheairflow } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";

interface ProjectCards {
  slug: string;
  head?: string;
  status: string;
  title: string;
  years: string;
  partners?: string;
  role?: string;
  team?: Array<string>;
  linkedinTeams?: Array<string>;
  linkedinPartners?: string;
  description: string;
  image: string;
  icons: Array<React.ReactNode>;
}

const yearNow = new Date().getFullYear();

export const projectCards: ProjectCards[] = [
  {
    slug: "k2s",
    head: "Kapita Konsul Sinergi – Company Profile Website",
    status: "Collaborative",
    title: "Company Website",
    years: (yearNow - 0).toString(),
    partners: "Muhammad Fadli Syukur",
    role: "UI/UX Designer",
    linkedinPartners: "https://www.linkedin.com/in/muhammadfadlisyukur/",
    description:
      "A professional company website for PT. Kapita Konsul Sinergi, designed to highlight their consulting services in engineering, K3, and environmental certifications. Features include service overviews, team introduction, consultation call-to-action, and a clean, responsive layout. Built collaboratively using modern frontend technologies to support business growth and credibility.",
    image: "/projects/k2s.png",
    icons: [<BiLogoTypescript className="w-6 h-6" key={"icon"} />, <FaReact className="w-6 h-6" key={"icon"} />, <RiTailwindCssFill className="w-6 h-6" key={"icon"} />, <RiNextjsFill className="w-6 h-6" key={"icon"} />],
  },
  {
    slug: "porto",
    head: "Personal Portfolio Website – Showcasing Tech Generalist Skills",
    status: "Pesonal",
    title: "Portofolio Web",
    years: (yearNow - 0).toString(),
    description:
      "A personal portfolio website showcasing your professional profile as a Tech Generalist with a minimalist and responsive design. Features intuitive navigation, contact information, tech stack display, and 3D avatar. Built using modern web technologies to reflect your skills and experience in web development.",
    image: "/projects/porto1.0.png",
    icons: [<RiJavascriptFill className="w-6 h-6" key={"icon"} />, <RiTailwindCssFill className="w-6 h-6" key={"icon"} />, <FaReact className="w-6 h-6" key={"icon"} />, <SiVite className="w-6 h-6" key={"icon"} />],
  },
  {
    slug: "etl",
    head: "OLTP Data Pipeline with ETL & Visualization",
    status: "Collaborative",
    title: "Extract, Transform, Load",
    years: (yearNow - 1).toString(),
    partners: "",
    role: "",
    team: ["Fine Oktafiani", "Giovani Govert"],
    linkedinTeams: ["https://www.linkedin.com/in/fineoktafiani/", "https://www.linkedin.com/in/giovanni-govert/"],
    linkedinPartners: "",
    description:
      "A data pipeline implementing the Extract-Transform-Load (ETL) process to migrate data from an OLTP system to a Data Warehouse. Built using Python and PostgreSQL, the pipeline cleans, transforms, and loads data to enable efficient analysis. Includes interactive visualizations to support data-driven insights and reporting.",
    image: "/projects/ETL.png",
    icons: [<FaPython className="w-6 h-6" key={"icon"} />, <BiLogoPostgresql className="w-6 h-6" key={"icon"} />, <SiLooker className="w-6 h-6" key={"icon"} />],
  },
  {
    slug: "elt",
    head: "ELT Pipeline for Northwind: Snowflake, dbt & Looker Studio",
    status: "Collaborative",
    title: "Extract, Load, Transform",
    years: (yearNow - 1).toString(),
    partners: "",
    role: "",
    team: ["Fine Oktafiani", "Giovani Govert"],
    linkedinTeams: ["https://www.linkedin.com/in/fineoktafiani/", "https://www.linkedin.com/in/giovanni-govert/"],
    linkedinPartners: "",
    description:
      "A collaborative ELT project for building a modern data warehouse using the Northwind dataset sourced from GitHub CSVs. The pipeline extracts data, loads it into Snowflake, and transforms it using dbt to create curated data marts. Final insights are visualized in Looker Studio, enabling business analysis such as top-performing employees, supplier revenue, and product category trends. Tools used include Python, dbt, Snowflake, and Looker Studio.",
    image: "/projects/ELT.png",
    icons: [
      <FaGithub className="w-6 h-6" key={"icon"} />,
      <SiPandas className="w-6 h-6" key={"icon"} />,
      <FaRegSnowflake className="w-6 h-6" key={"icon"} />,
      <SiDbt className="w-6 h-6" key={"icon"} />,
      <SiLooker className="w-6 h-6" key={"icon"} />,
    ],
  },
  {
    slug: "batch-processing",
    head: "Orchestrated Batch ELT Pipeline Using Airflow & dbt",
    status: "Collaborative",
    title: "Batch Processing",
    years: (yearNow - 1).toString(),
    partners: "",
    role: "",
    team: ["Fine Oktafiani", "Giovani Govert"],
    linkedinTeams: ["https://www.linkedin.com/in/fineoktafiani/", "https://www.linkedin.com/in/giovanni-govert/"],
    linkedinPartners: "",
    description: "A collaborative ELT batch processing pipeline that automates daily data workflows using Apache Airflow. The system extracts data, loads it into Snowflake, and transforms it with dbt to populate a data mart for analytics. Task dependencies are managed using Airflow DAGs with scheduled runs at 12 PM. The entire pipeline is containerized with Docker and utilizes PostgreSQL for intermediate storage. Final results are visualized using Looker Studio to support business decision-making. This project focuses on scalability, automation, and maintainability using modern cloud-native tools.",
    image: "/projects/batch-processing.jpg",
    icons: [
      <BiLogoPostgresql className="w-6 h-6" key={"icon"} />,
      <FaDocker className="w-6 h-6" key={"icon"} />,
      <SiApacheairflow className="w-6 h-6" key={"icon"} />,
      <SiPandas className="w-6 h-6" key={"icon"} />,
      <FaRegSnowflake className="w-6 h-6" key={"icon"} />,
      <SiDbt className="w-6 h-6" key={"icon"} />,
      <SiLooker className="w-6 h-6" key={"icon"} />,
    ],
  },
];
