import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const projects = await prisma.projects.findMany({
    select: {
      id: true,
      demo: true,
      slug: true,
      head: true,
      status: true,
      title: true,
      years: true,
      role: true,
      description: true,
      image: true,
      users: {
        select: { username: true },
      },
      project_partners: {
        select: { name: true },
      },
      project_linkedin_partners: {
        select: { url: true },
      },
      project_teams: {
        select: { name: true },
      },
      project_linkedin_teams: {
        select: { url: true },
      },
      project_icons: {
        select: { icon_name: true },
      },
    },
    orderBy: {
      id: "asc",
    },
  });

  const formatted = projects.map((project) => ({
    demo: project.demo,
    slug: project.slug,
    head: project.head,
    status: project.status,
    title: project.title,
    years: project.years,
    partners: project.project_partners.map((p) => p.name).filter(Boolean),
    role: project.role,
    team: project.project_teams.map((t) => t.name).filter(Boolean),
    linkedinTeams: project.project_linkedin_teams.map((l) => l.url).filter(Boolean),
    linkedinPartners: project.project_linkedin_partners.map((l) => l.url).filter(Boolean),
    description: project.description,
    image: project.image,
    icons: project.project_icons.map((icon) => icon.icon_name).filter(Boolean),
  }));

  return NextResponse.json(formatted);
}
