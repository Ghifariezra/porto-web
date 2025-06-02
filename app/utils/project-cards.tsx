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
  status: string;
  title: string;
  years: string;
  description: string;
  image: string;
  icons: Array<React.ReactNode>;
}

const yearNow = new Date().getFullYear();

export const projectCards: ProjectCards[] = [
  {
    status: "Collaborative",
    title: "Company Website",
    years: (yearNow - 0).toString(),
    description:
      "A professional company website for PT. Kapita Konsul Sinergi, designed to highlight their consulting services in engineering, K3, and environmental certifications. Features include service overviews, team introduction, consultation call-to-action, and a clean, responsive layout. Built collaboratively using modern frontend technologies to support business growth and credibility.",
    image: "/projects/k2s.png",
    icons: [<BiLogoTypescript className="w-6 h-6" key={"icon"} />, <FaReact className="w-6 h-6" key={"icon"} />, <RiTailwindCssFill className="w-6 h-6" key={"icon"} />, <RiNextjsFill className="w-6 h-6" key={"icon"} />],
  },
  {
    status: "Pesonal",
    title: "Portofolio Web",
    years: (yearNow - 0).toString(),
    description:
      "A personal portfolio website showcasing your professional profile as a Tech Generalist with a minimalist and responsive design. Features intuitive navigation, contact information, tech stack display, and 3D avatar. Built using modern web technologies to reflect your skills and experience in web development.",
    image: "/projects/porto1.0.png",
    icons: [<RiJavascriptFill className="w-6 h-6" key={"icon"} />, <RiTailwindCssFill className="w-6 h-6" key={"icon"} />, <FaReact className="w-6 h-6" key={"icon"} />, <SiVite className="w-6 h-6" key={"icon"} />],
  },
  {
    status: "Collaborative",
    title: "Extract, Transform, Load",
    years: (yearNow - 1).toString(),
    description:
      "A data pipeline implementing standard Extract-Transform-Load processes for data processing. Utilizes Python for extracting and transforming data from various sources, then loading results into target databases. Includes interactive data visualizations to facilitate analysis and result presentation.",
    image: "/projects/ETL.png",
    icons: [<FaPython className="w-6 h-6" key={"icon"} />, <BiLogoPostgresql className="w-6 h-6" key={"icon"} />, <SiLooker className="w-6 h-6" key={"icon"} />],
  },
  {
    status: "Collaborative",
    title: "Extract, Load, Transform",
    years: (yearNow - 1).toString(),
    description:
      "A modern data pipeline implementing Extract-Load-Transform architecture with GitHub as the data source. The workflow extracts data from GitHub repositories, loads it into a data warehouse, and transforms it using dbt for analytics. Leverages Python and Snowflake for efficient data processing, with final results visualized through Looker Studio for interactive business intelligence.",
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
    status: "Collaborative",
    title: "Batch Processing",
    years: (yearNow - 1).toString(),
    description:
      "A containerized data pipeline solution for handling batch data processes. Utilizes Docker for containerization, PostgreSQL for data storage, and Airflow for workflow orchestration. Features a complete ETL cycle with dbt for data transformation and Looker Studio for visualization. Designed for scalable, maintainable data processing with modern cloud-native tooling.",
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
