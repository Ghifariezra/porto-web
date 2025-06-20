import { getProjectCards } from "@/app/utils/project-cards";
import ProjectCards from "@/app/components/projectCards";

export default async function ProjectsPage() {
  const projectCards = await getProjectCards();
  return <ProjectCards projectCards={projectCards} />;
}
