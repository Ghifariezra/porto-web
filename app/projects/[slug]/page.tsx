import { projectCards } from "@/app/utils/project-cards";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Project(
  props: Props
) {
  const params = await props.params;
  const project = projectCards.find((item) => item.slug === params.slug);
  
  if (!project) notFound();

  return (
    <section className="flex flex-col py-8 px-4 gap-8">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="aspect-4/2 w-full min-h-[250px] sm:min-h-[300px] md:max-h-[400px] bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url(${project?.image})` }}></div>
        <div className="w-full flex flex-col justify-between gap-2">
          <h1 className="font-semibold text-[11px] sm:text-base w-fit px-3 py-1 rounded-full border dark:border-none dark:bg-white text-zinc-800">{project.title}</h1>
          <h2 className="text-2xl sm:text-3xl font-bold">{project.head}</h2>
          {project.partners && project.role ? (
            <>
              <div className="flex flex-col gap-2 mt-2">
                <h3 className="text-base font-medium">
                  Partners: <span className="font-semibold">{project.partners}</span>
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
                  <ul className="px-4 list-disc list-inside font-semibold">
                    {project.team.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
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
