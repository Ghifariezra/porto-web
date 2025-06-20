import { getProjectCards } from "@/app/utils/projects/project-cards";
import ProjectCards from "@/app/components/projects/projectCards";

export default async function ProjectsPage() {
  const projectCards = await getProjectCards();
  return <ProjectCards projectCards={projectCards} />;
}
