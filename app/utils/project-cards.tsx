import { iconMap } from "@/app/utils/projects/projectIcons";

export interface ProjectCard {
  demo?: string | null;
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
  iconNames: string[];
  icons: React.ReactNode[];
}

export async function getProjectCards(): Promise<ProjectCard[]> {
  type RawProjectCard = Omit<ProjectCard, "icons"> & {
    icons: string[];
  };

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/projects`, {
    cache: "no-store", // <- jika ingin 100% fresh setiap SSR
  });

  if (!res.ok) throw new Error("Failed to fetch project cards");

  const rawData: RawProjectCard[] = await res.json();

  const projectCards: ProjectCard[] = rawData.map((item) => ({
    ...item,
    iconNames: item.icons, // simpan string-nya juga
    icons: item.icons.map((name: string) => iconMap[name] ?? null).filter(Boolean),
  }));

  return projectCards;
}
