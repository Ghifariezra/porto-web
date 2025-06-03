import { projectCards } from "@/app/utils/project-cards";
import NotFound from "@/app/not-found";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Project(props: Props) {
  const params = await props.params;
  const project = projectCards.find((item) => item.slug === params.slug);

  if (!project) return <NotFound />;

  return (
    <section className="flex flex-col px-4 gap-8">
      <div className="flex flex-col lg:flex-row gap-4 bg-white/90 dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-lg rounded-2xl p-4">
        <div className="aspect-4/2 w-full min-h-[250px] sm:min-h-[300px] md:max-h-[400px] bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url(${project?.image})` }}></div>
        <div className="w-full flex flex-col justify-between gap-2">
          <h1 className="font-semibold text-[11px] sm:text-base w-fit px-3 py-1 rounded-full border dark:border-none dark:bg-white text-zinc-800">{project.title}</h1>
          <h2 className="text-2xl sm:text-3xl font-bold">{project.head}</h2>
          {project.partners && project.role && project.linkedinPartners ? (
            <>
              <div className="flex flex-col gap-2 mt-2">
                <h3 className="text-base font-medium">
                  Partners:
                  <ul className="px-4 font-semibold">
                    {project.partners.map((item: string, index: number) => (
                      <li key={index}>
                        {project.linkedinPartners ? (
                          <Link href={project.linkedinPartners[index]} className="flex items-center gap-2" target="_blank">
                            <Avatar sx={{ width: 20, height: 20 }} variant="rounded">
                              <span className="text-sm">{item.charAt(0).toUpperCase()}</span>
                            </Avatar>
                            {item}
                          </Link>
                        ) : (
                          <>
                            <Avatar sx={{ width: 20, height: 20 }} variant="rounded">
                              <span className="text-sm">{item.charAt(0).toUpperCase()}</span>
                            </Avatar>
                            {item}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </h3>
                <h4 className="text-base font-medium">
                  Role: <span className="font-semibold">{project.role}</span>
                </h4>
              </div>
              <hr />
            </>
          ) : project.team && project.linkedinTeams ? (
            <>
              <div className="flex flex-col gap-2 mt-2">
                <h3 className="text-base font-medium">
                  Partners:
                  <ul className="px-4 font-semibold flex flex-col gap-2">
                    {project.team.map((item: string, index: number) => (
                      <li key={index}>
                        {project.linkedinTeams ? (
                          <Link href={project.linkedinTeams[index]} className="flex items-center gap-2" target="_blank">
                            <Avatar sx={{ width: 20, height: 20 }} variant="rounded">
                              <span className="text-sm">{item.charAt(0).toUpperCase()}</span>
                            </Avatar>
                            {item}
                          </Link>
                        ) : (
                          <>
                            <Avatar sx={{ width: 20, height: 20 }} variant="rounded">
                              <span className="text-sm">{item.charAt(0).toUpperCase()}</span>
                            </Avatar>
                            {item}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </h3>
              </div>
              <hr />
            </>
          ) : (
            <hr />
          )}
          <p className="text-sm">{project.description}</p>
        </div>
      </div>
    </section>
  );
}
